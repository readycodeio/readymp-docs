---
title: 'Interface IShapeMappingRegistry'
description: 'Where a mod declares how its shapes map to and from game objects.'
---
# Interface IShapeMappingRegistry

Namespace: [ReadyM.SDK.Client.Mapping](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.md)  
Assembly: ReadyM.SDK.Client.dll  

Where a mod declares how its shapes map to and from game objects.

```csharp
public interface IShapeMappingRegistry
```

## Methods

### <a id="ReadyM_SDK_Client_Mapping_IShapeMappingRegistry_For__2"></a> For<TShape, TContext\>\(\)

Everything this shape maps to and from one kind of game object.

```csharp
IShapeMappingScope<TShape, TContext> For<TShape, TContext>() where TShape : struct, IArchetypeQueryable
```

#### Returns

 [IShapeMappingScope](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingScope-2.md)<TShape, TContext\>

#### Type Parameters

`TShape` 

`TContext` 


