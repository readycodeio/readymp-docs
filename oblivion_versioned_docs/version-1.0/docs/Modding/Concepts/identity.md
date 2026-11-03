---
sidebar_position: 6
---

# Identity values

A handful of small value types name things: a player, a place, a record from the game's data files. You get them from
shapes and RPCs, pass them in messages, and look entities up by them. They differ in one way that matters when you
store them: some last for one session only.

The example asks the server which cell the sender is standing in. It uses a `PlayerId` to find the sender, an
`AreaId` and a `CellId` to name the place, and a `FullCellId` to send both back:

```csharp title="MyMod.Common/RpcContracts.cs"
using ReadyM.Api.Idents;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

[RpcContracts]
public static partial class RpcContracts
{
    [ClientToServer] public static partial void WhereAmI();
    [ServerToClient] public static partial void WhereAmI(FullCellId cell);
}
```

```csharp title="MyMod.Server/RpcHandlers.cs"
using MyMod.Common;
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using OblivionMp.Sdk.Serverside.Spawners;
using ReadyM.Api.Idents;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.Relay.Server.Sdk.Rpc;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[RpcHandlersFor(typeof(RpcContracts))]
public sealed partial class RpcHandlers(IEntities entities)
{
    partial void OnWhereAmI(RpcContext context)
    {
        PlayerId sender = context.Sender;

        if (!entities.TryLookup(sender, out MainCharacter main)
            || !entities.TryGetScope(main, out Area area)
            || main.ParentCellKind == ParentCellKind.Unknown)
            return;

        FullCellId cell = main.As<ParentCell>().ToFullCellId(area.AreaId);
        SendWhereAmI(sender, cell);
    }
}
```

```csharp title="MyMod.Client/RpcHandlers.cs"
using Microsoft.Extensions.Logging;
using MyMod.Common;
using ReadyM.Api.Idents;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[RpcHandlersFor(typeof(RpcContracts))]
public sealed partial class RpcHandlers(ILogger logger)
{
    partial void OnWhereAmI(FullCellId cell)
        => logger.LogInformation("You are in cell {Cell} of {Area}.",
            cell.CellId.ToManaged(), cell.AreaId.ToManaged());
}
```

## How it works

### At a glance

| Type | Names | Lasts | Namespace |
| --- | --- | --- | --- |
| `PlayerId` | One connected player. | One connection. A player who reconnects gets a new one. | `ReadyM.Api.Idents` |
| `AreaId` | An area: an exterior world space, or one interior. | Every session, on the same game version. | `ReadyM.Api.Idents` |
| `CellId` | A cell within its area. | Every session, on the same game version. | `ReadyM.Api.Idents` |
| `FullCellId` | A cell anywhere: an `AreaId` and a `CellId` together. | Every session, on the same game version. | `ReadyM.Api.Idents` |
| `FormId` | A record in the game's data files: an item, an NPC, a spell, a weather. | Every session, as long as everyone runs the same game files. | `ReadyM.Relay.Common.Oblivion` |
| `NetworkFormId` | A form every client can resolve, including forms the game creates while it runs. | A game-file form: every session. A form made at runtime: one session. | `ReadyM.Relay.Common.Oblivion.ECS.Values` |
| `FormType` | What kind of record a form is. | Fixed. | `ReadyM.Relay.Common.Oblivion.ECS.Values` |

All of them compare with `==`, work as dictionary keys, and can be sent in an [RPC](rpc.md).

### Players: `PlayerId`

A `PlayerId` names one connected player for as long as they stay connected. You never make one; you get it from:

| Where | How |
| --- | --- |
| A server RPC handler | `context.Sender` |
| A client-to-clients handler on the client | its first parameter, `PlayerId sender` |
| The player's shapes | `player.PlayerId` on `Player`, `main.PlayerId` on `MainCharacter` |
| The local player, on the client | `players.LocalPlayer` or `players.LocalMainCharacter`, from `IPlayers` (see [Players and characters](../Game/players-and-characters.md)) |
| Other shapes that point at a player | for example `SummonedBy.Requester` on a summon |

What you do with one:

* Find the player's entities: `entities.TryLookup(id, out Player player)` or `entities.TryLookup(id, out MainCharacter main)`.
* Send to that player: every server `SendX` for a `[ServerToClient]` message takes the recipient's `PlayerId` first.
* Log it: it prints as `PlayerId[3]`.

`PlayerId.Server` stands for the server itself. It is the same value as `PlayerId.Invalid`, so a default `PlayerId`
means "no player" or "the server" depending on where it came from.

:::warning
Do not store a `PlayerId` beyond the current connection. To remember a player across reconnects and server restarts,
use their account id from `IPlayers.GetReadyMId` on the server, as shown in
[Players and characters](../Game/players-and-characters.md).
:::

### Places: `AreaId`, `CellId` and `FullCellId`

