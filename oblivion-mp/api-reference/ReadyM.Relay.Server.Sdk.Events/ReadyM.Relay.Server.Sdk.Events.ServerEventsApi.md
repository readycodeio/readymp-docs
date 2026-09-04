# Class ServerEventsApi

Namespace: [ReadyM.Relay.Server.Sdk.Events](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Provides an API for subscribing to server events.

```csharp
public sealed class ServerEventsApi : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerEventsApi](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventsApi.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnAreaCreated"></a> OnAreaCreated

```csharp
public event Action<AreaId, Entity>? OnAreaCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs), [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnAreaDeleted"></a> OnAreaDeleted

```csharp
public event Action<AreaId, Entity>? OnAreaDeleted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs), [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnCellCreated"></a> OnCellCreated

```csharp
public event Action<AreaId, CellId, Entity>? OnCellCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs), [CellId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/CellId.cs), [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnCellDeleted"></a> OnCellDeleted

```csharp
public event Action<AreaId, CellId, Entity>? OnCellDeleted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs), [CellId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/CellId.cs), [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnPlayerActivatedCell"></a> OnPlayerActivatedCell

```csharp
public event Action<PlayerId, AreaId, CellId>? OnPlayerActivatedCell
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs), [CellId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/CellId.cs)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnPlayerConnected"></a> OnPlayerConnected

```csharp
public event Action<PlayerId, Entity>? OnPlayerConnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs), [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnPlayerDeactivatedCell"></a> OnPlayerDeactivatedCell

```csharp
public event Action<PlayerId, AreaId, CellId>? OnPlayerDeactivatedCell
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs), [CellId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/CellId.cs)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnPlayerDisconnected"></a> OnPlayerDisconnected

```csharp
public event Action<PlayerId, Entity, DisconnectReason?>? OnPlayerDisconnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs), [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md), DisconnectReason?\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnPlayerJoinedArea"></a> OnPlayerJoinedArea

```csharp
public event Action<PlayerId, AreaId>? OnPlayerJoinedArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnPlayerLeftArea"></a> OnPlayerLeftArea

```csharp
public event Action<PlayerId, AreaId>? OnPlayerLeftArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_OnWorldEntityCreated"></a> OnWorldEntityCreated

Raised once, when the world entity exists. A mod's Init runs before that, so this is the earliest
point at which world components can be written.

```csharp
public event Action<Entity>? OnWorldEntityCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?


