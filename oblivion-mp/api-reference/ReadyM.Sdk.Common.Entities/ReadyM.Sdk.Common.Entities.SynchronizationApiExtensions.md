# Class SynchronizationApiExtensions

Namespace: [ReadyM.Sdk.Common.Entities](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.md)  
Assembly: ReadyM.Sdk.Common.dll  

```csharp
public static class SynchronizationApiExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SynchronizationApiExtensions](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.SynchronizationApiExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Sdk_Common_Entities_SynchronizationApiExtensions_RequireLocalPlayer__1_ReadyM_Sdk_Common_Entities_ISynchronizationApi___0__"></a> RequireLocalPlayer<T\>\(ISynchronizationApi<T\>\)

```csharp
public static T RequireLocalPlayer<T>(this ISynchronizationApi<T> api) where T : struct
```

#### Parameters

`api` [ISynchronizationApi](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.ISynchronizationApi-1.md)<T\>

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_Sdk_Common_Entities_SynchronizationApiExtensions_TryGetLocalPlayer__1_ReadyM_Sdk_Common_Entities_ISynchronizationApi___0____0__"></a> TryGetLocalPlayer<T\>\(ISynchronizationApi<T\>, out T\)

```csharp
public static bool TryGetLocalPlayer<T>(this ISynchronizationApi<T> api, out T player) where T : struct
```

#### Parameters

`api` [ISynchronizationApi](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.ISynchronizationApi-1.md)<T\>

`player` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


