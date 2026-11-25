---
title: 'Struct Player'
description: 'A scope for one connected player, from connecting until disconnecting.'
---
# Struct Player

Namespace: [ReadyM.SDK.Archetypes.Core](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.md)  
Assembly: ReadyM.SDK.dll  

A scope for one connected player, from connecting until disconnecting.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
public readonly struct Player : IScope, IArchetype, IArchetypeQueryable, IEntityShape, IIndexed<PlayerId>
```

#### Implements

[IScope](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IScope.md), 
[IArchetype](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetype.md), 
[IArchetypeQueryable](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md), 
[IEntityShape](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IEntityShape.md), 
[IIndexed<PlayerId\>](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IIndexed-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ArchetypeExtensions.IsValid<Player\>\(Player\)](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md#ReadyM\_SDK\_Archetypes\_ArchetypeExtensions\_IsValid\_\_1\_\_\_0\_)

## Properties

### <a id="ReadyM_SDK_Archetypes_Core_Player_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_SDK_Archetypes_Core_Player_PlayerId"></a> PlayerId

Which player this is.

```csharp
public PlayerId PlayerId { get; set; }
```

#### Property Value

 PlayerId

## Methods

### <a id="ReadyM_SDK_Archetypes_Core_Player_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_Player_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Archetypes_Core_Player_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Player Keep()
```

#### Returns

 [Player](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="ReadyM_SDK_Archetypes_Core_Player_TryAs__1___0__"></a> TryAs<T\>\(out T\)

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

### <a id="ReadyM_SDK_Archetypes_Core_Player_op_Implicit_ReadyM_SDK_Archetypes_Core_Player__ReadyM_SDK_Archetypes_Scope"></a> implicit operator Scope\(Player\)

```csharp
public static implicit operator Scope(Player value)
```

#### Parameters

`value` [Player](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md)

#### Returns

 Scope


