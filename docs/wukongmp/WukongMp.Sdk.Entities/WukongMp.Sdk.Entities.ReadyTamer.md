#  Struct ReadyTamer

Namespace: [WukongMp.Sdk.Entities](WukongMp.Sdk.Entities.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public readonly struct ReadyTamer : IReadyEntity<ReadyTamer>, IReadyConvertable<ReadyTamer, ReadyCharacter>, IReadyConvertable<ReadyTamer, ReadyActor>, IReadyConvertable<ReadyTamer, ReadyObject>
```

#### Implements

[IReadyEntity<ReadyTamer\>](WukongMp.Sdk.IReadyEntity\-1.md), 
[IReadyConvertable<ReadyTamer, ReadyCharacter\>](WukongMp.Sdk.IReadyConvertable\-2.md), 
[IReadyConvertable<ReadyTamer, ReadyActor\>](WukongMp.Sdk.IReadyConvertable\-2.md), 
[IReadyConvertable<ReadyTamer, ReadyObject\>](WukongMp.Sdk.IReadyConvertable\-2.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

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

`obj` [ReadyObject](WukongMp.Sdk.Entities.ReadyObject.md)

#### Returns

 [ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Explicit_WukongMp_Sdk_Entities_ReadyCharacter__WukongMp_Sdk_Entities_ReadyTamer"></a> explicit operator ReadyTamer\(ReadyCharacter\)

```csharp
public static explicit operator ReadyTamer(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)

#### Returns

 [ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Explicit_WukongMp_Sdk_Entities_ReadyActor__WukongMp_Sdk_Entities_ReadyTamer"></a> explicit operator ReadyTamer\(ReadyActor\)

```csharp
public static explicit operator ReadyTamer(ReadyActor actor)
```

#### Parameters

`actor` [ReadyActor](WukongMp.Sdk.Entities.ReadyActor.md)

#### Returns

 [ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Implicit_WukongMp_Sdk_Entities_ReadyTamer__WukongMp_Sdk_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyTamer\)

```csharp
public static implicit operator ReadyObject(ReadyTamer tamer)
```

#### Parameters

`tamer` [ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md)

#### Returns

 [ReadyObject](WukongMp.Sdk.Entities.ReadyObject.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Implicit_WukongMp_Sdk_Entities_ReadyTamer__WukongMp_Sdk_Entities_ReadyCharacter"></a> implicit operator ReadyCharacter\(ReadyTamer\)

```csharp
public static implicit operator ReadyCharacter(ReadyTamer tamer)
```

#### Parameters

`tamer` [ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md)

#### Returns

 [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)

### <a id="WukongMp_Sdk_Entities_ReadyTamer_op_Implicit_WukongMp_Sdk_Entities_ReadyTamer__WukongMp_Sdk_Entities_ReadyActor"></a> implicit operator ReadyActor\(ReadyTamer\)

```csharp
public static implicit operator ReadyActor(ReadyTamer tamer)
```

#### Parameters

`tamer` [ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md)

#### Returns

 [ReadyActor](WukongMp.Sdk.Entities.ReadyActor.md)

