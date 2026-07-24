---
sidebar_position: 1
---

# Getting started

Server-side mods run inside the OblivionMP relay server. They can register their own networked components, attach them to existing archetypes, run gameplay systems on the server tick, and handle RPCs sent by clients.

A server-side mod is a .NET class library referencing the server SDK, defining a single class extending [ServerModBase](../../api-reference/ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.ServerModBase). Its assembly is placed directly in the server's [`server_mods/` directory](../Server/mod-management#server-side-mods) — a separate location from the client-facing `mods/` folder — where the mod loader picks it up and instantiates the class when the server starts.

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

`RegisterComponents` runs first, before the server's ECS schema is finalized — this is the only place you can register new [networked components](../Client/custom-components). `Init` runs afterwards and is where you resolve services, register [systems](systems) and [RPC handlers](custom-rpc), and attach components to archetypes.

## Registering components and archetypes

Just like on the client, a networked component must be declared with `[DeriveINetworkedComponent]` — see [Custom components](../Client/custom-components) for the full pattern. On the server, register it in `RegisterComponents`, then attach it to an archetype in `Init`:

```csharp title="Registering a component and attaching it to the main character archetype"
public class MyServerMod : ServerModBase
{
    protected override void RegisterComponents(IComponentRegistry registry)
    {
        registry.RegisterComponent<WalletComponent>();
    }

    protected override void Init()
    {
        var registry = Services.Resolve<IArchetypeRegistry>();
        var archetypes = Services.Resolve<OblivionArchetypes>();

        registry.ModifyArchetype(archetypes.MainCharacterArchetype, archetype =>
        {
            archetype.Add<WalletComponent>();
        });
    }
}
```

:::important

A networked component's shape and its archetype membership must match between the server mod and every client mod. Ship server-side and client-side mods together as versions of the same package.

:::

## Reading and writing entity data

Inside your mod, use [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) (resolved via `Services.Resolve<EcsApi>()` or injected into your class) to query and modify entities:

```csharp title="Querying entities"
ecsApi.Query<WalletComponent>((ref wallet) =>
{
    wallet.Balance += 1000;
});
```

`Query` overloads support up to six component types at once. See [Custom RPC](custom-rpc) for how a query like this is typically triggered by an incoming client request.

## Feature status

| Feature | Status |
|---|---|
| Networked components | :white_check_mark: [done](#registering-components-and-archetypes) |
| Gameplay systems | :white_check_mark: [done](systems) |
| Server RPC | :white_check_mark: [done](custom-rpc) |
| Mod manifests | :soon: not enforced in 0.1.0 |
