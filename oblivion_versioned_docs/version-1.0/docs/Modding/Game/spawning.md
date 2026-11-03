---
sidebar_position: 4
---

# Spawning

NPCs and creatures come into a shared world in a few ways: the game places some, its spawners roll others from
leveled lists, players summon some with spells, and a server mod can add its own. This page covers where each one
comes from, how to roll a leveled list the way the game does, and the game data the server keeps for that.

```csharp title="MyMod.Server/Ambush.cs"
using System.Numerics;
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using OblivionMp.Sdk.Serverside;
using OblivionMp.Sdk.Serverside.Spawners;
using ReadyM.Api.Idents;
using ReadyM.Relay.Common.Oblivion;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class Ambush(IEntities entities, LeveledListRoll lists, ServerRefIds refIds)
{
    // Marks what this mod spawned. No spawner in the game has this ref id.
    private const uint AmbushMarker = 0xFFFFFFF0;

    // Rolls a leveled creature list at the player's level and spawns the result around them.
    public int Spawn(PlayerId target, FormId leveledList)
    {
        if (!entities.TryLookup(target, out MainCharacter main)
            || main.ParentCellKind == ParentCellKind.Unknown
            || !entities.TryGetScope(main, out Area area)
            || !entities.TryLookup(main.As<ParentCell>().ToFullCellId(area.AreaId), out Cell cell))
            return 0;

        var owner = cell.MasterClient != PlayerId.Invalid ? cell.MasterClient : target;
        var rolled = lists.Roll(leveledList, main.Level, 1);
        var spawned = 0;

        foreach (var creature in rolled.Creatures)
        {
            for (var i = 0; i < creature.Count; i++)
            {
                var npc = entities.Create<Npc>(cell, owner);
                npc.RefId = refIds.Next();
                npc.BaseId = creature.Form;
                npc.SpawnerRefId = AmbushMarker;
                npc.Level = main.Level;
                npc.Position = main.Position + new Vector3(300f + 100f * spawned, 0f, 0f);
                npc.Rotation = main.Rotation;
                spawned++;
            }
        }

        return spawned;
    }

    // Removes everything Spawn made.
    public void Clear()
    {
        foreach (var npc in entities.Query<Npc>())
        {
            if (npc.SpawnerRefId == AmbushMarker)
                entities.Delete(npc);
        }
    }
}
```

## How it works

### Where NPCs come from

| Source | What happens | Tells you where it came from |
| --- | --- | --- |
| Placed in the game files | When a player's game loads a cell, it reports the people and creatures placed there, and the server makes an `Npc` for each one it does not have yet. | `RefId` is the game's own ref id. |
| A spawner | A leveled creature spawn point in the game. See below. | `SpawnerRefId` is the spawner's ref id. |
| A summon spell | The server creates a `ServerSummon` when a player's spell summons a creature, and deletes it when the summon ends. | `SummonedBy`, below. |
| Your mod | `entities.Create<Npc>(cell, owner)`, as in the example. | Whatever you set. |

Every NPC belongs to a cell and is simulated by its owner's game, so create it in a cell with the cell's master
client as the owner (see [World and cells](world-and-cells.md)). Give it a ref id from `ServerRefIds`: AI orders and
other code name NPCs by ref id, and each player's game maps the server's ids to its own.

`SpawnOrigin` adds one value to an `Npc`, `SpawnerRefId`, the ref id of the spawner that made it, or 0. Only the
server sets it. A mod can use it the way the example does, as a mark that says "mine", and find its NPCs again with a
query. Deleting inside a query loop is fine; the deletes happen when the loop ends.

### Spawners

Until a mod sets the session's level scaling, each player's game spawns leveled creatures itself, at its own
player's level, the way the single-player game does. Once a mod calls `SessionScaling` (see
[Time, weather and session](time-weather-session.md)), the server takes over: it rolls each spawner's leveled list at
the session level, creates the creatures as `Npc` entities owned by the cell's master client, and sets their
`SpawnerRefId`. Every player then meets the same creatures.

### Summons

A `ServerSummon` is an `Npc` with `SummonedBy`:

| Member | Meaning |
| --- | --- |
| `Requester` | The player whose spell summoned it. |
| `MasterPlayer` | The player it fights for. |
| `MasterRefId` | The ref id of the actor it fights for. |
| `RequestId` | The summon's id in the requester's game. |
| `Expires` | Whether it runs out on its own. |
| `ExpiresAtMs` | When it runs out, on the server's millisecond clock (`Environment.TickCount64`). |

