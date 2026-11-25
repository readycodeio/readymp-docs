---
title: 'Enum PayloadKind'
description: 'What a payload is, which is the only thing the channel knows about it.'
---
# Enum PayloadKind

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

What a payload is, which is the only thing the channel knows about it.

```csharp
public enum PayloadKind
```

## Fields

`Text = 0` 

`Bytes = 1` 

`Json = 2` 

A JSON array of a typed message's arguments.

ITS OWN KIND rather than text a reader guesses at. It is what decides whether a page's handler is
called with the arguments spread out or with the payload whole, and guessing from whether a payload
happens to start with a bracket would make that a coincidence.

## Remarks

Text is bytes with a kind rather than a separate path. A C# string is UTF-16 and a JS string is worse, so
whichever edge holds a string encodes UTF-8 once and nothing else converts.


