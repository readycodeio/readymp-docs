---
title: 'Interface IItems'
description: 'Drops items into the world from the client.'
---
# Interface IItems

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

Drops items into the world from the client.

```csharp
public interface IItems
```

## Methods

### <a id="OblivionMp_Sdk_IItems_SpawnDroppedItem_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_System_Numerics_Vector3_"></a> SpawnDroppedItem\(FormId, int, Vector3\)

Spawns a dropped item in the game world at the specified position.

```csharp
void SpawnDroppedItem(FormId item, int stackSize, Vector3 position)
```

#### Parameters

`item` FormId

The item FormId.

`stackSize` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The number of items in the stack.

`position` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

The position in the game world where the item should be spawned.


