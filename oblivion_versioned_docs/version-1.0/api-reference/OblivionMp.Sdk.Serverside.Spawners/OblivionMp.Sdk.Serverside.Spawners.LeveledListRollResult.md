---
title: 'Class LeveledListRollResult'
description: 'What a leveled list roll came out with.'
---
# Class LeveledListRollResult

Namespace: [OblivionMp.Sdk.Serverside.Spawners](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

What a leveled list roll came out with.

```csharp
public sealed class LeveledListRollResult
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[LeveledListRollResult](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.LeveledListRollResult.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRollResult__ctor"></a> LeveledListRollResult\(\)

```csharp
public LeveledListRollResult()
```

## Properties

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRollResult_Creatures"></a> Creatures

The creatures and NPCs rolled.

```csharp
public List<RolledCreature> Creatures { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[RolledCreature](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md)\>

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRollResult_Items"></a> Items

The items rolled.

```csharp
public List<RolledItem> Items { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[RolledItem](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)\>

### <a id="OblivionMp_Sdk_Serverside_Spawners_LeveledListRollResult_MissingLists"></a> MissingLists

Lists the server has no template for, which rolled nothing.

```csharp
public List<FormId> MissingLists { get; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<FormId\>


