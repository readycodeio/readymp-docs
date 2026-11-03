---
title: 'Enum CharacterStateFlags'
description: 'What a character is doing right now, as flags.'
---
# Enum CharacterStateFlags

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

What a character is doing right now, as flags.

```csharp
[Flags]
public enum CharacterStateFlags : ushort
```

## Fields

`None = 0` 

None of the states.



`IsRunning = 1` 

Running.



`IsSneaking = 2` 

Sneaking.



`IsSwimming = 4` 

Swimming.



`IsJumping = 8` 

Jumping.



`IsBlocking = 16` 

Blocking.



`IsStaggered = 32` 

Staggered.



`IsFalling = 64` 

Falling.



`IsDodging = 128` 

Dodging.



`HasTorchEquipped = 256` 

Holding a torch.




