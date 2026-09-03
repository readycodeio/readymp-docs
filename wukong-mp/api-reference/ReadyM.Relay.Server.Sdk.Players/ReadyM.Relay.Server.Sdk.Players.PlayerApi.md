# Class PlayerApi

Namespace: [ReadyM.Relay.Server.Sdk.Players](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.Players.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Provides access to player events and actions on the server.

```csharp
[Obsolete("This API is being deprecated in favor of the more general ServerEventsApi.")]
public class PlayerApi
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PlayerApi](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerApi.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerApi_GetReadyMId_ReadyM_Api_Idents_PlayerId_"></a> GetReadyMId\(PlayerId\)

Get the id ReadyM assigned to this player's account, or null if this server has not seen them since it started.
Global to the platform: the same player carries the same id every time, it survives reconnects
and server restarts. **PlayerId** does none of that, so key anything you persist on this instead.

```csharp
public Guid? GetReadyMId(PlayerId player)
```

#### Parameters

`player` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

#### Returns

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)?

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerApi_Kick_ReadyM_Api_Idents_PlayerId_"></a> Kick\(PlayerId\)

```csharp
public void Kick(PlayerId player)
```

#### Parameters

`player` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerApi_OnPlayerConnected"></a> OnPlayerConnected

Fired once the player has finished the handshake and their ECS entity exists.

```csharp
public event Action<PlayerConnectedEvent>? OnPlayerConnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[PlayerConnectedEvent](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerConnectedEvent.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerApi_OnPlayerDisconnected"></a> OnPlayerDisconnected

Fired when the player leaves, whichever way they left.

```csharp
public event Action<PlayerDisconnectedEvent>? OnPlayerDisconnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[PlayerDisconnectedEvent](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerDisconnectedEvent.md)\>?


