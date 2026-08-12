# Interface IComponentRegistry

Namespace: [ReadyM.Relay.Server.Sdk.Ecs.Components](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Allows registering components with the ECS system, both local and networked.

```csharp
public interface IComponentRegistry
```

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_RegisterComponent__1"></a> RegisterComponent<T\>\(\)

Registers a networked (replicated over the network) component type with the ECS system.

```csharp
void RegisterComponent<T>() where T : struct, INetworkedComponent
```

#### Type Parameters

`T` 

The type of the component to register. Must be a struct that implements **INetworkedComponent**.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_RegisterLocalComponent__1"></a> RegisterLocalComponent<T\>\(\)

Registers a local (not replicated over the network) component type with the ECS system.

```csharp
void RegisterLocalComponent<T>() where T : struct
```

#### Type Parameters

`T` 

The type of the component to register. Must be a struct.


