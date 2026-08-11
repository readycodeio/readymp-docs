# ReadyM.Api.Multiplayer.Protocol

### Namespaces

 [ReadyM.Api.Multiplayer.Protocol.Enums](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.Enums.md)

### Structs

 [CustomRelayEventHeader](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.CustomRelayEventHeader.md)

Spans 4 bytes in standard relay modes and (6 + 2 * peers) in peer-targeted relay mode.
- 1 byte for eventCode
- 2 bytes for sender
- 2 bytes for peers count
- 1 byte for relayMode
- peers * 2 bytes for peers

### Enums

 [DisconnectedReason](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.DisconnectedReason.md)

Denotes a reason for being disconnected from the server.


