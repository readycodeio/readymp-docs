---
title: 'Class WorldClock'
description: 'Advances the world''s clock while at least one player is in game. The clock component is the source of truth, so writing to it from elsewhere, such as a time skip, carries on from where it was set. On a fresh server, the time starts at 6:00 on Morndas, 27th of Last Seed, 3E 433.'
---
# Class WorldClock

Namespace: [OblivionMP.SDK.Serverside.Systems](../OblivionMP.SDK.Serverside.Systems/OblivionMP.SDK.Serverside.Systems.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

Advances the world's clock while at least one player is in game.
The clock component is the source of truth, so writing to it from elsewhere, such as a time skip, carries on from where it was set.
On a fresh server, the time starts at 6:00 on Morndas, 27th of Last Seed, 3E 433.

```csharp
[Service]
public sealed class WorldClock : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WorldClock](../OblivionMP.SDK.Serverside.Systems/OblivionMP.SDK.Serverside.Systems.WorldClock.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

Want to implement your own global time logic?
Disable this service using **IServices** and create your own.
It needs to properly advance GameDay and TimeOfDayMinutes properties of the **GameTime** mixin.

## Constructors

### <a id="OblivionMP_SDK_Serverside_Systems_WorldClock__ctor_ReadyM_SDK_Server_Entities_IEntities_ReadyM_SDK_Server_Events_IServerEvents_"></a> WorldClock\(IEntities, IServerEvents\)

Advances the world's clock while at least one player is in game.
The clock component is the source of truth, so writing to it from elsewhere, such as a time skip, carries on from where it was set.
On a fresh server, the time starts at 6:00 on Morndas, 27th of Last Seed, 3E 433.

```csharp
public WorldClock(IEntities entities, IServerEvents serverEvents)
```

#### Parameters

`entities` IEntities

`serverEvents` IServerEvents

#### Remarks

Want to implement your own global time logic?
Disable this service using **IServices** and create your own.
It needs to properly advance GameDay and TimeOfDayMinutes properties of the **GameTime** mixin.

## Properties

### <a id="OblivionMP_SDK_Serverside_Systems_WorldClock_Enabled"></a> Enabled

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMP_SDK_Serverside_Systems_WorldClock_NowGameHours"></a> NowGameHours\(\)

Game hours since the game started.

```csharp
public float NowGameHours()
```

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)


