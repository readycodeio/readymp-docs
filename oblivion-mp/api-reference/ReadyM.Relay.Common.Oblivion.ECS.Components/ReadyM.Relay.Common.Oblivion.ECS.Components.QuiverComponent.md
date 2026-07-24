# Struct QuiverComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player character's quiver information.

```csharp
public struct QuiverComponent : ISaveTaggedComponent<QuiverComponent>, IComponent, INetSerializable
```

#### Implements

[ISaveTaggedComponent<QuiverComponent\>](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ISaveTaggedComponent-1.md), 
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_QuiverComponent_ArrowCount"></a> ArrowCount

```csharp
public int ArrowCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_QuiverComponent_HasQuiver"></a> HasQuiver

```csharp
public bool HasQuiver { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_QuiverComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_QuiverComponent__"></a> Assign\(in QuiverComponent\)

```csharp
public void Assign(in QuiverComponent value)
```

#### Parameters

`value` [QuiverComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.QuiverComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_QuiverComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_QuiverComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


