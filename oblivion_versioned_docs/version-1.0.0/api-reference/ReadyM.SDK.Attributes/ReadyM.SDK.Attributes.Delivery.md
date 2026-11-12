---
title: 'Enum Delivery'
description: 'How a replicated shape''s changes reach the other side.'
---
# Enum Delivery

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

How a replicated shape's changes reach the other side.

```csharp
public enum Delivery
```

## Fields

`Reliable = 0` 

Guaranteed to arrive, in the order it was sent.



`Unreliable = 1` 

Sent once and never resent. Useful for a value written often enough that losing one is corrected by
the next write, such as a position.




