# Struct MarkerHandle

Namespace: [OblivionMp.Sdk.Values](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.md)  
Assembly: OblivionMp.Sdk.dll  

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

### <a id="OblivionMp_Sdk_Values_MarkerHandle__ctor_System_UInt64_"></a> MarkerHandle\(ulong\)

Handle to a marker. Zero means "no marker" (see **None**).

```csharp
public MarkerHandle(ulong value)
```

#### Parameters

`value` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Properties

### <a id="OblivionMp_Sdk_Values_MarkerHandle_IsNone"></a> IsNone

```csharp
public bool IsNone { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerHandle_None"></a> None

The empty handle.

```csharp
public static MarkerHandle None { get; }
```

#### Property Value

 [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

### <a id="OblivionMp_Sdk_Values_MarkerHandle_Value"></a> Value

```csharp
public ulong Value { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### <a id="OblivionMp_Sdk_Values_MarkerHandle_Equals_OblivionMp_Sdk_Values_MarkerHandle_"></a> Equals\(MarkerHandle\)

```csharp
public bool Equals(MarkerHandle other)
```

#### Parameters

`other` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerHandle_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerHandle_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### <a id="OblivionMp_Sdk_Values_MarkerHandle_op_Equality_OblivionMp_Sdk_Values_MarkerHandle_OblivionMp_Sdk_Values_MarkerHandle_"></a> operator ==\(MarkerHandle, MarkerHandle\)

```csharp
public static bool operator ==(MarkerHandle left, MarkerHandle right)
```

#### Parameters

`left` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

`right` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerHandle_op_Inequality_OblivionMp_Sdk_Values_MarkerHandle_OblivionMp_Sdk_Values_MarkerHandle_"></a> operator \!=\(MarkerHandle, MarkerHandle\)

```csharp
public static bool operator !=(MarkerHandle left, MarkerHandle right)
```

#### Parameters

`left` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

`right` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


