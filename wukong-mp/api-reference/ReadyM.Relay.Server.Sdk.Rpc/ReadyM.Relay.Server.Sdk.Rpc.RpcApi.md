# Class RpcApi

Namespace: [ReadyM.Relay.Server.Sdk.Rpc](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.Rpc.md)  
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

`player` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/c12780df078c882058ee18410f12720cc6ee2a0a/src/ReadyM.Api/Idents/PlayerId.cs)

`data` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

`deliveryMethod` [DeliveryMethod](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/NetConstants.cs)


