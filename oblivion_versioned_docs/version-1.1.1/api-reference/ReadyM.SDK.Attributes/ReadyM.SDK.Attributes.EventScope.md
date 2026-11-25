---
title: 'Enum EventScope'
description: 'Who receives a networked event.'
---
# Enum EventScope

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

Who receives a networked event.

```csharp
public enum EventScope
```

## Fields

`Server = 0` 

The event is delivered only to the server.



`Global = 1` 

The event is delivered to every player on the server.



`Single = 2` 

The event is delivered to a single player, the member marked **TargetAttribute**.



`Area = 3` 

The event is delivered to everyone in the subject's area, or in the area named by **AreaAttribute**.



`Cell = 4` 

The event is delivered to everyone who has the subject's cell, or in the cell named by **CellAttribute**, activated.




