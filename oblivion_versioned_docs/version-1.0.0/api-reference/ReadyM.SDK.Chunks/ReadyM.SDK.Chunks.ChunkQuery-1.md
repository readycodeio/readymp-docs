---
title: 'Struct ChunkQuery<TView>'
description: 'A query that walks chunks rather than entity IDs.'
---
# Struct ChunkQuery<TView>

Namespace: [ReadyM.SDK.Chunks](../ReadyM.SDK.Chunks/ReadyM.SDK.Chunks.md)  
Assembly: ReadyM.SDK.Chunks.dll  

A query that walks chunks rather than entity IDs.

```csharp
public readonly ref struct ChunkQuery<TView> where TView : IArchetypeChunkView<TView>, allows ref struct
```

#### Type Parameters

`TView` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Chunks_ChunkQuery_1_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public ChunkQuery<TView>.Enumerator GetEnumerator()
```

#### Returns

 [ChunkQuery](../ReadyM.SDK.Chunks/ReadyM.SDK.Chunks.ChunkQuery-1.md)<TView\>.Enumerator


