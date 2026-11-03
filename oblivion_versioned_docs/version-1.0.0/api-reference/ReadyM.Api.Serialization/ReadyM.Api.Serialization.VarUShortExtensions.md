---
title: 'Class VarUShortExtensions'
description: 'Writes and reads a ushort in the compact VarUShort encoding.'
---
# Class VarUShortExtensions

Namespace: [ReadyM.Api.Serialization](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.md)  
Assembly: ReadyM.Api.dll  

Writes and reads a <code>ushort</code> in the compact **VarUShort** encoding.

```csharp
public static class VarUShortExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[VarUShortExtensions](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShortExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Api_Serialization_VarUShortExtensions_GetVarUShort_LiteNetLib_Utils_NetDataReader_"></a> GetVarUShort\(NetDataReader\)

Throws **InvalidDataException** for more than three bytes, more than 16 bits, or a stream that ends first.

```csharp
public static ushort GetVarUShort(this NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

#### Returns

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Api_Serialization_VarUShortExtensions_PutVarUShort_LiteNetLib_Utils_NetDataWriter_System_UInt16_"></a> PutVarUShort\(NetDataWriter, ushort\)

Writes <code class="paramref">value</code> in as few bytes as it needs.

```csharp
public static void PutVarUShort(this NetDataWriter writer, ushort value)
```

#### Parameters

`writer` NetDataWriter

`value` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)


