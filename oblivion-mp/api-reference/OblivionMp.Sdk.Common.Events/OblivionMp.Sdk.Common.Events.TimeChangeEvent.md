---
title: 'Struct TimeChangeEvent'
---
# Struct TimeChangeEvent

Namespace: [OblivionMp.Sdk.Common.Events](../OblivionMp.Sdk.Common.Events/OblivionMp.Sdk.Common.Events.md)  
Assembly: OblivionMp.Sdk.Common.dll  

```csharp
[NetworkedEvent(EventScope.Server, Policy.AreaMaster)]
public struct TimeChangeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Events_TimeChangeEvent_Area"></a> Area

```csharp
[Area]
public Area Area { readonly get; set; }
```

#### Property Value

 Area

### <a id="OblivionMp_Sdk_Common_Events_TimeChangeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMp_Sdk_Common_Events_TimeChangeEvent_GameDaysPassed"></a> GameDaysPassed

```csharp
public float GameDaysPassed { readonly get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Events_TimeChangeEvent_GameHour"></a> GameHour

```csharp
public float GameHour { readonly get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Events_TimeChangeEvent_TimeScale"></a> TimeScale

```csharp
public float TimeScale { readonly get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)


