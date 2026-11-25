---
title: 'Struct TimeSkipRequestEvent'
description: 'A player confirmed the wait menu, by waiting or sleeping in a bed. The SDK skips the world''s time for it only when the server''s AllowTimeSkip is on; a server mod may handle it either way.'
---
# Struct TimeSkipRequestEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A player confirmed the wait menu, by waiting or sleeping in a bed. The SDK skips the world's time for it only when
the server's <code>AllowTimeSkip</code> is on; a server mod may handle it either way.

```csharp
[NetworkedEvent(EventScope.Server, Policy.Anyone)]
public struct TimeSkipRequestEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_TimeSkipRequestEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_TimeSkipRequestEvent_Hours"></a> Hours

The game hours the player chose, 1 to 24 in the game's menu.

```csharp
public int Hours { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Events_TimeSkipRequestEvent_Sleeping"></a> Sleeping

Whether the player is sleeping in a bed rather than waiting.

```csharp
public bool Sleeping { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


