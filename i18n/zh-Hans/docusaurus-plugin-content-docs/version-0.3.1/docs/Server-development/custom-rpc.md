---
sidebar_position: 3
---

# 自定义 RPC

服务器 RPC 让客户端向服务器发送请求，并可以选择接收响应。与[客户端中继 RPC](../Development/custom-rpc#client-relayed-rpc) 不同，服务器总是先运行你的代码：由它决定是否回复以及如何回复。

服务器 RPC 只定义一次，作为服务器模组和客户端模组共享的**契约**，放在两者都引用的公共项目中。契约声明消息每个方向的数据形状。服务器模组实现处理程序，客户端模组实现响应处理程序，后者在[在客户端处理服务器 RPC](../Development/custom-rpc#handling-server-rpc-on-the-client) 中说明。

## 声明契约 {#declaring-a-contract}

契约是一个带 `[ServerRpcContracts]` 特性的 [partial](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods) 静态类，每个 RPC 对应其中一个分部方法。每个方法必须标注 `[ClientToServer]`、`[ServerToClient]` 或两者，用来声明它承载哪个（哪些）方向：

```csharp title="包含一个单向推送和一对请求/响应的契约"
using ReadyM.Api.Multiplayer;

[ServerRpcContracts]
public static partial class RpcContracts
{
    // 单向推送：只有服务器可以发送
    [ServerToClient] public static partial void BeguilingChant(byte state);

    // 请求/响应：两个方向可以有不同的负载，因为它们
    // 声明为两个独立的重载
    [ClientToServer] public static partial void ScaleBossHp(int scalingPercent);
    [ServerToClient] public static partial void BossHpScaleConfirm(int scalingPercent, int players);
}
```

* 只带 `[ClientToServer]` 的方法是单向命令：客户端发送，服务器处理，没有回复。
* 只带 `[ServerToClient]` 的方法是单向推送：只有服务器可以发送。
* 同名的两个重载，各带一个特性，构成一对请求/响应。它们的负载不需要一致。
* 同时带**两个**特性的单个方法是对称的双向消息，共用一种负载形状。

参数遵循与[客户端中继 RPC](../Development/custom-rpc#sending-data) 相同的规则：基本类型或带 `[DeriveINetSerializable]` 的结构体。

:::important

契约项目会被服务器模组和客户端模组同时引用，两边都从其中读取线路编码。请一起重新编译并一起发布，否则两边对某个编码的含义会产生分歧。

:::

## 声明服务器端处理程序 {#declaring-server-side-handlers}

在一个继承 [ServerRpcHandlersBase](../../api-reference/ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.ServerRpcHandlersBase) 的 [partial](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods) 类中实现契约的服务器一侧，并用 `[ServerRpcFor]` 标注它所实现的契约类。对该契约的每个 `[ClientToServer]` 方向，定义一个对应的 `On...` 分部方法。SDK 会为每个 `[ServerToClient]` 方向生成相应的 `Send...` 方法。

```csharp title="服务器端 RPC 处理程序"
[ServerRpcFor(typeof(RpcContracts))]
public partial class RpcHandlers(ScaleHpSystem hpScaling, EcsApi ecs) : ServerRpcHandlersBase
{
    partial void OnScaleBossHp(RpcContext context, int scalingPercent)
    {
        hpScaling.ScalingPercent = scalingPercent;

        var players = 0;
        ecs.Query<MainCharacterComponent, int>(ref players, static (ref _, ref players) => { players++; });

        // 该设置影响整个服务器，所以向所有人确认
        ecs.Query<MainCharacterComponent>((ref player) =>
        {
            // 由 SDK 生成
            SendBossHpScaleConfirm(player.PlayerId, scalingPercent, players);
        });
    }
}
```

[RpcContext](../../api-reference/ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.RpcContext) 参数总是作为第一个参数注入，它暴露 `Sender`，即发送该请求的客户端的 [PlayerId](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId)。生成的 `Send...` 方法以一个 `PlayerId` 收件人作为第一个参数，后面才是响应负载。没有广播重载：要发给每个玩家，就像上面那样查询主角实体并逐个发送。

### 把类绑定到它的契约 {#binding-a-class-to-its-contract}

[`[ServerRpcFor]`](../../api-reference/ReadyM.Api.Multiplayer/ReadyM.Api.Multiplayer.ServerRpcForAttribute) 在每个服务器处理程序类和客户端 RPC 类上都是**必需的**，参数是它所实现的 `[ServerRpcContracts]` 类。你的模组可能直接或通过一连串共享项目引用了多个契约集合，而这个特性就是告诉生成器该针对哪一个生成代码。

只有被指定的契约类所声明的方向会被生成，因此一个类恰好实现一个契约集合。如果你有多个契约类，就给每个类配一个自己的处理程序类：

```csharp title="每个契约集合一个处理程序类"
[ServerRpcFor(typeof(BossContracts))]
public partial class BossRpc(EcsApi ecs) : ServerRpcHandlersBase { /* 只有 boss 相关的方向 */ }

[ServerRpcFor(typeof(ArenaContracts))]
public partial class ArenaRpc(EcsApi ecs) : ServerRpcHandlersBase { /* 只有 arena 相关的方向 */ }
```

省略该特性是编译错误（`SRPC004`），指定一个没有 `[ServerRpcContracts]` 标注的类也是编译错误（`SRPC005`）。

:::important

要让任何 RPC 处理程序被注册，该类**必须**在模组的 `Init` 方法中加入依赖注入容器。

```csharp
protected override void Init()
{
    Services.RegisterSingleton<RpcHandlers>();
}
```

:::

## 只回复发送者 {#replying-to-just-the-sender}

当响应只对发起请求的那个客户端有意义时，把发送者和你即将读取的实体对应起来。把你自己的组件与 `MainCharacterComponent` 配对，就能拿到用于比较的 `PlayerId`：

```csharp title="只回答一个玩家"
partial void OnGetBounty(RpcContext context)
{
    ecs.Query<MainCharacterComponent, BountyComponent>((ref main, ref bounty) =>
    {
        if (main.PlayerId == context.Sender)
        {
            SendGetBounty(context.Sender, bounty.Kills);
        }
    });
}
```

客户端只能请求服务器代表它自己行事，但没有任何机制阻止一个畸形或恶意的请求指向别人的实体，或者传入超出范围的值。在修改实体之前，务必用 `context.Sender` 核对你即将修改的实体，并在应用负载之前校验它。

## 处理程序运行在网络线程上 {#handlers-run-on-the-network-thread}

`On...` 方法是在解析数据包时于网络线程上调用的，而不是在服务器 tick 上。在处理程序中通过 `EcsApi` 读写组件是受支持的，但耗时较长的工作不行：那会阻塞所有客户端的数据包处理。如果响应依赖只有系统才能得出的状态，就把请求保存下来，让系统去处理，做法见[游戏系统](systems#systems-and-rpc-handlers-together)。

## 客户端一侧 {#client-side}

如何从客户端模组发送请求并处理响应，请见[在客户端处理服务器 RPC](../Development/custom-rpc#handling-server-rpc-on-the-client)。
