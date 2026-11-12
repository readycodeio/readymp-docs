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

 [CreateHandlerAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.CreateHandlerAttribute.md)

Runs this method on an entity right after it is created.

 [DeleteHandlerAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.DeleteHandlerAttribute.md)

Runs this method on an entity just before it is deleted.

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

 [TagAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.TagAttribute.md)

Puts a tag on every entity created as this archetype.

 [UpdateOrderAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.UpdateOrderAttribute.md)

Specifies when a service's update runs relative to the others.

### Enums

 [Delivery](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Delivery.md)

How a replicated shape's changes reach the other side.

 [Replication](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Replication.md)

Whether a shape's values are sent to the other players, and if so, which way they travel between the game and the
ECS and who may write them.


