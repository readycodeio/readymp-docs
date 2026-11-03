---
sidebar_position: 2
---

# Entities and queries

Everything the session knows about is an entity: each player, each character, each dropped item, each area of the
world. What an entity holds is described by its [shapes](shapes.md). This page is about getting at entities: walking
over every entity of a shape, looking one up by its id, creating and deleting them, and running code when one appears
or goes.

```csharp title="MyMod.Server/Medic.cs"
using OblivionMp.Sdk.Common.Archetypes;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

// Every five seconds, tops up every player who is below half health.
[Service]
public sealed partial class Medic(IEntities entities)
{
    private float _elapsed;

    private void Update()
    {
        _elapsed += Time.DeltaTime;
        if (_elapsed < 5f)
            return;

        _elapsed = 0f;

        foreach (var main in entities.Query<MainCharacter>())
        {
            if (main.Hp < main.HpBase / 2)
                main.Hp = main.HpBase / 2;
        }
    }
}
```

## How it works

Ask for `IEntities` in the constructor of a service, an RPC handler class or anything else the SDK creates for you.
There is one on each half, in a different namespace:

| Half | Ask for |
| --- | --- |
| Client | `ReadyM.SDK.Client.Entities.IEntities` |
| Server | `ReadyM.SDK.Server.Entities.IEntities` |

Both share what is in `IEntitiesBase`, so most code reads the same on either half.

### Queries

`Query<T>()` walks every entity that has the shape `T`. `T` can be an archetype (`MainCharacter`, `Npc`) or a mixin
(`Vitals`). A mixin matches every entity that includes it, whatever its archetype, so `Query<Vitals>()` visits main
characters and NPCs alike.

Name up to six shapes to walk the entities that have all of them. The first can be an archetype or a mixin, the rest
are mixins. Each pass of the loop hands you one value per shape:

```csharp
// On the server: every player gets 10 gold.
foreach (var (player, wallet) in entities.Query<Player, Wallet>())
    wallet.Balance += 10;
```

`Wallet` here is the mod template's mixin, which every `Player` gets through `[Extends]`. Naming a mixin like that
in the query is the quickest way to read and write it in a loop.

`InScope(scope)` narrows a query to the entities one area, cell or player holds. See [Scopes](scopes.md).

An entity created while a loop runs is not visited by that loop.

### Looking one up

`TryLookup` finds the one entity whose indexed value matches, without walking anything. It works for shapes that
declare an `[Index]`; the ones you will use most are:

| Shape | Looked up by |
| --- | --- |
| `MainCharacter` | `PlayerId` |
| `Player` | `PlayerId` |
| `Area` | `AreaId` |
| `Cell` | `FullCellId` |

```csharp
if (entities.TryLookup(context.Sender, out MainCharacter main))
    main.Hp = main.HpBase;
```

It returns `false` when nothing holds that value, for example a player who has not spawned yet.

`World` returns the one entity that stands for the whole session. Reading it before the session has created it
throws `InvalidEntityException`.

### Writing inside a loop

Inside a `foreach`, assign the shape's own values, and those of the mixins it includes, as usual: `main.Hp = ...`
above is one. A value that another mixin added to the shape with `[Extends]` is written with its `SetX` method
instead, because C# does not allow assigning it on a loop variable:

```csharp
foreach (var player in entities.Query<Player>())
    player.SetBalance(player.Balance + 10);
```

Outside a loop, `player.Balance += 10` works too. On the client, values that replicate are written differently; see
[Replication](replication.md).

### Creating and deleting

| Call | What it does |
| --- | --- |
| `Create<T>()` | Creates an entity of archetype `T` in no scope. |
| `Create<T>(scope)` | Creates it in an area, cell or player, and it is deleted with that scope. See [Scopes](scopes.md). |
| `Create<T>(scope, owner)` | Server only. The same, owned by the player you name. |
| `Delete(shape)` | Deletes the entity. Returns `false` if it was already gone. |

