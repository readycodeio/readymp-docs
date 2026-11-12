---
title: 'Interface IEntitiesBase'
description: 'Creating and finding entities, the same on the client and the server.'
---
# Interface IEntitiesBase

Namespace: [ReadyM.SDK.Entities](../ReadyM.SDK.Entities/ReadyM.SDK.Entities.md)  
Assembly: ReadyM.SDK.dll  

Creating and finding entities, the same on the client and the server.

```csharp
public interface IEntitiesBase
```

## Properties

### <a id="ReadyM_SDK_Entities_IEntitiesBase_World"></a> World

The entity that stands for the whole session; throws until it exists.

```csharp
World World { get; }
```

#### Property Value

 [World](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)

## Methods

### <a id="ReadyM_SDK_Entities_IEntitiesBase_Create__1"></a> Create<T\>\(\)

Create a new entity of a given Archetype.

```csharp
T Create<T>() where T : struct, IArchetype
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Entities_IEntitiesBase_Create__1_ReadyM_SDK_Archetypes_Scope_"></a> Create<T\>\(Scope\)

Creates an entity held by a scope, which removes it when the scope goes.

```csharp
T Create<T>(Scope scope) where T : struct, IArchetype
```

#### Parameters

`scope` Scope

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_SDK_Entities_IEntitiesBase_TryGetScope__2___0____1__"></a> TryGetScope<TShape, TScope\>\(in TShape, out TScope\)

The scope of a given shape holding this entity, if one does.

```csharp
bool TryGetScope<TShape, TScope>(in TShape shape, out TScope scope) where TShape : struct, IEntityShape, allows ref struct where TScope : struct, IArchetypeQueryable, IScope
```

#### Parameters

`shape` TShape

`scope` TScope

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>false</code> when the entity is not in a scope of this type, or at all.

#### Type Parameters

`TShape` 

`TScope` 

### <a id="ReadyM_SDK_Entities_IEntitiesBase_TryGetScope__1_ReadyM_SDK_Entities_EntityHandle____0__"></a> TryGetScope<TScope\>\(in EntityHandle, out TScope\)

The scope of a given shape holding this entity, if one does.

```csharp
bool TryGetScope<TScope>(in EntityHandle handle, out TScope scope) where TScope : struct, IArchetypeQueryable, IScope
```

#### Parameters

`handle` EntityHandle

`scope` TScope

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>false</code> when the entity is not in a scope of this type, or at all.

#### Type Parameters

`TScope` 

### <a id="ReadyM_SDK_Entities_IEntitiesBase_TryLookup__2___1___0__"></a> TryLookup<T, TKey\>\(TKey, out T\)

The entity whose indexed value is the key, as the shape carrying the index.

```csharp
bool TryLookup<T, TKey>(TKey key, out T shape) where T : struct, IArchetypeQueryable, IIndexed<TKey>
```

#### Parameters

`key` TKey

`shape` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>false</code> when nothing holds that value.

#### Type Parameters

`T` 

`TKey` 


