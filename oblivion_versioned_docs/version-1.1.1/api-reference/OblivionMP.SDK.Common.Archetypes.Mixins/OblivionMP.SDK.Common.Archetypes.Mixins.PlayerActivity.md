---
title: 'Struct PlayerActivity'
description: 'What a player''s character is doing.'
---
# Struct PlayerActivity

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

What a player's character is doing.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct PlayerActivity : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_DetectedByOtherPlayer"></a> DetectedByOtherPlayer

Whether the player is sneaking and another player's character can see them.

```csharp
public bool DetectedByOtherPlayer { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_InCombat"></a> InCombat

Whether the character is in combat.

```csharp
public bool InCombat { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_InDialogue"></a> InDialogue

Whether the player is in a conversation.

```csharp
public bool InDialogue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public PlayerActivity Keep()
```

#### Returns

 [PlayerActivity](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.PlayerActivity.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_PlayerActivity_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


