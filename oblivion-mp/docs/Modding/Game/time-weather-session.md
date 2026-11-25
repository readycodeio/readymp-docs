---
sidebar_position: 6
---

# Time, weather and session

Everyone on a server is in the same hour of the same day: the server keeps one clock for the whole world. Weather is
per area, so players who share a place share its sky. The server also sets two things for the whole session: the
difficulty everyone plays at, and the level the game's leveled lists roll at. This page covers reading and setting
all four.

```csharp title="MyMod.Server/SessionSettings.cs"
using OblivionMP.SDK.Serverside;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Events;

namespace MyMod.Server;

// Everyone fights at Expert, and leveled lists roll halfway between the lowest and highest player level.
[Service]
public sealed partial class SessionSettings(
    SessionDifficulty difficulty,
    SessionScaling scaling,
    IServerEvents events)
{
    private void Start()
        => events.OnWorldCreated += OnWorldCreated;

    private void Stop()
        => events.OnWorldCreated -= OnWorldCreated;

    private void OnWorldCreated(World world)
    {
        difficulty.Set(DifficultyTier.Expert, DifficultyTier.Expert);
        scaling.SetToMidLevel();
    }
}
```

The session settings live on the server's world entity, so the example waits for it to exist before it sets them.
[Server events](server-events.md) covers `OnWorldCreated` and the other events.

## How it works

Four mixins hold this state. Each one extends a built-in [scope](../Concepts/scopes.md), so its values read as
members of that scope:

| Mixin | On | Members | Who sets it |
| --- | --- | --- | --- |
| `GameTime` | the `World` | `TimeOfDay` and `TimeOfDayMinutes` (minutes since midnight), `GameDay`, `Date`, `Timescale` (game time per real time) | The server only |
| `Weather` | each `Area` | `WeatherFormId` (the weather form), `TransitionRatio` (how far the change to it has got, 0 to 1) | The area's master client, and the server |
| `Difficulty` | the `World` | `DamageDealt`, `DamageTaken` | The server only |
| `LevelScaling` | the `World` | `Policy`, `LevelBlend` | The server only |

Read them from the scope, for example `entities.World.DamageTaken`, ask the scope for the whole mixin with
`entities.World.As<GameTime>()`, or query the mixin itself, for example `entities.Query<Difficulty>()`. The members come with
`using OblivionMP.SDK.Common.Archetypes.Mixins;`.

:::note
The mixin is `GameTime`, not `Time`. Inside a [service](../Getting-started/services.md), `Time` is the service's own
update clock (`Time.DeltaTime`), which is a different thing.
:::

### Time

The server owns the clock. `WorldClock` advances it while at least one player is in game, and every client pulls its
own game clock to it once a second: a client that is behind jumps forward, a client that is ahead runs at a timescale
of 1 until the server catches up, and no client ever sets its clock back, which the game does not survive. The drift
allowed either way is a minute. The clock is stored on the world entity and saved with it, so a restart carries on
from where it stopped. A fresh world starts at 6:00 on Morndas, 27th of Last Seed, 3E 433, as a new single-player
game does.

`GameTime` is server-authoritative, so only the server writes it. Ask the world scope for the mixin and write it there:

```csharp
var time = entities.World.As<GameTime>();

time.TimeOfDayMinutes = 12 * 60;          // noon
time.GameDay += 1;                        // tomorrow
time.Advance(TimeSpan.FromHours(6));      // six hours on, rolling the day over
```

A `Timescale` of 0 or less is ignored by every player's game. The server's own default is 30, one game minute every two real
seconds, which is what the single-player game runs at.

`WorldClock` is a [service](../Getting-started/services.md), so take it in your own service's constructor the way
the example at the top of this page takes `SessionDifficulty`. Its `NowGameHours()` gives the game time as one number
of hours since the game started, which is what you want for "has an hour of game time passed since I stored this". It
is 0 before the world entity exists.

A mod that wants to run time its own way disables `WorldClock` through [`IServices`](../Getting-started/services.md)
and advances `GameDay` and `TimeOfDayMinutes` itself.

#### The calendar

`Date` reads the clock as a date on the Tamrielic calendar, a `TamrielicDate` with `Day`, `Month`, `Year`, `Weekday`
and `Birthsign`. The game's year has 365 days and no leap years, and day 1 is Morndas, 27th of Last Seed, year 433. A
`TamrielicDate` stores no era, so the "3E" above is the game's convention rather than something you can read back.
Which era your server plays in is yours to decide.

```csharp
var date = entities.World.Date;
logger.LogInformation("{Weekday}, {Day} {Month} {Year}", date.Weekday, date.Day, date.Month, date.Year);
```

`new TamrielicDate(day, month, year)` goes the other way, and `GameDaysPassed` on it is the day number to write back
to `GameTime.GameDay`.

#### Waiting and sleeping

One clock for the server means one player's six-hour nap is everyone's six hours, so waiting and sleeping are off out
of the box. The wait key does nothing, and a bed opens the level-up menu when the player has a level-up ready and
does nothing otherwise.

Two settings in the SDK's own `config.json` bring it back, one on each side:

