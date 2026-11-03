---
title: 'Struct UndockEvent'
description: 'A character got up from the furniture it was docked to.'
---
# Struct UndockEvent

Namespace: [OblivionMp.Sdk.Common.Events](../OblivionMp.Sdk.Common.Events/OblivionMp.Sdk.Common.Events.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A character got up from the furniture it was docked to.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner)]
public struct UndockEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Events_UndockEvent_Character"></a> Character

```csharp
[Subject]
public Character Character { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Character.md)

### <a id="OblivionMp_Sdk_Common_Events_UndockEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode


