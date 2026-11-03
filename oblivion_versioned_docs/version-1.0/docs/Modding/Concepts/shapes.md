---
sidebar_position: 1
---

# Shapes: archetypes and mixins

Everything the SDK keeps track of is an entity: each player, each character, each NPC, each item on the ground. A
shape is how you say what an entity holds. There are two kinds. An **archetype** is a kind of entity, such as
`MainCharacter`, `Npc` or `DroppedItem`. A **mixin** is a reusable set of fields: archetypes include it, or you add it
to an archetype someone else declared. You declare a shape as a small struct, and the SDK writes the rest.

```csharp title="MyMod.Common/Wallet.cs"
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

// A mixin: a set of fields. [Extends] gives every player one.
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(Player))]
public readonly partial struct Wallet
{
    public partial int Balance { get; set; }
}
```

Both halves now read `player.Balance` on any `Player`, and the server writes it:

```csharp
// On the server, in a service that asked for IEntities in its constructor.
foreach (var player in entities.Query<Player>())
    player.SetBalance(player.Balance + 10);
```

`Replication.ServerAuthoritative` decides who sees the balance and who may change it. Replication has a page of its
own: [Replication and authority](replication.md).

## How it works

### Declaring a shape

A shape is a `public readonly partial struct` with one of two attributes:

| Attribute | Declares | Example |
| --- | --- | --- |
| `[Archetype]` | A kind of entity. Each entity gets a network identity and an owner, and is sent to the players; `[Archetype(Networked = false)]` keeps it on the half that created it. An archetype with fields of its own also says whether they replicate: `Replication = Replication.X`. | `MainCharacter`, `Npc`, `Player` |
| `[ArchetypeMixin(Replication.X)]` | A set of fields that archetypes include, or that `[Extends]` adds to one. `Replication` says whether they are sent and who may write them; `Replication.None` keeps them local. | `Transform`, `Vitals`, `Wallet` |

