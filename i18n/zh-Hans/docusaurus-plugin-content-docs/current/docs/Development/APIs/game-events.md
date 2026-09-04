# 游戏事件

WukongMP SDK 提供了对游戏中最常见事件做出反应的方式：关卡加载、玩家和怪物的出现与离开，以及死亡。

它们全都挂在 [`WukongApi.Events`](../../../api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongEventApi) 上，就是普通的 C# 事件。

## 订阅

请在实现 [`IHostedService`](../../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IHostedService) 的类中订阅，这样 SDK 会给你一个挂接和解除挂接的落脚点。在 `OnScopeStart` 中订阅，在 `Dispose` 中取消订阅：

```csharp title="MyEventCallbacks.cs"
public sealed class MyEventCallbacks(ILogger logger) : IHostedService
{
    public void OnScopeStart()
    {
        WukongApi.Events.OnJoinedArea += OnJoinedArea;
        WukongApi.Events.OnMonsterDead += OnMonsterDead;
    }

    public void Dispose()
    {
        WukongApi.Events.OnJoinedArea -= OnJoinedArea;
        WukongApi.Events.OnMonsterDead -= OnMonsterDead;
    }

    private void OnJoinedArea(AreaId area)
        => logger.LogInformation("Entered area {Area}", area);

    private void OnMonsterDead(ReadyTamer monster, ReadyCharacter? killer)
        => logger.LogInformation("{Monster} killed by {Killer}", monster.Nickname, killer?.Nickname);
}
```

然后在模组的 `Initialize` 中注册它：

```csharp
services.RegisterSingleton<MyEventCallbacks>();
```

