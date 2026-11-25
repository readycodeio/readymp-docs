---
title: 'Struct MarkerHandle'
description: 'Handle to a marker. Zero means "no marker" (see None).'
---
# Struct MarkerHandle

Namespace: [OblivionMP.SDK.Values](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.md)  
Assembly: OblivionMP.SDK.dll  

Handle to a marker. Zero means "no marker" (see **None**).

```csharp
public readonly struct MarkerHandle : IEquatable<MarkerHandle>
```

#### Implements

[IEquatable<MarkerHandle\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMP_SDK_Values_MarkerHandle__ctor_System_UInt64_"></a> MarkerHandle\(ulong\)

Handle to a marker. Zero means "no marker" (see **None**).

```csharp
public MarkerHandle(ulong value)
```

#### Parameters

`value` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Properties

### <a id="OblivionMP_SDK_Values_MarkerHandle_IsNone"></a> IsNone

Whether this is **None**.

```csharp
public bool IsNone { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Values_MarkerHandle_None"></a> None

The empty handle.

```csharp
public static MarkerHandle None { get; }
```

#### Property Value

 [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

### <a id="OblivionMP_SDK_Values_MarkerHandle_Value"></a> Value

The raw handle, 0 for no marker.

```csharp
public ulong Value { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### <a id="OblivionMP_SDK_Values_MarkerHandle_Equals_OblivionMP_SDK_Values_MarkerHandle_"></a> Equals\(MarkerHandle\)

Whether both handles name the same marker.

```csharp
public bool Equals(MarkerHandle other)
```

#### Parameters

`other` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Values_MarkerHandle_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Values_MarkerHandle_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### <a id="OblivionMP_SDK_Values_MarkerHandle_op_Equality_OblivionMP_SDK_Values_MarkerHandle_OblivionMP_SDK_Values_MarkerHandle_"></a> operator ==\(MarkerHandle, MarkerHandle\)

Whether both handles name the same marker.

```csharp
public static bool operator ==(MarkerHandle left, MarkerHandle right)
```

#### Parameters

`left` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

`right` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Values_MarkerHandle_op_Inequality_OblivionMP_SDK_Values_MarkerHandle_OblivionMP_SDK_Values_MarkerHandle_"></a> operator \!=\(MarkerHandle, MarkerHandle\)

Whether the handles name different markers.

```csharp
public static bool operator !=(MarkerHandle left, MarkerHandle right)
```

#### Parameters

`left` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

`right` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


