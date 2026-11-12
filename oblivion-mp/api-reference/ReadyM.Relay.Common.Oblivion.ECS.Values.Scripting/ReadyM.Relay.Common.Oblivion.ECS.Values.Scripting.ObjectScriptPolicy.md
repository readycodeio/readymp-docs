---
title: 'Enum ObjectScriptPolicy'
description: 'How the session runs the scripts of an object such as an activator, a door or a container.'
---
# Enum ObjectScriptPolicy

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting](../ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting/ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

How the session runs the scripts of an object such as an activator, a door or a container.

```csharp
public enum ObjectScriptPolicy : byte
```

## Fields

`Run = 0` 

Every client runs it, the game's own behaviour.



`Block = 1` 

No client runs it.



`OwnerOnly = 2` 

Only the client the run belongs to runs it: the one that activated it, the owner of the actor in its trigger, or the area master.




