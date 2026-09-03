---
sidebar_position: 5
---

# 自定义 RPC

WukongMP SDK 支持两种远程过程调用 (RPC) 消息：

* **客户端中继 RPC**：由客户端发送，服务器把它转发给其他客户端。服务器不对这类消息作出反应，只负责转发。本页大部分内容讲的是这种 RPC。
* **服务器 RPC**：由客户端发送给服务器，服务器运行你的服务器端逻辑，并可以回复。它的契约和服务器端处理程序在[服务器端开发](../Server-development/custom-rpc)中定义。本页讲的是如何处理服务器 RPC 的客户端一侧。

## 客户端中继 RPC {#client-relayed-rpc}

客户端中继 RPC 让你定义自己的事件，发送给连接到同一服务器的其他玩家，不涉及任何服务器端逻辑。这些事件可以携带任意有效负载，并支持多种
[中继模式](../../api-reference/ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode)。

### 声明一个 RPC 处理程序类 {#declaring-an-rpc-handler-class}

为了向你的模组添加自定义 RPC 过程，你必须定义一个
[partial](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)
类，它继承自
[ClientRpcHandler](../../api-reference/ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.ClientRpcHandler)。

```csharp title="最简 RPC 类定义"
public partial class MyRpc : ClientRpcHandler
{
    // 在此处编写 RPC 处理器
}
```

:::important

要注册任何 RPC 处理程序，类 **必须**被添加到 DI 容器中，在你的模组的 `Initialize` 方法中。请查阅
[ModBase](../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModBase) 的文档。

```csharp
protected override void Initialize(IDependencyContainer services)
{
    services.RegisterSingleton<MyRpc>();
}
```

:::

依赖项通过构造函数注入，所以需要日志记录器或其他服务的处理程序把它写成主构造函数参数即可：`public partial class MyRpc(ILogger logger) : ClientRpcHandler`。

### 定义 RPC 处理程序 {#defining-rpc-handlers}

为了向你的模组添加一个新的 RPC 处理程序，请添加一个带有
[RpcEvent](../../api-reference/ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.RpcEventAttribute)
属性的方法。

方法名必须以“On...”开头——在同一个类中会自动为发送 RPC 生成相应的“Send...”方法。

```csharp title="最简 RPC 处理器"
public partial class MyRpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestOthers)]
    private void OnMyCustomCall()
    {
        // 收到此消息时执行的操作
    }

    // 由 SDK 生成
    private void SendMyCustomCall() { ... }
}
```

该属性需要一个类型为
[RelayMode](../../api-reference/ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode)
的参数，该参数指示消息到达服务器时将如何传播给玩家。

当前支持以下模式：

| 中继模式                     | 描述                       |
| ------------------------ | ------------------------ |
| **AreaOfInterestOthers** | 消息已发送给同一等级的所有其他玩家        |
| **AreaOfInterestAll**    | 消息将发送给同一等级的所有玩家，包括发送者本人。 |
| **GlobalOthers**         | 消息已发送给服务器上的所有其他玩家        |
| **GlobalAll**            | 消息已发送给服务器上的所有玩家，包括发送者    |

### 发送数据 {#sending-data}

RPC 处理程序支持在参数中传递数据，这些数据要么是：

* 原始数据类型
* 被
  [[DeriveINetSerializable]](../../api-reference/ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.DeriveINetSerializableAttribute)
  装饰的结构体。
* 由 SDK 注入的特殊参数

一个 RPC 处理程序可以按任意数量、任意顺序声明这些参数。生成的“Send...”方法将具有相同的参数（不包括注入的参数）。

#### 基本数据类型 {#primitive-data-types}

我们支持在 C#
运行时定义的所有原始数据类型：`bool`、`char`、`sbyte`、`byte`、`short`、`ushort`、`int`、`uint`、`long`、`ulong`、`float`、`double`，以及
`string`。

```csharp title="传递基本数据"
public partial class MyRpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestOthers)]
    private void OnMyCustomCall(int number, string text)
    {
        // 收到此消息时执行的操作
    }

    // 由 SDK 生成
    private void SendMyCustomCall(int number, string text) { ... }
}
```

#### 复杂数据类型 {#complex-data-types}

