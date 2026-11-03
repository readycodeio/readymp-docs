---
title: 'Interface IEntities'
description: 'The entities this client can see: query, look up, create and delete them.'
---
# Interface IEntities

Namespace: [ReadyM.SDK.Client.Entities](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.md)  
Assembly: ReadyM.SDK.Client.dll  

The entities this client can see: query, look up, create and delete them.

```csharp
public interface IEntities : IEntitiesBase
```

#### Implements

IEntitiesBase

## Methods

### <a id="ReadyM_SDK_Client_Entities_IEntities_Delete__1___0__"></a> Delete<T\>\(in T\)

Removes the entity a shape names: an archetype, a mixin, or, where the runtime has them, the
chunk view of either. False when it was already gone.

```csharp
bool Delete<T>(in T shape) where T : IEntityShape, allows ref struct
```

#### Parameters

`shape` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

#### Remarks

Inside a query the removal is held until the loop ends. The anti-constraint is the only part
that differs by target, and a netstandard2.0 build has no chunk views to pass anyway.

### <a id="ReadyM_SDK_Client_Entities_IEntities_Query__1"></a> Query<T\>\(\)

Every entity of a shape. Walked by chunk when the shape and the runtime allow it, by identity
otherwise, which is decided when the loop is compiled rather than when it runs.

```csharp
EntityQuery<T> Query<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-1.md)<T\>

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Client_Entities_IEntities_Query__2"></a> Query<T1, T2\>\(\)

Every entity carrying all 2 shapes, walked the same way a single one is.

```csharp
EntityQuery<T1, T2> Query<T1, T2>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-2.md)<T1, T2\>

#### Type Parameters

`T1` 

`T2` 

### <a id="ReadyM_SDK_Client_Entities_IEntities_Query__3"></a> Query<T1, T2, T3\>\(\)

Every entity carrying all 3 shapes, walked the same way a single one is.

```csharp
EntityQuery<T1, T2, T3> Query<T1, T2, T3>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-3.md)<T1, T2, T3\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

### <a id="ReadyM_SDK_Client_Entities_IEntities_Query__4"></a> Query<T1, T2, T3, T4\>\(\)

Every entity carrying all 4 shapes, walked the same way a single one is.

```csharp
EntityQuery<T1, T2, T3, T4> Query<T1, T2, T3, T4>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-4.md)<T1, T2, T3, T4\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

### <a id="ReadyM_SDK_Client_Entities_IEntities_Query__5"></a> Query<T1, T2, T3, T4, T5\>\(\)

Every entity carrying all 5 shapes, walked the same way a single one is.

```csharp
EntityQuery<T1, T2, T3, T4, T5> Query<T1, T2, T3, T4, T5>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin where T5 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-5.md)<T1, T2, T3, T4, T5\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

### <a id="ReadyM_SDK_Client_Entities_IEntities_Query__6"></a> Query<T1, T2, T3, T4, T5, T6\>\(\)

Every entity carrying all 6 shapes, walked the same way a single one is.

```csharp
EntityQuery<T1, T2, T3, T4, T5, T6> Query<T1, T2, T3, T4, T5, T6>() where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin where T5 : struct, IArchetypeMixin where T6 : struct, IArchetypeMixin
```

#### Returns

 [EntityQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-6.md)<T1, T2, T3, T4, T5, T6\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`T6` 


