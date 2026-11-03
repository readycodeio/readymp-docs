---
title: 'Struct CefBrowserInstance'
description: 'A browser, as a mod holds it: say what it should do, directly.'
---
# Struct CefBrowserInstance

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

A browser, as a mod holds it: say what it should do, directly.

```csharp
public readonly struct CefBrowserInstance
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

A handle and its host: every method curries **Handle** into the matching one on
**CefHost**, and no state lives here.
<p>
NOTHING BLOCKS AND NOTHING CALLS BACK. CEF creates a browser asynchronously, so anything asked for before
it exists is queued and run in order once it does.
</p>

## Properties

### <a id="ReadyM_Cef_CefBrowserInstance_Handle"></a> Handle

Which browser this is, for the calls that take one: assigning it to a viewport, destroying it.

```csharp
public BrowserHandle Handle { get; }
```

#### Property Value

 [BrowserHandle](../ReadyM.Cef/ReadyM.Cef.BrowserHandle.md)

## Methods

### <a id="ReadyM_Cef_CefBrowserInstance_Navigate_System_String_"></a> Navigate\(string\)

Points the browser at <code class="paramref">url</code>, now or as soon as it exists.

```csharp
public void Navigate(string url)
```

#### Parameters

`url` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_CefBrowserInstance_Reload"></a> Reload\(\)

Reloads whatever the browser is showing.

```csharp
public void Reload()
```


