# Class ReadyObjectExtensions

Namespace: [WukongMp.Sdk.Entities](../WukongMp.Sdk.Api/WukongMp.Sdk.Entities.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public static class ReadyObjectExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReadyObjectExtensions](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyObjectExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_SetLocationRotation__1___0_System_Numerics_Vector3_System_Numerics_Vector3_"></a> SetLocationRotation<TSelf\>\(TSelf, Vector3, Vector3\)

```csharp
public static void SetLocationRotation<TSelf>(this TSelf obj, Vector3 location, Vector3 rotation) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

`location` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

`rotation` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_get_AreaId__1___0_"></a> get\_AreaId<TSelf\>\(TSelf\)

```csharp
public static AreaId? get_AreaId<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/AreaId.cs)?

#### Type Parameters

`TSelf` 

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_get_Location__1___0_"></a> get\_Location<TSelf\>\(TSelf\)

```csharp
public static Vector3 get_Location<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_get_Owner__1___0_"></a> get\_Owner<TSelf\>\(TSelf\)

Gets the owner of the entity. This is usually the player that spawned the entity, or a player that was handled the ownership after the original owner disconnected.

```csharp
public static PlayerId get_Owner<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/35a3d35386874af513f4af64fb25c76e0ab4cf43/src/ReadyM.Api/Idents/PlayerId.cs)

#### Type Parameters

`TSelf` 

#### Exceptions

 [InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception)

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_get_Rotation__1___0_"></a> get\_Rotation<TSelf\>\(TSelf\)

```csharp
public static Vector3 get_Rotation<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_set_Location__1___0_System_Numerics_Vector3_"></a> set\_Location<TSelf\>\(TSelf, Vector3\)

```csharp
public static void set_Location<TSelf>(TSelf obj, Vector3 value) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

`value` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="WukongMp_Sdk_Entities_ReadyObjectExtensions_set_Rotation__1___0_System_Numerics_Vector3_"></a> set\_Rotation<TSelf\>\(TSelf, Vector3\)

```csharp
public static void set_Rotation<TSelf>(TSelf obj, Vector3 value) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

`value` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 


