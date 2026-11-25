---
title: 'Enum WriteKind'
description: 'Component field write kind - either mirroring the game state or overriding it.'
---
# Enum WriteKind

Namespace: [ReadyM.SDK.Entities](../ReadyM.SDK.Entities/ReadyM.SDK.Entities.md)  
Assembly: ReadyM.SDK.dll  

Component field write kind - either mirroring the game state or overriding it.

```csharp
public enum WriteKind : byte
```

## Fields

`Mirror = 0` 

Indicates the set value is a mirror of the game state, and should be replicated to other players.



`Override = 1` 

Indicates an override of the state, which should be applied to the entity's owner's game state, and replicated to other players.
Can only be used on components that have a policy that allows it.




