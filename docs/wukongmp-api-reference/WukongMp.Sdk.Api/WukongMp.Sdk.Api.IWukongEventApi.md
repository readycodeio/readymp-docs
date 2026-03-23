#  Interface IWukongEventApi

Namespace: [WukongMp.Sdk.Api](WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongEventApi
```

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnBeginPlayGameplayLevel"></a> OnBeginPlayGameplayLevel

```csharp
event Action? OnBeginPlayGameplayLevel
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnConnected"></a> OnConnected

```csharp
event Action<PlayerId>? OnConnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/PlayerId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnDisconnected"></a> OnDisconnected

```csharp
event Action<PlayerId, DisconnectReason>? OnDisconnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/PlayerId.cs), [DisconnectReason](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/INetEventListener.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnEndPlayGameplayLevel"></a> OnEndPlayGameplayLevel

```csharp
event Action? OnEndPlayGameplayLevel
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnExitLevel"></a> OnExitLevel

```csharp
event Action? OnExitLevel
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnJoinedArea"></a> OnJoinedArea

```csharp
event Action<AreaId>? OnJoinedArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AreaId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLeftArea"></a> OnLeftArea

```csharp
event Action<AreaId>? OnLeftArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[AreaId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLevelLoaded"></a> OnLevelLoaded

```csharp
event Action? OnLevelLoaded
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLoadingScreenClose"></a> OnLoadingScreenClose

```csharp
event Action? OnLoadingScreenClose
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnLocalPlayerBeforeRebirth"></a> OnLocalPlayerBeforeRebirth

```csharp
event Action? OnLocalPlayerBeforeRebirth
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action)?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnMainCharacterEntityInitialized"></a> OnMainCharacterEntityInitialized

```csharp
event Action<ReadyMainCharacter>? OnMainCharacterEntityInitialized
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ReadyMainCharacter](WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnMonsterDead"></a> OnMonsterDead

```csharp
event Action<ReadyTamer, ReadyCharacter?>? OnMonsterDead
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[ReadyTamer](WukongMp.Sdk.Entities.ReadyTamer.md), [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)?\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnOtherPlayerInsideArea"></a> OnOtherPlayerInsideArea

```csharp
event Action<PlayerId, AreaId>? OnOtherPlayerInsideArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnOtherPlayerOutsideArea"></a> OnOtherPlayerOutsideArea

```csharp
event Action<PlayerId, AreaId>? OnOtherPlayerOutsideArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/PlayerId.cs), [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/7ea6bb407f79d097d03621b801187ecda7be41cc/src/ReadyM.Api/Idents/AreaId.cs)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnPlayerChangedTeam"></a> OnPlayerChangedTeam

```csharp
event Action<ReadyMainCharacter>? OnPlayerChangedTeam
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ReadyMainCharacter](WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnPlayerDead"></a> OnPlayerDead

```csharp
event Action<ReadyMainCharacter, ReadyCharacter?>? OnPlayerDead
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-2)<[ReadyMainCharacter](WukongMp.Sdk.Entities.ReadyMainCharacter.md), [ReadyCharacter](WukongMp.Sdk.Entities.ReadyCharacter.md)?\>?

### <a id="WukongMp_Sdk_Api_IWukongEventApi_OnPlayerPawnSpawned"></a> OnPlayerPawnSpawned

```csharp
event Action<ReadyMainCharacter>? OnPlayerPawnSpawned
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action\-1)<[ReadyMainCharacter](WukongMp.Sdk.Entities.ReadyMainCharacter.md)\>?

