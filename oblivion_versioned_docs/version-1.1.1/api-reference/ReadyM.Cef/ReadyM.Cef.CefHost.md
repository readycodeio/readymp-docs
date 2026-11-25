---
title: 'Class CefHost'
description: 'The one place that knows every viewport and every browser this reload cycle created.'
---
# Class CefHost

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

The one place that knows every viewport and every browser this reload cycle created.

```csharp
public sealed class CefHost : IDisposable, IPageMessageTransport
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CefHost](../ReadyM.Cef/ReadyM.Cef.CefHost.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable), 
[IPageMessageTransport](../ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.IPageMessageTransport.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

It exists so everything can be torn down at the end of a cycle without depending on mods to clean up after
themselves. There is deliberately no ownership or permission model: a handle can be passed to anyone.

## Properties

### <a id="ReadyM_Cef_CefHost_Browsers"></a> Browsers

Browsers that currently exist, in creation order.

```csharp
public IReadOnlyCollection<BrowserHandle> Browsers { get; }
```

#### Property Value

 [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1)<[BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)\>

### <a id="ReadyM_Cef_CefHost_Viewports"></a> Viewports

Viewports that currently exist, in creation order.

```csharp
public IReadOnlyCollection<ViewportHandle> Viewports { get; }
```

#### Property Value

 [IReadOnlyCollection](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1)<[ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)\>

## Methods

### <a id="ReadyM_Cef_CefHost_Assign_ReadyM_Cef_ViewportHandle_System_Nullable_ReadyM_Cef_BrowserHandle__"></a> Assign\(ViewportHandle, BrowserHandle?\)

Shows <code class="paramref">browser</code> in <code class="paramref">viewport</code>, or clears the viewport when
<code class="paramref">browser</code> is null.

```csharp
public void Assign(ViewportHandle viewport, BrowserHandle? browser)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`browser` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)?

#### Remarks

Assigning a browser that is already shown somewhere else MOVES it: a browser is in at most one viewport,
because a client has a single render handler slot and a browser therefore paints one surface.
The browser is not recreated and its page is not reloaded, which is the point of the split.

### <a id="ReadyM_Cef_CefHost_BrowserIn_ReadyM_Cef_ViewportHandle_"></a> BrowserIn\(ViewportHandle\)

The browser currently shown in <code class="paramref">viewport</code>, or null.

