---
title: 'Class WorldRefs'
description: 'Finds the entities that stand for game refs and tells where they are.'
---
# Class WorldRefs

Namespace: [OblivionMp.Sdk.Serverside.World](../OblivionMp.Sdk.Serverside.World/OblivionMp.Sdk.Serverside.World.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Finds the entities that stand for game refs and tells where they are.

```csharp
public sealed class WorldRefs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WorldRefs](../OblivionMp.Sdk.Serverside.World/OblivionMp.Sdk.Serverside.World.WorldRefs.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs__ctor_ReadyM_SDK_Server_Entities_IEntities_"></a> WorldRefs\(IEntities\)

Finds the entities that stand for game refs and tells where they are.

```csharp
public WorldRefs(IEntities entities)
```

#### Parameters

`entities` IEntities

## Methods

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_IsCellMaster_ReadyM_Api_Idents_FullCellId_ReadyM_Api_Idents_PlayerId_"></a> IsCellMaster\(FullCellId, PlayerId\)

```csharp
public bool IsCellMaster(FullCellId cellId, PlayerId player)
```

#### Parameters

`cellId` FullCellId

`player` PlayerId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_IsInArea_ReadyM_SDK_Entities_EntityHandle_ReadyM_Api_Idents_AreaId_"></a> IsInArea\(EntityHandle, AreaId\)

```csharp
public bool IsInArea(EntityHandle entity, AreaId area)
```

#### Parameters

`entity` EntityHandle

`area` AreaId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_LeveledListExists_ReadyM_Relay_Common_Oblivion_FormId_"></a> LeveledListExists\(FormId\)

```csharp
public bool LeveledListExists(FormId id)
```

#### Parameters

`id` FormId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_TryFind_System_UInt32_ReadyM_SDK_Entities_EntityHandle__"></a> TryFind\(uint, out EntityHandle\)

```csharp
public bool TryFind(uint refId, out EntityHandle entity)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`entity` EntityHandle

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_TryFindActor_ReadyM_Api_Idents_PlayerId_System_UInt32_ReadyM_SDK_Entities_EntityHandle__"></a> TryFindActor\(PlayerId, uint, out EntityHandle\)

```csharp
public bool TryFindActor(PlayerId player, uint refId, out EntityHandle entity)
```

#### Parameters

`player` PlayerId

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`entity` EntityHandle

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_TryFindContainer_System_UInt32_OblivionMp_Sdk_Common_Archetypes_Container__"></a> TryFindContainer\(uint, out Container\)

```csharp
public bool TryFindContainer(uint refId, out Container container)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`container` Container

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_TryFindFlora_System_UInt32_OblivionMp_Sdk_Common_Archetypes_Flora__"></a> TryFindFlora\(uint, out Flora\)

```csharp
public bool TryFindFlora(uint refId, out Flora flora)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`flora` Flora

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_World_WorldRefs_TryFindNpc_System_UInt32_OblivionMp_Sdk_Common_Archetypes_Npc__"></a> TryFindNpc\(uint, out Npc\)

```csharp
public bool TryFindNpc(uint refId, out Npc npc)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`npc` Npc

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


