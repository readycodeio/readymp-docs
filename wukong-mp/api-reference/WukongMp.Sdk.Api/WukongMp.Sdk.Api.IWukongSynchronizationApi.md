# Interface IWukongSynchronizationApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides methods related to synchronizing game state between players in a multiplayer session.

```csharp
public interface IWukongSynchronizationApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AllMainCharacters"></a> AllMainCharacters

Gets a list of all main characters.

```csharp
EntityList<ReadyMainCharacter> AllMainCharacters { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AllPlayers"></a> AllPlayers

Gets a list of all players on the server.

```csharp
IReadOnlyList<PlayerId> AllPlayers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AllTamers"></a> AllTamers

Gets a list of all tamers (monsters).

```csharp
EntityList<ReadyTamer> AllTamers { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AreaMainCharacters"></a> AreaMainCharacters

Gets a list of main characters in the current area.

```csharp
EntityList<ReadyMainCharacter> AreaMainCharacters { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AreaPlayers"></a> AreaPlayers

Gets a list of players in the current area.

```csharp
IReadOnlyList<PlayerId> AreaPlayers { get; }
```

#### Property Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_AreaTamers"></a> AreaTamers

Gets a list of tamers (monsters) in the current area.

```csharp
EntityList<ReadyTamer> AreaTamers { get; }
```

#### Property Value

 [EntityList](../WukongMp.Sdk/WukongMp.Sdk.EntityList-1.md)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)\>

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_CurrentAreaId"></a> CurrentAreaId

Gets the current area ID.

```csharp
AreaId? CurrentAreaId { get; }
```

#### Property Value

 [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/AreaId.cs)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_InArea"></a> InArea

Gets a value indicating whether the player is in an area.

```csharp
bool InArea { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_IsConnected"></a> IsConnected

Gets a value indicating whether the player is connected to the server.

```csharp
bool IsConnected { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_IsMasterClient"></a> IsMasterClient

Gets a value indicating whether the player is the master client in an area.

```csharp
bool IsMasterClient { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_LocalMainCharacter"></a> LocalMainCharacter

Gets the local main character.

```csharp
ReadyMainCharacter? LocalMainCharacter { get; }
```

#### Property Value

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_LocalPlayerId"></a> LocalPlayerId

Gets the local player's ID.

```csharp
PlayerId? LocalPlayerId { get; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)?

## Methods

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_DisableSpectatorMode_WukongMp_Sdk_Entities_ReadyMainCharacter_"></a> DisableSpectatorMode\(ReadyMainCharacter\)

Disables spectator mode for the specified character.

```csharp
void DisableSpectatorMode(ReadyMainCharacter character)
```

#### Parameters

`character` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

The character to disable spectator mode for.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_EnableSpectatorMode_WukongMp_Sdk_Entities_ReadyMainCharacter_ReadyM_Wukong_Common_ECS_Values_SpectatorReason_"></a> EnableSpectatorMode\(ReadyMainCharacter, SpectatorReason\)

Enables spectator mode for the specified character.

```csharp
void EnableSpectatorMode(ReadyMainCharacter character, SpectatorReason reason)
```

#### Parameters

`character` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

The character to enable spectator mode for.

`reason` [SpectatorReason](https://github.com/readycodeio/wukongmp\-sdk/blob/2ec474d750b708ddb8ec4179f17489aea7264a6d/ReadyM.Wukong.Common/ECS/Values/SpectatorReason.cs)

The reason for enabling spectator mode.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetDisconnectReasonAndInvoke_System_Action_ReadyM_Api_Multiplayer_Protocol_DisconnectedReason__"></a> GetDisconnectReasonAndInvoke\(Action<DisconnectedReason\>\)

Retrieves the disconnect reason and invokes the provided callback with it.

```csharp
void GetDisconnectReasonAndInvoke(Action<DisconnectedReason> callback)
```

#### Parameters

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[DisconnectedReason](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api.Multiplayer/Protocol/DisconnectedReason.cs)\>

The callback to invoke with the disconnect reason.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetGlobalComponent__1"></a> GetGlobalComponent<T\>\(\)

Gets a reference to a component on the global entity. Throws if there is no global entity, which is
the case whenever the client is not in an area.

```csharp
ref T GetGlobalComponent<T>() where T : struct, IComponent
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetMainCharacterByPlayerId_ReadyM_Api_Idents_PlayerId_"></a> GetMainCharacterByPlayerId\(PlayerId\)

Gets the main character associated with the specified player ID.

```csharp
ReadyMainCharacter? GetMainCharacterByPlayerId(PlayerId playerId)
```

#### Parameters

`playerId` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The player ID.

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

The main character, or <code>null</code> if not found.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetPlayerEntityByActor_UnrealEngine_Engine_AActor_"></a> GetPlayerEntityByActor\(AActor?\)

Gets the player entity associated with the specified actor.

```csharp
ReadyMainCharacter? GetPlayerEntityByActor(AActor? actor)
```

#### Parameters

`actor` AActor?

The actor to find the player entity for.

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

The player entity, or <code>null</code> if not found.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetPlayerEntityByLastTransformation_b1_BGUCharacterCS_"></a> GetPlayerEntityByLastTransformation\(BGUCharacterCS?\)

Gets the player entity associated with the last transformation of the specified character.

```csharp
ReadyMainCharacter? GetPlayerEntityByLastTransformation(BGUCharacterCS? targetCharacter)
```

#### Parameters

`targetCharacter` BGUCharacterCS?

The character to find the player entity for.

#### Returns

 [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)?

The player entity, or <code>null</code> if not found.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_GetTamerEntityByActor_b1_ABGUTamerBase_"></a> GetTamerEntityByActor\(ABGUTamerBase?\)

Gets the tamer entity associated with the specified actor.

```csharp
ReadyTamer? GetTamerEntityByActor(ABGUTamerBase? actor)
```

#### Parameters

`actor` ABGUTamerBase?

The tamer actor to find the tamer entity for.

#### Returns

 [ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)?

The tamer entity, or <code>null</code> if not found.

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_SpawnEnemy_WukongMp_Api_Configuration_TamerKind_System_Numerics_Vector3_System_Int32_System_Int32_"></a> SpawnEnemy\(TamerKind, Vector3, int, int\)

Spawns an enemy of the specified kind at the given position.

```csharp
void SpawnEnemy(TamerKind kind, Vector3 position, int count = 1, int teamId = 2)
```

#### Parameters

`kind` [TamerKind](https://github.com/readycodeio/wukongmp\-sdk/blob/2ec474d750b708ddb8ec4179f17489aea7264a6d/WukongMp.Api/Configuration/TamerKind.cs)

The kind of enemy to spawn.

`position` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

The position to spawn the enemy at.

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of enemies to spawn. Defaults to 1.

`teamId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The team ID for the spawned enemies. Defaults to the default monster team ID (2).

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_SyncMonstersInArea"></a> SyncMonstersInArea\(\)

Register all monsters in the current area to be synchronized over the network.
This should be called whenever the first player enters a new area.

```csharp
void SyncMonstersInArea()
```

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_TryGetGlobalComponent__1___0__"></a> TryGetGlobalComponent<T\>\(out T\)

Copies a component off the global entity, returning false if there is no global entity. Safe to call
from a system, which keeps ticking after a disconnect.

```csharp
bool TryGetGlobalComponent<T>(out T value) where T : struct, IComponent
```

#### Parameters

`value` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="WukongMp_Sdk_Api_IWukongSynchronizationApi_TryGetPlayerInfoById_ReadyM_Api_Idents_PlayerId_System_String__System_Nullable_System_Int32___"></a> TryGetPlayerInfoById\(PlayerId, out string?, out int?\)

Tries to get player information by ID.

```csharp
bool TryGetPlayerInfoById(PlayerId player, out string? nickname, out int? team)
```

#### Parameters

`player` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The player ID.

`nickname` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The player's nickname, if found.

`team` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

The player's team ID, if found.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if the player information was found; otherwise, <code>false</code>.


