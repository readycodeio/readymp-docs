---
title: 'Class SessionScaling'
description: 'The level every client in the session resolves leveled lists at (creature spawns, container loot). The level blends between the lowest and the highest player level in the session: 0 follows the lowest, 1 the highest, 0.5 sits halfway. Until one of the setters is called each client keeps its own level.'
---
# Class SessionScaling

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

The level every client in the session resolves leveled lists at (creature spawns, container loot).
The level blends between the lowest and the highest player level in the session: 0 follows the lowest,
1 the highest, 0.5 sits halfway. Until one of the setters is called each client keeps its own level.

```csharp
public sealed class SessionScaling
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SessionScaling](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionScaling.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_SessionScaling__ctor_ReadyM_SDK_Server_Entities_IEntities_"></a> SessionScaling\(IEntities\)

The level every client in the session resolves leveled lists at (creature spawns, container loot).
The level blends between the lowest and the highest player level in the session: 0 follows the lowest,
1 the highest, 0.5 sits halfway. Until one of the setters is called each client keeps its own level.

```csharp
public SessionScaling(IEntities entities)
```

#### Parameters

`entities` IEntities

## Methods

### <a id="OblivionMp_Sdk_Serverside_SessionScaling_CurrentLevel"></a> CurrentLevel\(\)

The level leveled lists roll at now, or 0 while unset or before any player has a level.

```csharp
public ushort CurrentLevel()
```

#### Returns

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Serverside_SessionScaling_SetTo_System_Single_"></a> SetTo\(float\)

Rolls leveled lists at <code class="paramref">levelBlend</code> between the lowest (0) and the highest (1) player level.

```csharp
public void SetTo(float levelBlend)
```

#### Parameters

`levelBlend` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Serverside_SessionScaling_SetToHighestLevel"></a> SetToHighestLevel\(\)

Rolls leveled lists at the highest player level in the session.

```csharp
public void SetToHighestLevel()
```

### <a id="OblivionMp_Sdk_Serverside_SessionScaling_SetToLowestLevel"></a> SetToLowestLevel\(\)

Rolls leveled lists at the lowest player level in the session.

```csharp
public void SetToLowestLevel()
```

### <a id="OblivionMp_Sdk_Serverside_SessionScaling_SetToMidLevel"></a> SetToMidLevel\(\)

Rolls leveled lists halfway between the lowest and the highest player level.

```csharp
public void SetToMidLevel()
```


