---
sidebar_position: 2
---

# 原型与组件

**原型**是一个实体创建时所带的固定组件集合。WukongMP 提供了五个内置原型，你的服务器模组可以查询和扩展它们：

- **世界**实体（每台服务器一个，用于不属于其他任何东西的状态），
- **区域**实体（每个活动区域一个），
- **全局玩家实体**（每个已连接玩家一个），
- **驯化目标**（世界中的敌人），
- **主角**（玩家在世界中的角色）。

它们由 [WukongArchetypes](../../api-reference/WukongMp.Sdk.Serverside/WukongMp.Sdk.Serverside.WukongArchetypes) 命名，这是一个把每个原型映射到其 [ArchetypeId](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId) 的小类：

```csharp
// WukongArchetypes.WorldArchetype
// WukongArchetypes.AreaArchetype
// WukongArchetypes.GlobalPlayerArchetype
// WukongArchetypes.TamerArchetype
// WukongArchetypes.MainCharacterArchetype
```

这些成员是静态的，所以不需要解析或构造任何东西。客户端 SDK 通过 [`WukongApi.Archetypes`](../../api-reference/WukongMp.Sdk.Api.Implementation/WukongMp.Sdk.Api.Implementation.WukongArchetypes) 暴露同一套原型，客户端模组注册网络化组件的那一半时就用它来指定同一个原型。

:::danger[不要硬编码原型 ID]

这些属性背后的数字 ID 是当前版本的实现细节，将来会变。不要硬编码它们，而应该通过 `WukongArchetypes` 访问。

:::

