# Struct AreaId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

```csharp
[DeriveJsonSerializable(SerializableMode.Default)]
public struct AreaId : INetSerializable, IEquatable<AreaId>
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IEquatable<AreaId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Idents_AreaId__ctor_System_UInt16_"></a> AreaId\(ushort\)

```csharp
public AreaId(ushort id)
```

#### Parameters

`id` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Properties

### <a id="ReadyM_Api_Idents_AreaId_Invalid"></a> Invalid

```csharp
public static AreaId Invalid { get; }
```

#### Property Value

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

### <a id="ReadyM_Api_Idents_AreaId_Max"></a> Max

```csharp
public static AreaId Max { get; }
```

#### Property Value

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

## Methods

### <a id="ReadyM_Api_Idents_AreaId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Idents_AreaId_Equals_ReadyM_Api_Idents_AreaId_"></a> Equals\(AreaId\)

```csharp
public bool Equals(AreaId other)
```

#### Parameters

`other` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_AreaId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_AreaId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Idents_AreaId_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Api_Idents_AreaId_TextDeserialize_System_Text_Json_Utf8JsonReader__System_Text_Json_JsonSerializerOptions_"></a> TextDeserialize\(ref Utf8JsonReader, JsonSerializerOptions\)

```csharp
public static AreaId TextDeserialize(ref Utf8JsonReader reader, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

### <a id="ReadyM_Api_Idents_AreaId_TextSerialize_System_Text_Json_Utf8JsonWriter_ReadyM_Api_Idents_AreaId_System_Text_Json_JsonSerializerOptions_"></a> TextSerialize\(Utf8JsonWriter, AreaId, JsonSerializerOptions\)

```csharp
public static void TextSerialize(Utf8JsonWriter writer, AreaId obj, JsonSerializerOptions options)
```

#### Parameters

`writer` [Utf8JsonWriter](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonwriter)

`obj` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

### <a id="ReadyM_Api_Idents_AreaId_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Idents_AreaId_op_Equality_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_AreaId_"></a> operator ==\(AreaId, AreaId\)

```csharp
public static bool operator ==(AreaId left, AreaId right)
```

#### Parameters

`left` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

`right` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_AreaId_op_Inequality_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_AreaId_"></a> operator \!=\(AreaId, AreaId\)

```csharp
public static bool operator !=(AreaId left, AreaId right)
```

#### Parameters

`left` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

`right` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


