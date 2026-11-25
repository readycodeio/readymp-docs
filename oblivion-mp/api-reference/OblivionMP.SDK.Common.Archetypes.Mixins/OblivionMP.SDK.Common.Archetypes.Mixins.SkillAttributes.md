---
title: 'Struct SkillAttributes'
description: 'A character''s attributes and skills with active effects applied, as the owner''s game has them. Read-only: to change one, write BaseSkillAttributes.'
---
# Struct SkillAttributes

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

A character's attributes and skills with active effects applied, as the owner's game has them. Read-only: to change
one, write **BaseSkillAttributes**.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct SkillAttributes : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SkillAttributes_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SkillAttributes_GetEffective_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterAttribute_"></a> GetEffective\(CharacterAttribute\)

The attribute's or skill's value with active effects applied.

```csharp
public float GetEffective(CharacterAttribute attribute)
```

#### Parameters

`attribute` CharacterAttribute

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

The owner's game has not reported it yet.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SkillAttributes_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SkillAttributes_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public SkillAttributes Keep()
```

#### Returns

 [SkillAttributes](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.SkillAttributes.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SkillAttributes_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SkillAttributes_TryGetEffective_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterAttribute_System_Single__"></a> TryGetEffective\(CharacterAttribute, out float\)

The attribute's or skill's value with active effects applied, if the owner's game has reported it.

```csharp
public bool TryGetEffective(CharacterAttribute attribute, out float value)
```

#### Parameters

`attribute` CharacterAttribute

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


