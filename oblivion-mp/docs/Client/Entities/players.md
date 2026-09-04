---
sidebar_position: 1
---

# Players

The synchronization API, reached through [`SDK.Sync`](../../../api-reference/OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionSyncApi), gives you access to every synchronized player character in the game world.

```csharp
// the local player, if the game world is currently synchronized
ReadyMainCharacter? localPlayer = SDK.Sync.LocalPlayer;

// every player character currently known to the client, including the local player
IEnumerable<ReadyMainCharacter> players = SDK.Sync.AllPlayers;
```

Both return values of type [ReadyMainCharacter](../../../api-reference/OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter). See [Player data](player-data) for what you can read and change on it.

## Ownership

Every player entity is **owned** by the player it represents. You can freely *read* any player's data, but you can only *change* data on entities you own, usually the local player, unless the change is a [server-authoritative override](../custom-components#ownership).

```csharp
foreach (var player in SDK.Sync.AllPlayers)
{
    Logging.LogInformation("{Nickname}: {Hp} HP", player.Nickname, player.Hp); // reading is always fine
}

if (SDK.Sync.LocalPlayer is { } me)
{
    me.Hp = 100; // fine, we own this entity
}
```

Attempting to write to a component you don't own is a no-op: the SDK logs an error and the game state is left unchanged.
