---
title: 'Struct EntityQuery<T>'
description: 'Every entity of a shape. How it is walked is decided for you: a shape whose components are all known at compile time is walked by chunk, and anything else by identity. The choice is made by overload resolution, so this type has no GetEnumerator of its own and a foreach binds one of the extensions instead.'
---
# Struct EntityQuery<T>

Namespace: [ReadyM.SDK.Server.Entities](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.md)  
Assembly: ReadyM.SDK.Server.dll  

Every entity of a shape. How it is walked is decided for you: a shape whose components are all
known at compile time is walked by chunk, and anything else by identity. The choice is made by
overload resolution, so this type has no GetEnumerator of its own and a foreach binds one of the
extensions instead.

```csharp
public readonly ref struct EntityQuery<T> where T : struct, IArchetypeQueryable
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

### <a id="ReadyM_SDK_Server_Entities_EntityQuery_1_InScope_ReadyM_SDK_Archetypes_Scope_"></a> InScope\(Scope\)

Narrows the query to the entities one scope holds.

```csharp
public ScopedQuery<T> InScope(Scope scope)
```

#### Parameters

`scope` Scope

#### Returns

 [ScopedQuery](../ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-1.md)<T\>


