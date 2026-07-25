# Class ModComponentManager

Namespace: [ReadyM.Relay.Server.Sdk.Ecs](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

CoreCLR-side owner of plugin component type registrations and all per-archetype heaps.

Lifecycle: one instance per ECS world. Call RegisterComponent&lt;T&gt; for each plugin
component type during initialization, pass the returned PluginComponentRegistration to the
AOT side, then dispose when the world shuts down.

The AOT side calls AllocHeap each time a new archetype needs a heap - no coordination
needed from the plugin after registration. All allocated heaps are tracked here and
disposed in bulk on shutdown.

```csharp
public sealed class ModComponentManager : IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModComponentManager](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.ModComponentManager.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Ecs_ModComponentManager__ctor"></a> ModComponentManager\(\)

```csharp
public ModComponentManager()
```

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_ModComponentManager_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Server_Sdk_Ecs_ModComponentManager_Finalize"></a> \~ModComponentManager\(\)

```csharp
protected ~ModComponentManager()
```

### <a id="ReadyM_Relay_Server_Sdk_Ecs_ModComponentManager_RegisterComponent__1"></a> RegisterComponent<T\>\(\)

Registers component type T. Returns a PluginComponentRegistration to hand to the
AOT relay's RegisterPluginComponent. The embedded AllocHeap delegate allocates a
fresh TypedComponentHeap&lt;T&gt; each time an archetype needs one.

```csharp
public ModComponentRegistration RegisterComponent<T>() where T : struct, INetworkedComponent
```

#### Returns

 [ModComponentRegistration](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Base/Types/ModComponentType.cs)

#### Type Parameters

`T` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_ModComponentManager_RegisterLocalComponent__1"></a> RegisterLocalComponent<T\>\(\)

Registers component type T. Returns a ModComponentRegistration to hand to the
AOT relay's RegisterModComponent. The embedded AllocHeap delegate allocates a
fresh TypedComponentHeap&lt;T&gt; each time an archetype needs one.

```csharp
public ModComponentRegistration RegisterLocalComponent<T>() where T : struct
```

#### Returns

 [ModComponentRegistration](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Base/Types/ModComponentType.cs)

#### Type Parameters

`T` 


