---
title: 'Struct LockChangeEvent'
description: 'A lock was locked or unlocked. The result is the lock''s state; a refused change puts the actor''s game back to it. A server raise leaves the actor null and reaches any lock with Script.'
---
# Struct LockChangeEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A lock was locked or unlocked. The result is the lock's state; a refused change puts the actor's game back to it.
A server raise leaves the actor null and reaches any lock with **Script**.

```csharp
[NetworkedEvent(EventScope.Server, Policy.SubjectOwner, Reject = typeof(LockChangeReject))]
public struct LockChangeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_LockChangeEvent_Actor"></a> Actor

```csharp
[Subject]
public MainCharacter? Actor { readonly get; set; }
```

#### Property Value

 [MainCharacter](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.MainCharacter.md)?

### <a id="OblivionMP_SDK_Common_Events_LockChangeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_LockChangeEvent_IsLocked"></a> IsLocked

```csharp
public bool IsLocked { readonly get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Events_LockChangeEvent_Level"></a> Level

```csharp
public int Level { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Events_LockChangeEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_LockChangeEvent_Source"></a> Source

```csharp
public LockChangeSource Source { readonly get; set; }
```

#### Property Value

 LockChangeSource


