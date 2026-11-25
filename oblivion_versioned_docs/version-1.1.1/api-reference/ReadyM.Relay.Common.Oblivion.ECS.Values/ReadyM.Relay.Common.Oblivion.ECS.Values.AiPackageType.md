---
title: 'Enum AiPackageType'
description: 'The kind of an AI package in the game.'
---
# Enum AiPackageType

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

The kind of an AI package in the game.

```csharp
public enum AiPackageType
```

## Fields

`None = -1` 

No package.



`ExploreTravel = 0` 

The game's Travel package: go to a location.



`ExploreWander = 1` 

The game's Wander package: wander around a location.



`ExploreActivate = 2` 

The game's Find package, activating the target.



`ExploreAquire = 3` 

The game's Find package, acquiring the target.



`Sleep = 4` 

The game's Sleep package.



`Eat = 5` 

The game's Eat package.



`FollowWithEscort = 6` 

The game's follow package, with escort.



`FollowWithoutEscort = 7` 

The game's Follow package.



`EscortActor = 8` 

The game's Escort package.



`EscortObject = 9` 

The game's package for escorting an object.



`Dialogue = 10` 

The game's dialogue package.



`Alarm = 11` 

The game's alarm package.



`Combat = 12` 

The game's combat package.



`Activate = 13` 

The game's activate package.



`Greet = 14` 

The game's greet package.



`ObserveCombat = 15` 

The game's package for watching a fight.



`ObserveDialogue = 16` 

The game's package for watching a conversation.



`TalkToDead = 17` 

The game's package for talking to a dead actor.



`CombatNotInHigh = 18` 

The game's <code>CombatNotInHigh</code> package type.



`Flee = 19` 

The game's flee package.



`Trespass = 20` 

The game's trespass package.



`GetUp = 21` 

The game's get up package.



`ExploreNpc = 22` 

The game's <code>ExploreNpc</code> package type.



`MountHorse = 23` 

The game's package for mounting a horse.



`DismountHorse = 24` 

The game's package for dismounting a horse.



`DoNothing = 25` 

The game's do nothing package.



`ExploreAquireGeneric = 26` 

The game's <code>ExploreAquireGeneric</code> package type.



`CastTargetSpell = 27` 

The game's package for casting a target spell.



`CastTouchSpell = 28` 

The game's package for casting a touch spell.



`Accompany = 29` 

The game's Accompany package.



`UseItemAt = 30` 

The game's Use item at package.



`Feed = 31` 

The game's feed package.



`Ambush = 32` 

The game's Ambush package.



`Surface = 33` 

The game's <code>Surface</code> package type.



`Casting = 34` 

The game's Cast magic package.



`FleeNonCombat = 35` 

The game's Flee package, out of combat.



`Search = 36` 

The game's search package.



`ClearMountPosition = 37` 

The game's <code>ClearMountPosition</code> package type.



`SummonCreatureDefend = 38` 

The game's package for a summoned creature defending its summoner.



`MovementBlocked = 39` 

The game's <code>MovementBlocked</code> package type.




