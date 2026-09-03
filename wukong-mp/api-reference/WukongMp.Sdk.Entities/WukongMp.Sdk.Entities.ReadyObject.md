# Struct ReadyObject

Namespace: [WukongMp.Sdk.Entities](../WukongMp.Sdk.Api/WukongMp.Sdk.Entities.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public readonly struct ReadyObject : IReadyEntity<ReadyObject>
```

#### Implements

[IReadyEntity<ReadyObject\>](../WukongMp.Sdk/WukongMp.Sdk.IReadyEntity-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ReadyObjectExtensions.SetLocationRotation<ReadyObject\>\(ReadyObject, Vector3, Vector3\)](WukongMp.Sdk.Entities.ReadyObjectExtensions.md\#WukongMp\_Sdk\_Entities\_ReadyObjectExtensions\_SetLocationRotation\_\_1\_\_\_0\_System\_Numerics\_Vector3\_System\_Numerics\_Vector3\_)

## Constructors

### <a id="WukongMp_Sdk_Entities_ReadyObject__ctor_WukongMp_Sdk_Api_IWukongSynchronizationApi_Friflo_Engine_ECS_Entity_"></a> ReadyObject\(IWukongSynchronizationApi, Entity\)

```csharp
public ReadyObject(IWukongSynchronizationApi api, Entity entity)
```

#### Parameters

`api` [IWukongSynchronizationApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongSynchronizationApi.md)

`entity` [Entity](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Entity.cs)

## Methods

### <a id="WukongMp_Sdk_Entities_ReadyObject_Get__1"></a> Get<T\>\(\)

```csharp
public ref T Get<T>() where T : struct, IComponent
```

#### Returns

 T

#### Type Parameters

`T` 


