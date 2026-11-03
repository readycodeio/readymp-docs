---
sidebar_position: 11
---

# Web UI

A client mod can draw its own UI as a web page: HTML, CSS and JavaScript shown over the game in a built-in browser.
The page and your C# code talk to each other with messages. The [chat mod](../Optional-mods/chat.md)'s overlay is
built this way. Everything on
this page is client only and comes from `ReadyM.Cef`.

The page goes in a `web` folder of your client project:

```html title="MyMod.Client/web/index.html"
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    body { margin: 0; padding: 12px; color: white; font: 16px sans-serif; background: rgba(0, 0, 0, 0.6); }
  </style>
</head>
<body>
  <p id="greeting">Waiting for the game...</p>
  <script>
    // The game's SendHelloGreeting arrives here.
    readym.onHelloGreeting((text) => {
      document.getElementById('greeting').textContent = text;
    });

    // Runs the game's OnHelloReady, so it knows the page has loaded.
    readym.sendHelloReady();
  </script>
</body>
</html>
```

The C# side serves the folder, puts a browser on screen, and declares the two messages:

```csharp title="MyMod.Client/HelloPage.cs"
using OblivionMp.Sdk;
using ReadyM.Cef;
using ReadyM.Cef.Rpc;
using ReadyM.SDK.Attributes;
using ReadyM.Sdk.Common.Input;

namespace MyMod.Client;

// Alt+H shows or hides a small panel in the top right corner.
[Service]
public sealed partial class HelloPage(CefHost cef, IInput input)
{
    private const string Host = "mymod";

    private ViewportHandle _viewport;
    private bool _created;

    private void Start()
    {
        // Serve the web folder next to this mod's DLL at readym://mymod/.
        var folder = Path.GetDirectoryName(typeof(HelloPage).Assembly.Location)!;
        cef.RegisterFolder(Host, Path.Combine(folder, "web"));

        input.RegisterKeyBind(ModifierKeys.Alt, Key.H, Toggle);
    }

    private void Toggle()
    {
        if (!_created)
            Create();

        cef.SetVisible(_viewport, !cef.IsVisible(_viewport));
    }

    private void Create()
    {
        _created = true;

        // Where the page goes, placed before it is ever shown.
        _viewport = cef.CreateViewport(zOrder: 0);
        cef.SetPlacement(_viewport,
            ViewportPlacement.Pinned(ViewportAlign.End, ViewportAlign.Start, 360, 120, margin: 20));

        // What loads the page.
        var browser = cef.CreateBrowser();
        browser.Navigate($"readym://{Host}/");
        cef.Assign(_viewport, browser.Handle);
    }

    // The page called readym.sendHelloReady().
    [ReceiveFromCef]
    private void OnHelloReady(BrowserHandle page)
        => SendHelloGreeting(page, $"Hello from the game. It is {DateTime.Now:HH:mm}.");

    // The page hears this with readym.onHelloGreeting(...). The generator writes the body.
    [SendToCef]
    public partial void SendHelloGreeting(BrowserHandle page, string text);
}
```

And your mod entry registers the class for its messages:

```csharp title="MyMod.Client/Mod.cs"
using ReadyM.Api.DI;
using ReadyM.Cef.Rpc;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[ModEntry]
public sealed partial class Mod(IDependencyContainer services)
{
    private void Init()
    {
        services.RegisterSingleton<ICefRpcHandler>(services.Resolve<HelloPage>());
    }
}
```

:::important
This registration is required in 1.0. A class with `[SendToCef]` or `[ReceiveFromCef]` methods only exchanges
messages once it is registered as an
[`ICefRpcHandler`](../../../api-reference/ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.ICefRpcHandler.md) in your `Init`. Without
it, nothing fails at build time: the page and the game never hear each other. The chat mod does the same in its own
`Init`.
:::

Last, ship the `web` folder with the mod. Copy it to the build output in `MyMod.Client.csproj`:

