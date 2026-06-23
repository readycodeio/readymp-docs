# Struct RelayMessage

Namespace: [ReadyM.Api.Multiplayer.Client](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public struct RelayMessage
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Api_Multiplayer_Client_RelayMessage_Writer"></a> Writer

```csharp
public readonly NetDataWriter Writer
```

#### Field Value

 [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

## Methods

### <a id="ReadyM_Api_Multiplayer_Client_RelayMessage_ByRelayMode_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_ReadyM_Api_Idents_PlayerId_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMode_LiteNetLib_DeliveryMethod_"></a> ByRelayMode\(RelayMessageCode, PlayerId, RelayMode, DeliveryMethod\)

Send an event with a specific delivery method.

```csharp
public static RelayMessage ByRelayMode(RelayMessageCode eventCode, PlayerId playerId, RelayMode mode, DeliveryMethod deliveryMethod)
```

#### Parameters

`eventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`playerId` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/PlayerId.cs)

`mode` [RelayMode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode.md)

`deliveryMethod` [DeliveryMethod](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/NetConstants.cs)

#### Returns

 [RelayMessage](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.RelayMessage.md)


