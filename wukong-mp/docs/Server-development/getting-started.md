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
        // register your networked components here
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

A server-side mod targets `net10.0`, unlike client-side mods which target `netstandard2.0`. It references the server SDK and the shared WukongMP assemblies, all of which ship in the server package. Use to the [mod template](https://github.com/readycodeio/wukongmp-mod-template) to get started with creating a server-side mod.

A typical setup for a fully-featured mod involves **three projects**:

* A shared `netstandard2.0` mod that contains type definitions and RPC contracts.
* A server-side mod, targeting `net10.0`, and referencing the shared mod. 
* A client-side mod, targeting `netstandard2.0`, and referencing the shared mod.

## Registering components and archetypes

A networked component is declared with `[DeriveINetworkedComponent]` on a `partial struct`. The generator turns each private field into a public property and writes the serialization code:

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
        var archetypes = new WukongArchetypes();

        registry.ModifyArchetype(archetypes.GlobalPlayerArchetype, archetype =>
        {
            archetype.Add<BountyComponent>();
        });
    }
}
```

A running kill count is persistent, player-scoped data, so it belongs on the **global player entity**: one entity per connected player that lives for the whole session, regardless of which area the player is in. Data that describes the character's presence in the world (position, HP, team) belongs on the main character instead. See [Archetypes and components](archetypes) for what each archetype carries.

:::important

A networked component's shape and its archetype membership must match between the server mod and every client mod. Ship server-side and client-side mods together as versions of the same package.

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
| Gameplay systems | :white_check_mark: [done](systems) |
| Server RPC | :white_check_mark: [done](custom-rpc) |
| Higher-level entity API | :soon: planned, see the note in [Archetypes and components](archetypes) |
| Server mod manifests | :soon: not used in 0.3.0 |
