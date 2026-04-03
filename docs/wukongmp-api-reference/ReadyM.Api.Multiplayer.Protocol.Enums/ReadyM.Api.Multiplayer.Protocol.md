# ReadyM.Api.Multiplayer.Protocol

### Namespaces

 [ReadyM.Api.Multiplayer.Protocol.Enums](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.Enums.md)

### Structs

 [CustomRelayEventHeader](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.CustomRelayEventHeader.md)

Spans 4 bytes in standard relay modes and (6 + 2 * peers) in peer-targeted relay mode.
- 1 byte for eventCode
- 2 bytes for sender
- 1 byte for relayMode and eventCaching (bit packed)
- 2 bytes for peers count
- peers * 2 bytes for peers


