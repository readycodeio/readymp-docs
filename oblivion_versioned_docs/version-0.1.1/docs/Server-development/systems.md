---
sidebar_position: 2
---

# Gameplay systems

Just like on the client, the server SDK provides **systems** — classes that expose a tick method, run on the server's own update loop. Use these for logic that should run continuously on the server, independent of any single RPC call: passive income, timers, periodic world state checks, and so on.

## Declaring systems

A server-side system derives from [ModSystemBase](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase) and overrides `OnUpdate`:

```csharp title="Minimal server system example"
public class MySystem : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        // do something every server tick
    }
}
```

The `UpdateTick` passed to `OnUpdate` exposes `deltaTime` (seconds since the last tick) and `time` (seconds since server start).

:::important

Unlike client-side systems, server-side systems are **not** discovered automatically. Register each one explicitly in your mod's `Init` method:

```csharp
protected override void Init()
{
    Services.RegisterSystem<MySystem>();
}
```

:::

You can inject dependencies — such as [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) — through the constructor, same as any other service resolved from the dependency injection container.

```csharp title="A system with a dependency"
public class PassiveIncomeSystem(EcsApi ecsApi) : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        ecsApi.Query<WalletComponent>((ref wallet) =>
        {
            wallet.Balance += 1;
        });
    }
}
```
