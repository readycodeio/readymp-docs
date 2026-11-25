---
title: 'Struct LockpickReleaseEvent'
description: 'A player stopped picking a lock, picked or not.'
---
# Struct LockpickReleaseEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A player stopped picking a lock, picked or not.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner)]
public struct LockpickReleaseEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_LockpickReleaseEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_LockpickReleaseEvent_Picker"></a> Picker

```csharp
[Subject]
public MainCharacter Picker { readonly get; set; }
```

#### Property Value

 [MainCharacter](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.MainCharacter.md)

### <a id="OblivionMP_SDK_Common_Events_LockpickReleaseEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


