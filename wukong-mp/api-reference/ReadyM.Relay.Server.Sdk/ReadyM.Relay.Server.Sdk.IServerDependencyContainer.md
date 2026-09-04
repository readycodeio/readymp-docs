# Interface IServerDependencyContainer

Namespace: [ReadyM.Relay.Server.Sdk](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Represents a dependency injection container for server-side mods.
Allows registering systems, apart from standard DI services.

```csharp
public interface IServerDependencyContainer : IDependencyContainer
```

#### Implements

[IDependencyContainer](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/DI/IDependencyContainer.cs)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_IServerDependencyContainer_RegisterSystem__1"></a> RegisterSystem<TSystem\>\(\)

```csharp
void RegisterSystem<TSystem>() where TSystem : ModSystemBase
```

#### Type Parameters

`TSystem` 


