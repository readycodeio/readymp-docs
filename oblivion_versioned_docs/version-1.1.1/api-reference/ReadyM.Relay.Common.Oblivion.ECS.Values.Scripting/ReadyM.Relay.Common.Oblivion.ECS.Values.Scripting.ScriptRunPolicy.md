---
title: 'Enum ScriptRunPolicy'
description: 'How one ref''s own scripts run, when not the session''s default for its kind.'
---
# Enum ScriptRunPolicy

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting](../ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting/ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

How one ref's own scripts run, when not the session's default for its kind.

```csharp
public enum ScriptRunPolicy : byte
```

## Fields

`SessionDefault = 0` 

The session's default for actors or for objects, whichever the ref is.



`Run = 1` 

Every client runs it, the game's own behaviour.



`Block = 2` 

No client runs it.



`OwnerOnly = 3` 

Only the client the run belongs to runs it, the others get the outcome through the sync.



`PerPlayer = 4` 

Only the client the run belongs to runs it, and nothing it writes on the ref reaches the others: the script keeps per player state, like a chapel altar's day of last use. On an actor it acts as OwnerOnly.




