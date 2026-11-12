---
title: 'OblivionMP.SDK.Common.Events'
description: 'The types in the OblivionMP.SDK.Common.Events namespace.'
---
# OblivionMP.SDK.Common.Events

### Structs

 [DockEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.DockEvent.md)

A character sat down on, or lay down in, a piece of furniture.

 [DoorTransitionEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.DoorTransitionEvent.md)

A door was opened or closed. The result is the door's state; a refused transition puts the actor's game back to it.
A server raise leaves the actor null and reaches any door with **Script**.

 [HealthChangedEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.HealthChangedEvent.md)

 [HorseDismountedEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.HorseDismountedEvent.md)

A character got off its horse.

 [HorseMountRequestedEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.HorseMountRequestedEvent.md)

A character starts mounting a horse. The server names it as the rider and moves the horse to the rider's client.

 [ItemTransferEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ItemTransferEvent.md)

 [LinkedPathPointsChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LinkedPathPointsChangeEvent.md)

A script enabled or disabled the path points a ref links, as the block's owner reports it.

 [LockChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockChangeEvent.md)

A lock was locked or unlocked. The result is the lock's state; a refused change puts the actor's game back to it.
A server raise leaves the actor null and reaches any lock with **Script**.

 [LockpickClaimEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockpickClaimEvent.md)

A player starts picking a lock. One picker per lock: the picker's own game opens the menu once the server agrees.

 [LockpickReleaseEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockpickReleaseEvent.md)

A player stopped picking a lock, picked or not.

 [PlacementChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.PlacementChangeEvent.md)

A script moved a ref within its cell, as the block's owner reports it. The result is the ref's transform.

 [PlayerConsumeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.PlayerConsumeEvent.md)

A character ate or drank an item.

 [PresenceChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.PresenceChangeEvent.md)

A script enabled, disabled or destroyed a ref, as the block's owner reports it. The result is the ref's presence.

 [ScriptActivationEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptActivationEvent.md)

A scripted ref was activated. The others replay the activation with the instigator's copy as the action ref;
a null instigator stands for the ref itself, the way a chained activation or a server raise has no actor.

 [ScriptButtonChosenEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptButtonChosenEvent.md)

A player picked a button in a script's message box. The others hand the same button to their copy of the script.

 [ScriptDialogueResultEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptDialogueResultEvent.md)

A dialogue response ran its result script. The others run the same script with the talker's copy as the player.

 [ScriptHitEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptHitEvent.md)

A scripted ref was hit by an actor. The others raise the hit on their copy.

 [ScriptHitWithEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptHitWithEvent.md)

A scripted ref was hit with a weapon. The others raise the hit with that weapon on their copy.

 [ScriptTriggerEnteredEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptTriggerEnteredEvent.md)

An actor stepped into a scripted trigger. The others raise the trigger on their copy every tick until it leaves.

 [ScriptTriggerLeftEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptTriggerLeftEvent.md)

An actor stepped out of a scripted trigger.

 [ScriptVariablesChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptVariablesChangeEvent.md)

A script wrote its variables on a ref, as the block's owner reports them. The result is the ref's script variables.

 [SequenceChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.SequenceChangeEvent.md)

A ref plays an animation sequence, as the block's owner reports it. The result is the ref's last finished sequence.

 [ShieldBashEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ShieldBashEvent.md)

A character bashed another with its shield. The others replay the hit on their copies, the attacker's own game did it already.

 [SpellCastEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.SpellCastEvent.md)

A character started casting a spell.

 [SpellReleaseCastEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.SpellReleaseCastEvent.md)

A character released a spell it was casting, or fired a staff.

 [TimeChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.TimeChangeEvent.md)

 [UndockEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.UndockEvent.md)

A character got up from the furniture it was docked to.

 [WeatherChangeEvent](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.WeatherChangeEvent.md)

### Enums

 [DoorTransitionReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.DoorTransitionReject.md)

Why a door transition is refused.

 [HorseMountReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.HorseMountReject.md)

 [LinkedPathPointsChangeReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LinkedPathPointsChangeReject.md)

Why a linked path points change is refused.

 [LockChangeReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockChangeReject.md)

Why a lock change is refused.

 [LockpickReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.LockpickReject.md)

Why a player may not pick the lock.

 [PlacementChangeReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.PlacementChangeReject.md)

Why a placement change is refused.

 [PresenceChangeReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.PresenceChangeReject.md)

Why a presence change is refused.

 [ScriptEventReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptEventReject.md)

Why a script event stays with the client that raised it.

 [ScriptVariablesChangeReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.ScriptVariablesChangeReject.md)

Why a script variables change is refused.

 [SequenceChangeReject](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.SequenceChangeReject.md)

Why a sequence change is refused.


