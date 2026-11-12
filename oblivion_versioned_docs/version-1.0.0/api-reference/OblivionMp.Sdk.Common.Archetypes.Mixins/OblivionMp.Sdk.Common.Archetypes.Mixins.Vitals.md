---
title: 'Struct Vitals'
description: 'Health, magicka and fatigue, current and maximum, and whether the character is dead.'
---
# Struct Vitals

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

Health, magicka and fatigue, current and maximum, and whether the character is dead.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct Vitals : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_Fatigue"></a> Fatigue

Current fatigue.

```csharp
public float Fatigue { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_FatigueBase"></a> FatigueBase

Maximum fatigue.

```csharp
public float FatigueBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_Hp"></a> Hp

Current health.

```csharp
public float Hp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_HpBase"></a> HpBase

Maximum health.

```csharp
public float HpBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_IsDead"></a> IsDead

Whether the character is dead.

```csharp
public bool IsDead { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_Magicka"></a> Magicka

Current magicka.

```csharp
public float Magicka { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_MagickaBase"></a> MagickaBase

Maximum magicka.

```csharp
public float MagickaBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Vitals_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Vitals Keep()
```

#### Returns

 [Vitals](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Vitals.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


