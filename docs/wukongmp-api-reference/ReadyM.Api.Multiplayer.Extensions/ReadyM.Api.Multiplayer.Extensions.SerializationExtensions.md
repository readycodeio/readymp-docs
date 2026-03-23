# Class SerializationExtensions

Namespace: [ReadyM.Api.Multiplayer.Extensions](../ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.Extensions.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public static class SerializationExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SerializationExtensions](../ReadyM.Api.Multiplayer.Extensions/ReadyM.Api.Multiplayer.Extensions.SerializationExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Api_Multiplayer_Extensions_SerializationExtensions_Deserialize_System_Numerics_Vector3__LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(ref Vector3, NetDataReader\)

```csharp
public static void Deserialize(this ref Vector3 vector, NetDataReader reader)
```

#### Parameters

`vector` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Multiplayer_Extensions_SerializationExtensions_Serialize_System_Numerics_Vector3_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(Vector3, NetDataWriter\)

```csharp
public static void Serialize(this Vector3 vector, NetDataWriter writer)
```

#### Parameters

`vector` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


