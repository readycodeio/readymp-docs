---
title: 'Struct Journal'
description: 'The quests and compass targets in a player''s journal.'
---
# Struct Journal

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The quests and compass targets in a player's journal.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(Player), "")]
public readonly struct Journal : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_CompassTargetsCount"></a> CompassTargetsCount

```csharp
public int CompassTargetsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_QuestsCount"></a> QuestsCount

```csharp
public int QuestsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_AddCompassTargets_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> AddCompassTargets\(in QuestCompassTarget\)

```csharp
[Changes("Journal.Field.CompassTargets")]
public void AddCompassTargets(in QuestCompassTarget value)
```

#### Parameters

`value` QuestCompassTarget

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_AddQuests_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> AddQuests\(in QuestEntry\)

```csharp
[Changes("Journal.Field.Quests")]
public void AddQuests(in QuestEntry value)
```

#### Parameters

`value` QuestEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_ClearCompassTargets"></a> ClearCompassTargets\(\)

```csharp
[Changes("Journal.Field.CompassTargets")]
public void ClearCompassTargets()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_ClearQuests"></a> ClearQuests\(\)

```csharp
[Changes("Journal.Field.Quests")]
public void ClearQuests()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_ContainsCompassTargets_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> ContainsCompassTargets\(in QuestCompassTarget\)

```csharp
public bool ContainsCompassTargets(in QuestCompassTarget value)
```

#### Parameters

`value` QuestCompassTarget

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_ContainsQuests_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> ContainsQuests\(in QuestEntry\)

```csharp
public bool ContainsQuests(in QuestEntry value)
```

#### Parameters

`value` QuestEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_GetCompassTargets"></a> GetCompassTargets\(\)

```csharp
public NativeList<QuestCompassTarget>.ReadOnly GetCompassTargets()
```

#### Returns

 NativeList<QuestCompassTarget\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_GetCompassTargets_System_Int32_"></a> GetCompassTargets\(int\)

```csharp
public QuestCompassTarget GetCompassTargets(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 QuestCompassTarget

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_GetQuests"></a> GetQuests\(\)

```csharp
public NativeList<QuestEntry>.ReadOnly GetQuests()
```

#### Returns

 NativeList<QuestEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_GetQuests_System_Int32_"></a> GetQuests\(int\)

```csharp
public QuestEntry GetQuests(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 QuestEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_InsertCompassTargets_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> InsertCompassTargets\(int, in QuestCompassTarget\)

```csharp
[Changes("Journal.Field.CompassTargets")]
public void InsertCompassTargets(int index, in QuestCompassTarget value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` QuestCompassTarget

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_InsertQuests_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> InsertQuests\(int, in QuestEntry\)

```csharp
[Changes("Journal.Field.Quests")]
public void InsertQuests(int index, in QuestEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` QuestEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Journal Keep()
```

#### Returns

 [Journal](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Journal.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_RemoveAtCompassTargets_System_Int32_"></a> RemoveAtCompassTargets\(int\)

```csharp
[Changes("Journal.Field.CompassTargets")]
public QuestCompassTarget RemoveAtCompassTargets(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 QuestCompassTarget

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_RemoveAtQuests_System_Int32_"></a> RemoveAtQuests\(int\)

```csharp
[Changes("Journal.Field.Quests")]
public QuestEntry RemoveAtQuests(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 QuestEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_SetCompassTargets_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget___"></a> SetCompassTargets\(in NativeList<QuestCompassTarget\>\)

```csharp
[Changes("Journal.Field.CompassTargets")]
public void SetCompassTargets(in NativeList<QuestCompassTarget> value)
```

#### Parameters

`value` NativeList<QuestCompassTarget\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_SetCompassTargets_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> SetCompassTargets\(int, in QuestCompassTarget\)

```csharp
[Changes("Journal.Field.CompassTargets")]
public void SetCompassTargets(int index, in QuestCompassTarget value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` QuestCompassTarget

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_SetQuests_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry___"></a> SetQuests\(in NativeList<QuestEntry\>\)

```csharp
[Changes("Journal.Field.Quests")]
public void SetQuests(in NativeList<QuestEntry> value)
```

#### Parameters

`value` NativeList<QuestEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Journal_SetQuests_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> SetQuests\(int, in QuestEntry\)

```csharp
[Changes("Journal.Field.Quests")]
public void SetQuests(int index, in QuestEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` QuestEntry


