---
title: 'Struct DialogueResponse'
description: 'One line an NPC says for a mod-added dialogue topic.'
---
# Struct DialogueResponse

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

One line an NPC says for a mod-added dialogue topic.

```csharp
public struct DialogueResponse : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse_Text"></a> Text

What the NPC says.

```csharp
public NativeString256 Text
```

#### Field Value

 NativeString256

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse_TopicId"></a> TopicId

The topic this line belongs to.

```csharp
public uint TopicId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