```xml
<ItemGroup>
    <None Update="web\**\*">
        <CopyToOutputDirectory>PreserveNewest</CopyToOutputDirectory>
    </None>
</ItemGroup>
```

and add `"web"` to `$clientBuildFiles` in the template's `ModFiles.ps1`, so the packaging script puts it in the
mod's `client` folder.

## How it works

### Pages, viewports and browsers

[`CefHost`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.CefHost.md) is the one service behind all of it. Ask for it
in the constructor. It keeps three things apart:

- **Content.** `RegisterFolder(host, directory)` serves a folder at `readym://host/`, and
  `RegisterFile(host, path, file)` serves one file at `readym://host/path`. Pick a host name for your mod: two mods
  that pick the same one share it and can replace each other's pages.
- **A viewport** ([`ViewportHandle`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)) is a place on
  screen. It starts hidden and full screen. Its `zOrder` is fixed: a higher one is drawn on top.
- **A browser** ([`CefBrowserInstance`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.CefBrowserInstance.md), named
  by its [`BrowserHandle`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)) loads a page. It shows in
  the viewport you `Assign` it to, and can move to another viewport without reloading.

Create the browser once and show or hide its viewport after that. A browser is slow to create and to load,
while `SetVisible` costs nothing. You can call a browser's methods straight after `CreateBrowser`: anything asked
before it is ready runs once it is.

| `CefHost` member | What it does |
|---|---|
| `RegisterFolder`, `RegisterFile`, `Unregister` | Serve content, or stop serving a host. |
| `CreateViewport`, `DestroyViewport`, `Viewports` | Make or remove a place on screen, list the ones there are. |
| `CreateBrowser`, `DestroyBrowser`, `Browsers` | Make or remove a browser, list the ones there are. Destroying is for content you are done with for good. |
| `Assign(viewport, browser)`, `BrowserIn(viewport)` | Show a browser in a viewport (`null` empties it), or ask which one is there. |
| `Navigate`, `Reload`, `ReloadAll` | Load a URL, reload one browser, or reload every browser from disk. |
| `SetVisible`, `IsVisible` | Show or hide a viewport. |
| `SetPlacement`, `PlacementOf`, `ZOrderOf` | Where a viewport sits and how big it is. |
| `SetFocused`, `SetFocusable`, `IsFocusable` | Give a viewport's page the keyboard, take it back, or keep the page from ever taking it. |
| `SetPageFocused(browser, focused)` | Tell a browser it holds the keyboard again, after its page reloads while focused. |
| `SetInputMode(viewport, mode)`, `InputModeOf(viewport)` | What happens to the mouse over one viewport while it is on screen (see below), or ask which mode it is in. |
| `SetInputMode(mode)` | The same for every viewport, and the mode viewports created later start in. |

[`ViewportPlacement`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md) has a named case for each
common layout, with sizes in screen pixels and [`ViewportAlign`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)
`Start`, `Center` or `End` on each axis:

| Placement | Layout |
|---|---|
| `ViewportPlacement.FullScreen` | The whole screen. What a viewport starts as. |
| `ViewportPlacement.Stretch(left, top, right, bottom)` | The whole screen, inset on each side. |
| `ViewportPlacement.Centered(width, height)` | A fixed size in the middle. |
| `ViewportPlacement.Pinned(horizontal, vertical, width, height, margin)` | A fixed size in a corner, at an edge, or in the middle, `margin` away from the edges. |
| `ViewportPlacement.HorizontalBar(side, height)` | Full width, along the top (`Start`) or bottom (`End`). The chat overlay is one. |
| `ViewportPlacement.VerticalBar(side, width)` | Full height, down the left (`Start`) or right (`End`). |

The page is laid out at the viewport's size, never stretched, so `window.innerWidth` is the viewport's width.

[`CefInputMode`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.CefInputMode.md) is set per viewport:

