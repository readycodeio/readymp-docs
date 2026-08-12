# Class EcsExtensions

Namespace: [WukongMp.Api](../WukongMp.Api/WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

```csharp
public static class EcsExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EcsExtensions](../WukongMp.Api/WukongMp.Api.EcsExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="WukongMp_Api_EcsExtensions_GetComponent__1_b1_BGUActorBaseCS_"></a> GetComponent<T\>\(BGUActorBaseCS\)

Get a **game ECS** component of type <code class="typeparamref">T</code> from the given actor.

```csharp
public static T? GetComponent<T>(this BGUActorBaseCS actor) where T : UActorCompBaseCS
```

#### Parameters

`actor` BGUActorBaseCS

The actor to get the component from.

#### Returns

 T?

The component of type <code class="typeparamref">T</code> if found; otherwise, <code>null</code>.

#### Type Parameters

`T` 

The type of the component to get. Must be a subclass of **UActorCompBaseCS**.


