# Interface IWukongCheatsApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongCheatsApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_CheatsAllowed"></a> CheatsAllowed

```csharp
bool CheatsAllowed { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ResetCooldowns"></a> ResetCooldowns\(\)

```csharp
void ResetCooldowns()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ResetMana"></a> ResetMana\(\)

```csharp
void ResetMana()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_SetSpritCooldownTime_WukongMp_Sdk_Entities_ReadyMainCharacter_System_Single_"></a> SetSpritCooldownTime\(ReadyMainCharacter, float\)

```csharp
void SetSpritCooldownTime(ReadyMainCharacter mainEntity, float spiritCooldownTime)
```

#### Parameters

`mainEntity` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

`spiritCooldownTime` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleInfiniteMana"></a> ToggleInfiniteMana\(\)

```csharp
void ToggleInfiniteMana()
```

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleInfiniteTransform_WukongMp_Sdk_Entities_ReadyMainCharacter_"></a> ToggleInfiniteTransform\(ReadyMainCharacter\)

```csharp
void ToggleInfiniteTransform(ReadyMainCharacter mainEntity)
```

#### Parameters

`mainEntity` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleInfiniteVessel_WukongMp_Sdk_Entities_ReadyMainCharacter_"></a> ToggleInfiniteVessel\(ReadyMainCharacter\)

```csharp
void ToggleInfiniteVessel(ReadyMainCharacter mainEntity)
```

#### Parameters

`mainEntity` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)

### <a id="WukongMp_Sdk_Api_IWukongCheatsApi_ToggleNoSkillsCooldown_WukongMp_Sdk_Entities_ReadyMainCharacter_"></a> ToggleNoSkillsCooldown\(ReadyMainCharacter\)

```csharp
void ToggleNoSkillsCooldown(ReadyMainCharacter mainEntity)
```

#### Parameters

`mainEntity` [ReadyMainCharacter](../WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter.md)