Set the new entity's values right after creating it:

```csharp
var npc = entities.Create<Npc>(cell, owner);
npc.Position = main.Position;
npc.Rotation = main.Rotation;
```

You cannot create an entity inside a loop over a query: the build stops you (`READYM002`), and if the call is hidden
in a method the loop calls, it throws `StructuralChangeInQueryException`. Collect what you need in the loop and create
after it.

Deleting inside a loop is allowed. The entity is removed when the loop ends; reading it again before then throws
`InvalidEntityException`.

### Keeping an entity past the loop

The value a loop hands you is meant for that pass of the loop. To store it in a list, a field, or pass it to a method
that takes the shape, call `Keep()`:

```csharp
var dead = new List<Npc>();
foreach (var npc in entities.Query<Npc>())
{
    if (npc.IsDead)
        dead.Add(npc.Keep());
}

foreach (var npc in dead)
    entities.Delete(npc);
```

`Keep()` costs nothing when the loop already hands you the shape itself, so use it whenever a value leaves the loop.

### Entities that are gone

A shape you kept can outlive its entity: the player disconnects, the area empties, another mod deletes it. Check
before you use one you held on to:

```csharp
if (!_target.IsValid)
    return;
```

Every shape also has these:

| Member | What it does |
| --- | --- |
| `IsValid` | `true` while the entity still exists. |
| `Is<T>()` | Whether the entity also has shape `T`. |
| `TryAs<T>(out T shape)` | The same entity as shape `T`, or `false` if it does not have it. |
| `As<T>()` | The same entity as shape `T`. Throws `InvalidEntityException` if it does not have it. |

The SDK throws one of these when something goes wrong with an entity. None of them is worth catching; each one
points at a bug to fix:

| Exception | When |
| --- | --- |
| `InvalidEntityException` | You used an entity that no longer exists, or one a running loop deleted, or `As<T>()` on an entity without that shape. |
| `ComponentNotFoundException` | The entity exists but does not hold the value you read. |
| `StructuralChangeInQueryException` | You created an entity while a loop over a query was running. |

All three are in `ReadyM.SDK.Exceptions`.

### Running code when an entity appears or goes

Put a `[CreateHandler]` method on a shape to give its new entities their starting values. Put a `[DeleteHandler]` on
it to clean up after one:

```csharp title="MyMod.Server/Bounty.cs"
using Microsoft.Extensions.Logging;
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

// Server-only bookkeeping: no client ever sees a bounty.
[Archetype(Networked = false)]
public readonly partial struct Bounty
{
    public partial int Gold { get; set; }

    [CreateHandler]
    private void OnCreated() => Gold = 100;

    [DeleteHandler]
    private void OnDeleted(ILogger logger)
        => logger.LogInformation("A bounty of {Gold} went unclaimed", Gold);
}
```

A shape's own handler is an instance method returning `void`, and it can be `private`. It can ask for things the way
a constructor does, by adding parameters, as `OnDeleted` asks for a logger. Mixins can have handlers too; an entity
runs the handlers of every shape it is made of.

A [service](../Getting-started/services.md) can watch a shape it did not declare, including one from another mod.
Name the shape in the attribute and take it as the only parameter:

```csharp title="MyMod.Server/Arrivals.cs"
using Microsoft.Extensions.Logging;
using OblivionMp.Sdk.Common.Archetypes;
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

[Service]
public sealed partial class Arrivals(ILogger logger)
{
    [CreateHandler(typeof(MainCharacter))]
    private void Arrived(MainCharacter main)
        => logger.LogInformation("{Player} has a character", main.PlayerId);

    [DeleteHandler(typeof(MainCharacter))]
    private void Left(MainCharacter main)
        => logger.LogInformation("{Player} lost their character", main.PlayerId);
}
```

When they run:

* A create handler runs inside the `Create` call, before `Create` returns. It sees the entity before the code that
  created it sets anything, which is why it is the place for defaults and not for reading what the creator chose.
