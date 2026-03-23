# Struct PlayerId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

```csharp
[DeriveJsonSerializable(SerializableMode.Default)]
public struct PlayerId : INetSerializable, IEquatable<PlayerId>
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IEquatable<PlayerId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Idents_PlayerId__ctor_System_UInt16_"></a> PlayerId\(ushort\)

```csharp
public PlayerId(ushort id)
```

#### Parameters

`id` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Properties

### <a id="ReadyM_Api_Idents_PlayerId_Invalid"></a> Invalid

```csharp
public static PlayerId Invalid { get; }
```

#### Property Value

 [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

### <a id="ReadyM_Api_Idents_PlayerId_Max"></a> Max

```csharp
public static PlayerId Max { get; }
```

#### Property Value

 [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

### <a id="ReadyM_Api_Idents_PlayerId_RawValue"></a> RawValue

```csharp
public ushort RawValue { get; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Api_Idents_PlayerId_Server"></a> Server

```csharp
public static PlayerId Server { get; }
```

#### Property Value

 [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

## Methods

### <a id="ReadyM_Api_Idents_PlayerId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Idents_PlayerId_Equals_ReadyM_Api_Idents_PlayerId_"></a> Equals\(PlayerId\)

```csharp
public bool Equals(PlayerId other)
```

#### Parameters

`other` [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_PlayerId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_PlayerId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Idents_PlayerId_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Api_Idents_PlayerId_TextDeserialize_System_Text_Json_Utf8JsonReader__System_Text_Json_JsonSerializerOptions_"></a> TextDeserialize\(ref Utf8JsonReader, JsonSerializerOptions\)

```csharp
public static PlayerId TextDeserialize(ref Utf8JsonReader reader, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

### <a id="ReadyM_Api_Idents_PlayerId_TextSerialize_System_Text_Json_Utf8JsonWriter_ReadyM_Api_Idents_PlayerId_System_Text_Json_JsonSerializerOptions_"></a> TextSerialize\(Utf8JsonWriter, PlayerId, JsonSerializerOptions\)

```csharp
public static void TextSerialize(Utf8JsonWriter writer, PlayerId obj, JsonSerializerOptions options)
```

#### Parameters

`writer` [Utf8JsonWriter](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonwriter)

`obj` [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

### <a id="ReadyM_Api_Idents_PlayerId_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Idents_PlayerId_op_Equality_ReadyM_Api_Idents_PlayerId_ReadyM_Api_Idents_PlayerId_"></a> operator ==\(PlayerId, PlayerId\)

```csharp
public static bool operator ==(PlayerId left, PlayerId right)
```

#### Parameters

`left` [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

`right` [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_PlayerId_op_Inequality_ReadyM_Api_Idents_PlayerId_ReadyM_Api_Idents_PlayerId_"></a> operator \!=\(PlayerId, PlayerId\)

```csharp
public static bool operator !=(PlayerId left, PlayerId right)
```

#### Parameters

`left` [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

`right` [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


