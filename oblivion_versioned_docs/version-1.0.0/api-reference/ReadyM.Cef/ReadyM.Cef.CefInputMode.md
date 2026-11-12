---
title: 'Enum CefInputMode'
description: 'What should happen to input over a viewport while its page is on screen.'
---
# Enum CefInputMode

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

What should happen to input over a viewport while its page is on screen.

```csharp
public enum CefInputMode
```

## Fields

`DisplayOnly = 0` 

A picture. No click, hover or wheel is routed to the page; they reach whatever is under it. This is the
mode for an always-on display such as a log or a HUD.



`Bubbling = 1` 

The page takes the pointer where it has content (decided by the browser's own hit test, so a transparent
area or one with <code>pointer-events: none</code> lets the click through) and the game gets it everywhere else.



`Exclusive = 2` 

The page takes every pointer event over its whole viewport, transparent or not.



## Remarks

PER VIEWPORT: set with **CefInputMode)**, or for every viewport
at once with **CefInputMode)**. Each viewport is decided from its own mode and
its own page, so a page in front never takes a click because of what a page behind it said.
<p>
The values mirror <code>CefInputMode.h</code> and are read across the binding as an int, so the two have to be
edited together.
</p>


