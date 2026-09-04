# Interface IComponentRegistry

Namespace: [ReadyM.Api.Multiplayer.ECS.Registry](../ReadyM.Api.Multiplayer.ECS.Registry/ReadyM.Api.Multiplayer.ECS.Registry.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Allows registering components with the ECS system, both local and networked.

```csharp
public interface IComponentRegistry
```

## Methods

### <a id="ReadyM_Api_Multiplayer_ECS_Registry_IComponentRegistry_RegisterComponent__1"></a> RegisterComponent<T\>\(\)

Registers a networked (replicated over the network) component type with the ECS system.

```csharp
IComponentRegistry RegisterComponent<T>() where T : struct, INetworkedComponent
```

#### Returns

 [IComponentRegistry](../ReadyM.Api.Multiplayer.ECS.Registry/ReadyM.Api.Multiplayer.ECS.Registry.IComponentRegistry.md)

#### Type Parameters

`T` 

The type of the component to register. Must be a struct that implements **INetworkedComponent**.


