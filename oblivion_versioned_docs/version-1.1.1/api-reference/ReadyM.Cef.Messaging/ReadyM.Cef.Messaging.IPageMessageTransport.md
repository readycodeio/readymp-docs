---
title: 'Interface IPageMessageTransport'
description: 'Puts bytes on a page, under a name.'
---
# Interface IPageMessageTransport

Namespace: [ReadyM.Cef.Messaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.md)  
Assembly: ReadyM.Cef.dll  

Puts bytes on a page, under a name.

```csharp
public interface IPageMessageTransport
```

## Remarks

GAME THREAD. The one capability sending needs, so nothing has to take **CefHost**.

## Methods

### <a id="ReadyM_Cef_Messaging_IPageMessageTransport_SendRaw_ReadyM_Cef_BrowserHandle_System_Int64_System_String_ReadyM_Cef_PayloadKind_System_ReadOnlySpan_System_Byte__"></a> SendRaw\(BrowserHandle, long, string, PayloadKind, ReadOnlySpan<byte\>\)

```csharp
void SendRaw(BrowserHandle page, long requestId, string name, PayloadKind kind, ReadOnlySpan<byte> payload)
```

#### Parameters

`page` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`requestId` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`kind` [PayloadKind](../ReadyM.Cef/ReadyM.Cef.PayloadKind.md)

`payload` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>


