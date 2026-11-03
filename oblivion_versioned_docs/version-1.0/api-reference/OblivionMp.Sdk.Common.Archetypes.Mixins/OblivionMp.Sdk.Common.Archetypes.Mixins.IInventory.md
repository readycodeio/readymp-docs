---
title: 'Interface IInventory'
description: 'The item list of an entity, so one set of transfer rules serves a corpse and a chest.'
---
# Interface IInventory

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The item list of an entity, so one set of transfer rules serves a corpse and a chest.

```csharp
public interface IInventory
```

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_IInventory_ItemsCount"></a> ItemsCount

How many entries the inventory holds.

```csharp
int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_IInventory_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> AddItems\(in InventoryEntry\)

Adds <code class="paramref">value</code> to the end of the inventory.

```csharp
void AddItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_IInventory_GetItems_System_Int32_"></a> GetItems\(int\)

The entry at <code class="paramref">index</code>.

```csharp
InventoryEntry GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_IInventory_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> InsertItems\(int, in InventoryEntry\)

Inserts <code class="paramref">value</code> at <code class="paramref">index</code>.

```csharp
void InsertItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_IInventory_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

Removes the entry at <code class="paramref">index</code> and returns it.

```csharp
InventoryEntry RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry


