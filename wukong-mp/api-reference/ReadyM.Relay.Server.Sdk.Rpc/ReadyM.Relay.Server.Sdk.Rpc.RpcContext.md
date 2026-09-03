# Struct RpcContext

Namespace: [ReadyM.Relay.Server.Sdk.Rpc](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Rpc.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Contextual information passed to every generated <code>OnX</code> server RPC stub.
Wraps per-message metadata so handler signatures stay clean as the context grows.

```csharp
public readonly struct RpcContext
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Rpc_RpcContext__ctor_ReadyM_Api_Idents_PlayerId_"></a> RpcContext\(PlayerId\)

Contextual information passed to every generated <code>OnX</code> server RPC stub.
Wraps per-message metadata so handler signatures stay clean as the context grows.

```csharp
public RpcContext(PlayerId sender)
```

#### Parameters

`sender` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

## Properties

### <a id="ReadyM_Relay_Server_Sdk_Rpc_RpcContext_Sender"></a> Sender

The client player who sent this RPC.

```csharp
public PlayerId Sender { get; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)


