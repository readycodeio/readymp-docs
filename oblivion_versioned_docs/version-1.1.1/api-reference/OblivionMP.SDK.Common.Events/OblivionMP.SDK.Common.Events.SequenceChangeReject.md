---
title: 'Enum SequenceChangeReject'
description: 'Why a sequence change is refused.'
---
# Enum SequenceChangeReject

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

Why a sequence change is refused.

```csharp
public enum SequenceChangeReject
```

## Fields

`Refused = 0` 

A rule of a mod.



`NoEntity = 1` 

No entity with a sequence holds that ref.



`Claimed = 2` 

A mod is the ref's only writer, no script changes it.




