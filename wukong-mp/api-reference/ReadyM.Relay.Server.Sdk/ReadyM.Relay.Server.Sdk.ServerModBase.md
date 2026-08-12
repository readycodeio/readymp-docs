# Class ServerModBase

Namespace: [ReadyM.Relay.Server.Sdk](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

```csharp
public abstract class ServerModBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerModBase](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.ServerModBase.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase__ctor"></a> ServerModBase\(\)

```csharp
protected ServerModBase()
```

## Properties

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_Services"></a> Services

```csharp
protected IServerDependencyContainer Services { get; }
```

#### Property Value

 [IServerDependencyContainer](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.IServerDependencyContainer.md)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_Init"></a> Init\(\)

```csharp
protected abstract void Init()
```

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_Initialize_ReadyM_Relay_Server_Sdk_IServerDependencyContainer_"></a> Initialize\(IServerDependencyContainer\)

```csharp
public void Initialize(IServerDependencyContainer services)
```

#### Parameters

`services` [IServerDependencyContainer](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.IServerDependencyContainer.md)

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_InitializeAot_ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_"></a> InitializeAot\(IComponentRegistry\)

```csharp
public void InitializeAot(IComponentRegistry registry)
```

#### Parameters

`registry` [IComponentRegistry](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.IComponentRegistry.md)

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_RegisterComponents_ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_"></a> RegisterComponents\(IComponentRegistry\)

Any components defined in the mod must be registered here.

```csharp
protected virtual void RegisterComponents(IComponentRegistry registry)
```

#### Parameters

`registry` [IComponentRegistry](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.IComponentRegistry.md)


