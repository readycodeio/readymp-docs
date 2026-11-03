---
title: 'Class ContainerRoll'
description: 'Rolls a container''s contents from its template the way the engine''s RollLeveledItems does.'
---
# Class ContainerRoll

Namespace: [OblivionMp.Sdk.Serverside.Items](../OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Rolls a container's contents from its template the way the engine's RollLeveledItems does.

```csharp
public sealed class ContainerRoll
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ContainerRoll](../OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.ContainerRoll.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Items_ContainerRoll__ctor_OblivionMp_Sdk_Serverside_Spawners_LeveledListRoll_OblivionMp_Sdk_Serverside_Items_Inventories_ReadyM_SDK_Server_Entities_IEntities_Microsoft_Extensions_Logging_ILogger_"></a> ContainerRoll\(LeveledListRoll, Inventories, IEntities, ILogger\)

Rolls a container's contents from its template the way the engine's RollLeveledItems does.

```csharp
public ContainerRoll(LeveledListRoll lists, Inventories inventories, IEntities entities, ILogger logger)
```

#### Parameters

`lists` [LeveledListRoll](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.LeveledListRoll.md)

`inventories` [Inventories](../OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.Inventories.md)

`entities` IEntities

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Items_ContainerRoll_MercantileLevelOffset_System_Int32_"></a> MercantileLevelOffset\(int\)

How many levels a visitor's Mercantile skill adds when a merchant's container is rolled.

```csharp
public static int MercantileLevelOffset(int mercantile)
```

#### Parameters

`mercantile` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Items_ContainerRoll_Roll_OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_ReadyM_Api_Idents_PlayerId_OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerItems_"></a> Roll\(ContainerTemplate, PlayerId, ContainerItems\)

Adds the container's rolled contents to <code class="paramref">into</code>, at the visitor's level, raised for a merchant's container by their Mercantile skill.

```csharp
public void Roll(ContainerTemplate containerTemplate, PlayerId visitor, ContainerItems into)
```

#### Parameters

`containerTemplate` [ContainerTemplate](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.ContainerTemplate.md)

`visitor` PlayerId

`into` ContainerItems

### <a id="OblivionMp_Sdk_Serverside_Items_ContainerRoll_Roll_OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_System_Int32_OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerItems_"></a> Roll\(ContainerTemplate, int, ContainerItems\)

Adds the container's rolled contents to <code class="paramref">into</code>, with leveled lists rolled at <code class="paramref">level</code>.

```csharp
public void Roll(ContainerTemplate containerTemplate, int level, ContainerItems into)
```

#### Parameters

`containerTemplate` [ContainerTemplate](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.ContainerTemplate.md)

`level` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`into` ContainerItems


