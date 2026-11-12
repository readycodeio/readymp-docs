---
title: 'Struct ScriptVariablesChangeEvent'
description: 'A script wrote its variables on a ref, as the block''s owner reports them. The result is the ref''s script variables.'
---
# Struct ScriptVariablesChangeEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A script wrote its variables on a ref, as the block's owner reports them. The result is the ref's script variables.

```csharp
[NetworkedEvent(EventScope.Server, Policy.Anyone, Reject = typeof(ScriptVariablesChangeReject))]
public struct ScriptVariablesChangeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ScriptVariablesChangeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ScriptVariablesChangeEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ScriptVariablesChangeEvent_Script"></a> Script

```csharp
public FormId Script { readonly get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMP_SDK_Common_Events_ScriptVariablesChangeEvent_Variables"></a> Variables

```csharp
public ScriptVariablesData Variables { readonly get; set; }
```

#### Property Value

 ScriptVariablesData


