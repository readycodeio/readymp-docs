---
title: 'Enum LockpickReject'
description: 'Why a player may not pick the lock.'
---
# Enum LockpickReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a player may not pick the lock.

```csharp
public enum LockpickReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`NoLock = 1` 

No door or container of the server holds that ref, the pick is the player's own game's.



`NotInArea = 2` 

The player is not in the lock's area.



`NotLocked = 3` 

The lock is open.



`SomeoneElsePicking = 4` 

Another player is picking it.




