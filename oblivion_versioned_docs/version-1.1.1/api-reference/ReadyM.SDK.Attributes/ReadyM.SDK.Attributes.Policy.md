---
title: 'Enum Policy'
description: 'Declares who can raise a network event. The server may always raise, so this applies only to clients.'
---
# Enum Policy

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

Declares who can raise a network event. The server may always raise, so this applies only to clients.

```csharp
public enum Policy
```

## Fields

`Anyone = 0` 

Any client.



`SubjectOwner = 1` 

The client that owns the subject entity.



`CellMaster = 2` 

The client simulating the cell the event names with **CellAttribute**.



`AreaMaster = 3` 

The client simulating the area the event names with **AreaAttribute**.



`ServerAuthoritative = 4` 

Only the server.




