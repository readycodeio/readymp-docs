---
title: 'Struct LevelScaling'
description: 'The level the session''s leveled lists roll at.'
---
# Struct LevelScaling

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The level the session's leveled lists roll at.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(World), "")]
public readonly struct LevelScaling : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LevelScaling_LevelBlend"></a> LevelBlend

Where between the lowest (0) and the highest (1) player level leveled lists roll.

```csharp
public float LevelBlend { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LevelScaling_Policy"></a> Policy

Whether level scaling is on.

```csharp
public ScalingPolicy Policy { get; set; }
```

#### Property Value

 ScalingPolicy

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LevelScaling_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LevelScaling Keep()
```

#### Returns

 [LevelScaling](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.LevelScaling.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


