# Class ServerRpcClient

Namespace: [ReadyM.Api.Multiplayer.RPC](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Base class for server-defined RPC handlers.

```csharp
public abstract class ServerRpcClient : RpcBase, IHostedService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RpcBase](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.RpcBase.md) ← 
[ServerRpcClient](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.ServerRpcClient.md)

#### Implements

[IHostedService](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/DI/IHostedService.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[RpcBase.InitRpc\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_InitRpc), 
[RpcBase.DeInitRpc\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_DeInitRpc), 
[RpcBase.OnScopeStart\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_OnScopeStart), 
[RpcBase.Dispose\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_Dispose), 
[RpcBase.RelayClient](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_RelayClient), 
[RpcBase.Serializer](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_Serializer), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Multiplayer_RPC_ServerRpcClient__ctor"></a> ServerRpcClient\(\)

```csharp
protected ServerRpcClient()
```


