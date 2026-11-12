---
title: 'Struct PlacementChangeEvent'
description: 'A script moved a ref within its cell, as the block''s owner reports it. The result is the ref''s transform.'
---
# Struct PlacementChangeEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

A script moved a ref within its cell, as the block's owner reports it. The result is the ref's transform.

```csharp
[NetworkedEvent(EventScope.Server, Policy.Anyone, Reject = typeof(PlacementChangeReject))]
public struct PlacementChangeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_PlacementChangeEvent_Cell"></a> Cell

```csharp
public FullCellId Cell { readonly get; set; }
```

#### Property Value

 FullCellId

### <a id="OblivionMP_SDK_Common_Events_PlacementChangeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_PlacementChangeEvent_Position"></a> Position

```csharp
public Vector3 Position { readonly get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMP_SDK_Common_Events_PlacementChangeEvent_RefId"></a> RefId

```csharp
public uint RefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_PlacementChangeEvent_Rotation"></a> Rotation

```csharp
public float Rotation { readonly get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)


