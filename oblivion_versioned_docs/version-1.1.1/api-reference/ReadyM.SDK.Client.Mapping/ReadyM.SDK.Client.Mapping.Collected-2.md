---
title: 'Delegate Collected<TAccess, TContext>'
description: 'Moves one collection between the ECS and the game, in whichever direction it was declared for.'
---
# Delegate Collected<TAccess, TContext>

Namespace: [ReadyM.SDK.Client.Mapping](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.md)  
Assembly: ReadyM.SDK.Client.dll  

Moves one collection between the ECS and the game, in whichever direction it was declared for.

```csharp
public delegate void Collected<TAccess, in TContext>(TAccess collection, TContext context) where TAccess : allows ref struct
```

#### Parameters

`collection` TAccess

`context` TContext

#### Type Parameters

`TAccess` 

`TContext` 


