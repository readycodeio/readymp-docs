---
sidebar_position: 1
---

# 快速上手

服务器端模组运行在 WukongMP 中继服务器内部。它们可以注册自己的网络化组件、把组件挂到已有的原型上、在服务器 tick 上运行游戏系统，以及处理客户端发来的 RPC。

服务器端模组是一个引用了服务器 SDK 的 .NET 类库，其中定义一个继承 [ServerModBase](../../api-reference/ReadyM.Relay.Server.Sdk/ReadyM.Relay.Server.Sdk.ServerModBase) 的类。它的程序集直接放在服务器的 [`server_mods/` 目录](../Server/mod-management#server-side-mods)中，这与面向客户端的 `mods/` 文件夹是两个不同的位置。服务器启动时，模组加载器会在那里找到它并实例化该类。

```csharp title="最简服务器模组类"
using ReadyM.Relay.Server.Sdk;
using ReadyM.Relay.Server.Sdk.Ecs.Components;

public class MyServerMod : ServerModBase
{
    protected override void RegisterComponents(IComponentRegistry registry)
    {
        // 在此注册你的自定义组件
    }

    protected override void Init()
    {
        // 在此注册系统、RPC 处理程序，以及修改原型
    }
}
```

`RegisterComponents` 最先执行，在服务器的 ECS 架构定型之前。这是唯一可以注册新网络化组件的地方。`Init` 随后执行，你在这里解析服务、注册[系统](systems)和 [RPC 处理程序](custom-rpc)，并把组件挂到原型上。

:::tip[从已发布的模组中学习]

[联机合作模组](https://github.com/readycodeio/WukongMP-co-op-mod)基于这套 SDK 构建，并随服务器一同分发。它的 `WukongMp.Coop.Serverside` 项目是这几页内容的一个小而完整的示例：两个系统、一个 RPC 处理程序，以及一个共享契约项目。[对战模组](https://github.com/readycodeio/WukongMP-PvP-mod)还没有改用服务器端功能。

:::

## 建立项目 {#setting-up-the-project}

服务器端模组的目标框架是 `net10.0`，而客户端模组是 `netstandard2.0`。它引用服务器 SDK 和共享的 WukongMP 程序集，这些都随服务器包一同分发。请使用[模组模板](https://github.com/readycodeio/wukongmp-mod-template)开始创建服务器端模组。

:::note

服务器模组运行在 CoreCLR 上，而不是在 AOT 编译的服务器二进制文件内部，因此运行服务器的机器需要安装 .NET 10 运行时。参见[系统要求](../Server/installation)。

:::

一个功能完整的模组通常包含**三个项目**：

* 一个 `netstandard2.0` 的共享项目，存放类型定义和 RPC 契约。
* 一个服务器端模组，目标框架 `net10.0`，引用共享项目。
* 一个客户端模组，目标框架 `netstandard2.0`，引用共享项目。

共享项目的目标框架是 `netstandard2.0`，这样另外两个项目都能引用它。在模板中，它引用 SDK 程序集时带上了 `Private="false"`，这样 `netstandard2.0` 的构建产物就不会进入服务器模组的输出目录，因为那里必须由 `net10.0` 的构建产物胜出。正是这种区分，让模板带了两个依赖文件夹：`Dependencies/SDK` 存放 `netstandard2.0` 程序集，`Dependencies/ServerSDK` 存放 `net10.0` 程序集。

## 注册组件与原型 {#registering-components-and-archetypes}

**网络化组件**会在服务器和每个已连接客户端之间同步。它声明为带 `[DeriveINetworkedComponent]` 特性的 `partial struct`，放在共享项目中，这样服务器模组和客户端模组编译时用的是同一份定义。生成器会把每个私有字段变成公有属性，并生成序列化代码：

```csharp title="一个网络化组件（位于共享项目中）"
using System.Runtime.InteropServices;
using ReadyM.Api.Multiplayer.Generators;

[DeriveINetworkedComponent]
[StructLayout(LayoutKind.Auto)]
public partial struct BountyComponent
{
    private int _kills;
    private float _multiplier;
}
```

在 `RegisterComponents` 中注册它，然后在 `Init` 中把它挂到原型上：

```csharp title="注册组件并挂到全局玩家原型上"
public class MyServerMod : ServerModBase
{
    protected override void RegisterComponents(IComponentRegistry registry)
    {
        registry.RegisterComponent<BountyComponent>();
    }

    protected override void Init()
    {
        var registry = Services.Resolve<IArchetypeRegistry>();

        registry.ModifyArchetype(WukongArchetypes.GlobalPlayerArchetype, archetype =>
        {
            archetype.Add<BountyComponent>();
        });
    }
}
```

累计击杀数是需要持久保存、以玩家为范围的数据，所以它属于**全局玩家实体**：每个已连接玩家一个实体，在整个会话期间存在，与玩家身处哪个区域无关。描述角色在世界中存在状态的数据（位置、HP、队伍）则应该放在主角实体上。每个原型都带有哪些组件，请参见[原型与组件](archetypes)。

## 在客户端对应起来 {#matching-it-up-on-the-client}

两边是对称的。服务器模组注册和挂载了什么，客户端模组就以同样的方式注册和挂载，随后数值就会双向同步。在客户端模组的 `Initialize` 中：

```csharp title="同一个组件的客户端一半"
protected override void Initialize(IDependencyContainer services)
{
    services.Resolve<IComponentApi>().RegisterComponent<BountyComponent>();
    services.RegisterSingleton<IArchetypeRegistration, BountyRegistration>();
}
```

```csharp title="BountyRegistration.cs"
public class BountyRegistration : IArchetypeRegistration
{
    public void Register(IArchetypeRegistry registry)
    {
        registry.ModifyArchetype(WukongApi.Archetypes.GlobalPlayerArchetype, b => b.Add<BountyComponent>());
    }
}
```

客户端一侧的完整说明请见[自定义组件](../Development/APIs/custom-components)。

:::important

两边必须完全一致。注册相同的组件、以相同的顺序注册，并在两边挂到相同的原型上。组件 ID 是按位置分配的，按注册顺序编号，并以一个字节的形式在网络上传输，因此不匹配时不会报错，而是会把数据流读错。

实用原则：把组件定义放在共享项目里，每一侧的注册都集中在一处，并且把客户端模组和服务器模组作为同一个包的同一版本一起发布。

:::

## 本地组件 {#local-components}

**本地组件**是挂在实体上的服务器端状态，不参与任何同步。它就是一个实现 `IComponent` 的普通 `struct`：

```csharp title="一个本地组件"
public struct CooldownComponent : IComponent
{
    public float RemainingSeconds;
}
```

用 `RegisterLocalComponent` 而不是 `RegisterComponent` 来注册它，挂到原型上的方式完全相同：

```csharp title="注册一个本地组件"
protected override void RegisterComponents(IComponentRegistry registry)
{
    registry.RegisterLocalComponent<CooldownComponent>();
}

protected override void Init()
{
    var registry = Services.Resolve<IArchetypeRegistry>();

    registry.ModifyArchetype(WukongArchetypes.MainCharacterArchetype, a => a.Add<CooldownComponent>());
}
```

之后它的行为和任何其他组件一样：会出现在 `Query` 中，你通过 `ref` 读写它，它随实体一同创建和销毁。它只是永远不会离开服务器，所以在客户端模组里不需要对应的一半，也不占用任何网络流量。

只要客户端没有必要看到某个值，就用本地组件：计时器、冷却、作弊记录，以及系统每 tick 重建的中间状态。客户端需要渲染或需要作出反应的一切，则应该放在网络化组件里；如果那是一次性事件而不是状态，就用 [RPC](custom-rpc)。

:::note

每个组件最大 256 字节，本地组件和网络化组件都一样，而且服务器的组件槽位数量是固定的。超出任何一个限制时，注册都会明确报错。

:::

## 读写实体数据 {#reading-and-writing-entity-data}

在模组内部，用 [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi)（通过 `Services.Resolve<EcsApi>()` 解析，或注入到你的类中）来查询和修改实体。每次调用会遍历每个匹配的实体一次，所请求的组件以引用方式传入：

```csharp title="查询实体"
ecsApi.Query<BountyComponent>((ref bounty) =>
{
    bounty.Kills += 1;
});
```

`Query` 的重载最多可以同时接受六个组件类型，只有同时带有全部这些组件的实体才会被遍历。把某个组件和 `MainCharacterComponent` 配对，是访问玩家所属实体的常用做法：

```csharp title="同时查询两个组件"
ecsApi.Query<MainCharacterComponent, HpComponent>((ref main, ref hp) =>
{
    if (hp.IsDead)
    {
        logger.LogDebug("Player {PlayerId} is down", main.PlayerId);
    }
});
```

每个重载还有一个把 `ref` 状态值贯穿回调的变体。当你需要累加结果时用它，因为这样回调可以保持 `static`，避免每 tick 都分配一个闭包：

```csharp title="用 ref 状态计数"
var alive = 0;
ecsApi.Query<HpComponent, int>(ref alive, static (ref hp, ref alive) =>
{
    if (!hp.IsDead)
        alive++;
});
```

来自服务器模组的写入具有权威性：SDK 会把它们标记为服务器写入，因此你的模组对某个有归属的组件所做的修改会同步回归属客户端，而不会被客户端覆盖。

:::warning[已知问题]

当前版本存在一个已知问题：覆盖客户端每帧都会修改的数据（例如位置）通常不会生效。

**这将在 SDK 的后续更新中解决。** 目前请改用 RPC 来更新这类组件。举例来说，不要试图在服务器端的查询中设置 `TransformComponent.Position` 来传送玩家，而应该发送一个 RPC，让客户端执行传送逻辑。

:::

## 功能状态 {#feature-status}

| 功能 | 状态 |
|---|---|
| 网络化组件 | :white_check_mark: [已完成](#registering-components-and-archetypes) |
| 本地组件 | :white_check_mark: [已完成](#local-components) |
| 游戏系统 | :white_check_mark: [已完成](systems) |
| 服务器 RPC | :white_check_mark: [已完成](custom-rpc) |
| 更高层的实体 API | :soon: 计划中，参见[原型与组件](archetypes)中的说明 |
| 服务器模组清单 | :soon: 0.3.0 中未使用 |
