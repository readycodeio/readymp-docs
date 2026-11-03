---
title: 'Struct ViewportHandle'
description: 'Identifies a viewport: a place a browser can be shown.'
---
# Struct ViewportHandle

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

Identifies a viewport: a place a browser can be shown.

```csharp
public readonly struct ViewportHandle : IEquatable<ViewportHandle>
```

#### Implements

[IEquatable<ViewportHandle\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

A handle rather than the object itself, so it can be passed to anyone without handing over the thing's
lifetime, and so a stale one fails with a message instead of resurrecting something torn down. Handles are
unique for the life of a registry and are never reused, including across destroy and recreate.

## Constructors

### <a id="ReadyM_Cef_ViewportHandle__ctor_System_UInt64_"></a> ViewportHandle\(ulong\)

Identifies a viewport: a place a browser can be shown.

```csharp
public ViewportHandle(ulong Value)
```

#### Parameters

`Value` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

#### Remarks

A handle rather than the object itself, so it can be passed to anyone without handing over the thing's
lifetime, and so a stale one fails with a message instead of resurrecting something torn down. Handles are
unique for the life of a registry and are never reused, including across destroy and recreate.

## Properties

### <a id="ReadyM_Cef_ViewportHandle_IsValid"></a> IsValid

Whether this names a viewport at all.

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportHandle_None"></a> None

A viewport that was refused, and which does nothing rather than failing.

```csharp
public static ViewportHandle None { get; }
```

#### Property Value

 [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Remarks

Every operation taking a handle ignores this one, so a mod holding it carries on and nothing reaches
the engine. Zero is never handed out: real handles start at one and are never reused.

### <a id="ReadyM_Cef_ViewportHandle_Value"></a> Value

```csharp
public ulong Value { get; init; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### <a id="ReadyM_Cef_ViewportHandle_Deconstruct_System_UInt64__"></a> Deconstruct\(out ulong\)

```csharp
public void Deconstruct(out ulong Value)
```

#### Parameters

`Value` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="ReadyM_Cef_ViewportHandle_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportHandle_Equals_ReadyM_Cef_ViewportHandle_"></a> Equals\(ViewportHandle\)

```csharp
public bool Equals(ViewportHandle other)
```

#### Parameters

`other` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportHandle_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Cef_ViewportHandle_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Cef_ViewportHandle_op_Equality_ReadyM_Cef_ViewportHandle_ReadyM_Cef_ViewportHandle_"></a> operator ==\(ViewportHandle, ViewportHandle\)

```csharp
public static bool operator ==(ViewportHandle left, ViewportHandle right)
```

#### Parameters

`left` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`right` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportHandle_op_Inequality_ReadyM_Cef_ViewportHandle_ReadyM_Cef_ViewportHandle_"></a> operator \!=\(ViewportHandle, ViewportHandle\)

```csharp
public static bool operator !=(ViewportHandle left, ViewportHandle right)
```

#### Parameters

`left` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`right` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


