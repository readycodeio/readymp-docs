---
sidebar_position: 1
---

# Players and characters

Every player on the server is two entities: a `Player`, which says who they are, and a `MainCharacter`, which is
their body in the game world with its health, position, skills and inventory. The game's own people and creatures
are `Npc` entities, and creatures a player summons are `ServerSummon` entities. This page shows what each one holds
and how a mod reads and changes it.

```csharp title="MyMod.Server/SecondWind.cs"
using Microsoft.Extensions.Logging;
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

// Refills a player who is out of combat and below a quarter of their health.
[Service]
public sealed partial class SecondWind(IEntities entities, ILogger logger)
{
    private void Update()
    {
        foreach (var main in entities.Query<MainCharacter>())
        {
            if (main.IsDead || main.InCombat || main.Hp >= main.HpBase * 0.25f)
                continue;

            main.Hp = main.HpBase;

            if (entities.TryLookup(main.PlayerId, out Player player))
                logger.LogInformation("{Name} got a second wind", player.Nickname.ToString());
        }
    }
}
```

## How it works

### Player and MainCharacter

| | `Player` | `MainCharacter` |
| --- | --- | --- |
| What it is | The connected player: one per player, from the moment they finish connecting until they leave. It is also a [scope](../Concepts/scopes.md). | The player's character in the world. The server creates it from the player's save when they join. |
| What it holds | `PlayerId`, and `Nickname` from the `NicknameMixin`. Your own mod's per-player values go here too, with `[Extends(typeof(Player))]`. | Everything the game knows about the character: position, health, level, appearance, skills, inventory. |
| Look it up | `entities.TryLookup(playerId, out Player player)` | `entities.TryLookup(playerId, out MainCharacter main)` |

Both are looked up by the player's [`PlayerId`](../Concepts/identity.md), and `MainCharacter` carries it too, so you
can go from one to the other. Keep the `PlayerId` when you need to remember a player, and look the entity up again
when you use it.

`Nickname` is a fixed-size game string; call `ToString()` on it to get a `string`.

### What a character holds

`MainCharacter` is built from mixins, and their values read as properties of the character itself:

| Mixin | Members on `MainCharacter` |
| --- | --- |
| `Transform` | `Position` (a `Vector3`, in centimeters) and `Rotation` (yaw, in degrees) |
| `Vitals` | `Hp`, `Magicka`, `Fatigue`, their maximums `HpBase`, `MagickaBase`, `FatigueBase`, and `IsDead`, which is worked out from `Hp` |
| `LevelMixin` | `Level` |
| `PlayerActivity` | `InCombat`, `InDialogue`, and `DetectedByOtherPlayer`: the player is sneaking and another player's character can see them |
| `Appearance` | `Sex` (a `CharacterSex`), the race, hair, eye and face asset paths, and the face morph and skin collections |
| `Quiver` | `HasQuiver` and `ArrowCount` |
| `Equipment` | The inventory and `CurrentPoison`. See [Items and inventories](items-and-inventories.md). |
| `ParentCell` | `ParentCellKind`, `ParentCellX`, `ParentCellY`: the cell the character stands in. See [World and cells](world-and-cells.md). |
| `BaseIdMixin` | `BaseId`, the game form the character is made from |
| `SkillAttributes`, `EffectsAttributes`, `SocialAttributes` | The attribute maps, below |

A few flags from the game's animation state are useful too: `WeaponDrawn`, `IsMoving`, and `CharacterStateFlags`,
which says whether the character is running, sneaking, swimming, jumping, blocking, staggered, falling, dodging or
holding a torch:

```csharp
var sneaking = (main.CharacterStateFlags & CharacterStateFlags.IsSneaking) != 0;
```

To work with one mixin on its own, for example to hand the inventory to a method that takes any inventory, ask the
character for it: `main.As<Equipment>()`.

### Attributes, skills and effects

A character has three maps of numbers, each keyed by an enum cast to `byte`:

