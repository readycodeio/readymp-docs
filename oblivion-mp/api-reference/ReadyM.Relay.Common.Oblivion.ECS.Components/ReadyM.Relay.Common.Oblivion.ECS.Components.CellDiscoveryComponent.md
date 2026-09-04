# Struct CellDiscoveryComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct CellDiscoveryComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent_IsDiscovered"></a> IsDiscovered

```csharp
public bool IsDiscovered { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent__"></a> Assign\(in CellDiscoveryComponent\)

```csharp
public void Assign(in CellDiscoveryComponent value)
```

#### Parameters

`value` [CellDiscoveryComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.CellDiscoveryComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent_IsDiscoveredNotifyChanged_System_Int32_"></a> IsDiscoveredNotifyChanged\(int\)

```csharp
public void IsDiscoveredNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_CellDiscoveryComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


