# Struct AreaId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

Identifies an area within the game world.
Areas can be main Chapter maps, sub-areas such as the Zodiac Village, or hidden boss arenas.
If going somewhere requires a loading screen, it's probably a different area.

```csharp
public struct AreaId : INetSerializable, IEquatable<AreaId>
```

#### Implements

INetSerializable, 
[IEquatable<AreaId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Idents_AreaId__ctor_Yooni_Native_Container_NativeString256_"></a> AreaId\(NativeString256\)

```csharp
public AreaId(NativeString256 id)
```

#### Parameters

`id` [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Api_Idents_AreaId__ctor_System_String_"></a> AreaId\(string\)

```csharp
public AreaId(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Api_Idents_AreaId__ctor_System_Int32_"></a> AreaId\(int\)

```csharp
public AreaId(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Api_Idents_AreaId_Invalid"></a> Invalid

```csharp
public static AreaId Invalid { get; }
```

#### Property Value

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

## Methods

### <a id="ReadyM_Api_Idents_AreaId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

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

`writer` NetDataWriter

### <a id="ReadyM_Api_Idents_AreaId_TextDeserialize_System_Text_Json_Utf8JsonReader__System_Text_Json_JsonSerializerOptions_"></a> TextDeserialize\(ref Utf8JsonReader, JsonSerializerOptions\)

```csharp
public static AreaId TextDeserialize(ref Utf8JsonReader reader, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

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


