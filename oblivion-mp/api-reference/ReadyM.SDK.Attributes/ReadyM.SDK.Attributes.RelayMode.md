---
title: 'Enum RelayMode'
description: 'Indicates how a ClientToClientsAttribute message is relayed to other players in the game.'
---
# Enum RelayMode

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

Indicates how a **ClientToClientsAttribute** message is relayed to other players in the game.

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



## Remarks

Its values are the wire protocol's, so generated code passes them through unchanged.


