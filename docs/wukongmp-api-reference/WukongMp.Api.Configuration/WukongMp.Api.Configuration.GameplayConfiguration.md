# Class GameplayConfiguration

Namespace: [WukongMp.Api.Configuration](../WukongMp.Api.Configuration/WukongMp.Api.Configuration.md)  
Assembly: WukongMp.Api.dll  

Configuration class for gameplay-related settings and queries.

```csharp
[Obsolete("Will be replaced with a configuration file in the future.")]
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

Configuration class for gameplay-related settings and queries.

```csharp
public GameplayConfiguration(ILogger logger)
```

#### Parameters

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Properties

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_EnableCustomCameraArmLength"></a> EnableCustomCameraArmLength

When enabled, allows for a custom camera arm length to be set, which can affect how close or far the camera is from the character.
This is <code>true</code> in PvP and <code>false</code> in co-op.

```csharp
public bool EnableCustomCameraArmLength { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_IsStrongDamageImmueEnabled"></a> IsStrongDamageImmueEnabled

Is immunity to strong damage enabled?
This would prevent characters from being one-shot by powerful attacks, providing a more balanced gameplay experience.
This is <code>true</code> in PvP and <code>false</code> in co-op.

```csharp
public bool IsStrongDamageImmueEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_Configuration_GameplayConfiguration_IsSupportMultiLockEnabled"></a> IsSupportMultiLockEnabled

Can secondary lock targets (other than the character's body) be locked when using the camera lock-on feature?
This is <code>true</code> in co-op and <code>false</code> in PvP.

```csharp
public bool IsSupportMultiLockEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


