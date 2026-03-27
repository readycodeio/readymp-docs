# ReadyM.Api.DI

### Interfaces

 [IDependencyContainer](../ReadyM.Api.DI/ReadyM.Api.DI.IDependencyContainer.md)

Dependency injection container interface for registering and resolving services.

 [IHostedService](../ReadyM.Api.DI/ReadyM.Api.DI.IHostedService.md)

Services that implement this interface will have their **OnScopeStart** method called when the DI container is initialized (on game start).
This allows them to perform any necessary setup at the appropriate time, such as registering event handlers.
The service will be disposed when the game shuts down, allowing for any necessary cleanup.


