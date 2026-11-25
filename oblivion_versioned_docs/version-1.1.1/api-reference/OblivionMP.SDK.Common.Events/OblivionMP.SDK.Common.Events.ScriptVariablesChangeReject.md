---
title: 'Enum ScriptVariablesChangeReject'
description: 'Why a script variables change is refused.'
---
# Enum ScriptVariablesChangeReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a script variables change is refused.

```csharp
public enum ScriptVariablesChangeReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`NoEntity = 1` 

No entity with script variables holds that ref.



`Claimed = 2` 

A mod is the ref's only writer, no script changes it.



`PerPlayer = 3` 

The script runs per player, every client keeps its own variables of the ref.




