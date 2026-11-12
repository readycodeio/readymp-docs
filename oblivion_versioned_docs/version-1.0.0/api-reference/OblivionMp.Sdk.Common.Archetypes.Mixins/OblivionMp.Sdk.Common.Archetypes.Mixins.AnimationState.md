---
title: 'Struct AnimationState'
description: 'The animation state of a character, as its game reports it.'
---
# Struct AnimationState

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The animation state of a character, as its game reports it.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct AnimationState : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AnimActionSamplesCount"></a> AnimActionSamplesCount

```csharp
public int AnimActionSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AnimIsStaggered"></a> AnimIsStaggered

The game's staggered animation flag.

```csharp
public bool AnimIsStaggered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AnimTagsCount"></a> AnimTagsCount

```csharp
public int AnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AttackingRequest"></a> AttackingRequest

Whether an attack animation is requested.

```csharp
public bool AttackingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AttackingTagsCount"></a> AttackingTagsCount

```csharp
public int AttackingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_BlockAnimLayerClassName"></a> BlockAnimLayerClassName

The class name of the animation layer for blocking.

```csharp
public NativeString256 BlockAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_BlockingTagsCount"></a> BlockingTagsCount

```csharp
public int BlockingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CanExitAttack"></a> CanExitAttack

Whether the character can leave the attack animation.

```csharp
public bool CanExitAttack { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CanExitBlock"></a> CanExitBlock

Whether the character can leave the block animation.

```csharp
public bool CanExitBlock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CanFootLock"></a> CanFootLock

The game's <code>CanFootLock</code> animation flag.

```csharp
public bool CanFootLock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CanUseOrientationWarping"></a> CanUseOrientationWarping

The game's <code>CanUseOrientationWarping</code> animation flag.

```csharp
public bool CanUseOrientationWarping { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CastingRequest"></a> CastingRequest

Whether a spell casting animation is requested.

```csharp
public bool CastingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CastingRequestSamplesCount"></a> CastingRequestSamplesCount

```csharp
public int CastingRequestSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CharacterStateFlags"></a> CharacterStateFlags

Whether the character is running, sneaking, swimming, jumping, blocking, staggered, falling, dodging or holding a torch.

```csharp
public CharacterStateFlags CharacterStateFlags { get; set; }
```

#### Property Value

 CharacterStateFlags

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ComboHitIndex"></a> ComboHitIndex

The index of the current hit in a melee combo.

```csharp
public int ComboHitIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CompWeaponDrawn"></a> CompWeaponDrawn

The game's <code>CompWeaponDrawn</code> animation flag.

```csharp
public bool CompWeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CurrentAnimAction"></a> CurrentAnimAction

The game's current animation action, as a raw value.

```csharp
public byte CurrentAnimAction { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_CurrentGait"></a> CurrentGait

The name of the character's current gait.

```csharp
public NativeString256 CurrentGait { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_DodgeAnimLayerClassName"></a> DodgeAnimLayerClassName

The class name of the animation layer for dodging.

```csharp
public NativeString256 DodgeAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_DodgingRequest"></a> DodgingRequest

Whether a dodge animation is requested.

```csharp
public bool DodgingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_EquipUnequipTagsCount"></a> EquipUnequipTagsCount

```csharp
public int EquipUnequipTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ForceExitEquip"></a> ForceExitEquip

The game's <code>ForceExitEquip</code> animation flag.

```csharp
public bool ForceExitEquip { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GameplayTagsCount"></a> GameplayTagsCount

```csharp
public int GameplayTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetUpAnimLayerClassName"></a> GetUpAnimLayerClassName

The class name of the animation layer for getting up.

```csharp
public NativeString256 GetUpAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_HasMeleeWeapon"></a> HasMeleeWeapon

Whether the character has a melee weapon equipped.

```csharp
public bool HasMeleeWeapon { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InAirAnimLayerClassName"></a> InAirAnimLayerClassName

The class name of the animation layer for being in the air.

```csharp
public NativeString256 InAirAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InCombatStance"></a> InCombatStance

Whether the character is in a combat stance.

```csharp
public bool InCombatStance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_IsMoving"></a> IsMoving

Whether the character is moving.

```csharp
public bool IsMoving { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_IsStartCompleted"></a> IsStartCompleted

The game's <code>IsStartCompleted</code> animation flag.

```csharp
public bool IsStartCompleted { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_IsUsingFullBody"></a> IsUsingFullBody

Whether the current animation uses the full body.

```csharp
public bool IsUsingFullBody { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_LastAnimTagsCount"></a> LastAnimTagsCount

```csharp
public int LastAnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_MeleeMontageSamplesCount"></a> MeleeMontageSamplesCount

```csharp
public int MeleeMontageSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_MeleePlayRate"></a> MeleePlayRate

The play rate of that melee sequence.

```csharp
public float MeleePlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_MeleeSequenceName"></a> MeleeSequenceName

The name of the melee animation sequence playing.

```csharp
public NativeString256 MeleeSequenceName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_MontageName"></a> MontageName

The name of the animation montage playing.

```csharp
public NativeString256 MontageName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_MontagePosition"></a> MontagePosition

The play position within that montage.

```csharp
public float MontagePosition { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_OrientRotationToMovement"></a> OrientRotationToMovement

Whether the character turns to face the way it moves.

```csharp
public bool OrientRotationToMovement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RecoilAnimLayerClassName"></a> RecoilAnimLayerClassName

The class name of the animation layer for recoiling.

```csharp
public NativeString256 RecoilAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RecoilingRequest"></a> RecoilingRequest

Whether a recoil animation is requested.

```csharp
public bool RecoilingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ShieldHandPoseAnimLayerClassName"></a> ShieldHandPoseAnimLayerClassName

The class name of the animation layer for the shield hand pose.

```csharp
public NativeString256 ShieldHandPoseAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SpellCastAnimLayerClassName"></a> SpellCastAnimLayerClassName

The class name of the animation layer for casting spells.

```csharp
public NativeString256 SpellCastAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_StaggerAnimLayerClassName"></a> StaggerAnimLayerClassName

The class name of the animation layer for staggering.

```csharp
public NativeString256 StaggerAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_TorchAnimLayerClassName"></a> TorchAnimLayerClassName

The class name of the animation layer for holding a torch.

```csharp
public NativeString256 TorchAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_UseControllerDesiredRotation"></a> UseControllerDesiredRotation

The game's <code>UseControllerDesiredRotation</code> movement setting.

```csharp
public bool UseControllerDesiredRotation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_UseControllerRotationYaw"></a> UseControllerRotationYaw

The game's <code>UseControllerRotationYaw</code> movement setting.

```csharp
public bool UseControllerRotationYaw { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_UseRotationSpeedCurve"></a> UseRotationSpeedCurve

The game's <code>UseRotationSpeedCurve</code> movement setting.

```csharp
public bool UseRotationSpeedCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_WantsToRun"></a> WantsToRun

Whether the character wants to run.

```csharp
public bool WantsToRun { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_WeaponDrawn"></a> WeaponDrawn

Whether the character has a weapon drawn.

```csharp
public bool WeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddAnimActionSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void AddAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddAnimTags_Yooni_Native_Container_NativeString256__"></a> AddAnimTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void AddAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddAttackingTags_Yooni_Native_Container_NativeString256__"></a> AddAttackingTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void AddAttackingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddBlockingTags_Yooni_Native_Container_NativeString256__"></a> AddBlockingTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void AddBlockingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddCastingRequestSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void AddCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> AddEquipUnequipTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void AddEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddGameplayTags_Yooni_Native_Container_NativeString256__"></a> AddGameplayTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void AddGameplayTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddLastAnimTags_Yooni_Native_Container_NativeString256__"></a> AddLastAnimTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void AddLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_AddMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddMeleeMontageSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void AddMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearAnimActionSamples"></a> ClearAnimActionSamples\(\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void ClearAnimActionSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearAnimTags"></a> ClearAnimTags\(\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void ClearAnimTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearAttackingTags"></a> ClearAttackingTags\(\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void ClearAttackingTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearBlockingTags"></a> ClearBlockingTags\(\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void ClearBlockingTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearCastingRequestSamples"></a> ClearCastingRequestSamples\(\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void ClearCastingRequestSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearEquipUnequipTags"></a> ClearEquipUnequipTags\(\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void ClearEquipUnequipTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearGameplayTags"></a> ClearGameplayTags\(\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void ClearGameplayTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearLastAnimTags"></a> ClearLastAnimTags\(\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void ClearLastAnimTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ClearMeleeMontageSamples"></a> ClearMeleeMontageSamples\(\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void ClearMeleeMontageSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsAnimActionSamples\(in SequencedSample\)

```csharp
public bool ContainsAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsAnimTags\(in NativeString256\)

```csharp
public bool ContainsAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsAttackingTags_Yooni_Native_Container_NativeString256__"></a> ContainsAttackingTags\(in NativeString256\)

```csharp
public bool ContainsAttackingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsBlockingTags_Yooni_Native_Container_NativeString256__"></a> ContainsBlockingTags\(in NativeString256\)

```csharp
public bool ContainsBlockingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsCastingRequestSamples\(in SequencedSample\)

```csharp
public bool ContainsCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> ContainsEquipUnequipTags\(in NativeString256\)

```csharp
public bool ContainsEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsGameplayTags_Yooni_Native_Container_NativeString256__"></a> ContainsGameplayTags\(in NativeString256\)

```csharp
public bool ContainsGameplayTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsLastAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsLastAnimTags\(in NativeString256\)

```csharp
public bool ContainsLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_ContainsMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsMeleeMontageSamples\(in SequencedSample\)

```csharp
public bool ContainsMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetAnimActionSamples"></a> GetAnimActionSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetAnimActionSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetAnimActionSamples_System_Int32_"></a> GetAnimActionSamples\(int\)

```csharp
public SequencedSample GetAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetAnimTags"></a> GetAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAnimTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetAnimTags_System_Int32_"></a> GetAnimTags\(int\)

```csharp
public NativeString256 GetAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetAttackingTags"></a> GetAttackingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAttackingTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetAttackingTags_System_Int32_"></a> GetAttackingTags\(int\)

```csharp
public NativeString256 GetAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetBlockingTags"></a> GetBlockingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetBlockingTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetBlockingTags_System_Int32_"></a> GetBlockingTags\(int\)

```csharp
public NativeString256 GetBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetCastingRequestSamples"></a> GetCastingRequestSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetCastingRequestSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetCastingRequestSamples_System_Int32_"></a> GetCastingRequestSamples\(int\)

```csharp
public SequencedSample GetCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetEquipUnequipTags"></a> GetEquipUnequipTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetEquipUnequipTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetEquipUnequipTags_System_Int32_"></a> GetEquipUnequipTags\(int\)

```csharp
public NativeString256 GetEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetGameplayTags"></a> GetGameplayTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetGameplayTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetGameplayTags_System_Int32_"></a> GetGameplayTags\(int\)

```csharp
public NativeString256 GetGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetLastAnimTags"></a> GetLastAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetLastAnimTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetLastAnimTags_System_Int32_"></a> GetLastAnimTags\(int\)

```csharp
public NativeString256 GetLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetMeleeMontageSamples"></a> GetMeleeMontageSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetMeleeMontageSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_GetMeleeMontageSamples_System_Int32_"></a> GetMeleeMontageSamples\(int\)

```csharp
public SequencedSample GetMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertAnimActionSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void InsertAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void InsertAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAttackingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void InsertAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertBlockingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void InsertBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertCastingRequestSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void InsertCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertEquipUnequipTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void InsertEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertGameplayTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void InsertGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertLastAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void InsertLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_InsertMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertMeleeMontageSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void InsertMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public AnimationState Keep()
```

#### Returns

 [AnimationState](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.AnimationState.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtAnimActionSamples_System_Int32_"></a> RemoveAtAnimActionSamples\(int\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public SequencedSample RemoveAtAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtAnimTags_System_Int32_"></a> RemoveAtAnimTags\(int\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public NativeString256 RemoveAtAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtAttackingTags_System_Int32_"></a> RemoveAtAttackingTags\(int\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public NativeString256 RemoveAtAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtBlockingTags_System_Int32_"></a> RemoveAtBlockingTags\(int\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public NativeString256 RemoveAtBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtCastingRequestSamples_System_Int32_"></a> RemoveAtCastingRequestSamples\(int\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public SequencedSample RemoveAtCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtEquipUnequipTags_System_Int32_"></a> RemoveAtEquipUnequipTags\(int\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public NativeString256 RemoveAtEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtGameplayTags_System_Int32_"></a> RemoveAtGameplayTags\(int\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public NativeString256 RemoveAtGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtLastAnimTags_System_Int32_"></a> RemoveAtLastAnimTags\(int\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public NativeString256 RemoveAtLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_RemoveAtMeleeMontageSamples_System_Int32_"></a> RemoveAtMeleeMontageSamples\(int\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public SequencedSample RemoveAtMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetAnimActionSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetAnimActionSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void SetAnimActionSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetAnimActionSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void SetAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAnimTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void SetAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void SetAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetAttackingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAttackingTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void SetAttackingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAttackingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void SetAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetBlockingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetBlockingTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void SetBlockingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetBlockingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void SetBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetCastingRequestSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetCastingRequestSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void SetCastingRequestSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetCastingRequestSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void SetCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetEquipUnequipTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetEquipUnequipTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void SetEquipUnequipTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetEquipUnequipTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void SetEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetGameplayTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetGameplayTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void SetGameplayTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetGameplayTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void SetGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetLastAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetLastAnimTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void SetLastAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetLastAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void SetLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetMeleeMontageSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetMeleeMontageSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void SetMeleeMontageSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AnimationState_SetMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetMeleeMontageSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void SetMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample


