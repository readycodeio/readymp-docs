---
title: 'Enum Stage'
description: 'When a networked event handler runs. Stages run in this order and stopping one skips every later stage; Only one of Observe and Rejected runs, based on whether the event was cancelled or not.'
---
# Enum Stage

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

When a networked event handler runs. Stages run in this order and stopping one skips every later stage;
Only one of **Observe** and **Rejected** runs, based on whether the event was cancelled or not.

```csharp
public enum Stage
```

## Fields

`Validate = 0` 

Runs before any other stage. May cancel the event, but cannot rewrite its fields.



`Filter = 1` 

Runs after **Validate**. May rewrite event members, may cancel the event.



`Apply = 2` 

Runs if the event was not cancelled. Write main event handling logic here. Multiple handlers are allowed, but no guarantee of order is provided.



`Observe = 3` 

If the event was not cancelled, runs after **Apply**.



`Rejected = 4` 

Runs if the event was cancelled.




