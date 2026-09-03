# Class DependencyContainerBase

Namespace: [ReadyM.Api.DI](../ReadyM.Api.DI/ReadyM.Api.DI.md)  
Assembly: ReadyM.Api.dll  

```csharp
public abstract class DependencyContainerBase : IDependencyContainer, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DependencyContainerBase](../ReadyM.Api.DI/ReadyM.Api.DI.DependencyContainerBase.md)

#### Implements

[IDependencyContainer](../ReadyM.Api.DI/ReadyM.Api.DI.IDependencyContainer.md), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_DI_DependencyContainerBase__ctor"></a> DependencyContainerBase\(\)

```csharp
protected DependencyContainerBase()
```

## Properties

### <a id="ReadyM_Api_DI_DependencyContainerBase_Container"></a> Container

```csharp
protected IContainer Container { get; }
```

#### Property Value

 IContainer

## Methods

### <a id="ReadyM_Api_DI_DependencyContainerBase_Dispose"></a> Dispose\(\)

```csharp
public virtual void Dispose()
```

### <a id="ReadyM_Api_DI_DependencyContainerBase_Init"></a> Init\(\)

```csharp
public virtual void Init()
```

### <a id="ReadyM_Api_DI_DependencyContainerBase_RegisterSingleton__2___1_System_Boolean_"></a> RegisterSingleton<TService, TImplementation\>\(TImplementation, bool\)

```csharp
public void RegisterSingleton<TService, TImplementation>(TImplementation instance, bool replace = false) where TImplementation : TService
```

#### Parameters

`instance` TImplementation

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

`TImplementation` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_RegisterSingleton__1_System_Boolean_"></a> RegisterSingleton<T\>\(bool\)

```csharp
public void RegisterSingleton<T>(bool replace = false)
```

#### Parameters

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_RegisterSingleton__1___0_System_Boolean_"></a> RegisterSingleton<T\>\(T, bool\)

```csharp
public void RegisterSingleton<T>(T instance, bool replace = false)
```

#### Parameters

`instance` T

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_RegisterSingleton__1_System_Type_System_Boolean_"></a> RegisterSingleton<TService\>\(Type, bool\)

```csharp
public void RegisterSingleton<TService>(Type type, bool replace = false)
```

#### Parameters

`type` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_RegisterSingleton__2_System_Boolean_"></a> RegisterSingleton<TService, TImplementation\>\(bool\)

```csharp
public void RegisterSingleton<TService, TImplementation>(bool replace = false) where TImplementation : TService
```

#### Parameters

`replace` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 

`TImplementation` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_Resolve__1"></a> Resolve<T\>\(\)

```csharp
public T Resolve<T>()
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_ResolveAll__1"></a> ResolveAll<T\>\(\)

```csharp
public IEnumerable<T> ResolveAll<T>()
```

#### Returns

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T\>

#### Type Parameters

`T` 

### <a id="ReadyM_Api_DI_DependencyContainerBase_StartHostedServices"></a> StartHostedServices\(\)

```csharp
public void StartHostedServices()
```


