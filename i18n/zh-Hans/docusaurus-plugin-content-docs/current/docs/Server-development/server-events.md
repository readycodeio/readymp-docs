---
sidebar_position: 5
---

# 服务器事件

系统每帧执行一次，RPC 处理器在客户端请求时执行。服务器事件是模组获得控制权的第三种方式：由中继服务器主动告诉你发生了什么。

`0.4.0` 新增。

## 订阅

继承 [`ServerEventHandlersBase`](../../api-reference/ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventHandlersBase) 并实现 `Subscribe` 和 `Unsubscribe`。基类会把这两个方法接入模组生命周期，因此你永远不需要手动取消订阅：

```csharp title="EventHandlers.cs"
public class EventHandlers(ServerEventsApi events, EcsApi ecs, ILogger logger)
    : ServerEventHandlersBase(events)
{
    protected override void Subscribe(ServerEventsApi e)
    {
        e.OnPlayerJoinedArea += OnPlayerJoinedArea;
        e.OnAreaDeleted += OnAreaDeleted;
    }

    protected override void Unsubscribe(ServerEventsApi e)
    {
        e.OnPlayerJoinedArea -= OnPlayerJoinedArea;
        e.OnAreaDeleted -= OnAreaDeleted;
    }

    private void OnPlayerJoinedArea(PlayerId player, AreaId area)
        => logger.LogInformation("{Player} entered {Area}", player, area);

    private void OnAreaDeleted(AreaId area, Entity entity)
    {
        // 最后一名玩家已离开，清理我们挂在这个区域上的东西
    }
}
```

在模组的 `Init` 中把它注册为单例，与注册系统的方式相同：

```csharp
Services.RegisterSingleton<EventHandlers>();
```

## 事件列表

| 事件 | 参数 | 触发时机 |
| --- | --- | --- |
| `OnWorldEntityCreated` | 实体 | 世界实体已存在，启动时触发一次 |
| `OnPlayerConnected` | 玩家、实体 | 某个玩家完成连接 |
| `OnPlayerDisconnected` | 玩家、实体、原因 | 某个玩家掉线或离开 |
| `OnAreaCreated` | 区域、实体 | 第一名玩家进入某个区域 |
| `OnAreaDeleted` | 区域、实体 | 最后一名玩家离开某个区域 |
| `OnPlayerJoinedArea` | 玩家、区域 | 某个玩家进入一个已存在的区域 |
| `OnPlayerLeftArea` | 玩家、区域 | 某个玩家离开一个仍有其他人的区域 |

当事件把 `Entity` 交给你时，那就是该事件所关乎对象的实体，所以你可以直接写入它的组件，不必先去查找。

## `OnWorldEntityCreated`

模组的 `Init` 在世界实体存在之前就已运行，因此这是你能够写入世界组件的最早时机：

```csharp
protected override void Subscribe(ServerEventsApi e)
    => e.OnWorldEntityCreated += OnWorld;

private void OnWorld(Entity world)
{
    ref var settings = ref ecs.GetComponentRef<MatchSettingsComponent>(world.Id);
    settings.Rounds = 3;
}
```

如果你想在启动时初始化一些状态，却找不到合适的落脚点，那么你要的就是这个钩子。关于世界实体是什么，参见[原型与组件](archetypes#world-entity)。

## 线程

事件处理器运行在服务器的更新线程上，也就是你的系统执行所在的线程。这意味着你可以直接查询和修改实体，无需任何跨线程调度；同时也意味着处理器一慢就会拖慢整个 tick。请让它们保持简短。
