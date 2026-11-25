---
title: 'Struct QuestEntry'
description: 'A quest in a player''s journal.'
---
# Struct QuestEntry

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

A quest in a player's journal.

```csharp
public struct QuestEntry : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Audience"></a> Audience

Whether the quest is one player's own or shared by everyone.

```csharp
public AudienceKind Audience
```

#### Field Value

 [AudienceKind](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AudienceKind.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_CurrentStage"></a> CurrentStage

The stage the quest is at.

```csharp
public byte CurrentStage
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Name"></a> Name

The quest's name in the journal.

```csharp
public NativeString64 Name
```

#### Field Value

 NativeString64

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Phase"></a> Phase

Whether the quest is active, completed or failed.

```csharp
public QuestPhase Phase
```

#### Field Value

 [QuestPhase](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestPhase.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_QuestId"></a> QuestId

Your mod's id for the quest. One quest per id.

```csharp
public uint QuestId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_StageText"></a> StageText

The journal text for the current stage.

```csharp
public NativeString256 StageText
```

#### Field Value

 NativeString256


