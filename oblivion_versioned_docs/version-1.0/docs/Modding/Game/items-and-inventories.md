---
sidebar_position: 2
---

# Items and inventories

Items live in three places: in a character's or NPC's inventory, in a container such as a chest, and on the ground
as a dropped item. The SDK keeps all three in sync for every player. Players move items with the game's own menus,
and the server checks and applies each move. A server mod can give, take and move items itself, which is what this
page is mostly about.

```csharp title="MyMod.Server/GoldIncome.cs"
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using OblivionMp.Sdk.Serverside.Items;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.Relay.Common.Oblivion.Items;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

// Pays every player 10 gold a minute, straight into their inventory.
[Service]
public sealed partial class GoldIncome(IEntities entities, Inventories inventories)
{
    private const float IntervalSeconds = 60f;

    private float _elapsed;

    private void Update()
    {
        _elapsed += Time.DeltaTime;
        if (_elapsed < IntervalSeconds)
            return;

        _elapsed -= IntervalSeconds;

        foreach (var main in entities.Query<MainCharacter>())
            inventories.Add(main.As<Equipment>(), new InventoryEntry(Items.Gold, 10, 0));
    }
}
```

## How it works

### Inventories

An inventory is a list of `InventoryEntry` values. Two mixins hold one:

| Mixin | On | Also holds |
| --- | --- | --- |
| `Equipment` | `MainCharacter`, `Npc`, `ServerSummon` | `CurrentPoison`, the poison on the equipped weapon |
| `ContainerItems` | `Container` (see [World and cells](world-and-cells.md)) | |

Both implement `IInventory`, so the same code works on a player, a corpse and a chest. Ask the entity for the mixin
with `As<Equipment>()` or `As<ContainerItems>()` and pass that on.

Each entry is one stack:

| Field | Meaning |
| --- | --- |
| `FormId` | What the item is, as a `NetworkFormId`. See [Identity](../Concepts/identity.md). |
| `Count` | How many. |
| `Worn` | Not 0 while the item is equipped. |
| `Health` | This stack's condition, or `InventoryEntry.NoInstanceOverride` (-1) when it has the item's default or no condition at all. |
| `Charge` | This stack's enchantment charge, or -1 the same way. |

`new InventoryEntry(formId, count, worn)` makes an entry with the default condition and charge.

To read an inventory, walk it by index:

```csharp
var arrows = 0;
for (var i = 0; i < main.ItemsCount; i++)
{
    var entry = main.GetItems(i);
    if (entry.FormId == Items.Ammunition.Arrow1Iron)
        arrows += entry.Count;
}
```

`IInventory` also has `AddItems`, `InsertItems` and `RemoveAtItems`, which change the list one entry at a time.
`Inventories` (below) is usually what you want instead: it merges stacks and leaves equipped items alone.

### Naming items

`Items` lists the game's items by their editor ids, as `FormId` values:

| Catalog | Example |
| --- | --- |
| `Items.Gold` | gold coins |
| `Items.Weapons` | `Items.Weapons.WeapIronLongsword` |
| `Items.Armors`, `Items.Clothes` | `Items.Armors.DEMHeavyHelmCataclysm1` |
| `Items.Ammunition` | `Items.Ammunition.Arrow1Iron` |
| `Items.Potions`, `Items.Ingredients`, `Items.Scrolls`, `Items.SoulGems` | `Items.Potions.PotionRestoreHealth` |
| `Items.Books`, `Items.Keys` | `Items.Books.DEM01MythicNote1` |

A `FormId` turns into a `NetworkFormId` wherever one is asked for, so `new InventoryEntry(Items.Gold, 10, 0)` and
`entry.FormId == Items.Gold` both work. For an item the catalogs do not list, such as one from another plugin, write
its form id: `new FormId(0x0000000F)`.

### Dropped items

An item on the ground is a `DroppedItem`:

| Member | Meaning |
| --- | --- |
| `BaseId` | What the item is. |
| `StackSize` | How many lie there. |
| `Position`, `Rotation` | Where, and which way it faces. |
| `Durability`, `Charge` | Its condition and enchantment charge, or -1 for the defaults. These come from `ItemExtraData`. |
| `RefId` | The reference the game knows it by. |
| `IsDisabled` | Set while the item is out of the world: it starts disabled in the game files, or a player took it. |
| `ParentCellKind`, `ParentCellX`, `ParentCellY` | The cell it lies in. |

When a player picks up an item someone dropped, the entity is deleted. When they pick up an item that was placed in
the game files, the entity stays, with `IsDisabled` set, so the item can come back when the cell respawns. Items
from the game files only exist as entities on a server that seeds the world (see
[World seeding](../Advanced/world-seeding.md)).

