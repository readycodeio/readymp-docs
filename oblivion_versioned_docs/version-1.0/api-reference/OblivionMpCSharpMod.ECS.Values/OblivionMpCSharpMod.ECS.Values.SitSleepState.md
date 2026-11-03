---
title: 'Enum SitSleepState'
description: 'Where a character is in sitting down on, sleeping in or getting up from furniture.'
---
# Enum SitSleepState

Namespace: [OblivionMpCSharpMod.ECS.Values](../OblivionMpCSharpMod.ECS.Values/OblivionMpCSharpMod.ECS.Values.md)  
Assembly: OblivionMpCSharpMod.dll  

Where a character is in sitting down on, sleeping in or getting up from furniture.

```csharp
public enum SitSleepState : byte
```

## Fields

`Normal = 0` 

Not sitting or sleeping.



`LoadSitIdle = 1` 

Loading the sitting animation.



`WantToSit = 2` 

About to sit down.



`WaitingForSitAnim = 3` 

Sitting down, waiting for the animation to play.



`IsSitting = 4` 

Sitting.



`WantToStand = 5` 

About to stand up.



`LoadSleepIdle = 6` 

Loading the sleeping animation.



`WantToSleep = 7` 

About to lie down to sleep.



`WaitingForSleepAnim = 8` 

Lying down, waiting for the animation to play.



`IsSleeping = 9` 

Sleeping.



`WantToWake = 10` 

About to get up from sleeping.



`Count = 11` 

The number of states, not a state itself.




