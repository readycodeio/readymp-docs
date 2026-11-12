---
title: 'Class SessionRespawn'
description: 'When the server refills a cell with the items, plants, container loot and spawns it was seeded with. A cell refills once IntervalGameHours of game time have passed since it was last filled.'
---
# Class SessionRespawn

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

When the server refills a cell with the items, plants, container loot and spawns it was seeded with. A cell refills
once **IntervalGameHours** of game time have passed since it was last filled.

```csharp
public sealed class SessionRespawn
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SessionRespawn](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionRespawn.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

The interval is not saved, so a mod that changes it sets it again every time the server starts.

## Constructors

### <a id="OblivionMp_Sdk_Serverside_SessionRespawn__ctor"></a> SessionRespawn\(\)

```csharp
public SessionRespawn()
```

## Fields

### <a id="OblivionMp_Sdk_Serverside_SessionRespawn_DefaultIntervalGameHours"></a> DefaultIntervalGameHours

The game's own interval, 72 game hours.

```csharp
public const float DefaultIntervalGameHours = 72
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### <a id="OblivionMp_Sdk_Serverside_SessionRespawn_IntervalGameHours"></a> IntervalGameHours

The game hours between two refills of a cell.

```csharp
public float IntervalGameHours { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Serverside_SessionRespawn_RespawnNow_ReadyM_SDK_Archetypes_Core_Cell_"></a> RespawnNow\(Cell\)

Refills <code class="paramref">cell</code> on the next server tick however much of its interval is left, and starts its
interval again from then. A cell that has not been seeded yet is filled by its first seeding instead.

```csharp
public void RespawnNow(Cell cell)
```

#### Parameters

`cell` Cell

### <a id="OblivionMp_Sdk_Serverside_SessionRespawn_SetInterval_System_Single_"></a> SetInterval\(float\)

Sets the game hours between two refills of every cell.

```csharp
public void SetInterval(float gameHours)
```

#### Parameters

`gameHours` [float](https://learn.microsoft.com/dotnet/api/system.single)