```csharp
public BrowserHandle? BrowserIn(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)?

### <a id="ReadyM_Cef_CefHost_CreateBrowser"></a> CreateBrowser\(\)

Creates a browser. It does not exist yet, and nothing here waits for it.

```csharp
public CefBrowserInstance CreateBrowser()
```

#### Returns

 [CefBrowserInstance](../ReadyM.Cef/ReadyM.Cef.CefBrowserInstance.md)

#### Remarks

The returned instance works immediately: anything asked of it before CEF has finished is queued and run
in order once the browser arrives. A session with no CEF gets an instance too, and every operation on it
does nothing, so a mod is written once rather than twice.

### <a id="ReadyM_Cef_CefHost_CreateViewport_System_Int32_"></a> CreateViewport\(int\)

Creates a viewport: a place a browser can be shown, with no browser in it yet.

```csharp
public ViewportHandle CreateViewport(int zOrder)
```

#### Parameters

`zOrder` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Fixed for the life of the viewport.

#### Returns

 [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Remarks

A browser is assigned afterwards, which is what lets the same content move between viewports without
being recreated.

### <a id="ReadyM_Cef_CefHost_DestroyBrowser_ReadyM_Cef_BrowserHandle_"></a> DestroyBrowser\(BrowserHandle\)

Destroys a browser and forgets it. Any viewport showing it is left showing nothing.

```csharp
public void DestroyBrowser(BrowserHandle browser)
```

#### Parameters

`browser` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

#### Remarks

Expensive and rare, unlike **Boolean)**. A browser takes real time to create and to
navigate, so hiding a viewport is how you put UI away; destroying the browser is how you give the
resources back when you are done with the content entirely.

### <a id="ReadyM_Cef_CefHost_DestroyViewport_ReadyM_Cef_ViewportHandle_"></a> DestroyViewport\(ViewportHandle\)

Destroys a viewport. Any browser shown in it survives, with nothing showing it.

```csharp
public void DestroyViewport(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

### <a id="ReadyM_Cef_CefHost_Dispose"></a> Dispose\(\)

Tears down everything this registry created, whether or not anyone disposed it.

```csharp
public void Dispose()
```

#### Remarks

This is the end of a reload cycle. Browsers deliberately do not survive one: the outgoing cycle destroys
what it created and the incoming one creates its own, so page state is lost and the UI blinks out and
returns. Carrying browsers across would mean carrying every handler and delegate pointer with them,
for ever, growing with each browser a mod created.

### <a id="ReadyM_Cef_CefHost_InputModeOf_ReadyM_Cef_ViewportHandle_"></a> InputModeOf\(ViewportHandle\)

The input mode a viewport is in.

```csharp
public CefInputMode InputModeOf(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [CefInputMode](../ReadyM.Cef/ReadyM.Cef.CefInputMode.md)

#### Exceptions

 [ArgumentException](https://learn.microsoft.com/dotnet/api/system.argumentexception)

<code class="paramref">viewport</code> is not a viewport of this host.

### <a id="ReadyM_Cef_CefHost_IsFocusable_ReadyM_Cef_ViewportHandle_"></a> IsFocusable\(ViewportHandle\)

Whether the engine may focus this viewport.

```csharp
public bool IsFocusable(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_CefHost_IsVisible_ReadyM_Cef_ViewportHandle_"></a> IsVisible\(ViewportHandle\)

Whether a viewport is currently shown.

```csharp
public bool IsVisible(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_CefHost_Navigate_ReadyM_Cef_BrowserHandle_System_String_"></a> Navigate\(BrowserHandle, string\)

Points a browser at <code class="paramref">url</code>, now or as soon as it exists.

```csharp
public void Navigate(BrowserHandle browser, string url)
```

#### Parameters

`browser` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`url` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_CefHost_PlacementOf_ReadyM_Cef_ViewportHandle_"></a> PlacementOf\(ViewportHandle\)

Where this viewport sits and how big it is, as last set.

```csharp
public ViewportPlacement PlacementOf(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

### <a id="ReadyM_Cef_CefHost_RegisterFile_System_String_System_String_System_String_"></a> RegisterFile\(string, string, string\)

Serves one file at <code>readym://<code class="paramref">host</code>/<code class="paramref">path</code></code>.

```csharp
public void RegisterFile(string host, string path, string file)
```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

`file` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_CefHost_RegisterFolder_System_String_System_String_"></a> RegisterFolder\(string, string\)

Serves everything under <code class="paramref">directory</code> at <code>readym://<code class="paramref">host</code>/</code>.

```csharp
public void RegisterFolder(string host, string directory)
```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Remarks

The host is chosen by the caller. Two mods may pick the same one, share its storage, and replace each
other's pages: mods integrating with each other is the point, and keeping them apart is an explicit
non-target.

### <a id="ReadyM_Cef_CefHost_Reload_ReadyM_Cef_BrowserHandle_"></a> Reload\(BrowserHandle\)

Reloads whatever a browser is showing, now or as soon as it exists.

```csharp
public void Reload(BrowserHandle browser)
```

#### Parameters

`browser` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

### <a id="ReadyM_Cef_CefHost_ReloadAll"></a> ReloadAll\(\)

Reloads every browser that exists, ignoring the cache, and returns how many were asked.

```csharp
public int ReloadAll()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Remarks

For picking up an edited page without restarting the game. The cache is ignored so a subresource a page
already holds is refetched too: a plain reload can keep an old stylesheet while the document is new.

### <a id="ReadyM_Cef_CefHost_SendRaw_ReadyM_Cef_BrowserHandle_System_Int64_System_String_ReadyM_Cef_PayloadKind_System_ReadOnlySpan_System_Byte__"></a> SendRaw\(BrowserHandle, long, string, PayloadKind, ReadOnlySpan<byte\>\)

Sends one named message to a page, filling CEF's own shared region so nothing is buffered on the way.

```csharp
public void SendRaw(BrowserHandle browser, long requestId, string name, PayloadKind kind, ReadOnlySpan<byte> payload)
```

#### Parameters

`browser` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`requestId` [long](https://learn.microsoft.com/dotnet/api/system.int64)

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`kind` [PayloadKind](../ReadyM.Cef/ReadyM.Cef.PayloadKind.md)

`payload` [ReadOnlySpan](https://learn.microsoft.com/dotnet/api/system.readonlyspan-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\>

#### Remarks

THE ONLY WAY OUT, whatever the payload means. There is no overload per payload shape here, because
each one would be a small decision about meaning taken in the class that should hold none.

### <a id="ReadyM_Cef_CefHost_SetCursorVisible_System_Boolean_"></a> SetCursorVisible\(bool\)

Whether the game draws a mouse cursor. See **Boolean)**: same caveat.

```csharp
public void SetCursorVisible(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_CefHost_SetFocusable_ReadyM_Cef_ViewportHandle_System_Boolean_"></a> SetFocusable\(ViewportHandle, bool\)

Whether the engine may give <code class="paramref">viewport</code> the keyboard at all. True unless set otherwise.

```csharp
public void SetFocusable(ViewportHandle viewport, bool focusable)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`focusable` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

Turning it off while focused gives the keyboard up.
<p>
IT IS THE ENGINE'S MEANING OF THE WORD. A widget that refuses focus still takes clicks, and a click on
it hands focus to whatever underneath accepts it, which in a game is the viewport, so clicking an
unfocusable page takes the keyboard from a page that had it.
</p><p>
THE KEYBOARD ONLY. To let clicks pass through a page, set its viewport to
**DisplayOnly**, or **Bubbling** to pass them through
wherever the page draws nothing, with **CefInputMode)**.
</p>

### <a id="ReadyM_Cef_CefHost_SetFocused_ReadyM_Cef_ViewportHandle_System_Boolean_"></a> SetFocused\(ViewportHandle, bool\)

Gives the browser in <code class="paramref">viewport</code> keyboard focus, or takes it away.

```csharp
public void SetFocused(ViewportHandle viewport, bool focused)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`focused` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

AN ASK, NOT A RECORD. The engine decides, and moves focus for its own reasons, a click being the usual
one. It is exclusive wherever it lands, which is the engine's to enforce.

### <a id="ReadyM_Cef_CefHost_SetInputMode_ReadyM_Cef_CefInputMode_"></a> SetInputMode\(CefInputMode\)

Sets the input mode of EVERY viewport, and the mode viewports created later start in.

```csharp
public void SetInputMode(CefInputMode mode)
```

#### Parameters

`mode` [CefInputMode](../ReadyM.Cef/ReadyM.Cef.CefInputMode.md)

#### Remarks

Shorthand for calling **CefInputMode)** on each. A mod with more
than one page usually wants them to differ: an always-on display in
**DisplayOnly** so clicks pass through it, and a menu in
**Bubbling** or **Exclusive**.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">mode</code> is not a named mode.

### <a id="ReadyM_Cef_CefHost_SetInputMode_ReadyM_Cef_ViewportHandle_ReadyM_Cef_CefInputMode_"></a> SetInputMode\(ViewportHandle, CefInputMode\)

Says what should happen to input over one viewport while it is on screen.

```csharp
public void SetInputMode(ViewportHandle viewport, CefInputMode mode)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`mode` [CefInputMode](../ReadyM.Cef/ReadyM.Cef.CefInputMode.md)

#### Remarks

Each viewport is decided on its own, from its own mode and its own page, so a page in front never takes
a click because of what a page behind it said. **DisplayOnly** is how a page stays
visible without taking any clicks at all. A viewport starts in the mode last given to
**CefInputMode)**, which is **Bubbling** until a mod says
otherwise.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">mode</code> is not a named mode.

### <a id="ReadyM_Cef_CefHost_SetPageFocused_ReadyM_Cef_BrowserHandle_System_Boolean_"></a> SetPageFocused\(BrowserHandle, bool\)

Tells a browser whether it holds the keyboard.

```csharp
public void SetPageFocused(BrowserHandle browser, bool focused)
```

#### Parameters

`browser` [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

`focused` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

THE BROWSER'S OWN BELIEF, separate from where the engine's focus is. A document that has just loaded
starts unfocused however the engine's focus has not moved, and an unfocused browser dispatches no key
events into its page at all: the page can focus an element and still receive nothing.

### <a id="ReadyM_Cef_CefHost_SetPlacement_ReadyM_Cef_ViewportHandle_ReadyM_Cef_ViewportPlacement_"></a> SetPlacement\(ViewportHandle, ViewportPlacement\)

Where this viewport sits and how big it is. Settable at any time, including while a page is up.

```csharp
public void SetPlacement(ViewportHandle viewport, ViewportPlacement placement)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`placement` [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

#### Remarks

The size becomes the browser's layout viewport, so <code>window.innerWidth</code> follows it. Never a scale
factor, and the page is never stretched.
<p>
NOTHING IS DRAWN for the frames between asking and receiving, so do not animate by resizing.
</p>

### <a id="ReadyM_Cef_CefHost_SetUiInputMode_System_Boolean_"></a> SetUiInputMode\(bool\)

Whether the GAME or its UI owns input, and whether the pointer is drawn.

```csharp
public void SetUiInputMode(bool uiOnly)
```

#### Parameters

`uiOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Remarks

NOT A CEF CONCERN, and here only so a page can be reached at all while this is being built. One answer
for the whole game, with nothing per viewport or per browser about it, and it belongs to whatever owns
the game's input rather than to this. Said plainly rather than left to look like a design.

### <a id="ReadyM_Cef_CefHost_SetVisible_ReadyM_Cef_ViewportHandle_System_Boolean_"></a> SetVisible\(ViewportHandle, bool\)

Shows or hides a viewport. Cheap and repeatable, unlike creating a browser.

```csharp
public void SetVisible(ViewportHandle viewport, bool visible)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_CefHost_Unregister_System_String_"></a> Unregister\(string\)

Stops serving a host. Pages already loaded from it stay loaded.

```csharp
public void Unregister(string host)
```

#### Parameters

`host` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_CefHost_ZOrderOf_ReadyM_Cef_ViewportHandle_"></a> ZOrderOf\(ViewportHandle\)

The layer this viewport was created on.

```csharp
public int ZOrderOf(ViewportHandle viewport)
```

#### Parameters

`viewport` [ViewportHandle](../ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


