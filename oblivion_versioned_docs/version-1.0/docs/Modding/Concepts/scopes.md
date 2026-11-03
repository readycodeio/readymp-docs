---
sidebar_position: 3
---

# Scopes

A scope is an entity that holds other entities: an area of the world, a cell inside it, or a player. Two things follow
from that. An entity held by a scope is deleted together with it, so you never clean up after an area that emptied.
And a client only sees what is in the scopes its player is in, which is how a player in Cyrodiil's wilderness is not
sent every dropped item in the Imperial City.

```csharp title="MyMod.Server/AreaCensus.cs"
using Microsoft.Extensions.Logging;
using OblivionMp.Sdk.Common.Archetypes;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

// Once a minute, logs how many players are in each area that has someone in it.
[Service]
public sealed partial class AreaCensus(IEntities entities, ILogger logger)
{
    private float _elapsed;

    private void Update()
    {
        _elapsed += Time.DeltaTime;
        if (_elapsed < 60f)
            return;

        _elapsed = 0f;

        var areas = new List<Area>();
        foreach (var area in entities.Query<Area>())
            areas.Add(area.Keep());

        foreach (var area in areas)
        {
            var players = 0;
            foreach (var main in entities.Query<MainCharacter>().InScope(area))
                players++;

            logger.LogInformation("Area {Area}: {Players} players", area.AreaId, players);
        }
    }
}
```

## How it works

### The built-in scopes

Every OblivionMP session has these. They are shapes like any other, in `ReadyM.SDK.Archetypes.Core`, so you query
them, look them up and read their values the same way:

| Shape | In Oblivion | Exists | Who sees what it holds | Its own values |
| --- | --- | --- | --- | --- |
| `World` | The whole session. | One, from server start to shutdown. | Every player. | None of its own. |
| `Area` | A world space: the outer container players move around in. Two players in one area can be far apart. | One per area a player has entered. Created when the first player enters, and kept after the last one leaves. | The players in that area. | `AreaId`, `MasterClient` |
| `Cell` | The loaded piece of a world space a player is standing in, one level finer than an area. | One per cell a player has loaded. Created when the first player loads it, and kept after the last one unloads it. | The players who have that cell loaded. | `FullCellId`, `MasterClient` |
| `Player` | A connected player, wherever they are. | One per player, from connecting until disconnecting. | Every player. | `PlayerId` |

A player's scope is global, like the `Player` entity itself: what it holds reaches every connected player, wherever
they and that player are, and is deleted when that player disconnects. Use it for anything that belongs to one player
and should follow them between areas.

`MasterClient` is the player whose game simulates what the area or cell holds, such as its NPCs. The SDK sets
`AreaId`, `FullCellId`, `MasterClient` and `PlayerId`: read them, never write them.

`World` is not a scope you put things in. It is the one entity that stands for the session, reached through
`entities.World`, and it carries session-wide values such as the difficulty. An entity created without a scope
belongs to none: if its archetype replicates, every player sees it, and it lives until something deletes it.

A player's main character is held by the area it is in, not by a cell: everyone in the area receives it, and each
game shows it only once its cell is loaded there. When the player moves to another area, the character is deleted and
created again in the new one, so keep anything that has to last for the whole session on `Player`, not on
`MainCharacter`.

### Areas and cells that stay

An OblivionMP server keeps every area and cell after the last player leaves, with what it holds, so the world is
still there when someone comes back. What does not stay is an entity a player owns: it is deleted when that player
leaves, unless its archetype says otherwise with one of the [ownership tags](shapes.md#tags).

### Putting an entity in a scope

Pass the scope to `Create`:

```csharp title="MyMod.Server/RpcHandlers.cs"
partial void OnPostBounty(RpcContext context, int gold)
{
    if (!entities.TryLookup(context.Sender, out Player player))
        return;

    var bounty = entities.Create<Bounty>(player);
    bounty.Gold = gold;
}
```

The bounty belongs to the sender's `Player`, so it is deleted when that player disconnects. On the server,
`Create<T>(scope, owner)` also says which player owns the new entity; see [Replication](replication.md).

Creating in a scope that has already gone throws `InvalidEntityException`.

### Finding an entity's scope

`TryGetScope` finds the scope of the kind you ask for that holds an entity:

```csharp
if (entities.TryLookup(context.Sender, out MainCharacter main)
    && entities.TryGetScope(main, out Area area))
{
    logger.LogInformation("{Player} is in area {Area}", context.Sender, area.AreaId);
}
```

It looks upwards: an entity held by a cell is also found to be in that cell's area. It returns `false` when no scope
of that kind holds the entity.

### Narrowing a query

`InScope(scope)` walks only the entities one scope holds itself, as the census does with `InScope(area)`. An entity
held by a cell is not held by the area around it, so narrow to the cell to find it.

### Adding values to a scope

Give every area, cell, player or the world a value of your own with `[Extends]` (the rules are in
[Shapes](shapes.md)):

```csharp title="MyMod.Common/Danger.cs"
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

// Every area gets a danger level. The server sets it; clients read it.
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(Area), "Danger")]
public readonly partial struct Danger
{
    public partial int Level { get; set; }
}
```

The prefix turns `Level` into `area.DangerLevel`. Inside a loop over a query, write it with
`area.SetDangerLevel(3)`; outside one, `area.DangerLevel = 3` works too.

OblivionMP adds its own values to the built-in scopes the same way:

| Scope | Values Oblivion adds | Page |
| --- | --- | --- |
| `World` | `Difficulty`, `LevelScaling` | [Time, weather and session](../Game/time-weather-session.md) |
| `Area` | `Time` (time of day), `Weather` | [Time, weather and session](../Game/time-weather-session.md) |
| `Cell` | `CellSeeding` | [World seeding](../Advanced/world-seeding.md) |
| `Player` | `NicknameMixin` (`player.Nickname`), `Journal`, `Dialogue`, `SpokenTopics` | [Players and characters](../Game/players-and-characters.md), [Quests and dialogue](../Game/quests-and-dialogue.md) |

`Dialogue` and `SpokenTopics` are added with the prefixes `Dialogue` and `Spoken`, so the members they put on
`Player` start with those words.

## On the client and on the server

| | Client | Server |
| --- | --- | --- |
| Scopes you see | The `World`, the area this player is in, the cells they have loaded, and every `Player`. | All of them. |
| Entities you see | Those held by that area and those cells, those held by any player, and those in no scope. | Every entity. |
| Creating in a scope | `Create<T>(scope)`, owned by this player. | `Create<T>(scope)`, owned by the server, or `Create<T>(scope, owner)`. |

When a player leaves an area, their client stops seeing what it held, and those entities' delete handlers run on that
client. See [Entities and queries](entities-and-queries.md).

## Reference

* [World](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)
* [Area](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md)
* [Cell](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)
* [Player](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md)
* [IScope](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IScope.md)
* [IEntitiesBase](../../../api-reference/ReadyM.SDK.Entities/ReadyM.SDK.Entities.IEntitiesBase.md)
* [ExtendsAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ExtendsAttribute.md)
* [Difficulty](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Difficulty.md),
  [LevelScaling](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.LevelScaling.md),
  [Time](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Time.md),
  [Weather](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Weather.md),
  [CellSeeding](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.CellSeeding.md),
  [NicknameMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.NicknameMixin.md),
  [Journal](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Journal.md),
  [Dialogue](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md),
  [SpokenTopics](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SpokenTopics.md)
