---
title: 'Struct ItemExtraData'
description: 'The condition and enchantment charge of a dropped item.'
---
# Struct ItemExtraData

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The condition and enchantment charge of a dropped item.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct ItemExtraData : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemExtraData_Charge"></a> Charge

The item's enchantment charge, or -1 for its default or none.

```csharp
public float Charge { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemExtraData_Durability"></a> Durability

The item's condition, or -1 for its default or none.

```csharp
public float Durability { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemExtraData_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ItemExtraData Keep()
```

#### Returns

 [ItemExtraData](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ItemExtraData.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


