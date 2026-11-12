---
title: 'Struct Dialogue'
description: 'The dialogue topics and responses the server offers a player.'
---
# Struct Dialogue

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The dialogue topics and responses the server offers a player.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(Player), "Dialogue")]
public readonly struct Dialogue : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_ResponsesCount"></a> ResponsesCount

```csharp
public int ResponsesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_TopicsCount"></a> TopicsCount

```csharp
public int TopicsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_AddResponses_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> AddResponses\(in DialogueResponse\)

```csharp
[Changes("Dialogue.Field.Responses")]
public void AddResponses(in DialogueResponse value)
```

#### Parameters

`value` DialogueResponse

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_AddTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> AddTopics\(in DialogueTopic\)

```csharp
[Changes("Dialogue.Field.Topics")]
public void AddTopics(in DialogueTopic value)
```

#### Parameters

`value` DialogueTopic

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_ClearResponses"></a> ClearResponses\(\)

```csharp
[Changes("Dialogue.Field.Responses")]
public void ClearResponses()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_ClearTopics"></a> ClearTopics\(\)

```csharp
[Changes("Dialogue.Field.Topics")]
public void ClearTopics()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_ContainsResponses_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> ContainsResponses\(in DialogueResponse\)

```csharp
public bool ContainsResponses(in DialogueResponse value)
```

#### Parameters

`value` DialogueResponse

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_ContainsTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> ContainsTopics\(in DialogueTopic\)

```csharp
public bool ContainsTopics(in DialogueTopic value)
```

#### Parameters

`value` DialogueTopic

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_GetResponses"></a> GetResponses\(\)

```csharp
public NativeList<DialogueResponse>.ReadOnly GetResponses()
```

#### Returns

 NativeList<DialogueResponse\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_GetResponses_System_Int32_"></a> GetResponses\(int\)

```csharp
public DialogueResponse GetResponses(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 DialogueResponse

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_GetTopics"></a> GetTopics\(\)

```csharp
public NativeList<DialogueTopic>.ReadOnly GetTopics()
```

#### Returns

 NativeList<DialogueTopic\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_GetTopics_System_Int32_"></a> GetTopics\(int\)

```csharp
public DialogueTopic GetTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 DialogueTopic

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_InsertResponses_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> InsertResponses\(int, in DialogueResponse\)

```csharp
[Changes("Dialogue.Field.Responses")]
public void InsertResponses(int index, in DialogueResponse value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` DialogueResponse

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_InsertTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> InsertTopics\(int, in DialogueTopic\)

```csharp
[Changes("Dialogue.Field.Topics")]
public void InsertTopics(int index, in DialogueTopic value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` DialogueTopic

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Dialogue Keep()
```

#### Returns

 [Dialogue](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_RemoveAtResponses_System_Int32_"></a> RemoveAtResponses\(int\)

```csharp
[Changes("Dialogue.Field.Responses")]
public DialogueResponse RemoveAtResponses(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 DialogueResponse

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_RemoveAtTopics_System_Int32_"></a> RemoveAtTopics\(int\)

```csharp
[Changes("Dialogue.Field.Topics")]
public DialogueTopic RemoveAtTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 DialogueTopic

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_SetResponses_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse___"></a> SetResponses\(in NativeList<DialogueResponse\>\)

```csharp
[Changes("Dialogue.Field.Responses")]
public void SetResponses(in NativeList<DialogueResponse> value)
```

#### Parameters

`value` NativeList<DialogueResponse\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_SetResponses_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> SetResponses\(int, in DialogueResponse\)

```csharp
[Changes("Dialogue.Field.Responses")]
public void SetResponses(int index, in DialogueResponse value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` DialogueResponse

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_SetTopics_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic___"></a> SetTopics\(in NativeList<DialogueTopic\>\)

```csharp
[Changes("Dialogue.Field.Topics")]
public void SetTopics(in NativeList<DialogueTopic> value)
```

#### Parameters

`value` NativeList<DialogueTopic\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_SetTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> SetTopics\(int, in DialogueTopic\)

```csharp
[Changes("Dialogue.Field.Topics")]
public void SetTopics(int index, in DialogueTopic value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` DialogueTopic