OblivionMP divides the world in two levels. An **area** is an exterior world space such as Tamriel, or a single
interior. A **cell** is a piece of an area: one grid square of an exterior, or, for an interior, the whole of it. A
`CellId` is only unique within its area, so a cell anywhere in the world is a `FullCellId`, the pair of both.

You get them from the [scope shapes](scopes.md): `area.AreaId` on an `Area`, `cell.FullCellId` on a `Cell`. To go the
other way, look the scope up: `entities.TryLookup(areaId, out Area area)` and `entities.TryLookup(fullCellId, out Cell
cell)`. These only succeed while the area or cell exists, which is while a player is there (or something keeps it
alive, see [Scopes](scopes.md)).

| To get | Write |
| --- | --- |
| A `FullCellId` from its parts | `new FullCellId(areaId, cellId)` |
| The parts of a `FullCellId` | `cell.AreaId`, `cell.CellId` |
| The cell id of an interior | `OblivionCellIds.Interior` |
| The cell id of an exterior grid square | `OblivionCellIds.Exterior(x, y)` |
| A character's cell, on the server | `main.As<ParentCell>().ToFullCellId(areaId)`, as in the example ([World and cells](../Game/world-and-cells.md)) |
| The text inside an `AreaId` or `CellId` | `ToManaged()`, for logs |

`AreaId.Invalid` and `CellId.Invalid` are the empty values. `AreaId` and `CellId` also have constructors that take a
string, but the text format is the SDK's business and may change with a game update: compare ids you got from shapes
rather than building area ids from text.

### Forms: `FormId`, `NetworkFormId` and `FormType`

Everything in Oblivion's data files is a form with a number: every sword, potion, NPC, spell and weather. `FormId`
holds that number. It is the same on every machine running the same game files, so it is safe to store and to send.

```csharp
var gold = new FormId(0x0000000F);  // the gold coin
uint raw = gold;                     // converts to the plain number on its own
```

You meet `FormId` wherever the SDK talks about game records: spawning an item with `IItems.SpawnDroppedItem` (see
[Items and inventories](../Game/items-and-inventories.md)), the current weather in `Weather.WeatherFormId` (see
[Time, weather and session](../Game/time-weather-session.md)), and leveled-list rolls on the server (see
[Spawning](../Game/spawning.md)).

Some forms are not in the data files: the game creates them while it runs, for example a potion a player brews or a
spell they make. Such a form gets a different `FormId` on every client. `NetworkFormId` names a form in a way every
client can resolve, whichever kind it is:

* For a form from the data files, its `FormId` field holds the form's id. Any `FormId` converts to a `NetworkFormId`
  on its own.
* For a form created at runtime, `FormId` is 0, and the SDK tracks the form as an entity of its own (see
  [Dynamic forms](../Game/dynamic-forms.md)). Such a `NetworkFormId` is only good for the current session.

Shapes that point at a form use `NetworkFormId`: `BaseId` on `BaseIdMixin` (what an NPC or a dropped item is),
`InventoryEntry.FormId` in inventories, `CurrentPoison` on `Equipment`.

```csharp
// item is a DroppedItem, which includes BaseIdMixin.
NetworkFormId what = item.BaseId;
if (what.FormId == new FormId(0x0000000F))
    logger.LogInformation("Someone dropped gold.");
```

`FormType` is the kind of record a form is: `Weapon`, `Armor`, `NPC`, `Creature`, `Container`, `Spell` and so on,
following the record types of Oblivion's data files. The server's game data uses it, for example `Kind` on
`LeveledListItem` and `BaseContainerItem` entries. 1.0 has no call that tells you the `FormType` of an arbitrary
`FormId`.

### Compact numbers for your own messages

When you send many counts or indexes in your own messages, `VarUInt` and `VarUShort` from `ReadyM.Api.Serialization`
send small numbers in fewer bytes: one byte below 128, two below 16384, and at most five bytes for a `VarUInt` (three
for a `VarUShort`). They convert to and from `uint` and `ushort` on their own, and work as RPC parameters and as
fields of your own message structs:

```csharp
[ClientToServer] public static partial void PickSlot(VarUInt slot);
```

```csharp
partial void OnPickSlot(RpcContext context, VarUInt slot)
{
    uint index = slot;
    // ...
}
```

`VarUInt.SizeOf(value)` says how many bytes a value takes.

## Reference

* [PlayerId](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)
* [AreaId](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)
* [CellId](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)
* [FullCellId](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)
* [OblivionCellIds](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.OblivionCellIds.md)
* [FormId](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)
* [NetworkFormId](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)
* [FormType](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)
* [RpcContext](../../../api-reference/ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.RpcContext.md)
* [IPlayers](../../../api-reference/ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.IPlayers.md) (server)
* [SpawnerCell](../../../api-reference/OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.SpawnerCell.md)
* [VarUInt](../../../api-reference/ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md),
  [VarUShort](../../../api-reference/ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)
