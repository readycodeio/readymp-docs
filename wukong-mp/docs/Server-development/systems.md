---
sidebar_position: 4
---

# Gameplay systems

Just like on the client, the server SDK provides **systems**: classes that expose a tick method, run on the server's own update loop. Use these for logic that should run continuously on the server, independent of any single RPC call. Timers, periodic world state checks, and scaling rules that react to how many players are connected all belong here.

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

The [UpdateTick](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.ModSystemBase.UpdateTick) passed to `OnUpdate` exposes `DeltaTime` (seconds since the last tick) and `Time` (seconds since server start).

:::important

Unlike client-side systems, server-side systems are **not** discovered automatically. Register each one explicitly in your mod's `Init` method:

```csharp
protected override void Init()
{
    Services.RegisterSystem<MySystem>();
}
```

:::

You can inject dependencies, such as [EcsApi](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) or a logger, through the constructor, same as any other service resolved from the dependency injection container.

```csharp title="A system with dependencies"
public class BountySystem(EcsApi ecs, ILogger logger) : ModSystemBase
{
    protected override void OnUpdate(UpdateTick tick)
    {
        ecs.Query<BountyComponent>((ref bounty) =>
        {
            bounty.Multiplier = 1f + bounty.Kills * 0.05f;
        });
    }
}
```

## Reacting to player count

The most common reason to run a system rather than an RPC handler is that the answer depends on the whole world, not on one client's request. Scaling boss health with the number of connected players is the shipping example, taken from the co-op mod:

```csharp title="Scaling elite and boss HP with player count"
public class ScaleHpSystem(EcsApi ecs, ILogger logger) : ModSystemBase
{
    // written by an RPC handler, read here on the server loop
    public int ScalingPercent { get { ... } set { ... } }

    protected override void OnUpdate(UpdateTick tick)
    {
        // count all players on the server, not just the ones in this area
        var players = 0;
        ecs.Query<MainCharacterComponent, int>(ref players, static (ref _, ref players) => { players++; });

        if (players == 0) return;

        var targetScalingPercent = ScalingPercent * players;

        ecs.Query<TamerComponent, HpComponent>((ref tamer, ref hp) =>
        {
            if (!tamer.IsBossOrElite)
                return;  // do not scale common enemies

            if (hp is { HpMaxBase: 0, Hp: 0 })
                return; // a monster that has not spawned yet has no HP to scale

            var currentMultPercent = hp.HpMaxMulPercent == 0 ? 100 : hp.HpMaxMulPercent;
            if (targetScalingPercent != currentMultPercent)
            {
                hp.Hp *= (float)targetScalingPercent / currentMultPercent;
                hp.HpMaxMulPercent = targetScalingPercent;
            }
        });
    }
}
```

Note the shape of this system: it reads world state every tick, compares it against what it already applied, and only writes when the two disagree. A system that writes unconditionally sends a component delta to every client on every tick, which shows up immediately as egress in the [network stats](../Server/network-stats).

## Systems and RPC handlers together

`RegisterSystem<T>` also makes the system resolvable from the container, so an [RPC handler](custom-rpc) can take it as a constructor dependency. This is how a client-facing setting reaches a system: the handler validates and stores it, the system acts on it.

```csharp title="A handler that configures a system"
protected override void Init()
{
    Services.RegisterSystem<ScaleHpSystem>();
    Services.RegisterSingleton<RpcHandlers>();
}
```

```csharp
[ServerRpcFor(typeof(RpcContracts))]
public partial class RpcHandlers(ScaleHpSystem hpScaling) : ServerRpcHandlersBase
{
    partial void OnScaleBossHp(RpcContext context, int scalingPercent)
    {
        hpScaling.ScalingPercent = scalingPercent;
    }
}
```

:::note[No synchronisation needed]

RPC handlers and systems both run on the server's update thread as of `0.4.0`, so a field a handler writes and a system reads needs no locking or `Volatile` accessors. Handlers used to run on the network thread, which did require that care.

:::

## Cost of a system

Every system your mod registers runs inside the server's system root update, which is exactly what the **Server tick duration** chart in the [network stats](../Server/network-stats) measures. A system that scans every entity on a timer instead of reacting to a change is the usual cause of a rising p99 with a flat p50. That page is the fastest way to tell whether your system is the one costing tick time.
