# Class WukongApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

The main entry point for accessing Wukong's API.
Provides access to all of the various APIs and services that WukongMP offers.

```csharp
public static class WukongApi
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WukongApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.WukongApi.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="WukongMp_Sdk_Api_WukongApi_Chat"></a> Chat

API for interacting with the in-game chat.

```csharp
public static IWukongChatApi Chat { get; }
```

#### Property Value

 [IWukongChatApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongChatApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Cheats"></a> Cheats

Provides methods and properties for enabling and managing cheats in the game.

```csharp
public static IWukongCheatsApi Cheats { get; }
```

#### Property Value

 [IWukongCheatsApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongCheatsApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Configuration"></a> Configuration

Provides ways to configure various aspects othe game's behavior.
Will be replaced in the future with more specific configuration APIs, but for now serves as a catch-all for miscellaneous configuration options that don't fit anywhere else.
Hence, we do not document the individual configuration options here, as they are all subject to change and may be removed in the future without a major version bump.

```csharp
public static IWukongConfigurationApi Configuration { get; }
```

#### Property Value

 [IWukongConfigurationApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongConfigurationApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Console"></a> Console

API for the in-game console (F1).

```csharp
public static IWukongConsoleApi Console { get; }
```

#### Property Value

 [IWukongConsoleApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongConsoleApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Events"></a> Events

Provides events related to gameplay, player actions, and multiplayer interactions in Wukong Multiplayer.

```csharp
public static IWukongEventApi Events { get; }
```

#### Property Value

 [IWukongEventApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongEventApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Files"></a> Files

Provides methods related to manipulating files for Wukong mods, such as save files.

```csharp
public static IWukongFileApi Files { get; }
```

#### Property Value

 [IWukongFileApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongFileApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Input"></a> Input

Provides methods related to input, such as registering key binds.

```csharp
public static IWukongInputApi Input { get; }
```

#### Property Value

 [IWukongInputApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Local"></a> Local

Provides various utility methods not related to networking.

```csharp
public static IWukongLocalApi Local { get; }
```

#### Property Value

 [IWukongLocalApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongLocalApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_PvP"></a> PvP

API for PvP mode. Will be removed in the future when custom data sync and server-side scripting are implemented.

```csharp
public static IWukongPvpApi PvP { get; }
```

#### Property Value

 [IWukongPvpApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongPvpApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Saves"></a> Saves

API for managing world and player saves in Wukong Multiplayer.
Supports co-op style operations where each player has their own save file, and there's a shared world save file for all players.

```csharp
public static IWukongSaveApi Saves { get; }
```

#### Property Value

 [IWukongSaveApi](https://github.com/readycodeio/wukong\-csharp\-mod/blob/ee9f19ef1810c3437563f50da3d7fcdf8f3e22ed/WukongMp.Api/IWukongSaveApi.cs)

### <a id="WukongMp_Sdk_Api_WukongApi_Services"></a> Services

```csharp
public static IDependencyContainer Services { get; }
```

#### Property Value

 [IDependencyContainer](https://github.com/readycodeio/readym\-gameserver/blob/c12780df078c882058ee18410f12720cc6ee2a0a/src/ReadyM.Api/DI/IDependencyContainer.cs)

### <a id="WukongMp_Sdk_Api_WukongApi_Sync"></a> Sync

Provides methods related to synchronizing game state between players in a multiplayer session.

```csharp
public static IWukongSynchronizationApi Sync { get; }
```

#### Property Value

 [IWukongSynchronizationApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongSynchronizationApi.md)

### <a id="WukongMp_Sdk_Api_WukongApi_Widgets"></a> Widgets

Provides methods related to in-game widgets, such as chat messages, info messages, tips, and timers.

```csharp
public static IWukongWidgetApi Widgets { get; }
```

#### Property Value

 [IWukongWidgetApi](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongWidgetApi.md)


