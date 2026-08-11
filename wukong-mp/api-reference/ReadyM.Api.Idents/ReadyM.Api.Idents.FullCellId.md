# Struct FullCellId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

Fully identifies a cell across the whole game world by pairing it with its parent area.
A **CellId** only has to be unique within its parent **AreaId**, so a cell can only be
uniquely identified by the (**AreaId**, **CellId**) pair represented by this struct.

```csharp
public struct FullCellId : INetSerializable, IEquatable<FullCellId>
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IEquatable<FullCellId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

This struct doesn't replace **CellId**, because most of the time 
**AreaId** can be inferred from the context of which area is a given player in.
Cells are only used in OblivionMP for now. WukongMP does not use cells.

## Constructors

### <a id="ReadyM_Api_Idents_FullCellId__ctor_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_CellId_"></a> FullCellId\(AreaId, CellId\)

```csharp
public FullCellId(AreaId areaId, CellId cellId)
```

#### Parameters

`areaId` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

`cellId` [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

## Properties

### <a id="ReadyM_Api_Idents_FullCellId_AreaId"></a> AreaId

```csharp
public AreaId AreaId { get; }
```

#### Property Value

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

### <a id="ReadyM_Api_Idents_FullCellId_CellId"></a> CellId

```csharp
public CellId CellId { get; }
```

#### Property Value

 [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

## Methods

### <a id="ReadyM_Api_Idents_FullCellId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Idents_FullCellId_Equals_ReadyM_Api_Idents_FullCellId_"></a> Equals\(FullCellId\)

```csharp
public bool Equals(FullCellId other)
```

#### Parameters

`other` [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_FullCellId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_FullCellId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Idents_FullCellId_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Api_Idents_FullCellId_TextDeserialize_System_Text_Json_Utf8JsonReader__System_Text_Json_JsonSerializerOptions_"></a> TextDeserialize\(ref Utf8JsonReader, JsonSerializerOptions\)

```csharp
public static FullCellId TextDeserialize(ref Utf8JsonReader reader, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

### <a id="ReadyM_Api_Idents_FullCellId_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Idents_FullCellId_op_Equality_ReadyM_Api_Idents_FullCellId_ReadyM_Api_Idents_FullCellId_"></a> operator ==\(FullCellId, FullCellId\)

```csharp
public static bool operator ==(FullCellId left, FullCellId right)
```

#### Parameters

`left` [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

`right` [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_FullCellId_op_Inequality_ReadyM_Api_Idents_FullCellId_ReadyM_Api_Idents_FullCellId_"></a> operator \!=\(FullCellId, FullCellId\)

```csharp
public static bool operator !=(FullCellId left, FullCellId right)
```

#### Parameters

`left` [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

`right` [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


