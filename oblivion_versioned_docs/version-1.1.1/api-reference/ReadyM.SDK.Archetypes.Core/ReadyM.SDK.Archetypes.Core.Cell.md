---
title: 'Struct Cell'
description: 'A scope for one loaded cell of an area, holding what is in it.'
---
# Struct Cell

Namespace: [ReadyM.SDK.Archetypes.Core](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.md)  
Assembly: ReadyM.SDK.dll  

A scope for one loaded cell of an area, holding what is in it.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
public readonly struct Cell : IScope, IArchetype, IArchetypeQueryable, IEntityShape, IIndexed<FullCellId>
```

#### Implements

[IScope](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IScope.md), 
[IArchetype](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetype.md), 
[IArchetypeQueryable](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md), 
[IEntityShape](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IEntityShape.md), 
[IIndexed<FullCellId\>](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IIndexed-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ArchetypeExtensions.IsValid<Cell\>\(Cell\)](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md#ReadyM\_SDK\_Archetypes\_ArchetypeExtensions\_IsValid\_\_1\_\_\_0\_)

## Properties

### <a id="ReadyM_SDK_Archetypes_Core_Cell_FullCellId"></a> FullCellId

Which cell this is, with its area.

```csharp
[Index]
public FullCellId FullCellId { get; set; }
```

#### Property Value

 FullCellId

### <a id="ReadyM_SDK_Archetypes_Core_Cell_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_SDK_Archetypes_Core_Cell_MasterClient"></a> MasterClient

The player whose game simulates what the cell holds, or <code>PlayerId.Invalid</code> while nobody is there.

```csharp
public PlayerId MasterClient { get; set; }
```

#### Property Value

 PlayerId

## Methods

### <a id="ReadyM_SDK_Archetypes_Core_Cell_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_Cell_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_Cell_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Cell Keep()
```

#### Returns

 [Cell](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="ReadyM_SDK_Archetypes_Core_Cell_TryAs__1___0__"></a> TryAs<T\>\(out T\)

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

### <a id="ReadyM_SDK_Archetypes_Core_Cell_op_Implicit_ReadyM_SDK_Archetypes_Core_Cell__ReadyM_SDK_Archetypes_Scope"></a> implicit operator Scope\(Cell\)

```csharp
public static implicit operator Scope(Cell value)
```

#### Parameters

`value` [Cell](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)

#### Returns

 Scope


