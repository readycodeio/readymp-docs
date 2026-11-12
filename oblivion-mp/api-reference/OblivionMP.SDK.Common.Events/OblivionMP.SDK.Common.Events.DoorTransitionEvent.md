---
title: 'Struct DoorTransitionEvent'
description: 'A door was opened or closed. The result is the door''s state; a refused transition puts the actor''s game back to it. A server raise leaves the actor null and reaches any door with Script.'
---
# Struct DoorTransitionEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A door was opened or closed. The result is the door's state; a refused transition puts the actor's game back to it.
A server raise leaves the actor null and reaches any door with **Script**.

```csharp
[NetworkedEvent(EventScope.Server, Policy.SubjectOwner, Reject = typeof(DoorTransitionReject))]
public struct DoorTransitionEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_DoorTransitionEvent_Actor"></a> Actor

```csharp
[Subject]
public MainCharacter? Actor { readonly get; set; }
```

#### Property Value

 [MainCharacter](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.MainCharacter.md)?

### <a id="OblivionMP_SDK_Common_Events_DoorTransitionEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_DoorTransitionEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_DoorTransitionEvent_Source"></a> Source

```csharp
public DoorTransitionSource Source { readonly get; set; }
```

#### Property Value

 DoorTransitionSource

### <a id="OblivionMP_SDK_Common_Events_DoorTransitionEvent_Transition"></a> Transition

```csharp
public DoorTransition Transition { readonly get; set; }
```

#### Property Value

 DoorTransition


