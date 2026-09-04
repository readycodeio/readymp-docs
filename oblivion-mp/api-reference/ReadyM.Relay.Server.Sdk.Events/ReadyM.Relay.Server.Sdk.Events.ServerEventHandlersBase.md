# Class ServerEventHandlersBase

Namespace: [ReadyM.Relay.Server.Sdk.Events](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Base class for server event handlers.
Subclasses should implement the Subscribe and Unsubscribe methods to register and unregister event handlers with the ServerEventsApi.

```csharp
public abstract class ServerEventHandlersBase : IHostedService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerEventHandlersBase](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventHandlersBase.md)

#### Implements

[IHostedService](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/DI/IHostedService.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventHandlersBase__ctor_ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_"></a> ServerEventHandlersBase\(ServerEventsApi\)

Base class for server event handlers.
Subclasses should implement the Subscribe and Unsubscribe methods to register and unregister event handlers with the ServerEventsApi.

```csharp
protected ServerEventHandlersBase(ServerEventsApi events)
```

#### Parameters

`events` [ServerEventsApi](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventsApi.md)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventHandlersBase_Dispose"></a> Dispose\(\)

```csharp
public virtual void Dispose()
```

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventHandlersBase_OnScopeStart"></a> OnScopeStart\(\)

Called when the DI container is initialized (on game/server start).
This allows the service to perform any necessary setup at the appropriate time, such as registering event handlers.

```csharp
public void OnScopeStart()
```

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventHandlersBase_Subscribe_ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_"></a> Subscribe\(ServerEventsApi\)

```csharp
protected abstract void Subscribe(ServerEventsApi events)
```

#### Parameters

`events` [ServerEventsApi](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventsApi.md)

### <a id="ReadyM_Relay_Server_Sdk_Events_ServerEventHandlersBase_Unsubscribe_ReadyM_Relay_Server_Sdk_Events_ServerEventsApi_"></a> Unsubscribe\(ServerEventsApi\)

```csharp
protected abstract void Unsubscribe(ServerEventsApi events)
```

#### Parameters

`events` [ServerEventsApi](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventsApi.md)


