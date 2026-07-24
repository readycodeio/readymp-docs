# Class ServerRpcClient

Namespace: [ReadyM.Api.Multiplayer.RPC](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public abstract class ServerRpcClient : RpcBase, IHostedService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RpcBase](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.RpcBase.md) ← 
[ServerRpcClient](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.ServerRpcClient.md)

#### Implements

[IHostedService](https://github.com/readycodeio/readym\-gameserver/blob/b6eacba3e1df560975dcddbb4d4e3c5b49398de9/src/ReadyM.Api/DI/IHostedService.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[RpcBase.InitRpc\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_InitRpc), 
[RpcBase.DeInitRpc\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_DeInitRpc), 
[RpcBase.OnScopeStart\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_OnScopeStart), 
[RpcBase.Dispose\(\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_Dispose), 
[RpcBase.RunOnGameThread\(Action\)](ReadyM.Api.Multiplayer.RPC.RpcBase.md\#ReadyM\_Api\_Multiplayer\_RPC\_RpcBase\_RunOnGameThread\_System\_Action\_), 
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


