---
sidebar_position: 6
---

# Players

[`PlayerApi`](../../api-reference/ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerApi) covers the things a server mod needs that are about the player rather than about their entities: removing them from the server, and identifying them across sessions.

Resolve it from DI like anything else:

```csharp
public class Moderation(PlayerApi players, ILogger logger)
{
    // ...
}
```

## Kicking a player

```csharp
players.Kick(playerId);
```

The player is disconnected immediately. There is no reason parameter, so if you want to tell them why, send a message over RPC before you kick.

## Identifying a player across sessions

A [`PlayerId`](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId) identifies a player **within one server run**. It is reassigned on reconnect and on restart, so it is the wrong thing to key persistent data on.

`GetReadyMId` gives you the id ReadyM assigned to the player's account instead:

```csharp
var accountId = players.GetReadyMId(playerId);
if (accountId is { } id)
{
    // stable across reconnects, restarts and servers
    _visits[id] = _visits.GetValueOrDefault(id) + 1;
}
```

It returns `null` when the server has not seen that player since it started. The id is global to the platform: the same player carries the same `Guid` every time, on any server. Anything you persist should be keyed on this rather than on `PlayerId`.

## Connect and disconnect events

`PlayerApi` also raises its own connect and disconnect events, carrying both ids:

```csharp
players.OnPlayerConnected += e
    => logger.LogInformation("{Player} connected as {Account}", e.PlayerId, e.ReadyMId);
```

:::note[These two events are being unified]

`OnPlayerConnected` and `OnPlayerDisconnected` duplicate events that [`ServerEventsApi`](server-events) already has, so they are marked obsolete and will be folded into it in a later release. `PlayerApi` itself is staying: `Kick` and `GetReadyMId` are part of the SDK.

Prefer `OnPlayerConnected` and `OnPlayerDisconnected` on `ServerEventsApi` for new code. Those additionally hand you the player's entity and, on disconnect, the reason they left.

:::
