# 自定义组件

WukongMP SDK 允许在游戏中的实体上定义自定义数据组件。**网络化组件**会在服务器和每个已连接客户端之间同步，因此两边看到的数值一致，而你不需要为它编写任何消息传递代码。

一个组件由两半组成。[服务器模组](../../Server-development/getting-started#registering-components-and-archetypes)注册它并把它挂到原型上，客户端模组也做同样的事，双方用的是共享项目中的同一份定义。本页讲的是客户端这一半。

## 声明组件 {#declaring-the-component}

把组件放在客户端模组和服务器模组都引用的**共享项目**里。它是一个带 `[DeriveINetworkedComponent]` 特性的 `partial struct`，生成器会把每个私有字段变成公有属性，并生成序列化代码：

```csharp title="ExampleMod.Common/BountyComponent.cs"
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

组件字段用到的任何类型也必须放在共享项目里，理由相同：两边绝不能对它的内存布局产生分歧。

## 在客户端注册 {#registering-it-on-the-client}

在模组的 `Initialize` 中要做两件事：注册组件类型，以及注册一个把它挂到实体上的原型变更。

```csharp title="Mod.cs"
protected override void Initialize(IDependencyContainer services)
{
    services.Resolve<IComponentApi>().RegisterComponent<BountyComponent>();
    services.RegisterSingleton<IArchetypeRegistration, BountyRegistration>();
}
```

[`IComponentApi.RegisterComponent<T>`](../../../api-reference/WukongMp.Api/WukongMp.Api.IComponentApi) 把类型声明给网络层。原型变更则写在一个实现 [`IArchetypeRegistration`](../../../api-reference/ReadyM.Api.ECS.Registry/ReadyM.Api.ECS.Registry.IArchetypeRegistration) 的类中，SDK 会在构建 ECS 世界时调用它：

```csharp title="BountyRegistration.cs"
using ReadyM.Api.ECS.Registry;
using ReadyM.Api.ECS.Worlds;
using WukongMp.Sdk.Api;

public class BountyRegistration : IArchetypeRegistration
{
    public void Register(IArchetypeRegistry registry)
    {
        registry.ModifyArchetype(WukongApi.Archetypes.GlobalPlayerArchetype, b => b.Add<BountyComponent>());
    }
}
```

`WukongApi.Archetypes` 用来指定内置原型，与服务器 SDK 以静态成员形式在 `WukongArchetypes` 上暴露的是同一套。每个原型带有哪些组件、你的数据该放在哪一个上，请参见[原型与组件](../../Server-development/archetypes)。

:::note

`WukongApi.Archetypes` 是 `WukongApi` 中唯一可以在 `Register` 内部安全使用的部分。它自身没有依赖项，而其他 API 会在 ECS 世界还在构建时把它重新拉回容器。

:::

注册是叠加式的，所以注册你自己的并不会顶替掉 SDK 的。`ModifyArchetype` 是挂到已有原型上；同一个接口上的 `RegisterArchetype` 则创建一个新原型，适用于你的模组要生成自己的实体种类的情况。

## 让两边保持一致 {#keeping-the-two-sides-in-step}

组件 ID 是按位置分配的。它们按注册顺序编号，以一个字节的形式在网络上传输，并且在连接时不会重新协商。如果客户端和服务器注册了不同的组件，或者以不同顺序注册了相同的组件，这种不匹配不会被报告出来：接收方会从数据流中读出错误的组件。

实际操作中这并不难做对，只要你：

* 把每个组件定义都放在共享项目里，这样内存布局不会漂移，
* 每一侧的组件注册都集中在一处，并保持相同顺序，
* 在两边把它们挂到相同的原型上，
* 把客户端模组和服务器模组作为同一个包的同一版本一起发布。

[模组模板](https://github.com/readycodeio/wukongmp-mod-template)就是围绕这一点组织的：`ExampleMod.Common` 存放组件，`ExampleMod` 注册客户端这一半，`ExampleMod.Serverside` 注册服务器这一半。

## 仅服务器的状态 {#server-only-state}

如果客户端没有必要看到某个值，那么在客户端根本不需要为它准备组件。服务器 SDK 提供了[本地组件](../../Server-development/getting-started#local-components)，用于永远不离开服务器的状态，而且它们不占用任何网络流量。一次性事件而非状态，请用 [RPC](../custom-rpc)。
