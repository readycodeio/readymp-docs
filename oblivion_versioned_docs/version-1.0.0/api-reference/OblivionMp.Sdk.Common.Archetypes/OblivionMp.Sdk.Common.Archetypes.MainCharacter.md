---
title: 'Struct MainCharacter'
description: 'A player''s character in the world.'
---
# Struct MainCharacter

Namespace: [OblivionMp.Sdk.Common.Archetypes](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A player's character in the world.

```csharp
[Archetype(Replication = Replication.OwnershipBased)]
[Include(typeof(Transform), "")]
[Include(typeof(AnimationMovement), "")]
[Include(typeof(AnimationState), "")]
[Include(typeof(Appearance), "")]
[Include(typeof(CharacterIdentity), "")]
[Include(typeof(Equipment), "")]
[Include(typeof(Vitals), "")]
[Include(typeof(PlayerActivity), "")]
[Include(typeof(EffectsAttributes), "Effect")]
[Include(typeof(SkillAttributes), "Skill")]
[Include(typeof(SocialAttributes), "Social")]
[Include(typeof(ParentCell), "ParentCell")]
[Include(typeof(BaseIdMixin), "")]
[Include(typeof(LevelMixin), "")]
[Include(typeof(Quiver), "")]
public readonly struct MainCharacter : IArchetype, IArchetypeQueryable, IEntityShape, IIndexed<PlayerId>
```

#### Implements

IArchetype, 
IArchetypeQueryable, 
IEntityShape, 
IIndexed<PlayerId\>

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AnimActionSamplesCount"></a> AnimActionSamplesCount

```csharp
public int AnimActionSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AnimIsStaggered"></a> AnimIsStaggered

The game's staggered animation flag.

```csharp
public bool AnimIsStaggered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AnimTagsCount"></a> AnimTagsCount

```csharp
public int AnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ArrowCount"></a> ArrowCount

How many arrows are equipped.

```csharp
public int ArrowCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AttackingRequest"></a> AttackingRequest

Whether an attack animation is requested.

```csharp
public bool AttackingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AttackingTagsCount"></a> AttackingTagsCount

```csharp
public int AttackingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_BaseId"></a> BaseId

The form this entity is made from, such as which kind of chest or which creature.

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_BeardPath"></a> BeardPath

The asset path of the beard.

```csharp
public NativeString256 BeardPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Birthsign"></a> Birthsign

The form ID of the character's birthsign.

```csharp
public FormId Birthsign { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_BlockAnimLayerClassName"></a> BlockAnimLayerClassName

The class name of the animation layer for blocking.

```csharp
public NativeString256 BlockAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_BlockingTagsCount"></a> BlockingTagsCount

```csharp
public int BlockingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_BoneScalingCount"></a> BoneScalingCount

```csharp
public int BoneScalingCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CanExitAttack"></a> CanExitAttack

Whether the character can leave the attack animation.

```csharp
public bool CanExitAttack { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CanExitBlock"></a> CanExitBlock

Whether the character can leave the block animation.

```csharp
public bool CanExitBlock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CanFootLock"></a> CanFootLock

The game's <code>CanFootLock</code> animation flag.

```csharp
public bool CanFootLock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CanUseOrientationWarping"></a> CanUseOrientationWarping

The game's <code>CanUseOrientationWarping</code> animation flag.

```csharp
public bool CanUseOrientationWarping { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CastingRequest"></a> CastingRequest

Whether a spell casting animation is requested.

```csharp
public bool CastingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CastingRequestSamplesCount"></a> CastingRequestSamplesCount

```csharp
public int CastingRequestSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CharacterStateFlags"></a> CharacterStateFlags

Whether the character is running, sneaking, swimming, jumping, blocking, staggered, falling, dodging or holding a torch.

```csharp
public CharacterStateFlags CharacterStateFlags { get; set; }
```

#### Property Value

 CharacterStateFlags

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Class"></a> Class

The form ID of the character's class.

```csharp
public FormId Class { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ComboHitIndex"></a> ComboHitIndex

The index of the current hit in a melee combo.

```csharp
public int ComboHitIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CompWeaponDrawn"></a> CompWeaponDrawn

The game's <code>CompWeaponDrawn</code> animation flag.

```csharp
public bool CompWeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CurrentAnimAction"></a> CurrentAnimAction

The game's current animation action, as a raw value.

```csharp
public byte CurrentAnimAction { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CurrentGait"></a> CurrentGait

The name of the character's current gait.

```csharp
public NativeString256 CurrentGait { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CurrentPoison"></a> CurrentPoison

The poison on the equipped weapon.

```csharp
public NetworkFormId CurrentPoison { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CustomisationBeardIndex"></a> CustomisationBeardIndex

Which beard option is picked in the character creator.

```csharp
public int CustomisationBeardIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CustomisationEyeMaterialIndex"></a> CustomisationEyeMaterialIndex

Which eye option is picked in the character creator.

```csharp
public int CustomisationEyeMaterialIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CustomisationEyebrowsIndex"></a> CustomisationEyebrowsIndex

Which eyebrows option is picked in the character creator.

```csharp
public int CustomisationEyebrowsIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CustomisationHairIndex"></a> CustomisationHairIndex

Which hair option is picked in the character creator.

```csharp
public int CustomisationHairIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_CustomisationMustacheIndex"></a> CustomisationMustacheIndex

Which mustache option is picked in the character creator.

```csharp
public int CustomisationMustacheIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_DetectedByOtherPlayer"></a> DetectedByOtherPlayer

Whether the player is sneaking and another player's character can see them.

```csharp
public bool DetectedByOtherPlayer { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_DodgeAnimLayerClassName"></a> DodgeAnimLayerClassName

The class name of the animation layer for dodging.

```csharp
public NativeString256 DodgeAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_DodgingRequest"></a> DodgingRequest

Whether a dodge animation is requested.

```csharp
public bool DodgingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_EffectAttributeCount"></a> EffectAttributeCount

```csharp
public int EffectAttributeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_EquipUnequipTagsCount"></a> EquipUnequipTagsCount

```csharp
public int EquipUnequipTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_EyeMaterialPath"></a> EyeMaterialPath

The asset path of the eye material.

```csharp
public NativeString256 EyeMaterialPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_EyebrowsPath"></a> EyebrowsPath

The asset path of the eyebrows.

```csharp
public NativeString256 EyebrowsPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_FaceBaseMeshPath"></a> FaceBaseMeshPath

The asset path of the base face mesh.

```csharp
public NativeString256 FaceBaseMeshPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_FaceMatOverrideCount"></a> FaceMatOverrideCount

```csharp
public int FaceMatOverrideCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_FaceMorphCount"></a> FaceMorphCount

```csharp
public int FaceMorphCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_FaceMorphsSourcePath"></a> FaceMorphsSourcePath

The asset path of the face morphs source.

```csharp
public NativeString256 FaceMorphsSourcePath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Fatigue"></a> Fatigue

Current fatigue.

```csharp
public float Fatigue { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_FatigueBase"></a> FatigueBase

Maximum fatigue.

```csharp
public float FatigueBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ForceExitEquip"></a> ForceExitEquip

The game's <code>ForceExitEquip</code> animation flag.

```csharp
public bool ForceExitEquip { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GameplayTagsCount"></a> GameplayTagsCount

```csharp
public int GameplayTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetUpAnimLayerClassName"></a> GetUpAnimLayerClassName

The class name of the animation layer for getting up.

```csharp
public NativeString256 GetUpAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_HairPath"></a> HairPath

The asset path of the hair.

```csharp
public NativeString256 HairPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_HasMeleeWeapon"></a> HasMeleeWeapon

Whether the character has a melee weapon equipped.

```csharp
public bool HasMeleeWeapon { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_HasQuiver"></a> HasQuiver

Whether the character has arrows equipped.

```csharp
public bool HasQuiver { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Hp"></a> Hp

Current health.

```csharp
public float Hp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_HpBase"></a> HpBase

Maximum health.

```csharp
public float HpBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InAirAnimLayerClassName"></a> InAirAnimLayerClassName

The class name of the animation layer for being in the air.

```csharp
public NativeString256 InAirAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InCombat"></a> InCombat

Whether the character is in combat.

```csharp
public bool InCombat { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InCombatStance"></a> InCombatStance

Whether the character is in a combat stance.

```csharp
public bool InCombatStance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InDialogue"></a> InDialogue

Whether the player is in a conversation.

```csharp
public bool InDialogue { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsDead"></a> IsDead

Whether the character is dead.

```csharp
public bool IsDead { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsFemale"></a> IsFemale

Whether the character is female.

```csharp
public bool IsFemale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsMoving"></a> IsMoving

Whether the character is moving.

```csharp
public bool IsMoving { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsServerSeeded"></a> IsServerSeeded

Set by the server when it writes an npc's items, so the owner client follows the list even when it is empty.

```csharp
public bool IsServerSeeded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsStartCompleted"></a> IsStartCompleted

The game's <code>IsStartCompleted</code> animation flag.

```csharp
public bool IsStartCompleted { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsUsingFullBody"></a> IsUsingFullBody

Whether the current animation uses the full body.

```csharp
public bool IsUsingFullBody { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ItemsCount"></a> ItemsCount

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_LastAnimTagsCount"></a> LastAnimTagsCount

```csharp
public int LastAnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Level"></a> Level

The current level.

```csharp
public ushort Level { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Magicka"></a> Magicka

Current magicka.

```csharp
public float Magicka { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MagickaBase"></a> MagickaBase

Maximum magicka.

```csharp
public float MagickaBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MeleeMontageSamplesCount"></a> MeleeMontageSamplesCount

```csharp
public int MeleeMontageSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MeleePlayRate"></a> MeleePlayRate

The play rate of that melee sequence.

```csharp
public float MeleePlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MeleeSequenceName"></a> MeleeSequenceName

The name of the melee animation sequence playing.

```csharp
public NativeString256 MeleeSequenceName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MontageName"></a> MontageName

The name of the animation montage playing.

```csharp
public NativeString256 MontageName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MontagePosition"></a> MontagePosition

The play position within that montage.

```csharp
public float MontagePosition { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_MustachePath"></a> MustachePath

The asset path of the mustache.

```csharp
public NativeString256 MustachePath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Name"></a> Name

The character's name, as typed in character creation. The player's nickname is **NicknameMixin**.

```csharp
public NativeString256 Name { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_OrientRotationToMovement"></a> OrientRotationToMovement

Whether the character turns to face the way it moves.

```csharp
public bool OrientRotationToMovement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ParentCellKind"></a> ParentCellKind

Whether the cell is an interior or an exterior, or <code>Unknown</code> before the game has said.

```csharp
public ParentCellKind ParentCellKind { get; set; }
```

#### Property Value

 ParentCellKind

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ParentCellX"></a> ParentCellX

The X coordinate of the exterior grid square.

```csharp
public int ParentCellX { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ParentCellY"></a> ParentCellY

The Y coordinate of the exterior grid square.

```csharp
public int ParentCellY { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_PlayerId"></a> PlayerId

The player this character belongs to.

```csharp
public PlayerId PlayerId { get; set; }
```

#### Property Value

 PlayerId

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Position"></a> Position

The position in the game's world space, in centimeters.

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Race"></a> Race

The form ID of the character's race.

```csharp
public FormId Race { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RacePath"></a> RacePath

The asset path of the character's race.

```csharp
public NativeString256 RacePath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RecoilAnimLayerClassName"></a> RecoilAnimLayerClassName

The class name of the animation layer for recoiling.

```csharp
public NativeString256 RecoilAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RecoilingRequest"></a> RecoilingRequest

Whether a recoil animation is requested.

```csharp
public bool RecoilingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Rotation"></a> Rotation

The yaw, in degrees.

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SenescenceLevel"></a> SenescenceLevel

The age level of the character's face.

```csharp
public int SenescenceLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Sex"></a> Sex

The character's sex.

```csharp
public CharacterSex Sex { get; set; }
```

#### Property Value

 CharacterSex

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ShieldHandPoseAnimLayerClassName"></a> ShieldHandPoseAnimLayerClassName

The class name of the animation layer for the shield hand pose.

```csharp
public NativeString256 ShieldHandPoseAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SkillAttributeCount"></a> SkillAttributeCount

```csharp
public int SkillAttributeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SkinColorCount"></a> SkinColorCount

```csharp
public int SkinColorCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SkinParamCount"></a> SkinParamCount

```csharp
public int SkinParamCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SkinParameterDefinitionsPath"></a> SkinParameterDefinitionsPath

The asset path of the skin parameter definitions.

```csharp
public NativeString256 SkinParameterDefinitionsPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SocialAttributeCount"></a> SocialAttributeCount

```csharp
public int SocialAttributeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SpellCastAnimLayerClassName"></a> SpellCastAnimLayerClassName

The class name of the animation layer for casting spells.

```csharp
public NativeString256 SpellCastAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_StaggerAnimLayerClassName"></a> StaggerAnimLayerClassName

The class name of the animation layer for staggering.

```csharp
public NativeString256 StaggerAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TorchAnimLayerClassName"></a> TorchAnimLayerClassName

The class name of the animation layer for holding a torch.

```csharp
public NativeString256 TorchAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_UseControllerDesiredRotation"></a> UseControllerDesiredRotation

The game's <code>UseControllerDesiredRotation</code> movement setting.

```csharp
public bool UseControllerDesiredRotation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_UseControllerRotationYaw"></a> UseControllerRotationYaw

The game's <code>UseControllerRotationYaw</code> movement setting.

```csharp
public bool UseControllerRotationYaw { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_UseRotationSpeedCurve"></a> UseRotationSpeedCurve

The game's <code>UseRotationSpeedCurve</code> movement setting.

```csharp
public bool UseRotationSpeedCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_WantsToRun"></a> WantsToRun

Whether the character wants to run.

```csharp
public bool WantsToRun { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_WeaponDrawn"></a> WeaponDrawn

Whether the character has a weapon drawn.

```csharp
public bool WeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddAnimActionSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void AddAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddAnimTags_Yooni_Native_Container_NativeString256__"></a> AddAnimTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void AddAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddAttackingTags_Yooni_Native_Container_NativeString256__"></a> AddAttackingTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void AddAttackingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddBlockingTags_Yooni_Native_Container_NativeString256__"></a> AddBlockingTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void AddBlockingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddBoneScaling_Yooni_Native_Container_NativeString256__System_Single__"></a> AddBoneScaling\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public bool AddBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddCastingRequestSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void AddCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddEffectAttribute_System_Byte__System_Single__"></a> AddEffectAttribute\(in byte, in float\)

```csharp
[Changes("EffectsAttributes.Field.Attribute")]
public bool AddEffectAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> AddEquipUnequipTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void AddEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddFaceMatOverride_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> AddFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public bool AddFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddFaceMorph_Yooni_Native_Container_NativeString256__System_Single__"></a> AddFaceMorph\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public bool AddFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddGameplayTags_Yooni_Native_Container_NativeString256__"></a> AddGameplayTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void AddGameplayTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> AddItems\(in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void AddItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddLastAnimTags_Yooni_Native_Container_NativeString256__"></a> AddLastAnimTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void AddLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddMeleeMontageSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void AddMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddSkillAttribute_System_Byte__System_Single__"></a> AddSkillAttribute\(in byte, in float\)

```csharp
[Changes("SkillAttributes.Field.Attribute")]
public bool AddSkillAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddSkinColor_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> AddSkinColor\(in NativeString256, in Vector4\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public bool AddSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddSkinParam_Yooni_Native_Container_NativeString256__System_Single__"></a> AddSkinParam\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public bool AddSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_AddSocialAttribute_System_Byte__System_Single__"></a> AddSocialAttribute\(in byte, in float\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public bool AddSocialAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearAnimActionSamples"></a> ClearAnimActionSamples\(\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void ClearAnimActionSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearAnimTags"></a> ClearAnimTags\(\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void ClearAnimTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearAttackingTags"></a> ClearAttackingTags\(\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void ClearAttackingTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearBlockingTags"></a> ClearBlockingTags\(\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void ClearBlockingTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearBoneScaling"></a> ClearBoneScaling\(\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public void ClearBoneScaling()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearCastingRequestSamples"></a> ClearCastingRequestSamples\(\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void ClearCastingRequestSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearEffectAttribute"></a> ClearEffectAttribute\(\)

```csharp
[Changes("EffectsAttributes.Field.Attribute")]
public void ClearEffectAttribute()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearEquipUnequipTags"></a> ClearEquipUnequipTags\(\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void ClearEquipUnequipTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearFaceMatOverride"></a> ClearFaceMatOverride\(\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public void ClearFaceMatOverride()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearFaceMorph"></a> ClearFaceMorph\(\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public void ClearFaceMorph()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearGameplayTags"></a> ClearGameplayTags\(\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void ClearGameplayTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearItems"></a> ClearItems\(\)

```csharp
[Changes("Equipment.Field.Items")]
public void ClearItems()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearLastAnimTags"></a> ClearLastAnimTags\(\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void ClearLastAnimTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearMeleeMontageSamples"></a> ClearMeleeMontageSamples\(\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void ClearMeleeMontageSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearSkillAttribute"></a> ClearSkillAttribute\(\)

```csharp
[Changes("SkillAttributes.Field.Attribute")]
public void ClearSkillAttribute()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearSkinColor"></a> ClearSkinColor\(\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public void ClearSkinColor()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearSkinParam"></a> ClearSkinParam\(\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public void ClearSkinParam()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ClearSocialAttribute"></a> ClearSocialAttribute\(\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public void ClearSocialAttribute()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsAnimActionSamples\(in SequencedSample\)

```csharp
public bool ContainsAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsAnimTags\(in NativeString256\)

```csharp
public bool ContainsAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsAttackingTags_Yooni_Native_Container_NativeString256__"></a> ContainsAttackingTags\(in NativeString256\)

```csharp
public bool ContainsAttackingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsBlockingTags_Yooni_Native_Container_NativeString256__"></a> ContainsBlockingTags\(in NativeString256\)

```csharp
public bool ContainsBlockingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsBoneScaling_Yooni_Native_Container_NativeString256__System_Single__"></a> ContainsBoneScaling\(in NativeString256, in float\)

```csharp
public bool ContainsBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsBoneScalingKey_Yooni_Native_Container_NativeString256__"></a> ContainsBoneScalingKey\(in NativeString256\)

```csharp
public bool ContainsBoneScalingKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsCastingRequestSamples\(in SequencedSample\)

```csharp
public bool ContainsCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsEffectAttribute_System_Byte__System_Single__"></a> ContainsEffectAttribute\(in byte, in float\)

```csharp
public bool ContainsEffectAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsEffectAttributeKey_System_Byte__"></a> ContainsEffectAttributeKey\(in byte\)

```csharp
public bool ContainsEffectAttributeKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> ContainsEquipUnequipTags\(in NativeString256\)

```csharp
public bool ContainsEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsFaceMatOverride_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> ContainsFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
public bool ContainsFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsFaceMatOverrideKey_Yooni_Native_Container_NativeString256__"></a> ContainsFaceMatOverrideKey\(in NativeString256\)

```csharp
public bool ContainsFaceMatOverrideKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsFaceMorph_Yooni_Native_Container_NativeString256__System_Single__"></a> ContainsFaceMorph\(in NativeString256, in float\)

```csharp
public bool ContainsFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsFaceMorphKey_Yooni_Native_Container_NativeString256__"></a> ContainsFaceMorphKey\(in NativeString256\)

```csharp
public bool ContainsFaceMorphKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsGameplayTags_Yooni_Native_Container_NativeString256__"></a> ContainsGameplayTags\(in NativeString256\)

```csharp
public bool ContainsGameplayTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> ContainsItems\(in InventoryEntry\)

```csharp
public bool ContainsItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsLastAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsLastAnimTags\(in NativeString256\)

```csharp
public bool ContainsLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsMeleeMontageSamples\(in SequencedSample\)

```csharp
public bool ContainsMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSkillAttribute_System_Byte__System_Single__"></a> ContainsSkillAttribute\(in byte, in float\)

```csharp
public bool ContainsSkillAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSkillAttributeKey_System_Byte__"></a> ContainsSkillAttributeKey\(in byte\)

```csharp
public bool ContainsSkillAttributeKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSkinColor_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> ContainsSkinColor\(in NativeString256, in Vector4\)

```csharp
public bool ContainsSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSkinColorKey_Yooni_Native_Container_NativeString256__"></a> ContainsSkinColorKey\(in NativeString256\)

```csharp
public bool ContainsSkinColorKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSkinParam_Yooni_Native_Container_NativeString256__System_Single__"></a> ContainsSkinParam\(in NativeString256, in float\)

```csharp
public bool ContainsSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSkinParamKey_Yooni_Native_Container_NativeString256__"></a> ContainsSkinParamKey\(in NativeString256\)

```csharp
public bool ContainsSkinParamKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSocialAttribute_System_Byte__System_Single__"></a> ContainsSocialAttribute\(in byte, in float\)

```csharp
public bool ContainsSocialAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_ContainsSocialAttributeKey_System_Byte__"></a> ContainsSocialAttributeKey\(in byte\)

```csharp
public bool ContainsSocialAttributeKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetAnimActionSamples"></a> GetAnimActionSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetAnimActionSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetAnimActionSamples_System_Int32_"></a> GetAnimActionSamples\(int\)

```csharp
public SequencedSample GetAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetAnimTags"></a> GetAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAnimTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetAnimTags_System_Int32_"></a> GetAnimTags\(int\)

```csharp
public NativeString256 GetAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetAttackingTags"></a> GetAttackingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAttackingTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetAttackingTags_System_Int32_"></a> GetAttackingTags\(int\)

```csharp
public NativeString256 GetAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetBlockingTags"></a> GetBlockingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetBlockingTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetBlockingTags_System_Int32_"></a> GetBlockingTags\(int\)

```csharp
public NativeString256 GetBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetBoneScaling"></a> GetBoneScaling\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetBoneScaling()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetBoneScaling_Yooni_Native_Container_NativeString256__"></a> GetBoneScaling\(in NativeString256\)

```csharp
public float GetBoneScaling(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetCastingRequestSamples"></a> GetCastingRequestSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetCastingRequestSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetCastingRequestSamples_System_Int32_"></a> GetCastingRequestSamples\(int\)

```csharp
public SequencedSample GetCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetEffectAttribute"></a> GetEffectAttribute\(\)

```csharp
public NativeDictionary<byte, float, ByteHash>.ReadOnly GetEffectAttribute()
```

#### Returns

 NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetEffectAttribute_System_Byte__"></a> GetEffectAttribute\(in byte\)

```csharp
public float GetEffectAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetEquipUnequipTags"></a> GetEquipUnequipTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetEquipUnequipTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetEquipUnequipTags_System_Int32_"></a> GetEquipUnequipTags\(int\)

```csharp
public NativeString256 GetEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetFaceMatOverride"></a> GetFaceMatOverride\(\)

```csharp
public NativeDictionary<NativeString256, NativeString256, NativeStringHash256>.ReadOnly GetFaceMatOverride()
```

#### Returns

 NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetFaceMatOverride_Yooni_Native_Container_NativeString256__"></a> GetFaceMatOverride\(in NativeString256\)

```csharp
public NativeString256 GetFaceMatOverride(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetFaceMorph"></a> GetFaceMorph\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetFaceMorph()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetFaceMorph_Yooni_Native_Container_NativeString256__"></a> GetFaceMorph\(in NativeString256\)

```csharp
public float GetFaceMorph(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetGameplayTags"></a> GetGameplayTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetGameplayTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetGameplayTags_System_Int32_"></a> GetGameplayTags\(int\)

```csharp
public NativeString256 GetGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetItems"></a> GetItems\(\)

```csharp
public NativeList<InventoryEntry>.ReadOnly GetItems()
```

#### Returns

 NativeList<InventoryEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetItems_System_Int32_"></a> GetItems\(int\)

```csharp
public InventoryEntry GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetLastAnimTags"></a> GetLastAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetLastAnimTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetLastAnimTags_System_Int32_"></a> GetLastAnimTags\(int\)

```csharp
public NativeString256 GetLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetMeleeMontageSamples"></a> GetMeleeMontageSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetMeleeMontageSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetMeleeMontageSamples_System_Int32_"></a> GetMeleeMontageSamples\(int\)

```csharp
public SequencedSample GetMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSkillAttribute"></a> GetSkillAttribute\(\)

```csharp
public NativeDictionary<byte, float, ByteHash>.ReadOnly GetSkillAttribute()
```

#### Returns

 NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSkillAttribute_System_Byte__"></a> GetSkillAttribute\(in byte\)

```csharp
public float GetSkillAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSkinColor"></a> GetSkinColor\(\)

```csharp
public NativeDictionary<NativeString256, Vector4, NativeStringHash256>.ReadOnly GetSkinColor()
```

#### Returns

 NativeDictionary<NativeString256, [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), NativeStringHash256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSkinColor_Yooni_Native_Container_NativeString256__"></a> GetSkinColor\(in NativeString256\)

```csharp
public Vector4 GetSkinColor(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSkinParam"></a> GetSkinParam\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetSkinParam()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSkinParam_Yooni_Native_Container_NativeString256__"></a> GetSkinParam\(in NativeString256\)

```csharp
public float GetSkinParam(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSocialAttribute"></a> GetSocialAttribute\(\)

```csharp
public NativeDictionary<byte, float, ByteHash>.ReadOnly GetSocialAttribute()
```

#### Returns

 NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_GetSocialAttribute_System_Byte__"></a> GetSocialAttribute\(in byte\)

```csharp
public float GetSocialAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertAnimActionSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void InsertAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void InsertAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAttackingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void InsertAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertBlockingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void InsertBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertCastingRequestSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void InsertCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertEquipUnequipTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void InsertEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertGameplayTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void InsertGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> InsertItems\(int, in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void InsertItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertLastAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void InsertLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_InsertMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertMeleeMontageSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void InsertMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public MainCharacter Keep()
```

#### Returns

 [MainCharacter](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.MainCharacter.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtAnimActionSamples_System_Int32_"></a> RemoveAtAnimActionSamples\(int\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public SequencedSample RemoveAtAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtAnimTags_System_Int32_"></a> RemoveAtAnimTags\(int\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public NativeString256 RemoveAtAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtAttackingTags_System_Int32_"></a> RemoveAtAttackingTags\(int\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public NativeString256 RemoveAtAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtBlockingTags_System_Int32_"></a> RemoveAtBlockingTags\(int\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public NativeString256 RemoveAtBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtCastingRequestSamples_System_Int32_"></a> RemoveAtCastingRequestSamples\(int\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public SequencedSample RemoveAtCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtEquipUnequipTags_System_Int32_"></a> RemoveAtEquipUnequipTags\(int\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public NativeString256 RemoveAtEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtGameplayTags_System_Int32_"></a> RemoveAtGameplayTags\(int\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public NativeString256 RemoveAtGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

```csharp
[Changes("Equipment.Field.Items")]
public InventoryEntry RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtLastAnimTags_System_Int32_"></a> RemoveAtLastAnimTags\(int\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public NativeString256 RemoveAtLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveAtMeleeMontageSamples_System_Int32_"></a> RemoveAtMeleeMontageSamples\(int\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public SequencedSample RemoveAtMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveBoneScaling_Yooni_Native_Container_NativeString256__"></a> RemoveBoneScaling\(in NativeString256\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public bool RemoveBoneScaling(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveEffectAttribute_System_Byte__"></a> RemoveEffectAttribute\(in byte\)

```csharp
[Changes("EffectsAttributes.Field.Attribute")]
public bool RemoveEffectAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveFaceMatOverride_Yooni_Native_Container_NativeString256__"></a> RemoveFaceMatOverride\(in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public bool RemoveFaceMatOverride(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveFaceMorph_Yooni_Native_Container_NativeString256__"></a> RemoveFaceMorph\(in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public bool RemoveFaceMorph(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveSkillAttribute_System_Byte__"></a> RemoveSkillAttribute\(in byte\)

```csharp
[Changes("SkillAttributes.Field.Attribute")]
public bool RemoveSkillAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveSkinColor_Yooni_Native_Container_NativeString256__"></a> RemoveSkinColor\(in NativeString256\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public bool RemoveSkinColor(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveSkinParam_Yooni_Native_Container_NativeString256__"></a> RemoveSkinParam\(in NativeString256\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public bool RemoveSkinParam(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_RemoveSocialAttribute_System_Byte__"></a> RemoveSocialAttribute\(in byte\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public bool RemoveSocialAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetAnimActionSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetAnimActionSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void SetAnimActionSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetAnimActionSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void SetAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAnimTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void SetAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void SetAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetAttackingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAttackingTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void SetAttackingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAttackingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void SetAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetBlockingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetBlockingTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void SetBlockingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetBlockingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void SetBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetBoneScaling_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> SetBoneScaling\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public void SetBoneScaling(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetBoneScaling_Yooni_Native_Container_NativeString256__System_Single__"></a> SetBoneScaling\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public void SetBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetCastingRequestSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetCastingRequestSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void SetCastingRequestSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetCastingRequestSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void SetCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetEffectAttribute_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash___"></a> SetEffectAttribute\(in NativeDictionary<byte, float, ByteHash\>\)

```csharp
[Changes("EffectsAttributes.Field.Attribute")]
public void SetEffectAttribute(in NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetEffectAttribute_System_Byte__System_Single__"></a> SetEffectAttribute\(in byte, in float\)

```csharp
[Changes("EffectsAttributes.Field.Attribute")]
public void SetEffectAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetEquipUnequipTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetEquipUnequipTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void SetEquipUnequipTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetEquipUnequipTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void SetEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetFaceMatOverride_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_Yooni_Native_Container_NativeString256_Yooni_Native_Container_NativeStringHash256___"></a> SetFaceMatOverride\(in NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public void SetFaceMatOverride(in NativeDictionary<NativeString256, NativeString256, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetFaceMatOverride_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> SetFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public void SetFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetFaceMorph_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> SetFaceMorph\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public void SetFaceMorph(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetFaceMorph_Yooni_Native_Container_NativeString256__System_Single__"></a> SetFaceMorph\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public void SetFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetGameplayTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetGameplayTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void SetGameplayTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetGameplayTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void SetGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry___"></a> SetItems\(in NativeList<InventoryEntry\>\)

```csharp
[Changes("Equipment.Field.Items")]
public void SetItems(in NativeList<InventoryEntry> value)
```

#### Parameters

`value` NativeList<InventoryEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> SetItems\(int, in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void SetItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetLastAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetLastAnimTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void SetLastAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetLastAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void SetLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetMeleeMontageSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetMeleeMontageSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void SetMeleeMontageSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetMeleeMontageSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void SetMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSkillAttribute_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash___"></a> SetSkillAttribute\(in NativeDictionary<byte, float, ByteHash\>\)

```csharp
[Changes("SkillAttributes.Field.Attribute")]
public void SetSkillAttribute(in NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSkillAttribute_System_Byte__System_Single__"></a> SetSkillAttribute\(in byte, in float\)

```csharp
[Changes("SkillAttributes.Field.Attribute")]
public void SetSkillAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSkinColor_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Numerics_Vector4_Yooni_Native_Container_NativeStringHash256___"></a> SetSkinColor\(in NativeDictionary<NativeString256, Vector4, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public void SetSkinColor(in NativeDictionary<NativeString256, Vector4, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), NativeStringHash256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSkinColor_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> SetSkinColor\(in NativeString256, in Vector4\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public void SetSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSkinParam_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> SetSkinParam\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public void SetSkinParam(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSkinParam_Yooni_Native_Container_NativeString256__System_Single__"></a> SetSkinParam\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public void SetSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSocialAttribute_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash___"></a> SetSocialAttribute\(in NativeDictionary<byte, float, ByteHash\>\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public void SetSocialAttribute(in NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_SetSocialAttribute_System_Byte__System_Single__"></a> SetSocialAttribute\(in byte, in float\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public void SetSocialAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetBoneScalingValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetBoneScalingValue\(in NativeString256, out float\)

```csharp
public bool TryGetBoneScalingValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetEffectAttributeValue_System_Byte__System_Single__"></a> TryGetEffectAttributeValue\(in byte, out float\)

```csharp
public bool TryGetEffectAttributeValue(in byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetFaceMatOverrideValue_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> TryGetFaceMatOverrideValue\(in NativeString256, out NativeString256\)

```csharp
public bool TryGetFaceMatOverrideValue(in NativeString256 key, out NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetFaceMorphValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetFaceMorphValue\(in NativeString256, out float\)

```csharp
public bool TryGetFaceMorphValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetSkillAttributeValue_System_Byte__System_Single__"></a> TryGetSkillAttributeValue\(in byte, out float\)

```csharp
public bool TryGetSkillAttributeValue(in byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetSkinColorValue_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> TryGetSkinColorValue\(in NativeString256, out Vector4\)

```csharp
public bool TryGetSkinColorValue(in NativeString256 key, out Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetSkinParamValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetSkinParamValue\(in NativeString256, out float\)

```csharp
public bool TryGetSkinParamValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_MainCharacter_TryGetSocialAttributeValue_System_Byte__System_Single__"></a> TryGetSocialAttributeValue\(in byte, out float\)

```csharp
public bool TryGetSocialAttributeValue(in byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


