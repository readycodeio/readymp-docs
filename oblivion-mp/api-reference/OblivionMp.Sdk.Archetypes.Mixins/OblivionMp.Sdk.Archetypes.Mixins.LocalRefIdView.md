---
title: 'Struct LocalRefIdView'
description: 'Walks this shape by chunk. Valid only inside the loop that produced it.'
---
# Struct LocalRefIdView

Namespace: [OblivionMp.Sdk.Archetypes.Mixins](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.dll  

Walks this shape by chunk. Valid only inside the loop that produced it.

```csharp
public readonly ref struct LocalRefIdView : IArchetypeChunkView<LocalRefIdView>, IEntityShape
```

#### Implements

IArchetypeChunkView<LocalRefIdView\>, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_Components"></a> Components

The components a query has to ask for, in the order the slots arrive in.

```csharp
static ComponentSet Components { get; }
```

#### Property Value

 ComponentSet

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_Handle"></a> Handle

The way out to anything a chunk view cannot do, such as a structural change after the loop.

```csharp
public EntityHandle Handle { get; }
```

#### Property Value

 EntityHandle

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_RefId"></a> RefId

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_SlotCount"></a> SlotCount

How many slots this view consumes, so several can share one chunk's worth.

```csharp
static int SlotCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

One slot per component, which the set already knows, so a view that does not say is not
wrong. The generator states it anyway, as a constant rather than a field read.

## Methods

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_At_System_Int32_"></a> At\(int\)

The same binding, moved to another entity of the same chunk.

```csharp
public LocalRefIdView At(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [LocalRefIdView](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.LocalRefIdView.md)

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_Bind_System_ReadOnlySpan_ReadyM_SDK_Chunks_ChunkSlot__System_ReadOnlySpan_Friflo_Engine_ECS_RawEntity__ReadyM_SDK_Entities_EntityHandle_"></a> Bind\(ReadOnlySpan<ChunkSlot\>, ReadOnlySpan<RawEntity\>, EntityHandle\)

Binds the view to one chunk, positioned at its first entity.

```csharp
static LocalRefIdView Bind(ReadOnlySpan<ChunkSlot> slots, ReadOnlySpan<RawEntity> entities, EntityHandle prototype)
```

#### Parameters

`slots` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<ChunkSlot\>

`entities` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<RawEntity\>

`prototype` EntityHandle

#### Returns

 [LocalRefIdView](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.LocalRefIdView.md)

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalRefIdView_Keep"></a> Keep\(\)

This entity as the shape, which is what a view cannot be: one outlives the loop, the other does not.

```csharp
public LocalRefId Keep()
```

#### Returns

 [LocalRefId](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.LocalRefId.md)

#### Remarks

For collecting entities to act on afterwards. The shape reads through a handle rather than the
chunk, so it costs a lookup per value; inside the loop the view is the cheaper way to read.


