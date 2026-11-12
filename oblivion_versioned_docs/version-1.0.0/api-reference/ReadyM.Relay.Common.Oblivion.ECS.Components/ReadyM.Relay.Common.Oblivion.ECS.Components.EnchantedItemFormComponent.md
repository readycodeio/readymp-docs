---
title: 'Struct EnchantedItemFormComponent'
description: 'Everything needed to materialize one dynamic enchanted item form (created at runtime, like a weapon, armor or clothing the player enchanted). The engine makes such a form as a copy of an item from the game files with a new enchantment attached, but nothing on the copy remembers which item that was, so this carries every field the engine''s copy takes over, plus the enchantment.'
---
# Struct EnchantedItemFormComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Everything needed to materialize one dynamic enchanted item form (created at runtime, like a weapon, armor or
clothing the player enchanted). The engine makes such a form as a copy of an item from the game files with a new
enchantment attached, but nothing on the copy remembers which item that was, so this carries every field the
engine's copy takes over, plus the enchantment.

```csharp
public struct EnchantedItemFormComponent : IComponent, INetSerializable, IDisposable
```

#### Implements

IComponent, 
INetSerializable, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

An entity with this component is a form entity that identifies this form across network, so all clients and
the server can reference that form in network messages even though the form itself doesn't exist on server
and each client materializes it locally with a different dynamic formID.
<p>
Fields that a form type does not have stay at their defaults: weapons have no biped data or armor rating,
armor has no model, icon, damage or weapon data of its own (its models and icons are in the biped data),
clothing additionally has no health.
</p>

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent__ctor_Yooni_Native_LowLevel_AllocatorKind_"></a> EnchantedItemFormComponent\(AllocatorKind\)

Everything needed to materialize one dynamic enchanted item form (created at runtime, like a weapon, armor or
clothing the player enchanted). The engine makes such a form as a copy of an item from the game files with a new
enchantment attached, but nothing on the copy remembers which item that was, so this carries every field the
engine's copy takes over, plus the enchantment.

```csharp
public EnchantedItemFormComponent(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` AllocatorKind

#### Remarks

An entity with this component is a form entity that identifies this form across network, so all clients and
the server can reference that form in network messages even though the form itself doesn't exist on server
and each client materializes it locally with a different dynamic formID.
<p>
Fields that a form type does not have stay at their defaults: weapons have no biped data or armor rating,
armor has no model, icon, damage or weapon data of its own (its models and icons are in the biped data),
clothing additionally has no health.
</p>

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ArmorRating"></a> ArmorRating

The armor's rating, as the engine stores it.