| Mode | What it does |
|---|---|
| `DisplayOnly` | No click, hover or wheel reaches the page. They go to whatever is under it. Use it for a page that is always on screen and only looked at, such as a log. |
| `Bubbling` | The page takes the pointer where it has content, and the game gets it everywhere else. A transparent area, or an element with `pointer-events: none`, lets the click through. A viewport starts in this mode. |
| `Exclusive` | The page takes every pointer event over its whole viewport, transparent or not. Use it for a page that must take every click, such as a modal menu. |

Each viewport is decided by its own mode and its own page, so a page in front never takes a click because of what a
page behind it said. `SetFocusable` is about the keyboard only: to let clicks through a page, change its input mode.

:::note
Not in 1.0 yet: a supported way to give a page the mouse. The modes above decide where the pointer goes while the
game shows a cursor, for example in its own menus, so a page on screen does not block clicks meant for them. A page
can take the keyboard with `SetFocused`, which is how chat works: it focuses its viewport when it opens and hands
the keyboard back when it closes.
:::

Register content and message names while mods load: in your `Init` or a service's `Start`. Doing it later throws.
You never clean up: every viewport and browser a mod made is destroyed when mods unload. On a game without the
browser installed, every `CefHost` call does nothing, so your mod needs no special case for it.

While you work on a page, **Ctrl+Shift+F5** in game reloads every page from disk.

### Typed messages

The quickest way to talk to a page is a class that declares its messages:

| In C# | In the page | Direction |
|---|---|---|
| `[SendToCef] public partial void SendGreeting(BrowserHandle page, ...);` | `readym.onGreeting((...) => { })` | game to page |
| `[ReceiveFromCef] private void OnClicked(BrowserHandle page, ...) { }` | `readym.sendClicked(...)` | page to game |

- [`[SendToCef]`](../../../api-reference/ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.SendToCefAttribute.md) goes on a partial
  method named `Send<Name>` with no body. The generator writes it; you call it with the page to send to.
- [`[ReceiveFromCef]`](../../../api-reference/ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.ReceiveFromCefAttribute.md) goes on a
  method named `On<Name>` with a body. It runs when the page calls `readym.send<Name>`, at the same point in the
  frame as a service's `Update`.
- The first parameter is always the page, a `BrowserHandle`. After it come up to 6 arguments of type `bool`, the
  integer types, `float`, `double`, `string` or an enum (which reaches the page as a number). For anything bigger,
  send a JSON string, as chat does.
- Neither kind returns a value. To answer, send a message back, as `OnHelloReady` does above.
- A message sent while the page is still loading is lost. Let the page ask once it is ready, as in the example.

Message names the game receives (the `<Name>` of every `On<Name>`) are shared by every mod and every page. If two
mods both declare `OnReady`, the second fails at startup. Put your mod's name in yours, as `HelloReady` does.

### Raw messages

When you need bytes, replies to a request, or your own encoding, use the two services behind typed messages
directly. [`PageMessaging`](../../../api-reference/ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessaging.md) sends,
and [`PageMessageCallbackRegistry`](../../../api-reference/ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageCallbackRegistry.md)
claims a name to receive under:

```csharp title="MyMod.Client/ClockPage.cs"
using ReadyM.Cef;
using ReadyM.Cef.Messaging;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[Service]
public sealed partial class ClockPage(PageMessaging messages, PageMessageCallbackRegistry callbacks)
{
    private void Start()
        => callbacks.Add("MyModTime", OnTime);

    // A page asked with readym.request('MyModTime', ''). Answer it.
    private void OnTime(PageMessageDelivery message)
    {
        if (message.RequestId == 0)
            return; // a push from the page, which wants no answer

        messages.ReplyText(message.Page, message.RequestId, "MyModTime", DateTime.Now.ToString("HH:mm:ss"));
    }

    // Unasked: the page hears it with readym.on('MyModTick', (text) => ...).
    public void Tick(BrowserHandle page)
        => messages.PostText(page, "MyModTick", DateTime.Now.ToString("HH:mm:ss"));
}
```

