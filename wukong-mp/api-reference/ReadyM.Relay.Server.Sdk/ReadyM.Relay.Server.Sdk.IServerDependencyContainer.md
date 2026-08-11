# Interface IServerDependencyContainer

Namespace: [ReadyM.Relay.Server.Sdk](../ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Represents a dependency injection container for server-side mods.
Allows registering systems, apart from standard DI services.

```csharp
public interface IServerDependencyContainer : IDependencyContainer
```

#### Implements

[IDependencyContainer](https://github.com/readycodeio/readym\-gameserver/blob/c12780df078c882058ee18410f12720cc6ee2a0a/src/ReadyM.Api/DI/IDependencyContainer.cs)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_IServerDependencyContainer_RegisterSystem__1"></a> RegisterSystem<TSystem\>\(\)

```csharp
void RegisterSystem<TSystem>() where TSystem : ModSystemBase
```

#### Type Parameters

`TSystem` 


