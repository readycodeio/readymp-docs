---
title: 'Interface IPlayers'
description: 'What the server can do with a connected player, beyond their entities.'
---
# Interface IPlayers

Namespace: [ReadyM.Relay.Server.Sdk.Players](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

What the server can do with a connected player, beyond their entities.

```csharp
public interface IPlayers
```

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Players_IPlayers_GetReadyMId_ReadyM_Api_Idents_PlayerId_"></a> GetReadyMId\(PlayerId\)

Get the id ReadyM assigned to this player's account, or null if this server has not seen them since it started.
Global to the platform: the same player carries the same id every time, it survives reconnects and server
restarts. **PlayerId** does none of that, so key anything you persist on this instead.

```csharp
Guid? GetReadyMId(PlayerId player)
```

#### Parameters

`player` PlayerId

#### Returns

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)?

### <a id="ReadyM_Relay_Server_Sdk_Players_IPlayers_Kick_ReadyM_Api_Idents_PlayerId_"></a> Kick\(PlayerId\)

Kicks the player from the server. This is a hard disconnect, and the player will not be able to reconnect until
they restart the game.

```csharp
void Kick(PlayerId player)
```

#### Parameters

`player` PlayerId

The player to kick.


