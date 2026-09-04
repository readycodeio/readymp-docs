# Class PlayerDisconnectedEvent

Namespace: [ReadyM.Relay.Server.Sdk.Players](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.Players.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

```csharp
[Obsolete("PlayerApi will be merged into ServerEventsApi in the future. Please use ServerEventsApi instead.")]
public sealed class PlayerDisconnectedEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PlayerDisconnectedEvent](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerDisconnectedEvent.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerDisconnectedEvent__ctor"></a> PlayerDisconnectedEvent\(\)

```csharp
public PlayerDisconnectedEvent()
```

## Properties

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerDisconnectedEvent_PlayerId"></a> PlayerId

```csharp
public required PlayerId PlayerId { get; init; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerDisconnectedEvent_ReadyMId"></a> ReadyMId

```csharp
public required Guid ReadyMId { get; init; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)


