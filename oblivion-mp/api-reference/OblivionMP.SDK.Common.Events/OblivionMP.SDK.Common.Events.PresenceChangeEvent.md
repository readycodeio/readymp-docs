---
title: 'Struct PresenceChangeEvent'
description: 'A script enabled, disabled or destroyed a ref, as the block''s owner reports it. The result is the ref''s presence.'
---
# Struct PresenceChangeEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A script enabled, disabled or destroyed a ref, as the block's owner reports it. The result is the ref's presence.

```csharp
[NetworkedEvent(EventScope.Server, Policy.Anyone, Reject = typeof(PresenceChangeReject))]
public struct PresenceChangeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_PresenceChangeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_PresenceChangeEvent_Flag"></a> Flag

```csharp
public PresenceFlag Flag { readonly get; set; }
```

#### Property Value

 PresenceFlag

### <a id="OblivionMP_SDK_Common_Events_PresenceChangeEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_PresenceChangeEvent_Value"></a> Value

```csharp
public bool Value { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


