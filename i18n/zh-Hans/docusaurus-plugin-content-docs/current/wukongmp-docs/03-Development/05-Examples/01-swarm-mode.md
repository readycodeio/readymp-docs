# 蜂群模式

本模组的目的是提供在 WukongMP 中实现新游戏模式的最简单示例。它注册一个控制台命令
`swarm_mode`，使敌人在每隔几秒钟的波次中在玩家周围刷出。玩家应一直战斗，直到再也打不过为止，之后模组将打印召唤的敌人数量。

## 模组入口点

为了创建一个 WukongMP 模组，您必须创建一个新的 C# 类库项目，引用 `WukongMp.Sdk.dll`，并定义一个从
[ModBase](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModBase) 派生的类。

至少，该模组必须定义其名称和版本号：

```csharp title="Mod.cs"
public class Mod : ModBase
{
    public override string Name => "Swarm";
    public override string Version => "1.0.0";
```

`Initialize` 方法是配置模组的地方。在这个模组中，我们要做几件事：

1. 从依赖注入容器解析 `SpawnEnemySwarmSystem`——模组中定义的每个系统都会在那里被注入。
2. 注册一个控制台命令 `swarm_mode`，用于开启我们自定义的游戏模式。
3. 订阅 `OnPlayerDead` 事件，在最后一个玩家死亡时将其关闭。

```csharp title="Mod.cs" showLineNumbers  
    protected override void Initialize(IDependencyContainer services)
    {
        var spawnSystem = services.Resolve<SpawnEnemySwarmSystem>();

        WukongApi.Console.AddCommand("swarm_mode", ConsoleCommand.Create(() =>
        {
            spawnSystem.Enable();
        }));

        // if all players are dead, reset the swarm mode
        WukongApi.Events.OnPlayerDead += (victim, attacker) =>
        {
            var alivePlayers = WukongApi.Sync.AllMainCharacters.Count(x => !x.IsDead);

            if (alivePlayers > 0)
                WukongApi.Local.AddChatMessage($"Remaining players: {alivePlayers}", FLinearColor.Yellow);
            else
                spawnSystem.Disable();
        };
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
API](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongLocalApi)
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
[ModSystemBase](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase)
的类）都暴露一个
[OnUpdate](/docs/wukongmp-api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase#-onupdateupdatetick)
方法，该方法在每一帧运行。我们可以用它来计算自上次刷怪以来经过的秒数。当 `_timeSinceLastSpawn` 超过阈值时，我们使用
[Synchronization
API](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongSynchronizationApi)
在玩家周围以圆形分布刷出若干次敌人（Wolf Sentinel）。所有可用的敌人类型都在
[TamerConstants](/docs/wukongmp-api-reference/WukongMp.Api.Configuration/WukongMp.Api.Configuration.TamerConstants)
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
