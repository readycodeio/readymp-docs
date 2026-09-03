# Interface IHostedService

Namespace: [ReadyM.Api.DI](../ReadyM.Api.DI/ReadyM.Api.DI.md)  
Assembly: ReadyM.Api.dll  

Services that implement this interface will have their **OnScopeStart** method called when the DI container is initialized (on game start).
This allows them to perform any necessary setup at the appropriate time, such as registering event handlers.
The service will be disposed when the game shuts down, allowing for any necessary cleanup.

```csharp
public interface IHostedService : IDisposable
```

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

## Methods

### <a id="ReadyM_Api_DI_IHostedService_OnScopeStart"></a> OnScopeStart\(\)

Called when the DI container is initialized (on game start).
This allows the service to perform any necessary setup at the appropriate time, such as registering event handlers.

```csharp
void OnScopeStart()
```


