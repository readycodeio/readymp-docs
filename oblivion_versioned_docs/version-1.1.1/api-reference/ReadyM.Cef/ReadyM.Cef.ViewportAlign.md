---
title: 'Enum ViewportAlign'
description: 'Start, Center or End on one axis. NOT Left and Top: those mean different things per axis.'
---
# Enum ViewportAlign

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

Start, Center or End on one axis. NOT Left and Top: those mean different things per axis.

```csharp
public enum ViewportAlign : byte
```

## Fields

`Start = 0` 

`Center = 1` 

`End = 2` 

## Remarks

THREE VALUES, AND THERE IS NO FOURTH. A Fill would scale the page to its frame, which is the single thing
the whole sizing design exists to prevent, so nothing anywhere can ask for it.


