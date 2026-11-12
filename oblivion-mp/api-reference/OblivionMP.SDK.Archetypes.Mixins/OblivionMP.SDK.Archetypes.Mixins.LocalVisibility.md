---
title: 'Struct LocalVisibility'
description: 'How visible a character is in this player''s game.'
---
# Struct LocalVisibility

Namespace: [OblivionMP.SDK.Archetypes.Mixins](../OblivionMP.SDK.Archetypes.Mixins/OblivionMP.SDK.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.dll  

How visible a character is in this player's game.

```csharp
[ArchetypeMixin(Replication.None)]
[Extends(typeof(MainCharacter), "")]
public readonly struct LocalVisibility : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalVisibility_Hidden"></a> Hidden

How hard the character is to see here: 0 in plain sight, 1 invisible.

```csharp
public float Hidden { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalVisibility_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalVisibility_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalVisibility_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LocalVisibility Keep()
```

#### Returns

 [LocalVisibility](../OblivionMP.SDK.Archetypes.Mixins/OblivionMP.SDK.Archetypes.Mixins.LocalVisibility.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalVisibility_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


