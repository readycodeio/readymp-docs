---
title: 'Interface IShapeMappingScope<TShape, TContext>'
description: 'The mappings between one shape and one kind of game object.'
---
# Interface IShapeMappingScope<TShape, TContext>

Namespace: [ReadyM.SDK.Client.Mapping](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.md)  
Assembly: ReadyM.SDK.Client.dll  

The mappings between one shape and one kind of game object.

```csharp
public interface IShapeMappingScope<TShape, out TContext> where TShape : struct, IArchetypeQueryable
```

#### Type Parameters

`TShape` 

`TContext` 

## Methods

### <a id="ReadyM_SDK_Client_Mapping_IShapeMappingScope_2_Map__1_ReadyM_SDK_Archetypes_Access_Value__0___0__ReadyM_SDK_Client_Mapping_Pull___0__1__System_Action___0__1__"></a> Map<TValue\>\(Value<TShape, TValue\>, Pull<TValue, TContext\>, Action<TValue, TContext\>?\)

Declare a mapping between a single shape field and a single context object. Leaving out the
push says the game owns the value and will not be told: a shape declaring
<code>Replication.ToEcsOnly</code> has nothing to push.

```csharp
IShapeMappingScope<TShape, out TContext> Map<TValue>(Value<TShape, TValue> value, Pull<TValue, out TContext> pull, Action<TValue, out TContext>? push = null)
```

#### Parameters

`value` Value<TShape, TValue\>

`pull` [Pull](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Pull-2.md)<TValue, TContext\>

`push` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<TValue, TContext\>?

#### Returns

 [IShapeMappingScope](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingScope-2.md)<TShape, TContext\>

#### Type Parameters

`TValue` 

### <a id="ReadyM_SDK_Client_Mapping_IShapeMappingScope_2_Map__1_ReadyM_SDK_Archetypes_Access_Collection__0___0__ReadyM_SDK_Client_Mapping_Collected___0__1__ReadyM_SDK_Client_Mapping_Collected___0__1__"></a> Map<TAccess\>\(Collection<TShape, TAccess\>, Collected<TAccess, TContext\>, Collected<TAccess, TContext\>?\)

Declare a mapping for one collection. The handler is handed the collection as its component
exposes it rather than the collection itself, so what it changes is what the entity holds.

```csharp
IShapeMappingScope<TShape, out TContext> Map<TAccess>(Collection<TShape, TAccess> collection, Collected<TAccess, out TContext> pull, Collected<TAccess, out TContext>? push = null) where TAccess : allows ref struct
```

#### Parameters

`collection` Collection<TShape, TAccess\>

`pull` [Collected](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Collected-2.md)<TAccess, TContext\>

`push` [Collected](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Collected-2.md)<TAccess, TContext\>?

#### Returns

 [IShapeMappingScope](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingScope-2.md)<TShape, TContext\>

#### Type Parameters

`TAccess` 

### <a id="ReadyM_SDK_Client_Mapping_IShapeMappingScope_2_Map_ReadyM_SDK_Archetypes_Access_Shape__0__System_Action__0__1__System_Action__0__1__"></a> Map\(Shape<TShape\>, Action<TShape, TContext\>, Action<TShape, TContext\>?\)

Declare a mapping between the entire shape and a single context object.
Used for mappings that set multiple fields at once.

```csharp
IShapeMappingScope<TShape, out TContext> Map(Shape<TShape> shape, Action<TShape, out TContext> pull, Action<TShape, out TContext>? push = null)
```

#### Parameters

`shape` Shape<TShape\>

`pull` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<TShape, TContext\>

`push` [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<TShape, TContext\>?

#### Returns

 [IShapeMappingScope](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingScope-2.md)<TShape, TContext\>


