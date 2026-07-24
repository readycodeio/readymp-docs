---
sidebar_position: 7
---

# Hosted services

In addition to systems, the OblivionMP SDK provides a way to implement **hosted services**. These are classes that expose lifecycle methods for when the game starts and stops, but don't have a tick method.

## Declaring hosted services

Any class implementing [IHostedService](../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IHostedService) and added to the dependency injection container in your mod's `RegisterServices` method automatically has its `OnScopeStart` method called when the game starts, and is disposed of when the game shuts down.

Such services are useful for running initialization code that doesn't fit in `RegisterServices`, or that needs to be cleaned up when the game shuts down — for example managing subscriptions or setting up long-lived resources.

```csharp title="Hosted service example"
public sealed class MyService : IHostedService
{
    private readonly ILogger _logger;

    public MyService(ILogger logger) => _logger = logger;

    public void OnScopeStart()
    {
        _logger.LogInformation("MyService started");
        // set up resources, subscriptions, or background work here
    }

    public void Dispose()
    {
        _logger.LogInformation("MyService stopping");
        // release anything acquired in OnScopeStart here
    }
}
```

Register the service in your mod so the SDK picks it up:

```csharp title="Registering a hosted service"
protected override void RegisterServices(IDependencyContainer services)
{
    services.RegisterSingleton<MyService>();
}
```
