# Class SDK

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

Provides access to the OblivionMp SDK services and APIs.

```csharp
public static class SDK
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SDK](../OblivionMp.Sdk/OblivionMp.Sdk.SDK.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_SDK_Chat"></a> Chat

API for interacting with the in-game chat.

```csharp
public static IOblivionChatApi Chat { get; }
```

#### Property Value

 [IOblivionChatApi](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionChatApi.md)

### <a id="OblivionMp_Sdk_SDK_GameMessage"></a> GameMessage

Provides methods related to in-game info messages.

```csharp
public static IOblivionGameMessageApi GameMessage { get; }
```

#### Property Value

 [IOblivionGameMessageApi](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionGameMessageApi.md)

### <a id="OblivionMp_Sdk_SDK_Input"></a> Input

Provides methods related to input, such as registering key binds.

```csharp
public static IInputApi Input { get; }
```

#### Property Value

 [IInputApi](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Sdk.Common/Api/IInputApi.cs)

### <a id="OblivionMp_Sdk_SDK_Markers"></a> Markers

Creates and manages local markers over player characters.

```csharp
public static IMarkerApi Markers { get; }
```

#### Property Value

 [IMarkerApi](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IMarkerApi.md)

### <a id="OblivionMp_Sdk_SDK_Services"></a> Services

Dependency injection container interface for registering and resolving services.

```csharp
public static IDependencyContainer Services { get; }
```

#### Property Value

 [IDependencyContainer](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/DI/IDependencyContainer.cs)

#### Remarks

Registrations are additive by default, so several mods can each contribute an
implementation of the same service and all of them are returned by
**ResolveAll%60%601**. Pass <code>replace: true</code> to take over a service
another mod or the SDK already registered, which drops every existing
registration of that service type.

### <a id="OblivionMp_Sdk_SDK_Sync"></a> Sync

Networked entity synchronization API. Provides access to the synchronized state of the game world.

```csharp
public static IOblivionSyncApi Sync { get; }
```

#### Property Value

 [IOblivionSyncApi](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionSyncApi.md)


