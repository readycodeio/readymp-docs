---
title: 'Struct PlayerConsumeEvent'
description: 'A character ate or drank an item.'
---
# Struct PlayerConsumeEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A character ate or drank an item.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner)]
public struct PlayerConsumeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_PlayerConsumeEvent_Character"></a> Character

```csharp
[Subject]
public Character Character { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)

### <a id="OblivionMP_SDK_Common_Events_PlayerConsumeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_PlayerConsumeEvent_Item"></a> Item

```csharp
public NetworkFormId Item { readonly get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMP_SDK_Common_Events_PlayerConsumeEvent_Kind"></a> Kind

```csharp
public ConsumeKind Kind { readonly get; set; }
```

#### Property Value

 ConsumeKind


