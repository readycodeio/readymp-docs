---
title: 'Struct VarUInt'
description: 'Variable-length unsigned integer. Most significant bit of each byte is used as a continuation flag. The remaining 7 bits are used to store the value.'
---
# Struct VarUInt

Namespace: [ReadyM.Api.Serialization](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.md)  
Assembly: ReadyM.Api.dll  

Variable-length unsigned integer.
Most significant bit of each byte is used as a continuation flag.
The remaining 7 bits are used to store the value.

```csharp
public struct VarUInt : INetSerializable, IEquatable<VarUInt>
```

#### Implements

INetSerializable, 
[IEquatable<VarUInt\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Serialization_VarUInt__ctor_System_UInt32_"></a> VarUInt\(uint\)

Variable-length unsigned integer.
Most significant bit of each byte is used as a continuation flag.
The remaining 7 bits are used to store the value.

```csharp
public VarUInt(uint value)
```

#### Parameters

`value` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Fields

### <a id="ReadyM_Api_Serialization_VarUInt_MaxSize"></a> MaxSize

```csharp
public const int MaxSize = 5
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Api_Serialization_VarUInt_Value"></a> Value

```csharp
public readonly uint Value { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="ReadyM_Api_Serialization_VarUInt_Equals_ReadyM_Api_Serialization_VarUInt_"></a> Equals\(VarUInt\)

```csharp
public bool Equals(VarUInt other)
```

#### Parameters

`other` [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Serialization_VarUInt_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Serialization_VarUInt_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Serialization_VarUInt_SizeOf_System_UInt32_"></a> SizeOf\(uint\)

How many bytes the value takes on the wire.

```csharp
public static int SizeOf(uint value)
```

#### Parameters

`value` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### <a id="ReadyM_Api_Serialization_VarUInt_op_Equality_ReadyM_Api_Serialization_VarUInt_ReadyM_Api_Serialization_VarUInt_"></a> operator ==\(VarUInt, VarUInt\)

```csharp
public static bool operator ==(VarUInt left, VarUInt right)
```

#### Parameters

`left` [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

`right` [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Serialization_VarUInt_op_Implicit_ReadyM_Api_Serialization_VarUInt__System_UInt32"></a> implicit operator uint\(VarUInt\)

```csharp
public static implicit operator uint(VarUInt value)
```

#### Parameters

`value` [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Api_Serialization_VarUInt_op_Implicit_System_UInt32__ReadyM_Api_Serialization_VarUInt"></a> implicit operator VarUInt\(uint\)

```csharp
public static implicit operator VarUInt(uint value)
```

#### Parameters

`value` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

### <a id="ReadyM_Api_Serialization_VarUInt_op_Inequality_ReadyM_Api_Serialization_VarUInt_ReadyM_Api_Serialization_VarUInt_"></a> operator \!=\(VarUInt, VarUInt\)

```csharp
public static bool operator !=(VarUInt left, VarUInt right)
```

#### Parameters

`left` [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

`right` [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


