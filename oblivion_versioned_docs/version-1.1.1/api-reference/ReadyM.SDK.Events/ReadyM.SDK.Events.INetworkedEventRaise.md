---
title: 'Interface INetworkedEventRaise'
description: 'Allows providing prediction and rollback for a raised event.'
---
# Interface INetworkedEventRaise

Namespace: [ReadyM.SDK.Events](../ReadyM.SDK.Events/ReadyM.SDK.Events.md)  
Assembly: ReadyM.SDK.dll  

Allows providing prediction and rollback for a raised event.

```csharp
public interface INetworkedEventRaise
```

## Methods

### <a id="ReadyM_SDK_Events_INetworkedEventRaise_Predicting_System_Action_"></a> Predicting\(Action\)

Runs <code class="paramref">prediction</code> now, as though the event had been accepted.
Any changes to archetype values will be rolled back automatically if the event is refused or times out.
Any other action needs **Action)**, because only the caller knows how to undo it.

```csharp
INetworkedEventRaise Predicting(Action prediction)
```

#### Parameters

`prediction` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [INetworkedEventRaise](../ReadyM.SDK.Events/ReadyM.SDK.Events.INetworkedEventRaise.md)

### <a id="ReadyM_SDK_Events_INetworkedEventRaise_Rollback_System_Action_"></a> Rollback\(Action\)

Undoes the prediction, on the refusal or the deadline. Runs once.

```csharp
INetworkedEventRaise Rollback(Action rollback)
```

#### Parameters

`rollback` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [INetworkedEventRaise](../ReadyM.SDK.Events/ReadyM.SDK.Events.INetworkedEventRaise.md)


