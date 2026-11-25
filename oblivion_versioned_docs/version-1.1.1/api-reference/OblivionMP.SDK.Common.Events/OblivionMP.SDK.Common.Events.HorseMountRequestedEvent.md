---
title: 'Struct HorseMountRequestedEvent'
description: 'A character starts mounting a horse. The server names it as the rider and moves the horse to the rider''s client.'
---
# Struct HorseMountRequestedEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A character starts mounting a horse. The server names it as the rider and moves the horse to the rider's client.

```csharp
[NetworkedEvent(EventScope.Server, Policy.SubjectOwner, Reject = typeof(HorseMountReject))]
public struct HorseMountRequestedEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_HorseMountRequestedEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_HorseMountRequestedEvent_Horse"></a> Horse

```csharp
public Npc Horse { readonly get; set; }
```

#### Property Value

 [Npc](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Npc.md)

### <a id="OblivionMP_SDK_Common_Events_HorseMountRequestedEvent_Rider"></a> Rider

```csharp
[Subject]
public Character Rider { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)


