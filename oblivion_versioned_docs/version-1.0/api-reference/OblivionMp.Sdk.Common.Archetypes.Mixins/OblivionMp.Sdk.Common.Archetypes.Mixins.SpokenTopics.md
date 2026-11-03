---
title: 'Struct SpokenTopics'
description: 'The mod-added dialogue topics a player has spoken.'
---
# Struct SpokenTopics

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The mod-added dialogue topics a player has spoken.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
[Extends(typeof(Player), "Spoken")]
public readonly struct SpokenTopics : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_TopicsCount"></a> TopicsCount

```csharp
public int TopicsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_AddTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> AddTopics\(in SpokenTopicEntry\)

```csharp
[Changes("SpokenTopics.Field.Topics")]
public void AddTopics(in SpokenTopicEntry value)
```

#### Parameters

`value` SpokenTopicEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_ClearTopics"></a> ClearTopics\(\)

```csharp
[Changes("SpokenTopics.Field.Topics")]
public void ClearTopics()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_ContainsTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> ContainsTopics\(in SpokenTopicEntry\)

```csharp
public bool ContainsTopics(in SpokenTopicEntry value)
```

#### Parameters

`value` SpokenTopicEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_GetTopics"></a> GetTopics\(\)

```csharp
public NativeList<SpokenTopicEntry>.ReadOnly GetTopics()
```

#### Returns

 NativeList<SpokenTopicEntry\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_GetTopics_System_Int32_"></a> GetTopics\(int\)

```csharp
public SpokenTopicEntry GetTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SpokenTopicEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_InsertTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> InsertTopics\(int, in SpokenTopicEntry\)

```csharp
[Changes("SpokenTopics.Field.Topics")]
public void InsertTopics(int index, in SpokenTopicEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SpokenTopicEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public SpokenTopics Keep()
```

#### Returns

 [SpokenTopics](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SpokenTopics.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_RemoveAtTopics_System_Int32_"></a> RemoveAtTopics\(int\)

```csharp
[Changes("SpokenTopics.Field.Topics")]
public SpokenTopicEntry RemoveAtTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 SpokenTopicEntry

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_SetTopics_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry___"></a> SetTopics\(in NativeList<SpokenTopicEntry\>\)

```csharp
[Changes("SpokenTopics.Field.Topics")]
public void SetTopics(in NativeList<SpokenTopicEntry> value)
```

#### Parameters

`value` NativeList<SpokenTopicEntry\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SpokenTopics_SetTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> SetTopics\(int, in SpokenTopicEntry\)

```csharp
[Changes("SpokenTopics.Field.Topics")]
public void SetTopics(int index, in SpokenTopicEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` SpokenTopicEntry


