# Struct ConnectionTicket

Namespace: [ReadyM.Api.Multiplayer.Client](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public struct ConnectionTicket : IEquatable<ConnectionTicket>, INetSerializable
```

#### Implements

[IEquatable<ConnectionTicket\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_Equals_ReadyM_Api_Multiplayer_Client_ConnectionTicket_"></a> Equals\(ConnectionTicket\)

```csharp
public bool Equals(ConnectionTicket other)
```

#### Parameters

`other` [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_New"></a> New\(\)

```csharp
public static ConnectionTicket New()
```

#### Returns

 [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_Parse_System_String_"></a> Parse\(string\)

```csharp
public static ConnectionTicket Parse(string text)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public readonly void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_TryParse_System_String_System_Nullable_ReadyM_Api_Multiplayer_Client_ConnectionTicket___"></a> TryParse\(string, out ConnectionTicket?\)

```csharp
public static bool TryParse(string text, out ConnectionTicket? ticket)
```

#### Parameters

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`ticket` [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Operators

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_op_Equality_ReadyM_Api_Multiplayer_Client_ConnectionTicket_ReadyM_Api_Multiplayer_Client_ConnectionTicket_"></a> operator ==\(ConnectionTicket, ConnectionTicket\)

```csharp
public static bool operator ==(ConnectionTicket left, ConnectionTicket right)
```

#### Parameters

`left` [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

`right` [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Multiplayer_Client_ConnectionTicket_op_Inequality_ReadyM_Api_Multiplayer_Client_ConnectionTicket_ReadyM_Api_Multiplayer_Client_ConnectionTicket_"></a> operator \!=\(ConnectionTicket, ConnectionTicket\)

```csharp
public static bool operator !=(ConnectionTicket left, ConnectionTicket right)
```

#### Parameters

`left` [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

`right` [ConnectionTicket](../ReadyM.Api.Multiplayer.Client/ReadyM.Api.Multiplayer.Client.ConnectionTicket.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


