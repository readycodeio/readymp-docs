# Class ServerRpcHandlersBase

Namespace: [ReadyM.Relay.Server.Sdk.Rpc](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.Rpc.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

```csharp
public abstract class ServerRpcHandlersBase : IHostedService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerRpcHandlersBase](../ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.ServerRpcHandlersBase.md)

#### Implements

[IHostedService](https://github.com/readycodeio/readym\-gameserver/blob/5cb8df5d89396468f833bf967ea2e9731c78dcf4/src/ReadyM.Api/DI/IHostedService.cs), 
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

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase__ctor"></a> ServerRpcHandlersBase\(\)

```csharp
protected ServerRpcHandlersBase()
```

## Properties

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase_Rpc"></a> Rpc

```csharp
public RpcApi Rpc { protected get; set; }
```

#### Property Value

 [RpcApi](../ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.RpcApi.md)

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase_Serializer"></a> Serializer

```csharp
public IRelaySerializer Serializer { protected get; set; }
```

#### Property Value

 IRelaySerializer

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase_DeInitRpc"></a> DeInitRpc\(\)

```csharp
protected abstract void DeInitRpc()
```

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase_Dispose"></a> Dispose\(\)

```csharp
public virtual void Dispose()
```

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase_InitRpc"></a> InitRpc\(\)

```csharp
protected abstract void InitRpc()
```

### <a id="ReadyM_Relay_Server_Sdk_Rpc_ServerRpcHandlersBase_OnScopeStart"></a> OnScopeStart\(\)

Called when the DI container is initialized (on game start).
This allows the service to perform any necessary setup at the appropriate time, such as registering event handlers.

```csharp
public void OnScopeStart()
```


