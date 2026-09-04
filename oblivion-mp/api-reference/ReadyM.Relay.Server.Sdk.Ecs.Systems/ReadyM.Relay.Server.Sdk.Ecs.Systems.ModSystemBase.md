# Class ModSystemBase

Namespace: [ReadyM.Relay.Server.Sdk.Ecs.Systems](../ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

A base class for server-side mod systems that need to perform updates each tick.
Inherit from this class and implement the **UpdateTick)** method to define your system's behavior.

```csharp
public abstract class ModSystemBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModSystemBase](../ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase__ctor"></a> ModSystemBase\(\)

```csharp
protected ModSystemBase()
```

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase_OnUpdate_ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase_UpdateTick_"></a> OnUpdate\(UpdateTick\)

Called every tick to update the system. Implement this method in derived classes to define the system's behavior.

```csharp
protected abstract void OnUpdate(ModSystemBase.UpdateTick tick)
```

#### Parameters

`tick` [ModSystemBase](../ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase.md).[UpdateTick](../ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase.UpdateTick.md)

The current update tick information, including delta time and total time.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Systems_ModSystemBase_Update_System_Single_System_Single_"></a> Update\(float, float\)

Runs the system update for the current tick.

```csharp
public void Update(float deltaTime, float time)
```

#### Parameters

`deltaTime` [float](https://learn.microsoft.com/dotnet/api/system.single)

Time since last tick, in seconds.

`time` [float](https://learn.microsoft.com/dotnet/api/system.single)

Total time since server start, in seconds.


