# Struct VitalsComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player character's vital attributes.

```csharp
public struct VitalsComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_Fatigue"></a> Fatigue

```csharp
public float Fatigue { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_FatigueBase"></a> FatigueBase

```csharp
public float FatigueBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_Hp"></a> Hp

```csharp
public float Hp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_HpBase"></a> HpBase

```csharp
public float HpBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_IsDead"></a> IsDead

```csharp
public bool IsDead { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_Magicka"></a> Magicka

```csharp
public float Magicka { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_MagickaBase"></a> MagickaBase

```csharp
public float MagickaBase { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent__"></a> Assign\(in VitalsComponent\)

```csharp
public void Assign(in VitalsComponent value)
```

#### Parameters

`value` [VitalsComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.VitalsComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_FatigueBaseNotifyChanged_System_Int32_"></a> FatigueBaseNotifyChanged\(int\)

```csharp
public void FatigueBaseNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_FatigueNotifyChanged_System_Int32_"></a> FatigueNotifyChanged\(int\)

```csharp
public void FatigueNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_HpBaseNotifyChanged_System_Int32_"></a> HpBaseNotifyChanged\(int\)

```csharp
public void HpBaseNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_HpNotifyChanged_System_Int32_"></a> HpNotifyChanged\(int\)

```csharp
public void HpNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_IsDeadNotifyChanged_System_Int32_"></a> IsDeadNotifyChanged\(int\)

```csharp
public void IsDeadNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_MagickaBaseNotifyChanged_System_Int32_"></a> MagickaBaseNotifyChanged\(int\)

```csharp
public void MagickaBaseNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_MagickaNotifyChanged_System_Int32_"></a> MagickaNotifyChanged\(int\)

```csharp
public void MagickaNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_VitalsComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


