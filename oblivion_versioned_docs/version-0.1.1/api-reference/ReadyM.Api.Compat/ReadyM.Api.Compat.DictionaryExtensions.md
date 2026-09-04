# Class DictionaryExtensions

Namespace: [ReadyM.Api.Compat](../ReadyM.Api.Compat/ReadyM.Api.Compat.md)  
Assembly: ReadyM.Api.dll  

```csharp
public static class DictionaryExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[DictionaryExtensions](../ReadyM.Api.Compat/ReadyM.Api.Compat.DictionaryExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Api_Compat_DictionaryExtensions_GetValueOrDefault__2_System_Collections_Generic_Dictionary___0___1____0_"></a> GetValueOrDefault<TKey, TValue\>\(Dictionary<TKey, TValue\>, TKey\)

```csharp
public static TValue? GetValueOrDefault<TKey, TValue>(this Dictionary<TKey, TValue> self, TKey key) where TKey : notnull
```

#### Parameters

`self` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<TKey, TValue\>

`key` TKey

#### Returns

 TValue?

#### Type Parameters

`TKey` 

`TValue` 


