---
title: 'Delegate CollectionAccess<TAccess>'
description: 'Reads one of an entity''s collections, as its component exposes it.'
---
# Delegate CollectionAccess<TAccess>

Namespace: [ReadyM.SDK.Archetypes.Access](../ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.md)  
Assembly: ReadyM.SDK.dll  

Reads one of an entity's collections, as its component exposes it.

```csharp
public delegate TAccess CollectionAccess<out TAccess>(in EntityHandle handle) where TAccess : allows ref struct
```

#### Parameters

`handle` EntityHandle

#### Returns

 TAccess

#### Type Parameters

`TAccess` 


