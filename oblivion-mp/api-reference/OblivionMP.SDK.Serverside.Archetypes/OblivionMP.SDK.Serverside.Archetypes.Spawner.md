---
title: 'Struct Spawner'
description: 'A leveled creature spawn point from the game, kept on the server only.'
---
# Struct Spawner

Namespace: [OblivionMP.SDK.Serverside.Archetypes](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

A leveled creature spawn point from the game, kept on the server only.

```csharp
[Archetype(Networked = false)]
[Include(typeof(RefIdMixin), "")]
[Include(typeof(BaseIdMixin), "")]
[Include(typeof(Transform), "")]
[Include(typeof(ParentCell), "ParentCell")]
[Include(typeof(LevelMixin), "")]
[Include(typeof(SpawnerState), "")]
public readonly struct Spawner : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_BaseId"></a> BaseId

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_Level"></a> Level

```csharp
public ushort Level { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_ParentCellKind"></a> ParentCellKind

```csharp
public ParentCellKind ParentCellKind { get; set; }
```

#### Property Value

 ParentCellKind

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_ParentCellX"></a> ParentCellX

```csharp
public int ParentCellX { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_ParentCellY"></a> ParentCellY

```csharp
public int ParentCellY { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_Position"></a> Position

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_RefId"></a> RefId

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_Rotation"></a> Rotation

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Spawner Keep()
```

#### Returns

 [Spawner](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.Spawner.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Serverside_Archetypes_Spawner_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


