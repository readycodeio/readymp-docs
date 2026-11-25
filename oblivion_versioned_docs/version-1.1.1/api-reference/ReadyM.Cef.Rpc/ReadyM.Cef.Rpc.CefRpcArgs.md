---
title: 'Class CefRpcArgs'
description: 'A typed message''s arguments, as the JSON array that crosses to a page.'
---
# Class CefRpcArgs

Namespace: [ReadyM.Cef.Rpc](../ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.md)  
Assembly: ReadyM.Cef.dll  

A typed message's arguments, as the JSON array that crosses to a page.

```csharp
public static class CefRpcArgs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CefRpcArgs](../ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.CefRpcArgs.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

GAME THREAD. Positional, matching what <code>readym.sendButtonClicked("save", 2)</code> looks like from the page.
The generator refuses an unsupported parameter type at compile time, so nothing unsupported reaches here.

## Methods

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String_"></a> TryRead\(PageMessageDelivery, ILogger, string\)

```csharp
public static bool TryRead(PageMessageDelivery message, ILogger logger, string source)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead__1_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String___0__"></a> TryRead<T0\>\(PageMessageDelivery, ILogger, string, out T0\)

```csharp
public static bool TryRead<T0>(PageMessageDelivery message, ILogger logger, string source, out T0 a0)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`a0` T0

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T0` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead__2_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String___0____1__"></a> TryRead<T0, T1\>\(PageMessageDelivery, ILogger, string, out T0, out T1\)

```csharp
public static bool TryRead<T0, T1>(PageMessageDelivery message, ILogger logger, string source, out T0 a0, out T1 a1)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`a0` T0

`a1` T1

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T0` 

`T1` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead__3_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String___0____1____2__"></a> TryRead<T0, T1, T2\>\(PageMessageDelivery, ILogger, string, out T0, out T1, out T2\)

```csharp
public static bool TryRead<T0, T1, T2>(PageMessageDelivery message, ILogger logger, string source, out T0 a0, out T1 a1, out T2 a2)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`a0` T0

`a1` T1

`a2` T2

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T0` 

`T1` 

`T2` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead__4_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String___0____1____2____3__"></a> TryRead<T0, T1, T2, T3\>\(PageMessageDelivery, ILogger, string, out T0, out T1, out T2, out T3\)

```csharp
public static bool TryRead<T0, T1, T2, T3>(PageMessageDelivery message, ILogger logger, string source, out T0 a0, out T1 a1, out T2 a2, out T3 a3)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`a0` T0

`a1` T1

`a2` T2

`a3` T3

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T0` 

`T1` 

`T2` 

`T3` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead__5_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String___0____1____2____3____4__"></a> TryRead<T0, T1, T2, T3, T4\>\(PageMessageDelivery, ILogger, string, out T0, out T1, out T2, out T3, out T4\)

```csharp
public static bool TryRead<T0, T1, T2, T3, T4>(PageMessageDelivery message, ILogger logger, string source, out T0 a0, out T1 a1, out T2 a2, out T3 a3, out T4 a4)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`a0` T0

`a1` T1

`a2` T2

`a3` T3

`a4` T4

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T0` 

`T1` 

`T2` 

`T3` 

`T4` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_TryRead__6_ReadyM_Cef_Messaging_PageMessageDelivery_Microsoft_Extensions_Logging_ILogger_System_String___0____1____2____3____4____5__"></a> TryRead<T0, T1, T2, T3, T4, T5\>\(PageMessageDelivery, ILogger, string, out T0, out T1, out T2, out T3, out T4, out T5\)

```csharp
public static bool TryRead<T0, T1, T2, T3, T4, T5>(PageMessageDelivery message, ILogger logger, string source, out T0 a0, out T1 a1, out T2 a2, out T3 a3, out T4 a4, out T5 a5)
```

#### Parameters

`message` [PageMessageDelivery](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

`source` [string](https://learn.microsoft.com/dotnet/api/system.string)

`a0` T0

`a1` T1

`a2` T2

`a3` T3

`a4` T4

`a5` T5

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T0` 

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write"></a> Write\(\)

```csharp
public static string Write()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write__1___0_"></a> Write<T0\>\(T0\)

```csharp
public static string Write<T0>(T0 a0)
```

#### Parameters

`a0` T0

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T0` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write__2___0___1_"></a> Write<T0, T1\>\(T0, T1\)

```csharp
public static string Write<T0, T1>(T0 a0, T1 a1)
```

#### Parameters

`a0` T0

`a1` T1

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T0` 

`T1` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write__3___0___1___2_"></a> Write<T0, T1, T2\>\(T0, T1, T2\)

```csharp
public static string Write<T0, T1, T2>(T0 a0, T1 a1, T2 a2)
```

#### Parameters

`a0` T0

`a1` T1

`a2` T2

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T0` 

`T1` 

`T2` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write__4___0___1___2___3_"></a> Write<T0, T1, T2, T3\>\(T0, T1, T2, T3\)

```csharp
public static string Write<T0, T1, T2, T3>(T0 a0, T1 a1, T2 a2, T3 a3)
```

#### Parameters

`a0` T0

`a1` T1

`a2` T2

`a3` T3

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T0` 

`T1` 

`T2` 

`T3` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write__5___0___1___2___3___4_"></a> Write<T0, T1, T2, T3, T4\>\(T0, T1, T2, T3, T4\)

```csharp
public static string Write<T0, T1, T2, T3, T4>(T0 a0, T1 a1, T2 a2, T3 a3, T4 a4)
```

#### Parameters

`a0` T0

`a1` T1

`a2` T2

`a3` T3

`a4` T4

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T0` 

`T1` 

`T2` 

`T3` 

`T4` 

### <a id="ReadyM_Cef_Rpc_CefRpcArgs_Write__6___0___1___2___3___4___5_"></a> Write<T0, T1, T2, T3, T4, T5\>\(T0, T1, T2, T3, T4, T5\)

```csharp
public static string Write<T0, T1, T2, T3, T4, T5>(T0 a0, T1 a1, T2 a2, T3 a3, T4 a4, T5 a5)
```

#### Parameters

`a0` T0

`a1` T1

`a2` T2

`a3` T3

`a4` T4

`a5` T5

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`T0` 

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 


