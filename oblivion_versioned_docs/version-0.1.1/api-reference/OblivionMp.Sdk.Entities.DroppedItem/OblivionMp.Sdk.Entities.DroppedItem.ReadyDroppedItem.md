# Struct ReadyDroppedItem

Namespace: [OblivionMp.Sdk.Entities.DroppedItem](../OblivionMp.Sdk/OblivionMp.Sdk.Entities.DroppedItem.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public readonly struct ReadyDroppedItem : IReadyEntity<ReadyDroppedItem>
```

#### Implements

[IReadyEntity<ReadyDroppedItem\>](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Sdk.Common/Entities/IReadyEntity.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ReadyObjectExtensions.SetLocationRotation<ReadyDroppedItem\>\(ReadyDroppedItem, Vector3, Vector3\)](../OblivionMp.Sdk.Entities.Extensions/OblivionMp.Sdk.Entities.Extensions.ReadyObjectExtensions.md#OblivionMp\_Sdk\_Entities\_Extensions\_ReadyObjectExtensions\_SetLocationRotation\_\_1\_\_\_0\_System\_Numerics\_Vector3\_System\_Numerics\_Vector3\_)

## Properties

### <a id="OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem_FormId"></a> FormId

```csharp
public FormId FormId { get; }
```

#### Property Value

 [FormId](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

### <a id="OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem_StackSize"></a> StackSize

```csharp
public int StackSize { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Operators

### <a id="OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem_op_Explicit_ReadyM_Sdk_Common_Entities_ReadyObject__OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem"></a> explicit operator ReadyDroppedItem\(ReadyObject\)

```csharp
public static explicit operator ReadyDroppedItem(ReadyObject obj)
```

#### Parameters

`obj` [ReadyObject](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Sdk.Common/Entities/ReadyObject.cs)

#### Returns

 [ReadyDroppedItem](../OblivionMp.Sdk.Entities.DroppedItem/OblivionMp.Sdk.Entities.DroppedItem.ReadyDroppedItem.md)

### <a id="OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem_op_Explicit_ReadyM_Sdk_Common_Entities_ReadyCharacter__OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem"></a> explicit operator ReadyDroppedItem\(ReadyCharacter\)

```csharp
public static explicit operator ReadyDroppedItem(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Sdk.Common/Entities/ReadyCharacter.cs)

#### Returns

 [ReadyDroppedItem](../OblivionMp.Sdk.Entities.DroppedItem/OblivionMp.Sdk.Entities.DroppedItem.ReadyDroppedItem.md)

### <a id="OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem_op_Implicit_OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem__ReadyM_Sdk_Common_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyDroppedItem\)

```csharp
public static implicit operator ReadyObject(ReadyDroppedItem mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyDroppedItem](../OblivionMp.Sdk.Entities.DroppedItem/OblivionMp.Sdk.Entities.DroppedItem.ReadyDroppedItem.md)

#### Returns

 [ReadyObject](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Sdk.Common/Entities/ReadyObject.cs)

### <a id="OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem_op_Implicit_OblivionMp_Sdk_Entities_DroppedItem_ReadyDroppedItem__ReadyM_Sdk_Common_Entities_ReadyCharacter"></a> implicit operator ReadyCharacter\(ReadyDroppedItem\)

```csharp
public static implicit operator ReadyCharacter(ReadyDroppedItem mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyDroppedItem](../OblivionMp.Sdk.Entities.DroppedItem/OblivionMp.Sdk.Entities.DroppedItem.ReadyDroppedItem.md)

#### Returns

 [ReadyCharacter](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Sdk.Common/Entities/ReadyCharacter.cs)


