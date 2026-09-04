---
sidebar_position: 1
---

# 蜂群模式

本模组的目的是提供在 WukongMP 中实现新游戏模式的最简单示例。它注册一个控制台命令
`swarm_mode`，使敌人在每隔几秒钟的波次中在玩家周围刷出。玩家应一直战斗，直到再也打不过为止，之后模组将打印召唤的敌人数量。

## 模组入口点

为了创建一个 WukongMP 模组，您必须创建一个新的 C# 类库项目，引用 `WukongMp.Sdk.dll`，并定义一个从
[ModBase](../../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModBase) 派生的类。

模块至少必须定义其名称：

```csharp title="Mod.cs"
public class Mod : ModBase
{
    public override string Name => "Swarm";
```

`Initialize` 方法是配置模组的地方。在这个模组中，我们要做几件事：

1. 在依赖注入容器中注册我们的 RPC 处理程序类，以实现 RPC 的发送与接收。
1. 从依赖注入容器中解析 `SpawnEnemySwarmSystem`——你模组中定义的每个系统都会在那里被注入。
1. 注册一个控制台命令 `swarm_mode`，用于开启我们的自定义游戏模式，并通知其他玩家。
1. 订阅 `OnPlayerDead` 事件，在最后一个玩家死亡时将其禁用，并在有人死亡时发送事件。

```csharp title="Mod.cs" showLineNumbers  
    protected override void Initialize(IDependencyContainer services)
    {
        services.RegisterSingleton<Rpc>();

        var rpc = services.Resolve<Rpc>();
        var spawnSystem = services.Resolve<SpawnEnemySwarmSystem>();

        WukongApi.Console.AddCommand("swarm_mode", ConsoleCommand.Create(() =>
        {
            spawnSystem.Enable();
            rpc.SendSwarmStarted();
        }));

        WukongApi.Events.OnPlayerDead += (victim, attacker) =>
        {
            var alivePlayers = WukongApi.Sync.AllMainCharacters.Count(x => !x.IsDead);
            if (alivePlayers > 0)
            {
                rpc.SendRemainingPlayers(alivePlayers);
            }
            else
            {
                rpc.SendSwarmEnded(spawnSystem.SpawnedEnemies);
                spawnSystem.Disable();
            }
        };
    }
}
```

## 自定义 RPC

我们的模组使用一些自定义的远程过程调用来向其他玩家通知战斗的状态。

这些调用都会显示用户界面元素——信息横幅或对接收玩家可见的聊天消息。

我们使用 `AreaOfInterestAll` [Relay
mode](../../../api-reference/ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode)，以在同一关卡的所有客户端接收该消息，包含发送者。这样每个人看到的消息相同。

请参阅 [RPC 文档](../custom-rpc)，以了解在 RPC 类中你还能做些什么。

```csharp title="自定义 RPC 类"
public partial class Rpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnSwarmStarted(PlayerId __sender)
    {
        if (!WukongApi.Sync.TryGetPlayerInfoById(__sender, out var playerName, out _))
        {
            Logging.LogError("Failed to get player info for sender {Sender}", __sender);
        }

        WukongApi.Local.ShowInfoMessage("Get ready!", 3);
        WukongApi.Local.AddChatMessage($"Swarm mode enabled by {playerName}!", FLinearColor.NavajoWhite);
        WukongApi.Local.AddChatMessage("Enemies will spawn around you every 10 seconds, with increasing numbers. Survive as long as you can!", FLinearColor.NavajoWhite);
    }

    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnSwarmEnded(int enemiesSpawned)
    {
        WukongApi.Local.AddChatMessage($"Swarm mode ended, survived {enemiesSpawned} enemies", FLinearColor.OrangeRed);
    }

    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnRemainingPlayers(int remaining)
    {
        WukongApi.Local.AddChatMessage($"Remaining players: {remaining}", FLinearColor.Yellow);
    }
}
```

## 核心游戏循环

模组的核心逻辑封装在 `SpawnEnemySwarmSystem`。

我们首先定义一些常量来配置系统的行为：

```csharp showLineNumbers title="SpawnEnemySwarmSystem.cs"
public sealed class SpawnEnemySwarmSystem : ModSystemBase
{
    private bool _enabled;
    private float _timeSinceLastSpawn;
    private int _swarmSize = 3;
    private int _enemies;
    private const int SwarmIncrement = 1;
    private const int SwarmMax = 7;
    private const float SpawnRadius = 1000.0f;
    private const float SpawnInterval = 10.0f;
    private const float InitialDelay = 3.0f;
```

接下来是启用和禁用系统的方法。我们使用 [Local
API](../../../api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongLocalApi)
来显示消息横幅并向聊天窗口添加消息。

```csharp showLineNumbers=13 title="SpawnEnemySwarmSystem.cs"
    public void Enable()
    {
        _enabled = true;

        WukongApi.Local.ShowInfoMessage("Get ready!", 3);
        WukongApi.Local.AddChatMessage("Swarm mode enabled! Enemies will spawn around you every 10 seconds, with increasing numbers. Survive as long as you can!", FLinearColor.NavajoWhite);
    }

    public void Disable()
    {
        if (!_enabled)
            return;

        _enabled = false;
        WukongApi.Local.AddChatMessage($"Swarm mode ended, survived {_enemies} enemies", FLinearColor.OrangeRed);

        // reset state for next time
        _enemies = 0;
        _swarmSize = 3;
        _timeSinceLastSpawn = SpawnInterval - InitialDelay;
    }
```

所有系统（派生自
[ModSystemBase](../../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase)
的类）都会暴露一个在每帧执行的
[OnUpdate](../../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase#-onupdateupdatetick)
方法。我们可以用它来统计自上次生成敌人以来经过的秒数。当 `_timeSinceLastSpawn` 超过阈值时，我们使用 [Synchronization
API](../../../api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongSynchronizationApi)
在玩家周围以圆环的方式重复生成若干个敌人（Wolf Sentinel）。所有可用的敌人类型都在
[TamerKinds](../../../api-reference/WukongMp.Api.Configuration/WukongMp.Api.Configuration.TamerKinds)
中定义。

```csharp showLineNumbers=35 title="SpawnEnemySwarmSystem.cs"
    protected override void OnUpdate(UpdateTick tick)
    {
        if (!_enabled || !WukongApi.Sync.LocalMainCharacter.HasValue)
            return;

        _timeSinceLastSpawn += tick.deltaTime;
        if (_timeSinceLastSpawn > SpawnInterval)
        {
            _timeSinceLastSpawn = 0;
            WukongApi.Local.ShowInfoMessage($"Spawning {_swarmSize} enemies!", 1);

// highlight-start
            // spawn a few enemies around the player
            for (var i = 0; i < _swarmSize; i++)
            {
                var position = GetNthPointOnCircle(WukongApi.Sync.LocalMainCharacter.Value.Location, i, _swarmSize);
                WukongApi.Sync.SpawnEnemy(TamerConstants.WolfSentinel, position);
            }
// highlight-end

            // increase swarm size, up to a certain point
            _swarmSize = Math.Min(_swarmSize + SwarmIncrement, SwarmMax);

            // count total enemies spawned for end-of-mode summary
            _enemies += _swarmSize;
        }
    }

    private static Vector3 GetNthPointOnCircle(Vector3 center, int i, int n) { ... }
}
```
