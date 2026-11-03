---
title: 'Struct DockEvent'
description: 'A character sat down on, or lay down in, a piece of furniture.'
---
# Struct DockEvent

Namespace: [OblivionMp.Sdk.Common.Events](../OblivionMp.Sdk.Common.Events/OblivionMp.Sdk.Common.Events.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A character sat down on, or lay down in, a piece of furniture.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner)]
public struct DockEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Events_DockEvent_Character"></a> Character

```csharp
[Subject]
public Character Character { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Character.md)

### <a id="OblivionMp_Sdk_Common_Events_DockEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMp_Sdk_Common_Events_DockEvent_Furniture"></a> Furniture

```csharp
public Furniture Furniture { readonly get; set; }
```

#### Property Value

 [Furniture](../OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Furniture.md)

### <a id="OblivionMp_Sdk_Common_Events_DockEvent_MarkerIndex"></a> MarkerIndex

```csharp
public uint MarkerIndex { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Events_DockEvent_MarkerNumber"></a> MarkerNumber

```csharp
public uint MarkerNumber { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Events_DockEvent_SitSleepState"></a> SitSleepState

```csharp
public SitSleepState SitSleepState { readonly get; set; }
```

#### Property Value

 SitSleepState


