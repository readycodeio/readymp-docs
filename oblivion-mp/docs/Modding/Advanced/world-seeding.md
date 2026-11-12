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
using OblivionMP.SDK.Common.Archetypes;
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

The seed also carries what belongs to no single cell: the item values trade prices are checked against, the npc
templates inventories are rolled from, and the plugins the seed was taken from, which the loader writes to the world's
[`LoadOrder`](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.LoadOrder.md) at
every start.

When a cell entity is created on the server, the seed loader loads that cell's placed objects from the seed. Every
object whose base form is one of the types in `SeededFormTypes.All` becomes an entity in the cell:

| Base form type | Becomes |
| --- | --- |
| `Furniture` | a [`Furniture`](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Furniture.md) |
| `Container` | a [`Container`](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Container.md), with its contents rolled from the game's container data |
| `Flora` | a [`Flora`](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Flora.md), if harvesting it gives an ingredient |
| `Door` | a [`Door`](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Door.md), with the lock and the open state the game data gives it |
| `Activator` | a [`WorldActivator`](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.WorldActivator.md), the lever or button a script hangs off |
| `Weapon`, `Armor`, `Clothing`, `Misc`, `Ingredient`, `Key`, `Book`, `AlchemyItem`, `Ammo`, `SoulGem`, `SigilStone`, `Apparatus`, `Light` | a [`DroppedItem`](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.DroppedItem.md) |

Each seeded entity gets the object's ref id, base id, position, rotation and whether it starts disabled. An object
that already has an entity, found by its ref id, is left alone, so a cell is never seeded twice. Everything else in
the cell (NPCs, statics and the rest) stays the game's.

A seeded `Door` takes its lock from the game data, in
[`LockState`](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.LockState.md),
and whether it stands open, in
[`Doorway`](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Doorway.md). A load
door, one that moves you between cells, also keeps the ref of the door on the other side, in
[`DoorwaySeedOrigin`](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.DoorwaySeedOrigin.md).
The pair shares one lock: whichever of the two is seeded second copies the lock of the one already there, so a door
unlocked from one side is unlocked from the other.

A seeded `DroppedItem` also records where it came from, in two values it takes from the
[`SeedOrigin`](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.SeedOrigin.md)
mixin:

| Value | Meaning |
| --- | --- |
| `SeededCount` | How many the game data placed. `0` for an item that was not seeded, such as one a player dropped. |
| `IsPersistent` | Whether the game data marks the object persistent. Persistent items are never respawned. |

One server tick after a cell's entities are created, the cell is marked seeded. The
[`CellSeeding`](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.CellSeeding.md)
mixin adds two values to every [`Cell`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md):

| Value | Meaning |
| --- | --- |
| `IsSeeded` | Whether the cell has been seeded. A client that sees it `true` already has every seeded entity of that cell. |
| `RespawnedAtGameHours` | When the cell was seeded or last respawned, in game hours since the game started. |

### Door schedules

The game keeps some doors on a schedule, shop doors above all: open through the day, locked at night. On a server that
schedule belongs to the seed loader, so a shop opens for everyone whether or not a player is near the shopkeeper who
owns it.

The seed lists the doors the game schedules. Once a second the seed loader looks over those of them that exist as
entities and follows the schedule: unlocked at the opening hour, locked at the closing hour, by the clock of the door's
own area. A load door pair goes by the later of its two clocks, because an area nobody is in keeps the time it had when
the last player left it. An area no player has been in yet has no clock of its own, and its doors wait for one.

Each opening and each closing is applied once. A player who picks a scheduled door open keeps it open until the next
closing, and a mod that locks one keeps it locked until the next opening. The change itself is a
[`LockChangeEvent`](../../../api-reference/OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockChangeEvent.md) raised by the
server with a `Source` of `Script`, the same event a mod raises to work a lock of its own.

The hours are the server owner's, in [the seed loader's settings](#seed-loader-settings), and a server that runs its
own door logic turns the schedule off there.

### Respawning

Every tick, the server looks for seeded cells whose `RespawnedAtGameHours` is 72 or more game hours in the past, and
respawns them, whether or not anyone is there:

* A seeded `DroppedItem` that was picked up or used gets its stack back to `SeededCount` and is enabled again. Items
  with `SeededCount` of `0` and persistent items are skipped.
* Harvested plants grow back.
* Containers whose game data says they respawn are emptied and rolled again.
* The cell's spawn points are reset, so their creatures spawn again.

The cell's `RespawnedAtGameHours` is then set to now. Game hours come from the world's clock, the same one
[`SessionClock`](../../../api-reference/OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionClock.md)`.NowGameHours()`
reads.

## The seed loader's settings {#seed-loader-settings}

The seed loader reads `config.json` from its own `server/` folder at every start:

```json title="mods/OblivionMp.SeedLoader/server/config.json"
{
  "DoorSchedule": {
    "Enabled": true,
    "OpenHour": 10,
    "CloseHour": 22
  }
}
```

| Setting | Default | Purpose |
| --- | --- | --- |
| `DoorSchedule:Enabled` | `true` | `false` turns the schedule off and leaves every door as the game data seeded it, for a server that runs its own door logic. |
| `DoorSchedule:OpenHour` | `10` | The hour the scheduled doors unlock, 0 to 23. |
| `DoorSchedule:CloseHour` | `22` | The hour they lock, 0 to 23. A closing hour before the opening hour is a schedule that runs across midnight. |

The two hours have to differ, and both have to be an hour of the day. Anything else turns the schedule off for that
run, with a warning in the server log. Edit the file and restart the server, as with [any mod's
config](../../Server/mod-management.md#configuring-mods).

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
using OblivionMP.SDK.Common.Archetypes.Mixins;
using OblivionMP.SDK.Serverside;
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

Not in 1.1.0 yet: changing the respawn interval for the whole server, or seeding a cell from a mod. The interval is 72
game hours, as in the single-player game.

:::

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| READYM017 | A client project assigns a replicated value, such as `IsPersistent`, directly. | Change seeding values from your server project. |

## Reference

* [CellSeeding](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.CellSeeding.md)
* [SeedOrigin](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.SeedOrigin.md)
* [DoorwaySeedOrigin](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.DoorwaySeedOrigin.md)
* [LockState](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.LockState.md)
* [Doorway](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Doorway.md)
* [LoadOrder](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.LoadOrder.md)
* [LockChangeEvent](../../../api-reference/OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockChangeEvent.md)
* [Door](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Door.md)
* [WorldActivator](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.WorldActivator.md)
* [SeededFormTypes](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.SeededFormTypes.md)
* [FormType](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)
* [DroppedItem](../../../api-reference/OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.DroppedItem.md)
* [Cell](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)
* [SessionClock](../../../api-reference/OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionClock.md)
