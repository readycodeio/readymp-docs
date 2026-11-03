---
title: 'Class PageMessageDelivery'
description: 'One message from a page, as a mod sees it.'
---
# Class PageMessageDelivery

Namespace: [ReadyM.Cef.Messaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.md)  
Assembly: ReadyM.Cef.dll  

One message from a page, as a mod sees it.

```csharp
public sealed record PageMessageDelivery : IEquatable<PageMessageDelivery>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

#### Implements

[IEquatable<PageMessageDelivery\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

GAME THREAD. THE PAYLOAD IS A COPY, and cannot not be: CEF's shared region is unmapped the moment its
callback returns.

## Constructors

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery__ctor_ReadyM_Cef_BrowserHandle_System_String_System_Int64_ReadyM_Cef_PayloadKind_System_Byte___"></a> PageMessageDelivery\(BrowserHandle, string, long, PayloadKind, byte\[\]\)

One message from a page, as a mod sees it.

```csharp
public PageMessageDelivery(BrowserHandle Page, string Name, long RequestId, PayloadKind Kind, byte[] Payload)
```

#### Parameters

`Page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

Which page sent it. One callback serves every browser, so it has to be told.

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`RequestId` [long](https://learn.microsoft.com/dotnet/api/system.int64)

Zero when the page expects no answer; anything else is what a reply takes.

`Kind` [PayloadKind](../ReadyM.Cef/ReadyM.Cef.PayloadKind.md)

`Payload` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

#### Remarks

GAME THREAD. THE PAYLOAD IS A COPY, and cannot not be: CEF's shared region is unmapped the moment its
callback returns.

## Properties

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Kind"></a> Kind

```csharp
public PayloadKind Kind { get; init; }
```

#### Property Value

 [PayloadKind](../ReadyM.Cef/ReadyM.Cef.PayloadKind.md)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Name"></a> Name

```csharp
public string Name { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Page"></a> Page

Which page sent it. One callback serves every browser, so it has to be told.

```csharp
public BrowserHandle Page { get; init; }
```

#### Property Value

 [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Payload"></a> Payload

```csharp
public byte[] Payload { get; init; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_RequestId"></a> RequestId

Zero when the page expects no answer; anything else is what a reply takes.

```csharp
public long RequestId { get; init; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

## Methods

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery__Clone__"></a> <Clone\>$\(\)

```csharp
public PageMessageDelivery <Clone>$()
```

#### Returns

 [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_AsText"></a> AsText\(\)

The payload as text.

```csharp
public string AsText()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Deconstruct_ReadyM_Cef_BrowserHandle__System_String__System_Int64__ReadyM_Cef_PayloadKind__System_Byte____"></a> Deconstruct\(out BrowserHandle, out string, out long, out PayloadKind, out byte\[\]\)

```csharp
public void Deconstruct(out BrowserHandle Page, out string Name, out long RequestId, out PayloadKind Kind, out byte[] Payload)
```

#### Parameters

`Page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`Name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`RequestId` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`Kind` [PayloadKind](../ReadyM.Cef/ReadyM.Cef.PayloadKind.md)

`Payload` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_Equals_ReadyM_Cef_Messaging_PageMessageDelivery_"></a> Equals\(PageMessageDelivery?\)

```csharp
public bool Equals(PageMessageDelivery? other)
```

#### Parameters

`other` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_op_Equality_ReadyM_Cef_Messaging_PageMessageDelivery_ReadyM_Cef_Messaging_PageMessageDelivery_"></a> operator ==\(PageMessageDelivery?, PageMessageDelivery?\)

```csharp
public static bool operator ==(PageMessageDelivery? left, PageMessageDelivery? right)
```

#### Parameters

`left` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)?

`right` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_Messaging_PageMessageDelivery_op_Inequality_ReadyM_Cef_Messaging_PageMessageDelivery_ReadyM_Cef_Messaging_PageMessageDelivery_"></a> operator \!=\(PageMessageDelivery?, PageMessageDelivery?\)

```csharp
public static bool operator !=(PageMessageDelivery? left, PageMessageDelivery? right)
```

#### Parameters

`left` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)?

`right` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


