---
title: 'Struct Area'
description: 'A scope for one area of the world, holding what is in it while players are there.'
---
# Struct Area

Namespace: [ReadyM.SDK.Archetypes.Core](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.md)  
Assembly: ReadyM.SDK.dll  

A scope for one area of the world, holding what is in it while players are there.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
public readonly struct Area : IScope, IArchetype, IArchetypeQueryable, IEntityShape, IIndexed<AreaId>
```

#### Implements

[IScope](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IScope.md), 
[IArchetype](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetype.md), 
[IArchetypeQueryable](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md), 
[IEntityShape](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IEntityShape.md), 
[IIndexed<AreaId\>](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IIndexed-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ArchetypeExtensions.IsValid<Area\>\(Area\)](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md#ReadyM\_SDK\_Archetypes\_ArchetypeExtensions\_IsValid\_\_1\_\_\_0\_)

## Properties

### <a id="ReadyM_SDK_Archetypes_Core_Area_AreaId"></a> AreaId

Which area this is.

```csharp
[Index]
public AreaId AreaId { get; set; }
```

#### Property Value

 AreaId

### <a id="ReadyM_SDK_Archetypes_Core_Area_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_SDK_Archetypes_Core_Area_MasterClient"></a> MasterClient

The player whose game simulates what the area holds.

```csharp
public PlayerId MasterClient { get; set; }
```

#### Property Value

 PlayerId

## Methods

### <a id="ReadyM_SDK_Archetypes_Core_Area_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_Area_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_Area_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Area Keep()
```

#### Returns

 [Area](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="ReadyM_SDK_Archetypes_Core_Area_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

## Operators

### <a id="ReadyM_SDK_Archetypes_Core_Area_op_Implicit_ReadyM_SDK_Archetypes_Core_Area__ReadyM_SDK_Archetypes_Scope"></a> implicit operator Scope\(Area\)

```csharp
public static implicit operator Scope(Area value)
```

#### Parameters

`value` [Area](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md)

#### Returns

 Scope


