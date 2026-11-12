---
title: 'Struct MappedActor'
description: 'The game object that shows an entity in this player''s game.'
---
# Struct MappedActor

Namespace: [OblivionMP.SDK.Archetypes.Mixins](../OblivionMP.SDK.Archetypes.Mixins/OblivionMP.SDK.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.dll  

The game object that shows an entity in this player's game.

```csharp
[ArchetypeMixin(Replication.None)]
[Extends(typeof(MainCharacter), "")]
[Extends(typeof(Npc), "")]
[Extends(typeof(Furniture), "")]
public readonly struct MappedActor : IArchetypeMixin, IArchetypeQueryable, IEntityShape, IIndexed<nint>
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape, 
IIndexed<nint\>

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Archetypes_Mixins_MappedActor_Pawn"></a> Pawn

The game object that shows this entity, or <code>IntPtr.Zero</code> while there is none.

```csharp
public nint Pawn { get; }
```

#### Property Value

 [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Methods

### <a id="OblivionMP_SDK_Archetypes_Mixins_MappedActor_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Archetypes_Mixins_MappedActor_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Archetypes_Mixins_MappedActor_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public MappedActor Keep()
```

#### Returns

 [MappedActor](../OblivionMP.SDK.Archetypes.Mixins/OblivionMP.SDK.Archetypes.Mixins.MappedActor.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Archetypes_Mixins_MappedActor_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


