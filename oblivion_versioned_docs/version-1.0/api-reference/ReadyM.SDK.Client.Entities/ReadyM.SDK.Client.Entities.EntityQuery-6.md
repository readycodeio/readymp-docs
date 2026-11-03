---
title: 'Struct EntityQuery<T1, T2, T3, T4, T5, T6>'
description: 'Every entity carrying all 6 shapes, without an archetype that names them.'
---
# Struct EntityQuery<T1, T2, T3, T4, T5, T6>

Namespace: [ReadyM.SDK.Client.Entities](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.md)  
Assembly: ReadyM.SDK.Client.dll  

Every entity carrying all 6 shapes, without an archetype that names them.

```csharp
public readonly struct EntityQuery<T1, T2, T3, T4, T5, T6> where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin where T5 : struct, IArchetypeMixin where T6 : struct, IArchetypeMixin
```

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`T6` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Client_Entities_EntityQuery_6_InScope_ReadyM_SDK_Archetypes_Scope_"></a> InScope\(Scope\)

Narrows the query to the entities one scope holds.

```csharp
public ScopedQuery<T1, T2, T3, T4, T5, T6> InScope(Scope scope)
```

#### Parameters

`scope` Scope

#### Returns

 [ScopedQuery](../ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.ScopedQuery-6.md)<T1, T2, T3, T4, T5, T6\>


