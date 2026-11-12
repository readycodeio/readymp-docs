---
title: 'Enum ActorScriptPolicy'
description: 'How the session runs the scripts of an actor.'
---
# Enum ActorScriptPolicy

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting](../ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting/ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

How the session runs the scripts of an actor.

```csharp
public enum ActorScriptPolicy : byte
```

## Fields

`Run = 0` 

Every client runs it, the game's own behaviour.



`Block = 1` 

No client runs it.



`OwnerOnly = 2` 

Only the client that simulates the actor runs it, the others get the outcome through the sync.




