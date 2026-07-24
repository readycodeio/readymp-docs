# Class EntityBuilderBase

Namespace: [ReadyM.Api.ECS.Worlds](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.md)  
Assembly: ReadyM.Api.dll  

```csharp
public abstract class EntityBuilderBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_ECS_Worlds_EntityBuilderBase__ctor"></a> EntityBuilderBase\(\)

```csharp
protected EntityBuilderBase()
```

## Methods

### <a id="ReadyM_Api_ECS_Worlds_EntityBuilderBase_Add__1"></a> Add<T\>\(\)

```csharp
public abstract EntityBuilderBase Add<T>() where T : struct, IComponent
```

#### Returns

 [EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)

#### Type Parameters

`T` 

### <a id="ReadyM_Api_ECS_Worlds_EntityBuilderBase_Add__1___0__"></a> Add<T\>\(in T\)

```csharp
public abstract EntityBuilderBase Add<T>(in T component) where T : struct, IComponent
```

#### Parameters

`component` T

#### Returns

 [EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)

#### Type Parameters

`T` 


