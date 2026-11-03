---
title: 'Struct World'
description: 'The one entity that stands for the whole session and carries session-wide values.'
---
# Struct World

Namespace: [ReadyM.SDK.Archetypes.Core](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.md)  
Assembly: ReadyM.SDK.dll  

The one entity that stands for the whole session and carries session-wide values.

```csharp
[Archetype]
public readonly struct World : IArchetype, IArchetypeQueryable, IEntityShape
```

#### Implements

[IArchetype](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetype.md), 
[IArchetypeQueryable](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md), 
[IEntityShape](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IEntityShape.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ArchetypeExtensions.IsValid<World\>\(World\)](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md#ReadyM\_SDK\_Archetypes\_ArchetypeExtensions\_IsValid\_\_1\_\_\_0\_)

## Properties

### <a id="ReadyM_SDK_Archetypes_Core_World_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ReadyM_SDK_Archetypes_Core_World_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_World_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_World_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public World Keep()
```

#### Returns

 [World](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="ReadyM_SDK_Archetypes_Core_World_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


