---
title: 'Struct EntityQuery<T1, T2, T3, T4>'
description: 'Every entity carrying all 4 shapes, without an archetype that names them.'
---
# Struct EntityQuery<T1, T2, T3, T4>

Namespace: [ReadyM.SDK.Server.Entities](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.md)  
Assembly: ReadyM.SDK.Server.dll  

Every entity carrying all 4 shapes, without an archetype that names them.

```csharp
public readonly ref struct EntityQuery<T1, T2, T3, T4> where T1 : struct, IArchetypeQueryable where T2 : struct, IArchetypeMixin where T3 : struct, IArchetypeMixin where T4 : struct, IArchetypeMixin
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

### <a id="ReadyM_SDK_Server_Entities_EntityQuery_4_InScope_ReadyM_SDK_Archetypes_Scope_"></a> InScope\(Scope\)

Narrows the query to the entities one scope holds.

```csharp
public ScopedQuery<T1, T2, T3, T4> InScope(Scope scope)
```

#### Parameters

`scope` Scope

#### Returns

 [ScopedQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-4.md)<T1, T2, T3, T4\>


