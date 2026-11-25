---
title: 'Class ClientConfig'
description: 'The SDK''s client settings, from config.json in its client folder.'
---
# Class ClientConfig

Namespace: [OblivionMP.SDK](../OblivionMP.SDK/OblivionMP.SDK.md)  
Assembly: OblivionMP.SDK.dll  

The SDK's client settings, from <code>config.json</code> in its client folder.

```csharp
[ModConfig("config.json")]
public sealed class ClientConfig
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ClientConfig](../OblivionMP.SDK/OblivionMP.SDK.ClientConfig.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMP_SDK_ClientConfig__ctor"></a> ClientConfig\(\)

```csharp
public ClientConfig()
```

## Properties

### <a id="OblivionMP_SDK_ClientConfig_HideWaitMenu"></a> HideWaitMenu

Keeps the wait menu closed: the wait key does nothing and a bed only offers a ready level-up. Shown, confirming
it asks the server to skip time, which happens only if the server allows it. Ignored, so always shown, in a
debug build.

```csharp
public bool HideWaitMenu { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


