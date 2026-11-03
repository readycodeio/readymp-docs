---
title: 'Struct UpdateTime'
description: 'A service''s clock for the current update.'
---
# Struct UpdateTime

Namespace: [ReadyM.SDK.Services](../ReadyM.SDK.Services/ReadyM.SDK.Services.md)  
Assembly: ReadyM.SDK.dll  

A service's clock for the current update.

```csharp
public readonly struct UpdateTime
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_SDK_Services_UpdateTime__ctor_System_Single_System_Single_System_UInt64_"></a> UpdateTime\(float, float, ulong\)

A service's clock for the current update.

```csharp
public UpdateTime(float deltaTime, float time, ulong ticks = 0)
```

#### Parameters

`deltaTime` [float](https://learn.microsoft.com/dotnet/api/system.single)

Seconds since the last update.

`time` [float](https://learn.microsoft.com/dotnet/api/system.single)

Seconds since the game started.

`ticks` [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

Updates that came before this one.

## Properties

### <a id="ReadyM_SDK_Services_UpdateTime_DeltaTime"></a> DeltaTime

Seconds since the last update.

```csharp
public float DeltaTime { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_SDK_Services_UpdateTime_Elapsed"></a> Elapsed

Seconds since the game started.

```csharp
public float Elapsed { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_SDK_Services_UpdateTime_Ticks"></a> Ticks

How many updates came before this one.

```csharp
public ulong Ticks { get; }
```

#### Property Value

 [ulong](https://learn.microsoft.com/dotnet/api/system.uint64)

## Methods

### <a id="ReadyM_SDK_Services_UpdateTime_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)


