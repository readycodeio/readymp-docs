# Struct AnimationComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds entity movement animation state.

```csharp
public struct AnimationComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_MoveAcceleration"></a> MoveAcceleration

```csharp
public Vector3 MoveAcceleration { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_MoveSpeedLevel"></a> MoveSpeedLevel

```csharp
public byte MoveSpeedLevel { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_MoveSpeedState"></a> MoveSpeedState

```csharp
public byte MoveSpeedState { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_ShouldWaitRotateFinished"></a> ShouldWaitRotateFinished

```csharp
public bool ShouldWaitRotateFinished { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_Velocity"></a> Velocity

```csharp
public Vector3 Velocity { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_Assign_ReadyM_Wukong_Common_ECS_Components_AnimationComponent__"></a> Assign\(in AnimationComponent\)

```csharp
public void Assign(in AnimationComponent value)
```

#### Parameters

`value` [AnimationComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.AnimationComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_MoveAccelerationNotifyChanged_System_Int32_"></a> MoveAccelerationNotifyChanged\(int\)

```csharp
public void MoveAccelerationNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_MoveSpeedLevelNotifyChanged_System_Int32_"></a> MoveSpeedLevelNotifyChanged\(int\)

```csharp
public void MoveSpeedLevelNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_MoveSpeedStateNotifyChanged_System_Int32_"></a> MoveSpeedStateNotifyChanged\(int\)

```csharp
public void MoveSpeedStateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_ShouldWaitRotateFinishedNotifyChanged_System_Int32_"></a> ShouldWaitRotateFinishedNotifyChanged\(int\)

```csharp
public void ShouldWaitRotateFinishedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_AnimationComponent_VelocityNotifyChanged_System_Int32_"></a> VelocityNotifyChanged\(int\)

```csharp
public void VelocityNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


