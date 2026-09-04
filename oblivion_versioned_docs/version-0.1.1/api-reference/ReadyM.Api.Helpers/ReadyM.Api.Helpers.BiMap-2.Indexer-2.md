# Class BiMap<TForwardKey, TReverseKey>.Indexer<TKey, TValue>

Namespace: [ReadyM.Api.Helpers](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.md)  
Assembly: ReadyM.Api.dll  

Publically read-only lookup to prevent inconsistent state between forward and reverse map lookups

```csharp
public class BiMap<TForwardKey, TReverseKey>.Indexer<TKey, TValue> where TKey : notnull where TValue : notnull
```

#### Type Parameters

`TKey` 

`TValue` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BiMap<TForwardKey, TReverseKey\>.Indexer<TKey, TValue\>](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.Indexer-2.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2__ctor_System_Collections_Generic_Dictionary__2__3__System_Collections_Generic_Dictionary__3__2__"></a> Indexer\(Dictionary<TKey, TValue\>, Dictionary<TValue, TKey\>\)

```csharp
public Indexer(Dictionary<TKey, TValue> dictionary, Dictionary<TValue, TKey> inverse)
```

#### Parameters

`dictionary` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TKey, TValue\>

`inverse` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TValue, TKey\>

## Properties

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_Keys"></a> Keys

```csharp
public IEnumerable<TKey> Keys { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<TKey\>

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_Values"></a> Values

```csharp
public IEnumerable<TValue> Values { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<TValue\>

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_Item__2_"></a> this\[TKey\]

```csharp
public TValue this[TKey index] { get; set; }
```

#### Property Value

 TValue

## Methods

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_ContainsKey__2_"></a> ContainsKey\(TKey\)

```csharp
public bool ContainsKey(TKey key)
```

#### Parameters

`key` TKey

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public Dictionary<TKey, TValue>.Enumerator GetEnumerator()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TKey, TValue\>.[Enumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2.enumerator)

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_ToDictionary"></a> ToDictionary\(\)

Deep copy lookup as a dictionary

```csharp
public Dictionary<TKey, TValue> ToDictionary()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TKey, TValue\>

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_TryGetValue__2__3__"></a> TryGetValue\(TKey, out TValue\)

```csharp
public bool TryGetValue(TKey key, out TValue value)
```

#### Parameters

`key` TKey

`value` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Operators

### <a id="ReadyM_Api_Helpers_BiMap_2_Indexer_2_op_Implicit_ReadyM_Api_Helpers_BiMap__0__1__Indexer__2__3___System_Collections_Generic_Dictionary__2__3_"></a> implicit operator Dictionary<TKey, TValue\>\(Indexer<TKey, TValue\>\)

```csharp
public static implicit operator Dictionary<TKey, TValue>(BiMap<TForwardKey, TReverseKey>.Indexer<TKey, TValue> indexer)
```

#### Parameters

`indexer` [BiMap](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.md)<TForwardKey, TReverseKey\>.[Indexer](../ReadyM.Api.Helpers/ReadyM.Api.Helpers.BiMap-2.Indexer-2.md)<TKey, TValue\>

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TKey, TValue\>


