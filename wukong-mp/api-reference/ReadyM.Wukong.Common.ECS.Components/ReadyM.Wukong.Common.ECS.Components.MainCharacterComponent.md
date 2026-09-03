# Struct MainCharacterComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the main character state.

```csharp
public struct MainCharacterComponent : IIndexedComponent<PlayerId>, IComponent, INetSerializable
```

#### Implements

[IIndexedComponent<PlayerId\>](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Index/IIndexedComponent.cs), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent__ctor"></a> MainCharacterComponent\(\)

Holds the main character state.

```csharp
public MainCharacterComponent()
```

## Properties

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_Attributes"></a> Attributes

```csharp
public AttributesState Attributes { get; set; }
```

#### Property Value

 [AttributesState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.AttributesState.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_BeguilingChantEligible"></a> BeguilingChantEligible

```csharp
public bool BeguilingChantEligible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_Equipment"></a> Equipment

```csharp
public EquipmentState Equipment { get; set; }
```

#### Property Value

 [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_InJump"></a> InJump

```csharp
public bool InJump { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsAttacking"></a> IsAttacking

```csharp
public bool IsAttacking { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsFalling"></a> IsFalling

```csharp
public bool IsFalling { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsFlying"></a> IsFlying

```csharp
public bool IsFlying { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsLandingMove"></a> IsLandingMove

```csharp
public bool IsLandingMove { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsSpectator"></a> IsSpectator

```csharp
public bool IsSpectator { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsStandRotate"></a> IsStandRotate

```csharp
public bool IsStandRotate { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsTransformed"></a> IsTransformed

```csharp
public bool IsTransformed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_MoveAcceleration"></a> MoveAcceleration

```csharp
public Vector3 MoveAcceleration { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_MoveSpeedLevel"></a> MoveSpeedLevel

```csharp
public MoveSpeedLevel MoveSpeedLevel { get; set; }
```

#### Property Value

 [MoveSpeedLevel](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.MoveSpeedLevel.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_MoveSpeedState"></a> MoveSpeedState

```csharp
public MoveSpeedLevel MoveSpeedState { get; set; }
```

#### Property Value

 [MoveSpeedLevel](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.MoveSpeedLevel.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_OrientRotationToMovement"></a> OrientRotationToMovement

```csharp
public bool OrientRotationToMovement { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_PlayerId"></a> PlayerId

```csharp
public PlayerId PlayerId { get; set; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_RebirthPointId"></a> RebirthPointId

```csharp
public int RebirthPointId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_ShouldWaitRotateFinished"></a> ShouldWaitRotateFinished

```csharp
public bool ShouldWaitRotateFinished { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_SpectatorReason"></a> SpectatorReason

```csharp
public SpectatorReason SpectatorReason { get; set; }
```

#### Property Value

 [SpectatorReason](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.SpectatorReason.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_TurnInplaceRemainAngle"></a> TurnInplaceRemainAngle

```csharp
public float TurnInplaceRemainAngle { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_TurnInplaceTargetRotation"></a> TurnInplaceTargetRotation

```csharp
public Vector3 TurnInplaceTargetRotation { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_Velocity"></a> Velocity

```csharp
public Vector3 Velocity { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_WaitingSequenceId"></a> WaitingSequenceId

```csharp
public int WaitingSequenceId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_Assign_ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent__"></a> Assign\(in MainCharacterComponent\)

```csharp
public void Assign(in MainCharacterComponent value)
```

#### Parameters

`value` [MainCharacterComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MainCharacterComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_AttributesNotifyChanged_System_Int32_"></a> AttributesNotifyChanged\(int\)

```csharp
public void AttributesNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_BeguilingChantEligibleNotifyChanged_System_Int32_"></a> BeguilingChantEligibleNotifyChanged\(int\)

```csharp
public void BeguilingChantEligibleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_EquipmentNotifyChanged_System_Int32_"></a> EquipmentNotifyChanged\(int\)

```csharp
public void EquipmentNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_GetIndexedValue"></a> GetIndexedValue\(\)

Returns the value of the indexed component field.

```csharp
public PlayerId GetIndexedValue()
```

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_InJumpNotifyChanged_System_Int32_"></a> InJumpNotifyChanged\(int\)

```csharp
public void InJumpNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsAttackingNotifyChanged_System_Int32_"></a> IsAttackingNotifyChanged\(int\)

```csharp
public void IsAttackingNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsFallingNotifyChanged_System_Int32_"></a> IsFallingNotifyChanged\(int\)

```csharp
public void IsFallingNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsFlyingNotifyChanged_System_Int32_"></a> IsFlyingNotifyChanged\(int\)

```csharp
public void IsFlyingNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsLandingMoveNotifyChanged_System_Int32_"></a> IsLandingMoveNotifyChanged\(int\)

```csharp
public void IsLandingMoveNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsSpectatorNotifyChanged_System_Int32_"></a> IsSpectatorNotifyChanged\(int\)

```csharp
public void IsSpectatorNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsStandRotateNotifyChanged_System_Int32_"></a> IsStandRotateNotifyChanged\(int\)

```csharp
public void IsStandRotateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_IsTransformedNotifyChanged_System_Int32_"></a> IsTransformedNotifyChanged\(int\)

```csharp
public void IsTransformedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_MoveAccelerationNotifyChanged_System_Int32_"></a> MoveAccelerationNotifyChanged\(int\)

```csharp
public void MoveAccelerationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_MoveSpeedLevelNotifyChanged_System_Int32_"></a> MoveSpeedLevelNotifyChanged\(int\)

```csharp
public void MoveSpeedLevelNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_MoveSpeedStateNotifyChanged_System_Int32_"></a> MoveSpeedStateNotifyChanged\(int\)

```csharp
public void MoveSpeedStateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_OrientRotationToMovementNotifyChanged_System_Int32_"></a> OrientRotationToMovementNotifyChanged\(int\)

```csharp
public void OrientRotationToMovementNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_PlayerIdNotifyChanged_System_Int32_"></a> PlayerIdNotifyChanged\(int\)

```csharp
public void PlayerIdNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_RebirthPointIdNotifyChanged_System_Int32_"></a> RebirthPointIdNotifyChanged\(int\)

```csharp
public void RebirthPointIdNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_ShouldWaitRotateFinishedNotifyChanged_System_Int32_"></a> ShouldWaitRotateFinishedNotifyChanged\(int\)

```csharp
public void ShouldWaitRotateFinishedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_SpectatorReasonNotifyChanged_System_Int32_"></a> SpectatorReasonNotifyChanged\(int\)

```csharp
public void SpectatorReasonNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_TurnInplaceRemainAngleNotifyChanged_System_Int32_"></a> TurnInplaceRemainAngleNotifyChanged\(int\)

```csharp
public void TurnInplaceRemainAngleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_TurnInplaceTargetRotationNotifyChanged_System_Int32_"></a> TurnInplaceTargetRotationNotifyChanged\(int\)

```csharp
public void TurnInplaceTargetRotationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_VelocityNotifyChanged_System_Int32_"></a> VelocityNotifyChanged\(int\)

```csharp
public void VelocityNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MainCharacterComponent_WaitingSequenceIdNotifyChanged_System_Int32_"></a> WaitingSequenceIdNotifyChanged\(int\)

```csharp
public void WaitingSequenceIdNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


