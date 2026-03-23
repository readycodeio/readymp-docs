# Struct EntityList<T>

Namespace: [WukongMp.Sdk](../WukongMp.Sdk/WukongMp.Sdk.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public readonly struct EntityList<T> : IEnumerable<T>, IEnumerable where T : struct, IReadyEntity<T>
```

#### Type Parameters

`T` 

#### Implements

[IEnumerable<T\>](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1), 
[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="WukongMp_Sdk_EntityList_1_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<T> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<T\>


