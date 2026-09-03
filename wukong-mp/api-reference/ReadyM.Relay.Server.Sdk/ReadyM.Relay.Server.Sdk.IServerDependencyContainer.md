# Interface IServerDependencyContainer

Namespace: [ReadyM.Relay.Server.Sdk](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Represents a dependency injection container for server-side mods.
Allows registering systems, apart from standard DI services.

```csharp
public interface IServerDependencyContainer : IDependencyContainer
```

#### Implements

[IDependencyContainer](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/DI/IDependencyContainer.cs)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_IServerDependencyContainer_RegisterSystem__1"></a> RegisterSystem<TSystem\>\(\)

```csharp
void RegisterSystem<TSystem>() where TSystem : ModSystemBase
```

#### Type Parameters

`TSystem` 


