---
title: 'ReadyM.Cef'
description: 'The types in the ReadyM.Cef namespace.'
---
# ReadyM.Cef

### Namespaces

 [ReadyM.Cef.Messaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.md)

 [ReadyM.Cef.Rpc](../ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.md)

### Classes

 [CefHost](../ReadyM.Cef/ReadyM.Cef.CefHost.md)

The one place that knows every viewport and every browser this reload cycle created.

### Structs

 [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

Identifies a browser: the thing that loads a page and produces frames.

 [CefBrowserInstance](../ReadyM.Cef/ReadyM.Cef.CefBrowserInstance.md)

A browser, as a mod holds it: say what it should do, directly.

 [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

Identifies a viewport: a place a browser can be shown.

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

Where a viewport sits and how big it is: a normalized anchor rect in the parent, plus an offset per edge.

### Enums

 [CefInputMode](../ReadyM.Cef/ReadyM.Cef.CefInputMode.md)

What should happen to input over a viewport while its page is on screen.

 [PayloadKind](../ReadyM.Cef/ReadyM.Cef.PayloadKind.md)

What a payload is, which is the only thing the channel knows about it.

 [ViewportAlign](../ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)

Start, Center or End on one axis. NOT Left and Top: those mean different things per axis.

### Delegates

 [PageMessageCallback](../ReadyM.Cef/ReadyM.Cef.PageMessageCallback.md)

Handles one named message from a page.


