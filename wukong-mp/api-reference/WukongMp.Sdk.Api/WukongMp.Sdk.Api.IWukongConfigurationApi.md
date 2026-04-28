# Interface IWukongConfigurationApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides ways to configure various aspects othe game's behavior.
Will be replaced in the future with more specific configuration APIs, but for now serves as a catch-all for miscellaneous configuration options that don't fit anywhere else.
Hence, we do not document the individual configuration options here, as they are all subject to change and may be removed in the future without a major version bump.

```csharp
public interface IWukongConfigurationApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_DeleteDestroyedTamersFromEcs"></a> DeleteDestroyedTamersFromEcs

```csharp
bool DeleteDestroyedTamersFromEcs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_DisableCutscenes"></a> DisableCutscenes

```csharp
bool DisableCutscenes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_EnableCustomCameraArmLength"></a> EnableCustomCameraArmLength

```csharp
bool EnableCustomCameraArmLength { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_IsStrongDamageImmueEnabled"></a> IsStrongDamageImmueEnabled

```csharp
bool IsStrongDamageImmueEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_IsSupportMultiLockEnabled"></a> IsSupportMultiLockEnabled

```csharp
bool IsSupportMultiLockEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_OverrideLocalPlayerTeamFromGlobalEntity"></a> OverrideLocalPlayerTeamFromGlobalEntity

```csharp
bool OverrideLocalPlayerTeamFromGlobalEntity { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SyncTamerTeamFromGameToEcs"></a> SyncTamerTeamFromGameToEcs

```csharp
bool SyncTamerTeamFromGameToEcs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_ClearDisableTamerAttackQuery"></a> ClearDisableTamerAttackQuery\(\)

```csharp
void ClearDisableTamerAttackQuery()
```

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_ClearIsAreaOverlapDisabledQuery"></a> ClearIsAreaOverlapDisabledQuery\(\)

```csharp
void ClearIsAreaOverlapDisabledQuery()
```

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_ClearIsInteractionAllowedQuery"></a> ClearIsInteractionAllowedQuery\(\)

```csharp
void ClearIsInteractionAllowedQuery()
```

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_ClearIsPlayerInBattleQuery"></a> ClearIsPlayerInBattleQuery\(\)

```csharp
void ClearIsPlayerInBattleQuery()
```

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_ClearIsSkillEnabledQuery"></a> ClearIsSkillEnabledQuery\(\)

```csharp
void ClearIsSkillEnabledQuery()
```

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_ClearIsTamerNotSynchronizedQuery"></a> ClearIsTamerNotSynchronizedQuery\(\)

```csharp
void ClearIsTamerNotSynchronizedQuery()
```

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_GetLaunchParameter_System_String_System_String_"></a> GetLaunchParameter\(string, string\)

```csharp
string GetLaunchParameter(string key, string defaultValue)
```

#### Parameters

`key` [string](https://learn.microsoft.com/dotnet/api/system.string)

`defaultValue` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SetDisableTamerAttackQuery_System_Func_System_Boolean__"></a> SetDisableTamerAttackQuery\(Func<bool\>\)

```csharp
void SetDisableTamerAttackQuery(Func<bool> shouldDisableTamerAttack)
```

#### Parameters

`shouldDisableTamerAttack` [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SetIsAreaOverlapDisabledQuery_System_Func_System_String_System_Boolean__"></a> SetIsAreaOverlapDisabledQuery\(Func<string, bool\>\)

```csharp
void SetIsAreaOverlapDisabledQuery(Func<string, bool> isAreaOverlapDisabled)
```

#### Parameters

`isAreaOverlapDisabled` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SetIsInteractionAllowedQuery_System_Func_BtlShare_EInteractType_System_Boolean__"></a> SetIsInteractionAllowedQuery\(Func<EInteractType, bool\>\)

```csharp
void SetIsInteractionAllowedQuery(Func<EInteractType, bool> isInteractAllowed)
```

#### Parameters

`isInteractAllowed` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<EInteractType, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SetIsPlayerInBattleQuery_System_Func_System_Boolean__"></a> SetIsPlayerInBattleQuery\(Func<bool\>\)

```csharp
void SetIsPlayerInBattleQuery(Func<bool> isPlayerInBattle)
```

#### Parameters

`isPlayerInBattle` [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SetIsSkillEnabledQuery_System_Func_System_Int32_System_Boolean__"></a> SetIsSkillEnabledQuery\(Func<int, bool\>\)

```csharp
void SetIsSkillEnabledQuery(Func<int, bool> isSkillEnabled)
```

#### Parameters

`isSkillEnabled` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[int](https://learn.microsoft.com/dotnet/api/system.int32), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="WukongMp_Sdk_Api_IWukongConfigurationApi_SetIsTamerNotSynchronizedQuery_System_Func_System_String_System_Boolean__"></a> SetIsTamerNotSynchronizedQuery\(Func<string, bool\>\)

```csharp
void SetIsTamerNotSynchronizedQuery(Func<string, bool> isTamerNotSynchronized)
```

#### Parameters

`isTamerNotSynchronized` [Func](https://learn.microsoft.com/dotnet/api/system.func-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>


