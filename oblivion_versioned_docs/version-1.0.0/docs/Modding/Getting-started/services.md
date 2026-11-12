---
sidebar_position: 4
---

# Services

A service is a class the SDK creates for you and keeps alive while your mod runs. Most of a mod's code lives in
services: something that happens every tick, something that sets up key bindings once, something other code calls
into. You declare it; the SDK finds it, creates it, hands it what it asks for and runs it.

```csharp title="MyMod.Server/PassiveIncome.cs"
using MyMod.Common;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class PassiveIncome(IEntities entities)
{
    private const float IntervalSeconds = 10f;
    private const int Income = 10;

    private float _elapsed;

    // Runs every tick.
    private void Update()
    {
        _elapsed += Time.DeltaTime;
        if (_elapsed < IntervalSeconds)
            return;

        _elapsed -= IntervalSeconds;

        foreach (var player in entities.Query<Player>())
            player.SetBalance(player.Balance + Income);
    }
}
```

## How it works

* Mark the class `[Service]`. It has to be `sealed` and `partial`; the SDK writes the other part.
* Ask for what you need in the constructor: the SDK's APIs, your [config](mod-entry-and-config.md#config-files),
  other services, your [RPC handler classes](../Concepts/rpc.md), and APIs from mods you depend on.
* There is exactly one of each service. Anything that asks for `PassiveIncome` in its constructor gets the same one.
* You never register a service anywhere. Declaring it is enough.

### Hooks

A service can declare any of these methods. Each one is optional, and each has to be `private void` with no
parameters:

| Method | When it runs |
| --- | --- |
| `Start` | Once, after every mod has loaded. Set things up here, such as key bindings. |
| `Update` | Every tick, while the service is enabled. |
| `OnEnabled` | After `Start`, and again each time the service is switched back on. |
| `OnDisabled` | Each time the service is switched off. |
| `Stop` | Once, when the mod unloads. Undo anything `Start` set up outside the mod. |

A service without `Update` costs nothing per tick. A service with none of `Start`, `OnEnabled` and `Update` is only
created when something first asks for it.

### Time

A service with an `Update` gets a `Time` property, refreshed before each call:

| Member | Meaning |
| --- | --- |
| `Time.DeltaTime` | Seconds since the previous update. |
| `Time.Elapsed` | Seconds since the game or server started. |
| `Time.Ticks` | How many updates came before this one. |

Use `DeltaTime` for anything that should happen at the same speed however fast the game runs, as the example does
with its payout timer.

:::note
Inside a service, `Time` always means the service's clock. To name the Oblivion `Time` mixin there (the game's time
of day, see [Time, weather and session](../Game/time-weather-session.md)), write its full name,
`OblivionMp.Sdk.Common.Archetypes.Mixins.Time`.
:::

### Switching services on and off

Ask for `IServices` to stop a service's `Update` and start it again while the mod runs. Switching calls the
service's `OnDisabled` and `OnEnabled`:

```csharp title="MyMod.Server/Rules.cs"
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Services;

namespace MyMod.Server;

[Service]
public sealed partial class Rules(IServices services)
{
    public void PauseIncome() => services.Disable<PassiveIncome>();

    public void ResumeIncome() => services.Enable<PassiveIncome>();
}
```

`IsEnabled<T>()` says whether a service is on, and every service has a public `Enabled` property that says the same
about itself. Services start enabled.

### Update order

Services update in an order the SDK works out once, at load. When one service has to run before or after another,
say so with `[UpdateOrder]` on its `Update`:

```csharp
[UpdateOrder(After = new[] { typeof(PassiveIncome) })]
private void Update()
{
    // runs after PassiveIncome every tick
}
```

`Before` and `After` are always honored. The priority number (100 by default, lower runs earlier) only decides
between services nothing else orders. Services nothing orders at all run in a fixed order by name, so a given set of
mods always ticks the same way.

### Watching entities

A service can also react when entities of a shape are created or deleted, with `[CreateHandler]` and
`[DeleteHandler]` methods. See [Entities and queries](../Concepts/entities-and-queries.md).

## On the client and on the server

| | Client | Server |
| --- | --- | --- |
| `Update` runs | every game frame, once the player is in a world | every server tick |
| Typical services | key bindings, on-screen messages, markers, reacting to what the local player does | game rules, timers, anything that decides an outcome |

On the client, services start updating once the game has a world to sync with. Until then, their `Update` does not
run, and the client log says so.

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM022` | The `[Service]` class is not `partial`. | Add `partial`. |
| `READYM023` | The `[Service]` class is not `sealed`. | Add `sealed`. |
| `READYM024` | A hook such as `Update` cannot be called. | Make it `private void` with no parameters. Ask for everything else in the constructor, and read the clock from `Time`. |
| `READYM025` | A create or delete handler has the wrong signature. | See [Entities and queries](../Concepts/entities-and-queries.md). |
| `READYM026` | A create or delete handler in a service names no shape. | Name one, as in `[CreateHandler(typeof(MainCharacter))]`. |
| `READYM033` | `[UpdateOrder]` names a class that is not a service with an `Update`. | Only order against services that update. |
| `READYM034` | `[UpdateOrder]` is somewhere other than on an `Update`. | Put it on the service's `Update`. |
| `READYM035` | The update order has a cycle. | Remove one of the constraints in the cycle the error lists. |

## Reference

* [ServiceAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ServiceAttribute.md)
* [UpdateOrderAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.UpdateOrderAttribute.md)
* [UpdateTime](../../../api-reference/ReadyM.SDK.Services/ReadyM.SDK.Services.UpdateTime.md)
* [IServices](../../../api-reference/ReadyM.SDK.Services/ReadyM.SDK.Services.IServices.md)
