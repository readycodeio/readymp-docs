---
title: 'Enum ScalingPolicy'
description: 'How the session picks the level leveled lists roll at.'
---
# Enum ScalingPolicy

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

How the session picks the level leveled lists roll at.

```csharp
public enum ScalingPolicy : byte
```

## Fields

`Unset = 0` 

Scaling is off: each player's game rolls at its own player's level.



`BlendedLevel = 1` 

One level for the session, between the lowest and the highest player level.




