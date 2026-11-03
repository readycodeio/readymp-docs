---
title: 'Struct Equipment'
description: 'The inventory of a character or NPC.'
---
# Struct Equipment

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The inventory of a character or NPC.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct Equipment : IInventory, IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

[IInventory](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.IInventory.md), 
IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_CurrentPoison"></a> CurrentPoison

The poison on the equipped weapon.

```csharp
public NetworkFormId CurrentPoison { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_IsServerSeeded"></a> IsServerSeeded

Set by the server when it writes an npc's items, so the owner client follows the list even when it is empty.

```csharp
public bool IsServerSeeded { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_ItemsCount"></a> ItemsCount

How many entries the inventory holds.

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> AddItems\(in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void AddItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_ClearItems"></a> ClearItems\(\)

```csharp
[Changes("Equipment.Field.Items")]
public void ClearItems()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> ContainsItems\(in InventoryEntry\)

```csharp
public bool ContainsItems(in InventoryEntry value)
```

#### Parameters

`value` InventoryEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_GetItems"></a> GetItems\(\)

```csharp
public NativeList<InventoryEntry>.ReadOnly GetItems()
```

#### Returns

 NativeList<InventoryEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_GetItems_System_Int32_"></a> GetItems\(int\)

The entry at <code class="paramref">index</code>.

```csharp
public InventoryEntry GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> InsertItems\(int, in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void InsertItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Equipment Keep()
```

#### Returns

 [Equipment](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

Removes the entry at <code class="paramref">index</code> and returns it.

```csharp
[Changes("Equipment.Field.Items")]
public InventoryEntry RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 InventoryEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry___"></a> SetItems\(in NativeList<InventoryEntry\>\)

```csharp
[Changes("Equipment.Field.Items")]
public void SetItems(in NativeList<InventoryEntry> value)
```

#### Parameters

`value` NativeList<InventoryEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> SetItems\(int, in InventoryEntry\)

```csharp
[Changes("Equipment.Field.Items")]
public void SetItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` InventoryEntry


