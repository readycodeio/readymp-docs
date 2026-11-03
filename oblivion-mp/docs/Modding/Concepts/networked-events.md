---
sidebar_position: 6
---

# Networked events

A networked event is a struct that describes one thing that happened: a player waved, a spell was cast, an item
changed hands. A mod raises it, the server checks it, and then it reaches the players who should hear about it. Along
the way any mod, on either side, can refuse it, change it, act on it or watch it, including mods that did not
declare it.

That is the difference from an [RPC](rpc.md). An RPC is one message with one handler on each side. An event has
stages, and every mod that cares about it gets a say in the order they run. Use an RPC to ask for something; use an
event when other mods should be able to see or shape what happened.

```csharp title="MyMod.Common/WaveEvent.cs"
using OblivionMp.Sdk.Common.Archetypes;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

// A character waves. Everyone who has its cell loaded sees it, and only the waving player's own game may raise it.
[NetworkedEvent(EventScope.Cell, Policy.SubjectOwner, Reject = typeof(WaveReject))]
public partial struct WaveEvent
{
    [Subject] public MainCharacter Character { get; set; }
}

public enum WaveReject
{
    TooSoon,
}
```

```csharp title="MyMod.Server/WaveRules.cs"
using MyMod.Common;
using ReadyM.Api.Idents;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Events;

namespace MyMod.Server;

// One wave every five seconds per player.
[Service]
public sealed partial class WaveRules
{
    private static readonly TimeSpan Cooldown = TimeSpan.FromSeconds(5);

    private readonly Dictionary<PlayerId, DateTime> _lastWave = [];

    [EventHandler(Stage.Validate)]
    public void Check(in WaveEvent e, EventContext ctx)
    {
        if (_lastWave.TryGetValue(ctx.Origin, out var last) && DateTime.UtcNow - last < Cooldown)
            ctx.Cancel(WaveReject.TooSoon);
    }

    [EventHandler(Stage.Observe)]
    public void Remember(in WaveEvent e, EventContext ctx)
        => _lastWave[ctx.Origin] = DateTime.UtcNow;
}
```

```csharp title="MyMod.Client/Waves.cs"
using MyMod.Common;
using OblivionMp.Sdk;
using OblivionMpCSharpMod.Input;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Client.Entities;
using ReadyM.SDK.Events;

namespace MyMod.Client;

[Service]
public sealed partial class Waves(
    IInput input, IPlayers players, IEntities entities, INetworkedEvents events, IUserInterface ui)
{
    private void Start()
        => input.RegisterKeyBind(ModifierKeys.Alt, Key.W, Wave);

    private void Wave()
    {
        if (players.LocalMainCharacter is { } me)
            events.Raise(new WaveEvent { Character = me });
    }

    // Runs on every client that has the cell loaded, the one that waved included.
    [EventHandler(Stage.Apply)]
    public void Show(in WaveEvent e)
    {
        if (entities.TryLookup(e.Character.PlayerId, out Player player))
            ui.ShowMessage($"{player.Nickname.ToString()} waves.");
    }

    // Runs only on the client that waved, when the server refused it.
    [EventHandler(Stage.Rejected)]
    public void Refused(in WaveEvent e, WaveReject reason)
        => ui.ShowMessage("You waved a moment ago.");
}
```

A second mod could, without touching this one, refuse waves during a duel with its own `Validate`, or count them with
its own `Observe`.

## How it works

### Declaring an event

An event is a `public partial struct` marked `[NetworkedEvent(scope, policy)]`, in your Common project so both halves
know it. Its members are `public` properties with `get` and `set`; the SDK writes the code that sends them. A field is
not sent, so it is an error (`NEVT015`).

A member can be:

- a primitive (`bool`, the integer types, `float`, `double`, `char`) or a `string`;
- an enum;
- a `Vector2`, `Vector3` or `Vector4` from `System.Numerics`;
- an `INetSerializable` struct, which covers the id types such as `PlayerId`, `AreaId`, `FullCellId`, `FormId` and
  `NetworkFormId` (see [Identity](identity.md)), and your own `[DeriveINetSerializable]` structs (see [RPC](rpc.md));
