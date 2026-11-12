---
title: 'Struct ScopedQuery<T>'
description: 'Every entity a scope holds that carries the shape. Walked by identity: a scope''s entities are scattered through the archetypes they belong to, so there are no chunks to hand back.'
---
# Struct ScopedQuery<T>

Namespace: [ReadyM.SDK.Server.Entities](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.md)  
Assembly: ReadyM.SDK.Server.dll  

Every entity a scope holds that carries the shape. Walked by identity: a scope's entities are
scattered through the archetypes they belong to, so there are no chunks to hand back.

```csharp
public readonly ref struct ScopedQuery<T> where T : struct, IArchetypeQueryable
```

#### Type Parameters

`T` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Server_Entities_ScopedQuery_1_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public ScopedQuery<T>.Enumerator GetEnumerator()
```

#### Returns

 [ScopedQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-1.md)<T\>.Enumerator


