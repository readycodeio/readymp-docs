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

## Properties

### <a id="WukongMp_Sdk_Entities_ReadyObject_IsNull"></a> IsNull

Whether the entity behind this handle no longer exists.

```csharp
public bool IsNull { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="WukongMp_Sdk_Entities_ReadyObject_Get__1"></a> Get<T\>\(\)

Reads a component, throwing if the entity is gone.

```csharp
public ref T Get<T>() where T : struct, IComponent
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="WukongMp_Sdk_Entities_ReadyObject_TryGet__1___0__"></a> TryGet<T\>\(out T\)

Reads a copy of a component, or returns false when the entity is gone or does not carry it.

```csharp
public bool TryGet<T>(out T value) where T : struct, IComponent
```

#### Parameters

`value` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


