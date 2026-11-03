---
title: 'Struct DroppedItem'
description: 'An item lying on the ground.'
---
# Struct DroppedItem

Namespace: [OblivionMp.Sdk.Common.Archetypes](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.md)  
Assembly: OblivionMp.Sdk.Common.dll  

An item lying on the ground.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
[Tag(typeof(AllowOwnershipTransferOnScopeEnterTag))]
[Tag(typeof(AllowOwnershipTransferOnScopeLeaveTag))]
[Include(typeof(Transform), "")]
[Include(typeof(RefIdMixin), "")]
[Include(typeof(BaseIdMixin), "")]
[Include(typeof(ItemExtraData), "")]
[Include(typeof(Presence), "")]
[Include(typeof(SeedOrigin), "")]
[Include(typeof(ParentCell), "ParentCell")]
public readonly struct DroppedItem : IArchetype, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetype, 
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

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_BaseId"></a> BaseId

The form this entity is made from, such as which kind of chest or which creature.

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_Charge"></a> Charge

The item's enchantment charge, or -1 for its default or none.

```csharp
public float Charge { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_Durability"></a> Durability

The item's condition, or -1 for its default or none.

```csharp
public float Durability { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_IsDisabled"></a> IsDisabled

Whether a seeded ref is enabled in the world. Starts from the game files and only the server writes it.

```csharp
public bool IsDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_IsPersistent"></a> IsPersistent

Whether the item is a persistent reference in the game files, which does not respawn.

```csharp
public bool IsPersistent { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_ParentCellKind"></a> ParentCellKind

Whether the cell is an interior or an exterior, or <code>Unknown</code> before the game has said.

```csharp
public ParentCellKind ParentCellKind { get; set; }
```

#### Property Value

 ParentCellKind

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_ParentCellX"></a> ParentCellX

The X coordinate of the exterior grid square.

```csharp
public int ParentCellX { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_ParentCellY"></a> ParentCellY

The Y coordinate of the exterior grid square.

```csharp
public int ParentCellY { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_Position"></a> Position

The position in the game's world space, in centimeters.

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_RefId"></a> RefId

The ref id of this placed object or actor.

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_Rotation"></a> Rotation

The yaw, in degrees.

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_SeededCount"></a> SeededCount

How many items the stack held when the server seeded it, or 0 when it was not seeded.

```csharp
public int SeededCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_StackSize"></a> StackSize

How many items lie in the stack.

```csharp
public int StackSize { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public DroppedItem Keep()
```

#### Returns

 [DroppedItem](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.DroppedItem.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_DroppedItem_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