## On the client

Read the local player's inventory from `players.LocalMainCharacter`, as above. A client cannot change an inventory
directly; ask the server to, with an [RPC](../Concepts/rpc.md).

`IItems` drops an item next to the local player:

```csharp title="MyMod.Client/PotionDrop.cs"
using System.Numerics;
using OblivionMp.Sdk;
using ReadyM.Relay.Common.Oblivion.Items;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[Service]
public sealed partial class PotionDrop(IPlayers players, IItems items)
{
    public void DropPotions()
    {
        if (players.LocalMainCharacter is { } me)
            items.SpawnDroppedItem(Items.Potions.PotionRestoreHealth, 3, me.Position + new Vector3(0, 0, 50));
    }
}
```

The item lands in the cell the local player is in. `SpawnDroppedItem` throws an `InvalidOperationException` before
the local character exists or while the player is in no area.

:::note
Not in 1.0 yet: dropping an item from the client with a specific condition or enchantment charge.
`IItems.SpawnDroppedItem` takes neither. The server can do it, by creating the `DroppedItem` itself (below).
:::

## On the server

Ask for `Inventories` to move stacks with the game's rules:

| Method | What it does |
| --- | --- |
| `Add(inventory, entry)` | Adds the entry, merged into a matching stack that is not equipped. |
| `TryTake(inventory, stack)` | Removes the stack, unequipped copies first. Returns `false` and removes nothing if there are too few. |
| `TryMove(from, to, stack)` | Takes the stack from one inventory and adds it to the other. Returns `false` and moves nothing if `from` has too few. |
| `CountCarried(inventory, stack)` | How many of the stack the inventory holds, not counting equipped ones. |

`TryTake`, `TryMove` and `CountCarried` name the stack with an `ItemStackData`, which matches on the item, its
condition and its charge together. Set `Durability` and `Charge` to -1 for items in their default state, or they
will not match:

```csharp
var price = new ItemStackData
{
    BaseId = Items.Gold,
    Count = 100,
    Durability = InventoryEntry.NoInstanceOverride,
    Charge = InventoryEntry.NoInstanceOverride,
};

var purse = main.As<Equipment>();
if (inventories.TryTake(purse, price))
    inventories.Add(purse, new InventoryEntry(Items.Weapons.WeapSilverLongsword, 1, 0));
```

To put an item on the ground, create a `DroppedItem` in a cell, with a ref id from `ServerRefIds` (see
[World and cells](world-and-cells.md) for finding the cell):

```csharp
var item = entities.Create<DroppedItem>(cell, cell.MasterClient);
item.RefId = refIds.Next();
item.BaseId = Items.Weapons.WeapIronLongsword;
item.StackSize = 1;
item.Position = position;
item.Durability = 50f;
item.Charge = InventoryEntry.NoInstanceOverride;
```

`ContainerRoll` fills a container from its template, the way the game rolls a chest's loot: fixed items as they
are, leveled lists rolled at a level. `Roll(template, level, into)` takes the level; `Roll(template, visitor, into)`
uses the level of that player's character, raised for a merchant's container by their Mercantile skill. Both add to
what the container already holds. The templates are described in [Spawning](spawning.md).

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM019` | Client code changes a synced inventory, for example with `AddItems`. | Change it on the server, from an [RPC](../Concepts/rpc.md) the client sends. |
| `READYM002` | `Create` is called inside a `foreach` over a query, for example to drop an item next to every player. | Collect what you need in the loop and create the entities after it. |

## Reference

* [Equipment](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.md)
* [ContainerItems](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ContainerItems.md)
* [IInventory](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.IInventory.md)
* [InventoryEntry](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)
* [DroppedItem](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.DroppedItem.md)
* [ItemExtraData](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ItemExtraData.md)
* [Items](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.md):
  [Ammunition](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Ammunition.md),
  [Armors](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Armors.md),
  [Books](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Books.md),
  [Clothes](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Clothes.md),
  [Ingredients](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Ingredients.md),
  [Keys](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Keys.md),
  [Potions](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Potions.md),
  [Scrolls](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Scrolls.md),
  [SoulGems](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.SoulGems.md),
  [Weapons](../../../api-reference/ReadyM.Relay.Common.Oblivion.Items/ReadyM.Relay.Common.Oblivion.Items.Items.Weapons.md)
* [IItems](../../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.IItems.md)
* [Inventories](../../../api-reference/OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.Inventories.md)
* [ItemStackData](../../../api-reference/ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.ItemStackData.md)
* [ContainerRoll](../../../api-reference/OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.ContainerRoll.md)
