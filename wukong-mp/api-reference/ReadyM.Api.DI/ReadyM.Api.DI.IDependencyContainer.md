# Interface IDependencyContainer

Namespace: [ReadyM.Api.DI](../ReadyM.Api.DI/ReadyM.Api.DI.md)  
Assembly: ReadyM.Api.dll  

Dependency injection container interface for registering and resolving services.

```csharp
public interface IDependencyContainer
```

## Methods

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__1"></a> RegisterSingleton<TService\>\(\)

```csharp
void RegisterSingleton<TService>()
```

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__1___0_"></a> RegisterSingleton<TService\>\(TService\)

```csharp
void RegisterSingleton<TService>(TService instance)
```

#### Parameters

`instance` TService

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__1_System_Type_"></a> RegisterSingleton<TService\>\(Type\)

```csharp
void RegisterSingleton<TService>(Type implementationType)
```

#### Parameters

`implementationType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__2"></a> RegisterSingleton<TService, TImplementation\>\(\)

```csharp
void RegisterSingleton<TService, TImplementation>() where TImplementation : TService
```

#### Type Parameters

`TService` 

`TImplementation` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__2___1_"></a> RegisterSingleton<TService, TImplementation\>\(TImplementation\)

```csharp
void RegisterSingleton<TService, TImplementation>(TImplementation instance) where TImplementation : TService
```

#### Parameters

`instance` TImplementation

#### Type Parameters

`TService` 

`TImplementation` 

### <a id="ReadyM_Api_DI_IDependencyContainer_Resolve__1"></a> Resolve<T\>\(\)

```csharp
T Resolve<T>()
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_Api_DI_IDependencyContainer_ResolveAll__1"></a> ResolveAll<T\>\(\)

```csharp
IEnumerable<T> ResolveAll<T>()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T\>

#### Type Parameters

`T` 


