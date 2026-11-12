---
title: 'Struct HorseDismountedEvent'
description: 'A character got off its horse.'
---
# Struct HorseDismountedEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A character got off its horse.

```csharp
[NetworkedEvent(EventScope.Server, Policy.SubjectOwner)]
public struct HorseDismountedEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_HorseDismountedEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_HorseDismountedEvent_Horse"></a> Horse

```csharp
public Npc Horse { readonly get; set; }
```

#### Property Value

 [Npc](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Npc.md)

### <a id="OblivionMP_SDK_Common_Events_HorseDismountedEvent_Rider"></a> Rider

```csharp
[Subject]
public Character Rider { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)


