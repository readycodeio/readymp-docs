---
sidebar_position: 1
---

# Getting started

Server-side mods run inside the OblivionMP relay server. They can register their own networked components, attach them to existing archetypes, create entities, run gameplay systems on the server tick, react to server events, and handle RPCs sent by clients.

A server-side mod is a .NET class library referencing the server SDK, defining a single class extending [ServerModBase](../../api-reference/ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.ServerModBase). Its assemblies go in the [`server/` folder of your mod](../Server/mod-management#server-side-mods), alongside the `client/` folder and the manifest, where the server picks them up and instantiates the class on startup.

:::tip[Start from the template]

The official [OblivionMP mod template](https://github.com/readycodeio/oblivionmp-mod-template) already wires up a server project next to its client and shared projects, with a working example and a packaging script. Clone it and follow the [README](https://github.com/readycodeio/oblivionmp-mod-template/blob/main/README.md) rather than setting the references up by hand.

:::

```csharp title="Minimal server mod class"
using ReadyM.Relay.Server.Sdk;
using ReadyM.Relay.Server.Sdk.Ecs.Components;

public class MyServerMod : ServerModBase
{
    protected override void RegisterComponents(IComponentRegistry registry)
    {
        // register your custom components here
    }

    protected override void Init()
    {
        // register systems, RPC handlers, and modify archetypes here
    }
}
```

`RegisterComponents` runs first, before the server's ECS schema is finalized. This is the only place you can register new networked components. `Init` runs afterwards and is where you resolve services, register [systems](systems), [event handlers](server-events) and [RPC handlers](custom-rpc), and attach components to archetypes.

## Setting up the project

A server-side mod targets `net10.0`, the same as the client half. It references the server SDK and the shared OblivionMP assemblies, all of which ship in the server package.

:::note

Server mods run on CoreCLR rather than inside the AOT-compiled server binary, so the machine hosting the server needs the .NET 10 runtime installed. See [Requirements](../Server/installation).

:::

A typical setup for a fully-featured mod involves **three projects**:

* A shared project that contains type definitions and RPC contracts.
* A server-side mod, referencing the shared project.
* A client-side mod, referencing the shared project.

The template ships a `Dependencies/` folder holding the SDK assemblies each side compiles against: `Client/` for what the game provides, `Server/` for what the relay server provides. The projects reference them with `Private=false`, so they are never copied into your mod output.

## Registering components and archetypes {#registering-components-and-archetypes}

A **networked component** replicates between the server and every connected client. It is declared with `[DeriveINetworkedComponent]` on a `partial struct`, in the shared project, so the server mod and the client mod compile against the same definition. The generator turns each private field into a public property and writes the serialization code:

```csharp title="A networked component (in the shared project)"
using System.Runtime.InteropServices;
using ReadyM.Api.Multiplayer.Generators;

[DeriveINetworkedComponent]
[StructLayout(LayoutKind.Auto)]
public partial struct WalletComponent
{
    private int _balance;
}
```

Register it in `RegisterComponents`, then attach it to an archetype in `Init`:

```csharp title="Registering a component and attaching it to the global player archetype"
public class MyServerMod : ServerModBase
{
    protected override void RegisterComponents(IComponentRegistry registry)
    {
        registry.RegisterComponent<WalletComponent>();
    }

    protected override void Init()
    {
        var archetypes = Services.Resolve<OblivionArchetypes>();

        RegisterArchetypes(registry =>
        {
            registry.ModifyArchetype(archetypes.GlobalPlayerArchetype, archetype =>
            {
                archetype.Add<WalletComponent>();
            });
        });
    }
}
```

A wallet is persistent, player-scoped data, so it belongs on the **global player entity**: one entity per connected player that lives for the whole session, regardless of which area or cell the player is in. Data that describes the character's presence in the world (position, vitals, equipment) belongs on the main character instead. See [Archetypes and components](archetypes) for what each archetype carries.

:::note[Changed in 0.2.0]

This used to need a separate class implementing `IArchetypeRegistration`, registered in DI. That interface is internal now; use `RegisterArchetypes` and delete the class.

:::

## Matching it up on the client

The two halves are symmetric. Whatever the server mod registers and attaches, the client mod registers and attaches the same way, and the values then replicate in both directions. In the client mod's `RegisterServices`:

```csharp title="The client half of the same component"
protected override void RegisterServices(IDependencyContainer services)
{
    services.Resolve<IComponentApi>().RegisterComponent<WalletComponent>();

    RegisterArchetypes(registry =>
    {
        registry.ModifyArchetype(SDK.Archetypes.GlobalPlayerArchetype, b => b.Add<WalletComponent>());
    });
}
```

See [Custom components](../Client/custom-components) for the client side in full.

:::important

The two sides have to agree exactly. Register the same components, in the same order, and attach them to the same archetypes on both sides. Component IDs are positional, assigned in registration order and sent as a byte on the wire, so a mismatch does not fail with an error, it misreads the stream.

The practical rule: keep the component definitions in the shared project, do the registration in one place on each side, and ship the client mod and the server mod together as one package.

:::

## Local components {#local-components}

A **local component** is server-side state hung off an entity, with no replication attached. It is a plain `struct` implementing `IComponent`:

```csharp title="A local component"
public struct CooldownComponent : IComponent
{
    public float RemainingSeconds;
}
```

Register it with `RegisterLocalComponent` instead of `RegisterComponent`, and attach it to an archetype exactly the same way:

```csharp title="Registering a local component"
protected override void RegisterComponents(IComponentRegistry registry)
{
    registry.RegisterLocalComponent<CooldownComponent>();
}
```

From there it behaves like any other component: it shows up in `Query`, you read and write it by `ref`, and it lives and dies with its entity. It simply never leaves the server, so it needs no counterpart in the client mod and costs nothing on the wire.

Reach for a local component whenever the client has no business seeing the value: timers, cooldowns, moderation bookkeeping, intermediate state a system rebuilds every tick. Everything the client has to render or react to belongs in a networked component instead, or in an [RPC](custom-rpc) if it is a one-off event rather than state.

:::note

Components are capped at 256 bytes each, local or networked, and the server has a fixed number of component slots. Registering fails if you exceed either.

:::

## Config files

A mod can ship JSON config files and read them into your own classes with one call. `RegisterConfig<T>` is available on both mod base classes, so the client and server halves use it the same way:

```csharp
protected override void Init()
{
    RegisterConfig<MyConfig>();
}
```

This reads `config.json` from the mod's folder and registers the result as a singleton. See [Mod config files](../Client/mod-config) for the full picture, including why server-only settings belong in the `server/` half.

## Reading and writing entity data

Inside your mod, use [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) (resolved with `Services.Resolve<EcsApi>()`, or injected into your class) to query and modify entities:

```csharp title="Querying entities"
ecsApi.Query<WalletComponent>((ref wallet) =>
{
    wallet.Balance += 1000;
});
```

`Query` overloads take up to six component types at once, and only entities carrying all of them are visited. Creating entities, narrowing queries, ownership and hierarchies are all covered in [Entities](entities).

Writes made from a server mod are authoritative: the SDK marks them as server-authored, so a change your mod makes to an owned component is replicated back to the owning client rather than being overwritten by it.

:::info[Forcing a value change]

There is a known issue where overwriting data that the client changes every frame, for example position, usually does not work due to the client and the server racing each other over the network.

While a robust solution for this is being implemented, for now you can use an **experimental "NotifyChanged" API**:

```csharp
ecs.QueryWithEntity<TransformComponent>((ref transform, id) =>
{
    transform.Position = ...;
    transform.PositionNotifyChanged(id);
});
```

This forces the client who owns the `TransformComponent` to apply this server-authored update before sending any of their own position.

:::