### Rolling a leveled list

Ask for `LeveledListRoll` and call `Roll(listId, level, count)`. It follows the game's rules for the list (the chance
of nothing, whether to pick from all levels up to `level` or only the nearest one, whether to roll each of `count`
separately) and resolves lists nested in the list. The result sorts what came out:

| Member | Holds |
| --- | --- |
| `Creatures` | `RolledCreature` values: a creature or NPC form and how many. |
| `Items` | `RolledItem` values: an item form and how many. |
| `MissingLists` | Lists the server has no template for, which rolled nothing. |

The server only knows the leveled lists it holds a template for (below), so a list comes back in `MissingLists` until
it has one.

### Game data templates

The server keeps some records from the game files as server-only entities. They are never sent to players.

| Shape | Holds | Made when |
| --- | --- | --- |
| `LeveledListTemplate` | A leveled list: `Id`, `ChanceNone`, `CalcAllLevels`, `CalcEachCount`, `CreatureTemplate`, and its `Entries` (`LeveledListItem`: `Level`, `Count`, `Form`, `Kind`) | A player's game loads a cell with spawners and reports their lists, or the server seeds the world |
| `ContainerTemplate` | A container's record: `RefId`, `Respawns`, `IsOwnedByMerchant`, `MerchantRefId`, `BarterGold`, `IsRollPending`, and its `Items` (`BaseContainerItem`: `Form`, `Count`, `Kind`) | The server seeds the world |
| `NpcTemplate` | An NPC's record: `Id`, `Level`, `PcLevelOffset` (whether `Level` is relative to the player's), `CalcMin`, `CalcMax`, and its starting `Items` | The server seeds the world |
| `ItemValues` | The base value of every item, by form id: a map from the form id's number to an `ItemValue` (`Value`, `HasComputedValue`) | The server seeds the world |

An entry's `Kind` is a `FormType`, which tells a creature from an item from a nested leveled list. Seeding is done by
a server-side mod; see [World seeding](../Advanced/world-seeding.md). Read templates with a query:

```csharp
foreach (var list in entities.Query<LeveledListTemplate>())
{
    for (var i = 0; i < list.EntriesCount; i++)
    {
        var entry = list.GetEntries(i);
        if (entry.Kind == FormType.Creature)
            creatures.Add(entry.Form);
    }
}

foreach (var values in entities.Query<ItemValues>())
{
    if (values.TryGetValuesValue(Items.Weapons.WeapIronLongsword.Value, out var price))
        logger.LogInformation("An iron longsword is worth {Gold} gold", price.Value);
}
```

:::note
Not in 1.0 yet: giving an NPC your mod spawns the inventory its record would roll. NPCs from spawners and from the
game files get theirs from the server, but that roll is not open to mods, so a mod-spawned NPC starts with an empty
inventory unless you fill it with `Inventories` (see [Items and inventories](items-and-inventories.md)).
:::

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM002` | `Create` is called inside a `foreach` over a query, for example spawning next to every player in one loop. | Collect what you need in the loop and create the entities after it. A loop over a list, like `rolled.Creatures` in the example, is fine. |

## Reference

* [Npc](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Npc.md),
  [ServerSummon](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.ServerSummon.md)
* [SpawnOrigin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SpawnOrigin.md)
* [SummonedBy](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SummonedBy.md)
* [LeveledListRoll](../../../api-reference/OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.LeveledListRoll.md),
  [LeveledListRollResult](../../../api-reference/OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.LeveledListRollResult.md),
  [RolledCreature](../../../api-reference/OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md),
  [RolledItem](../../../api-reference/OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)
* [LeveledListTemplate](../../../api-reference/OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.LeveledListTemplate.md),
  [LeveledListTemplateMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.LeveledListTemplateMixin.md),
  [LeveledListItem](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.LeveledListItem.md)
* [ContainerTemplate](../../../api-reference/OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.ContainerTemplate.md),
  [ContainerTemplateMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ContainerTemplateMixin.md),
  [BaseContainerItem](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.BaseContainerItem.md)
* [NpcTemplate](../../../api-reference/OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.NpcTemplate.md),
  [NpcTemplateMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.NpcTemplateMixin.md)
* [ItemValues](../../../api-reference/OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.ItemValues.md),
  [ItemValuesMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ItemValuesMixin.md),
  [ItemValue](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ItemValue.md)
* [FormType](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)
* [ServerRefIds](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.ServerRefIds.md)