完整的生命周期请参见[托管服务](../hosted-services)。[联机合作模组](https://github.com/readycodeio/WukongMP-co-op-mod)中的 `CoopEventCallbacks` 是一个可用的实例。

## 关卡与区域

**区域**指的是一张已加载的地图。如果游戏显示了加载画面，那就是在切换区域。

| 事件 | 参数 | 触发时机 |
| --- | --- | --- |
| `OnLevelLoaded` | | 某个游戏关卡已加载完成，在加载画面关闭之前 |
| `OnLoadingScreenClose` | | 关卡加载完成后加载画面关闭 |
| `OnBeginPlayGameplayLevel` | | 玩家进入某个游戏关卡 |
| `OnEndPlayGameplayLevel` | | 玩家离开某个游戏关卡，回到菜单或前往另一个关卡 |
| `OnExitLevel` | | 玩家退出某个关卡 |
| `OnJoinedArea` | `AreaId` | 本地玩家进入某个区域 |
| `OnLeftArea` | `AreaId` | 本地玩家离开某个区域 |

:::tip[搭建控件]

`OnLevelLoaded` 在加载画面关闭之前触发，因此它是构建自定义 UI 的正确位置：玩家一旦能看到任何画面，你的控件就已经准备好了。至于那些应该等到玩家真正在看世界时才发生的事情，请用 `OnLoadingScreenClose`。

:::

## 玩家

| 事件 | 参数 | 触发时机 |
| --- | --- | --- |
| `OnConnected` | `PlayerId` | 任意玩家连接到服务器 |
| `OnDisconnected` | `PlayerId`、[`DisconnectedReason`](#why-a-player-disconnected) | 任意玩家断开连接，无论是否出于本意 |
| `OnMainCharacterEntityInitialized` | [`ReadyMainCharacter`](../../../api-reference/WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter) | 某个玩家的 ECS 实体已就绪 |
| `OnPlayerPawnSpawned` | `ReadyMainCharacter` | 某个玩家的游戏内角色已生成 |
| `OnPlayerChangedTeam` | `ReadyMainCharacter` | 某个玩家切换队伍，例如复活或中途加入 |
| `OnPlayerDead` | `ReadyMainCharacter`、[`ReadyCharacter?`](../../../api-reference/WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter) | 任意玩家死亡。第二个参数是击杀者，如果存在的话 |
| `OnLocalPlayerBeforeRebirth` | | 本地玩家即将复活，此时仍处于死亡状态 |
| `OnLocalPlayerChangedSpectator` | `bool` | 本地玩家进入或退出观战模式 |
| `OnOtherPlayerInsideArea` | `PlayerId`、`AreaId` | 另一名玩家进入本地玩家所在的区域 |
| `OnOtherPlayerOutsideArea` | `PlayerId`、`AreaId` | 另一名玩家离开本地玩家所在的区域 |

:::important[每名玩家两个事件，顺序如下]

`OnMainCharacterEntityInitialized` 在 `OnPlayerPawnSpawned` **之前**触发。实体先存在，Pawn 后出现。

如果你要写入玩家的 ECS 组件，请用前者，这样你的数据会在任何东西渲染之前就位。如果你要操作 Pawn，也就是世界中的那个 Actor，请用后者，因为在前者触发时 Pawn 还不存在。

两者对每一名玩家都会触发，不只是本地玩家：你进入某个区域时会触发一次，之后每当有别人加入、他们的角色为你生成时都会再触发一次。

:::

### 玩家为何断开连接 {#why-a-player-disconnected}

`OnDisconnected` 会带上一个 [`DisconnectedReason`](../../../api-reference/ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.DisconnectedReason)，因此你可以区分玩家是气得退出还是掉线了：

| 值 | 含义 |
| --- | --- |
| `Unknown` | 无法确定原因 |
| `Timeout` | 与服务器的连接超时 |
| `ClientDisconnected` | 玩家主动离开 |
| `IncompatibleVersion` | 玩家的 SDK 模组版本与服务器不匹配 |
| `ExpiredTicket` | 服务器签发的连接凭据已过期 |
| `AlreadyConnected` | 该玩家已在另一个会话中处于连接状态 |
| `ServerFull` | 服务器不再接受新连接 |
| `Kicked` | 管理员踢出了该玩家 |
| `Banned` | 管理员在本服务器上封禁了该玩家 |
| `ServerBanned` | ReadyM 封禁了整个服务器，因此它会拒绝所有人 |

大多数模组只关心一件事：玩家是有意离开，还是掉了线。`ClientDisconnected` 是有意的那种；`Timeout` 则值得为其保留状态，以防对方回来。

最后两个值得分清。`Banned` 说的是你服务器上的某一名玩家。`ServerBanned` 说的是服务器本身，所以每名玩家都会看到它，而且模组对此无能为力。

## 怪物

| 事件 | 参数 | 触发时机 |
| --- | --- | --- |
| `OnMonsterSpawned` | [`ReadyTamer`](../../../api-reference/WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer) | 某个怪物在世界中出现 |
| `OnMonsterDead` | `ReadyTamer`、`ReadyCharacter?` | 某个怪物死亡。第二个参数是击杀者，如果存在的话 |
| `OnMonsterDestroyed` | `ReadyTamer` | 某个怪物从世界中被移除 |

`OnMonsterDead` 和 `OnMonsterDestroyed` 不是一回事。怪物只会死一次，但它每次离开世界都会被销毁，其中包括因为玩家走远而被卸载的情况。没有死亡就被卸载的怪物只会引发 `OnMonsterDestroyed`。

## 其他

| 事件 | 参数 | 触发时机 |
| --- | --- | --- |
| `OnLanguageChanged` | `CultureInfo` | 游戏语言发生变化，来自设置或系统区域设置 |

用 `OnLanguageChanged` 来重新渲染你已经用译文绘制过的内容。

## 线程

处理程序在游戏线程上被调用，因此你可以直接操作 Unreal 对象和 ECS 世界，不需要任何跨线程处理。代价是处理程序一慢就会卡住一帧，所以请让它们保持简短，把真正的工作搬到[系统](../systems)里。
