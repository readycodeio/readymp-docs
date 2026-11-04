---
title: 'Class SessionDifficulty'
description: 'The difficulty every client in the session runs at. Leaving a tier Unset keeps clients on the game''s own default tier (Adept).'
---
# Class SessionDifficulty

Namespace: [OblivionMP.SDK.Serverside](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

The difficulty every client in the session runs at.
Leaving a tier Unset keeps clients on the game's own default tier (Adept).

```csharp
public sealed class SessionDifficulty
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SessionDifficulty](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionDifficulty.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMP_SDK_Serverside_SessionDifficulty__ctor_ReadyM_SDK_Server_Entities_IEntities_"></a> SessionDifficulty\(IEntities\)

The difficulty every client in the session runs at.
Leaving a tier Unset keeps clients on the game's own default tier (Adept).

```csharp
public SessionDifficulty(IEntities entities)
```

#### Parameters

`entities` IEntities

## Methods

### <a id="OblivionMP_SDK_Serverside_SessionDifficulty_Set_ReadyM_Relay_Common_Oblivion_ECS_Values_DifficultyTier_ReadyM_Relay_Common_Oblivion_ECS_Values_DifficultyTier_"></a> Set\(DifficultyTier, DifficultyTier\)

Sets the difficulty tier for damage players deal and for damage they take.

```csharp
public void Set(DifficultyTier damageDealt, DifficultyTier damageTaken)
```

#### Parameters

`damageDealt` DifficultyTier

`damageTaken` DifficultyTier


