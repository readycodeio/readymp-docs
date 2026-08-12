# Struct ModSystemBase.UpdateTick

Namespace: [ReadyM.Relay.Server.Sdk.Ecs.Systems](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Systems.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Holds the time information for the current update tick.

```csharp
protected readonly struct ModSystemBase.UpdateTick
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase_UpdateTick__ctor_System_Single_System_Single_"></a> UpdateTick\(float, float\)

Holds the time information for the current update tick.

```csharp
public UpdateTick(float deltaTime, float time)
```

#### Parameters

`deltaTime` [float](https://learn.microsoft.com/dotnet/api/system.single)

Time since last tick, in seconds.

`time` [float](https://learn.microsoft.com/dotnet/api/system.single)

Total time since server start, in seconds.

## Fields

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase_UpdateTick_deltaTime"></a> deltaTime

The time in seconds since the last tick.

```csharp
public readonly float deltaTime
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase_UpdateTick_time"></a> time

The time at the beginning of the current frame since application start.

```csharp
public readonly float time
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)