- a [shape](shapes.md), such as `MainCharacter`, `Npc`, `Area` or one of your own networked archetypes.

A shape member arrives as the same entity on the other side. Make it nullable (`Character?`) when there may be no
entity; an empty non-nullable shape cannot be sent. If the receiving side does not have the entity, the event is
dropped there and none of its handlers run.

### Who receives it: `EventScope`

| `EventScope` | Who receives it |
| --- | --- |
| `Server` | The server only. Use it for reports the server acts on, whose effect reaches players as replicated state. |
| `Global` | Every player. |
| `Single` | One player: the `PlayerId` member marked `[Target]`. |
| `Area` | Everyone in the area named by the member marked `[Area]`, or else in the subject's area. |
| `Cell` | Everyone who has the cell named by the member marked `[Cell]` loaded, or else the subject's cell. |

`[Area]` goes on an `AreaId` or `Area` member, `[Cell]` on a `FullCellId` or `Cell` member.

### Who may raise it: `Policy`

| `Policy` | Which client may raise it |
| --- | --- |
| `Anyone` | Any client. |
| `SubjectOwner` | The client that owns the member marked `[Subject]`, such as a player's own character. |
| `AreaMaster` | The client simulating the area named by `[Area]`. |
| `CellMaster` | The client simulating the cell named by `[Cell]`. |
| `ServerAuthoritative` | No client. |

The server may always raise, whatever the policy. When a client raises what its policy forbids, the server refuses it
before any handler sees it: only `Rejected` runs, with `ctx.CancelledBy` set to `"policy"` and the reason left at its
type's default. Mark the entity the event is about `[Subject]`: `SubjectOwner` checks
it, and the `Area` and `Cell` scopes take their audience from it when no `[Area]` or `[Cell]` member names one. Who
sent the event is never a member, since the server already knows: handlers read it as `ctx.Origin`.

### Raising

Ask for `INetworkedEvents` in a constructor and call `Raise`:

```csharp
events.Raise(new WaveEvent { Character = me });
```

On the server, `RaiseAs(playerId, e)` raises an event as though that player had, which is how a server-side bot acts
like a player. The policy check is skipped, and handlers cannot tell it from the player's own event.

Raise on the ECS thread, where entities live. Everything the SDK calls your code from is already there: a service's
`Start` and `Update`, an RPC handler, a key bind, an event handler. A raise from a thread of your own, such as inside a
`Task.Run`, throws `EventRaisedOffEcsThreadException`, naming the event and the thread.

### Handling

A handler is a public method on a [service](../Getting-started/services.md), marked `[EventHandler(stage)]`. Its first
parameter is the event, which says which event it handles, and an `EventContext` may follow:

```csharp
[EventHandler(Stage.Validate)] public void H(in  WaveEvent e, EventContext ctx)
[EventHandler(Stage.Filter)]   public void H(ref WaveEvent e, EventContext ctx)
[EventHandler(Stage.Apply)]    public void H(in  WaveEvent e)
[EventHandler(Stage.Observe)]  public void H(in  WaveEvent e, EventContext ctx)
[EventHandler(Stage.Rejected)] public void H(in  WaveEvent e, WaveReject reason, EventContext ctx)
```

The stages run in this order, and refusing in one skips every later one:

| `Stage` | What it is for | Runs on | May refuse | May change the event |
| --- | --- | --- | --- | --- |
| `Validate` | Is this allowed? | the server | yes | no |
| `Filter` | Change it before it takes effect. | the server | yes | yes, it takes the event by `ref` |
| `Apply` | The effect itself. | the server, then every client in the audience | no | no |
| `Observe` | It happened; react to it. | the server, then every client in the audience | no | no |
| `Rejected` | It was refused. | the server, and the client that raised it | no | no |

Exactly one of `Observe` and `Rejected` runs for each event. Only `Validate` and `Filter` may refuse: `ctx.Cancel()`
in a later stage throws, because the event has already happened.

- **Refusing.** `ctx.Cancel(reason)` refuses with a reason of the event's `Reject` type, which may be any type an event
  member can be: an enum to `switch` over, or a struct that carries more. With no `Reject` on the declaration, call
  `ctx.Cancel()`. A `Rejected` handler takes the reason as its second parameter, so it needs a `Reject` type, and
  `ctx.CancelledBy` names the mod that refused.
