---
sidebar_position: 5
---

# AI

The server can give an NPC orders: walk there, wander here, sleep, eat, flee. Each order is an AI package the game
already knows, run by the game that simulates the NPC, so it looks the same to every player. The NPC reports back
what it is doing and whether your order worked. This page covers giving orders and reading the result.

```csharp title="MyMod.Server/Errands.cs"
using System.Numerics;
using Microsoft.Extensions.Logging;
using OblivionMp.Sdk.Common.Archetypes;
using OblivionMp.Sdk.Serverside.Ai;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

// Sends an NPC to a spot and logs when it gets there.
[Service]
public sealed partial class Errands(IEntities entities, ILogger logger)
{
    private readonly Dictionary<uint, ushort> _pending = [];

    public void SendTo(uint npcRefId, Vector3 destination)
    {
        foreach (var npc in entities.Query<Npc>())
        {
            if (npc.RefId != npcRefId)
                continue;

            var intent = new AiIntentEntry
            {
                PackageType = AiPackageType.ExploreTravel,
                LocationPosition = destination,
                Radius = 150f,
                Flags = AiIntentFlags.AlwaysRun,
            };

            _pending[npcRefId] = AiIntents.Enqueue(npc, intent);
        }
    }

    private void Update()
    {
        foreach (var npc in entities.Query<Npc>())
        {
            if (!_pending.TryGetValue(npc.RefId, out var seq) || npc.ReportedSeq != seq)
                continue;

            logger.LogInformation("NPC {RefId:X} finished its errand: {Outcome}", npc.RefId, npc.ReportedOutcome);
            AiIntents.Clear(npc);
            _pending.Remove(npc.RefId);
        }
    }
}
```

## How it works

### Giving orders

An order is an `AiIntentEntry`. `AiIntents.Enqueue(npc, intent)` adds it to the end of the NPC's queue and returns
its sequence number, which is how you recognize its result later. `Enqueue` fills in the entry's `Seq` field
itself, so leave it unset. A `ServerSummon` takes orders too: pass it where an `Npc` is asked for.

| Field | Meaning |
| --- | --- |
| `PackageType` | What to do, as an `AiPackageType`. The ones that work are listed below. |
| `TargetRefId` | The ref id of who or what the package acts on, or 0. |
| `TargetPosition` | Carried with the order, but no package uses it yet. |
| `LocationRefId` | The ref id of the place to go to, or 0. |
| `LocationPosition` | A place to go to when there is no `LocationRefId`. The game puts a marker there for the NPC to use. |
| `Radius` | How close counts as there, or how far to wander. |
| `Flags` | `AiIntentFlags.AlwaysRun` makes the NPC run rather than walk. |

A ref id can be one from the game files or one the server handed out with `ServerRefIds`; each player's game maps the
server's ids to its own.

The game that simulates the NPC runs its queue one order at a time, in order. Combat or another package the game
forces on the NPC interrupts the current order, and the NPC picks it up again afterwards. An order fails at once when
its package type is not one of these, or when its target or location is not loaded in that game:

| `AiPackageType` | Runs the game's package |
| --- | --- |
| `ExploreTravel` | Travel |
| `ExploreWander` | Wander |
| `ExploreActivate`, `ExploreAquire` | Find |
| `Sleep` | Sleep |
| `Eat` | Eat |
| `FollowWithoutEscort` | Follow |
| `EscortActor` | Escort |
| `Accompany` | Accompany |
| `UseItemAt` | Use item at |
| `Ambush` | Ambush |
| `FleeNonCombat` | Flee, out of combat |
| `Casting` | Cast magic |

Each package uses the target, the location and the radius the way the game's own package of that kind does.

Finished orders stay in the queue until you call `AiIntents.Clear(npc)`, which empties it. Clear it once the NPC has
done what you asked, as the example does.

### Reading what the NPC does

`AiState` is reported by the game that simulates the NPC:

| Member | Meaning |
| --- | --- |
| `ReportedSeq` | The sequence number of the last order the NPC finished. |
| `ReportedOutcome` | How that order ended: `Completed` or `Failed` (`None` before any has ended). |
| `PackageFormId` | The form id of the AI package the NPC is running now. |
| `PackageType` | That package's `AiPackageType`. |
| `Procedure`, `ProcedureIndex` | The step of the package it is on, as an `AiProcedure` (`Travel`, `Wander`, `Sleep`, `Combat`, ...) and its index. |
| `Overridden` | Whether the NPC runs a package laid over its schedule, such as one of your orders, rather than its own. |

These read as members of the `Npc`: `npc.ReportedSeq`, `npc.Procedure`. When `ReportedSeq` equals the number
`Enqueue` gave you, `ReportedOutcome` is the result of that order.

:::note
Not in 1.0 yet: aiming an order at an entity rather than a ref id, such as a player's character, which has no ref id.
`AiIntentEntryExtensions.Target` and `LocateAt` exist, but they take an entity handle that shapes do not hand out.
:::

## On the client

Orders come from the server. A client can read an NPC's `AiState` like any other value, for example to show what a
nearby NPC is doing.

## Reference

* [AiIntents](../../../api-reference/OblivionMp.Sdk.Serverside.Ai/OblivionMp.Sdk.Serverside.Ai.AiIntents.md)
* [AiIntentEntry](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentEntry.md)
* [AiIntentFlags](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentFlags.md)
* [AiPackageType](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiPackageType.md)
* [AiState](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.AiState.md)
* [AiIntentOutcome](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentOutcome.md)
* [AiProcedure](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiProcedure.md)
* [AiIntentEntryExtensions](../../../api-reference/OblivionMp.Sdk.Common.Ai/OblivionMp.Sdk.Common.Ai.AiIntentEntryExtensions.md)
* [Npc](../../../api-reference/OblivionMp.Sdk.Common.Archetypes/OblivionMp.Sdk.Common.Archetypes.Npc.md)
