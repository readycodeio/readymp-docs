# Struct AnimationMovementComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player character's movement and animation data.

```csharp
public struct AnimationMovementComponent : IComponent, INetSerializable
```

#### Implements

[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

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
public Vector3 ActorRotation { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

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
public Vector3 ControlRotation { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

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
public Vector3 RotationRate { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent__"></a> Assign\(in AnimationMovementComponent\)

```csharp
public void Assign(in AnimationMovementComponent value)
```

#### Parameters

`value` [AnimationMovementComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AnimationMovementComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AnimationMovementComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