```csharp
public ushort ArmorRating { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_AttackDamage"></a> AttackDamage

The weapon's base damage.

```csharp
public ushort AttackDamage { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_BipedFlags"></a> BipedFlags

The armor's or clothing's biped flags.

```csharp
public byte BipedFlags { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_BipedSlots"></a> BipedSlots

The body slots the armor or clothing covers.

```csharp
public ushort BipedSlots { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_BlueprintClassPath"></a> BlueprintClassPath

The UE actor class that shows the item in the world and in hand (the item's UObject's BlueprintClass), as a
soft object path "/Package.Asset". The engine copies it from the game-file item an enchanted item is made of,
so a client that creates the item from this data has to be told; without it UE uses a placeholder actor.

```csharp
public NativeString256 BlueprintClassPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_BodyPartActorClassPath"></a> BodyPartActorClassPath

The UE actor class of armor or clothing worn on a body (the item's BodyPartActorClass), as an object path
"/Package.Asset"; empty for weapons. Copied from the game-file item the same way as the blueprint class.

```csharp
public NativeString256 BodyPartActorClassPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_EffectsCount"></a> EffectsCount

```csharp
public int EffectsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_EnchantmentCharge"></a> EnchantmentCharge

The enchantment's own charge amount; -1 on enchantments the player made.

```csharp
public int EnchantmentCharge { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_EnchantmentCost"></a> EnchantmentCost

The enchantment's per-use charge cost, used only when its auto-calculation flag is off; -1 on enchantments the player made.

```csharp
public int EnchantmentCost { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_EnchantmentFlags"></a> EnchantmentFlags

The enchantment's flags; bit 0 turns off the auto-calculated cost.

```csharp
public byte EnchantmentFlags { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_EnchantmentType"></a> EnchantmentType

The kind of item the enchantment is made for.

```csharp
public EnchantmentType EnchantmentType { get; set; }
```

#### Property Value

 [EnchantmentType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.EnchantmentType.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_FemaleBipedModelBound"></a> FemaleBipedModelBound

The bound radius of the model worn by a female character.

```csharp
public float FemaleBipedModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_FemaleBipedModelPath"></a> FemaleBipedModelPath

The path of the model worn by a female character.

```csharp
public NativeString256 FemaleBipedModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_FemaleGroundModelBound"></a> FemaleGroundModelBound

The bound radius of the female ground model.

```csharp
public float FemaleGroundModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_FemaleGroundModelPath"></a> FemaleGroundModelPath

The path of the model shown when the female version lies on the ground.

```csharp
public NativeString256 FemaleGroundModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_FemaleIconPath"></a> FemaleIconPath

The path of the female version's inventory icon.

```csharp
public NativeString256 FemaleIconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_Health"></a> Health

The item's full durability (weapons and armor).

```csharp
public uint Health { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_IconPath"></a> IconPath

The path of the weapon's inventory icon.

```csharp
public NativeString256 IconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ItemFormType"></a> ItemFormType

The engine form type of the item: armor (0x14), clothing (0x16) or weapon (0x21).

```csharp
public byte ItemFormType { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_MaleBipedModelBound"></a> MaleBipedModelBound

The bound radius of the model worn by a male character.

```csharp
public float MaleBipedModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_MaleBipedModelPath"></a> MaleBipedModelPath

The path of the model worn by a male character.

```csharp
public NativeString256 MaleBipedModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_MaleGroundModelBound"></a> MaleGroundModelBound

The bound radius of the male ground model.

```csharp
public float MaleGroundModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_MaleGroundModelPath"></a> MaleGroundModelPath

The path of the model shown when the male version lies on the ground.

```csharp
public NativeString256 MaleGroundModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_MaleIconPath"></a> MaleIconPath

The path of the male version's inventory icon.

```csharp
public NativeString256 MaleIconPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_MaxCharge"></a> MaxCharge

The item's full enchantment charge.

```csharp
public ushort MaxCharge { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ModelBound"></a> ModelBound

The bound radius of the weapon's model.

```csharp
public float ModelBound { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ModelPath"></a> ModelPath

The path of the weapon's 3D model, used in the inventory preview, in hand and when dropped.

```csharp
public NativeString256 ModelPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_Name"></a> Name

The item's display name.

```csharp
public NativeString256 Name { get; set; }
```

#### Property Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ScriptFormId"></a> ScriptFormId

The form ID of the script attached to the item, from the game files; 0 when it has none.

```csharp
public uint ScriptFormId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_Value"></a> Value

The item's gold value.

```csharp
public int Value { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_WeaponFlags"></a> WeaponFlags

The weapon's flags.

```csharp
public uint WeaponFlags { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_WeaponReach"></a> WeaponReach

The weapon's reach.

```csharp
public float WeaponReach { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_WeaponSpeed"></a> WeaponSpeed

The weapon's speed.

```csharp
public float WeaponSpeed { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_WeaponType"></a> WeaponType

The weapon's type (blade, blunt, staff, bow, ...).

```csharp
public uint WeaponType { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_Weight"></a> Weight

The item's weight.

```csharp
public float Weight { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_AddEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> AddEffects\(in MagicEffectEntry\)

```csharp
public void AddEffects(in MagicEffectEntry value)
```

#### Parameters

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ClearEffects"></a> ClearEffects\(\)

```csharp
public void ClearEffects()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_ContainsEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> ContainsEffects\(in MagicEffectEntry\)

```csharp
public bool ContainsEffects(in MagicEffectEntry value)
```

#### Parameters

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_GetEffects"></a> GetEffects\(\)

```csharp
public NativeList<MagicEffectEntry>.ReadOnly GetEffects()
```

#### Returns

 NativeList<[MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)\>.ReadOnly

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_GetEffects_System_Int32_"></a> GetEffects\(int\)

```csharp
public MagicEffectEntry GetEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_InsertEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> InsertEffects\(int, in MagicEffectEntry\)

```csharp
public void InsertEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_RemoveAtEffects_System_Int32_"></a> RemoveAtEffects\(int\)

```csharp
public MagicEffectEntry RemoveAtEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_SetEffects_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry___"></a> SetEffects\(in NativeList<MagicEffectEntry\>\)

```csharp
public void SetEffects(in NativeList<MagicEffectEntry> value)
```

#### Parameters

`value` NativeList<[MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EnchantedItemFormComponent_SetEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> SetEffects\(int, in MagicEffectEntry\)

```csharp
public void SetEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)


