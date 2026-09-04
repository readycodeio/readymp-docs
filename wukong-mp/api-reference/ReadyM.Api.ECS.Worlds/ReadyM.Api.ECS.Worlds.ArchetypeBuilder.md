# Class ArchetypeBuilder

Namespace: [ReadyM.Api.ECS.Worlds](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.md)  
Assembly: ReadyM.Api.dll  

Builder class for creating archetypes in the ECS (Entity Component System) framework.
It allows adding components, tags, and custom filters to define the structure of an archetype.

```csharp
public class ArchetypeBuilder
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ArchetypeBuilder](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.ArchetypeBuilder.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_ECS_Worlds_ArchetypeBuilder__ctor"></a> ArchetypeBuilder\(\)

```csharp
public ArchetypeBuilder()
```

## Methods

### <a id="ReadyM_Api_ECS_Worlds_ArchetypeBuilder_Add__1"></a> Add<T\>\(\)

Adds a component of type T to the archetype builder. The component type must be a value type and implement the **IComponent** interface.

```csharp
public ArchetypeBuilder Add<T>() where T : struct, IComponent
```

#### Returns

 [ArchetypeBuilder](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.ArchetypeBuilder.md)

#### Type Parameters

`T` 

### <a id="ReadyM_Api_ECS_Worlds_ArchetypeBuilder_Add__1___0_"></a> Add<T\>\(T\)

Adds a component of type T with a specific instance to the archetype builder. The component type must be a value type and implement the **IComponent** interface.

```csharp
public ArchetypeBuilder Add<T>(T component) where T : struct, IComponent
```

#### Parameters

`component` T

#### Returns

 [ArchetypeBuilder](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.ArchetypeBuilder.md)

#### Type Parameters

`T` 


