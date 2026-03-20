#  Class WukongApi

Namespace: [WukongMp.Sdk.Api](WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

The main entry point for accessing Wukong's API.
Provides access to all of the various APIs and services that WukongMP offers.

```csharp
public static class WukongApi
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WukongApi](WukongMp.Sdk.Api.WukongApi.md)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="WukongMp_Sdk_Api_WukongApi_Configuration"></a> Configuration

```csharp
[Obsolete("TODO: Make a more centralized configuration system.")]
public static GameplayConfiguration Configuration { get; }
```

#### Property Value

 GameplayConfiguration

### <a id="WukongMp_Sdk_Api_WukongApi_Console"></a> Console

```csharp
public static IWukongConsoleApi Console { get; }
```

#### Property Value

 [IWukongConsoleApi](WukongMp.Sdk.Api.IWukongConsoleApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Events"></a> Events

```csharp
public static IWukongEventApi Events { get; }
```

#### Property Value

 [IWukongEventApi](WukongMp.Sdk.Api.IWukongEventApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Files"></a> Files

```csharp
public static IWukongFileApi Files { get; }
```

#### Property Value

 [IWukongFileApi](WukongMp.Sdk.Api.IWukongFileApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Input"></a> Input

```csharp
public static IWukongInputApi Input { get; }
```

#### Property Value

 [IWukongInputApi](WukongMp.Sdk.Api.IWukongInputApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Local"></a> Local

```csharp
public static IWukongLocalApi Local { get; }
```

#### Property Value

 [IWukongLocalApi](WukongMp.Sdk.Api.IWukongLocalApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Saves"></a> Saves

```csharp
public static IWukongSaveRelay Saves { get; }
```

#### Property Value

 IWukongSaveRelay

### <a id="WukongMp_Sdk_Api_WukongApi_Services"></a> Services

```csharp
public static IDependencyContainer Services { get; }
```

#### Property Value

 IDependencyContainer

### <a id="WukongMp_Sdk_Api_WukongApi_Sync"></a> Sync

```csharp
public static IWukongSynchronizationApi Sync { get; }
```

#### Property Value

 [IWukongSynchronizationApi](WukongMp.Sdk.Api.IWukongSynchronizationApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Widgets"></a> Widgets

```csharp
public static IWukongWidgetApi Widgets { get; }
```

#### Property Value

 [IWukongWidgetApi](WukongMp.Sdk.Api.IWukongWidgetApi.md)

