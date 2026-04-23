---
sidebar_position: 4
---

# 玩法系统

为便于开发游戏逻辑，WukongMP SDK 提供了一种实现 **系统** 的方式。这些类暴露了一个绑定到游戏更新循环的 tick 方法。

## 声明系统

任何从
[ModSystemBase](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase)
派生并在与您的主模组类位于同一程序集中的类（该类继承自
[ModBase](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModBase)）将会在游戏启动时自动注册，并在不久之后开始执行。

:::info

系统是单例的——每个系统在同一时间只运行一个实例。

:::

目前没有用于开启或关闭系统的功能，你需要自己实现相应的方法。

以下是一个最小系统声明的示例：

```csharp title="最简系统示例"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // 每帧执行的操作
    }
}
```

您可以通过从依赖注入容器中解析它来获取系统实例的引用：

```csharp title="通过依赖注入解析系统"
public class MyMod : ModBase
{
    protected override void Initialize(IDependencyContainer services)
    {
        var mySystemInstance = services.Resolve<MySystem>();
    }
}
```
