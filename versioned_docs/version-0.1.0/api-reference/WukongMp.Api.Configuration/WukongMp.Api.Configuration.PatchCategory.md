# Class PatchCategory

Namespace: [WukongMp.Api.Configuration](../WukongMp.Api.Configuration/WukongMp.Api.Configuration.md)  
Assembly: WukongMp.Api.dll  

Category for Harmony patches.
Each patch must be assigned to a category.

```csharp
public static class PatchCategory
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[PatchCategory](../WukongMp.Api.Configuration/WukongMp.Api.Configuration.PatchCategory.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="WukongMp_Api_Configuration_PatchCategory_Connected"></a> Connected

Patches in this category are only enabled when the player is connected to the server.
NOTE: In the current version of the SDK, this category is the same as **Global**.
In the future, we will add support for enabling/disabling these patches based on the connection state of the player.

```csharp
public const string Connected = "Connected"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Api_Configuration_PatchCategory_Disabled"></a> Disabled

Patches in this category are not enabled.

```csharp
public const string Disabled = "Disabled"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Api_Configuration_PatchCategory_Global"></a> Global

Patches in this category are enabled at all times.

```csharp
public const string Global = "Global"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


