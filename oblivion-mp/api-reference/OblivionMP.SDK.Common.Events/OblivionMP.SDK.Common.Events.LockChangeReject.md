---
title: 'Enum LockChangeReject'
description: 'Why a lock change is refused.'
---
# Enum LockChangeReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a lock change is refused.

```csharp
public enum LockChangeReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`NoLock = 1` 

No door or container of the server holds that ref.



`NotInArea = 2` 

A hand reaches only the locks in its area.



`SourceCannotLock = 3` 

A key, a pick or a spell only unlocks.



`KeyMissing = 4` 

The actor does not carry the lock's key.



`NoClaim = 5` 

The actor is not the one picking the lock.



`Claimed = 6` 

A mod is the ref's only writer, no script changes it.




