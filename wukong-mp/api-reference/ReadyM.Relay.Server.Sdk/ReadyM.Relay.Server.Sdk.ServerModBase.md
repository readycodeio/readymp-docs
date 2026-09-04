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

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_ModDirectory"></a> ModDirectory

This mod's own <code>server</code> folder, which holds its assemblies and any config files.

```csharp
protected string ModDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

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

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_Initialize_ReadyM_Relay_Server_Sdk_IServerDependencyContainer_System_String_"></a> Initialize\(IServerDependencyContainer, string\)

```csharp
public void Initialize(IServerDependencyContainer services, string modDirectory)
```

#### Parameters

`services` [IServerDependencyContainer](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.IServerDependencyContainer.md)

`modDirectory` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_InitializeAot_ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_"></a> InitializeAot\(IComponentRegistry\)

```csharp
public void InitializeAot(IComponentRegistry registry)
```

#### Parameters

`registry` [IComponentRegistry](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.IComponentRegistry.md)

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_RegisterArchetypes_System_Action_ReadyM_Api_ECS_Worlds_IArchetypeRegistry__"></a> RegisterArchetypes\(Action<IArchetypeRegistry\>\)

Register new archetypes or modify existing.

```csharp
protected void RegisterArchetypes(Action<IArchetypeRegistry> configure)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IArchetypeRegistry](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/ECS/Worlds/IArchetypeRegistry.cs)\>

The configuration callback.

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_RegisterComponents_ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_"></a> RegisterComponents\(IComponentRegistry\)

Any components defined in the mod must be registered here.

```csharp
protected virtual void RegisterComponents(IComponentRegistry registry)
```

#### Parameters

`registry` [IComponentRegistry](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.IComponentRegistry.md)

### <a id="ReadyM_Relay_Server_Sdk_ServerModBase_RegisterConfig__1_System_String_"></a> RegisterConfig<TConfig\>\(string\)

Reads <code class="paramref">fileName</code> from this mod's server folder and registers the result as a singleton.

```csharp
protected void RegisterConfig<TConfig>(string fileName = "config.json") where TConfig : class, new()
```

#### Parameters

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`TConfig` 

#### Remarks

A missing file yields defaults. A file that exists but does not parse, or that carries a key the
config type does not declare, throws **ModConfigException**.


