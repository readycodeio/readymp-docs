---
title: 'Class PageMessaging'
description: 'Every named send.'
---
# Class PageMessaging

Namespace: [ReadyM.Cef.Messaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.md)  
Assembly: ReadyM.Cef.dll  

Every named send.

```csharp
public sealed class PageMessaging
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PageMessaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessaging.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

GAME THREAD. Sending only; delivering is **PageMessageDispatcher**'s.

## Constructors

### <a id="ReadyM_Cef_Messaging_PageMessaging__ctor_ReadyM_Cef_Messaging_IPageMessageTransport_"></a> PageMessaging\(IPageMessageTransport\)

Every named send.

```csharp
public PageMessaging(IPageMessageTransport transport)
```

#### Parameters

`transport` [IPageMessageTransport](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.IPageMessageTransport.md)

#### Remarks

GAME THREAD. Sending only; delivering is **PageMessageDispatcher**'s.

## Methods

### <a id="ReadyM_Cef_Messaging_PageMessaging_Post_ReadyM_Cef_BrowserHandle_System_String_System_ReadOnlySpan_System_Byte__"></a> Post\(BrowserHandle, string, ReadOnlySpan<byte\>\)

Sends bytes to a page, arriving as an ArrayBuffer.

```csharp
public void Post(BrowserHandle page, string name, ReadOnlySpan<byte> payload)
```

#### Parameters

`page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`payload` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

### <a id="ReadyM_Cef_Messaging_PageMessaging_PostJson_ReadyM_Cef_BrowserHandle_System_String_System_String_"></a> PostJson\(BrowserHandle, string, string\)

Sends a JSON array of a typed message's arguments.

```csharp
public void PostJson(BrowserHandle page, string name, string json)
```

#### Parameters

`page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`json` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_Messaging_PageMessaging_PostText_ReadyM_Cef_BrowserHandle_System_String_System_String_"></a> PostText\(BrowserHandle, string, string\)

Sends text to a page, arriving as a string.

```csharp
public void PostText(BrowserHandle page, string name, string payload)
```

#### Parameters

`page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_Messaging_PageMessaging_Reply_ReadyM_Cef_BrowserHandle_System_Int64_System_String_System_ReadOnlySpan_System_Byte__"></a> Reply\(BrowserHandle, long, string, ReadOnlySpan<byte\>\)

Answers a <code>readym.request</code> a page is waiting on.

```csharp
public void Reply(BrowserHandle page, long requestId, string name, ReadOnlySpan<byte> payload)
```

#### Parameters

`page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`requestId` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`payload` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

#### Remarks

The name is the REQUEST'S, carried back so nothing crosses this boundary unnamed.

### <a id="ReadyM_Cef_Messaging_PageMessaging_ReplyText_ReadyM_Cef_BrowserHandle_System_Int64_System_String_System_String_"></a> ReplyText\(BrowserHandle, long, string, string\)

Answers a <code>readym.request</code> with text.

```csharp
public void ReplyText(BrowserHandle page, long requestId, string name, string payload)
```

#### Parameters

`page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`requestId` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`payload` [string](https://learn.microsoft.com/dotnet/api/system.string)


