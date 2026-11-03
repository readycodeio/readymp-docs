---
title: 'ReadyM.SDK.Server.Entities'
description: 'The types in the ReadyM.SDK.Server.Entities namespace.'
---
# ReadyM.SDK.Server.Entities

### Structs

 [EntityQuery<T1, T2\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-2.md)

Every entity carrying all 2 shapes, without an archetype that names them.

 [EntityQuery<T1, T2, T3, T4, T5, T6\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-6.md)

Every entity carrying all 6 shapes, without an archetype that names them.

 [EntityQuery<T1, T2, T3, T4, T5\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-5.md)

Every entity carrying all 5 shapes, without an archetype that names them.

 [EntityQuery<T1, T2, T3, T4\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-4.md)

Every entity carrying all 4 shapes, without an archetype that names them.

 [EntityQuery<T\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-1.md)

Every entity of a shape. How it is walked is decided for you: a shape whose components are all
known at compile time is walked by chunk, and anything else by identity. The choice is made by
overload resolution, so this type has no GetEnumerator of its own and a foreach binds one of the
extensions instead.

 [EntityQuery<T1, T2, T3\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-3.md)

Every entity carrying all 3 shapes, without an archetype that names them.

 [ScopedQuery<T\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-1.md)

Every entity a scope holds that carries the shape. Walked by identity: a scope's entities are
scattered through the archetypes they belong to, so there are no chunks to hand back.

 [ScopedQuery<T1, T2\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-2.md)

Every entity a scope holds that carries all 2 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

 [ScopedQuery<T1, T2, T3\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-3.md)

Every entity a scope holds that carries all 3 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

 [ScopedQuery<T1, T2, T3, T4\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-4.md)

Every entity a scope holds that carries all 4 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

 [ScopedQuery<T1, T2, T3, T4, T5\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-5.md)

Every entity a scope holds that carries all 5 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

 [ScopedQuery<T1, T2, T3, T4, T5, T6\>](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-6.md)

Every entity a scope holds that carries all 6 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

### Interfaces

 [IEntities](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.IEntities.md)

Every entity on the server: create, query, look up and delete them.


