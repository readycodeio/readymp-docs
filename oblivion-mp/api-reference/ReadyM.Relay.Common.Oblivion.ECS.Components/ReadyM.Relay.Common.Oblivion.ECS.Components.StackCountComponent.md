# Struct StackCountComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the number of items in a dropped item stack.

```csharp
public struct StackCountComponent : IComponent, INetSerializable
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

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent__ctor_System_Int32_"></a> StackCountComponent\(int\)

```csharp
public StackCountComponent(int count)
```

#### Parameters

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent_Count"></a> Count

```csharp
public int Count { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent__"></a> Assign\(in StackCountComponent\)

```csharp
public void Assign(in StackCountComponent value)
```

#### Parameters

`value` [StackCountComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.StackCountComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent_CountNotifyChanged_System_Int32_"></a> CountNotifyChanged\(int\)

```csharp
public void CountNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_StackCountComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


