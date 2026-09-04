---
sidebar_position: 6
---

# 玩家

[`PlayerApi`](../../api-reference/ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.PlayerApi) 提供服务器模组所需的、与玩家本身而非其实体相关的功能：把玩家从服务器移除，以及跨会话识别玩家。

和其他服务一样，从依赖注入容器中解析它：

```csharp
public class Moderation(PlayerApi players, ILogger logger)
{
    // ...
}
```

## 踢出玩家

```csharp
players.Kick(playerId);
```

玩家会立即被断开连接。该方法没有原因参数，所以如果你想告知对方原因，请在踢出之前通过 RPC 发送一条消息。

## 跨会话识别玩家

[`PlayerId`](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId) 只在**单次服务器运行期间**标识一名玩家。它会在重连和重启后重新分配，因此不适合作为持久化数据的键。

`GetReadyMId` 返回的是 ReadyM 分配给该玩家账号的 ID：

```csharp
var accountId = players.GetReadyMId(playerId);
if (accountId is { } id)
{
    // 跨重连、重启和服务器都保持稳定
    _stats[id] = _stats.GetValueOrDefault(id) + 1;
}
```

如果服务器自启动以来没有见过该玩家，它会返回 `null`。这个 ID 在整个平台范围内是全局的：同一名玩家每次、在任何服务器上都带着同一个 `Guid`。任何需要持久化的数据都应该以它为键，而不是 `PlayerId`。

## 连接与断开事件

`PlayerApi` 也会引发自己的连接和断开事件，并同时携带两种 ID：

```csharp
players.OnPlayerConnected += e
    => logger.LogInformation("{Player} connected as {Account}", e.PlayerId, e.ReadyMId);
```

:::note[这两个事件将被统一]

`OnPlayerConnected` 和 `OnPlayerDisconnected` 与 [`ServerEventsApi`](server-events) 已有的事件重复，因此它们被标记为过时，并将在后续版本中合并进去。`PlayerApi` 本身会保留：`Kick` 和 `GetReadyMId` 是 SDK 的一部分。

新代码请优先使用 `ServerEventsApi` 上的 `OnPlayerConnected` 和 `OnPlayerDisconnected`。那两个事件还会额外提供玩家的实体，以及断开时的原因。

:::
