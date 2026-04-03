# Struct ReadyMainCharacter

Namespace: [WukongMp.Sdk.Entities](../WukongMp.Sdk.Api/WukongMp.Sdk.Entities.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public readonly struct ReadyMainCharacter : IReadyEntity<ReadyMainCharacter>
```

#### Implements

[IReadyEntity<ReadyMainCharacter\>](../WukongMp.Sdk/WukongMp.Sdk.IReadyEntity-1.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ReadyObjectExtensions.SetLocationRotation<ReadyMainCharacter\>\(ReadyMainCharacter, Vector3, Vector3\)](WukongMp.Sdk.Entities.ReadyObjectExtensions.md\#WukongMp\_Sdk\_Entities\_ReadyObjectExtensions\_SetLocationRotation\_\_1\_\_\_0\_System\_Numerics\_Vector3\_System\_Numerics\_Vector3\_)

## Properties

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_BeguilingChantEligible"></a> BeguilingChantEligible

```csharp
public bool BeguilingChantEligible { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_IsRespawning"></a> IsRespawning

```csharp
public bool IsRespawning { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_IsTransformed"></a> IsTransformed

```csharp
public bool IsTransformed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_IsWaitingForCutscene"></a> IsWaitingForCutscene

```csharp
public bool IsWaitingForCutscene { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_Nickname"></a> Nickname

```csharp
public string Nickname { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_PlayerId"></a> PlayerId

```csharp
public PlayerId PlayerId { get; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/16f0ba653289bfdbcd76b35571a56163f648d4fe/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_RebirthPointId"></a> RebirthPointId

```csharp
public int RebirthPointId { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_WaitingCutsceneId"></a> WaitingCutsceneId

```csharp
public int WaitingCutsceneId { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_HideMarker"></a> HideMarker\(\)

```csharp
public void HideMarker()
```

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_RebirthAtShrine_System_Int32_"></a> RebirthAtShrine\(int\)

```csharp
public void RebirthAtShrine(int shrineId)
```

#### Parameters

`shrineId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_RebirthInPlace"></a> RebirthInPlace\(\)

```csharp
public void RebirthInPlace()
```

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_SetMarkerMessage_System_String_System_String_"></a> SetMarkerMessage\(string, string\)

```csharp
public void SetMarkerMessage(string message, string color)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_Teleport_System_Numerics_Vector3_System_Numerics_Vector3_"></a> Teleport\(Vector3, Vector3\)

```csharp
public void Teleport(Vector3 location, Vector3 rotation)
```

#### Parameters

`location` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

`rotation` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

## Operators

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_op_Explicit_WukongMp_Sdk_Entities_ReadyObject__WukongMp_Sdk_Entities_ReadyMainCharacter"></a> explicit operator ReadyMainCharacter\(ReadyObject\)

```csharp
public static explicit operator ReadyMainCharacter(ReadyObject obj)
```

#### Parameters

`obj` [ReadyObject](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyObject.md)

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_op_Explicit_WukongMp_Sdk_Entities_ReadyCharacter__WukongMp_Sdk_Entities_ReadyMainCharacter"></a> explicit operator ReadyMainCharacter\(ReadyCharacter\)

```csharp
public static explicit operator ReadyMainCharacter(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter.md)

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_op_Implicit_WukongMp_Sdk_Entities_ReadyMainCharacter__WukongMp_Sdk_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyMainCharacter\)

```csharp
public static implicit operator ReadyObject(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

#### Returns

 [ReadyObject](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyObject.md)

### <a id="WukongMp_Sdk_Entities_ReadyMainCharacter_op_Implicit_WukongMp_Sdk_Entities_ReadyMainCharacter__WukongMp_Sdk_Entities_ReadyCharacter"></a> implicit operator ReadyCharacter\(ReadyMainCharacter\)

```csharp
public static implicit operator ReadyCharacter(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

#### Returns

 [ReadyCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter.md)


