# Interface IOblivionSyncApi

Namespace: [OblivionMp.Sdk.Api](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public interface IOblivionSyncApi : ISynchronizationApi<ReadyMainCharacter>, ISynchronizationApi
```

#### Implements

[ISynchronizationApi<ReadyMainCharacter\>](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Sdk.Common/Entities/ISynchronizationApi.cs), 
[ISynchronizationApi](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Sdk.Common/Entities/ISynchronizationApi.cs)

## Properties

### <a id="OblivionMp_Sdk_Api_IOblivionSyncApi_AllDroppedItems"></a> AllDroppedItems

```csharp
IEnumerable<ReadyDroppedItem> AllDroppedItems { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[ReadyDroppedItem](../OblivionMp.Sdk.Entities.DroppedItem/OblivionMp.Sdk.Entities.DroppedItem.ReadyDroppedItem.md)\>

## Methods

### <a id="OblivionMp_Sdk_Api_IOblivionSyncApi_SpawnDroppedItem_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_System_Numerics_Vector3_"></a> SpawnDroppedItem\(FormId, int, Vector3\)

```csharp
void SpawnDroppedItem(FormId item, int stackSize, Vector3 position)
```

#### Parameters

`item` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

`stackSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`position` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)


