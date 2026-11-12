---
title: 'Class WorldRefs'
description: 'Finds the entities that stand for game refs and tells where they are.'
---
# Class WorldRefs

Namespace: [OblivionMP.SDK.Serverside.World](../OblivionMP.SDK.Serverside.World/OblivionMP.SDK.Serverside.World.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

Finds the entities that stand for game refs and tells where they are.

```csharp
public sealed class WorldRefs
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WorldRefs](../OblivionMP.SDK.Serverside.World/OblivionMP.SDK.Serverside.World.WorldRefs.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs__ctor_ReadyM_SDK_Server_Entities_IEntities_"></a> WorldRefs\(IEntities\)

Finds the entities that stand for game refs and tells where they are.

```csharp
public WorldRefs(IEntities entities)
```

#### Parameters

`entities` IEntities

## Methods

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_IsCellMaster_ReadyM_Api_Idents_FullCellId_ReadyM_Api_Idents_PlayerId_"></a> IsCellMaster\(FullCellId, PlayerId\)

```csharp
public bool IsCellMaster(FullCellId cellId, PlayerId player)
```

#### Parameters

`cellId` FullCellId

`player` PlayerId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_IsInArea_ReadyM_SDK_Entities_EntityHandle_ReadyM_Api_Idents_AreaId_"></a> IsInArea\(EntityHandle, AreaId\)

```csharp
public bool IsInArea(EntityHandle entity, AreaId area)
```

#### Parameters

`entity` EntityHandle

`area` AreaId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_LeveledListExists_ReadyM_Relay_Common_Oblivion_FormId_"></a> LeveledListExists\(FormId\)

```csharp
public bool LeveledListExists(FormId id)
```

#### Parameters

`id` FormId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFind_System_UInt32_ReadyM_SDK_Entities_EntityHandle__"></a> TryFind\(uint, out EntityHandle\)

```csharp
public bool TryFind(uint refId, out EntityHandle entity)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`entity` EntityHandle

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindActor_ReadyM_Api_Idents_PlayerId_System_UInt32_ReadyM_SDK_Entities_EntityHandle__"></a> TryFindActor\(PlayerId, uint, out EntityHandle\)

```csharp
public bool TryFindActor(PlayerId player, uint refId, out EntityHandle entity)
```

#### Parameters

`player` PlayerId

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`entity` EntityHandle

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindContainer_System_UInt32_OblivionMP_SDK_Common_Archetypes_Container__"></a> TryFindContainer\(uint, out Container\)

```csharp
public bool TryFindContainer(uint refId, out Container container)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`container` Container

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindDoor_System_UInt32_OblivionMP_SDK_Common_Archetypes_Door__"></a> TryFindDoor\(uint, out Door\)

```csharp
public bool TryFindDoor(uint refId, out Door door)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`door` Door

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindFlora_System_UInt32_OblivionMP_SDK_Common_Archetypes_Flora__"></a> TryFindFlora\(uint, out Flora\)

```csharp
public bool TryFindFlora(uint refId, out Flora flora)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`flora` Flora

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindLinkedDoor_ReadyM_SDK_Entities_EntityHandle_OblivionMP_SDK_Common_Archetypes_Door__"></a> TryFindLinkedDoor\(EntityHandle, out Door\)

The other door of a load door pair, which shares its lock.

```csharp
public bool TryFindLinkedDoor(EntityHandle door, out Door partner)
```

#### Parameters

`door` EntityHandle

`partner` Door

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindLock_System_UInt32_ReadyM_SDK_Entities_EntityHandle__"></a> TryFindLock\(uint, out EntityHandle\)

```csharp
public bool TryFindLock(uint refId, out EntityHandle holder)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`holder` EntityHandle

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_World_WorldRefs_TryFindNpc_System_UInt32_OblivionMP_SDK_Common_Archetypes_Npc__"></a> TryFindNpc\(uint, out Npc\)

```csharp
public bool TryFindNpc(uint refId, out Npc npc)
```

#### Parameters

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`npc` Npc

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


