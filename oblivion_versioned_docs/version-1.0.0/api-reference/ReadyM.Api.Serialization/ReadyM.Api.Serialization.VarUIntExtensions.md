---
title: 'Class VarUIntExtensions'
description: 'Writes and reads a uint in the compact VarUInt encoding.'
---
# Class VarUIntExtensions

Namespace: [ReadyM.Api.Serialization](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.md)  
Assembly: ReadyM.Api.dll  

Writes and reads a <code>uint</code> in the compact **VarUInt** encoding.

```csharp
public static class VarUIntExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VarUIntExtensions](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUIntExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Api_Serialization_VarUIntExtensions_GetVarUInt_LiteNetLib_Utils_NetDataReader_"></a> GetVarUInt\(NetDataReader\)

Throws **InvalidDataException** for more than five bytes, more than 32 bits, or a stream that ends first.

```csharp
public static uint GetVarUInt(this NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Api_Serialization_VarUIntExtensions_PutVarUInt_LiteNetLib_Utils_NetDataWriter_System_UInt32_"></a> PutVarUInt\(NetDataWriter, uint\)

Writes <code class="paramref">value</code> in as few bytes as it needs.

```csharp
public static void PutVarUInt(this NetDataWriter writer, uint value)
```

#### Parameters

`writer` NetDataWriter

`value` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


