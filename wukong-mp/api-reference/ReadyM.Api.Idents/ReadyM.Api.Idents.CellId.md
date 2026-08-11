# Struct CellId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

Identifies a cell within an area.
**CellId** has to be unique within its parent area (identified by **AreaId**).
The main difference between a cell and an area is that a player can be only in one area at once, but can have many cells active within that area.
<remarks>Cells are only used in OblivionMP for now. WukongMP does not use cells.</remarks>

```csharp
public struct CellId : INetSerializable, IEquatable<CellId>
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IEquatable<CellId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Idents_CellId__ctor_Yooni_Native_Container_NativeString256_"></a> CellId\(NativeString256\)

```csharp
public CellId(NativeString256 id)
```

#### Parameters

`id` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/c12780df078c882058ee18410f12720cc6ee2a0a/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Api_Idents_CellId__ctor_System_String_"></a> CellId\(string\)

```csharp
public CellId(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Api_Idents_CellId__ctor_System_Int32_"></a> CellId\(int\)

```csharp
public CellId(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Api_Idents_CellId_Invalid"></a> Invalid

```csharp
public static CellId Invalid { get; }
```

#### Property Value

 [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

## Methods

### <a id="ReadyM_Api_Idents_CellId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Idents_CellId_Equals_ReadyM_Api_Idents_CellId_"></a> Equals\(CellId\)

```csharp
public bool Equals(CellId other)
```

#### Parameters

`other` [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_CellId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_CellId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Idents_CellId_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Api_Idents_CellId_TextDeserialize_System_Text_Json_Utf8JsonReader__System_Text_Json_JsonSerializerOptions_"></a> TextDeserialize\(ref Utf8JsonReader, JsonSerializerOptions\)

```csharp
public static CellId TextDeserialize(ref Utf8JsonReader reader, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

### <a id="ReadyM_Api_Idents_CellId_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Idents_CellId_op_Equality_ReadyM_Api_Idents_CellId_ReadyM_Api_Idents_CellId_"></a> operator ==\(CellId, CellId\)

```csharp
public static bool operator ==(CellId left, CellId right)
```

#### Parameters

`left` [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

`right` [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_CellId_op_Inequality_ReadyM_Api_Idents_CellId_ReadyM_Api_Idents_CellId_"></a> operator \!=\(CellId, CellId\)

```csharp
public static bool operator !=(CellId left, CellId right)
```

#### Parameters

`left` [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

`right` [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


