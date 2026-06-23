# Enum RelayMode

Namespace: [ReadyM.Api.Multiplayer.Protocol.Enums](../ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.Enums.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Indicates how an RPC message should be relayed to other players in the game.

```csharp
public enum RelayMode : byte
```

## Fields

`AreaOfInterestOthers = 0` 

Sends the message to all players in the area of interest of the sender, other than the sender.



`AreaOfInterestAll = 1` 

Sends the message to all players in the area of interest of the sender, including the sender.



`GlobalOthers = 2` 

Sends the message to all players in the game, other than the sender.



`GlobalAll = 3` 

Sends the message to all players in the game, including the sender.




