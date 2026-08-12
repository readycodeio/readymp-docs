# Struct ArchetypeId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

Represents a unique identifier for an archetype in the ECS.
Entities of a given archetype have a fixed set of components, never changed after creation.

```csharp
public struct ArchetypeId : IEquatable<ArchetypeId>, INetSerializable
```

#### Implements

[IEquatable<ArchetypeId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Idents_ArchetypeId__ctor_System_Byte_"></a> ArchetypeId\(byte\)

Represents a unique identifier for an archetype in the ECS.
Entities of a given archetype have a fixed set of components, never changed after creation.

```csharp
public ArchetypeId(byte id)
```

#### Parameters

`id` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Properties

### <a id="ReadyM_Api_Idents_ArchetypeId_None"></a> None

```csharp
public static ArchetypeId None { get; }
```

#### Property Value

 [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

## Methods

### <a id="ReadyM_Api_Idents_ArchetypeId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Idents_ArchetypeId_Equals_ReadyM_Api_Idents_ArchetypeId_"></a> Equals\(ArchetypeId\)

```csharp
public bool Equals(ArchetypeId other)
```

#### Parameters

`other` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_ArchetypeId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_ArchetypeId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Idents_ArchetypeId_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Api_Idents_ArchetypeId_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Idents_ArchetypeId_op_Equality_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_ArchetypeId_"></a> operator ==\(ArchetypeId, ArchetypeId\)

```csharp
public static bool operator ==(ArchetypeId left, ArchetypeId right)
```

#### Parameters

`left` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

`right` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_ArchetypeId_op_Inequality_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_ArchetypeId_"></a> operator \!=\(ArchetypeId, ArchetypeId\)

```csharp
public static bool operator !=(ArchetypeId left, ArchetypeId right)
```

#### Parameters

`left` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

`right` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


