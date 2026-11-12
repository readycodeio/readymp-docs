---
title: 'Delegate PageMessageCallback'
description: 'Handles one named message from a page.'
---
# Delegate PageMessageCallback

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

Handles one named message from a page.

```csharp
public delegate void PageMessageCallback(PageMessageDelivery message)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

## Remarks

GAME THREAD, like every callback a mod is handed. What it receives was built while reading the message on
CEF's thread and is referenced by nothing else.


