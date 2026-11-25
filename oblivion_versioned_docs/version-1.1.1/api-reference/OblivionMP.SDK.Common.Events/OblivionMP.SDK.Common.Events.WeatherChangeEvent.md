---
title: 'Struct WeatherChangeEvent'
---
# Struct WeatherChangeEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

```csharp
[NetworkedEvent(EventScope.Server, Policy.AreaMaster)]
public struct WeatherChangeEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_WeatherChangeEvent_Area"></a> Area

```csharp
[Area]
public Area Area { readonly get; set; }
```

#### Property Value

 Area

### <a id="OblivionMP_SDK_Common_Events_WeatherChangeEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_WeatherChangeEvent_TransitionRatio"></a> TransitionRatio

```csharp
public float TransitionRatio { readonly get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Events_WeatherChangeEvent_WeatherFormId"></a> WeatherFormId

```csharp
public FormId WeatherFormId { readonly get; set; }
```

#### Property Value

 FormId


