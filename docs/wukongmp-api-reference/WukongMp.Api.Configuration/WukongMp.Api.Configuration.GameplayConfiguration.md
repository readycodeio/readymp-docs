# Class GameplayConfiguration

Namespace: [WukongMp.Api.Configuration](../WukongMp.Api.Configuration/WukongMp.Api.Configuration.md)  
Assembly: WukongMp.Api.dll  

```csharp
[Obsolete("TODO: Make a more centralized configuration system.")]
public sealed class GameplayConfiguration
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GameplayConfiguration](../WukongMp.Api.Configuration/WukongMp.Api.Configuration.GameplayConfiguration.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="WukongMp_Api_Configuration_GameplayConfiguration__ctor_Microsoft_Extensions_Logging_ILogger_"></a> GameplayConfiguration\(ILogger\)

```csharp
public GameplayConfiguration(ILogger logger)
```

#### Parameters

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Properties

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_DeleteDestroyedTamersFromEcs"></a> DeleteDestroyedTamersFromEcs

```csharp
public bool DeleteDestroyedTamersFromEcs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_DisableCutscenes"></a> DisableCutscenes

```csharp
public bool DisableCutscenes { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_EnableCustomCameraArmLength"></a> EnableCustomCameraArmLength

```csharp
public bool EnableCustomCameraArmLength { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_IsStrongDamageImmueEnabled"></a> IsStrongDamageImmueEnabled

```csharp
public bool IsStrongDamageImmueEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_IsSupportMultiLockEnabled"></a> IsSupportMultiLockEnabled

```csharp
public bool IsSupportMultiLockEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_OverrideLocalPlayerTeamFromGlobalEntity"></a> OverrideLocalPlayerTeamFromGlobalEntity

```csharp
[Obsolete("To be replaced by data sync direction after refactoring")]
public bool OverrideLocalPlayerTeamFromGlobalEntity { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_SyncTamerTeamFromGameToEcs"></a> SyncTamerTeamFromGameToEcs

```csharp
[Obsolete("To be replaced by data sync direction after refactoring")]
public bool SyncTamerTeamFromGameToEcs { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


