---
title: 'Interface IArchetypeChunkView<TSelf>'
description: 'The chunk-backed twin of an archetype or mixin: the same properties, reached straight off the chunk rather than by asking where the entity lives on every access.'
---
# Interface IArchetypeChunkView<TSelf>

Namespace: [ReadyM.SDK.Chunks](../ReadyM.SDK.Chunks/ReadyM.SDK.Chunks.md)  
Assembly: ReadyM.SDK.Chunks.dll  

The chunk-backed twin of an archetype or mixin: the same properties, reached straight off the
chunk rather than by asking where the entity lives on every access.

```csharp
public interface IArchetypeChunkView<out TSelf> : IEntityShape where TSelf : IArchetypeChunkView<out TSelf>, allows ref struct
```

#### Type Parameters

`TSelf` 

#### Implements

IEntityShape

## Remarks

Generated code in a mod assembly implements this, and that mod keeps running against later SDKs,
so a member added here without a body would stop every already-compiled mod from loading.
Anything added later must have one, static members included.


