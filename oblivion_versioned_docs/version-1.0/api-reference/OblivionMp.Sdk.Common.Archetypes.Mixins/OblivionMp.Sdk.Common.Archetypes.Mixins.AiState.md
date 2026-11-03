---
title: 'Struct AiState'
description: 'What an NPC''s AI is doing, as reported by the game that simulates it.'
---
# Struct AiState

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

What an NPC's AI is doing, as reported by the game that simulates it.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct AiState : IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_Overridden"></a> Overridden

Whether the NPC runs a package laid over its schedule, such as a server order, rather than its own.

```csharp
public bool Overridden { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_PackageFormId"></a> PackageFormId

The form id of the AI package the NPC is running now.

```csharp
public uint PackageFormId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_PackageType"></a> PackageType

The type of that package.

```csharp
public AiPackageType PackageType { get; set; }
```

#### Property Value

 AiPackageType

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_Procedure"></a> Procedure

The step of the package the NPC is on.

```csharp
public AiProcedure Procedure { get; set; }
```

#### Property Value

 AiProcedure

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_ProcedureIndex"></a> ProcedureIndex

The index of that step within the package.

```csharp
public int ProcedureIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_ReportedOutcome"></a> ReportedOutcome

How that order ended, or **None** before any has ended.

```csharp
public AiIntentOutcome ReportedOutcome { get; set; }
```

#### Property Value

 AiIntentOutcome

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_ReportedSeq"></a> ReportedSeq

The sequence number of the last order the NPC finished.

```csharp
public ushort ReportedSeq { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AiState_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public AiState Keep()
```

#### Returns

 [AiState](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.AiState.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


