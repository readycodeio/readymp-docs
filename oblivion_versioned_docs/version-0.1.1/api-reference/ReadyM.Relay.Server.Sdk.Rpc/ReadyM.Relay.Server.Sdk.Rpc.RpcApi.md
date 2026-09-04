# Class RpcApi

Namespace: [ReadyM.Relay.Server.Sdk.Rpc](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.Rpc.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

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

### <a id="ReadyM_Relay_Server_Sdk_Rpc_RpcApi_AddServerRpcMessageHandler_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_System_Action_ReadyM_Api_Multiplayer_Protocol_ServerEventHeader_LiteNetLib_Utils_NetDataReader__"></a> AddServerRpcMessageHandler\(RelayMessageCode, Action<ServerEventHeader, NetDataReader\>\)

```csharp
public void AddServerRpcMessageHandler(RelayMessageCode eventCode, Action<ServerEventHeader, NetDataReader> handler)
```

#### Parameters

`eventCode` RelayMessageCode

`handler` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<ServerEventHeader, [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)\>

### <a id="ReadyM_Relay_Server_Sdk_Rpc_RpcApi_RemoveServerRpcMessageHandler_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_System_Action_ReadyM_Api_Multiplayer_Protocol_ServerEventHeader_LiteNetLib_Utils_NetDataReader__"></a> RemoveServerRpcMessageHandler\(RelayMessageCode, Action<ServerEventHeader, NetDataReader\>\)

```csharp
public void RemoveServerRpcMessageHandler(RelayMessageCode eventCode, Action<ServerEventHeader, NetDataReader> handler)
```

#### Parameters

`eventCode` RelayMessageCode

`handler` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<ServerEventHeader, [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)\>

### <a id="ReadyM_Relay_Server_Sdk_Rpc_RpcApi_SendToOne_ReadyM_Api_Idents_PlayerId_LiteNetLib_Utils_NetDataWriter_LiteNetLib_DeliveryMethod_"></a> SendToOne\(PlayerId, NetDataWriter, DeliveryMethod\)

```csharp
public void SendToOne(PlayerId player, NetDataWriter data, DeliveryMethod deliveryMethod)
```

#### Parameters

`player` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Api/Idents/PlayerId.cs)

`data` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

`deliveryMethod` [DeliveryMethod](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/NetConstants.cs)