* Create handlers run only on the half that created the entity. On the server that includes the entities the server
  makes for the game, such as a player's main character.
* A delete handler runs on every half that has the entity, however it goes: deleted by a mod, removed with its scope,
  or gone from a client because the player walked away. The entity is still readable while the handler runs.
* The shape's own create handler runs before any service watching it, so a watcher sees the defaults. On delete it is
  the other way round: watchers first, the shape's own handler last.
* A deletion inside a loop runs its handlers when the loop ends.

:::note
Not in 1.0 yet: a create handler on the client for an entity that arrives from the server. To react to one, look for
it in a service's `Update`.
:::

## On the client and on the server

| | Client | Server |
| --- | --- | --- |
| What a query sees | The entities in the scopes this player is in. See [Scopes](scopes.md). | Every entity. |
| What you may write | Only what this player owns, and only as its propagation allows. See [Replication](replication.md). | Anything. |
| Who owns what you create | This player. | The server, or the player you pass to `Create<T>(scope, owner)`. |
| Holding a query | A query is a value you can keep in a field or return from a property. | A query only lives inside the method that asked for it. Ask for a new one each time. |

On the client, `using OblivionMp.Sdk;` adds shortcuts to `IEntities`: `entities.AllPlayers`,
`entities.AllMainCharacters` and `entities.AllDroppedItems` are the same as the matching `Query<T>()`. For the local
player and the players around them, ask for `IPlayers`; see [Players and characters](../Game/players-and-characters.md).

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM002` | `Create` is called inside a loop over a query. | Collect what you need in the loop and create after it. |
| `READYM020` | A shape's create handler is `static` or returns something. | Make it an instance method returning `void`. |
| `READYM021` | A shape declares more than one create handler. | Keep one and call the rest from it. |
| `READYM028` | A shape's delete handler is `static` or returns something. | Make it an instance method returning `void`. |
| `READYM029` | A shape declares more than one delete handler. | Keep one and call the rest from it. |
| `READYM025` | A handler in a service has the wrong signature. | Make it `private void`, taking the shape it watches and nothing else. |
| `READYM026` | A handler in a service names no shape. | Name one, as in `[CreateHandler(typeof(MainCharacter))]`. |

## Reference

* [IEntities (client)](../../../api-reference/ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.IEntities.md)
* [IEntities (server)](../../../api-reference/ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.IEntities.md)
* [IEntitiesBase](../../../api-reference/ReadyM.SDK.Entities/ReadyM.SDK.Entities.IEntitiesBase.md)
* [EntityQuery (client)](../../../api-reference/ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.EntityQuery-1.md),
  [ScopedQuery (client)](../../../api-reference/ReadyM.SDK.Client.Entities/ReadyM.SDK.Client.Entities.ScopedQuery-1.md)
* [EntityQuery (server)](../../../api-reference/ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.EntityQuery-1.md),
  [ScopedQuery (server)](../../../api-reference/ReadyM.SDK.Server.Entities/ReadyM.SDK.Server.Entities.ScopedQuery-1.md)
* [IEntitiesExtensions](../../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.IEntitiesExtensions.md)
* [ArchetypeExtensions](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md)
* [IArchetypeQueryable](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md),
  [IArchetypeMixin](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeMixin.md),
  [IIndexed](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IIndexed-1.md)
* [CreateHandlerAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.CreateHandlerAttribute.md)
* [DeleteHandlerAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.DeleteHandlerAttribute.md)
* [InvalidEntityException](../../../api-reference/ReadyM.SDK.Exceptions/ReadyM.SDK.Exceptions.InvalidEntityException.md)
* [ComponentNotFoundException](../../../api-reference/ReadyM.SDK.Exceptions/ReadyM.SDK.Exceptions.ComponentNotFoundException.md)
* [StructuralChangeInQueryException](../../../api-reference/ReadyM.SDK.Exceptions/ReadyM.SDK.Exceptions.StructuralChangeInQueryException.md)
