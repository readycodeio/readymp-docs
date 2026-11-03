---
sidebar_position: 12
---

# Server events

Services run every tick, and RPC handlers run when a client asks for something. Server events are the third way a
server mod gets to run code: the server tells you when a player connects or leaves, when an area or cell comes into
use, and when a player moves between them. They come from
[`IServerEvents`](../../../api-reference/ReadyM.SDK.Server.Events/ReadyM.SDK.Server.Events.IServerEvents.md),
which you ask for in the constructor of a server service.

```csharp title="MyMod.Server/Greeter.cs"
using Microsoft.Extensions.Logging;
using MyMod.Common;
using ReadyM.Api.Idents;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Events;

namespace MyMod.Server;

[Service]
public sealed partial class Greeter(IServerEvents events, ILogger logger)
{
    private const int StartingGold = 50;

    // Subscribe when the service starts...
    private void Start()
    {
        events.OnPlayerConnected += OnPlayerConnected;
        events.OnPlayerJoinedArea += OnPlayerJoinedArea;
    }

    // ...and unsubscribe when it stops.
    private void Stop()
    {
        events.OnPlayerConnected -= OnPlayerConnected;
        events.OnPlayerJoinedArea -= OnPlayerJoinedArea;
    }

    private void OnPlayerConnected(Player player, Guid readyMId)
        => player.Balance = StartingGold;

    private void OnPlayerJoinedArea(PlayerId playerId, AreaId areaId)
        => logger.LogInformation("{Player} entered {Area}.", playerId, areaId);
}
```

`Balance` is the mod template's `Wallet` mixin on every player (see [Shapes](../Concepts/shapes.md)).

## How it works

Subscribe in a service's `Start` and unsubscribe in its `Stop`, as above. Your handlers run in the server's
update, at the same point as a service's `Update`, so they can read and change entities directly. A slow handler
delays the whole tick, so keep them short. If a handler throws, the server logs the error and carries on.

| Event | Hands you | Fires when |
|---|---|---|
| `OnWorldCreated` | the `World` | Once, when the world exists. Your `Init` runs before that, so this is the earliest point at which values on the world can be written. |
| `OnPlayerConnected` | the `Player`, and their ReadyM account id | A player has connected and their player entity exists. |
| `OnPlayerDisconnected` | the `Player`, and the reason | A player has left or dropped. A player still in an area leaves it first, so `OnPlayerLeftArea` comes before this. |
| `OnAreaCreated` | the `Area` | An area comes into use: the first player enters it. |
| `OnPlayerJoinedArea` | player, area | Any player enters an area, the first one included. For the first one it comes after `OnAreaCreated`. |
| `OnPlayerLeftArea` | player, area | Any player leaves an area. |
| `OnAreaDeleted` | the `Area` | The last player has left an area and the server does not keep it. An OblivionMP server keeps every area, so this does not fire today. |
| `OnCellCreated` | the `Cell` | A cell comes into use: the first player loads it. |
| `OnPlayerActivatedCell` | player, cell | Any player loads a cell, the first one included. For the first one it comes after `OnCellCreated`. |
| `OnPlayerDeactivatedCell` | player, cell | Any player unloads a cell. |
| `OnCellDeleted` | the `Cell` | The last player has unloaded a cell and the server does not keep it. An OblivionMP server keeps every cell, so this does not fire today. |

An area is a world space. A cell is one of the pieces of an area a player has loaded around them. A cell id is only
unique inside its area, which is why the cell events hand you a `FullCellId`, which holds both. See
[Scopes](../Concepts/scopes.md) and [World and cells](world-and-cells.md).

The events about an entity coming or going hand you its shape, a [`Player`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md),
`Area`, `Cell` or `World`, so you read and write it straight away. The events about a player moving hand you ids:
[`PlayerId`](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md),
[`AreaId`](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md) and
[`FullCellId`](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md). Use them to find the shape
you want through `IEntities`: `TryLookup(playerId, out Player player)` for a player, `TryLookup(areaId, out Area area)`
for an area, and `TryLookup(cellId, out Cell cell)` for a cell. See
[Entities and queries](../Concepts/entities-and-queries.md).

These are the server's own events, run by the server alone. For something a player's game did, such as a spell cast,
see [Networked events](../Concepts/networked-events.md).

## Reference

- [`IServerEvents`](../../../api-reference/ReadyM.SDK.Server.Events/ReadyM.SDK.Server.Events.IServerEvents.md)
- [`PlayerId`](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)
- [`AreaId`](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)
- [`FullCellId`](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)
- [`Player`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md),
  [`Area`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md),
  [`Cell`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md),
  [`World`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)
