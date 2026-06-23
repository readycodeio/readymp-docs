# Struct CustomRelayEventHeader

Namespace: [ReadyM.Api.Multiplayer.Protocol](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Spans 4 bytes in standard relay modes and (6 + 2 * peers) in peer-targeted relay mode.
- 1 byte for eventCode
- 2 bytes for sender
- 2 bytes for peers count
- 1 byte for relayMode
- peers * 2 bytes for peers

```csharp
public struct CustomRelayEventHeader
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader__ctor_ReadyM_Api_Multiplayer_Protocol_Enums_RelayMessageCode_ReadyM_Api_Idents_PlayerId_ReadyM_Api_Idents_PlayerId___ReadyM_Api_Multiplayer_Protocol_Enums_RelayMode_"></a> CustomRelayEventHeader\(RelayMessageCode, PlayerId, PlayerId\[\]?, RelayMode\)

Spans 4 bytes in standard relay modes and (6 + 2 * peers) in peer-targeted relay mode.
- 1 byte for eventCode
- 2 bytes for sender
- 2 bytes for peers count
- 1 byte for relayMode
- peers * 2 bytes for peers

```csharp
public CustomRelayEventHeader(RelayMessageCode eventCode, PlayerId sender, PlayerId[]? peers, RelayMode relayMode = RelayMode.AreaOfInterestOthers)
```

#### Parameters

`eventCode` [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

`sender` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/PlayerId.cs)

`peers` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/PlayerId.cs)\[\]?

`relayMode` [RelayMode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode.md)

## Fields

### <a id="ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_EventCode"></a> EventCode

```csharp
public RelayMessageCode EventCode
```

#### Field Value

 [RelayMessageCode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMessageCode.md)

### <a id="ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_Peers"></a> Peers

```csharp
public PlayerId[]? Peers
```

#### Field Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/PlayerId.cs)\[\]?

### <a id="ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_RelayMode"></a> RelayMode

```csharp
public RelayMode RelayMode
```

#### Field Value

 [RelayMode](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode.md)

### <a id="ReadyM_Api_Multiplayer_Protocol_CustomRelayEventHeader_Sender"></a> Sender

```csharp
public PlayerId Sender
```

#### Field Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/PlayerId.cs)


