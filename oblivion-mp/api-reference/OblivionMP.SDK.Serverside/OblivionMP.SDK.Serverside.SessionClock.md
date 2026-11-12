---
title: 'Class SessionClock'
description: 'The session''s game time, read from an area''s clock.'
---
# Class SessionClock

Namespace: [OblivionMP.SDK.Serverside](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

The session's game time, read from an area's clock.

```csharp
public sealed class SessionClock
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SessionClock](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionClock.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMP_SDK_Serverside_SessionClock__ctor_ReadyM_SDK_Server_Entities_IEntities_"></a> SessionClock\(IEntities\)

The session's game time, read from an area's clock.

```csharp
public SessionClock(IEntities entities)
```

#### Parameters

`entities` IEntities

## Methods

### <a id="OblivionMP_SDK_Serverside_SessionClock_NowGameHours"></a> NowGameHours\(\)

Game hours since the game started, or 0 before any area exists.

```csharp
public float NowGameHours()
```

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)


