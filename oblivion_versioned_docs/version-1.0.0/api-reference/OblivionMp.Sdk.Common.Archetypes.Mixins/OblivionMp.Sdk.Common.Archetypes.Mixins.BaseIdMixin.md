---
title: 'Struct BaseIdMixin'
description: 'The game form an entity is an instance of.'
---
# Struct BaseIdMixin

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The game form an entity is an instance of.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct BaseIdMixin : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_BaseIdMixin_BaseId"></a> BaseId

The form this entity is made from, such as which kind of chest or which creature.

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_BaseIdMixin_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public BaseIdMixin Keep()
```

#### Returns

 [BaseIdMixin](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.BaseIdMixin.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


