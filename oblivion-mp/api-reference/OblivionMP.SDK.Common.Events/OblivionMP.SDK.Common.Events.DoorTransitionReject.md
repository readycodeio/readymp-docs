---
title: 'Enum DoorTransitionReject'
description: 'Why a door transition is refused.'
---
# Enum DoorTransitionReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a door transition is refused.

```csharp
public enum DoorTransitionReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`NoDoor = 1` 

No door of the server holds that ref.



`NotInArea = 2` 

A hand reaches only the doors in its area.



`Locked = 3` 

A locked door stays shut.



`Claimed = 4` 

A mod is the ref's only writer, no script changes it.




