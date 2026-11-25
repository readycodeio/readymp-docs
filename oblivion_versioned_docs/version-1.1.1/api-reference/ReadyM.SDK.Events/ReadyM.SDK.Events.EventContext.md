---
title: 'Struct EventContext'
description: 'What a networked event handler is told about the event besides its members.'
---
# Struct EventContext

Namespace: [ReadyM.SDK.Events](../ReadyM.SDK.Events/ReadyM.SDK.Events.md)  
Assembly: ReadyM.SDK.dll  

What a networked event handler is told about the event besides its members.

```csharp
public readonly struct EventContext
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_SDK_Events_EventContext_CancelledBy"></a> CancelledBy

On <code>Stage.Rejected</code>, the unique ID of the mod that cancelled the event.

```csharp
public string CancelledBy { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_SDK_Events_EventContext_Origin"></a> Origin

Who raised it: a player, or **Server**.

```csharp
public PlayerId Origin { get; }
```

#### Property Value

 PlayerId

## Methods

### <a id="ReadyM_SDK_Events_EventContext_Cancel__1___0_"></a> Cancel<TReason\>\(TReason\)

Cancels the event, with a reason of the type its declaration named. Every later stage is skipped and the
reason reaches the origin.

```csharp
public void Cancel<TReason>(TReason reason)
```

#### Parameters

`reason` TReason

#### Type Parameters

`TReason` 

### <a id="ReadyM_SDK_Events_EventContext_Cancel"></a> Cancel\(\)

Cancels the event without a reason. Every later stage is skipped.

```csharp
public void Cancel()
```


