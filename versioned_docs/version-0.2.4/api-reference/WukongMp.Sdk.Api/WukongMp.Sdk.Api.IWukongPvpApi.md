# Interface IWukongPvpApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

API for PvP mode. Will be removed in the future when custom data sync and server-side scripting are implemented.

```csharp
[Obsolete("This API is temporary and will be removed in the future when custom data sync is implemented.")]
public interface IWukongPvpApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_AntiStallEnabled"></a> AntiStallEnabled

```csharp
bool AntiStallEnabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_ConsumablesAllowed"></a> ConsumablesAllowed

```csharp
bool ConsumablesAllowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_CurrentRound"></a> CurrentRound

```csharp
int CurrentRound { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_EnemiesNgPlusLevel"></a> EnemiesNgPlusLevel

```csharp
int EnemiesNgPlusLevel { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_GourdAllowed"></a> GourdAllowed

```csharp
bool GourdAllowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_ImmobilizeAllowed"></a> ImmobilizeAllowed

```csharp
bool ImmobilizeAllowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_InPvP"></a> InPvP

```csharp
bool InPvP { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_InPvpTournament"></a> InPvpTournament

```csharp
bool InPvpTournament { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_LevelId"></a> LevelId

```csharp
int LevelId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_OwnsPvpState"></a> OwnsPvpState

```csharp
bool OwnsPvpState { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_RoundWinners"></a> RoundWinners

```csharp
IEnumerable<int> RoundWinners { get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_TournamentRounds"></a> TournamentRounds

```csharp
int TournamentRounds { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_InitializeAreaPvpState"></a> InitializeAreaPvpState\(\)

```csharp
void InitializeAreaPvpState()
```

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_PvpData_WukongMp_Sdk_Entities_ReadyMainCharacter_"></a> PvpData\(ReadyMainCharacter\)

```csharp
ref PvPComponent PvpData(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

#### Returns

 [PvPComponent](https://github.com/readycodeio/readym\-gameserver/blob/a1b59546bbb845a6f917219c2bff68f0f63b4da0/src/ReadyM.Wukong.Common/ECS/Components/PvPComponent.cs)

### <a id="WukongMp_Sdk_Api_IWukongPvpApi_SetLastRoundWinnerTeam_System_Int32_"></a> SetLastRoundWinnerTeam\(int\)

```csharp
void SetLastRoundWinnerTeam(int winner)
```

#### Parameters

`winner` [int](https://learn.microsoft.com/dotnet/api/system.int32)