您可以在 RPC 参数中使用复杂的数据结构。这些数据结构必须实现
[INetSerializable](https://revenantx.github.io/LiteNetLib/api/LiteNetLib.Utils.INetSerializable.html)
接口。

载荷结构的字段可以是任何可序列化类型，包括其他复杂类型，前提是它们也实现了
[INetSerializable](https://revenantx.github.io/LiteNetLib/api/LiteNetLib.Utils.INetSerializable.html)。

```csharp title="复杂 RPC 参数示例"
public partial class MyRpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestOthers)]
    private void OnPlayerBuffed(BuffData payload)
    {
        // 收到此消息时执行的操作
    }

    // 由 SDK 生成
    private void SendPlayerBuffed(BuffData payload) { ... }
}
```

SDK 提供了
[[DeriveINetSerializable]](../../api-reference/ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.DeriveINetSerializableAttribute)
属性，这使得 SDK 在大多数情况下能够自动生成序列化代码。为了实现这一点，结构体必须声明为
[partial](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)。

```csharp title="生成序列化代码"
[DeriveINetSerializable]
public partial struct BuffData(int buffId, float duration) : INetSerializable
{
    public int BuffId = buffId;
    public float Duration = duration;
}
```

如果你想对通过网络发送的数据拥有完全的控制权，也可以手动实现该接口。

我们将 [LiteNetLib](https://github.com/revenantx/litenetlib) 库作为我们网络栈的基础。你可以参考它的
[documentation](https://revenantx.github.io/LiteNetLib/index.html) 以了解如何使用
`NetDataWriter` 和 `NetDataReader`。

```csharp title="手写序列化代码"
public struct BuffAddData(int buffId, float duration) : INetSerializable
{
    public int BuffId = buffId;
    public float Duration = duration;

    public void Serialize(NetDataWriter writer)
    {
        writer.Put(BuffId);
        writer.Put(Duration);
    }

    public void Deserialize(NetDataReader reader)
    {
        BuffId = reader.GetInt();
        Duration = reader.GetFloat();
    }
}
```

#### 特殊参数 {#special-parameters}

目前只能使用一个特殊参数。我们可能会在未来版本的 SDK 中扩展此功能。

| 名称         | 类型                                                                                    | 描述              |
| ---------- | ---------------------------------------------------------------------------- | --------------- |
| `__sender` | [PlayerId](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId) | 发送该 RPC 的玩家的标识符 |

此参数可与其他参数一起使用，但在生成的“Send...”方法中不可见。

```csharp title="使用注入的参数"
public partial class MyRpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestOthers)]
    private void OnComplexEvent(int number, PlayerId __sender, BuffData buffData)
    {
        // 示例：处理发送者昵称
        if (WukongApi.Sync.TryGetPlayerInfoById(__sender, out var playerName, out _))
        {
            Logging.LogInfo("Received data from {Sender}", playerName);
        }
    }

    // 由 SDK 生成
    private void SendComplexEvent(int number, BuffData buffData) { ... }
}
```

### 线程 {#threading}

消息到达时在单独的网络线程上，但 SDK 会在调用每个 `[RpcEvent]` 处理程序之前把它调度到游戏线程上。因此处理程序内部可以直接操作游戏世界，操作 Unreal Engine 对象不需要额外处理：

```csharp title="在处理程序中操作游戏世界"
public partial class MyRpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnDespawnAllMonsters()
    {
        foreach (var monster in WukongApi.Sync.AreaTamers)
        {
            monster.Tamer?.CurrentRef.DestroyTamer(); // 调用 BGU_UnrealWorldUtil.DestroyActor
        }
    }
}
```

由于处理程序运行在游戏线程上，它们也共用游戏线程的时间预算。开销大的工作应该放到[系统](systems)里或后台任务上，而不是处理程序体内。

:::note

这只适用于客户端中继 RPC。服务器 RPC 的响应处理程序**不会**被自动调度，见下文。

:::

## 在客户端处理服务器 RPC {#handling-server-rpc-on-the-client}

服务器 RPC 契约声明在服务器模组和客户端模组共享的公共项目中，描述了请求（客户端到服务器）和响应（服务器到客户端）两个方向的数据形状。它们的定义方式请见[服务器端开发](../Server-development/custom-rpc)。

在客户端，定义一个继承
[ServerRpcClient](../../api-reference/ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.ServerRpcClient)
的 [partial](https://learn.microsoft.com/dotnet/csharp/programming-guide/classes-and-structs/partial-classes-and-methods)
类，用来向服务器发送请求并处理它的响应。这个类必须用 `[ServerRpcFor]` 标注它所实现的契约类，并且和客户端中继 RPC 一样，必须在模组的 `Initialize` 方法中注册。

与 `[RpcEvent]` 处理程序不同，这些方法是在解析响应时于网络线程上调用的。任何接触游戏世界的代码都要用 `RunOnGameThread` 包起来：

```csharp title="客户端处理服务器 RPC"
[ServerRpcFor(typeof(ExampleRpcContracts))]
public partial class MyServerRpc : ServerRpcClient
{
    // 服务器响应我们的 ScaleBossHp 请求时调用
    partial void OnBossHpScaleConfirm(int scalingPercent, int players)
    {
        RunOnGameThread(() =>
        {
            WukongApi.Chat.ShowLocalMessage(
                $"Boss HP is set to {scalingPercent}% and multiplied by {players} players.",
                FLinearColor.Gray);
        });
    }
}
```

调用生成的 `Send...` 方法即可把请求发给服务器：

```csharp
WukongApi.Services.Resolve<MyServerRpc>().SendScaleBossHp(150);
```

只有共享契约中声明的方向会被生成：单向的客户端到服务器 RPC 在客户端没有 `On...` 处理程序桩，单向的服务器到客户端 RPC 没有 `Send...` 方法。
