---
title: 'Struct Flora'
description: 'A plant or other harvestable object placed in the world.'
---
# Struct Flora

Namespace: [OblivionMP.SDK.Common.Archetypes](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.md)  
Assembly: OblivionMP.SDK.Common.dll  

A plant or other harvestable object placed in the world.

```csharp
[Archetype]
[Tag(typeof(AllowOwnershipTransferOnScopeEnterTag))]
[Tag(typeof(AllowOwnershipTransferOnScopeLeaveTag))]
[Include(typeof(RefIdMixin), "")]
[Include(typeof(BaseIdMixin), "")]
[Include(typeof(Transform), "")]
[Include(typeof(Presence), "")]
[Include(typeof(FloraState), "")]
[Include(typeof(ScriptPolicy), "")]
public readonly struct Flora : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_BaseId"></a> BaseId

The form this entity is made from, such as which kind of chest or which creature.

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_HarvestedBy"></a> HarvestedBy

The player who picked the plant.

```csharp
public PlayerId HarvestedBy { get; set; }
```

#### Property Value

 PlayerId

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_IsDestroyed"></a> IsDestroyed

Whether a script marked the object destroyed, which keeps it from activating.

```csharp
public bool IsDestroyed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_IsDisabled"></a> IsDisabled

Whether a seeded ref is enabled in the world. Starts from the game files and only the server writes it.

```csharp
public bool IsDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_IsHarvested"></a> IsHarvested

Whether the plant has been picked.

```csharp
public bool IsHarvested { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_Position"></a> Position

The position in the game's world space, in centimeters.

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_RefId"></a> RefId

The ref id of this placed object or actor.

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_Rotation"></a> Rotation

The yaw, in degrees.

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_Run"></a> Run

How the ref's own script blocks run, **SessionDefault** for the session's rule of its kind.

```csharp
public ScriptRunPolicy Run { get; set; }
```

#### Property Value

 ScriptRunPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_Target"></a> Target

How script commands that change the ref run, **SessionDefault** for the session's rule.

```csharp
public ScriptTargetPolicy Target { get; set; }
```

#### Property Value

 ScriptTargetPolicy

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Flora Keep()
```

#### Returns

 [Flora](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Flora.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Flora_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


