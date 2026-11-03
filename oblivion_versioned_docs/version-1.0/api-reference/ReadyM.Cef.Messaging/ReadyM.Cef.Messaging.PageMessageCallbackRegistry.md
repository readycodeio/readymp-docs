---
title: 'Class PageMessageCallbackRegistry'
description: 'Which callback a message name belongs to, for every named message a page and the game exchange.'
---
# Class PageMessageCallbackRegistry

Namespace: [ReadyM.Cef.Messaging](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.md)  
Assembly: ReadyM.Cef.dll  

Which callback a message name belongs to, for every named message a page and the game exchange.

```csharp
public sealed class PageMessageCallbackRegistry
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PageMessageCallbackRegistry](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageCallbackRegistry.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

WRITTEN ON THE GAME THREAD WHILE MODS INITIALIZE, then frozen, then read from CEF's UI thread on every
message. No lock, because **PageMessageCallback)** throws once frozen and no page exists before then.
<p>
Names are process-wide, not per browser, and typed messages share this table with raw ones.
</p>

## Constructors

### <a id="ReadyM_Cef_Messaging_PageMessageCallbackRegistry__ctor"></a> PageMessageCallbackRegistry\(\)

```csharp
public PageMessageCallbackRegistry()
```

## Properties

### <a id="ReadyM_Cef_Messaging_PageMessageCallbackRegistry_Count"></a> Count

GAME THREAD. How many names are registered.

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Cef_Messaging_PageMessageCallbackRegistry_Add_System_String_ReadyM_Cef_PageMessageCallback_"></a> Add\(string, PageMessageCallback\)

GAME THREAD, while mods initialize. Claims <code class="paramref">name</code> for <code class="paramref">callback</code>.

```csharp
public void Add(string name, PageMessageCallback callback)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`callback` [PageMessageCallback](../ReadyM.Cef/ReadyM.Cef.PageMessageCallback.md)

#### Remarks

THROWS ON A NAME ALREADY TAKEN, rather than replacing it. Replacing would leave the mod that claimed
it first receiving nothing, with nothing anywhere saying why.

### <a id="ReadyM_Cef_Messaging_PageMessageCallbackRegistry_CefUiTryGet_System_ReadOnlySpan_System_Char__ReadyM_Cef_PageMessageCallback__"></a> CefUiTryGet\(ReadOnlySpan<char\>, out PageMessageCallback\)

CEF'S UI THREAD. What handles <code class="paramref">name</code>, if anything does.

```csharp
public bool CefUiTryGet(ReadOnlySpan<char> name, out PageMessageCallback callback)
```

#### Parameters

`name` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<[char](https://learn.microsoft.com/dotnet/api/system.char)\>

`callback` [PageMessageCallback](../ReadyM.Cef/ReadyM.Cef.PageMessageCallback.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

BY SPAN, so a delivery finds its callback without turning the name into a string first. Allocating one
string per message would put every page's traffic on the garbage collector's path.


