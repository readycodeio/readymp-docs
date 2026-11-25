---
title: 'Struct ScriptTriggerEnteredEvent'
description: 'An actor stepped into a scripted trigger. The others raise the trigger on their copy every tick until it leaves.'
---
# Struct ScriptTriggerEnteredEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

An actor stepped into a scripted trigger. The others raise the trigger on their copy every tick until it leaves.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner, Reject = typeof(ScriptEventReject))]
public struct ScriptTriggerEnteredEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ScriptTriggerEnteredEvent_Actor"></a> Actor

```csharp
[Subject]
public Character Actor { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)

### <a id="OblivionMP_SDK_Common_Events_ScriptTriggerEnteredEvent_Area"></a> Area

```csharp
[Area]
public AreaId Area { readonly get; set; }
```

#### Property Value

 AreaId

### <a id="OblivionMP_SDK_Common_Events_ScriptTriggerEnteredEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ScriptTriggerEnteredEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ScriptTriggerEnteredEvent_Script"></a> Script

```csharp
public FormId Script { readonly get; set; }
```

#### Property Value

 FormId


