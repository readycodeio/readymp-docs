# Class ReadyObjectExtensions

Namespace: [ReadyM.Sdk.Common.Entities.Extensions](../ReadyM.Sdk.Common.Entities.Extensions/ReadyM.Sdk.Common.Entities.Extensions.md)  
Assembly: ReadyM.Sdk.Common.dll  

```csharp
public static class ReadyObjectExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReadyObjectExtensions](../ReadyM.Sdk.Common.Entities.Extensions/ReadyM.Sdk.Common.Entities.Extensions.ReadyObjectExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Sdk_Common_Entities_Extensions_ReadyObjectExtensions_get_AreaId__1___0_"></a> get\_AreaId<TSelf\>\(TSelf\)

```csharp
public static AreaId? get_AreaId<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs)?

#### Type Parameters

`TSelf` 

### <a id="ReadyM_Sdk_Common_Entities_Extensions_ReadyObjectExtensions_get_Owner__1___0_"></a> get\_Owner<TSelf\>\(TSelf\)

Gets the owner of the entity. This is usually the player that spawned the entity, or a player that was handled the ownership after the original owner disconnected.

```csharp
public static PlayerId get_Owner<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs)

#### Type Parameters

`TSelf` 

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)


