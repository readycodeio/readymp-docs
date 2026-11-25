---
title: 'Struct ScriptButtonChosenEvent'
description: 'A player picked a button in a script''s message box. The others hand the same button to their copy of the script.'
---
# Struct ScriptButtonChosenEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A player picked a button in a script's message box. The others hand the same button to their copy of the script.

```csharp
[NetworkedEvent(EventScope.Area, Policy.SubjectOwner, Reject = typeof(ScriptEventReject))]
public struct ScriptButtonChosenEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ScriptButtonChosenEvent_Area"></a> Area

```csharp
[Area]
public AreaId Area { readonly get; set; }
```

#### Property Value

 AreaId

### <a id="OblivionMP_SDK_Common_Events_ScriptButtonChosenEvent_Button"></a> Button

```csharp
public sbyte Button { readonly get; set; }
```

#### Property Value

 [sbyte](https://learn.microsoft.com/dotnet/api/system.sbyte)

### <a id="OblivionMP_SDK_Common_Events_ScriptButtonChosenEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ScriptButtonChosenEvent_Player"></a> Player

```csharp
[Subject]
public MainCharacter Player { readonly get; set; }
```

#### Property Value

 [MainCharacter](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.MainCharacter.md)

### <a id="OblivionMP_SDK_Common_Events_ScriptButtonChosenEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ScriptButtonChosenEvent_Script"></a> Script

```csharp
public FormId Script { readonly get; set; }
```

#### Property Value

 FormId