| In C# | In the page |
|---|---|
| `messages.PostText(page, name, text)` | `readym.on(name, (text) => ...)` |
| `messages.Post(page, name, bytes)` | `readym.on(name, (buffer) => ...)`, an `ArrayBuffer` |
| `callbacks.Add(name, OnMessage)`, `RequestId` 0 | `readym.postMessage(name, textOrArrayBuffer)` |
| `callbacks.Add(name, OnMessage)`, then `messages.ReplyText(...)` or `messages.Reply(...)` | `const answer = await readym.request(name, textOrArrayBuffer)` |

The callback is a [`PageMessageCallback`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.PageMessageCallback.md) and
receives a [`PageMessageDelivery`](../../../api-reference/ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md):
`Page` (which page sent it, since one callback hears every page), `Name`, `RequestId` (0 when no answer is
expected, otherwise pass it to `Reply` or `ReplyText`, and answer exactly once), `Kind` (a
[`PayloadKind`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.PayloadKind.md): `Text`, `Bytes` or `Json`), `Payload`
(the bytes) and `AsText()`. `Add` throws when the name is already taken, the same as for typed messages, since they
share one list of names.

## Related diagnostics

These come from the page message generator. They are all errors.

| Id | What it means | How to fix it |
|---|---|---|
| `CEFRPC001` | A `[ReceiveFromCef]` method is not named `On<Name>`. | Rename it. The page calls `readym.send<Name>`. |
| `CEFRPC002` | A `[SendToCef]` method is not named `Send<Name>`. | Rename it. The page listens with `readym.on<Name>`. |
| `CEFRPC003` | A `[SendToCef]` method has a body or is not partial. | Declare it `partial` with no body. |
| `CEFRPC004` | A `[ReceiveFromCef]` method has no body. | Give it one: it is what runs when the page sends. |
| `CEFRPC005` | The first parameter is not a `BrowserHandle`. | Take the page first. |
| `CEFRPC006` | A parameter has a type that cannot be sent. | Use `bool`, an integer type, `float`, `double`, `string` or an enum, or send JSON as a `string`. |
| `CEFRPC007` | Two methods end up with the same message name. | Rename one. |
| `CEFRPC008` | The class declaring page messages is not partial. | Declare it `partial`. |
| `CEFRPC009` | A page message returns something. | Return `void`, and answer with a message the other way. |
| `CEFRPC010` | More than 6 arguments after the page. | Send fewer, or put them in one JSON `string`. |

## Reference

- [`CefHost`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.CefHost.md)
- [`CefBrowserInstance`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.CefBrowserInstance.md)
- [`BrowserHandle`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)
- [`ViewportHandle`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.ViewportHandle.md)
- [`ViewportPlacement`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)
- [`ViewportAlign`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)
- [`CefInputMode`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.CefInputMode.md)
- [`SendToCefAttribute`](../../../api-reference/ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.SendToCefAttribute.md)
- [`ReceiveFromCefAttribute`](../../../api-reference/ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.ReceiveFromCefAttribute.md)
- [`ICefRpcHandler`](../../../api-reference/ReadyM.Cef.Rpc/ReadyM.Cef.Rpc.ICefRpcHandler.md)
- [`PageMessaging`](../../../api-reference/ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessaging.md)
- [`PageMessageCallbackRegistry`](../../../api-reference/ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageCallbackRegistry.md)
- [`PageMessageCallback`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.PageMessageCallback.md)
- [`PageMessageDelivery`](../../../api-reference/ReadyM.Cef.Messaging/ReadyM.Cef.Messaging.PageMessageDelivery.md)
- [`PayloadKind`](../../../api-reference/ReadyM.Cef/ReadyM.Cef.PayloadKind.md)
