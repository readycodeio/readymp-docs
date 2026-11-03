---
title: 'Struct Npc'
description: 'A person or creature from the game.'
---
# Struct Npc

Namespace: [OblivionMp.Sdk.Common.Archetypes](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A person or creature from the game.

```csharp
[Archetype]
[Tag(typeof(AllowOwnershipTransferOnScopeEnterTag))]
[Tag(typeof(AllowOwnershipTransferOnScopeLeaveTag))]
[Include(typeof(Transform), "")]
[Include(typeof(AnimationMovement), "")]
[Include(typeof(AnimationState), "")]
[Include(typeof(ParentCell), "ParentCell")]
[Include(typeof(CellHandoffTarget), "")]
[Include(typeof(CombatTarget), "")]
[Include(typeof(DoorFollow), "")]
[Include(typeof(RefIdMixin), "")]
[Include(typeof(BaseIdMixin), "")]
[Include(typeof(Equipment), "")]
[Include(typeof(Vitals), "")]
[Include(typeof(LevelMixin), "")]
[Include(typeof(SpawnOrigin), "")]
[Include(typeof(AiIntent), "")]
[Include(typeof(AiState), "")]
public readonly struct Npc : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AnimActionSamplesCount"></a> AnimActionSamplesCount

```csharp
public int AnimActionSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AnimIsStaggered"></a> AnimIsStaggered

The game's staggered animation flag.

```csharp
public bool AnimIsStaggered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AnimTagsCount"></a> AnimTagsCount

```csharp
public int AnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AttackingRequest"></a> AttackingRequest

Whether an attack animation is requested.

```csharp
public bool AttackingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AttackingTagsCount"></a> AttackingTagsCount

```csharp
public int AttackingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_BaseId"></a> BaseId

The form this entity is made from, such as which kind of chest or which creature.

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_BlockAnimLayerClassName"></a> BlockAnimLayerClassName

The class name of the animation layer for blocking.

```csharp
public NativeString256 BlockAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_BlockingTagsCount"></a> BlockingTagsCount

```csharp
public int BlockingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CanExitAttack"></a> CanExitAttack

Whether the character can leave the attack animation.

```csharp
public bool CanExitAttack { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CanExitBlock"></a> CanExitBlock

Whether the character can leave the block animation.

```csharp
public bool CanExitBlock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CanFootLock"></a> CanFootLock

The game's <code>CanFootLock</code> animation flag.

```csharp
public bool CanFootLock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CanUseOrientationWarping"></a> CanUseOrientationWarping

The game's <code>CanUseOrientationWarping</code> animation flag.

```csharp
public bool CanUseOrientationWarping { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CastingRequest"></a> CastingRequest

Whether a spell casting animation is requested.

```csharp
public bool CastingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CastingRequestSamplesCount"></a> CastingRequestSamplesCount

```csharp
public int CastingRequestSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CharacterStateFlags"></a> CharacterStateFlags

Whether the character is running, sneaking, swimming, jumping, blocking, staggered, falling, dodging or holding a torch.

```csharp
public CharacterStateFlags CharacterStateFlags { get; set; }
```

#### Property Value

 CharacterStateFlags

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ComboHitIndex"></a> ComboHitIndex

The index of the current hit in a melee combo.

```csharp
public int ComboHitIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CompWeaponDrawn"></a> CompWeaponDrawn

The game's <code>CompWeaponDrawn</code> animation flag.

```csharp
public bool CompWeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CurrentAnimAction"></a> CurrentAnimAction

The game's current animation action, as a raw value.

```csharp
public byte CurrentAnimAction { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CurrentGait"></a> CurrentGait

The name of the character's current gait.

```csharp
public NativeString256 CurrentGait { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_CurrentPoison"></a> CurrentPoison

The poison on the equipped weapon.

```csharp
public NetworkFormId CurrentPoison { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_DodgeAnimLayerClassName"></a> DodgeAnimLayerClassName

The class name of the animation layer for dodging.

```csharp
public NativeString256 DodgeAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_DodgingRequest"></a> DodgingRequest

Whether a dodge animation is requested.

```csharp
public bool DodgingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_EquipUnequipTagsCount"></a> EquipUnequipTagsCount

```csharp
public int EquipUnequipTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Fatigue"></a> Fatigue

Current fatigue.

```csharp
public float Fatigue { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_FatigueBase"></a> FatigueBase

Maximum fatigue.

```csharp
public float FatigueBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ForceExitEquip"></a> ForceExitEquip

The game's <code>ForceExitEquip</code> animation flag.

```csharp
public bool ForceExitEquip { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GameplayTagsCount"></a> GameplayTagsCount

```csharp
public int GameplayTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetUpAnimLayerClassName"></a> GetUpAnimLayerClassName

The class name of the animation layer for getting up.

```csharp
public NativeString256 GetUpAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_HasMeleeWeapon"></a> HasMeleeWeapon

Whether the character has a melee weapon equipped.

```csharp
public bool HasMeleeWeapon { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Hp"></a> Hp

Current health.

```csharp
public float Hp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_HpBase"></a> HpBase

Maximum health.

```csharp
public float HpBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InAirAnimLayerClassName"></a> InAirAnimLayerClassName

The class name of the animation layer for being in the air.

```csharp
public NativeString256 InAirAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InCombatStance"></a> InCombatStance

Whether the character is in a combat stance.

```csharp
public bool InCombatStance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_IsDead"></a> IsDead

Whether the character is dead.

```csharp
public bool IsDead { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_IsMoving"></a> IsMoving

Whether the character is moving.

```csharp
public bool IsMoving { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_IsServerSeeded"></a> IsServerSeeded

Set by the server when it writes an npc's items, so the owner client follows the list even when it is empty.

```csharp
public bool IsServerSeeded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_IsStartCompleted"></a> IsStartCompleted

The game's <code>IsStartCompleted</code> animation flag.

```csharp
public bool IsStartCompleted { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_IsUsingFullBody"></a> IsUsingFullBody

Whether the current animation uses the full body.

```csharp
public bool IsUsingFullBody { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ItemsCount"></a> ItemsCount

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_LastAnimTagsCount"></a> LastAnimTagsCount

```csharp
public int LastAnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Level"></a> Level

The current level.

```csharp
public ushort Level { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Magicka"></a> Magicka

Current magicka.

```csharp
public float Magicka { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_MagickaBase"></a> MagickaBase

Maximum magicka.

```csharp
public float MagickaBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_MeleeMontageSamplesCount"></a> MeleeMontageSamplesCount

```csharp
public int MeleeMontageSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_MeleePlayRate"></a> MeleePlayRate

The play rate of that melee sequence.

```csharp
public float MeleePlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_MeleeSequenceName"></a> MeleeSequenceName

The name of the melee animation sequence playing.

```csharp
public NativeString256 MeleeSequenceName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_MontageName"></a> MontageName

The name of the animation montage playing.

```csharp
public NativeString256 MontageName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_MontagePosition"></a> MontagePosition

The play position within that montage.

```csharp
public float MontagePosition { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_OrientRotationToMovement"></a> OrientRotationToMovement

Whether the character turns to face the way it moves.

```csharp
public bool OrientRotationToMovement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Overridden"></a> Overridden

Whether the NPC runs a package laid over its schedule, such as a server order, rather than its own.

```csharp
public bool Overridden { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_PackageFormId"></a> PackageFormId

The form id of the AI package the NPC is running now.

```csharp
public uint PackageFormId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_PackageType"></a> PackageType

The type of that package.

```csharp
public AiPackageType PackageType { get; set; }
```

#### Property Value

 AiPackageType

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ParentCellKind"></a> ParentCellKind

Whether the cell is an interior or an exterior, or <code>Unknown</code> before the game has said.

```csharp
public ParentCellKind ParentCellKind { get; set; }
```

#### Property Value

 ParentCellKind

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ParentCellX"></a> ParentCellX

The X coordinate of the exterior grid square.

```csharp
public int ParentCellX { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ParentCellY"></a> ParentCellY

The Y coordinate of the exterior grid square.

```csharp
public int ParentCellY { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Position"></a> Position

The position in the game's world space, in centimeters.

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Procedure"></a> Procedure

The step of the package the NPC is on.

```csharp
public AiProcedure Procedure { get; set; }
```

#### Property Value

 AiProcedure

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ProcedureIndex"></a> ProcedureIndex

The index of that step within the package.

```csharp
public int ProcedureIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RecoilAnimLayerClassName"></a> RecoilAnimLayerClassName

The class name of the animation layer for recoiling.

```csharp
public NativeString256 RecoilAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RecoilingRequest"></a> RecoilingRequest

Whether a recoil animation is requested.

```csharp
public bool RecoilingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RefId"></a> RefId

The ref id of this placed object or actor.

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ReportedOutcome"></a> ReportedOutcome

How that order ended, or **None** before any has ended.

```csharp
public AiIntentOutcome ReportedOutcome { get; set; }
```

#### Property Value

 AiIntentOutcome

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ReportedSeq"></a> ReportedSeq

The sequence number of the last order the NPC finished.

```csharp
public ushort ReportedSeq { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Rotation"></a> Rotation

The yaw, in degrees.

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ShieldHandPoseAnimLayerClassName"></a> ShieldHandPoseAnimLayerClassName

The class name of the animation layer for the shield hand pose.

```csharp
public NativeString256 ShieldHandPoseAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SpawnerRefId"></a> SpawnerRefId

The ref id of the spawner that made this NPC, or 0.

```csharp
public uint SpawnerRefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SpellCastAnimLayerClassName"></a> SpellCastAnimLayerClassName

The class name of the animation layer for casting spells.

```csharp
public NativeString256 SpellCastAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_StaggerAnimLayerClassName"></a> StaggerAnimLayerClassName

The class name of the animation layer for staggering.

```csharp
public NativeString256 StaggerAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_TorchAnimLayerClassName"></a> TorchAnimLayerClassName

The class name of the animation layer for holding a torch.

```csharp
public NativeString256 TorchAnimLayerClassName { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_UseControllerDesiredRotation"></a> UseControllerDesiredRotation

The game's <code>UseControllerDesiredRotation</code> movement setting.

```csharp
public bool UseControllerDesiredRotation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_UseControllerRotationYaw"></a> UseControllerRotationYaw

The game's <code>UseControllerRotationYaw</code> movement setting.

```csharp
public bool UseControllerRotationYaw { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_UseRotationSpeedCurve"></a> UseRotationSpeedCurve

The game's <code>UseRotationSpeedCurve</code> movement setting.

```csharp
public bool UseRotationSpeedCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_WantsToRun"></a> WantsToRun

Whether the character wants to run.

```csharp
public bool WantsToRun { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_WeaponDrawn"></a> WeaponDrawn

Whether the character has a weapon drawn.

```csharp
public bool WeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddAnimActionSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void AddAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddAnimTags_Yooni_Native_Container_NativeString256__"></a> AddAnimTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void AddAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddAttackingTags_Yooni_Native_Container_NativeString256__"></a> AddAttackingTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void AddAttackingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddBlockingTags_Yooni_Native_Container_NativeString256__"></a> AddBlockingTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void AddBlockingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddCastingRequestSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void AddCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> AddEquipUnequipTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void AddEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddGameplayTags_Yooni_Native_Container_NativeString256__"></a> AddGameplayTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void AddGameplayTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> AddItems\(in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void AddItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddLastAnimTags_Yooni_Native_Container_NativeString256__"></a> AddLastAnimTags\(in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void AddLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_AddMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddMeleeMontageSamples\(in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void AddMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearAnimActionSamples"></a> ClearAnimActionSamples\(\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void ClearAnimActionSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearAnimTags"></a> ClearAnimTags\(\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void ClearAnimTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearAttackingTags"></a> ClearAttackingTags\(\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void ClearAttackingTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearBlockingTags"></a> ClearBlockingTags\(\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void ClearBlockingTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearCastingRequestSamples"></a> ClearCastingRequestSamples\(\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void ClearCastingRequestSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearEquipUnequipTags"></a> ClearEquipUnequipTags\(\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void ClearEquipUnequipTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearGameplayTags"></a> ClearGameplayTags\(\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void ClearGameplayTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearItems"></a> ClearItems\(\)

```csharp
[Changes("Equipment.Field.Items")]
public void ClearItems()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearLastAnimTags"></a> ClearLastAnimTags\(\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void ClearLastAnimTags()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ClearMeleeMontageSamples"></a> ClearMeleeMontageSamples\(\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void ClearMeleeMontageSamples()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsAnimActionSamples\(in SequencedSample\)

```csharp
public bool ContainsAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsAnimTags\(in NativeString256\)

```csharp
public bool ContainsAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsAttackingTags_Yooni_Native_Container_NativeString256__"></a> ContainsAttackingTags\(in NativeString256\)

```csharp
public bool ContainsAttackingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsBlockingTags_Yooni_Native_Container_NativeString256__"></a> ContainsBlockingTags\(in NativeString256\)

```csharp
public bool ContainsBlockingTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsCastingRequestSamples\(in SequencedSample\)

```csharp
public bool ContainsCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> ContainsEquipUnequipTags\(in NativeString256\)

```csharp
public bool ContainsEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsGameplayTags_Yooni_Native_Container_NativeString256__"></a> ContainsGameplayTags\(in NativeString256\)

```csharp
public bool ContainsGameplayTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> ContainsItems\(in InventoryEntry\)

```csharp
public bool ContainsItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsLastAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsLastAnimTags\(in NativeString256\)

```csharp
public bool ContainsLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_ContainsMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsMeleeMontageSamples\(in SequencedSample\)

```csharp
public bool ContainsMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` SequencedSample

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetAnimActionSamples"></a> GetAnimActionSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetAnimActionSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetAnimActionSamples_System_Int32_"></a> GetAnimActionSamples\(int\)

```csharp
public SequencedSample GetAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetAnimTags"></a> GetAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAnimTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetAnimTags_System_Int32_"></a> GetAnimTags\(int\)

```csharp
public NativeString256 GetAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetAttackingTags"></a> GetAttackingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAttackingTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetAttackingTags_System_Int32_"></a> GetAttackingTags\(int\)

```csharp
public NativeString256 GetAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetBlockingTags"></a> GetBlockingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetBlockingTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetBlockingTags_System_Int32_"></a> GetBlockingTags\(int\)

```csharp
public NativeString256 GetBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetCastingRequestSamples"></a> GetCastingRequestSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetCastingRequestSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetCastingRequestSamples_System_Int32_"></a> GetCastingRequestSamples\(int\)

```csharp
public SequencedSample GetCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetEquipUnequipTags"></a> GetEquipUnequipTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetEquipUnequipTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetEquipUnequipTags_System_Int32_"></a> GetEquipUnequipTags\(int\)

```csharp
public NativeString256 GetEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetGameplayTags"></a> GetGameplayTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetGameplayTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetGameplayTags_System_Int32_"></a> GetGameplayTags\(int\)

```csharp
public NativeString256 GetGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetItems"></a> GetItems\(\)

```csharp
public NativeList<InventoryEntry>.ReadOnly GetItems()
```

#### Returns

 NativeList<InventoryEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetItems_System_Int32_"></a> GetItems\(int\)

```csharp
public InventoryEntry GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetLastAnimTags"></a> GetLastAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetLastAnimTags()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetLastAnimTags_System_Int32_"></a> GetLastAnimTags\(int\)

```csharp
public NativeString256 GetLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetMeleeMontageSamples"></a> GetMeleeMontageSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetMeleeMontageSamples()
```

#### Returns

 NativeList<SequencedSample\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_GetMeleeMontageSamples_System_Int32_"></a> GetMeleeMontageSamples\(int\)

```csharp
public SequencedSample GetMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertAnimActionSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void InsertAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void InsertAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAttackingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void InsertAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertBlockingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void InsertBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertCastingRequestSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void InsertCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertEquipUnequipTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void InsertEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertGameplayTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void InsertGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> InsertItems\(int, in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void InsertItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertLastAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void InsertLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_InsertMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertMeleeMontageSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void InsertMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Npc Keep()
```

#### Returns

 [Npc](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Npc.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtAnimActionSamples_System_Int32_"></a> RemoveAtAnimActionSamples\(int\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public SequencedSample RemoveAtAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtAnimTags_System_Int32_"></a> RemoveAtAnimTags\(int\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public NativeString256 RemoveAtAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtAttackingTags_System_Int32_"></a> RemoveAtAttackingTags\(int\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public NativeString256 RemoveAtAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtBlockingTags_System_Int32_"></a> RemoveAtBlockingTags\(int\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public NativeString256 RemoveAtBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtCastingRequestSamples_System_Int32_"></a> RemoveAtCastingRequestSamples\(int\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public SequencedSample RemoveAtCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtEquipUnequipTags_System_Int32_"></a> RemoveAtEquipUnequipTags\(int\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public NativeString256 RemoveAtEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtGameplayTags_System_Int32_"></a> RemoveAtGameplayTags\(int\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public NativeString256 RemoveAtGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

```csharp
[Changes("Equipment.Field.Items")]
public InventoryEntry RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtLastAnimTags_System_Int32_"></a> RemoveAtLastAnimTags\(int\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public NativeString256 RemoveAtLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_RemoveAtMeleeMontageSamples_System_Int32_"></a> RemoveAtMeleeMontageSamples\(int\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public SequencedSample RemoveAtMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetAnimActionSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetAnimActionSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void SetAnimActionSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetAnimActionSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.AnimActionSamples")]
public void SetAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAnimTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void SetAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AnimTags")]
public void SetAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetAttackingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAttackingTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void SetAttackingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAttackingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.AttackingTags")]
public void SetAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetBlockingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetBlockingTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void SetBlockingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetBlockingTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.BlockingTags")]
public void SetBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetCastingRequestSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetCastingRequestSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void SetCastingRequestSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetCastingRequestSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.CastingRequestSamples")]
public void SetCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetEquipUnequipTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetEquipUnequipTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void SetEquipUnequipTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetEquipUnequipTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.EquipUnequipTags")]
public void SetEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetGameplayTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetGameplayTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void SetGameplayTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetGameplayTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.GameplayTags")]
public void SetGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry___"></a> SetItems\(in NativeList<InventoryEntry\>\)

```csharp
[Changes("Equipment.Field.Items")]
public void SetItems(in NativeList<InventoryEntry> value)
```

#### Parameters

`value` NativeList<InventoryEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> SetItems\(int, in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void SetItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetLastAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetLastAnimTags\(in NativeList<NativeString256\>\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void SetLastAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetLastAnimTags\(int, in NativeString256\)

```csharp
[Changes("AnimationState.Field.LastAnimTags")]
public void SetLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetMeleeMontageSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetMeleeMontageSamples\(in NativeList<SequencedSample\>\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void SetMeleeMontageSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` NativeList<SequencedSample\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_SetMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetMeleeMontageSamples\(int, in SequencedSample\)

```csharp
[Changes("AnimationState.Field.MeleeMontageSamples")]
public void SetMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SequencedSample

### <a id="OblivionMp_Sdk_Common_Archetypes_Npc_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


