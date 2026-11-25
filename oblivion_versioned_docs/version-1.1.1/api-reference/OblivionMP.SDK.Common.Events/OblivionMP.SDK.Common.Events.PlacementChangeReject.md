---
title: 'Enum PlacementChangeReject'
description: 'Why a placement change is refused.'
---
# Enum PlacementChangeReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a placement change is refused.

```csharp
public enum PlacementChangeReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`NoEntity = 1` 

No placed entity holds that ref.



`Claimed = 2` 

A mod is the ref's only writer, no script changes it.



`OtherCell = 3` 

The ref stays in its cell, a move into another one is not carried.




