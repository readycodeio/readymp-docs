# Interface IWukongSynchronizationApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongSynchronizationApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AllMainCharacters"></a> AllMainCharacters

```csharp
EntityList<ReadyMainCharacter> AllMainCharacters { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AllPlayers"></a> AllPlayers

```csharp
IReadOnlyList<PlayerId> AllPlayers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Idents/PlayerId.cs)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AllTamers"></a> AllTamers

```csharp
EntityList<ReadyTamer> AllTamers { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AreaMainCharacters"></a> AreaMainCharacters

```csharp
EntityList<ReadyMainCharacter> AreaMainCharacters { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AreaPlayers"></a> AreaPlayers

```csharp
IReadOnlyList<PlayerId> AreaPlayers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Idents/PlayerId.cs)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AreaTamers"></a> AreaTamers

```csharp
EntityList<ReadyTamer> AreaTamers { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_CurrentAreaId"></a> CurrentAreaId

```csharp
AreaId? CurrentAreaId { get; }
```

#### Property Value

 [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Idents/AreaId.cs)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_InRoom"></a> InRoom

```csharp
bool InRoom { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_IsConnected"></a> IsConnected

```csharp
bool IsConnected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_IsMasterClient"></a> IsMasterClient

```csharp
bool IsMasterClient { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_LocalMainCharacter"></a> LocalMainCharacter

```csharp
ReadyMainCharacter? LocalMainCharacter { get; }
```

#### Property Value

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_LocalPlayerId"></a> LocalPlayerId

```csharp
PlayerId? LocalPlayerId { get; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Idents/PlayerId.cs)?

## Methods

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_DisableSpectatorMode_WukongMp_Sdk_Entities_ReadyMainCharacter_"></a> DisableSpectatorMode\(ReadyMainCharacter\)

```csharp
void DisableSpectatorMode(ReadyMainCharacter character)
```

#### Parameters

`character` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_EnableSpectatorMode_WukongMp_Sdk_Entities_ReadyMainCharacter_ReadyM_Wukong_Common_ECS_Values_SpectatorReason_"></a> EnableSpectatorMode\(ReadyMainCharacter, SpectatorReason\)

```csharp
void EnableSpectatorMode(ReadyMainCharacter character, SpectatorReason reason)
```

#### Parameters

`character` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

`reason` [SpectatorReason](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Wukong.Common/ECS/Values/SpectatorReason.cs)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetDisconnectReasonAndInvoke_System_Action_LiteNetLib_DisconnectReason__"></a> GetDisconnectReasonAndInvoke\(Action<DisconnectReason\>\)

```csharp
void GetDisconnectReasonAndInvoke(Action<DisconnectReason> callback)
```

#### Parameters

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[DisconnectReason](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/INetEventListener.cs)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetMainCharacterByPlayerId_ReadyM_Api_Idents_PlayerId_"></a> GetMainCharacterByPlayerId\(PlayerId\)

```csharp
ReadyMainCharacter? GetMainCharacterByPlayerId(PlayerId playerId)
```

#### Parameters

`playerId` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Idents/PlayerId.cs)

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetPlayerEntityByActor_UnrealEngine_Engine_AActor_"></a> GetPlayerEntityByActor\(AActor?\)

```csharp
ReadyMainCharacter? GetPlayerEntityByActor(AActor? actor)
```

#### Parameters

`actor` AActor?

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetPlayerEntityByLastTransformation_b1_BGUCharacterCS_"></a> GetPlayerEntityByLastTransformation\(BGUCharacterCS?\)

```csharp
ReadyMainCharacter? GetPlayerEntityByLastTransformation(BGUCharacterCS? targetCharacter)
```

#### Parameters

`targetCharacter` BGUCharacterCS?

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_SpawnEnemy_WukongMp_Api_Configuration_TamerKind_System_Numerics_Vector3_System_Int32_System_Int32_"></a> SpawnEnemy\(TamerKind, Vector3, int, int\)

```csharp
void SpawnEnemy(TamerKind kind, Vector3 position, int count = 1, int teamId = 2)
```

#### Parameters

`kind` [TamerKind](https://github.com/readycodeio/wukong\-csharp\-mod/blob/c75196dbf9f9d36004b262bf095bccb6234c3d74/WukongMp.Api/Configuration/TamerKind.cs)

`position` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`teamId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_SyncMonstersInArea"></a> SyncMonstersInArea\(\)

```csharp
void SyncMonstersInArea()
```

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_TryGetPlayerInfoById_ReadyM_Api_Idents_PlayerId_System_String__System_Nullable_System_Int32___"></a> TryGetPlayerInfoById\(PlayerId, out string?, out int?\)

```csharp
bool TryGetPlayerInfoById(PlayerId player, out string? nickname, out int? team)
```

#### Parameters

`player` [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Idents/PlayerId.cs)

`nickname` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`team` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


