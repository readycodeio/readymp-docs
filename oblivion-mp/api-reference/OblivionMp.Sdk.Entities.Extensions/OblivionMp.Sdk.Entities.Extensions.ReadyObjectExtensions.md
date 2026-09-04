# Class ReadyObjectExtensions

Namespace: [OblivionMp.Sdk.Entities.Extensions](../OblivionMp.Sdk.Entities.Extensions/OblivionMp.Sdk.Entities.Extensions.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public static class ReadyObjectExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ReadyObjectExtensions](../OblivionMp.Sdk.Entities.Extensions/OblivionMp.Sdk.Entities.Extensions.ReadyObjectExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="OblivionMp_Sdk_Entities_Extensions_ReadyObjectExtensions_SetLocationRotation__1___0_System_Numerics_Vector3_System_Numerics_Vector3_"></a> SetLocationRotation<TSelf\>\(TSelf, Vector3, Vector3\)

Set the location and rotation of the object or character.
For the rotation, only the Y axis (yaw) is used for characters, so the X and Z axes will be ignored.

```csharp
public static void SetLocationRotation<TSelf>(this TSelf obj, Vector3 location, Vector3 rotation) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

`location` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

`rotation` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="OblivionMp_Sdk_Entities_Extensions_ReadyObjectExtensions_get_Location__1___0_"></a> get\_Location<TSelf\>\(TSelf\)

Current coordinates of the object or character.

```csharp
public static Vector3 get_Location<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="OblivionMp_Sdk_Entities_Extensions_ReadyObjectExtensions_get_Rotation__1___0_"></a> get\_Rotation<TSelf\>\(TSelf\)

Current rotation of the character on each axis.
Only the Y axis (yaw) is used for characters, so the X and Z axes will always be 0.

```csharp
public static Vector3 get_Rotation<TSelf>(TSelf obj) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="OblivionMp_Sdk_Entities_Extensions_ReadyObjectExtensions_set_Location__1___0_System_Numerics_Vector3_"></a> set\_Location<TSelf\>\(TSelf, Vector3\)

Current coordinates of the object or character.

```csharp
public static void set_Location<TSelf>(TSelf obj, Vector3 value) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

`value` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 

### <a id="OblivionMp_Sdk_Entities_Extensions_ReadyObjectExtensions_set_Rotation__1___0_System_Numerics_Vector3_"></a> set\_Rotation<TSelf\>\(TSelf, Vector3\)

Current rotation of the character on each axis.
Only the Y axis (yaw) is used for characters, so the X and Z axes will always be 0.

```csharp
public static void set_Rotation<TSelf>(TSelf obj, Vector3 value) where TSelf : struct, IReadyEntity<TSelf>, IReadyConvertable<TSelf, ReadyObject>
```

#### Parameters

`obj` TSelf

`value` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Type Parameters

`TSelf` 


