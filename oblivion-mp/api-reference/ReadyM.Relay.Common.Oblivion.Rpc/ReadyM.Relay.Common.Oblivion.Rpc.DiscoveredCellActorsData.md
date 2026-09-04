# Struct DiscoveredCellActorsData

Namespace: [ReadyM.Relay.Common.Oblivion.Rpc](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct DiscoveredCellActorsData : INetSerializable
```

#### Implements

INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_DiscoveredCellActorsData__ctor_ReadyM_Relay_Common_Oblivion_ECS_Values_FormType_System_Collections_Generic_List_ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor__"></a> DiscoveredCellActorsData\(FormType, List<DiscoveredActor\>\)

```csharp
public DiscoveredCellActorsData(FormType formType, List<DiscoveredActor> actors)
```

#### Parameters

`formType` [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

`actors` [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[DiscoveredActor](../ReadyM.Relay.Common.Oblivion.Rpc.Values/ReadyM.Relay.Common.Oblivion.Rpc.Values.DiscoveredActor.md)\>

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_DiscoveredCellActorsData_Actors"></a> Actors

```csharp
public List<DiscoveredActor> Actors
```

#### Field Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[DiscoveredActor](../ReadyM.Relay.Common.Oblivion.Rpc.Values/ReadyM.Relay.Common.Oblivion.Rpc.Values.DiscoveredActor.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_DiscoveredCellActorsData_FormType"></a> FormType

```csharp
public FormType FormType
```

#### Field Value

 [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_DiscoveredCellActorsData_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_DiscoveredCellActorsData_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


