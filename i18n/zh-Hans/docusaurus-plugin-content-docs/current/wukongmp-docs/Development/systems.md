---
sidebar_position: 3
---

# Gameplay systems

In order to facilitate the development of gameplay logic, the WukongMP SDK provides a way to implement **systems**.
These are classes that expose a tick method tied to the game's update loop.

## Declaring systems

Any class deriving from [ModSystemBase](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase) and defined in the same assembly as your main mod class (one that extends [ModBase](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModBase)) will be automatically registered when the game starts, and will begin executing soon after.

:::info

Systems are singletons — each system has only one instance running at a time.

:::

At this time there is no functionality for turning systems on an off, you have to implement methods for that yourself.

Below is an example of a minimal system declaration:

```csharp title="最小系统示例"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // do something every frame
    }
}
```

You can get a reference to your system's instance by resolving it from the Dependency Injection container:

```csharp title="通过依赖注入解析系统"
public class MyMod : ModBase
{
    protected override void Initialize(IDependencyContainer services)
    {
        var mySystemInstance = services.Resolve<MySystem>();
    }
}
```
