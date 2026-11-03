---
title: 'Class AreaEventsHandler'
---
# Class AreaEventsHandler

Namespace: [OblivionMp.Sdk.Serverside.Events](../OblivionMp.Sdk.Serverside.Events/OblivionMp.Sdk.Serverside.Events.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

```csharp
public sealed class AreaEventsHandler : IService
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AreaEventsHandler](../OblivionMp.Sdk.Serverside.Events/OblivionMp.Sdk.Serverside.Events.AreaEventsHandler.md)

#### Implements

IService

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Events_AreaEventsHandler__ctor"></a> AreaEventsHandler\(\)

```csharp
public AreaEventsHandler()
```

## Properties

### <a id="OblivionMp_Sdk_Serverside_Events_AreaEventsHandler_Enabled"></a> Enabled

```csharp
public bool Enabled { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Events_AreaEventsHandler_OnTimeChange_OblivionMp_Sdk_Common_Events_TimeChangeEvent__"></a> OnTimeChange\(in TimeChangeEvent\)

```csharp
public void OnTimeChange(in TimeChangeEvent ev)
```

#### Parameters

`ev` TimeChangeEvent

### <a id="OblivionMp_Sdk_Serverside_Events_AreaEventsHandler_OnWeatherChange_OblivionMp_Sdk_Common_Events_WeatherChangeEvent__"></a> OnWeatherChange\(in WeatherChangeEvent\)

```csharp
public void OnWeatherChange(in WeatherChangeEvent ev)
```

#### Parameters

`ev` WeatherChangeEvent


