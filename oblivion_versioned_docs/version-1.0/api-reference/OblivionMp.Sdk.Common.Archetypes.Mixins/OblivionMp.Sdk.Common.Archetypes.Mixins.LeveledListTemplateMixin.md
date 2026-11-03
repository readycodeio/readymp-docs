---
title: 'Struct LeveledListTemplateMixin'
description: 'A leveled list from the game files.'
---
# Struct LeveledListTemplateMixin

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A leveled list from the game files.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
public readonly struct LeveledListTemplateMixin : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_CalcAllLevels"></a> CalcAllLevels

Whether to pick from every entry up to the level rather than only the nearest level.

```csharp
public bool CalcAllLevels { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_CalcEachCount"></a> CalcEachCount

Whether each of the count is rolled separately.

```csharp
public bool CalcEachCount { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_ChanceNone"></a> ChanceNone

The chance, in percent, that the list gives nothing.

```csharp
public byte ChanceNone { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_CreatureTemplate"></a> CreatureTemplate

The creature template the list names in the game files.

```csharp
public FormId CreatureTemplate { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_EntriesCount"></a> EntriesCount

```csharp
public int EntriesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_Id"></a> Id

The leveled list's form id.

```csharp
public FormId Id { get; set; }
```

#### Property Value

 FormId

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_AddEntries_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> AddEntries\(in LeveledListItem\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void AddEntries(in LeveledListItem value)
```

#### Parameters

`value` LeveledListItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_ClearEntries"></a> ClearEntries\(\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void ClearEntries()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_ContainsEntries_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> ContainsEntries\(in LeveledListItem\)

```csharp
public bool ContainsEntries(in LeveledListItem value)
```

#### Parameters

`value` LeveledListItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_GetEntries"></a> GetEntries\(\)

```csharp
public NativeList<LeveledListItem>.ReadOnly GetEntries()
```

#### Returns

 NativeList<LeveledListItem\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_GetEntries_System_Int32_"></a> GetEntries\(int\)

```csharp
public LeveledListItem GetEntries(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 LeveledListItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_InsertEntries_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> InsertEntries\(int, in LeveledListItem\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void InsertEntries(int index, in LeveledListItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` LeveledListItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LeveledListTemplateMixin Keep()
```

#### Returns

 [LeveledListTemplateMixin](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.LeveledListTemplateMixin.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_RemoveAtEntries_System_Int32_"></a> RemoveAtEntries\(int\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public LeveledListItem RemoveAtEntries(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 LeveledListItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_SetEntries_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem___"></a> SetEntries\(in NativeList<LeveledListItem\>\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void SetEntries(in NativeList<LeveledListItem> value)
```

#### Parameters

`value` NativeList<LeveledListItem\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_LeveledListTemplateMixin_SetEntries_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> SetEntries\(int, in LeveledListItem\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void SetEntries(int index, in LeveledListItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` LeveledListItem


