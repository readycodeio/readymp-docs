---
title: 'Struct AlchemyForm'
description: 'A potion a player brewed, shared with every client and the server.'
---
# Struct AlchemyForm

Namespace: [OblivionMp.Sdk.Common.Archetypes](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A potion a player brewed, shared with every client and the server.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
public readonly struct AlchemyForm : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_EffectsCount"></a> EffectsCount

```csharp
public int EffectsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_Flags"></a> Flags

The game's flags for the potion, as a raw byte.

```csharp
public byte Flags { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_IconPath"></a> IconPath

The path of the item's inventory icon texture.

```csharp
public NativeString256 IconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_ModelPath"></a> ModelPath

The path of the item's 3D model, used for both the inventory preview and the dropped-in-world mesh.

```csharp
public NativeString256 ModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_Name"></a> Name

The item's display name.

```csharp
public NativeString256 Name { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_Value"></a> Value

The potion's value in gold.

```csharp
public uint Value { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_Weight"></a> Weight

The potion's weight.

```csharp
public float Weight { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_AddEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> AddEffects\(in MagicEffectEntry\)

```csharp
[Changes("AlchemyForm.Field.Effects")]
public void AddEffects(in MagicEffectEntry value)
```

#### Parameters

`value` MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_ClearEffects"></a> ClearEffects\(\)

```csharp
[Changes("AlchemyForm.Field.Effects")]
public void ClearEffects()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_ContainsEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> ContainsEffects\(in MagicEffectEntry\)

```csharp
public bool ContainsEffects(in MagicEffectEntry value)
```

#### Parameters

`value` MagicEffectEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_GetEffects"></a> GetEffects\(\)

```csharp
public NativeList<MagicEffectEntry>.ReadOnly GetEffects()
```

#### Returns

 NativeList<MagicEffectEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_GetEffects_System_Int32_"></a> GetEffects\(int\)

```csharp
public MagicEffectEntry GetEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_InsertEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> InsertEffects\(int, in MagicEffectEntry\)

```csharp
[Changes("AlchemyForm.Field.Effects")]
public void InsertEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public AlchemyForm Keep()
```

#### Returns

 [AlchemyForm](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.AlchemyForm.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_RemoveAtEffects_System_Int32_"></a> RemoveAtEffects\(int\)

```csharp
[Changes("AlchemyForm.Field.Effects")]
public MagicEffectEntry RemoveAtEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_SetEffects_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry___"></a> SetEffects\(in NativeList<MagicEffectEntry\>\)

```csharp
[Changes("AlchemyForm.Field.Effects")]
public void SetEffects(in NativeList<MagicEffectEntry> value)
```

#### Parameters

`value` NativeList<MagicEffectEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_SetEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> SetEffects\(int, in MagicEffectEntry\)

```csharp
[Changes("AlchemyForm.Field.Effects")]
public void SetEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_AlchemyForm_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


