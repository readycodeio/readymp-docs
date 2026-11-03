---
title: 'Struct EnchantedItemForm'
description: 'A dynamic enchanted item (a weapon, armor or clothing a player enchanted): every field of the item plus its enchantment, enough to create the item on a client that has never seen it. Fields a form type does not have stay at their defaults.'
---
# Struct EnchantedItemForm

Namespace: [OblivionMp.Sdk.Common.Archetypes](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A dynamic enchanted item (a weapon, armor or clothing a player enchanted): every field of the item plus its
enchantment, enough to create the item on a client that has never seen it. Fields a form type does not have
stay at their defaults.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
public readonly struct EnchantedItemForm : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ArmorRating"></a> ArmorRating

The armor's rating, as the engine stores it.

```csharp
public ushort ArmorRating { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_AttackDamage"></a> AttackDamage

The weapon's base damage.

```csharp
public ushort AttackDamage { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_BipedFlags"></a> BipedFlags

The armor's or clothing's biped flags.

```csharp
public byte BipedFlags { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_BipedSlots"></a> BipedSlots

The body slots the armor or clothing covers.

```csharp
public ushort BipedSlots { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_BlueprintClassPath"></a> BlueprintClassPath

The UE actor class that shows the item in the world and in hand, as a soft object path "/Package.Asset".

```csharp
public NativeString256 BlueprintClassPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_BodyPartActorClassPath"></a> BodyPartActorClassPath

The UE actor class of armor or clothing worn on a body, as an object path; empty for weapons.

```csharp
public NativeString256 BodyPartActorClassPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_EffectsCount"></a> EffectsCount

```csharp
public int EffectsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_EnchantmentCharge"></a> EnchantmentCharge

The enchantment's own charge amount; -1 on enchantments the player made.

```csharp
public int EnchantmentCharge { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_EnchantmentCost"></a> EnchantmentCost

The enchantment's per-use charge cost, used only when its auto-calculation flag is off; -1 on enchantments the player made.

```csharp
public int EnchantmentCost { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_EnchantmentFlags"></a> EnchantmentFlags

The enchantment's flags; bit 0 turns off the auto-calculated cost.

```csharp
public byte EnchantmentFlags { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_EnchantmentType"></a> EnchantmentType

The kind of item the enchantment is made for.

```csharp
public EnchantmentType EnchantmentType { get; set; }
```

#### Property Value

 EnchantmentType

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_FemaleBipedModelBound"></a> FemaleBipedModelBound

The bound radius of the model worn by a female character.

```csharp
public float FemaleBipedModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_FemaleBipedModelPath"></a> FemaleBipedModelPath

The model worn by a female character, and its bound radius.

```csharp
public NativeString256 FemaleBipedModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_FemaleGroundModelBound"></a> FemaleGroundModelBound

The bound radius of the female ground model.

```csharp
public float FemaleGroundModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_FemaleGroundModelPath"></a> FemaleGroundModelPath

The model shown when the female version lies on the ground, and its bound radius.

```csharp
public NativeString256 FemaleGroundModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_FemaleIconPath"></a> FemaleIconPath

The path of the female version's inventory icon.

```csharp
public NativeString256 FemaleIconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_Health"></a> Health

The item's full durability (weapons and armor).

```csharp
public uint Health { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_IconPath"></a> IconPath

The path of the weapon's inventory icon.

```csharp
public NativeString256 IconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ItemFormType"></a> ItemFormType

The engine form type of the item: armor (0x14), clothing (0x16) or weapon (0x21).

```csharp
public byte ItemFormType { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_MaleBipedModelBound"></a> MaleBipedModelBound

The bound radius of the model worn by a male character.

```csharp
public float MaleBipedModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_MaleBipedModelPath"></a> MaleBipedModelPath

The model worn by a male character, and its bound radius.

```csharp
public NativeString256 MaleBipedModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_MaleGroundModelBound"></a> MaleGroundModelBound

The bound radius of the male ground model.

```csharp
public float MaleGroundModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_MaleGroundModelPath"></a> MaleGroundModelPath

The model shown when the male version lies on the ground, and its bound radius.

```csharp
public NativeString256 MaleGroundModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_MaleIconPath"></a> MaleIconPath

The inventory icons of the male and female versions.

```csharp
public NativeString256 MaleIconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_MaxCharge"></a> MaxCharge

The item's full enchantment charge.

```csharp
public ushort MaxCharge { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ModelBound"></a> ModelBound

The bound radius of the weapon's model.

```csharp
public float ModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ModelPath"></a> ModelPath

The path of the weapon's 3D model, used in the inventory preview, in hand and when dropped.

```csharp
public NativeString256 ModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_Name"></a> Name

The item's display name.

```csharp
public NativeString256 Name { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ScriptFormId"></a> ScriptFormId

The form ID of the script attached to the item, from the game files; 0 when it has none.

```csharp
public uint ScriptFormId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_Value"></a> Value

The item's gold value.

```csharp
public int Value { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_WeaponFlags"></a> WeaponFlags

The weapon's flags.

```csharp
public uint WeaponFlags { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_WeaponReach"></a> WeaponReach

The weapon's reach.

```csharp
public float WeaponReach { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_WeaponSpeed"></a> WeaponSpeed

The weapon's speed.

```csharp
public float WeaponSpeed { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_WeaponType"></a> WeaponType

The weapon's type (blade, blunt, staff, bow, ...).

```csharp
public uint WeaponType { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_Weight"></a> Weight

The item's weight.

```csharp
public float Weight { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_AddEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> AddEffects\(in MagicEffectEntry\)

```csharp
[Changes("EnchantedItemForm.Field.Effects")]
public void AddEffects(in MagicEffectEntry value)
```

#### Parameters

`value` MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ClearEffects"></a> ClearEffects\(\)

```csharp
[Changes("EnchantedItemForm.Field.Effects")]
public void ClearEffects()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_ContainsEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> ContainsEffects\(in MagicEffectEntry\)

```csharp
public bool ContainsEffects(in MagicEffectEntry value)
```

#### Parameters

`value` MagicEffectEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_GetEffects"></a> GetEffects\(\)

```csharp
public NativeList<MagicEffectEntry>.ReadOnly GetEffects()
```

#### Returns

 NativeList<MagicEffectEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_GetEffects_System_Int32_"></a> GetEffects\(int\)

```csharp
public MagicEffectEntry GetEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_InsertEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> InsertEffects\(int, in MagicEffectEntry\)

```csharp
[Changes("EnchantedItemForm.Field.Effects")]
public void InsertEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public EnchantedItemForm Keep()
```

#### Returns

 [EnchantedItemForm](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.EnchantedItemForm.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_RemoveAtEffects_System_Int32_"></a> RemoveAtEffects\(int\)

```csharp
[Changes("EnchantedItemForm.Field.Effects")]
public MagicEffectEntry RemoveAtEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_SetEffects_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry___"></a> SetEffects\(in NativeList<MagicEffectEntry\>\)

```csharp
[Changes("EnchantedItemForm.Field.Effects")]
public void SetEffects(in NativeList<MagicEffectEntry> value)
```

#### Parameters

`value` NativeList<MagicEffectEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_SetEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> SetEffects\(int, in MagicEffectEntry\)

```csharp
[Changes("EnchantedItemForm.Field.Effects")]
public void SetEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` MagicEffectEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_EnchantedItemForm_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