- **Any mod may refuse any event.** A house-rules mod refuses things it did not declare, and the refusal names its
  author, so the server owner can see which mod is refusing what.
- **Write one `Apply`, in the mod that declared the event.** More than one builds, but they all run or none does, in no
  order you can rely on. Another mod that wants something done once the event is accepted writes an `Observe`; one that
  wants it changed first writes a `Filter`.
- **Order.** Handlers of one stage run in the order of your mods' dependencies: a mod runs after the mods it depends
  on. When that is not enough, `After` names the `uniqueId` of a mod to run after, from its `manifest.json`:
  `[EventHandler(Stage.Filter, After = "OblivionMP.Chat")]`.

Handlers always run on the ECS thread, whichever thread the event arrived on, so a handler reads and writes entities
directly, like a service's `Update`.

### The raiser hears its own event

An event in a `Global`, `Single`, `Area` or `Cell` scope comes back to the client that raised it, so every machine runs
the same handlers on the same values, after any `Filter`. The cost is a round trip before the raiser sees its own
effect.

When the raiser's game has already done the thing, mark the `Apply` so it does not happen twice there:

```csharp
[EventHandler(Stage.Apply, SkipOnRaisingClient = true)]
public void Play(in WaveEvent e) => ...;
```

`Observe` still runs on the raiser. `SkipOnRaisingClient` is for effects that are harmless to have happened even when
the event is then refused, such as a sound or a one-off animation, since nothing tells the raiser to undo it.

A `Server` scope event goes to the server and nowhere else, so on a client only `Rejected` runs, on the client that
raised it. Its effect reaches players as replicated state, the way the SDK's `HealthChangedEvent` ends in `Hp`.

### Guessing at the answer

A client can show the effect at once and take it back if the server refuses. Mark a property of your own mixin
`[Predictable]` and the SDK adds a `PredictX` method beside it. Call it inside `Predicting`:

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(Character))]
public readonly partial struct Rooted
{
    [Predictable] public partial bool Active { get; set; }
}
```

```csharp
events.Raise(new RootEvent { Caster = me, Target = target })
    .Predicting(() => target.PredictActive(true));
```

Reading `target.Active` returns the guess until it ends, which is when the server's value arrives, when the event is
refused, or after a short timeout. Ending it puts back the server's latest value. The guess is never sent, so it is
allowed on an entity you do not own. A guess that is not a value, such as a panel you opened, needs its own undo:

```csharp
events.Raise(new OpenVaultEvent { Door = door })
    .Predicting(() => panel.Open(door))
    .Rollback(() => panel.Close());
