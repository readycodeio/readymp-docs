---
sidebar_position: 3
---

# World and cells

Oblivion's world is split into areas and cells, and the SDK follows the same split: an entity lives in a cell, and
players get the entities of the cells their game has loaded. Containers, plants and furniture placed in the world are
entities too, so every player sees the same chest emptied and the same plant picked. This page covers how Oblivion's
places map to areas and cells, the world objects the SDK syncs, and how a server mod finds a cell and puts something
in it.

```csharp title="MyMod.Server/Whereabouts.cs"
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using OblivionMp.Sdk.Serverside.Spawners;
using ReadyM.Api.Idents;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class Whereabouts(IEntities entities)
{
    // The cell a player's character stands in, if the server has it.
    public bool TryGetCell(PlayerId player, out Cell cell)
    {
        cell = default;

        if (!entities.TryLookup(player, out MainCharacter main)
            || main.ParentCellKind == ParentCellKind.Unknown
            || !entities.TryGetScope(main, out Area area))
            return false;

        var cellId = main.As<ParentCell>().ToFullCellId(area.AreaId);
        return entities.TryLookup(cellId, out cell);
    }
}
```

## How it works

### Areas and cells

| Oblivion | SDK | Id |
| --- | --- | --- |
| An exterior world space, such as Tamriel | One `Area` | an `AreaId` |
| A square of the exterior grid | A `Cell` in that area | `OblivionCellIds.Exterior(x, y)` |
| An interior, such as a house or a dungeon | An `Area` of its own, with one `Cell` | `OblivionCellIds.Interior` |

A cell is named in full by a `FullCellId`, its area and its cell id together:
`new FullCellId(area.AreaId, OblivionCellIds.Exterior(3, -2))`. The server has a `Cell` from the first time a
player's game loads it, and keeps it after everyone has left, so `entities.TryLookup(fullCellId, out Cell cell)` only
fails for a cell no player has been to. The player whose game runs a cell is its master client, `cell.MasterClient`,
or `PlayerId.Invalid` while nobody is there. [Scopes](../Concepts/scopes.md) and [Identity](../Concepts/identity.md)
explain areas, cells and their ids in general.

### Where an entity is

`ParentCell` says which cell a character, NPC or dropped item is in: `Kind` (`Interior`, `Exterior`, or `Unknown`
before the game has said), and `X` and `Y`, the exterior grid square. Those shapes include it with a prefix, so on
them the members read `ParentCellKind`, `ParentCellX` and `ParentCellY`. `As<ParentCell>()` gives you the mixin, and
on the server `SpawnerCell.ToFullCellId(area)` turns it into a `FullCellId`, as the example does. It throws for an
`Unknown` cell, so check the kind first.

`Position` is in the game's world space, in centimeters, and `Rotation` is the yaw in degrees.

### World objects

| Shape | What it is | Exists when |
| --- | --- | --- |
| `Container` | A chest, barrel, sack or other container, with its contents in `ContainerItems` | The server seeds the world from the game files |
| `Flora` | A plant or other harvestable object | The server seeds the world |
| `Furniture` | A chair, bed or other furniture | The master client loads its cell, or the server seeds the world |

Seeding is done by a server-side mod; see [World seeding](../Advanced/world-seeding.md). Each world object has:

| Member | From | Meaning |
| --- | --- | --- |
| `RefId` | `RefIdMixin` | The reference id the game knows this placed object by. |
| `BaseId` | `BaseIdMixin` | The form it is an instance of: which kind of chest, which plant. |
| `Position`, `Rotation` | `Transform` | Where it is. |
| `IsDisabled` | `Presence` | Whether it is taken out of the world. It starts as the game files have it, and only the server changes it. |
| `IsHarvested`, `HarvestedBy` | `FloraState` | On `Flora` only: whether it has been picked, and by which player. |

Players change world objects through the game: opening a chest, picking a plant. Their game asks the server, and the
server checks the request and applies it, so two players can never take the same item. A seeded cell respawns 72
game hours after it was last filled: items lying there come back, plants grow back, containers that respawn in the
game are refilled, and its spawners reset.

## On the server

Write to a world object like any other shape. This takes a chest out of the world for every player, or puts it back:

```csharp
foreach (var container in entities.Query<Container>())
{
    if (container.RefId == chestRefId)
        container.IsDisabled = hidden;
}
```

To put a new entity in a cell, create it with the cell as its scope and a player as its owner. The owner's game
simulates it, so pass the cell's master client. Give anything the game should treat as a placed object a ref id from
`ServerRefIds`:

```csharp
if (whereabouts.TryGetCell(player, out var cell) && cell.MasterClient != PlayerId.Invalid)
{
    var bench = entities.Create<Furniture>(cell, cell.MasterClient);
    bench.RefId = refIds.Next();
    bench.BaseId = benchForm;
    bench.Position = position;
}
```

Players get the entity while their game has its cell loaded. `ServerRefIds.Next()` hands out ids above every ref id the game itself uses,
starting past the highest one already given out, so they never clash with the game's or with each other.

Positions from the Construction Set or a game file are in the game's older units, with a different axis and angle
convention. `TesUnrealSpace` converts them:

| Member | What it does |
| --- | --- |
| `ToUnrealLocation(tesPosition)` | A position from the game files, as a `Position`. |
| `ToUnrealYawDegrees(tesRotationZRadians)` | A Z rotation from the game files (radians), as a `Rotation`. |
| `ToExteriorCellCoordinate(tesCoordinate)` | The exterior grid square a game file X or Y falls in. |

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM002` | `Create` is called inside a `foreach` over a query. | Collect what you need in the loop and create the entities after it. |
| `READYM017` | Client code assigns a synced value, such as `container.IsDisabled`. | World objects are changed on the server. |

## Reference

* [Area](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md),
  [Cell](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)
* [OblivionCellIds](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.OblivionCellIds.md)
* [ParentCell](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ParentCell.md),
  [ParentCellKind](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ParentCellKind.md)
* [SpawnerCell](../../../api-reference/OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.SpawnerCell.md)
* [Container](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Container.md)
* [Flora](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Flora.md),
  [FloraState](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.FloraState.md)
* [Furniture](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Furniture.md)
* [Presence](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Presence.md)
* [RefIdMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.RefIdMixin.md),
  [BaseIdMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.BaseIdMixin.md)
* [TesUnrealSpace](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.TesUnrealSpace.md)
* [ServerRefIds](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.ServerRefIds.md)
* [IEntities (server)](../../../api-reference/ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.IEntities.md)
