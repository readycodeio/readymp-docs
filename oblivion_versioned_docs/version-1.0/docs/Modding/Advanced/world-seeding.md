---
sidebar_position: 2
---

# World seeding

The items lying around Cyrodiil, the plants you can harvest, the chests and the furniture all start out in the
game's own data. For everyone to see the same world, the server turns them into entities: the first time a cell is
created on the server, it reads that cell's placed objects from the game data and creates one entity for each. This
is called seeding. Later the server respawns what players took, the way the single-player game refills a cell after
a few days. A mod can read where a seeded entity came from, keep it from respawning, and move a cell's respawn
timer.

## Example

A server service that keeps loot from ever coming back. Seeded items are marked persistent, and persistent items
are never respawned:

```csharp title="MyMod.Server/NoLootRespawn.cs"
using OblivionMp.Sdk.Common.Archetypes;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class NoLootRespawn(IEntities entities)
{
    private void Update()
    {
        foreach (var item in entities.Query<DroppedItem>())
        {
            if (item.SeededCount > 0 && !item.IsPersistent)
                item.IsPersistent = true;
        }
    }
}
```

## How it works

### Seeding a cell

Seeding is done by the [seed loader](https://github.com/readycodeio/obmp-seed-loader), a server-only mod that comes
with the server download. Its data is the seed, a snapshot of the game's data, as one `seed.zip` file in the mod's
`server/content/` folder. The mod reads the zip in place and never extracts it. Without the mod, or without the seed,
cells are not seeded.

When a cell entity is created on the server, the seed loader loads that cell's placed objects from the seed. Every
object whose base form is one of the types in `SeededFormTypes.All` becomes an entity in the cell:

| Base form type | Becomes |
| --- | --- |
| `Furniture` | a [`Furniture`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Furniture.md) |
| `Container` | a [`Container`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Container.md), with its contents rolled from the game's container data |
| `Flora` | a [`Flora`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Flora.md), if harvesting it gives an ingredient |
| `Weapon`, `Armor`, `Clothing`, `Misc`, `Ingredient`, `Key`, `Book`, `AlchemyItem`, `Ammo`, `SoulGem`, `SigilStone`, `Apparatus`, `Light` | a [`DroppedItem`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.DroppedItem.md) |

Each seeded entity gets the object's ref id, base id, position, rotation and whether it starts disabled. An object
that already has an entity, found by its ref id, is left alone, so a cell is never seeded twice. Everything else in
the cell (doors, NPCs, statics and the rest) stays the game's.

A seeded `DroppedItem` also records where it came from, in two values it takes from the
[`SeedOrigin`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SeedOrigin.md)
mixin:

| Value | Meaning |
| --- | --- |
| `SeededCount` | How many the game data placed. `0` for an item that was not seeded, such as one a player dropped. |
| `IsPersistent` | Whether the game data marks the object persistent. Persistent items are never respawned. |

One server tick after a cell's entities are created, the cell is marked seeded. The
[`CellSeeding`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.CellSeeding.md)
mixin adds two values to every [`Cell`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md):

| Value | Meaning |
| --- | --- |
| `IsSeeded` | Whether the cell has been seeded. A client that sees it `true` already has every seeded entity of that cell. |
| `RespawnedAtGameHours` | When the cell was seeded or last respawned, in game hours since the game started. |

### Respawning

Every tick, the server looks for seeded cells whose `RespawnedAtGameHours` is 72 or more game hours in the past, and
respawns them, whether or not anyone is there:

* A seeded `DroppedItem` that was picked up or used gets its stack back to `SeededCount` and is enabled again. Items
  with `SeededCount` of `0` and persistent items are skipped.
* Harvested plants grow back.
* Containers whose game data says they respawn are emptied and rolled again.
* The cell's spawn points are reset, so their creatures spawn again.

The cell's `RespawnedAtGameHours` is then set to now. Game hours come from the world's clock, the same one
[`SessionClock`](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionClock.md)`.NowGameHours()`
reads.

## What a mod can change

Change seeding values on the server. On a client they are read only.

| To | Do this |
| --- | --- |
| Keep one item from respawning | Set its `IsPersistent` to `true`, or its `SeededCount` to `0`. |
| Change how many of an item come back | Set its `SeededCount`. |
| Put off a cell's respawn | Set the cell's `RespawnedAtGameHours` to now. The 72 hours start again. |
| Respawn a cell on the next tick | Set its `RespawnedAtGameHours` to 72 or more hours before now. |
| Wait until a cell's world items are all there | Check the cell's `IsSeeded`. Works on the client too. |
| Know whether objects of a form type get an entity | `SeededFormTypes.IsSeeded(formType)`. |

`CellSeeding` extends `Cell`, so its values read straight off a cell. Its setters are methods, as on every mixin that
extends another shape:

```csharp title="MyMod.Server/RespawnHold.cs"
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using OblivionMp.Sdk.Serverside;
using ReadyM.Api.Idents;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class RespawnHold(IEntities entities, SessionClock clock)
{
    // Restarts the cell's 72 game hours, for example while players are still fighting in it.
    public void PutOffRespawn(FullCellId id)
    {
        if (entities.TryLookup(id, out Cell cell) && cell.IsSeeded)
            cell.SetRespawnedAtGameHours(clock.NowGameHours());
    }
}
```

:::note

Not in 1.0 yet: changing the respawn interval for the whole server, or seeding a cell from a mod. The interval is 72
game hours, as in the single-player game.

:::

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| READYM017 | A client project assigns a replicated value, such as `IsPersistent`, directly. | Change seeding values from your server project. |

## Reference

* [CellSeeding](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.CellSeeding.md)
* [SeedOrigin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SeedOrigin.md)
* [SeededFormTypes](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.SeededFormTypes.md)
* [FormType](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)
* [DroppedItem](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.DroppedItem.md)
* [Cell](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)
* [SessionClock](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionClock.md)