```

Guess at presentation and values, never at an entity appearing or disappearing: an entity the server creates arrives
on its own. And do not guess past what the game can undo, such as a death, since taking a guess back restores a value
and nothing more. The SDK's `Vitals.PredictHp` is guessed this way, and the SDK skips a guess that would kill.

### The game's own events

The SDK raises these for what happens in the game, in `OblivionMp.Sdk.Common.Events`. Your mod can handle any of
them in any stage the table above allows:

| Event | Scope | Raised by | When |
| --- | --- | --- | --- |
| `HealthChangedEvent` | `Server` | the game that simulates the victim or attacker | A character's health changed. The server applies it to `Hp`. |
| `ItemTransferEvent` | `Server` | the player's game | An item moved between holders: picked up, dropped, taken, bought or sold. The server applies it to the inventories. |
| `TimeChangeEvent` | `Server` | the area's master | The area's clock changed. The server applies it to the area's `Time`. |
| `WeatherChangeEvent` | `Server` | the area's master | The area's weather changed. The server applies it to the area's `Weather`. |
| `DockEvent`, `UndockEvent` | `Area` | the character's owner | A character sat down or lay down on furniture, or got up. |
| `SpellCastEvent`, `SpellReleaseCastEvent` | `Area` | the caster's owner | A character started casting, or released the cast. |
| `PlayerConsumeEvent` | `Area` | the character's owner | A character ate or drank something. |

These report what a game already did. Refusing `HealthChangedEvent` takes the change back, since the SDK guesses at
`Hp` while it waits; for the others, refusing stops the server or the other players from applying it, but the raising
game keeps what it did. To react to them, prefer `Observe`.

## On the client and on the server

| | Client | Server |
| --- | --- | --- |
| Stages that run | `Apply` and `Observe` for events in its audience, `Rejected` for its own refused events | All five |
| Raising | `Raise`, if the policy lets this client | `Raise`, and `RaiseAs` for a player |
| Guessing | `Predicting`, `Rollback`, `PredictX` | Not needed |

A handler runs on the side its project is built for: put server handlers in your server project and client handlers in
your client project. A `Validate` or `Filter` handler in a client project would never run, so it does not build
(`NEVT020`).

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `NEVT001` | A `Single` event has no `[Target]`. | Mark the `PlayerId` member it goes to `[Target]`. |
| `NEVT002` | `[Target]` is on an event whose scope is not `Single`. | Remove it, or make the event `Single`. |
| `NEVT003` | An `Area` or `Cell` event has nothing to take its audience from. | Mark a `[Subject]`, or an `[Area]` or `[Cell]` member. |
| `NEVT004` | `SubjectOwner` with no `[Subject]` to check. | Mark the entity the event is about `[Subject]`. |
| `NEVT005` | More than one member is marked `[Subject]`. | An event is about one entity: keep one. |
| `NEVT006` | A shape member whose entities are never networked, such as an archetype with `Networked = false`. | Send something that identifies it instead, or make the archetype networked. |
| `NEVT007` | `AreaMaster` with no `[Area]` member. | Add an `AreaId` or `Area` member marked `[Area]`. |
| `NEVT008` | `CellMaster` with no `[Cell]` member. | Add a `FullCellId` or `Cell` member marked `[Cell]`. |
| `NEVT009` | `[Area]` or `[Cell]` is on a member that is not a place. | Use an `AreaId` or `Area`, or a `FullCellId` or `Cell`. |
| `NEVT010` | A handler takes the event by `ref` outside `Filter`. | Take it by `in`, or make the handler a `Filter`. |
| `NEVT011` | A `Rejected` handler's reason is not the event's `Reject` type. | Take the type the declaration names. |
| `NEVT012` | A `Rejected` handler for an event that declares no `Reject` type. | Add `Reject = typeof(...)` to the declaration. |
| `NEVT013` | `SkipOnRaisingClient` outside `Apply`. | Remove it: only an `Apply` can be skipped. |
| `NEVT014` | A member of a type an event cannot send. | Use one of the types under [Declaring an event](#declaring-an-event). |
| `NEVT015` | A public field on an event. Only properties are sent. | Declare it as `{ get; set; }`. |
| `NEVT020` | A `Validate` or `Filter` handler in a client project. | Move it to your server project. |

## Reference

* [NetworkedEventAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.NetworkedEventAttribute.md)
* [EventScope](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.EventScope.md)
* [Policy](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Policy.md)
* [SubjectAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.SubjectAttribute.md),
  [TargetAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.TargetAttribute.md),
  [AreaAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.AreaAttribute.md),
  [CellAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.CellAttribute.md)
* [EventHandlerAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.EventHandlerAttribute.md)
* [Stage](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Stage.md)
* [EventContext](../../../api-reference/ReadyM.SDK.Events/ReadyM.SDK.Events.EventContext.md)
* [INetworkedEvents](../../../api-reference/ReadyM.SDK.Events/ReadyM.SDK.Events.INetworkedEvents.md)
* [INetworkedEventRaise](../../../api-reference/ReadyM.SDK.Events/ReadyM.SDK.Events.INetworkedEventRaise.md)
* [PredictableAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.PredictableAttribute.md)
* [EventRaisedOffEcsThreadException](../../../api-reference/ReadyM.SDK.Events/ReadyM.SDK.Events.EventRaisedOffEcsThreadException.md)
* [OblivionMp.Sdk.Common.Events](../../../api-reference/OblivionMp.Sdk.Common.Events/OblivionMp.Sdk.Common.Events.md)
