---
title: 'Interface ICefRpcHandler'
description: 'A class that declares typed messages, ready to be bound.'
---
# Interface ICefRpcHandler

Namespace: [ReadyM.Cef.Rpc](../ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.md)  
Assembly: ReadyM.Cef.dll  

A class that declares typed messages, ready to be bound.

```csharp
public interface ICefRpcHandler
```

## Remarks

GAME THREAD. A MOD DOES NOT WRITE THIS: the generator emits a second part of the mod's partial class
carrying it, so the class implements it without its author naming it.

## Methods

### <a id="ReadyM_Cef_Rpc_ICefRpcHandler_BindRpc_ReadyM_Cef_Messaging_PageMessaging_ReadyM_Cef_Messaging_PageMessageCallbackRegistry_Microsoft_Extensions_Logging_ILogger_"></a> BindRpc\(PageMessaging, PageMessageCallbackRegistry, ILogger\)

Takes the collaborators the generated members need, and registers every receiving callback.

```csharp
void BindRpc(PageMessaging messaging, PageMessageCallbackRegistry callbacks, ILogger logger)
```

#### Parameters

`messaging` [PageMessaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessaging.md)

`callbacks` [PageMessageCallbackRegistry](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageCallbackRegistry.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

#### Remarks

LATE BIND, and knowingly. It leaves a handler half-built between its constructor and this call, which
<code>2026-09-19-attach-vs-install</code> in the coding standard argues against, and the alternative is for
the mod's own constructor to take these so the generator could find them as members.
<p>
KEPT ANYWAY, by the operator on 2026-09-22: the networked RPCs bind this way, and one familiar pattern
is worth more than this class being purer than the one beside it. The window is bounded, since the
binder runs at startup, before a page exists to send anything.
</p>


