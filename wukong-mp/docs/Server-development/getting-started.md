---
sidebar_position: 1
---

# Getting started

Server-side mods run inside the WukongMP relay server. They can register their own networked components, attach them to existing archetypes, run gameplay systems on the server tick, and handle RPCs sent by clients.

A server-side mod is a .NET class library referencing the server SDK, defining a single class extending [ServerModBase](../../api-reference/ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.ServerModBase). Its assembly is placed directly in the server's [`server_mods/` directory](../Server/mod-management#server-side-mods), a separate location from the client-facing `mods/` folder, where the mod loader picks it up and instantiates the class when the server starts.

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

`RegisterComponents` runs first, before the server's ECS schema is finalized. This is the only place you can register new networked components. `Init` runs afterwards and is where you resolve services, register [systems](systems) and [RPC handlers](custom-rpc), and attach components to archetypes.

:::tip[Learn from a shipping mod]

The [co-op mod](https://github.com/readycodeio/WukongMP-co-op-mod) is built on this SDK and ships with the server. Its `WukongMp.Coop.Serverside` project is a small, complete example of everything on these pages: two systems, one RPC handler, and a shared contract project. The [PvP mod](https://github.com/readycodeio/WukongMP-PvP-mod) is not updated to use server-side features.

:::

## Setting up the project

A server-side mod targets `net10.0`, unlike client-side mods which target `netstandard2.0`. It references the server SDK and the shared WukongMP assemblies, all of which ship in the server package. Use the [mod template](https://github.com/readycodeio/wukongmp-mod-template) to get started with creating a server-side mod.

A typical setup for a fully-featured mod involves **three projects**:

* A shared `netstandard2.0` mod that contains type definitions and RPC contracts.
* A server-side mod, targeting `net10.0`, and referencing the shared mod. 
* A client-side mod, targeting `netstandard2.0`, and referencing the shared mod.

The shared project targets `netstandard2.0` so both of the other two can reference it. In the template it references the SDK assemblies with `Private="false"`, which keeps the `netstandard2.0` builds out of the server mod's output folder, where the `net10.0` builds have to win. That split is why the template carries two dependency folders: `Dependencies/SDK` for the `netstandard2.0` assemblies and `Dependencies/ServerSDK` for the `net10.0` ones.

## Registering components and archetypes

A **networked component** replicates between the server and every connected client. It is declared with `[DeriveINetworkedComponent]` on a `partial struct`, in the shared project, so the server mod and the client mod compile against the same definition. The generator turns each private field into a public property and writes the serialization code:

```csharp title="A networked component (in the shared project)"
using System.Runtime.InteropServices;
using ReadyM.Api.Multiplayer.Generators;

[DeriveINetworkedComponent]
[StructLayout(LayoutKind.Auto)]
public partial struct BountyComponent
{
    private int _kills;
    private float _multiplier;
}
```

Register it in `RegisterComponents`, then attach it to an archetype in `Init`:

```csharp title="Registering a component and attaching it to the global player archetype"
public class MyServerMod : ServerModBase
{
    protected override void RegisterComponents(IComponentRegistry registry)
    {
        registry.RegisterComponent<BountyComponent>();
    }

    protected override void Init()
    {
        var registry = Services.Resolve<IArchetypeRegistry>();

        registry.ModifyArchetype(WukongArchetypes.GlobalPlayerArchetype, archetype =>
        {
            archetype.Add<BountyComponent>();
        });
    }
}
```

A running kill count is persistent, player-scoped data, so it belongs on the **global player entity**: one entity per connected player that lives for the whole session, regardless of which area the player is in. Data that describes the character's presence in the world (position, HP, team) belongs on the main character instead. See [Archetypes and components](archetypes) for what each archetype carries.

## Matching it up on the client

The two halves are symmetric. Whatever the server mod registers and attaches, the client mod registers and attaches the same way, and the values then replicate in both directions. In the client mod's `Initialize`:

```csharp title="The client half of the same component"
protected override void Initialize(IDependencyContainer services)
{
    services.Resolve<IComponentApi>().RegisterComponent<BountyComponent>();
    services.RegisterSingleton<IArchetypeRegistration, BountyRegistration>();
}
```

```csharp title="BountyRegistration.cs"
public class BountyRegistration : IArchetypeRegistration
{
    public void Register(IArchetypeRegistry registry)
    {
        registry.ModifyArchetype(WukongApi.Archetypes.GlobalPlayerArchetype, b => b.Add<BountyComponent>());
    }
}
```

See [Custom components](../Development/APIs/custom-components) for the client side in full.

:::important

The two sides have to agree exactly. Register the same components, in the same order, and attach them to the same archetypes on both sides. Component IDs are positional, assigned in registration order and sent as a byte on the wire, so a mismatch does not fail loudly, it misreads the stream.

The practical rule: keep the component definitions in the shared project, do the registration in one place on each side, and ship the client mod and the server mod together as versions of the same package.

:::

## Local components

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

protected override void Init()
{
    var registry = Services.Resolve<IArchetypeRegistry>();

    registry.ModifyArchetype(WukongArchetypes.MainCharacterArchetype, a => a.Add<CooldownComponent>());
}
```

From there it behaves like any other component: it shows up in `Query`, you read and write it by `ref`, and it lives and dies with its entity. It simply never leaves the server, so it needs no counterpart in the client mod and costs nothing on the wire.

Reach for a local component whenever the client has no business seeing the value: timers, cooldowns, cheat bookkeeping, intermediate state a system rebuilds every tick. Everything the client has to render or react to belongs in a networked component instead, or in an [RPC](custom-rpc) if it is a one-off event rather than state.

:::note

Components are capped at 256 bytes each, local or networked, and the server has a fixed number of component slots. Registering fails loudly if you exceed either.

:::

## Reading and writing entity data

Inside your mod, use [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) (resolved with `Services.Resolve<EcsApi>()`, or injected into your class) to query and modify entities. Every matching entity is visited once per call, with the requested components passed by reference:

```csharp title="Querying entities"
ecsApi.Query<BountyComponent>((ref bounty) =>
{
    bounty.Kills += 1;
});
```

`Query` overloads take up to six component types at once, and only entities carrying all of them are visited. Pairing a component with `MainCharacterComponent` is the usual way to reach player-owned entities:

```csharp title="Querying two components together"
ecsApi.Query<MainCharacterComponent, HpComponent>((ref main, ref hp) =>
{
    if (hp.IsDead)
    {
        logger.LogDebug("Player {PlayerId} is down", main.PlayerId);
    }
});
```

Each overload also comes in a variant that threads a `ref` state value through the callback. Use it when you need to accumulate a result, since it lets the callback stay `static` and avoids allocating a closure on every tick:

```csharp title="Counting with ref state"
var alive = 0;
ecsApi.Query<HpComponent, int>(ref alive, static (ref hp, ref alive) =>
{
    if (!hp.IsDead)
        alive++;
});
```

Writes made from a server mod are authoritative: the SDK marks them as server-authored, so a change your mod makes to an owned component is replicated back to the owning client rather than being overwritten by it.

:::warning[Known issues]

There is a known issue in this version that overwriting data that the client changes every frame, e.g. position, usually does not work.

**This will be addressed in a future update to the SDK.** For now, use RPC for making updates to such components. For example, do not attempt to teleport a player by settings their `TransformComponent.Position` in a query on the server, but rather send an RPC so that the client does teleportation logic.

:::

## Feature status

| Feature | Status |
|---|---|
| Networked components | :white_check_mark: [done](#registering-components-and-archetypes) |
| Local components | :white_check_mark: [done](#local-components) |
| Gameplay systems | :white_check_mark: [done](systems) |
| Server RPC | :white_check_mark: [done](custom-rpc) |
| Higher-level entity API | :soon: planned, see the note in [Archetypes and components](archetypes) |
| Server mod manifests | :soon: not used in 0.3.0 |
