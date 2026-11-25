---
title: 'Struct BrowserHandle'
description: 'Identifies a browser: the thing that loads a page and produces frames.'
---
# Struct BrowserHandle

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

Identifies a browser: the thing that loads a page and produces frames.

```csharp
public readonly struct BrowserHandle : IEquatable<BrowserHandle>
```

#### Implements

[IEquatable<BrowserHandle\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

Separate from **ViewportHandle** on purpose. A browser can exist with nothing showing it, and can
move between viewports without being recreated.

## Constructors

### <a id="ReadyM_Cef_BrowserHandle__ctor_System_UInt64_"></a> BrowserHandle\(ulong\)

Identifies a browser: the thing that loads a page and produces frames.

```csharp
public BrowserHandle(ulong Value)
```

#### Parameters

`Value` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Remarks

Separate from **ViewportHandle** on purpose. A browser can exist with nothing showing it, and can
move between viewports without being recreated.

## Properties

### <a id="ReadyM_Cef_BrowserHandle_Value"></a> Value

```csharp
public ulong Value { get; init; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### <a id="ReadyM_Cef_BrowserHandle_Deconstruct_System_UInt64__"></a> Deconstruct\(out ulong\)

```csharp
public void Deconstruct(out ulong Value)
```

#### Parameters

`Value` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="ReadyM_Cef_BrowserHandle_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_BrowserHandle_Equals_ReadyM_Cef_BrowserHandle_"></a> Equals\(BrowserHandle\)

```csharp
public bool Equals(BrowserHandle other)
```

#### Parameters

`other` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_BrowserHandle_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Cef_BrowserHandle_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Cef_BrowserHandle_op_Equality_ReadyM_Cef_BrowserHandle_ReadyM_Cef_BrowserHandle_"></a> operator ==\(BrowserHandle, BrowserHandle\)

```csharp
public static bool operator ==(BrowserHandle left, BrowserHandle right)
```

#### Parameters

`left` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`right` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_BrowserHandle_op_Inequality_ReadyM_Cef_BrowserHandle_ReadyM_Cef_BrowserHandle_"></a> operator \!=\(BrowserHandle, BrowserHandle\)

```csharp
public static bool operator !=(BrowserHandle left, BrowserHandle right)
```

#### Parameters

`left` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`right` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


