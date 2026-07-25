# Interface IComponentRegistry

Namespace: [ReadyM.Relay.Server.Sdk.Ecs.Components](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

```csharp
public interface IComponentRegistry
```

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_RegisterComponent__1"></a> RegisterComponent<T\>\(\)

```csharp
int RegisterComponent<T>() where T : struct, INetworkedComponent
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Type Parameters

`T` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_RegisterLocalComponent__1"></a> RegisterLocalComponent<T\>\(\)

```csharp
int RegisterLocalComponent<T>() where T : struct
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Type Parameters

`T` 


