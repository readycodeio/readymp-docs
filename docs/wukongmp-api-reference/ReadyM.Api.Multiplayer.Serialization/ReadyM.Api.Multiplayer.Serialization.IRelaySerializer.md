# Interface IRelaySerializer

Namespace: [ReadyM.Api.Multiplayer.Serialization](../ReadyM.Api.Multiplayer.Serialization/ReadyM.Api.Multiplayer.Serialization.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public interface IRelaySerializer
```

## Methods

### <a id="ReadyM_Api_Multiplayer_Serialization_IRelaySerializer_DeserializeObject_LiteNetLib_Utils_NetDataReader_"></a> DeserializeObject\(NetDataReader\)

```csharp
object? DeserializeObject(NetDataReader stream)
```

#### Parameters

`stream` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="ReadyM_Api_Multiplayer_Serialization_IRelaySerializer_DeserializeObject__1_LiteNetLib_Utils_NetDataReader_"></a> DeserializeObject<T\>\(NetDataReader\)

```csharp
T DeserializeObject<T>(NetDataReader stream)
```

#### Parameters

`stream` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_Api_Multiplayer_Serialization_IRelaySerializer_SerializeObject_LiteNetLib_Utils_NetDataWriter_System_Object_"></a> SerializeObject\(NetDataWriter, object?\)

```csharp
void SerializeObject(NetDataWriter writer, object? data)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

`data` [object](https://learn.microsoft.com/dotnet/api/system.object)?


