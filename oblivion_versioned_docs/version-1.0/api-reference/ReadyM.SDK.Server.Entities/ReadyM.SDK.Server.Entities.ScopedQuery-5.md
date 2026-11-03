---
title: 'Struct ScopedQuery<T1, T2, T3, T4, T5>'
description: 'Every entity a scope holds that carries all 5 shapes. Walked by identity: a scope''s entities are scattered through the archetypes they belong to, so there are no chunks to hand back.'
---
# Struct ScopedQuery<T1, T2, T3, T4, T5>

Namespace: [ReadyM.SDK.Server.Entities](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.md)  
Assembly: ReadyM.SDK.Server.dll  

Every entity a scope holds that carries all 5 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

```csharp
public readonly ref struct ScopedQuery<T1, T2, T3, T4, T5> where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin where T5 : struct, IArchetypeMixin
```

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Server_Entities_ScopedQuery_5_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public ScopedQuery<T1, T2, T3, T4, T5>.Enumerator GetEnumerator()
```

#### Returns

 [ScopedQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-5.md)<T1, T2, T3, T4, T5\>.Enumerator


