---
sidebar_position: 4
---

# 原型与组件

**原型**是一个实体创建时所带的固定组件集合。WukongMP 提供了四个内置原型，你的服务器模组可以查询和扩展它们：

- **区域**实体（每个活动区域一个），
- **全局玩家实体**（每个已连接玩家一个），
- **驯化目标**（世界中的敌人），
- **主角**（玩家在世界中的角色）。

它们由 [WukongArchetypes](../../api-reference/WukongMp.Sdk.Serverside/WukongMp.Sdk.Serverside.WukongArchetypes) 命名，这是一个把每个原型映射到其 [ArchetypeId](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId) 的小类：

```csharp
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

:::warning[访问 API 是临时的]

目前你通过底层的 [`EcsApi`](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) 读写这些组件（原始的 `Query` 调用和 `ref` 组件访问）。这在 `0.4.0` 中是刻意保持简陋的。我们计划提供一套更高层、不那么原始的服务器 API，所以请预期访问实体数据的方式在后续版本中会有变化。

:::

## 区域实体 {#area-entity}

每个活动区域一个实体，承载属于该区域而非属于其中任何玩家的状态。

:::info[什么是区域？]

在《黑神话：悟空》中，区域是一张已加载的地图。每个主线章节有一个，每个隐藏 Boss 地点或竞技场也各有一个，等等。如果需要经过加载画面，那就是在切换区域。

:::

房间规则就存放在这里，所以需要知道是否允许作弊、或者某段过场动画是否已经播放过的系统，会在这里读取。

| 组件 | 说明 |
| --- | --- |
| [`AreaScopeComponent`](../../api-reference/ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.AreaScopeComponent) | 该实体所属的 `AreaId`。 |
| [`RoomComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.RoomComponent) | 房间配置：关卡、锦标赛回合数，是否允许葫芦、消耗品、定身、旋风冲刺、聊天和作弊，以及对战中生成敌人所对应的 NG+ 等级。 |
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
| [`PvPComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PvPComponent) | 玩家是否已准备好进行对战。 |

当你需要按玩家区分的数据时，`MainCharacterComponent` 就是要配对的那个组件，因为它是在世界中携带 `PlayerId` 的组件。服务器模组里几乎每个查询都从它开始。

以上全部都是游戏自带的网络化组件，定义在 `ReadyM.Wukong.Common` 中。

:::note[对战状态]

对战模组另外添加了第五个全局原型，其中只有一个 [`PvpStateComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PvpStateComponent)，承载比赛设置和回合状态。`WukongArchetypes.PvpStateArchetype` 仍然为它命名，但已标记为过时，并将迁移进对战模组，所以请把它当作对战模组内部的东西，而不是 SDK 对外接口的一部分。

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

拿到 `ArchetypeId` 之后，通过 `EcsApi` 用它创建实体：

```csharp
var entity = ecsApi.CreateEntity(Mod.ShrineArchetype);
```

:::important

你的模组注册的原型也必须在客户端注册，顺序相同、组件集合相同，否则两边对该原型的实体包含什么会产生分歧。请在客户端把原型注册集中在一个 [`IArchetypeRegistration`](../../api-reference/ReadyM.Api.ECS.Registry/ReadyM.Api.ECS.Registry.IArchetypeRegistration) 中，这样顺序一目了然，也容易保持一致。参见[自定义组件](../Development/APIs/custom-components)。

:::
