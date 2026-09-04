---
sidebar_position: 5
---

# 托管服务

除了系统之外，WukongMP SDK 还提供一种实现 **托管服务** 的方式。这些类暴露了在游戏启动和停止时的生命周期方法，但没有 tick 方法。

## 声明托管服务

任何实现
[IHostedService](../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IHostedService)
并在你模组的 `Initialize` 方法中被添加到依赖注入容器的类，将在游戏启动时自动调用其 `OnScopeStart` 方法，且在游戏关闭时被释放。

此类服务对于管理事件订阅，或运行不适合放在模组类的 `Initialize` 方法中的初始化代码，或需要在游戏关闭时进行清理的代码，都是有用的。

下面是 PvP 模组中一个托管服务的示例。它封装了一些简单的逻辑，用于在进入新区域时同步 PvP
状态。由于模组的许多功能依赖于对游戏事件的订阅，这种使用托管服务来管理事件订阅的模式已在整个模组的代码库中得到广泛应用。

```csharp title="托管服务示例"
public sealed class PvpSynchronizer : IHostedService
{
    public void OnScopeStart() 
        => WukongApi.Events.OnJoinedArea += OnJoinedAreaHandler;

    public void Dispose() 
        => WukongApi.Events.OnJoinedArea -= OnJoinedAreaHandler;

    private static void OnJoinedAreaHandler(AreaId areaId)
    {
        var isMasterClient = WukongApi.Sync.IsMasterClient;
        Logging.LogDebug("Joined area {AreaId}, is master client: {IsMasterClient}", areaId, isMasterClient);

        if (isMasterClient)
            WukongApi.PvP.InitializeAreaPvpState();
    }
}
```
