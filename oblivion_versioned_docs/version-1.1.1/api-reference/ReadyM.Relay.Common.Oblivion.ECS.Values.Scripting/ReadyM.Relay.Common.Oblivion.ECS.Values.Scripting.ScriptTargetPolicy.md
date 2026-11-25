---
title: 'Enum ScriptTargetPolicy'
description: 'How script commands that change a ref run, whichever script issues them.'
---
# Enum ScriptTargetPolicy

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting](../ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting/ReadyM.Relay.Common.Oblivion.ECS.Values.Scripting.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

How script commands that change a ref run, whichever script issues them.

```csharp
public enum ScriptTargetPolicy : byte
```

## Fields

`SessionDefault = 0` 

The session's default, on an entity only.



`Everywhere = 1` 

Every client that runs the command applies it, the game's own behaviour.



`AuthorityOnly = 2` 

Only the client that holds the authority of the running block applies it, the mod's own sync carries the result to the others.



`Never = 3` 

No script changes it, the mod is its only writer.




