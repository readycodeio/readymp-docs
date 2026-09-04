# Class PlayerConnectedEvent

Namespace: [ReadyM.Relay.Server.Sdk.Players](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

```csharp
[Obsolete("PlayerApi will be merged into ServerEventsApi in the future. Please use ServerEventsApi instead.")]
public sealed class PlayerConnectedEvent
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PlayerConnectedEvent](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerConnectedEvent.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerConnectedEvent__ctor"></a> PlayerConnectedEvent\(\)

```csharp
public PlayerConnectedEvent()
```

## Properties

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerConnectedEvent_PlayerId"></a> PlayerId

```csharp
public required PlayerId PlayerId { get; init; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Relay_Server_Sdk_Players_PlayerConnectedEvent_ReadyMId"></a> ReadyMId

```csharp
public required Guid ReadyMId { get; init; }
```

#### Property Value

 [Guid](https://learn.microsoft.com/dotnet/api/system.guid)


