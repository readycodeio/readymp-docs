---
sidebar_position: 5
---

# Gameplay systems

To facilitate the development of gameplay logic, the OblivionMP SDK provides a way to implement **systems**. These are classes that expose a tick method tied to the game's update loop.

## Declaring systems

Any class deriving from `ModSystemBase` and defined in the same assembly as your main mod class (one that extends `ModBase`) is automatically registered when the game starts, and begins executing soon after.

:::info

Systems are singletons: each system has only one instance running at a time.

:::

There is currently no built-in functionality for turning systems on and off; you have to implement that yourself.

Below is a minimal system declaration:

```csharp title="Minimal system example"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // do something every frame
    }
}
```

The `UpdateTick` passed to `OnUpdate` exposes `deltaTime` (seconds since the last tick) and `time` (seconds since application start).

You can get a reference to your system's instance by resolving it from the dependency injection container:

```csharp title="Resolving systems from DI"
public class MyMod : ModBase
{
    protected override void RegisterServices(IDependencyContainer services)
    {
        var mySystemInstance = services.Resolve<MySystem>();
    }
}
```
