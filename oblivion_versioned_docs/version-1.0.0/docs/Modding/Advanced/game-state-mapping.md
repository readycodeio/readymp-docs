---
sidebar_position: 1
---

# Game-state mapping

A shape holds values, and the game holds its own state. For the SDK's shapes, OblivionMP keeps the two in step for
you: a player's health in `MainCharacter` follows the health the game shows. When your mod declares a shape that
mirrors something in the game, keeping that in step is your job. Mapping is how you do it on the client: you say once
how a value is read out of the game and how it is shown to the game, and then call `Pull` or `Push` wherever your mod
touches the game. The SDK decides which of the two is allowed for each entity, so you never write a value you do not
own.

Most mods never need this. If your shape only holds the mod's own data, such as a gold balance, read and write it as
[Replication](../Concepts/replication.md) describes.

## Example

A mod that shows whether each player carries a lit lantern. The value lives on every player's character and is
replicated, and each player's client owns its own:

```csharp title="MyMod.Common/Lantern.cs"
using OblivionMp.Sdk.Common.Archetypes;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

[ArchetypeMixin(Replication.OwnershipBased)]
[Extends(typeof(MainCharacter))]
public readonly partial struct Lantern
{
    public partial bool IsLit { get; set; }
}
```

`GameLantern` stands in for wherever your mod reads the lantern from in the game. The mapping only needs it to be
some object it can read and write:

```csharp title="MyMod.Client/GameLantern.cs"
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[Service]
public sealed partial class GameLantern
{
    public bool Lit { get; set; }
}
```

The mapping says how `IsLit` and a `GameLantern` correspond:

```csharp title="MyMod.Client/LanternMappings.cs"
using MyMod.Common;
using ReadyM.SDK.Client.Mapping;

namespace MyMod.Client;

public sealed class LanternMappings : IShapeMappings
{
    public void Register(IShapeMappingRegistry registry)
    {
        registry.For<Lantern, GameLantern>()
            .Map(Lantern.Field.IsLit,
                pull: (ref bool lit, GameLantern game) => lit = game.Lit,
                push: (lit, game) => game.Lit = lit);
    }
}
```

Register it from the client entry point. This step is required:

```csharp title="MyMod.Client/Mod.cs"
using ReadyM.Api.DI;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Client.Mapping;

namespace MyMod.Client;

[ModEntry]
public sealed partial class Mod(IDependencyContainer services)
{
    private void Init()
    {
        services.RegisterSingleton<IShapeMappings, LanternMappings>();
    }
}
```

Then pull wherever your mod looks at the game. This service reads the local player's lantern every frame:

```csharp title="MyMod.Client/LanternSync.cs"
using MyMod.Common;
using OblivionMp.Sdk;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Client.Mapping;

namespace MyMod.Client;

[Service]
public sealed partial class LanternSync(IPlayers players, GameLantern lantern)
{
    private void Update()
    {
        if (players.LocalMainCharacter is { } me)
            me.Pull(Lantern.Field.IsLit, lantern);
    }
}
```

Every other client now sees `IsLit` change on this player's character, and can push it into its own copy of the
game with `character.Push(Lantern.Field.IsLit, theirLantern)`.

:::important

Nothing finds an `IShapeMappings` class on its own in 1.0. Register it with
`services.RegisterSingleton<IShapeMappings, YourMappings>()` in your client `[ModEntry]`'s `Init`. The mappings of
every mod are collected once, after every entry point's `Init` has run. One registered later, for example from a
service's `Start`, is never seen, and every `Pull` and `Push` through it returns `false`.

:::

## How it works

### Field tokens

`Pull`, `Push` and `Map` name a value with a token rather than reading it. The generator gives every replicated
shape a nested static class called `Field` with one token per value. A shape that is not replicated has no `Field`
class.

| Token | Type | Names |
| --- | --- | --- |
| `Lantern.Field.IsLit` | `Value<Lantern, bool>` | One value. |
| `Equipment.Field.Items` | `Collection<Equipment, EquipmentItems>` | One collection (a list the shape holds). |
| `Lantern.Field.All` | `Shape<Lantern>` | Every value of the shape at once. |

The SDK's own shapes have tokens too, for example
[`DroppedItem.Field`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.DroppedItem.Field.md).
The same tokens are what an override write takes on the client, see [Replication](../Concepts/replication.md).

### Declaring mappings