| Map | Key | Read | Write |
| --- | --- | --- | --- |
| Attributes and skills | `CharacterAttribute` (`Strength` to `Luck`, then `Armorer` to `Speechcraft`) | `TryGetSkillAttributeValue`, `GetSkillAttribute` | `SetSkillAttribute` |
| Active effects | `CharacterEffect` (`ResistFire`, `NightEyeBonus`, `WaterBreathing`, ...) | `TryGetEffectAttributeValue`, `GetEffectAttribute` | `SetEffectAttribute` |
| Social values | `CharacterSocialAttribute` (`Bounty`, `Fame`, `Infamy`, ...) | `TryGetSocialAttributeValue`, `GetSocialAttribute` | `SetSocialAttribute` |

```csharp
if (main.TryGetSkillAttributeValue((byte)CharacterAttribute.Blade, out var blade) && blade < 25f)
    main.SetSkillAttribute((byte)CharacterAttribute.Blade, 25f);

main.SetSocialAttribute((byte)CharacterSocialAttribute.Bounty, 0f);
```

A map only holds the keys the game has reported, so prefer the `TryGet...Value` form, or check with
`ContainsSkillAttributeKey` (and its `Effect` and `Social` twins) first.

### NPCs and summons

An `Npc` is a person or creature from the game. It has the same `Transform`, `Vitals`, `LevelMixin`, `Equipment`,
`ParentCell` and `BaseIdMixin` members as a character, plus:

* `RefId`, the reference the game knows it by;
* `SpawnerRefId`, set when it came from a spawner (see [Spawning](spawning.md));
* its AI state, and a queue of orders the server can give it (see [AI](ai.md)).

NPCs have no appearance, attributes or activity flags in the SDK.

A `ServerSummon` is an `Npc` that a player summoned with a spell. The server creates it when the spell is cast and
deletes it when the summon ends. On top of everything an `Npc` has, it carries `SummonedBy`: who cast it
(`Requester`), the player it follows (`MasterPlayer`), and whether and when it runs out (`Expires`, `ExpiresAtMs`).
A `ServerSummon` converts to an `Npc` wherever one is asked for.

Each NPC is simulated by one player's game, usually the master client of the cell it is in. That game moves it,
fights with it and reports its values; everyone else sees a copy.

### Who changes what

The game that owns an entity reports its values: each player's game reports their own character, and the game that
simulates an NPC reports that NPC. A write from the server overrules the report, and the owning game applies it,
which is how the example refills a player's health.

| | Client | Server |
| --- | --- | --- |
| Read any character or NPC | Yes | Yes |
| Change a character or NPC | Only your own character, with `Override` (below) | Any of them, with the property setters and `Set...` methods |
| Change an inventory or attribute map | No | Yes |

The full rules are in [Replication](../Concepts/replication.md).

## On the client

Ask for `IPlayers` to reach the local player:

| Member | What it gives |
| --- | --- |
| `LocalPlayer` | This player's `Player`, or `null` before they have one. |
| `LocalMainCharacter` | This player's `MainCharacter`, or `null` before the character exists. |
| `AreaPlayers` | Every character in the area the local player is in, theirs included. Empty while they are in none. |

```csharp title="MyMod.Client/LowHealthWarning.cs"
using OblivionMp.Sdk;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[Service]
public sealed partial class LowHealthWarning(IPlayers players, IUserInterface ui)
{
    private bool _warned;

    private void Update()
    {
        if (players.LocalMainCharacter is not { } me)
            return;

        var low = me.Hp < me.HpBase * 0.25f;
        if (low && !_warned)
            ui.ShowMessage("You are badly hurt.");

        _warned = low;
    }
}
```

A client changes a value of its own character with `Override` and the value's field token. A plain setter does not
build on the client (see below). `Override` returns `false`, and changes nothing, on a character that is not yours:

```csharp
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using ReadyM.SDK.Client;

if (players.LocalMainCharacter is { } me)
    me.Override(Vitals.Field.Hp, me.HpBase);
```

`MainCharacterExtensions` adds actions on the local player's character. Each one only works on that character, and
logs a warning and does nothing on anyone else's:

| Method | What it does |
| --- | --- |
| `ResurrectLocalPlayer()` | Brings the dead local player back to life. |
| `OpenCharacterCreator()` | Opens the race and face menu. Skills and level progress stay; only racial bonuses change, and active spell and potion effects end. |
| `OpenClassMenu()` | Opens the class menu. Skills and level progress stay; only the major skill bonus moves to the new class. |
| `OpenBirthSignMenu()` | Opens the birthsign menu. |