Declare each field as a `public partial` property with `get` and `set`. The SDK writes the other half of each
property: the value lives on the entity, not in the struct. A shape is a handle to one entity, so copying it is cheap,
and every copy reads and writes the same entity. A list or dictionary is the one exception to `public`; see
[Replication and authority](replication.md#lists-and-dictionaries).

Shapes go directly in a namespace, not nested inside a class. Put the shapes both halves use in `MyMod.Common`
(see [Project layout](../Getting-started/project-layout.md)).

A shape that only one project uses can be `internal`. Everything the SDK writes for it stays internal too, and a
public archetype may include an internal mixin.

### Building an archetype from mixins

`[Include(typeof(Mixin))]` puts a mixin's fields on an archetype. An archetype can include as many mixins as it
likes, and can declare fields of its own next to them:

```csharp title="MyMod.Common/Target.cs"
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

[ArchetypeMixin(Replication.None)]
public readonly partial struct Health
{
    public partial float Current { get; set; }
    public partial float Max { get; set; }
}

[Archetype(Networked = false)]
[Include(typeof(Health))]
public readonly partial struct Target
{
    public partial int Points { get; set; }
}
```

A `Target` has `Current`, `Max` and `Points`. The included fields read as if `Target` declared them:
`target.Current`, not `target.Health.Current`.

`[Include]` takes mixins only. To build on an archetype, use `[IncludeArchetype]` (below).

### Prefixes

A shape exposes each name once. If two includes bring a member of the same name, or an include brings one that the
archetype declares itself, the build stops with `READYM041`. Give one of the includes a prefix, the optional second
argument, and every member it brings gets that word in front:

```csharp
[Archetype(Networked = false)]
[Include(typeof(Health))]
[Include(typeof(Shield), "Shield")]   // Shield also has Current and Max
public readonly partial struct Target;
```

Now `target.Current` is the health and `target.ShieldCurrent` is the shield.

Prefixes are also there for names that would read badly once flattened. The SDK's `MainCharacter` includes
`ParentCell` with the prefix `ParentCell`, so its `X` and `Y` read `ParentCellX` and `ParentCellY` rather than a bare
`X` next to the character's position. It includes three attribute mixins with the prefixes `Effect`, `Skill` and
`Social`, which is why it has `GetSkillAttribute` and `GetEffectAttribute` instead of three methods called
`GetAttribute`.

Two things are not clashes: the same mixin reached twice (for example once directly and once through an included
archetype) is one member, and methods of the same name that take different parameters are overloads.

### Building on another archetype

`[IncludeArchetype(typeof(X))]` builds an archetype on another one and takes all of its fields, including everything
that archetype includes. This is inheritance, so an archetype has at most one; combine further data with `[Include]`.
The SDK's `ServerSummon` is built this way:

```csharp
[Archetype]
[IncludeArchetype(typeof(Npc))]
[Include(typeof(SummonedBy))]
public readonly partial struct ServerSummon;
```

A `ServerSummon` converts to an `Npc` on its own, and an `Npc` converts back with a cast, which throws
`InvalidCastException` when the entity is not a `ServerSummon`:

```csharp
Npc npc = summon;                       // always works
var again = (ServerSummon)npc;          // throws if npc is not a ServerSummon
```

When you are not sure, use `TryAs` (see [What every shape can do](#what-every-shape-can-do)).

### Adding fields to a shape you do not own

`[Extends(typeof(X))]` on a mixin adds it to every entity created as the archetype `X`. It goes on mixins only; on an
archetype the build stops with `READYM049`. This is how a mod puts its own
data on the SDK's shapes: the core scopes (`Player`, `Area`, `Cell`, `World`, see [Scopes](scopes.md)) and the
Oblivion shapes (`MainCharacter`, `Npc`, `DroppedItem` and the rest, see
[Players and characters](../Game/players-and-characters.md)). `Wallet` above extends `Player`. A mixin that only one
half uses can extend a shape too; this one keeps a map marker per character on the client:

```csharp title="MyMod.Client/Marker.cs"
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Values;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[ArchetypeMixin(Replication.None)]
[Extends(typeof(MainCharacter))]
public readonly partial struct Marker
{
    public partial MarkerHandle MarkerHandle { get; set; }
}
```

The mixin's fields appear on the extended shape: `character.MarkerHandle`. You can also query the mixin itself,
alone or next to the shape it extends: `Query<Marker>()`, `Query<MainCharacter, Marker>()`.

An extended field is a property you can assign outside a loop. Inside a `foreach` over a query, C# does not allow
assigning it, so the SDK also generates a `SetX` method: `player.SetBalance(...)` in the first example.

`[Extends]` takes an optional prefix as well, for the same reasons as `[Include]`. If two mods both add a `Level` to
`MainCharacter`, C# cannot tell which one `character.Level` means and refuses to compile. The SDK's own `Dialogue`
mixin extends `Player` with the prefix `Dialogue` for this reason. A mixin can extend more than one archetype; repeat
the attribute.

### Computed properties

A property written with a body, instead of declared `partial`, is worked out from the shape's fields rather than
stored. Make it `public`, and every shape that includes the mixin, builds on it, or that it extends gets it too:

```csharp
[ArchetypeMixin(Replication.None)]
public readonly partial struct Health
{
    public partial float Current { get; set; }
    public partial float Max { get; set; }

    public bool IsLow => Current < Max / 4;

    public float Missing
    {
        get => Max - Current;
        set => Current = Max - value;
    }
}
```

The `Target` above now has `target.IsLow` and `target.Missing`, a query loop over `Target` reads them too, and a
prefix renames them like the fields: `target.ShieldIsLow`. On a shape the mixin extends, a computed property with a
setter is assigned through `SetX`, like an extended field. The SDK's `Vitals` works out `IsDead` this way, which is
how `MainCharacter` and `Npc` have it.

Only public instance properties with a public getter go to other shapes. Methods stay on the mixin; reach them with
`As<T>()`, as in `target.As<Health>().Heal()`.

### Tags

`[Tag(typeof(T))]` on an archetype puts a tag on every entity created as it. A tag carries no values; it changes how
the runtime treats the entity. `T` has to be a struct implementing Friflo's `ITag` interface (from the
`Friflo.Engine.ECS` package the SDK builds on), which is why it is named with `typeof`. Repeat the attribute to add
more than one. Tags go on archetypes only; on a mixin the build stops with `READYM048`.

These are the tags that change how the server treats your entities. All of them are about
[who owns an entity](replication.md#who-owns-an-entity), so they matter only for a replicated archetype in an area or
cell.

| Tag | What it does | The SDK uses it on |
| --- | --- | --- |
| [`AllowOwnershipTransferOnScopeEnterTag`](../../../api-reference/ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeEnterTag.md) | Hands the entity to the player whose game runs its area or cell. The first player into an empty one takes it, and it follows when that player changes or when the entity moves to another cell. Without it, an entity keeps the owner it was created with, which for one the server creates is the server. | NPCs, containers, flora, furniture, dropped items |
| [`AllowOwnershipTransferOnScopeLeaveTag`](../../../api-reference/ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeLeaveTag.md) | When the entity's owner leaves its area or cell, hands it to another player there, or to the server if nobody is left. | NPCs, containers, flora, furniture, dropped items |
| [`KeepOwnerOnScopeLeaveTag`](../../../api-reference/ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.KeepOwnerOnScopeLeaveTag.md) | The owner keeps the entity after leaving its area or cell, and no player arriving takes it while the owner is connected. It wins over the two tags above. Use it for something that belongs to one player, such as a companion. | Summons. NPCs get it while they are in combat, so the player fighting them keeps them. |

:::warning
An entity a player owns is deleted when that player leaves its area or cell, unless it carries
`AllowOwnershipTransferOnScopeLeaveTag` or `KeepOwnerOnScopeLeaveTag`. Entities the server owns, and entities in no
area or cell, are not affected.
:::

A campfire the server places, run by whichever player is nearby, and still there when they leave:

```csharp
[Archetype]
[Tag(typeof(AllowOwnershipTransferOnScopeEnterTag))]
[Tag(typeof(AllowOwnershipTransferOnScopeLeaveTag))]
[Include(typeof(Transform))]
public readonly partial struct Campfire;
```

The other tags in the SDK are internal to the runtime and cannot be put on an archetype.

:::note
Not in 1.0 yet: checking or querying an entity by a tag. Tags are useful today for the SDK's own tags, which the
runtime reads.
:::

### Finding an entity by a value

`[Index]` on one property lets you find the entity holding a given value, and keeps that lookup current when the value
is written. One property per shape may carry it (`READYM047`).

```csharp
[ArchetypeMixin(Replication.None)]
public readonly partial struct Ticket
{
    [Index]
    public partial int Number { get; set; }
}
```

```csharp
// Remove the entity holding ticket 42, if there is one.
if (entities.TryLookup(42, out Ticket ticket))
    entities.Delete(ticket);
```

The core shapes are indexed already: `Player` by its `PlayerId`, `Area` by its `AreaId`, `Cell` by its `FullCellId`,
and `MainCharacter` by its `PlayerId`. That is how a server RPC handler finds the sender's player:
`entities.TryLookup(context.Sender, out Player player)`. See [Identity values](identity.md).

### Scope shapes

An archetype that declares `IScope` (from `ReadyM.SDK.Archetypes`) can hold other entities: those created in it are
removed with it, and a query can be narrowed to it. Such a shape converts to a scope on its own, so you pass the shape
itself wherever a scope is asked for, as in `entities.Create<Tent>(camp)`. [Scopes](scopes.md) covers them.

```csharp
[Archetype(Replication = Replication.ServerAuthoritative)]
public readonly partial struct Camp : IScope
{
    public partial int Size { get; set; }
}
```

### What every shape can do

On top of its fields, the SDK gives every shape a few members:

| Member | Archetype | Mixin | What it does |
| --- | --- | --- | --- |
| `IsValid` | yes | `IsValid()` | Whether the entity still exists. On a mixin, and in generic code, it is the extension method `IsValid()`. |
| `Is<T>()` | yes | | Whether the entity also carries the shape `T`. |
| `As<T>()` | yes | | The same entity as the shape `T`. Throws [`InvalidEntityException`](entities-and-queries.md) when it does not carry `T`. |
| `TryAs<T>(out T)` | yes | | The same, returning `false` instead of throwing. |
| `Keep()` | yes | yes | The entity as a shape you can store. See below. |
| `Field` | replicated only | replicated only | A nested class naming each field, such as `Wallet.Field.Balance`. |

```csharp
if (npc.TryAs(out ServerSummon summon))
    logger.LogInformation("Summoned by {Player}", summon.Requester);
```

**`Keep()`.** A `foreach` over a query may hand you a lightweight view of the entity that only works inside the
loop, depending on how the shape is stored. `Keep()` turns it into the shape, which you can put in a list, keep in a
field, or call `TryAs` on. On a shape you already hold, `Keep()` returns it unchanged, so writing `Keep()` is always
safe. [Entities and queries](entities-and-queries.md) has the details.

```csharp
var summons = new List<ServerSummon>();

foreach (var npc in entities.Query<Npc>())
    if (npc.Keep().TryAs(out ServerSummon summon))
        summons.Add(summon);
```

**`Field`.** A replicated shape gets a nested `Field` class with one token per field (`Wallet.Field.Balance`) and
`Field.All` for every field at once. A token names a value without reading it. You pass one to
`Override` (see [Replication and authority](replication.md)) and to the client's game-state mapping (see
[Game state mapping](../Advanced/game-state-mapping.md)). A shape that does not replicate has no `Field` class.

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM041` | The shape would expose one name twice: two includes, or an include and the shape itself, have a member of the same name. | Give one `[Include]` a prefix, as in `[Include(typeof(Shield), "Shield")]`, or rename one of the members. |
| `READYM042` | `[Include]` names an archetype. `[Include]` is for mixins. | Build on it with `[IncludeArchetype(typeof(X))]`. |
| `READYM043` | `[IncludeArchetype]` names a mixin. | Include it with `[Include(typeof(X))]`. |
| `READYM047` | More than one property on the shape has `[Index]`. A shape is found by one value. | Keep `[Index]` on one of them. |
| `READYM048` | `[Tag]` is on a mixin. Tags go on the archetype entities are created as. | Move the `[Tag]` to an archetype. |
| `READYM049` | `[Extends]` is on an archetype. `[Extends]` adds a mixin to an archetype. | Move the fields to a mixin and put `[Extends]` on that. |
| `CS0579` | Two `[IncludeArchetype]` on one archetype. An archetype builds on one other at most. | Keep one, and include the other's data as mixins. |
| `CS9248` | A shape's partial property has no implementation. The SDK did not generate the shape: it is nested inside a class, or it has neither `[Archetype]` nor `[ArchetypeMixin]`. | Move the struct directly into a namespace and give it one of the two attributes. |

The errors about replicating a shape (`READYM009`, `READYM014` and others) are listed on
[Replication and authority](replication.md#related-diagnostics).

## Reference

* [ArchetypeAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ArchetypeAttribute.md)
* [ArchetypeMixinAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ArchetypeMixinAttribute.md)
* [IncludeAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.IncludeAttribute.md)
* [IncludeArchetypeAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.IncludeArchetypeAttribute.md)
* [ExtendsAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ExtendsAttribute.md)
* [TagAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.TagAttribute.md)
* [IndexAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.IndexAttribute.md)
* [IScope](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IScope.md)
* [ArchetypeExtensions](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md)
* [IArchetype](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetype.md),
  [IArchetypeMixin](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeMixin.md),
  [IArchetypeQueryable](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md),
  [IIndexed&lt;TKey&gt;](../../../api-reference/ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IIndexed-1.md)
* [Value&lt;TShape, TValue&gt;](../../../api-reference/ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Value-2.md),
  [Collection&lt;TShape, TAccess&gt;](../../../api-reference/ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Collection-2.md),
  [Shape&lt;TShape&gt;](../../../api-reference/ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Shape-1.md)
* [Player](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md),
  [Area](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Area.md),
  [Cell](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md),
  [World](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.World.md)
* [MainCharacter](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.MainCharacter.md),
  [Npc](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Npc.md),
  [ServerSummon](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.ServerSummon.md)
* [AllowOwnershipTransferOnScopeEnterTag](../../../api-reference/ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeEnterTag.md),
  [AllowOwnershipTransferOnScopeLeaveTag](../../../api-reference/ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeLeaveTag.md),
  [KeepOwnerOnScopeLeaveTag](../../../api-reference/ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.KeepOwnerOnScopeLeaveTag.md)
