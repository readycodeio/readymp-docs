---
title: 'Enum AiProcedure'
description: 'A step of an AI package that an NPC is on.'
---
# Enum AiProcedure

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

A step of an AI package that an NPC is on.

```csharp
public enum AiProcedure
```

## Fields

`None = -1` 

No step.



`Travel = 0` 

Travel to a location.



`Wander = 1` 

Wander around.



`Activate = 2` 

Activate a target.



`Aquire = 3` 

Pick up a target.



`Sleep = 4` 

Sleep.



`Eat = 5` 

Eat.



`Follow = 6` 

Follow a target.



`Escort = 7` 

Escort a target.



`Alarm = 8` 

Raise the alarm.



`Combat = 9` 

Fight.



`Flee = 10` 

Flee.



`Yield = 11` 

Yield.



`Dialogue = 12` 

Hold a conversation.



`Wait = 13` 

Wait.



`TravelTarget = 14` 

Travel to a target.



`Pursue = 15` 

Pursue a target.



`Greet = 16` 

Greet someone.



`CreateFollow = 17` 

The game's <code>CreateFollow</code> step.



`ObserveCombat = 18` 

Watch a fight.



`ObserveDialogue = 19` 

Watch a conversation.



`GreetDead = 20` 

Greet a dead actor.



`Warn = 21` 

Warn someone.



`GetUp = 22` 

Get up.



`MountHorse = 23` 

Mount a horse.



`DismountHorse = 24` 

Dismount a horse.



`DoNothing = 25` 

Do nothing.



`CastSpell = 26` 

Cast a spell.



`Aim = 27` 

Aim.



`Notify = 28` 

The game's <code>Notify</code> step.



`Accompany = 29` 

Accompany a target.



`UseItemAt = 30` 

Use an item at a location.



`Feed = 31` 

Feed.



`WaitAmbush = 32` 

Wait in ambush.



`Surface = 33` 

The game's <code>Surface</code> step.



`WaitForSpell = 34` 

Wait for a spell.



`ChooseCast = 35` 

Choose a spell to cast.



`FleeNonCombat = 36` 

Flee, out of combat.



`RemoveWornItems = 37` 

Take off worn items.



`Search = 38` 

Search.



`ClearMountPosition = 39` 

The game's <code>ClearMountPosition</code> step.



`SummonDefend = 40` 

Defend the summoner, as a summoned creature.



`MovementBlockedWait = 41` 

Wait while movement is blocked.



`UnequipArmor = 42` 

Unequip armor.



`TakeBackItem = 43` 

Take an item back.



`Done = 44` 

The package is done.




