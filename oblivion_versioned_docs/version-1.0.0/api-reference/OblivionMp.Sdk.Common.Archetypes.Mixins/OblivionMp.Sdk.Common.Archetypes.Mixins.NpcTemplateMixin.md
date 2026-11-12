---
title: 'Struct NpcTemplateMixin'
description: 'An NPC''s record from the game files.'
---
# Struct NpcTemplateMixin

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

An NPC's record from the game files.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
public readonly struct NpcTemplateMixin : IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_CalcMax"></a> CalcMax

The highest level when the level is relative to the player's, or 0 for no limit.

```csharp
public ushort CalcMax { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_CalcMin"></a> CalcMin

The lowest level when the level is relative to the player's, or 0 for no limit.

```csharp
public ushort CalcMin { get; set; }
```

#### Property Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_Id"></a> Id

The NPC's form id.

```csharp
public FormId Id { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_ItemsCount"></a> ItemsCount

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_Level"></a> Level

The NPC's level, or its offset from the player's level when **PcLevelOffset** is set.

```csharp
public int Level { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_PcLevelOffset"></a> PcLevelOffset

Whether **Level** is relative to the player's level.

```csharp
public bool PcLevelOffset { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> AddItems\(in BaseContainerItem\)

```csharp
[Changes("NpcTemplateMixin.Field.Items")]
public void AddItems(in BaseContainerItem value)
```

#### Parameters

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_ClearItems"></a> ClearItems\(\)

```csharp
[Changes("NpcTemplateMixin.Field.Items")]
public void ClearItems()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> ContainsItems\(in BaseContainerItem\)

```csharp
public bool ContainsItems(in BaseContainerItem value)
```

#### Parameters

`value` BaseContainerItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_GetItems"></a> GetItems\(\)

```csharp
public NativeList<BaseContainerItem>.ReadOnly GetItems()
```

#### Returns

 NativeList<BaseContainerItem\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_GetItems_System_Int32_"></a> GetItems\(int\)

```csharp
public BaseContainerItem GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> InsertItems\(int, in BaseContainerItem\)

```csharp
[Changes("NpcTemplateMixin.Field.Items")]
public void InsertItems(int index, in BaseContainerItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public NpcTemplateMixin Keep()
```

#### Returns

 [NpcTemplateMixin](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.NpcTemplateMixin.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

```csharp
[Changes("NpcTemplateMixin.Field.Items")]
public BaseContainerItem RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem___"></a> SetItems\(in NativeList<BaseContainerItem\>\)

```csharp
[Changes("NpcTemplateMixin.Field.Items")]
public void SetItems(in NativeList<BaseContainerItem> value)
```

#### Parameters

`value` NativeList<BaseContainerItem\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_NpcTemplateMixin_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> SetItems\(int, in BaseContainerItem\)

```csharp
[Changes("NpcTemplateMixin.Field.Items")]
public void SetItems(int index, in BaseContainerItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` BaseContainerItem


