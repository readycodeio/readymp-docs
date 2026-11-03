---
title: 'Struct DialogueTopic'
description: 'A dialogue topic a mod offers a player.'
---
# Struct DialogueTopic

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

A dialogue topic a mod offers a player.

```csharp
public struct DialogueTopic : INetSerializable
```

#### Implements

INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_Name"></a> Name

What the player sees in the topic list.

```csharp
public NativeString64 Name
```

#### Field Value

 NativeString64

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_QuestId"></a> QuestId

The quest the topic belongs to.

```csharp
public uint QuestId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_SpeakerBaseId"></a> SpeakerBaseId

Only NPCs of this base form offer the topic. 0 means anyone.

```csharp
public uint SpeakerBaseId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_StageAtLeast"></a> StageAtLeast

Offered only while the quest's stage is at least this. 0 means no limit.

```csharp
public byte StageAtLeast
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_StageBelow"></a> StageBelow

Offered only while the quest's stage is below this. 0 means no limit.

```csharp
public byte StageBelow
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_TopicId"></a> TopicId

Your mod's id for the topic.

```csharp
public uint TopicId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


