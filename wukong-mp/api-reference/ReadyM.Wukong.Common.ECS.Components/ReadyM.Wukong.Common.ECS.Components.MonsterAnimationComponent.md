# Struct MonsterAnimationComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the state of the monster's animation.

```csharp
public struct MonsterAnimationComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_AnimationPlayRate"></a> AnimationPlayRate

```csharp
public float AnimationPlayRate { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_MoveAiType"></a> MoveAiType

```csharp
public byte MoveAiType { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_AnimationPlayRateNotifyChanged_System_Int32_"></a> AnimationPlayRateNotifyChanged\(int\)

```csharp
public void AnimationPlayRateNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_Assign_ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent__"></a> Assign\(in MonsterAnimationComponent\)

```csharp
public void Assign(in MonsterAnimationComponent value)
```

#### Parameters

`value` [MonsterAnimationComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MonsterAnimationComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_MoveAiTypeNotifyChanged_System_Int32_"></a> MoveAiTypeNotifyChanged\(int\)

```csharp
public void MoveAiTypeNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MonsterAnimationComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


