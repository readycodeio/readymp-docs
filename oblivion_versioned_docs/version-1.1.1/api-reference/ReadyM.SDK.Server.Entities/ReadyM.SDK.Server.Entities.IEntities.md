---
title: 'Interface IEntities'
description: 'Every entity on the server: create, query, look up and delete them.'
---
# Interface IEntities

Namespace: [ReadyM.SDK.Server.Entities](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.md)  
Assembly: ReadyM.SDK.Server.dll  

Every entity on the server: create, query, look up and delete them.

```csharp
public interface IEntities : IEntitiesBase
```

#### Implements

IEntitiesBase

## Methods

### <a id="ReadyM_SDK_Server_Entities_IEntities_Create__1_ReadyM_SDK_Archetypes_Scope_ReadyM_Api_Idents_PlayerId_"></a> Create<T\>\(Scope, PlayerId\)

Create a new entity of the given archetype, in a given scope, owned by the given player.

```csharp
T Create<T>(Scope scope, PlayerId owner) where T : struct, IArchetype
```

#### Parameters

`scope` Scope

`owner` PlayerId

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Server_Entities_IEntities_Delete__1___0__"></a> Delete<T\>\(in T\)

Remove an entity from the world.

```csharp
bool Delete<T>(in T shape) where T : IEntityShape, allows ref struct
```

#### Parameters

`shape` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>false</code> if the entity was already deleted.

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Server_Entities_IEntities_Query__1"></a> Query<T\>\(\)

Iterate over every entity of a given archetype or containting a given mixin.

```csharp
EntityQuery<T> Query<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-1.md)<T\>

#### Type Parameters

`T` 

Archetype or Mixin

### <a id="ReadyM_SDK_Server_Entities_IEntities_Query__2"></a> Query<T1, T2\>\(\)

Iterate over every entity carrying both mixins.

```csharp
EntityQuery<T1, T2> Query<T1, T2>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-2.md)<T1, T2\>

#### Type Parameters

`T1` 

`T2` 

### <a id="ReadyM_SDK_Server_Entities_IEntities_Query__3"></a> Query<T1, T2, T3\>\(\)

Iterate over every entity carrying all 3 mixins.

```csharp
EntityQuery<T1, T2, T3> Query<T1, T2, T3>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-3.md)<T1, T2, T3\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

### <a id="ReadyM_SDK_Server_Entities_IEntities_Query__4"></a> Query<T1, T2, T3, T4\>\(\)

Iterate over every entity carrying all 4 mixins.

```csharp
EntityQuery<T1, T2, T3, T4> Query<T1, T2, T3, T4>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-4.md)<T1, T2, T3, T4\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

### <a id="ReadyM_SDK_Server_Entities_IEntities_Query__5"></a> Query<T1, T2, T3, T4, T5\>\(\)

Iterate over every entity carrying all 5 mixins.

```csharp
EntityQuery<T1, T2, T3, T4, T5> Query<T1, T2, T3, T4, T5>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin where T5 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-5.md)<T1, T2, T3, T4, T5\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

### <a id="ReadyM_SDK_Server_Entities_IEntities_Query__6"></a> Query<T1, T2, T3, T4, T5, T6\>\(\)

Iterate over every entity carrying all 6 mixins.

```csharp
EntityQuery<T1, T2, T3, T4, T5, T6> Query<T1, T2, T3, T4, T5, T6>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin where T5 : struct, IArchetypeMixin where T6 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-6.md)<T1, T2, T3, T4, T5, T6\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`T6` 


