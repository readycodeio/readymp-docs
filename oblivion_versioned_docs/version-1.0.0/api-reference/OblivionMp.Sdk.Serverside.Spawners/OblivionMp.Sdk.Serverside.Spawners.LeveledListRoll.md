---
title: 'Class LeveledListRoll'
description: 'Rolls leveled lists the way the game does.'
---
# Class LeveledListRoll

Namespace: [OblivionMp.Sdk.Serverside.Spawners](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Rolls leveled lists the way the game does.

```csharp
public sealed class LeveledListRoll
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LeveledListRoll](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.LeveledListRoll.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRoll__ctor_ReadyM_SDK_Server_Entities_IEntities_System_Random_System_Int32_"></a> LeveledListRoll\(IEntities, Random, int\)

Rolls leveled lists the way the game does.

```csharp
public LeveledListRoll(IEntities entities, Random random, int levelDifferenceMax)
```

#### Parameters

`entities` IEntities

`random` [Random](https://learn.microsoft.com/dotnet/api/system.random)

`levelDifferenceMax` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Fields

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRoll_EngineLevelDifferenceMax"></a> EngineLevelDifferenceMax

The game's limit on how far below the level an entry may be when a list picks from all levels.

```csharp
public const int EngineLevelDifferenceMax = 8
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRoll_Roll_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_System_Int32_"></a> Roll\(FormId, int, int\)

Rolls the list <code class="paramref">count</code> times at <code class="paramref">level</code>, resolving nested lists.

```csharp
public LeveledListRollResult Roll(FormId listId, int level, int count)
```

#### Parameters

`listId` FormId

`level` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [LeveledListRollResult](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.LeveledListRollResult.md)


