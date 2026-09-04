# Struct AnimationStateComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player character's animation state.

```csharp
public struct AnimationStateComponent : INativeInit, IComponent, INetSerializable, IDisposable
```

#### Implements

[INativeInit](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/ECS/Components/INativeInit.cs), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
INetSerializable, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AnimActionSamplesCount"></a> AnimActionSamplesCount

```csharp
public int AnimActionSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AnimIsStaggered"></a> AnimIsStaggered

```csharp
public bool AnimIsStaggered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AnimTagsCount"></a> AnimTagsCount

```csharp
public int AnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AttackingRequest"></a> AttackingRequest

```csharp
public bool AttackingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AttackingTagsCount"></a> AttackingTagsCount

```csharp
public int AttackingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_BlockAnimLayerClassName"></a> BlockAnimLayerClassName

```csharp
public NativeString256 BlockAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_BlockingTagsCount"></a> BlockingTagsCount

```csharp
public int BlockingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanExitAttack"></a> CanExitAttack

```csharp
public bool CanExitAttack { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanExitBlock"></a> CanExitBlock

```csharp
public bool CanExitBlock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanFootLock"></a> CanFootLock

```csharp
public bool CanFootLock { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanUseOrientationWarping"></a> CanUseOrientationWarping

```csharp
public bool CanUseOrientationWarping { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CastingRequest"></a> CastingRequest

```csharp
public bool CastingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CastingRequestSamplesCount"></a> CastingRequestSamplesCount

```csharp
public int CastingRequestSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CharacterStateFlags"></a> CharacterStateFlags

```csharp
public CharacterStateFlags CharacterStateFlags { get; set; }
```

#### Property Value

 [CharacterStateFlags](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterStateFlags.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ComboHitIndex"></a> ComboHitIndex

```csharp
public int ComboHitIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CompWeaponDrawn"></a> CompWeaponDrawn

```csharp
public bool CompWeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CurrentAnimAction"></a> CurrentAnimAction

```csharp
public byte CurrentAnimAction { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CurrentGait"></a> CurrentGait

```csharp
public NativeString256 CurrentGait { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_DodgeAnimLayerClassName"></a> DodgeAnimLayerClassName

```csharp
public NativeString256 DodgeAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_DodgingRequest"></a> DodgingRequest

```csharp
public bool DodgingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_EquipUnequipTagsCount"></a> EquipUnequipTagsCount

```csharp
public int EquipUnequipTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ForceExitEquip"></a> ForceExitEquip

```csharp
public bool ForceExitEquip { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GameplayTagsCount"></a> GameplayTagsCount

```csharp
public int GameplayTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetUpAnimLayerClassName"></a> GetUpAnimLayerClassName

```csharp
public NativeString256 GetUpAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_HasMeleeWeapon"></a> HasMeleeWeapon

```csharp
public bool HasMeleeWeapon { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InAirAnimLayerClassName"></a> InAirAnimLayerClassName

```csharp
public NativeString256 InAirAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InCombatStance"></a> InCombatStance

```csharp
public bool InCombatStance { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_IsMoving"></a> IsMoving

```csharp
public bool IsMoving { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_IsStartCompleted"></a> IsStartCompleted

```csharp
public bool IsStartCompleted { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_IsUsingFullBody"></a> IsUsingFullBody

```csharp
public bool IsUsingFullBody { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_LastAnimTagsCount"></a> LastAnimTagsCount

```csharp
public int LastAnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MeleeMontageSamplesCount"></a> MeleeMontageSamplesCount

```csharp
public int MeleeMontageSamplesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MeleePlayRate"></a> MeleePlayRate

```csharp
public float MeleePlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MeleeSequenceName"></a> MeleeSequenceName

```csharp
public NativeString256 MeleeSequenceName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MontageName"></a> MontageName

```csharp
public NativeString256 MontageName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MontagePosition"></a> MontagePosition

```csharp
public float MontagePosition { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_OrientRotationToMovement"></a> OrientRotationToMovement

```csharp
public bool OrientRotationToMovement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentAnimTagsCount"></a> ParentAnimTagsCount

```csharp
public int ParentAnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentAttackingTagsCount"></a> ParentAttackingTagsCount

```csharp
public int ParentAttackingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentBlockingTagsCount"></a> ParentBlockingTagsCount

```csharp
public int ParentBlockingTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentEquipUnequipTagsCount"></a> ParentEquipUnequipTagsCount

```csharp
public int ParentEquipUnequipTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentGameplayTagsCount"></a> ParentGameplayTagsCount

```csharp
public int ParentGameplayTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentLastAnimTagsCount"></a> ParentLastAnimTagsCount

```csharp
public int ParentLastAnimTagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RecoilAnimLayerClassName"></a> RecoilAnimLayerClassName

```csharp
public NativeString256 RecoilAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RecoilingRequest"></a> RecoilingRequest

```csharp
public bool RecoilingRequest { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ShieldHandPoseAnimLayerClassName"></a> ShieldHandPoseAnimLayerClassName

```csharp
public NativeString256 ShieldHandPoseAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SpellCastAnimLayerClassName"></a> SpellCastAnimLayerClassName

```csharp
public NativeString256 SpellCastAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_StaggerAnimLayerClassName"></a> StaggerAnimLayerClassName

```csharp
public NativeString256 StaggerAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_TorchAnimLayerClassName"></a> TorchAnimLayerClassName

```csharp
public NativeString256 TorchAnimLayerClassName { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_UseControllerDesiredRotation"></a> UseControllerDesiredRotation

```csharp
public bool UseControllerDesiredRotation { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_UseControllerRotationYaw"></a> UseControllerRotationYaw

```csharp
public bool UseControllerRotationYaw { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_UseRotationSpeedCurve"></a> UseRotationSpeedCurve

```csharp
public bool UseRotationSpeedCurve { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_WantsToRun"></a> WantsToRun

```csharp
public bool WantsToRun { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_WeaponDrawn"></a> WeaponDrawn

```csharp
public bool WeaponDrawn { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddAnimActionSamples\(in SequencedSample\)

```csharp
public void AddAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddAnimTags_Yooni_Native_Container_NativeString256__"></a> AddAnimTags\(in NativeString256\)

```csharp
public void AddAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddAttackingTags_Yooni_Native_Container_NativeString256__"></a> AddAttackingTags\(in NativeString256\)

```csharp
public void AddAttackingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddBlockingTags_Yooni_Native_Container_NativeString256__"></a> AddBlockingTags\(in NativeString256\)

```csharp
public void AddBlockingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddCastingRequestSamples\(in SequencedSample\)

```csharp
public void AddCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> AddEquipUnequipTags\(in NativeString256\)

```csharp
public void AddEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddGameplayTags_Yooni_Native_Container_NativeString256__"></a> AddGameplayTags\(in NativeString256\)

```csharp
public void AddGameplayTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddLastAnimTags_Yooni_Native_Container_NativeString256__"></a> AddLastAnimTags\(in NativeString256\)

```csharp
public void AddLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> AddMeleeMontageSamples\(in SequencedSample\)

```csharp
public void AddMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddParentAnimTags_Yooni_Native_Container_NativeString256__"></a> AddParentAnimTags\(in NativeString256\)

```csharp
public void AddParentAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddParentAttackingTags_Yooni_Native_Container_NativeString256__"></a> AddParentAttackingTags\(in NativeString256\)

```csharp
public void AddParentAttackingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddParentBlockingTags_Yooni_Native_Container_NativeString256__"></a> AddParentBlockingTags\(in NativeString256\)

```csharp
public void AddParentBlockingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddParentEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> AddParentEquipUnequipTags\(in NativeString256\)

```csharp
public void AddParentEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddParentGameplayTags_Yooni_Native_Container_NativeString256__"></a> AddParentGameplayTags\(in NativeString256\)

```csharp
public void AddParentGameplayTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AddParentLastAnimTags_Yooni_Native_Container_NativeString256__"></a> AddParentLastAnimTags\(in NativeString256\)

```csharp
public void AddParentLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AnimActionSamplesNotifyChanged_System_Int32_"></a> AnimActionSamplesNotifyChanged\(int\)

```csharp
public void AnimActionSamplesNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AnimIsStaggeredNotifyChanged_System_Int32_"></a> AnimIsStaggeredNotifyChanged\(int\)

```csharp
public void AnimIsStaggeredNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AnimTagsNotifyChanged_System_Int32_"></a> AnimTagsNotifyChanged\(int\)

```csharp
public void AnimTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent__"></a> Assign\(in AnimationStateComponent\)

```csharp
public void Assign(in AnimationStateComponent value)
```

#### Parameters

`value` [AnimationStateComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AnimationStateComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AttackingRequestNotifyChanged_System_Int32_"></a> AttackingRequestNotifyChanged\(int\)

```csharp
public void AttackingRequestNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_AttackingTagsNotifyChanged_System_Int32_"></a> AttackingTagsNotifyChanged\(int\)

```csharp
public void AttackingTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_BlockAnimLayerClassNameNotifyChanged_System_Int32_"></a> BlockAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void BlockAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_BlockingTagsNotifyChanged_System_Int32_"></a> BlockingTagsNotifyChanged\(int\)

```csharp
public void BlockingTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanExitAttackNotifyChanged_System_Int32_"></a> CanExitAttackNotifyChanged\(int\)

```csharp
public void CanExitAttackNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanExitBlockNotifyChanged_System_Int32_"></a> CanExitBlockNotifyChanged\(int\)

```csharp
public void CanExitBlockNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanFootLockNotifyChanged_System_Int32_"></a> CanFootLockNotifyChanged\(int\)

```csharp
public void CanFootLockNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CanUseOrientationWarpingNotifyChanged_System_Int32_"></a> CanUseOrientationWarpingNotifyChanged\(int\)

```csharp
public void CanUseOrientationWarpingNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CastingRequestNotifyChanged_System_Int32_"></a> CastingRequestNotifyChanged\(int\)

```csharp
public void CastingRequestNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CastingRequestSamplesNotifyChanged_System_Int32_"></a> CastingRequestSamplesNotifyChanged\(int\)

```csharp
public void CastingRequestSamplesNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CharacterStateFlagsNotifyChanged_System_Int32_"></a> CharacterStateFlagsNotifyChanged\(int\)

```csharp
public void CharacterStateFlagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearAnimActionSamples"></a> ClearAnimActionSamples\(\)

```csharp
public void ClearAnimActionSamples()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearAnimTags"></a> ClearAnimTags\(\)

```csharp
public void ClearAnimTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearAttackingTags"></a> ClearAttackingTags\(\)

```csharp
public void ClearAttackingTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearBlockingTags"></a> ClearBlockingTags\(\)

```csharp
public void ClearBlockingTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearCastingRequestSamples"></a> ClearCastingRequestSamples\(\)

```csharp
public void ClearCastingRequestSamples()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearEquipUnequipTags"></a> ClearEquipUnequipTags\(\)

```csharp
public void ClearEquipUnequipTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearGameplayTags"></a> ClearGameplayTags\(\)

```csharp
public void ClearGameplayTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearLastAnimTags"></a> ClearLastAnimTags\(\)

```csharp
public void ClearLastAnimTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearMeleeMontageSamples"></a> ClearMeleeMontageSamples\(\)

```csharp
public void ClearMeleeMontageSamples()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearParentAnimTags"></a> ClearParentAnimTags\(\)

```csharp
public void ClearParentAnimTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearParentAttackingTags"></a> ClearParentAttackingTags\(\)

```csharp
public void ClearParentAttackingTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearParentBlockingTags"></a> ClearParentBlockingTags\(\)

```csharp
public void ClearParentBlockingTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearParentEquipUnequipTags"></a> ClearParentEquipUnequipTags\(\)

```csharp
public void ClearParentEquipUnequipTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearParentGameplayTags"></a> ClearParentGameplayTags\(\)

```csharp
public void ClearParentGameplayTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ClearParentLastAnimTags"></a> ClearParentLastAnimTags\(\)

```csharp
public void ClearParentLastAnimTags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ComboHitIndexNotifyChanged_System_Int32_"></a> ComboHitIndexNotifyChanged\(int\)

```csharp
public void ComboHitIndexNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CompWeaponDrawnNotifyChanged_System_Int32_"></a> CompWeaponDrawnNotifyChanged\(int\)

```csharp
public void CompWeaponDrawnNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsAnimActionSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsAnimActionSamples\(in SequencedSample\)

```csharp
public bool ContainsAnimActionSamples(in SequencedSample value)
```

#### Parameters

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsAnimTags\(in NativeString256\)

```csharp
public bool ContainsAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsAttackingTags_Yooni_Native_Container_NativeString256__"></a> ContainsAttackingTags\(in NativeString256\)

```csharp
public bool ContainsAttackingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsBlockingTags_Yooni_Native_Container_NativeString256__"></a> ContainsBlockingTags\(in NativeString256\)

```csharp
public bool ContainsBlockingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsCastingRequestSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsCastingRequestSamples\(in SequencedSample\)

```csharp
public bool ContainsCastingRequestSamples(in SequencedSample value)
```

#### Parameters

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> ContainsEquipUnequipTags\(in NativeString256\)

```csharp
public bool ContainsEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsGameplayTags_Yooni_Native_Container_NativeString256__"></a> ContainsGameplayTags\(in NativeString256\)

```csharp
public bool ContainsGameplayTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsLastAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsLastAnimTags\(in NativeString256\)

```csharp
public bool ContainsLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsMeleeMontageSamples_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> ContainsMeleeMontageSamples\(in SequencedSample\)

```csharp
public bool ContainsMeleeMontageSamples(in SequencedSample value)
```

#### Parameters

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsParentAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsParentAnimTags\(in NativeString256\)

```csharp
public bool ContainsParentAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsParentAttackingTags_Yooni_Native_Container_NativeString256__"></a> ContainsParentAttackingTags\(in NativeString256\)

```csharp
public bool ContainsParentAttackingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsParentBlockingTags_Yooni_Native_Container_NativeString256__"></a> ContainsParentBlockingTags\(in NativeString256\)

```csharp
public bool ContainsParentBlockingTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsParentEquipUnequipTags_Yooni_Native_Container_NativeString256__"></a> ContainsParentEquipUnequipTags\(in NativeString256\)

```csharp
public bool ContainsParentEquipUnequipTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsParentGameplayTags_Yooni_Native_Container_NativeString256__"></a> ContainsParentGameplayTags\(in NativeString256\)

```csharp
public bool ContainsParentGameplayTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ContainsParentLastAnimTags_Yooni_Native_Container_NativeString256__"></a> ContainsParentLastAnimTags\(in NativeString256\)

```csharp
public bool ContainsParentLastAnimTags(in NativeString256 value)
```

#### Parameters

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CurrentAnimActionNotifyChanged_System_Int32_"></a> CurrentAnimActionNotifyChanged\(int\)

```csharp
public void CurrentAnimActionNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_CurrentGaitNotifyChanged_System_Int32_"></a> CurrentGaitNotifyChanged\(int\)

```csharp
public void CurrentGaitNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_DodgeAnimLayerClassNameNotifyChanged_System_Int32_"></a> DodgeAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void DodgeAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_DodgingRequestNotifyChanged_System_Int32_"></a> DodgingRequestNotifyChanged\(int\)

```csharp
public void DodgingRequestNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_EquipUnequipTagsNotifyChanged_System_Int32_"></a> EquipUnequipTagsNotifyChanged\(int\)

```csharp
public void EquipUnequipTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ForceExitEquipNotifyChanged_System_Int32_"></a> ForceExitEquipNotifyChanged\(int\)

```csharp
public void ForceExitEquipNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GameplayTagsNotifyChanged_System_Int32_"></a> GameplayTagsNotifyChanged\(int\)

```csharp
public void GameplayTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetAnimActionSamples"></a> GetAnimActionSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetAnimActionSamples()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetAnimActionSamples_System_Int32_"></a> GetAnimActionSamples\(int\)

```csharp
public SequencedSample GetAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetAnimTags"></a> GetAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAnimTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetAnimTags_System_Int32_"></a> GetAnimTags\(int\)

```csharp
public NativeString256 GetAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetAttackingTags"></a> GetAttackingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetAttackingTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetAttackingTags_System_Int32_"></a> GetAttackingTags\(int\)

```csharp
public NativeString256 GetAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetBlockingTags"></a> GetBlockingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetBlockingTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetBlockingTags_System_Int32_"></a> GetBlockingTags\(int\)

```csharp
public NativeString256 GetBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetCastingRequestSamples"></a> GetCastingRequestSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetCastingRequestSamples()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetCastingRequestSamples_System_Int32_"></a> GetCastingRequestSamples\(int\)

```csharp
public SequencedSample GetCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetEquipUnequipTags"></a> GetEquipUnequipTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetEquipUnequipTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetEquipUnequipTags_System_Int32_"></a> GetEquipUnequipTags\(int\)

```csharp
public NativeString256 GetEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetGameplayTags"></a> GetGameplayTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetGameplayTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetGameplayTags_System_Int32_"></a> GetGameplayTags\(int\)

```csharp
public NativeString256 GetGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetLastAnimTags"></a> GetLastAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetLastAnimTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetLastAnimTags_System_Int32_"></a> GetLastAnimTags\(int\)

```csharp
public NativeString256 GetLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetMeleeMontageSamples"></a> GetMeleeMontageSamples\(\)

```csharp
public NativeList<SequencedSample>.ReadOnly GetMeleeMontageSamples()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetMeleeMontageSamples_System_Int32_"></a> GetMeleeMontageSamples\(int\)

```csharp
public SequencedSample GetMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentAnimTags"></a> GetParentAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetParentAnimTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentAnimTags_System_Int32_"></a> GetParentAnimTags\(int\)

```csharp
public NativeString256 GetParentAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentAttackingTags"></a> GetParentAttackingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetParentAttackingTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentAttackingTags_System_Int32_"></a> GetParentAttackingTags\(int\)

```csharp
public NativeString256 GetParentAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentBlockingTags"></a> GetParentBlockingTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetParentBlockingTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentBlockingTags_System_Int32_"></a> GetParentBlockingTags\(int\)

```csharp
public NativeString256 GetParentBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentEquipUnequipTags"></a> GetParentEquipUnequipTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetParentEquipUnequipTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentEquipUnequipTags_System_Int32_"></a> GetParentEquipUnequipTags\(int\)

```csharp
public NativeString256 GetParentEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentGameplayTags"></a> GetParentGameplayTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetParentGameplayTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentGameplayTags_System_Int32_"></a> GetParentGameplayTags\(int\)

```csharp
public NativeString256 GetParentGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentLastAnimTags"></a> GetParentLastAnimTags\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetParentLastAnimTags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetParentLastAnimTags_System_Int32_"></a> GetParentLastAnimTags\(int\)

```csharp
public NativeString256 GetParentLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_GetUpAnimLayerClassNameNotifyChanged_System_Int32_"></a> GetUpAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void GetUpAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_HasMeleeWeaponNotifyChanged_System_Int32_"></a> HasMeleeWeaponNotifyChanged\(int\)

```csharp
public void HasMeleeWeaponNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InAirAnimLayerClassNameNotifyChanged_System_Int32_"></a> InAirAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void InAirAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InCombatStanceNotifyChanged_System_Int32_"></a> InCombatStanceNotifyChanged\(int\)

```csharp
public void InCombatStanceNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertAnimActionSamples\(int, in SequencedSample\)

```csharp
public void InsertAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAnimTags\(int, in NativeString256\)

```csharp
public void InsertAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertAttackingTags\(int, in NativeString256\)

```csharp
public void InsertAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertBlockingTags\(int, in NativeString256\)

```csharp
public void InsertBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertCastingRequestSamples\(int, in SequencedSample\)

```csharp
public void InsertCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertEquipUnequipTags\(int, in NativeString256\)

```csharp
public void InsertEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertGameplayTags\(int, in NativeString256\)

```csharp
public void InsertGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertLastAnimTags\(int, in NativeString256\)

```csharp
public void InsertLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> InsertMeleeMontageSamples\(int, in SequencedSample\)

```csharp
public void InsertMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertParentAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertParentAnimTags\(int, in NativeString256\)

```csharp
public void InsertParentAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertParentAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertParentAttackingTags\(int, in NativeString256\)

```csharp
public void InsertParentAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertParentBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertParentBlockingTags\(int, in NativeString256\)

```csharp
public void InsertParentBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertParentEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertParentEquipUnequipTags\(int, in NativeString256\)

```csharp
public void InsertParentEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertParentGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertParentGameplayTags\(int, in NativeString256\)

```csharp
public void InsertParentGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_InsertParentLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> InsertParentLastAnimTags\(int, in NativeString256\)

```csharp
public void InsertParentLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_IsMovingNotifyChanged_System_Int32_"></a> IsMovingNotifyChanged\(int\)

```csharp
public void IsMovingNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_IsStartCompletedNotifyChanged_System_Int32_"></a> IsStartCompletedNotifyChanged\(int\)

```csharp
public void IsStartCompletedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_IsUsingFullBodyNotifyChanged_System_Int32_"></a> IsUsingFullBodyNotifyChanged\(int\)

```csharp
public void IsUsingFullBodyNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_LastAnimTagsNotifyChanged_System_Int32_"></a> LastAnimTagsNotifyChanged\(int\)

```csharp
public void LastAnimTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MeleeMontageSamplesNotifyChanged_System_Int32_"></a> MeleeMontageSamplesNotifyChanged\(int\)

```csharp
public void MeleeMontageSamplesNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MeleePlayRateNotifyChanged_System_Int32_"></a> MeleePlayRateNotifyChanged\(int\)

```csharp
public void MeleePlayRateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MeleeSequenceNameNotifyChanged_System_Int32_"></a> MeleeSequenceNameNotifyChanged\(int\)

```csharp
public void MeleeSequenceNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MontageNameNotifyChanged_System_Int32_"></a> MontageNameNotifyChanged\(int\)

```csharp
public void MontageNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_MontagePositionNotifyChanged_System_Int32_"></a> MontagePositionNotifyChanged\(int\)

```csharp
public void MontagePositionNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_OrientRotationToMovementNotifyChanged_System_Int32_"></a> OrientRotationToMovementNotifyChanged\(int\)

```csharp
public void OrientRotationToMovementNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentAnimTagsNotifyChanged_System_Int32_"></a> ParentAnimTagsNotifyChanged\(int\)

```csharp
public void ParentAnimTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentAttackingTagsNotifyChanged_System_Int32_"></a> ParentAttackingTagsNotifyChanged\(int\)

```csharp
public void ParentAttackingTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentBlockingTagsNotifyChanged_System_Int32_"></a> ParentBlockingTagsNotifyChanged\(int\)

```csharp
public void ParentBlockingTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentEquipUnequipTagsNotifyChanged_System_Int32_"></a> ParentEquipUnequipTagsNotifyChanged\(int\)

```csharp
public void ParentEquipUnequipTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentGameplayTagsNotifyChanged_System_Int32_"></a> ParentGameplayTagsNotifyChanged\(int\)

```csharp
public void ParentGameplayTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ParentLastAnimTagsNotifyChanged_System_Int32_"></a> ParentLastAnimTagsNotifyChanged\(int\)

```csharp
public void ParentLastAnimTagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RecoilAnimLayerClassNameNotifyChanged_System_Int32_"></a> RecoilAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void RecoilAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RecoilingRequestNotifyChanged_System_Int32_"></a> RecoilingRequestNotifyChanged\(int\)

```csharp
public void RecoilingRequestNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtAnimActionSamples_System_Int32_"></a> RemoveAtAnimActionSamples\(int\)

```csharp
public SequencedSample RemoveAtAnimActionSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtAnimTags_System_Int32_"></a> RemoveAtAnimTags\(int\)

```csharp
public NativeString256 RemoveAtAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtAttackingTags_System_Int32_"></a> RemoveAtAttackingTags\(int\)

```csharp
public NativeString256 RemoveAtAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtBlockingTags_System_Int32_"></a> RemoveAtBlockingTags\(int\)

```csharp
public NativeString256 RemoveAtBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtCastingRequestSamples_System_Int32_"></a> RemoveAtCastingRequestSamples\(int\)

```csharp
public SequencedSample RemoveAtCastingRequestSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtEquipUnequipTags_System_Int32_"></a> RemoveAtEquipUnequipTags\(int\)

```csharp
public NativeString256 RemoveAtEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtGameplayTags_System_Int32_"></a> RemoveAtGameplayTags\(int\)

```csharp
public NativeString256 RemoveAtGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtLastAnimTags_System_Int32_"></a> RemoveAtLastAnimTags\(int\)

```csharp
public NativeString256 RemoveAtLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtMeleeMontageSamples_System_Int32_"></a> RemoveAtMeleeMontageSamples\(int\)

```csharp
public SequencedSample RemoveAtMeleeMontageSamples(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtParentAnimTags_System_Int32_"></a> RemoveAtParentAnimTags\(int\)

```csharp
public NativeString256 RemoveAtParentAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtParentAttackingTags_System_Int32_"></a> RemoveAtParentAttackingTags\(int\)

```csharp
public NativeString256 RemoveAtParentAttackingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtParentBlockingTags_System_Int32_"></a> RemoveAtParentBlockingTags\(int\)

```csharp
public NativeString256 RemoveAtParentBlockingTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtParentEquipUnequipTags_System_Int32_"></a> RemoveAtParentEquipUnequipTags\(int\)

```csharp
public NativeString256 RemoveAtParentEquipUnequipTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtParentGameplayTags_System_Int32_"></a> RemoveAtParentGameplayTags\(int\)

```csharp
public NativeString256 RemoveAtParentGameplayTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_RemoveAtParentLastAnimTags_System_Int32_"></a> RemoveAtParentLastAnimTags\(int\)

```csharp
public NativeString256 RemoveAtParentLastAnimTags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetAnimActionSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetAnimActionSamples\(in NativeList<SequencedSample\>\)

```csharp
public void SetAnimActionSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetAnimActionSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetAnimActionSamples\(int, in SequencedSample\)

```csharp
public void SetAnimActionSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAnimTags\(in NativeList<NativeString256\>\)

```csharp
public void SetAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAnimTags\(int, in NativeString256\)

```csharp
public void SetAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetAttackingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetAttackingTags\(in NativeList<NativeString256\>\)

```csharp
public void SetAttackingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetAttackingTags\(int, in NativeString256\)

```csharp
public void SetAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetBlockingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetBlockingTags\(in NativeList<NativeString256\>\)

```csharp
public void SetBlockingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetBlockingTags\(int, in NativeString256\)

```csharp
public void SetBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetCastingRequestSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetCastingRequestSamples\(in NativeList<SequencedSample\>\)

```csharp
public void SetCastingRequestSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetCastingRequestSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetCastingRequestSamples\(int, in SequencedSample\)

```csharp
public void SetCastingRequestSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetEquipUnequipTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetEquipUnequipTags\(in NativeList<NativeString256\>\)

```csharp
public void SetEquipUnequipTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetEquipUnequipTags\(int, in NativeString256\)

```csharp
public void SetEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetGameplayTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetGameplayTags\(in NativeList<NativeString256\>\)

```csharp
public void SetGameplayTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetGameplayTags\(int, in NativeString256\)

```csharp
public void SetGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetLastAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetLastAnimTags\(in NativeList<NativeString256\>\)

```csharp
public void SetLastAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetLastAnimTags\(int, in NativeString256\)

```csharp
public void SetLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetMeleeMontageSamples_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample___"></a> SetMeleeMontageSamples\(in NativeList<SequencedSample\>\)

```csharp
public void SetMeleeMontageSamples(in NativeList<SequencedSample> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetMeleeMontageSamples_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SequencedSample__"></a> SetMeleeMontageSamples\(int, in SequencedSample\)

```csharp
public void SetMeleeMontageSamples(int index, in SequencedSample value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SequencedSample](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SequencedSample.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetParentAnimTags\(in NativeList<NativeString256\>\)

```csharp
public void SetParentAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetParentAnimTags\(int, in NativeString256\)

```csharp
public void SetParentAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentAttackingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetParentAttackingTags\(in NativeList<NativeString256\>\)

```csharp
public void SetParentAttackingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentAttackingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetParentAttackingTags\(int, in NativeString256\)

```csharp
public void SetParentAttackingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentBlockingTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetParentBlockingTags\(in NativeList<NativeString256\>\)

```csharp
public void SetParentBlockingTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentBlockingTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetParentBlockingTags\(int, in NativeString256\)

```csharp
public void SetParentBlockingTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentEquipUnequipTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetParentEquipUnequipTags\(in NativeList<NativeString256\>\)

```csharp
public void SetParentEquipUnequipTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentEquipUnequipTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetParentEquipUnequipTags\(int, in NativeString256\)

```csharp
public void SetParentEquipUnequipTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentGameplayTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetParentGameplayTags\(in NativeList<NativeString256\>\)

```csharp
public void SetParentGameplayTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentGameplayTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetParentGameplayTags\(int, in NativeString256\)

```csharp
public void SetParentGameplayTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentLastAnimTags_Yooni_Native_Container_NativeList_Yooni_Native_Container_NativeString256___"></a> SetParentLastAnimTags\(in NativeList<NativeString256\>\)

```csharp
public void SetParentLastAnimTags(in NativeList<NativeString256> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SetParentLastAnimTags_System_Int32_Yooni_Native_Container_NativeString256__"></a> SetParentLastAnimTags\(int, in NativeString256\)

```csharp
public void SetParentLastAnimTags(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_ShieldHandPoseAnimLayerClassNameNotifyChanged_System_Int32_"></a> ShieldHandPoseAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void ShieldHandPoseAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_SpellCastAnimLayerClassNameNotifyChanged_System_Int32_"></a> SpellCastAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void SpellCastAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_StaggerAnimLayerClassNameNotifyChanged_System_Int32_"></a> StaggerAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void StaggerAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_TorchAnimLayerClassNameNotifyChanged_System_Int32_"></a> TorchAnimLayerClassNameNotifyChanged\(int\)

```csharp
public void TorchAnimLayerClassNameNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_UseControllerDesiredRotationNotifyChanged_System_Int32_"></a> UseControllerDesiredRotationNotifyChanged\(int\)

```csharp
public void UseControllerDesiredRotationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_UseControllerRotationYawNotifyChanged_System_Int32_"></a> UseControllerRotationYawNotifyChanged\(int\)

```csharp
public void UseControllerRotationYawNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_UseRotationSpeedCurveNotifyChanged_System_Int32_"></a> UseRotationSpeedCurveNotifyChanged\(int\)

```csharp
public void UseRotationSpeedCurveNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_WantsToRunNotifyChanged_System_Int32_"></a> WantsToRunNotifyChanged\(int\)

```csharp
public void WantsToRunNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationStateComponent_WeaponDrawnNotifyChanged_System_Int32_"></a> WeaponDrawnNotifyChanged\(int\)

```csharp
public void WeaponDrawnNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