在模组的 `Init` 中把你自己的组件挂到其中任意一个上，做法与[快速上手](getting-started#registering-components-and-archetypes)中的示例相同。下面的表格列出了每个原型已经带有的组件，方便你知道有哪些可供查询。

创建某个原型的实体，以及读写它们的组件，请参见[实体](entities)。

## 世界实体 {#world-entity}

整台服务器只有一个，在启动时创建一次。它适合存放属于整个会话、而不属于某个区域、某个玩家或某个 actor 的状态：比赛设置、全局模式开关、计分板。

| 组件 | 说明 |
| --- | --- |
| `MetadataComponent` | SDK 用于标识该实体的簿记数据。 |

默认情况下这里没有任何与游戏相关的内容，而这正是重点：它一开始就是空的，好让模组来占用。PvP 模组就把它的比赛设置和回合状态放在这个实体上。

模组的 `Init` 运行时世界实体还不存在，所以如果你需要在启动时写入它，请订阅 `OnWorldEntityCreated`。参见[服务器事件](server-events)。

## 区域实体 {#area-entity}

每个活动区域一个实体，承载属于该区域而非属于其中任何玩家的状态。

:::info[什么是区域？]

在《黑神话：悟空》中，区域是一张已加载的地图。每个主线章节有一个，每个隐藏 Boss 地点或竞技场也各有一个，等等。如果需要经过加载画面，那就是在切换区域。

:::

需要知道本区域内某段过场动画是否已经播放过的系统，会在这里读取。房间和比赛规则以前也以 `RoomComponent` 的形式存放在这个实体上；由于只有 PvP 用到它们，它们在 `0.4.0` 中迁入了 PvP 模组。

| 组件 | 说明 |
| --- | --- |
| [`AreaScopeComponent`](../../api-reference/ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.AreaScopeComponent) | 该实体所属的 `AreaId`。 |
| [`MovieComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MovieComponent) | 本区域内哪些过场动画已开始、哪些已结束。 |

`AreaScopeComponent` 是每个区域范围实体都会匹配到的组件。把它和你自己的组件配对，就是把查询限定到单个区域的方式，SDK 自己的过场动画处理程序就是这么做的。

## 全局玩家实体 {#global-player-entity}

每个已连接玩家一个实体。它在整个会话期间存在，与玩家身处哪个区域无关，是挂载**需要持久保存、以玩家为范围**的数据的合适位置。玩家通过该实体上的 [`PlayerId`](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId) 来标识。

| 组件 | 说明 |
| --- | --- |
| [`PlayerScopeComponent`](../../api-reference/ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.PlayerScopeComponent) | 所属玩家的 `PlayerId`。 |
| [`PlayerComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PlayerComponent) | 持久保存的昵称和玩家的队伍 ID。 |

模组注册的“全局”玩家组件就是挂到这个原型上的。

## 驯化目标 {#tamer}

驯化目标是敌人实体：从四处游荡的小怪到 Boss 都算。它属于区域范围，因此在区域活动期间存在，并在最后一名玩家离开时随区域一同销毁。

| 组件 | 说明 |
| --- | --- |
| [`TamerComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TamerComponent) | 该驯化目标的 GUID 和单位路径、是否为 Boss 或精英、其逻辑是否已暂停，以及哪些玩家正让它保持生成状态。 |
| [`TransformComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TransformComponent) | 世界位置与旋转。 |
| [`HpComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.HpComponent) | 当前 HP、基础最大 HP、最大 HP 的百分比乘数，以及死亡状态。 |
| [`NicknameComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.NicknameComponent) | 显示名称。在对战中用于在头顶显示“Bot”。 |
| [`TeamComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TeamComponent) | 底层游戏 actor 的队伍 ID。 |
| [`AnimationComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.AnimationComponent) | 移动动画状态：速度、加速度和移动速度档位。 |
| [`MonsterAnimationComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MonsterAnimationComponent) | 移动 AI 类型和动画播放速率。 |

## 主角 {#main-character}

玩家在世界中的角色：一个**区域范围**的实体，在玩家处于某个区域期间存在。它承载角色的实时状态，并通过相同的 `PlayerId` 与全局玩家实体关联。

跨区域时该实体会被销毁并重新创建，所以不要把需要持久保存的数据放在这里。

| 组件 | 说明 |
| --- | --- |
| [`MainCharacterComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MainCharacterComponent) | 所属 `PlayerId`，以及角色的实时状态：移动、动画标志、变身、观战状态、复活点、属性和装备。 |
| [`TransformComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TransformComponent) | 世界位置与旋转。 |
| [`HpComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.HpComponent) | 当前 HP、基础最大 HP、最大 HP 的百分比乘数，以及死亡状态。 |
| [`NicknameComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.NicknameComponent) | 玩家的显示名称，在切换区域时从 `PlayerComponent` 复制而来。 |
| [`TeamComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TeamComponent) | 底层游戏 actor 的队伍 ID。 |

当你需要按玩家区分的数据时，`MainCharacterComponent` 就是要配对的那个组件，因为它是在世界中携带 `PlayerId` 的组件。服务器模组里几乎每个查询都从它开始。

以上全部都是游戏自带的网络化组件，定义在 `ReadyM.Wukong.Common` 中。

:::note[PvP 组件已迁移]

`PvPComponent`、`PvpStateComponent` 和 `RoomComponent` 以前随 `ReadyM.Wukong.Common` 一起发布，并出现在这些原型上。从 `0.4.0` 起它们归 PvP 模组所有，为它们所在原型命名的 `PvpStateArchetype` 也一并迁走。如果你曾引用其中任何一个，现在它们位于 [PvP 模组](https://github.com/readycodeio/WukongMP-PvP-mod)中，那里同时也是模组把自身状态放到世界实体上的现成示例。

:::

## 注册你自己的原型 {#registering-your-own-archetype}

除了扩展内置原型，模组还可以用 `RegisterArchetype` 注册一个全新的原型。先在 `RegisterComponents` 中注册你的组件，然后在 `Init` 中构建原型，并保留返回的 `ArchetypeId`，以便之后用它创建实体。

```csharp title="注册一个新原型，并给已有原型挂上一个组件"
public class Mod : ServerModBase
{
    public static ArchetypeId ShrineArchetype { get; private set; }

    protected override void RegisterComponents(IComponentRegistry registry)
    {
        // 组件必须先注册，任何原型才能使用它。
        // 服务器专有状态用 RegisterLocalComponent，需要同步的用 RegisterComponent。
        registry.RegisterLocalComponent<ShrineComponent>();
        registry.RegisterComponent<BountyComponent>();
    }

    protected override void Init()
    {
        var registry = Services.Resolve<IArchetypeRegistry>();

        // 一个全新的原型：一个游戏自带组件加上一个我们自己的组件。
        ShrineArchetype = registry.RegisterArchetype(b => b
            .Add<TransformComponent>()
            .Add<ShrineComponent>());

        // 也可以改为给内置原型挂上一个组件。
        registry.ModifyArchetype(WukongArchetypes.GlobalPlayerArchetype, b => b.Add<BountyComponent>());
    }
}
```

两个调用都接受一个构建器，其中 `Add<T>()` 在原型上声明一个组件。游戏自带的组件按类型解析，所以你可以自由地把它们和自己的组件混用。

把返回的 `ArchetypeId` 保存在你的模组类上。创建实体时需要用到它，具体参见[实体](entities)。

:::important

你的模组注册的原型也必须在客户端注册，顺序相同、组件集合相同，否则两边对该原型的实体包含什么会产生分歧。

在客户端请用一次 `RegisterArchetypes` 调用完成注册，这样顺序一目了然，也容易保持一致。参见[自定义组件](../Development/APIs/custom-components)。

:::
