#  Struct ReadyCharacter

Namespace: [WukongMp.Sdk.Entities](WukongMp.Sdk.Entities.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public readonly struct ReadyCharacter : IReadyEntity<ReadyCharacter>, IReadyConvertable<ReadyCharacter, ReadyActor>, IReadyConvertable<ReadyCharacter, ReadyObject>
```

#### Implements

[IReadyEntity<ReadyCharacter\>](WukongMp.Sdk.IReadyEntity\-1.md), 
[IReadyConvertable<ReadyCharacter, ReadyActor\>](WukongMp.Sdk.IReadyConvertable\-2.md), 
[IReadyConvertable<ReadyCharacter, ReadyObject\>](WukongMp.Sdk.IReadyConvertable\-2.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Operators

### <a id="WukongMp_Sdk_Entities_ReadyCharacter_op_Explicit_WukongMp_Sdk_Entities_ReadyObject__WukongMp_Sdk_Entities_ReadyCharacter"></a> explicit operator ReadyCharacter\(ReadyObject\)

```csharp
public static explicit operator ReadyCharacter(ReadyObject obj)
```

#### Parameters

`obj` [ReadyObject](WukongMp.Sdk.Entities.ReadyObject.md)

#### Returns

 [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)

### <a id="WukongMp_Sdk_Entities_ReadyCharacter_op_Explicit_WukongMp_Sdk_Entities_ReadyActor__WukongMp_Sdk_Entities_ReadyCharacter"></a> explicit operator ReadyCharacter\(ReadyActor\)

```csharp
public static explicit operator ReadyCharacter(ReadyActor actor)
```

#### Parameters

`actor` [ReadyActor](WukongMp.Sdk.Entities.ReadyActor.md)

#### Returns

 [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)

### <a id="WukongMp_Sdk_Entities_ReadyCharacter_op_Implicit_WukongMp_Sdk_Entities_ReadyCharacter__WukongMp_Sdk_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyCharacter\)

```csharp
public static implicit operator ReadyObject(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)

#### Returns

 [ReadyObject](WukongMp.Sdk.Entities.ReadyObject.md)

### <a id="WukongMp_Sdk_Entities_ReadyCharacter_op_Implicit_WukongMp_Sdk_Entities_ReadyCharacter__WukongMp_Sdk_Entities_ReadyActor"></a> implicit operator ReadyActor\(ReadyCharacter\)

```csharp
public static implicit operator ReadyActor(ReadyCharacter tamer)
```

#### Parameters

`tamer` [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)

#### Returns

 [ReadyActor](WukongMp.Sdk.Entities.ReadyActor.md)

