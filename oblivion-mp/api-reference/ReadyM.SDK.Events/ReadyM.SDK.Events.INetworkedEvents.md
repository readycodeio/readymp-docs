---
title: 'Interface INetworkedEvents'
description: 'Allows raising networked events.'
---
# Interface INetworkedEvents

Namespace: [ReadyM.SDK.Events](../ReadyM.SDK.Events/ReadyM.SDK.Events.md)  
Assembly: ReadyM.SDK.dll  

Allows raising networked events.

```csharp
public interface INetworkedEvents
```

## Methods

### <a id="ReadyM_SDK_Events_INetworkedEvents_Raise__1___0_"></a> Raise<T\>\(T\)

Raises the event. The origin is this client, or the server.

```csharp
INetworkedEventRaise Raise<T>(T networkEvent) where T : struct, INetworkedEvent
```

#### Parameters

`networkEvent` T

#### Returns

 [INetworkedEventRaise](../ReadyM.SDK.Events/ReadyM.SDK.Events.INetworkedEventRaise.md)

A handle a client may use to provide prediction and rollback logic while it waits for the answer.

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Events_INetworkedEvents_RaiseAs__1_ReadyM_Api_Idents_PlayerId___0_"></a> RaiseAs<T\>\(PlayerId, T\)

Server only: raises it as though <code class="paramref">origin</code> did, so handlers cannot tell it from that
player's own event. The policy check is skipped, because the server vouched for it.

```csharp
void RaiseAs<T>(PlayerId origin, T networkEvent) where T : struct, INetworkedEvent
```

#### Parameters

`origin` PlayerId

`networkEvent` T

#### Type Parameters

`T` 

#### Remarks

Useful for implementing server-side bots or AI that act on behalf of a player,
or for a server-side mod that wants to raise an event as though it came from a player.


