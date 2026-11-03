---
title: 'Class AiIntents'
description: 'Gives orders to an NPC through its AI queue.'
---
# Class AiIntents

Namespace: [OblivionMp.Sdk.Serverside.Ai](../OblivionMp.Sdk.Serverside.Ai/OblivionMp.Sdk.Serverside.Ai.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Gives orders to an NPC through its AI queue.

```csharp
public static class AiIntents
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AiIntents](../OblivionMp.Sdk.Serverside.Ai/OblivionMp.Sdk.Serverside.Ai.AiIntents.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Ai_AiIntents_Clear_OblivionMp_Sdk_Common_Archetypes_Npc_"></a> Clear\(Npc\)

Empties the NPC's order queue.

```csharp
public static void Clear(Npc npc)
```

#### Parameters

`npc` Npc

### <a id="OblivionMp_Sdk_Serverside_Ai_AiIntents_Enqueue_OblivionMp_Sdk_Common_Archetypes_Npc_ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_"></a> Enqueue\(Npc, AiIntentEntry\)

Adds an order to the end of the NPC's queue and returns its sequence number.

```csharp
public static ushort Enqueue(Npc npc, AiIntentEntry intent)
```

#### Parameters

`npc` Npc

`intent` AiIntentEntry

#### Returns

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)


