# Class RpcApi

Namespace: [ReadyM.Relay.Server.Sdk.Rpc](../ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Rpc.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Low-level API for handling RPC messages in the ReadyM Relay Server SDK.

```csharp
public class RpcApi
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[RpcApi](../ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.RpcApi.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Rpc_RpcApi_SendToOne_ReadyM_Api_Idents_PlayerId_LiteNetLib_Utils_NetDataWriter_LiteNetLib_DeliveryMethod_"></a> SendToOne\(PlayerId, NetDataWriter, DeliveryMethod\)

Sends a message to a specific player with the given data and delivery method.

```csharp
public void SendToOne(PlayerId player, NetDataWriter data, DeliveryMethod deliveryMethod)
```

#### Parameters

`player` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

`data` NetDataWriter

`deliveryMethod` DeliveryMethod


