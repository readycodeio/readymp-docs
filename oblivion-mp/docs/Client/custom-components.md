---
sidebar_position: 3
---

# Custom components

The OblivionMP SDK lets you attach your own **networked components** to entities. A networked component is a piece of data, such as a wallet balance, a profession or a cooldown, that the SDK keeps synchronized between the server and every client that can see the entity.

## Defining a component

A networked component is a [partial](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods) struct decorated with `[DeriveINetworkedComponent]`. Declare the data as **private fields**; the SDK generates a public property for each one, along with the change tracking and delta serialization needed to replicate it.

```csharp title="A minimal networked component"
using ReadyM.Api.Mapping.Tags;
using ReadyM.Api.Multiplayer.Generators;
using System.Runtime.InteropServices;

[DeriveINetworkedComponent]
[StructLayout(LayoutKind.Auto)]
public partial struct WalletComponent : IOwnershipBased
{
    private int _balance;
}
```

Each private field produces a matching public property, so `_balance` becomes `Balance`. Assigning to that property marks the component as changed, so the SDK knows to replicate it on the next tick:

```csharp
ref var wallet = ref player.GetGlobal<WalletComponent>();
wallet.Balance += 500;
```

Fields may be primitive types, or structs that are themselves serializable. See [Custom RPC](custom-rpc#complex-data-types) for the rules on serializable payloads.

## Registering a component

Before a component can be attached to entities, register it in your mod's `RegisterServices` method and add it to the archetypes that should carry it.

```csharp title="Registering the component"
protected override void RegisterServices(IDependencyContainer services)
{
    services.Resolve<IComponentApi>().RegisterComponent<WalletComponent>();

    RegisterArchetypes(registry =>
    {
        registry.ModifyArchetype(SDK.Archetypes.GlobalPlayerArchetype, b => b.Add<WalletComponent>());
    });
}
```

`RegisterComponent<T>` declares the type to the networking layer. `RegisterArchetypes` takes a callback that the SDK runs once while it builds the ECS world, which is where the archetype change belongs. [`SDK.Archetypes`](../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.SDK.Archetypes) names the built-in archetypes; a wallet is persistent, player-scoped data, so it goes on the global player entity.

:::note[Changed in 0.2.0]

This used to need a separate class implementing `IArchetypeRegistration`, registered in DI. That interface is internal now; use `RegisterArchetypes` and delete the class.

:::

Read components on the global player entity with `GetGlobal<T>()`, and those on the character's world pawn (position, vitals, equipment) with `Get<T>()`. Whichever archetype you pick, it **must** be the same one the server mod uses.

:::important

Component registration must be identical on every participant. Because all clients (and the server, for server-authoritative components) run the same synchronized mod, this happens automatically, but if you change a component's fields, all participants must run the updated mod.

:::

## Ownership

Every networked entity has an **owner**, usually the player whose character it is. The `IOwnershipBased` tag on a component means that **only the owner's changes are replicated**. If a non-owning client writes to another player's `WalletComponent`, the change stays local and is never propagated: each player is authoritative over the components they own.

```csharp
// works: I own my character, so this replicates to everyone
if (SDK.Sync.LocalPlayer is { } player)
    player.GetGlobal<WalletComponent>().Balance += 500;
```

The server can override an owned component authoritatively, for example to award gold that a client should not be able to grant itself. Such server-authored changes are replicated back to the owner and take priority over the owner's local value. See [server-side development](../Server-development/getting-started) for how to write server-authoritative logic.
