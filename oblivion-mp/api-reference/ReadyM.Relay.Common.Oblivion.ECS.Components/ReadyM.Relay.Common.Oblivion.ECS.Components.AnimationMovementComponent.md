# Struct AnimationMovementComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player character's movement and animation data.

```csharp
public struct AnimationMovementComponent : IComponent, INetSerializable
```

#### Implements

[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Acceleration"></a> Acceleration

```csharp
public Vector3 Acceleration { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ActorForwardPoseOffset"></a> ActorForwardPoseOffset

```csharp
public float ActorForwardPoseOffset { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ActorRotation"></a> ActorRotation

```csharp
public float ActorRotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_AnalogInputModifier"></a> AnalogInputModifier

```csharp
public float AnalogInputModifier { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ClampedAxis"></a> ClampedAxis

```csharp
public float ClampedAxis { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_CombatLeanHorizontal"></a> CombatLeanHorizontal

```csharp
public float CombatLeanHorizontal { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_CombatLeanVertical"></a> CombatLeanVertical

```csharp
public float CombatLeanVertical { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ControlInputVector"></a> ControlInputVector

```csharp
public Vector3 ControlInputVector { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ControlRotation"></a> ControlRotation

```csharp
public float ControlRotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_CurrentOrientationAngle"></a> CurrentOrientationAngle

```csharp
public float CurrentOrientationAngle { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_DirectionalAxis"></a> DirectionalAxis

```csharp
public Vector2 DirectionalAxis { get; set; }
```

#### Property Value

 [Vector2](https://learn.microsoft.com/dotnet/api/system.numerics.vector2)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_DirectionalAxisLength"></a> DirectionalAxisLength

```csharp
public float DirectionalAxisLength { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_HorizontalSpeed"></a> HorizontalSpeed

```csharp
public float HorizontalSpeed { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LastControlInputVector"></a> LastControlInputVector

```csharp
public Vector3 LastControlInputVector { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LeanHorizontal"></a> LeanHorizontal

```csharp
public float LeanHorizontal { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LeanPoseAlpha"></a> LeanPoseAlpha

```csharp
public float LeanPoseAlpha { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LeanVertical"></a> LeanVertical

```csharp
public float LeanVertical { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LookAtPoint"></a> LookAtPoint

```csharp
public Vector3 LookAtPoint { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_MinMaxBackwardAngle"></a> MinMaxBackwardAngle

```csharp
public float MinMaxBackwardAngle { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_MinMaxForwardAngle"></a> MinMaxForwardAngle

```csharp
public float MinMaxForwardAngle { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_RotationRate"></a> RotationRate

```csharp
public float RotationRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_SneakingLocomotionPlayRate"></a> SneakingLocomotionPlayRate

```csharp
public float SneakingLocomotionPlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_SneakingLocomotionSpeed"></a> SneakingLocomotionSpeed

```csharp
public float SneakingLocomotionSpeed { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StandingLocomotionPlayRate"></a> StandingLocomotionPlayRate

```csharp
public float StandingLocomotionPlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StandingLocomotionSpeed"></a> StandingLocomotionSpeed

```csharp
public float StandingLocomotionSpeed { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StartPoseAlpha"></a> StartPoseAlpha

```csharp
public float StartPoseAlpha { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StrideDirection"></a> StrideDirection

```csharp
public Vector3 StrideDirection { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StrideScale"></a> StrideScale

```csharp
public float StrideScale { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_TurnInPlaceAngleThreshold"></a> TurnInPlaceAngleThreshold

```csharp
public float TurnInPlaceAngleThreshold { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_UpperBodyAngle"></a> UpperBodyAngle

```csharp
public float UpperBodyAngle { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Velocity"></a> Velocity

```csharp
public Vector3 Velocity { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_VerticalSpeed"></a> VerticalSpeed

```csharp
public float VerticalSpeed { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_YawRotationDelta"></a> YawRotationDelta

```csharp
public float YawRotationDelta { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_AccelerationNotifyChanged_System_Int32_"></a> AccelerationNotifyChanged\(int\)

```csharp
public void AccelerationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ActorForwardPoseOffsetNotifyChanged_System_Int32_"></a> ActorForwardPoseOffsetNotifyChanged\(int\)

```csharp
public void ActorForwardPoseOffsetNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ActorRotationNotifyChanged_System_Int32_"></a> ActorRotationNotifyChanged\(int\)

```csharp
public void ActorRotationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_AnalogInputModifierNotifyChanged_System_Int32_"></a> AnalogInputModifierNotifyChanged\(int\)

```csharp
public void AnalogInputModifierNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent__"></a> Assign\(in AnimationMovementComponent\)

```csharp
public void Assign(in AnimationMovementComponent value)
```

#### Parameters

`value` [AnimationMovementComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AnimationMovementComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ClampedAxisNotifyChanged_System_Int32_"></a> ClampedAxisNotifyChanged\(int\)

```csharp
public void ClampedAxisNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_CombatLeanHorizontalNotifyChanged_System_Int32_"></a> CombatLeanHorizontalNotifyChanged\(int\)

```csharp
public void CombatLeanHorizontalNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_CombatLeanVerticalNotifyChanged_System_Int32_"></a> CombatLeanVerticalNotifyChanged\(int\)

```csharp
public void CombatLeanVerticalNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ControlInputVectorNotifyChanged_System_Int32_"></a> ControlInputVectorNotifyChanged\(int\)

```csharp
public void ControlInputVectorNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_ControlRotationNotifyChanged_System_Int32_"></a> ControlRotationNotifyChanged\(int\)

```csharp
public void ControlRotationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_CurrentOrientationAngleNotifyChanged_System_Int32_"></a> CurrentOrientationAngleNotifyChanged\(int\)

```csharp
public void CurrentOrientationAngleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_DirectionalAxisLengthNotifyChanged_System_Int32_"></a> DirectionalAxisLengthNotifyChanged\(int\)

```csharp
public void DirectionalAxisLengthNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_DirectionalAxisNotifyChanged_System_Int32_"></a> DirectionalAxisNotifyChanged\(int\)

```csharp
public void DirectionalAxisNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_HorizontalSpeedNotifyChanged_System_Int32_"></a> HorizontalSpeedNotifyChanged\(int\)

```csharp
public void HorizontalSpeedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LastControlInputVectorNotifyChanged_System_Int32_"></a> LastControlInputVectorNotifyChanged\(int\)

```csharp
public void LastControlInputVectorNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LeanHorizontalNotifyChanged_System_Int32_"></a> LeanHorizontalNotifyChanged\(int\)

```csharp
public void LeanHorizontalNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LeanPoseAlphaNotifyChanged_System_Int32_"></a> LeanPoseAlphaNotifyChanged\(int\)

```csharp
public void LeanPoseAlphaNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LeanVerticalNotifyChanged_System_Int32_"></a> LeanVerticalNotifyChanged\(int\)

```csharp
public void LeanVerticalNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_LookAtPointNotifyChanged_System_Int32_"></a> LookAtPointNotifyChanged\(int\)

```csharp
public void LookAtPointNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_MinMaxBackwardAngleNotifyChanged_System_Int32_"></a> MinMaxBackwardAngleNotifyChanged\(int\)

```csharp
public void MinMaxBackwardAngleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_MinMaxForwardAngleNotifyChanged_System_Int32_"></a> MinMaxForwardAngleNotifyChanged\(int\)

```csharp
public void MinMaxForwardAngleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_RotationRateNotifyChanged_System_Int32_"></a> RotationRateNotifyChanged\(int\)

```csharp
public void RotationRateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_SneakingLocomotionPlayRateNotifyChanged_System_Int32_"></a> SneakingLocomotionPlayRateNotifyChanged\(int\)

```csharp
public void SneakingLocomotionPlayRateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_SneakingLocomotionSpeedNotifyChanged_System_Int32_"></a> SneakingLocomotionSpeedNotifyChanged\(int\)

```csharp
public void SneakingLocomotionSpeedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StandingLocomotionPlayRateNotifyChanged_System_Int32_"></a> StandingLocomotionPlayRateNotifyChanged\(int\)

```csharp
public void StandingLocomotionPlayRateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StandingLocomotionSpeedNotifyChanged_System_Int32_"></a> StandingLocomotionSpeedNotifyChanged\(int\)

```csharp
public void StandingLocomotionSpeedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StartPoseAlphaNotifyChanged_System_Int32_"></a> StartPoseAlphaNotifyChanged\(int\)

```csharp
public void StartPoseAlphaNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StrideDirectionNotifyChanged_System_Int32_"></a> StrideDirectionNotifyChanged\(int\)

```csharp
public void StrideDirectionNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_StrideScaleNotifyChanged_System_Int32_"></a> StrideScaleNotifyChanged\(int\)

```csharp
public void StrideScaleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_TurnInPlaceAngleThresholdNotifyChanged_System_Int32_"></a> TurnInPlaceAngleThresholdNotifyChanged\(int\)

```csharp
public void TurnInPlaceAngleThresholdNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_UpperBodyAngleNotifyChanged_System_Int32_"></a> UpperBodyAngleNotifyChanged\(int\)

```csharp
public void UpperBodyAngleNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_VelocityNotifyChanged_System_Int32_"></a> VelocityNotifyChanged\(int\)

```csharp
public void VelocityNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_VerticalSpeedNotifyChanged_System_Int32_"></a> VerticalSpeedNotifyChanged\(int\)

```csharp
public void VerticalSpeedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_YawRotationDeltaNotifyChanged_System_Int32_"></a> YawRotationDeltaNotifyChanged\(int\)

```csharp
public void YawRotationDeltaNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


