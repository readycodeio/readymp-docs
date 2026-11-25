---
title: 'Enum ScriptEventReject'
description: 'Why a script event stays with the client that raised it.'
---
# Enum ScriptEventReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a script event stays with the client that raised it.

```csharp
public enum ScriptEventReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`Blocked = 1` 

The script, the ref or the topic info is blocked in the session's scripting rules.



`OwnerOnly = 2` 

The ref's blocks run on the instigator's client only.



`PerPlayer = 3` 

The script runs per player, every client keeps its own state of the ref.




