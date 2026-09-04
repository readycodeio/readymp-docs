# Struct DiscoveredActor

Namespace: [ReadyM.Relay.Common.Oblivion.Rpc.Values](../ReadyM.Relay.Common.Oblivion.Rpc.Values/ReadyM.Relay.Common.Oblivion.Rpc.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct DiscoveredActor : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor__ctor_System_UInt32_System_UInt32_System_Numerics_Vector3_"></a> DiscoveredActor\(uint, uint, Vector3\)

```csharp
public DiscoveredActor(uint refId, uint baseId, Vector3 position)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`baseId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`position` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor_BaseId"></a> BaseId

```csharp
public uint BaseId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor_Position"></a> Position

```csharp
public Vector3 Position
```

#### Field Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor_RefId"></a> RefId

```csharp
public uint RefId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_Values_DiscoveredActor_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


