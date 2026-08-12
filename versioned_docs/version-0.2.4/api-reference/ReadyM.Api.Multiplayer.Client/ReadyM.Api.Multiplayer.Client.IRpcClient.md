# Interface IRpcClient

Namespace: [ReadyM.Api.Multiplayer.Client](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public interface IRpcClient
```

## Methods

### <a id="ReadyM_Api_Multiplayer_Client_IRpcClient_AddClientRpcMessageHandler_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_System_Action_ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_LiteNetLib_Utils_NetDataReader__"></a> AddClientRpcMessageHandler\(RelayMessageCode, Action<CustomRelayEventHeader, NetDataReader\>\)

```csharp
void AddClientRpcMessageHandler(RelayMessageCode eventCode, Action<CustomRelayEventHeader, NetDataReader> handler)
```

#### Parameters

`eventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`handler` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[CustomRelayEventHeader](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.CustomRelayEventHeader.md), [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)\>

### <a id="ReadyM_Api_Multiplayer_Client_IRpcClient_AddClientRpcMessageHandler_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_System_Action_ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_LiteNetLib_Utils_NetDataReader__"></a> AddClientRpcMessageHandler\(RelayMessageCode, RelayMessageCode, Action<CustomRelayEventHeader, NetDataReader\>\)

```csharp
void AddClientRpcMessageHandler(RelayMessageCode minEventCode, RelayMessageCode maxEventCode, Action<CustomRelayEventHeader, NetDataReader> handler)
```

#### Parameters

`minEventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`maxEventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`handler` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[CustomRelayEventHeader](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.CustomRelayEventHeader.md), [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)\>

### <a id="ReadyM_Api_Multiplayer_Client_IRpcClient_RemoveClientRpcMessageHandler_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_System_Action_ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_LiteNetLib_Utils_NetDataReader__"></a> RemoveClientRpcMessageHandler\(RelayMessageCode, Action<CustomRelayEventHeader, NetDataReader\>\)

```csharp
void RemoveClientRpcMessageHandler(RelayMessageCode eventCode, Action<CustomRelayEventHeader, NetDataReader> handler)
```

#### Parameters

`eventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`handler` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[CustomRelayEventHeader](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.CustomRelayEventHeader.md), [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)\>

### <a id="ReadyM_Api_Multiplayer_Client_IRpcClient_RemoveClientRpcMessageHandler_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_System_Action_ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_LiteNetLib_Utils_NetDataReader__"></a> RemoveClientRpcMessageHandler\(RelayMessageCode, RelayMessageCode, Action<CustomRelayEventHeader, NetDataReader\>\)

```csharp
void RemoveClientRpcMessageHandler(RelayMessageCode minEventCode, RelayMessageCode maxEventCode, Action<CustomRelayEventHeader, NetDataReader> handler)
```

#### Parameters

`minEventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`maxEventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`handler` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[CustomRelayEventHeader](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.CustomRelayEventHeader.md), [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)\>

### <a id="ReadyM_Api_Multiplayer_Client_IRpcClient_SendMessage_ReadyM_Api_Multiplayer_Client_RelayMessage_"></a> SendMessage\(RelayMessage\)

```csharp
void SendMessage(RelayMessage message)
```

#### Parameters

`message` [RelayMessage](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.RelayMessage.md)


