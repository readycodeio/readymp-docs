# Interface IDependencyContainer

Namespace: [ReadyM.Api.DI](../ReadyM.Api.DI/ReadyM.Api.DI.md)  
Assembly: ReadyM.Api.dll  

Dependency injection container interface for registering and resolving services.

```csharp
public interface IDependencyContainer
```

## Remarks

Registrations are additive by default, so several mods can each contribute an
implementation of the same service and all of them are returned by
**ResolveAll%60%601**. Pass <code>replace: true</code> to take over a service
another mod or the SDK already registered, which drops every existing
registration of that service type.

## Methods

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__1_System_Boolean_"></a> RegisterSingleton<TService\>\(bool\)

```csharp
void RegisterSingleton<TService>(bool replace = false)
```

#### Parameters

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__1___0_System_Boolean_"></a> RegisterSingleton<TService\>\(TService, bool\)

```csharp
void RegisterSingleton<TService>(TService instance, bool replace = false)
```

#### Parameters

`instance` TService

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__1_System_Type_System_Boolean_"></a> RegisterSingleton<TService\>\(Type, bool\)

```csharp
void RegisterSingleton<TService>(Type implementationType, bool replace = false)
```

#### Parameters

`implementationType` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__2_System_Boolean_"></a> RegisterSingleton<TService, TImplementation\>\(bool\)

```csharp
void RegisterSingleton<TService, TImplementation>(bool replace = false) where TImplementation : TService
```

#### Parameters

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

`TImplementation` 

### <a id="ReadyM_Api_DI_IDependencyContainer_RegisterSingleton__2___1_System_Boolean_"></a> RegisterSingleton<TService, TImplementation\>\(TImplementation, bool\)

```csharp
void RegisterSingleton<TService, TImplementation>(TImplementation instance, bool replace = false) where TImplementation : TService
```

#### Parameters

`instance` TImplementation

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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


