---
title: 'Class ServerConfig'
description: 'The SDK''s server settings, from config.json in its server folder.'
---
# Class ServerConfig

Namespace: [OblivionMP.SDK.Serverside](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

The SDK's server settings, from <code>config.json</code> in its server folder.

```csharp
[ModConfig("config.json")]
public sealed class ServerConfig
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerConfig](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.ServerConfig.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMP_SDK_Serverside_ServerConfig__ctor"></a> ServerConfig\(\)

```csharp
public ServerConfig()
```

## Properties

### <a id="OblivionMP_SDK_Serverside_ServerConfig_AllowTimeSkip"></a> AllowTimeSkip

Skips the world's time when a player waits or sleeps. Off leaves the request to server mods. Always on in a
debug build.

```csharp
public bool AllowTimeSkip { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


