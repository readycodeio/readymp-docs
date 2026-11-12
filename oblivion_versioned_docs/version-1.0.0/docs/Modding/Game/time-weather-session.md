---
sidebar_position: 6
---

# Time, weather and session

Players who share a place share its clock and its sky: each area has one time of day and one weather, and every
player in it sees the same. The server also sets two things for the whole session: the difficulty everyone plays at,
and the level the game's leveled lists roll at. This page covers reading and setting all four.

```csharp title="MyMod.Server/SessionSettings.cs"
using OblivionMp.Sdk.Serverside;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.Relay.Server.Sdk.Ecs;
using ReadyM.Relay.Server.Sdk.Events;
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

// Everyone fights at Expert, and leveled lists roll halfway between the lowest and highest player level.
[Service]
public sealed partial class SessionSettings(
    SessionDifficulty difficulty,
    SessionScaling scaling,
    IServerEvents events)
{
    private void Start()
        => events.OnWorldEntityCreated += OnWorldCreated;

    private void Stop()
        => events.OnWorldEntityCreated -= OnWorldCreated;

    private void OnWorldCreated(Entity world)
    {
        difficulty.Set(DifficultyTier.Expert, DifficultyTier.Expert);
        scaling.SetToMidLevel();
    }
}
```

The session settings live on the server's world entity, so the example waits for it to exist before it sets them.
[Server events](server-events.md) covers `OnWorldEntityCreated` and the other events.

## How it works

Four mixins hold this state. Each one extends a built-in [scope](../Concepts/scopes.md), so its values read as
members of that scope:

| Mixin | On | Members | Who sets it |
| --- | --- | --- | --- |
| `Time` | each `Area` | `GameHour` (0 to 24), `GameDaysPassed`, `TimeScale` (game time per real time) | The area's master client, and the server |
| `Weather` | each `Area` | `WeatherFormId` (the weather form), `TransitionRatio` (how far the change to it has got, 0 to 1) | The area's master client, and the server |
| `Difficulty` | the `World` | `DamageDealt`, `DamageTaken` | The server only |
| `LevelScaling` | the `World` | `Policy`, `LevelBlend` | The server only |

Read them from the scope, for example `area.GameHour` or `entities.World.DamageTaken`, or query the mixin itself,
for example `entities.Query<Difficulty>()`. The members come with
`using OblivionMp.Sdk.Common.Archetypes.Mixins;`.

:::tip
Inside a [service](../Getting-started/services.md), `Time` is the service's own clock (`Time.DeltaTime`), not this
mixin. To name the mixin there, write its full name, `OblivionMp.Sdk.Common.Archetypes.Mixins.Time`, or give it
another name at the top of the file:

```csharp
using GameTime = OblivionMp.Sdk.Common.Archetypes.Mixins.Time;

foreach (var clock in entities.Query<GameTime>())
    logger.LogInformation("It is {Hour:0.0} o'clock", clock.GameHour);
```

Reading `area.GameHour` from an `Area` has no such clash.
:::

### Time and weather

Every interior and every exterior world space is its own area (see [World and cells](world-and-cells.md)), with its
own clock and weather. The area's master client runs the clock and the weather in its game and reports them; the
server stores them on the area, and every player's game in the area applies what the area holds. A server mod can
set them the same way, and that wins:

```csharp
foreach (var area in entities.Query<Area>())
    area.SetGameHour(12f);
```

Inside a loop over a query, a value from a mixin that extends another shape is written with its `Set...` method
(`SetGameHour`, `SetWeatherFormId`, ...). Outside a loop, `area.GameHour = 12f` does the same. A `TimeScale` of 0 or
less is ignored by the games.

`SessionClock.NowGameHours()` gives the game time as one number of hours since the game started,
`GameDaysPassed * 24 + GameHour`. It reads one area's clock, so with players in several areas it is the time of one
of them, and it is 0 before any area exists.

### Difficulty

`SessionDifficulty.Set(damageDealt, damageTaken)` sets the difficulty every player's game runs at, as two
`DifficultyTier` values: one for the damage players deal, one for the damage they take. The tiers are the game's own,
`Novice`, `Apprentice`, `Adept`, `Journeyman`, `Expert` and `Master`. `Unset` leaves each game on the game's default,
`Adept`.

### Level scaling

The game rolls leveled lists (which creature a spawner makes, what loot a chest holds) at the player's level. With
several players, that would give each of them different creatures. `SessionScaling` picks one level for the whole
session instead, somewhere between the lowest and the highest player level:

| Method | Level |
| --- | --- |
| `SetToLowestLevel()` | the lowest player level |
| `SetToMidLevel()` | halfway between the lowest and the highest |
| `SetToHighestLevel()` | the highest player level |
| `SetTo(levelBlend)` | anywhere between: 0 is the lowest, 1 the highest. Throws outside 0 to 1. |
| `CurrentLevel()` | the level leveled lists roll at right now, or 0 while scaling is off or no player has a level yet |

Each setter turns scaling on: the `Policy` becomes `ScalingPolicy.BlendedLevel` and `LevelBlend` holds the blend.
Until one is called, the `Policy` is `Unset` and every player's game keeps its own level. With scaling on, the server
also takes over the game's creature spawners; see [Spawning](spawning.md).

## On the client

The client reads the same values. This shows a message when night falls where the local player is:

```csharp title="MyMod.Client/Nightfall.cs"
using OblivionMp.Sdk;
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Client.Entities;

namespace MyMod.Client;

[Service]
public sealed partial class Nightfall(IEntities entities, IPlayers players, IUserInterface ui)
{
    private bool _night;

    private void Update()
    {
        if (players.LocalMainCharacter is not { } me || !entities.TryGetScope(me, out Area area))
            return;

        var night = area.GameHour >= 21f || area.GameHour < 5f;
        if (night && !_night)
            ui.ShowMessage("Night falls.");

        _night = night;
    }
}
```

Clients do not set any of these values; time and weather come from the area's master client on its own.

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM017` | Client code assigns a synced value, such as a `Time`'s `GameHour`. | Set it on the server. |

## Reference

* [Time](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Time.md)
* [Weather](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Weather.md)
* [Difficulty](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Difficulty.md),
  [DifficultyTier](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DifficultyTier.md)
* [LevelScaling](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.LevelScaling.md),
  [ScalingPolicy](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ScalingPolicy.md)
* [SessionClock](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionClock.md)
* [SessionDifficulty](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionDifficulty.md)
* [SessionScaling](../../../api-reference/OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionScaling.md)
* [Area](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md),
  [World](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)
* [IServerEvents](../../../api-reference/ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.IServerEvents.md)
