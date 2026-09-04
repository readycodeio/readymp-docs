# Class BiMap<TForwardKey, TReverseKey>

Namespace: [ReadyM.Api.Helpers](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.md)  
Assembly: ReadyM.Api.dll  

```csharp
public class BiMap<TForwardKey, TReverseKey> where TForwardKey : notnull where TReverseKey : notnull
```

#### Type Parameters

`TForwardKey` 

`TReverseKey` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BiMap<TForwardKey, TReverseKey\>](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Helpers_BiMap_2__ctor"></a> BiMap\(\)

```csharp
public BiMap()
```

### <a id="ReadyM_Api_Helpers_BiMap_2__ctor_System_Collections_Generic_Dictionary__0__1__"></a> BiMap\(Dictionary<TForwardKey, TReverseKey\>\)

```csharp
public BiMap(Dictionary<TForwardKey, TReverseKey> oneWayMap)
```

#### Parameters

`oneWayMap` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TForwardKey, TReverseKey\>

## Properties

### <a id="ReadyM_Api_Helpers_BiMap_2_Forward"></a> Forward

```csharp
public BiMap<TForwardKey, TReverseKey>.Indexer<TForwardKey, TReverseKey> Forward { get; }
```

#### Property Value

 [BiMap](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.md)<TForwardKey, TReverseKey\>.[Indexer](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.Indexer-2.md)<TForwardKey, TReverseKey\>

### <a id="ReadyM_Api_Helpers_BiMap_2_Reverse"></a> Reverse

```csharp
public BiMap<TForwardKey, TReverseKey>.Indexer<TReverseKey, TForwardKey> Reverse { get; }
```

#### Property Value

 [BiMap](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.md)<TForwardKey, TReverseKey\>.[Indexer](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.Indexer-2.md)<TReverseKey, TForwardKey\>

## Methods

### <a id="ReadyM_Api_Helpers_BiMap_2_Add__0__1_"></a> Add\(TForwardKey, TReverseKey\)

```csharp
public void Add(TForwardKey t1, TReverseKey t2)
```

#### Parameters

`t1` TForwardKey

`t2` TReverseKey

### <a id="ReadyM_Api_Helpers_BiMap_2_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="ReadyM_Api_Helpers_BiMap_2_Count"></a> Count\(\)

```csharp
public int Count()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Helpers_BiMap_2_ForceAdd__0__1_"></a> ForceAdd\(TForwardKey, TReverseKey\)

```csharp
public void ForceAdd(TForwardKey t1, TReverseKey t2)
```

#### Parameters

`t1` TForwardKey

`t2` TReverseKey

### <a id="ReadyM_Api_Helpers_BiMap_2_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public Dictionary<TForwardKey, TReverseKey>.Enumerator GetEnumerator()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TForwardKey, TReverseKey\>.[Enumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2.enumerator)

### <a id="ReadyM_Api_Helpers_BiMap_2_Remove__0__1__"></a> Remove\(TForwardKey, out TReverseKey?\)

```csharp
public bool Remove(TForwardKey forwardKey, out TReverseKey? reverseKey)
```

#### Parameters

`forwardKey` TForwardKey

`reverseKey` TReverseKey?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


