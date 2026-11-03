---
title: 'Struct ScopedQuery<T1, T2, T3>'
description: 'Every entity a scope holds that carries all 3 shapes. Walked by identity: a scope''s entities are scattered through the archetypes they belong to, so there are no chunks to hand back.'
---
# Struct ScopedQuery<T1, T2, T3>

Namespace: [ReadyM.SDK.Client.Entities](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.md)  
Assembly: ReadyM.SDK.Client.dll  

Every entity a scope holds that carries all 3 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

```csharp
public readonly struct ScopedQuery<T1, T2, T3> where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin
```

#### Type Parameters

`T1` 

`T2` 

`T3` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Client_Entities_ScopedQuery_3_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public ScopedQuery<T1, T2, T3>.Enumerator GetEnumerator()
```

#### Returns

 [ScopedQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.ScopedQuery-3.md)<T1, T2, T3\>.Enumerator


