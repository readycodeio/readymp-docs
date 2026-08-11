# Interface IWukongCheatsApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides methods and properties for enabling and managing cheats in the game.

```csharp
public interface IWukongCheatsApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_CheatsAllowed"></a> CheatsAllowed

Gets a value indicating whether cheats are allowed.

```csharp
bool CheatsAllowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ResetCooldowns"></a> ResetCooldowns\(\)

Resets all cooldowns for the player.

```csharp
void ResetCooldowns()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ResetMana"></a> ResetMana\(\)

Resets the player's mana to its maximum value.

```csharp
void ResetMana()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_SetSpritCooldownTime_System_Single_"></a> SetSpritCooldownTime\(float\)

Sets the cooldown time for the player's spirit abilities.

```csharp
void SetSpritCooldownTime(float spiritCooldownTime)
```

#### Parameters

`spiritCooldownTime` [float](https://learn.microsoft.com/dotnet/api/system.single)

The cooldown time to set, in seconds.

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleInfiniteMana"></a> ToggleInfiniteMana\(\)

Toggles infinite mana for the player.

```csharp
void ToggleInfiniteMana()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleInfiniteTransform"></a> ToggleInfiniteTransform\(\)

Toggles infinite transformation for the player.

```csharp
void ToggleInfiniteTransform()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleInfiniteVessel"></a> ToggleInfiniteVessel\(\)

Toggles infinite vessel usage for the player.

```csharp
void ToggleInfiniteVessel()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleNoSkillsCooldown"></a> ToggleNoSkillsCooldown\(\)

Toggles no cooldowns for skills for the player.

```csharp
void ToggleNoSkillsCooldown()
```


