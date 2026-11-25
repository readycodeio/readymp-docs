---
title: 'Struct ScriptDialogueResultEvent'
description: 'A dialogue response ran its result script. The others run the same script with the talker''s copy as the player.'
---
# Struct ScriptDialogueResultEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A dialogue response ran its result script. The others run the same script with the talker's copy as the player.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner, Reject = typeof(ScriptEventReject))]
public struct ScriptDialogueResultEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ScriptDialogueResultEvent_Area"></a> Area

```csharp
[Area]
public AreaId Area { readonly get; set; }
```

#### Property Value

 AreaId

### <a id="OblivionMP_SDK_Common_Events_ScriptDialogueResultEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ScriptDialogueResultEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ScriptDialogueResultEvent_Seed"></a> Seed

```csharp
public ulong Seed { readonly get; set; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

### <a id="OblivionMP_SDK_Common_Events_ScriptDialogueResultEvent_Talker"></a> Talker

```csharp
[Subject]
public Character Talker { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)

### <a id="OblivionMP_SDK_Common_Events_ScriptDialogueResultEvent_TopicInfo"></a> TopicInfo

```csharp
public FormId TopicInfo { readonly get; set; }
```

#### Property Value

 FormId


