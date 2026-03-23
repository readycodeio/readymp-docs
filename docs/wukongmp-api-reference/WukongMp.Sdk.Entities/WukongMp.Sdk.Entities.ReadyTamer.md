# Struct ReadyTamer

Namespace: [WukongMp.Sdk.Entities](../WukongMp.Sdk.Api/WukongMp.Sdk.Entities.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public readonly struct ReadyTamer : IReadyEntity<ReadyTamer>
```

#### Implements

[IReadyEntity<ReadyTamer\>](../WukongMp.Sdk/WukongMp.Sdk.IReadyEntity-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ReadyObjectExtensions.SetLocationRotation<ReadyTamer\>\(ReadyTamer, Vector3, Vector3\)](WukongMp.Sdk.Entities.ReadyObjectExtensions.md\#WukongMp\_Sdk\_Entities\_ReadyObjectExtensions\_SetLocationRotation\_\_1\_\_\_0\_System\_Numerics\_Vector3\_System\_Numerics\_Vector3\_)

## Properties

### <a id="WukongMp_Sdk_Entities_ReadyTamer_Guid"></a> Guid

```csharp
public string? Guid { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="WukongMp_Sdk_Entities_ReadyTamer_HpMultiplier"></a> HpMultiplier

```csharp
public float HpMultiplier { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_IsBossOrElite"></a> IsBossOrElite

```csharp
public bool IsBossOrElite { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_IsMonsterActive"></a> IsMonsterActive

```csharp
public bool IsMonsterActive { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Operators

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Explicit_WukongMp_Sdk_Entities_ReadyObject__WukongMp_Sdk_Entities_ReadyTamer"></a> explicit operator ReadyTamer\(ReadyObject\)

```csharp
public static explicit operator ReadyTamer(ReadyObject obj)
```

#### Parameters

`obj` [ReadyObject](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyObject.md)

#### Returns

 [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Explicit_WukongMp_Sdk_Entities_ReadyCharacter__WukongMp_Sdk_Entities_ReadyTamer"></a> explicit operator ReadyTamer\(ReadyCharacter\)

```csharp
public static explicit operator ReadyTamer(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter.md)

#### Returns

 [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Explicit_WukongMp_Sdk_Entities_ReadyActor__WukongMp_Sdk_Entities_ReadyTamer"></a> explicit operator ReadyTamer\(ReadyActor\)

```csharp
public static explicit operator ReadyTamer(ReadyActor actor)
```

#### Parameters

`actor` [ReadyActor](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyActor.md)

#### Returns

 [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Implicit_WukongMp_Sdk_Entities_ReadyTamer__WukongMp_Sdk_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyTamer\)

```csharp
public static implicit operator ReadyObject(ReadyTamer tamer)
```

#### Parameters

`tamer` [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)

#### Returns

 [ReadyObject](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyObject.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Implicit_WukongMp_Sdk_Entities_ReadyTamer__WukongMp_Sdk_Entities_ReadyCharacter"></a> implicit operator ReadyCharacter\(ReadyTamer\)

```csharp
public static implicit operator ReadyCharacter(ReadyTamer tamer)
```

#### Parameters

`tamer` [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)

#### Returns

 [ReadyCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Implicit_WukongMp_Sdk_Entities_ReadyTamer__WukongMp_Sdk_Entities_ReadyActor"></a> implicit operator ReadyActor\(ReadyTamer\)

```csharp
public static implicit operator ReadyActor(ReadyTamer tamer)
```

#### Parameters

`tamer` [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)

#### Returns

 [ReadyActor](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyActor.md)


