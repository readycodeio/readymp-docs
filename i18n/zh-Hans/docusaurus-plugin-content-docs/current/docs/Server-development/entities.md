---
sidebar_position: 3
---

# 实体

[原型与组件](archetypes)介绍了实体由什么构成。本页介绍如何创建实体、如何再次找到它，以及如何读写它的数据。

这里的一切都通过 [`EcsApi`](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) 完成，你的模组从依赖注入容器中解析它：

```csharp
public class MySystem(EcsApi ecs) : ModSystemBase
{
    // ...
}
```

## 作用域

网络化实体属于某个**作用域**，作用域决定了谁会被告知它的存在，以及它能存活多久。选择方法就等于选择作用域：

| 方法 | 作用域 |
| --- | --- |
| `CreateGlobalEntity` | 所有人，整个会话期间 |
| `CreateAreaEntity` | 某一个区域中的玩家，随区域一起销毁 |
| `CreatePlayerEntity` | 单个玩家，随该玩家的实体一起销毁 |
| `CreateEntity` | 网络化，但不属于任何特定作用域 |
| `CreateLocalEntity` | 谁都看不到，实体永远不会离开服务器 |

每个方法都接受你注册原型时保留下来的 `ArchetypeId`：

```csharp
var shrine = ecs.CreateAreaEntity(Mod.ShrineArchetype, areaId);
```

作用域不是一种权限，而是一条投递规则。区域实体会发送给该区域中的玩家，并在区域消失时对他们消失，这样你就不必自己编写这部分的簿记逻辑。

### 本地实体

`CreateLocalEntity` 创建的实体永远不会被复制。用它来存放客户端完全不需要知道的服务器端簿记数据：计时器、缓存查找表、任务队列。它不占用任何网络带宽。

本地实体也可以携带本地组件，本地组件通过 `RegisterLocalComponent` 注册。参见[快速上手](getting-started#local-components)。

## 所有权

默认情况下，网络化实体由服务器拥有，也就是说客户端可以读取它但不能写入。每个 `Create*` 方法都有一个接受 `PlayerId` 的重载，用于把所有权交给某个玩家：

```csharp
// 这个由服务器拥有
var trap = ecs.CreateAreaEntity(Mod.TrapArchetype, areaId);

// 这个允许该玩家的客户端写入
var marker = ecs.CreateAreaEntity(Mod.MarkerArchetype, areaId, playerId);
```

当数据的权威方是玩家的客户端时（例如由他们的输入或本地游戏状态驱动的东西），就把所有权交给玩家。任何不该被客户端改动的东西，所有权都应留在服务器上。

## 查找实体

`Query` 会对每个携带你所指定组件的实体执行一次回调：

```csharp
ecs.Query<MainCharacterComponent, HpComponent>((ref character, ref hp) =>
{
    if (hp.IsDead)
        logger.LogInformation("{Player} died", character.PlayerId);
});
```

组件是以 `ref` 传入的，所以写入它们就等于写入实体。

当回调体需要实体本身而不只是它的组件时（通常是为了删除它或改变它的父级），使用 `QueryWithEntity`：

```csharp
ecs.QueryWithEntity<ShrineComponent>((entity, ref shrine) =>
{
    if (shrine.Depleted)
        ecs.DeleteEntity(entity);
});
```

把你自己的组件与某个作用域组件配对，就能缩小查询范围。`AreaScopeComponent` 对应单个区域，`MainCharacterComponent` 对应某个玩家的角色。

## 通过 ID 读写

如果你已经有了实体 ID，就不必再查询：

```csharp
if (ecs.HasComponent<BountyComponent>(entityId))
{
    ref var bounty = ref ecs.GetComponentRef<BountyComponent>(entityId);
    bounty.Kills++;
}
```

`GetComponentRef<T>` 直接返回指向存储的引用，所以通过它赋值就是写入。`TryGetComponent<T>` 则是把值复制出来，而 `SetComponent<T>` 会整体写回一个组件。

## 层级关系

实体之间可以建立父子关系，这主要用于管理生命周期：删除父实体，子实体会随之删除。

```csharp
ecs.SetParent(childId, parentId);

var children = ecs.GetChildren(parentId);
var parent = ecs.GetParent(childId);
```

`DeleteEntity` 删除单个实体。`DeleteEntityTree` 删除一个实体及其下的所有子实体，并返回删除的数量。

:::warning[实体访问是单线程的]

ECS 归服务器的更新线程所有。请在你的系统中，或在 RPC 处理器、事件处理器中查询和修改实体，它们都运行在该线程上。不要让 `GetComponentRef` 返回的 `ref` 跨越 `await`，也不要把它交给其他线程。

:::
