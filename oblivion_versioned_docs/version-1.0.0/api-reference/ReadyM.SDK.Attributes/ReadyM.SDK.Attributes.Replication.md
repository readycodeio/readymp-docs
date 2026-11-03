---
title: 'Enum Replication'
description: 'Whether a shape''s values are sent to the other players, and if so, which way they travel between the game and the ECS and who may write them.'
---
# Enum Replication

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

Whether a shape's values are sent to the other players, and if so, which way they travel between the game and the
ECS and who may write them.

```csharp
public enum Replication
```

## Fields

`None = 0` 

Not sent. The values stay on the half that wrote them.



`ToEcsOnly = 1` 

The game owns it. It is read into the ECS and replicated, and nothing writes it back.



`ToGameOnly = 2` 

The ECS owns it. It is shown to the game, and the game is never read for it.



`Both = 3` 

Both ways, and anyone may set or override it.



`ServerAuthoritative = 4` 

Only the server sets it. A client reads it and applies it to the game state.

Use it for server-side configuration replicated to players, or data that cannot be trusted to be sent by the
clients (e.g. for cheating prevention).

`OwnershipBased = 5` 

Only whoever owns the entity may report or override it. The rest read it.




