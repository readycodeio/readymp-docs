---
title: 'Struct ShieldBashEvent'
description: 'A character bashed another with its shield. The others replay the hit on their copies, the attacker''s own game did it already.'
---
# Struct ShieldBashEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A character bashed another with its shield. The others replay the hit on their copies, the attacker's own game did it already.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner)]
public struct ShieldBashEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ShieldBashEvent_ActionIndex"></a> ActionIndex

```csharp
public uint ActionIndex { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ShieldBashEvent_Attacker"></a> Attacker

```csharp
[Subject]
public Character Attacker { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)

### <a id="OblivionMP_SDK_Common_Events_ShieldBashEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ShieldBashEvent_Struck"></a> Struck

```csharp
public Character Struck { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)


