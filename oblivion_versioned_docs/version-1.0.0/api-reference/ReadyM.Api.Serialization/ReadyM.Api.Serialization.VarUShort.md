---
title: 'Struct VarUShort'
description: 'Variable-length unsigned short. Most significant bit of each byte is used as a continuation flag. The remaining 7 bits are used to store the value.'
---
# Struct VarUShort

Namespace: [ReadyM.Api.Serialization](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.md)  
Assembly: ReadyM.Api.dll  

Variable-length unsigned short.
Most significant bit of each byte is used as a continuation flag.
The remaining 7 bits are used to store the value.

```csharp
public struct VarUShort : INetSerializable, IEquatable<VarUShort>
```

#### Implements

INetSerializable, 
[IEquatable<VarUShort\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Serialization_VarUShort__ctor_System_UInt16_"></a> VarUShort\(ushort\)

Variable-length unsigned short.
Most significant bit of each byte is used as a continuation flag.
The remaining 7 bits are used to store the value.

```csharp
public VarUShort(ushort value)
```

#### Parameters

`value` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Fields

### <a id="ReadyM_Api_Serialization_VarUShort_MaxSize"></a> MaxSize

```csharp
public const int MaxSize = 3
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Api_Serialization_VarUShort_Value"></a> Value

```csharp
public readonly ushort Value { get; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

## Methods

### <a id="ReadyM_Api_Serialization_VarUShort_Equals_ReadyM_Api_Serialization_VarUShort_"></a> Equals\(VarUShort\)

```csharp
public bool Equals(VarUShort other)
```

#### Parameters

`other` [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Serialization_VarUShort_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Serialization_VarUShort_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Serialization_VarUShort_SizeOf_System_UInt16_"></a> SizeOf\(ushort\)

How many bytes the value takes on the wire.

```csharp
public static int SizeOf(ushort value)
```

#### Parameters

`value` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Serialization_VarUShort_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Serialization_VarUShort_op_Equality_ReadyM_Api_Serialization_VarUShort_ReadyM_Api_Serialization_VarUShort_"></a> operator ==\(VarUShort, VarUShort\)

```csharp
public static bool operator ==(VarUShort left, VarUShort right)
```

#### Parameters

`left` [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

`right` [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Serialization_VarUShort_op_Implicit_ReadyM_Api_Serialization_VarUShort__System_UInt16"></a> implicit operator ushort\(VarUShort\)

```csharp
public static implicit operator ushort(VarUShort value)
```

#### Parameters

`value` [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

#### Returns

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Api_Serialization_VarUShort_op_Implicit_System_UInt16__ReadyM_Api_Serialization_VarUShort"></a> implicit operator VarUShort\(ushort\)

```csharp
public static implicit operator VarUShort(ushort value)
```

#### Parameters

`value` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

#### Returns

 [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

### <a id="ReadyM_Api_Serialization_VarUShort_op_Inequality_ReadyM_Api_Serialization_VarUShort_ReadyM_Api_Serialization_VarUShort_"></a> operator \!=\(VarUShort, VarUShort\)

```csharp
public static bool operator !=(VarUShort left, VarUShort right)
```

#### Parameters

`left` [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

`right` [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