| Side | Key | Default | What it does |
| --- | --- | --- | --- |
| client | `HideWaitMenu` | `true` | Keeps the wait menu closed. Off, the menu opens as it does in the single-player game, and confirming it asks the server to skip time. |
| server | `AllowTimeSkip` | `false` | Skips the world's time when a player confirms the wait menu. Off, the request still reaches server mods. |

The single-player behaviour therefore needs both: `HideWaitMenu` off on the clients, `AllowTimeSkip` on on the server.

Whatever those are set to, a confirmed wait menu raises `TimeSkipRequestEvent` on the server, carrying the hours the
player chose (`Hours`, 1 to 24) and whether they were in a bed (`Sleeping`). Handle it to run your own rule, such as a
vote, a cost, or a skip that only works when a player is in a bed:

```csharp title="MyMod.Server/SleepOnly.cs"
using OblivionMP.SDK.Common.Archetypes.Mixins;
using OblivionMP.SDK.Common.Events;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class SleepOnly(IEntities entities)
{
    [EventHandler(Stage.Observe)]
    public void OnTimeSkipRequest(in TimeSkipRequestEvent e)
    {
        if (!e.Sleeping)
            return;

        entities.World.As<GameTime>().Advance(TimeSpan.FromHours(e.Hours));
    }
}
```

:::warning

The SDK applies the skip itself, in `Stage.Apply`, whenever `AllowTimeSkip` is on. A mod that also advances the clock
with that setting on skips the time twice. Either leave `AllowTimeSkip` off and let your own handler do the work, as
above, or cancel the event in an earlier stage so the SDK's handler does not run. A debug build of the SDK behaves as
if both settings were set, whatever the files say.

:::

### Weather

Every interior and every exterior world space is its own area (see [World and cells](world-and-cells.md)), with its
own weather. One player in each area is its master client, the game the server trusts to simulate what nobody owns.
That game runs the weather and reports each change as a
[networked event](../Concepts/networked-events.md), `WeatherChangeEvent`; the server stores it on the area, and every
player's game in the area applies what the area holds. A server mod can set it directly, and that wins:

```csharp
public void SetWeatherEverywhere(NetworkFormId weather)
{
    foreach (var area in entities.Query<Area>())
        area.SetWeatherFormId(weather);
}
```

A weather form id is a `NetworkFormId`. The SDK has no catalog of weather forms the way it has `Items` for items, so
either read one off an area that already has the weather you want, with `area.WeatherFormId`, or write the form id
from the game's data yourself. See [Identity](../Concepts/identity.md).

To hear about every change a master reports, handle the event on the server. Its `Area` member is the area it is for:

```csharp title="MyMod.Server/WeatherLog.cs"
using Microsoft.Extensions.Logging;
using OblivionMP.SDK.Common.Events;
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

[Service]
public sealed partial class WeatherLog(ILogger logger)
{
    [EventHandler(Stage.Observe)]
    public void OnWeatherChange(in WeatherChangeEvent e)
        => logger.LogInformation("Area {Area} turns to weather {Weather}", e.Area.AreaId, e.WeatherFormId);
}
```

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

The client reads the same values. This shows a message when night falls:

```csharp title="MyMod.Client/Nightfall.cs"
using OblivionMP.SDK;
using OblivionMP.SDK.Common.Archetypes.Mixins;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Client.Entities;

namespace MyMod.Client;

[Service]
public sealed partial class Nightfall(IEntities entities, IUserInterface ui)
{
    private bool _night;

    private void Update()
    {
        if (!entities.World.IsValid)
            return;

        var hour = entities.World.As<GameTime>().TimeOfDay.TotalHours;
        var night = hour >= 21 || hour < 5;

        if (night && !_night)
            ui.ShowMessage("Night falls.");

        _night = night;
    }
}
```

Clients do not set any of these values. Time comes from the server, and weather from the area's master client.

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM017` | Client code assigns a synced value, such as a `GameTime`'s `TimeOfDayMinutes`. | Set it on the server. |

## Reference

* [GameTime](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.GameTime.md)
* [Weather](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Weather.md)
* [Difficulty](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Difficulty.md),
  [DifficultyTier](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DifficultyTier.md)
* [LevelScaling](../../../api-reference/OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.LevelScaling.md),
  [ScalingPolicy](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ScalingPolicy.md)
* [WorldClock](../../../api-reference/OblivionMP.SDK.Serverside.Systems/OblivionMP.SDK.Serverside.Systems.WorldClock.md)
* [TamrielicDate](../../../api-reference/OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md),
  [Month](../../../api-reference/OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Month.md),
  [Weekday](../../../api-reference/OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Weekday.md),
  [Birthsign](../../../api-reference/OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Birthsign.md)
* [ClientConfig](../../../api-reference/OblivionMP.SDK/OblivionMP.SDK.ClientConfig.md),
  [ServerConfig](../../../api-reference/OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.ServerConfig.md)
* [SessionDifficulty](../../../api-reference/OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionDifficulty.md)
* [SessionScaling](../../../api-reference/OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionScaling.md)
* [Area](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md),
  [World](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)
* [IServerEvents](../../../api-reference/ReadyM.SDK.Server.Events/ReadyM.SDK.Server.Events.IServerEvents.md)
* [TimeSkipRequestEvent](../../../api-reference/OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.TimeSkipRequestEvent.md),
  [WeatherChangeEvent](../../../api-reference/OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.WeatherChangeEvent.md)
