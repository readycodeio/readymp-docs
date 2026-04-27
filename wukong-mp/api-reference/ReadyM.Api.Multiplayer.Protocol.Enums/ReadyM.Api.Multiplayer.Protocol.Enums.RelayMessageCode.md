# Enum RelayMessageCode

Namespace: [ReadyM.Api.Multiplayer.Protocol.Enums](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.Enums.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

A unique identifier of a single RPC message type.

```csharp
public enum RelayMessageCode : byte
```

## Fields

`HandshakeConnected = 255` 

`RequestAreaEvent = 254` 

`AreaEvent = 253` 

`OtherPlayerConnectionEvent = 252` 

`OtherPlayerAreaEvent = 251` 

`EcsDelta = 250` 

`MaxBuiltInEvent = 250` 

`EcsSnapshot = 249` 

`EcsCreateEntity = 248` 

`EcsDeleteEntity = 247` 

`EcsChangeOwnership = 246` 

`MinBuiltInEvent = 246` 

`MaxAnyCustomEvent = 245` 

`MaxServerRpcEvent = 245` 

`MinServerRpcEvent = 150` 

`MaxClientRpcEvent = 149` 

`MinClientRpcEvent = 0` 

`MinAnyCustomEvent = 0` 


