---
sidebar_position: 6
---

# 模组配置文件

模组可以附带 JSON 配置文件，并用一次调用把它们读取到你自己的类中。`0.4.0` 新增。

由于 `RegisterConfig` 在两侧的模组基类上都有，因此两侧的用法完全相同。区别在于文件是从哪个文件夹读取的，而这一点比听起来更重要：参见[客户端与服务器端配置](#client-and-server-config)。

## 定义配置类

一个带默认值的普通类。不需要特性，也不需要配置序列化器：

```csharp title="MyConfig.cs（放在共享项目中，或按侧分别放置）"
public class MyConfig
{
    public int MaxPlayers { get; set; } = 4;
    public bool AllowCheats { get; set; } = false;
    public string WelcomeMessage { get; set; } = "Have fun";
}
```

## 注册配置

在模组的 `Initialize`（客户端）或 `Init`（服务器端）中调用 `RegisterConfig<T>`：

```csharp
protected override void Initialize(IDependencyContainer services)
{
    RegisterConfig<MyConfig>();
}
```

这会从模组文件夹中读取 `config.json`，并把结果注册为单例，因此任何从依赖注入容器解析出来的类都可以把它作为构造函数参数：

```csharp
public class GreetingSystem(MyConfig config, IWukongChatApi chat)
{
    public void Greet() => chat.ShowLocalMessage(config.WelcomeMessage);
}
```

对应的文件放在模组文件夹中：

```json title="config.json"
{
  "maxPlayers": 6,
  "welcomeMessage": "No cheating"
}
```

键名匹配不区分大小写，允许注释和尾随逗号，任何你没有写出的键都会保留类中的默认值。上面的例子把 `allowCheats` 保留为 `false`。

## 多个文件

传入文件名即可把配置拆开：

```csharp
RegisterConfig<MyConfig>();                 // config.json
RegisterConfig<ArenaConfig>("arenas.json"); // arenas.json
```

每次调用都会注册各自的类型，因此两者可以独立解析。

## 文件有问题时会发生什么

| 情况 | 结果 |
| --- | --- |
| 文件不存在 | 使用类中的默认值，并记录一条警告 |
| 文件无法解析 | 抛出 `ModConfigException`，模组加载中止 |
| 文件中有类未声明的键 | 抛出 `ModConfigException`，并指出该键名 |

最后一条是刻意如此的。配置键名的拼写错误否则是完全看不出来的：你会把它写成 `maxPlayer`，发现没有任何效果，却毫无线索可查。

## 客户端与服务器端配置 {#client-and-server-config}

这个 API 是选择性启用的，并且按侧独立。从不调用 `RegisterConfig` 的模组不会读取任何东西，也不会有默认文件被自动创建。

由于模组的客户端部分和服务器端部分位于不同的文件夹，它们读取的是不同的文件：

* 客户端模组中的 `RegisterConfig` 从模组的 `client/` 文件夹读取，该文件夹会下发给每一名玩家。
* 服务器端模组中的 `RegisterConfig` 从模组的 `server/` 文件夹读取，该文件夹永远不会离开服务器。

因此仅供服务器使用的设置应放在服务器端部分，并保持私有。文件夹结构参见[模组管理](../Server/mod-management)。

:::warning

不要把任何敏感内容放进客户端配置文件。`client/` 中的一切都会发送给每一名加入的玩家，请把它当作公开内容对待。

:::

PvP 模组就是现成的例子：它的回合与竞技场设置是一个服务器端的 `config.json`，因此服务器管理员可以在托管该模组之前调整游戏模式的设置。
