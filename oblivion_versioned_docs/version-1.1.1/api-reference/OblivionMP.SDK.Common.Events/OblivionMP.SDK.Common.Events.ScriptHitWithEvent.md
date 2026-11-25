---
title: 'Struct ScriptHitWithEvent'
description: 'A scripted ref was hit with a weapon. The others raise the hit with that weapon on their copy.'
---
# Struct ScriptHitWithEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A scripted ref was hit with a weapon. The others raise the hit with that weapon on their copy.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner, Reject = typeof(ScriptEventReject))]
public struct ScriptHitWithEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ScriptHitWithEvent_Area"></a> Area

```csharp
[Area]
public AreaId Area { readonly get; set; }
```

#### Property Value

 AreaId

### <a id="OblivionMP_SDK_Common_Events_ScriptHitWithEvent_Attacker"></a> Attacker

```csharp
[Subject]
public Character Attacker { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)

### <a id="OblivionMP_SDK_Common_Events_ScriptHitWithEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ScriptHitWithEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ScriptHitWithEvent_Script"></a> Script

```csharp
public FormId Script { readonly get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMP_SDK_Common_Events_ScriptHitWithEvent_Weapon"></a> Weapon

```csharp
public FormId Weapon { readonly get; set; }
```

#### Property Value

 FormId