```csharp
using OblivionMp.Sdk.Archetypes.Extensions;

if (players.LocalMainCharacter is { IsDead: true } me)
    me.ResurrectLocalPlayer();
```

Two client-only mixins add what only this game knows about each character it shows (with
`using OblivionMp.Sdk.Archetypes.Mixins;`):

| Mixin | Member | Meaning |
| --- | --- | --- |
| `LocalVisibility` | `Hidden` | How hard the character is to see here: 0 in plain sight, 1 invisible. |
| `MappedActor` | `Pawn` | The game actor that shows this character, or `IntPtr.Zero` while there is none. Use it only to notice that the actor changed, never to read memory through it. An `Npc` has it too. |

The MarkerMod in the SDK repository uses both to fade a name marker over each player as they hide.

## On the server

Server mods read and write characters through `IEntities`, as in the example at the top. To look up the player
behind an RPC, use the sender: `entities.TryLookup(context.Sender, out MainCharacter main)`. The Arena template
does this to heal and move players on request.

`IPlayers` from `ReadyM.Relay.Server.Sdk.Players` covers what is about the player rather than their character. It is
the server's own interface, not the client's `IPlayers` above, and you ask for it the same way:

| Method | What it does |
| --- | --- |
| `Kick(playerId)` | Disconnects the player at once. They cannot rejoin until they restart the game. |
| `GetReadyMId(playerId)` | The id of the player's ReadyM account, or `null` if the server has not seen them since it started. |

A `PlayerId` is only good for one connection. The account id stays the same across reconnects, server restarts and
servers, so key anything you keep on disk by it:

```csharp title="MyMod.Server/Visits.cs"
using ReadyM.Api.Idents;
using ReadyM.Relay.Server.Sdk.Players;
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

[Service]
public sealed partial class Visits(IPlayers players)
{
    private readonly Dictionary<Guid, int> _visits = [];

    public void Count(PlayerId player)
    {
        if (players.GetReadyMId(player) is { } account)
            _visits[account] = _visits.GetValueOrDefault(account) + 1;
    }
}
```

To run code when a player connects or leaves, see [Server events](server-events.md).

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM017` | Client code assigns a synced value through its setter, such as `me.Hp = 100`. | Use `me.Override(Vitals.Field.Hp, 100f)` on your own character, or make the change on the server. |
| `READYM019` | Client code changes a synced collection, such as `AddItems` or `SetSkillAttribute`. | Make the change on the server, for example from an [RPC](../Concepts/rpc.md) the client sends. |

## Reference

* [MainCharacter](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.MainCharacter.md)
* [Npc](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Npc.md)
* [ServerSummon](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.ServerSummon.md)
* [Player](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md)
* [NicknameMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.NicknameMixin.md)
* [Transform](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Transform.md)
* [Vitals](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Vitals.md)
  and its [field tokens](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Vitals.Field.md)
* [LevelMixin](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.LevelMixin.md)
* [Appearance](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Appearance.md)
* [PlayerActivity](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.PlayerActivity.md)
* [Quiver](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Quiver.md)
* [SkillAttributes](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SkillAttributes.md),
  [EffectsAttributes](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.EffectsAttributes.md),
  [SocialAttributes](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SocialAttributes.md)
* [CharacterAttribute](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterAttribute.md),
  [CharacterEffect](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterEffect.md),
  [CharacterSocialAttribute](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterSocialAttribute.md),
  [CharacterSex](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterSex.md),
  [CharacterStateFlags](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterStateFlags.md)
* [SummonedBy](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SummonedBy.md)
* [IPlayers](../../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.IPlayers.md) (client)
* [MainCharacterExtensions](../../../api-reference/OblivionMp.Sdk.Archetypes.Extensions/OblivionMp.Sdk.Archetypes.Extensions.MainCharacterExtensions.md)
* [LocalVisibility](../../../api-reference/OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.LocalVisibility.md)
* [MappedActor](../../../api-reference/OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.MappedActor.md)
* [WriteExtensions](../../../api-reference/ReadyM.SDK.Client/ReadyM.SDK.Client.WriteExtensions.md)
* [IPlayers](../../../api-reference/ReadyM.Relay.Server.Sdk.Players/ReadyM.Relay.Server.Sdk.Players.IPlayers.md) (server)
