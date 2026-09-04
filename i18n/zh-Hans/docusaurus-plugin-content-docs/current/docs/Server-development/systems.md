---
sidebar_position: 4
---

# 游戏系统

和客户端一样，服务器 SDK 也提供**系统**：暴露一个 tick 方法、在服务器自己的更新循环上运行的类。凡是应该在服务器上持续运行、不依赖某一次 RPC 调用的逻辑都适合放在这里。计时器、周期性的世界状态检查，以及根据在线玩家数量调整的缩放规则，都属于这一类。

## 声明系统 {#declaring-systems}

服务器端系统继承 [ModSystemBase](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase) 并重写 `OnUpdate`：

```csharp title="最简服务器系统示例"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // 每个服务器 tick 都会执行
    }
}
```

传给 `OnUpdate` 的 [UpdateTick](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase.UpdateTick) 提供 `DeltaTime`（距上一个 tick 的秒数）和 `Time`（服务器启动以来的秒数）。

:::important

与客户端系统不同，服务器端系统**不会**被自动发现。请在模组的 `Init` 方法中逐个显式注册：

```csharp
protected override void Init()
{
    Services.RegisterSystem<MySystem>();
}
```

:::

你可以通过构造函数注入依赖项，例如 [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) 或日志记录器，方式和从依赖注入容器解析的任何其他服务一样。

```csharp title="带依赖项的系统"
public class BountySystem(EcsApi ecs, ILogger logger) : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        ecs.Query<BountyComponent>((ref bounty) =>
        {
            bounty.Multiplier = 1f + bounty.Kills * 0.05f;
        });
    }
}
```

## 响应玩家数量 {#reacting-to-player-count}

用系统而不是 RPC 处理程序，最常见的理由是：答案取决于整个世界的状态，而不是某个客户端的请求。按在线玩家数量缩放 Boss 血量就是一个已发布的例子，取自联机合作模组：

```csharp title="按玩家数量缩放精英与 Boss 的 HP"
public class ScaleHpSystem(EcsApi ecs, ILogger logger) : ModSystemBase
{
    // 由 RPC 处理程序写入，在这里由服务器循环读取
    public int ScalingPercent { get { ... } set { ... } }

    protected override void OnUpdate(UpdateTick tick)
    {
        // 统计服务器上的所有玩家，而不只是本区域内的玩家
        var players = 0;
        ecs.Query<MainCharacterComponent, int>(ref players, static (ref _, ref players) => { players++; });

        if (players == 0) return;

        var targetScalingPercent = ScalingPercent * players;

        ecs.Query<TamerComponent, HpComponent>((ref tamer, ref hp) =>
        {
            if (!tamer.IsBossOrElite)
                return;  // 不缩放普通敌人

            if (hp is { HpMaxBase: 0, Hp: 0 })
                return; // 尚未生成的怪物没有可缩放的 HP

            var currentMultPercent = hp.HpMaxMulPercent == 0 ? 100 : hp.HpMaxMulPercent;
            if (targetScalingPercent != currentMultPercent)
            {
                hp.Hp *= (float)targetScalingPercent / currentMultPercent;
                hp.HpMaxMulPercent = targetScalingPercent;
            }
        });
    }
}
```

请留意这个系统的写法：它每 tick 读取世界状态，与自己已经应用过的值比较，只有两者不一致时才写入。无条件写入的系统会在每个 tick 向每个客户端发送一次组件增量，这会立刻体现为[网络统计](../Server/network-stats)里的出站流量。

## 系统与 RPC 处理程序配合 {#systems-and-rpc-handlers-together}

`RegisterSystem<T>` 同时会让该系统可以从容器解析，因此 [RPC 处理程序](custom-rpc)可以把它作为构造函数依赖项。面向客户端的设置就是这样传到系统里的：处理程序负责校验并保存，系统负责执行。

```csharp title="配置系统的处理程序"
protected override void Init()
{
    Services.RegisterSystem<ScaleHpSystem>();
    Services.RegisterSingleton<RpcHandlers>();
}
```

```csharp
[ServerRpcFor(typeof(RpcContracts))]
public partial class RpcHandlers(ScaleHpSystem hpScaling) : ServerRpcHandlersBase
{
    partial void OnScaleBossHp(RpcContext context, int scalingPercent)
    {
        hpScaling.ScalingPercent = scalingPercent;
    }
}
```

:::note[不需要同步]

从 `0.4.0` 起，RPC 处理程序和系统都运行在服务器的更新线程上，因此处理程序写入、系统读取的字段既不需要加锁，也不需要 `Volatile` 访问器。处理程序以前运行在网络线程上，那时确实需要这样的处理。

:::

## 系统的开销 {#cost-of-a-system}

你的模组注册的每个系统都在服务器的系统根更新中运行，而这正是[网络统计](../Server/network-stats)里 **服务器 tick 耗时** 图表所测量的对象。一个用定时器扫描全部实体、而不是对变化作出反应的系统，通常就是 p99 上升而 p50 平稳的原因。要判断是不是你的系统在吃掉 tick 时间，那一页是最快的办法。
