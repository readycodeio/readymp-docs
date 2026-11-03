---
title: 'ReadyM.SDK.Attributes'
description: 'The types in the ReadyM.SDK.Attributes namespace.'
---
# ReadyM.SDK.Attributes

### Classes

 [ArchetypeAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ArchetypeAttribute.md)

Declares a struct as an archetype.

 [ArchetypeMixinAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ArchetypeMixinAttribute.md)

Declares a struct as an archetype mixin.

 [AreaAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.AreaAttribute.md)

Marks the member naming the area a networked event is in, an <code>AreaId</code> or an <code>Area</code>. A
**Area** event goes to it rather than to the subject's area, and a
**AreaMaster** event is checked against its master.

 [CellAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.CellAttribute.md)

Marks the member naming the cell an event is in, a <code>FullCellId</code> or a <code>Cell</code>. A
**Cell** event goes to it rather than to the subject's cell, and a
**CellMaster** event is checked against its master.

 [CreateHandlerAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.CreateHandlerAttribute.md)

Runs this method on an entity right after it is created.

 [DeleteHandlerAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.DeleteHandlerAttribute.md)

Runs this method on an entity just before it is deleted.

 [EventHandlerAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.EventHandlerAttribute.md)

Declares a method as a network event handler.
The project it is compiled into says which side runs it - game or server.

 [ExtendsAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ExtendsAttribute.md)

Adds this mixin to every entity created as the named archetype.

 [IncludeArchetypeAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.IncludeArchetypeAttribute.md)

Builds this archetype on another one, taking all of its fields. Including an archetype is inheritance, so there is
one at most; combine data with **IncludeAttribute** and mixins instead.

 [IncludeAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.IncludeAttribute.md)

Include a mixin into this archetype. Only a mixin: to build on another archetype, use
**IncludeArchetypeAttribute**.

 [IndexAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.IndexAttribute.md)

Indexes the shape by this property, so an entity can be found by its value. One property per
shape may carry it, and writing it keeps the index current.

 [ModConfigAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ModConfigAttribute.md)

Declares a class the SDK fills from a JSON file in the mod's own folder and registers as injectable.

 [ModEntryAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ModEntryAttribute.md)

Indicates the entry point of a mod.
The annotated class may declare a <code>private void Init()</code> method, which will be called when the mod is loaded.

 [NetworkedEventAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.NetworkedEventAttribute.md)

Declares a struct as a network event: a message sent to the server or other players,
which any mod may validate, change, cancel, or observe.

 [PredictableAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.PredictableAttribute.md)

Lets a client predict this value locally while it waits for the server confirmation of a networked event.
The getter reads the guess until it is confirmed by the server or rolled back.

 [RpcContractsAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.RpcContractsAttribute.md)

Marks the class as containing RPC contracts.
Each must be a <code>public static partial void</code> method with serializable parameters.
Each must be annotated with one of the direction attributes:<br />
* **ClientToServerAttribute**<br />
* **ServerToClientAttribute**
* **ClientToClientsAttribute**

 [RpcHandlersForAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.RpcHandlersForAttribute.md)

Binds a class to the [RpcContracts] set it implements.

 [ServiceAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ServiceAttribute.md)

Declares a service class.

 [SubjectAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.SubjectAttribute.md)

Marks the member holding the entity a network event is about. **SubjectOwner** checks it, and
**Area** and **Cell** take their audience from it when the event names
no area or cell of its own.

 [TagAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.TagAttribute.md)

Puts a tag on every entity created as this archetype.

 [TargetAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.TargetAttribute.md)

Marks the member naming the one player a **Single** event goes to.

 [UpdateOrderAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.UpdateOrderAttribute.md)

Specifies when a service's update runs relative to the others.

### Enums

 [Delivery](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Delivery.md)

How a replicated shape's changes reach the other side.

 [EventScope](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.EventScope.md)

Who receives a networked event.

 [Policy](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Policy.md)

Declares who can raise a network event. The server may always raise, so this applies only to clients.

 [Replication](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Replication.md)

Whether a shape's values are sent to the other players, and if so, which way they travel between the game and the
ECS and who may write them.

 [Stage](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Stage.md)

When a networked event handler runs. Stages run in this order and stopping one skips every later stage;
Only one of **Observe** and **Rejected** runs, based on whether the event was cancelled or not.


