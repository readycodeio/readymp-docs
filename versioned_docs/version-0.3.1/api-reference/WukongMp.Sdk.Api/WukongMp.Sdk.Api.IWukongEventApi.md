# Interface IWukongEventApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides events related to gameplay, player actions, and multiplayer interactions in Wukong Multiplayer.

```csharp
public interface IWukongEventApi
```

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnBeginPlayGameplayLevel"></a> OnBeginPlayGameplayLevel

Fired when the player enters a gameplay level.

```csharp
event Action? OnBeginPlayGameplayLevel
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnConnected"></a> OnConnected

Fired when any player connects to the server.

```csharp
event Action<PlayerId>? OnConnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/PlayerId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnDisconnected"></a> OnDisconnected

Fired when any player disconnects from the server, either voluntarily or involuntarily.

```csharp
event Action<PlayerId, DisconnectedReason>? OnDisconnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/PlayerId.cs), [DisconnectedReason](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api.Multiplayer/Protocol/DisconnectedReason.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnEndPlayGameplayLevel"></a> OnEndPlayGameplayLevel

Fired when the player leaves a gameplay level, either by exiting to the main menu or by loading another level.

```csharp
event Action? OnEndPlayGameplayLevel
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnExitLevel"></a> OnExitLevel

Fired when the player exits a level, either by exiting to the main menu or by loading another level.

```csharp
event Action? OnExitLevel
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnJoinedArea"></a> OnJoinedArea

Fired when the player enters an area.

```csharp
event Action<AreaId>? OnJoinedArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[AreaId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLanguageChanged"></a> OnLanguageChanged

Fired when the game's language is changed, either by the player changing it in the settings or by the game automatically setting it based on the player's system language.

```csharp
event Action<CultureInfo>? OnLanguageChanged
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[CultureInfo](https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLeftArea"></a> OnLeftArea

Fired when the player leaves an area.

```csharp
event Action<AreaId>? OnLeftArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[AreaId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLevelLoaded"></a> OnLevelLoaded

Fired when a gameplay level is loaded, but before the loading screen is closed.
This is a good event to use for initializing custom widgets, so that they are ready to be shown as soon as the loading screen is closed.

```csharp
event Action? OnLevelLoaded
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLoadingScreenClose"></a> OnLoadingScreenClose

Fired when the loading screen is closed after loading a gameplay level.

```csharp
event Action? OnLoadingScreenClose
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLocalPlayerBeforeRebirth"></a> OnLocalPlayerBeforeRebirth

Fired when the local player's character is about to rebirth.
This is fired before the rebirth actually happens, so the player's character will still be dead at this point.

```csharp
event Action? OnLocalPlayerBeforeRebirth
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLocalPlayerChangedSpectator"></a> OnLocalPlayerChangedSpectator

Fired when the local player changes spectator mode, either by entering or exiting spectator mode.

```csharp
event Action<bool>? OnLocalPlayerChangedSpectator
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnMainCharacterEntityInitialized"></a> OnMainCharacterEntityInitialized

Fired when the player's main character ECS entity is initialized and ready.
This is fired before **OnPlayerPawnSpawned**, so it can be used to set up things that need to be ready before the pawn is spawned.

```csharp
event Action<ReadyMainCharacter>? OnMainCharacterEntityInitialized
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnMonsterDead"></a> OnMonsterDead

Fired when any monster dies.
The first parameter is the monster that died, and the second parameter is the entity that killed it (if applicable).

```csharp
event Action<ReadyTamer, ReadyCharacter?>? OnMonsterDead
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md), [ReadyCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter.md)?\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnMonsterDestroyed"></a> OnMonsterDestroyed

Fired when a monster is removed from the game world, either by dying or by being despawned for other reasons (e.g. the player leaving the area).

```csharp
event Action<ReadyTamer>? OnMonsterDestroyed
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnMonsterSpawned"></a> OnMonsterSpawned

Fired when a monster is spawned in the game world, either by being spawned by the player or by being spawned by the game itself.

```csharp
event Action<ReadyTamer>? OnMonsterSpawned
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[ReadyTamer](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer.md)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnOtherPlayerInsideArea"></a> OnOtherPlayerInsideArea

Fired when another player enters the same area as the local player.

```csharp
event Action<PlayerId, AreaId>? OnOtherPlayerInsideArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnOtherPlayerOutsideArea"></a> OnOtherPlayerOutsideArea

Fired when another player leaves the area that the local player is in.

```csharp
event Action<PlayerId, AreaId>? OnOtherPlayerOutsideArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/4da3ee8d4824b61629dc7d12c5e97f68cf1764eb/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnPlayerChangedTeam"></a> OnPlayerChangedTeam

Fired when the player changes team, either by rebirthing or by joining a game in progress.

```csharp
event Action<ReadyMainCharacter>? OnPlayerChangedTeam
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnPlayerDead"></a> OnPlayerDead

Fired when any player dies.
The first parameter is the player character that died, and the second parameter is the entity that killed them (if applicable).

```csharp
event Action<ReadyMainCharacter, ReadyCharacter?>? OnPlayerDead
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md), [ReadyCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter.md)?\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnPlayerPawnSpawned"></a> OnPlayerPawnSpawned

Fired when the player's pawn (the in-game character they control) is spawned.
This can happen when you enter a new area, or when another player connects to the game and their pawn is spawned for you.

```csharp
event Action<ReadyMainCharacter>? OnPlayerPawnSpawned
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>?


