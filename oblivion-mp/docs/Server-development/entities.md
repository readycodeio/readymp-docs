---
sidebar_position: 3
---

# Entities

[Archetypes and components](archetypes) covers what an entity is made of. This page covers making one, finding it again, and reading and writing its data.

Everything here goes through [`EcsApi`](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi), which your mod resolves from DI:

```csharp
public class MySystem(EcsApi ecs) : ModSystemBase
{
    // ...
}
```

## Scopes

A networked entity belongs to a **scope**, which decides who gets told about it and how long it lives. Pick the scope by picking the method:

| Method | Scope |
| --- | --- |
| `CreateGlobalEntity` | everyone, for the whole session |
| `CreateAreaEntity` | players in one area, destroyed with the area |
| `CreateCellEntity` | players with one cell active, destroyed with the cell |
| `CreatePlayerEntity` | one player, destroyed when that player's entity is |
| `CreateEntity` | networked, but in no particular scope |
| `CreateLocalEntity` | nobody, the entity never leaves the server |

Each takes the `ArchetypeId` you kept from registering the archetype:

```csharp
var chest = ecs.CreateCellEntity(Mod.TreasureChestArchetype, areaId, cellId);
```

Scope is not a permission, it is a delivery rule. A cell entity is sent to the players who have that cell active and disappears for them when the cell does, which saves you writing the bookkeeping for that by hand.

### Cells and areas

Oblivion has two levels of granularity, and they are not interchangeable:

* An **area** is a world space, the outer container. Players in the same area can be far apart.
* A **cell** is the loaded chunk a player is actually standing in, identified by a `CellId` within an area or by a `FullCellId` that carries both.

Put an entity in cell scope when it belongs to a place a player has loaded, like an item on a table in an interior. Put it in area scope when it belongs to the world space as a whole, like weather or the time of day.

`CreateCellEntity` takes either form:

```csharp
ecs.CreateCellEntity(archetypeId, fullCellId);
ecs.CreateCellEntity(archetypeId, areaId, cellId);
```

### Local entities

`CreateLocalEntity` makes an entity that is never replicated. Use it for server-side bookkeeping that no client has any business seeing: a timer, a cached lookup, a work queue. It costs nothing on the wire.

Local entities can also carry local components, which are registered with `RegisterLocalComponent`. See [Getting started](getting-started#local-components).

## Ownership

By default a networked entity is owned by the server, which means clients can read it but not write to it. Every `Create*` method has an overload taking a `PlayerId` to hand ownership to a player instead:

```csharp
// the server owns this one
var trap = ecs.CreateAreaEntity(Mod.TrapArchetype, areaId);

// this player's client is allowed to write to this one
var summon = ecs.CreateAreaEntity(Mod.SummonArchetype, areaId, playerId);
```

Give ownership to a player when their client is the authority on the data, for example something driven by their input or their local game state. Keep it on the server for anything a client should not be able to change.

## Finding entities

`Query` runs a callback for every entity carrying the components you name:

```csharp
ecs.Query<MainCharacterComponent, VitalsComponent>((ref character, ref vitals) =>
{
    if (vitals.Health <= 0)
        logger.LogInformation("{Player} died", character.PlayerId);
});
```

The components come in by `ref`, so writing to them writes to the entity.

`QueryWithEntity` is the same thing when the body needs the entity itself, not only its components, typically so it can delete it or reparent it:

```csharp
ecs.QueryWithEntity<LootComponent>((entity, ref loot) =>
{
    if (loot.Emptied)
        ecs.DeleteEntity(entity);
});
```

Pairing your component with a scope component is how you narrow a query. `AreaScopeComponent` for one area, `CellScopeComponent` for one cell, `MainCharacterComponent` for one player's pawn.

## Reading and writing by id

When you already have an entity id, skip the query:

```csharp
if (ecs.HasComponent<WalletComponent>(entityId))
{
    ref var wallet = ref ecs.GetComponentRef<WalletComponent>(entityId);
    wallet.Balance += 100;
}
```

`GetComponentRef<T>` hands you a reference straight into storage, so assigning through it is the write. `TryGetComponent<T>` copies the value out instead, and `SetComponent<T>` writes a whole component back.

## Hierarchies

Entities can be parented, which is mostly useful for lifetime: delete the parent and the children go with it.

```csharp
ecs.SetParent(childId, parentId);

var children = ecs.GetChildren(parentId);
var parent = ecs.GetParent(childId);
```

`DeleteEntity` removes one entity. `DeleteEntityTree` removes an entity and everything parented under it, and returns how many it deleted.

:::warning[Entity access is single threaded]

The ECS is owned by the server's update thread. Query and modify entities from your systems, or from an RPC or event handler, all of which run on that thread. Do not hold a `ref` from `GetComponentRef` across an `await` or hand it to another thread.

:::
