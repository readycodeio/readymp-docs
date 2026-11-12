---
title: 'Struct ScopedQuery<T1, T2, T3, T4>'
description: 'Every entity a scope holds that carries all 4 shapes. Walked by identity: a scope''s entities are scattered through the archetypes they belong to, so there are no chunks to hand back.'
---
# Struct ScopedQuery<T1, T2, T3, T4>

Namespace: [ReadyM.SDK.Client.Entities](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.md)  
Assembly: ReadyM.SDK.Client.dll  

Every entity a scope holds that carries all 4 shapes. Walked by identity: a scope's entities
are scattered through the archetypes they belong to, so there are no chunks to hand back.

```csharp
public readonly struct ScopedQuery<T1, T2, T3, T4> where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin
```

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Client_Entities_ScopedQuery_4_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public ScopedQuery<T1, T2, T3, T4>.Enumerator GetEnumerator()
```

#### Returns

 [ScopedQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.ScopedQuery-4.md)<T1, T2, T3, T4\>.Enumerator