`registry.For<TShape, TContext>()` starts the mappings between one shape and one kind of game object, the context.
The context can be any type: a game object, a wrapper of your own, or anything else your mod reads the game through.
Each `Map` call returns the same builder, so you can chain several. There are three kinds:

| Map | Pull handler | Push handler |
| --- | --- | --- |
| `Map(Value<TShape, TValue>, pull, push)` | `(ref TValue value, TContext context)`: set `value` from the game. | `(TValue value, TContext context)`: show `value` to the game. |
| `Map(Collection<TShape, TAccess>, pull, push)` | `(TAccess collection, TContext context)`: fill the collection from the game. | `(TAccess collection, TContext context)`: show the game what the collection holds. |
| `Map(Shape<TShape>, pull, push)` | `(TShape shape, TContext context)`: set several values at once. | `(TShape shape, TContext context)`: show several values at once. |

The push handler is optional. Leave it out when the game owns the value and is never told about it. For a
collection, the handler gets the shape's collection wrapper (for `Equipment.Items` that is
[`EquipmentItems`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.EquipmentItems.md),
with `Count`, `Get`, `Add`, `Clear` and the rest), so what it changes is what the entity holds. Use the whole-shape
form when the values only make sense together, such as a position and a rotation read in one call.

One value can have mappings for several context types. Mapping the same value to the same context type twice keeps
the last one.

### Pulling and pushing

Call these on any shape of the entity, at the moment your mod has the game object in hand:

| Call | What it does |
| --- | --- |
| `shape.Pull(token, context)` | Reads the value out of the game into the shape. |
| `shape.Push(token, context)` | Shows the shape's value to the game. |
| `shape.CanPull(token)` | Whether a pull would be allowed for this entity right now. |
| `shape.CanPush(token)` | Whether a push would be allowed for this entity right now. |

`Pull` and `Push` return `false`, and do nothing, when the direction is not allowed for this entity or nothing maps
that token to that context type. A value token works on any shape of the entity (`me` above is a `MainCharacter`).
A collection or whole-shape token needs the shape it belongs to, so convert first: `me.As<Lantern>()`.

### Which direction is allowed

The shape's [`Replication`](../Concepts/replication.md) decides, per entity, which way values may travel on this
client:

| Replication | `Pull` (game to shape) | `Push` (shape to game) |
| --- | --- | --- |
| `OwnershipBased` | On the client that owns the entity. | On every other client. |
| `ServerAuthoritative` | Never. | Always. |
| `ToEcsOnly` | Always. | Never. |
| `ToGameOnly` | Never. | Always. |
| `Both` | Always. | Always. |

So in the example, a client pulls its own player's lantern and pushes everyone else's. You can call both every frame
for every character and let the SDK skip the ones that do not apply.

An override changes this for one value. When the owning client overrides a value (`me.Override(Lantern.Field.IsLit,
true)`), the next `Push` on that client shows it to the game even though it owns the entity, and until that push
happens, `Pull` leaves the value alone so the game cannot report over it. The push clears the override and the game
drives the value again.

## On the client

Mapping is client only: the server has no game to keep in step with. The types are in the client package, under
`ReadyM.SDK.Client.Mapping`. The tokens themselves are in the shared package, so the shared project can declare
shapes and both halves see the same `Field` classes.

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| READYM017 | A client project assigns a replicated value directly. On a client, a replicated value changes through a mapping or an override, never a setter. | Map it and call `Pull`, or use `Override`. Inside a mapping's own handlers, writing the value is allowed. |
| READYM019 | A client project changes a replicated collection directly (`AddItems`, `ClearItems` and the like). | Map the collection and change it in the pull handler, or override it. |

## Reference

* [IShapeMappings](../../../api-reference/ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappings.md)
* [IShapeMappingRegistry](../../../api-reference/ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingRegistry.md)
* [IShapeMappingScope](../../../api-reference/ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingScope-2.md)
* [Pull](../../../api-reference/ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Pull-2.md)
* [Collected](../../../api-reference/ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Collected-2.md)
* [SyncExtensions](../../../api-reference/ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.SyncExtensions.md)
* [Value](../../../api-reference/ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Value-2.md)
* [Collection](../../../api-reference/ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Collection-2.md)
* [Shape](../../../api-reference/ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Shape-1.md)
* [WriteExtensions](../../../api-reference/ReadyM.SDK.Client/ReadyM.SDK.Client.WriteExtensions.md)
* [IDependencyContainer](../../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IDependencyContainer.md)
