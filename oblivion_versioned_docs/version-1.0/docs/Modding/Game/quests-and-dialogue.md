---
sidebar_position: 7
---

# Quests and dialogue

Every player carries three lists that connect a server mod to that player's quest journal and dialogue: the quests
in their journal, the dialogue topics NPCs offer them, and the topics they have already spoken. The server writes
the first two and the player's game shows them. The game fills the third and the server reads it. These lists hold
quests and topics that a mod adds. Oblivion's own built-in quests stay in each player's own game and are not shared.

The SDK only gives you these building blocks. Shared quest progression between players (stages that advance for
everyone, objectives, quests a whole server works on together) comes from the optional Quests mod, which is built on
them. If you want that, depend on it as described in [Using another mod](../Optional-mods/using-another-mod.md).

```csharp title="MyMod.Server/WelcomeQuest.cs"
using OblivionMp.Sdk.Common.Archetypes.Mixins;
using ReadyM.Relay.Common.Oblivion.ECS.Values;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;
using Yooni.Native.Container;

namespace MyMod.Server;

// Puts a quest in every player's journal, gives them a topic to ask about,
// and completes the quest once they have asked.
[Service]
public sealed partial class WelcomeQuest(IEntities entities)
{
    // Ids your mod picks for itself. Keep them unique across mods.
    private const uint QuestId = 0x4D790001;
    private const uint TopicId = 0x4D790101;

    private void Update()
    {
        foreach (var player in entities.Query<Player>())
        {
            var questIndex = -1;
            for (var i = 0; i < player.QuestsCount; i++)
                if (player.GetQuests(i).QuestId == QuestId)
                    questIndex = i;

            if (questIndex < 0)
            {
                player.AddQuests(new QuestEntry
                {
                    QuestId = QuestId,
                    Name = new NativeString64("A warm welcome", false),
                    StageText = new NativeString256("Ask someone about the welcome.", false),
                    CurrentStage = 10,
                    Phase = QuestPhase.Active,
                    Audience = AudienceKind.Player,
                });

                // The response first: a topic reaches the game with the responses it has at that moment.
                player.AddDialogueResponses(new DialogueResponse
                {
                    TopicId = TopicId,
                    Text = new NativeString256("Welcome, friend. The first drink is on the house.", false),
                });

                player.AddDialogueTopics(new DialogueTopic
                {
                    TopicId = TopicId,
                    QuestId = QuestId,
                    Name = new NativeString64("A warm welcome", false),
                });

                continue;
            }

            var quest = player.GetQuests(questIndex);
            if (quest.Phase != QuestPhase.Active)
                continue;

            for (var i = 0; i < player.SpokenTopicsCount; i++)
            {
                if (player.GetSpokenTopics(i).TopicId != TopicId)
                    continue;

                quest.CurrentStage = 100;
                quest.StageText = new NativeString256("You asked around and felt at home.", false);
                quest.Phase = QuestPhase.Completed;
                player.SetQuests(questIndex, quest);
                break;
            }
        }
    }
}
```

## How it works

The three lists are mixins on [`Player`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md),
so with `using OblivionMp.Sdk.Common.Archetypes.Mixins;` every player shape has their members. Each list has the
same set of methods: a count, `Get` (all, or one by index), `Set` (all, or one by index), `Add`, `Insert`,
`RemoveAt`, `Contains` and `Clear`.

| Mixin | On a player | Holds | Who writes it |
|---|---|---|---|
| [`Journal`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Journal.md) | `GetQuests`, `AddQuests`, `QuestsCount`, ... | [`QuestEntry`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md) | the server |
| | `GetCompassTargets`, `AddCompassTargets`, `CompassTargetsCount`, ... | [`QuestCompassTarget`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md) | the server |
| [`Dialogue`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md) | `GetDialogueTopics`, `AddDialogueTopics`, `DialogueTopicsCount`, ... | [`DialogueTopic`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md) | the server |
| | `GetDialogueResponses`, `AddDialogueResponses`, `DialogueResponsesCount`, ... | [`DialogueResponse`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md) | the server |
| [`SpokenTopics`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SpokenTopics.md) | `GetSpokenTopics`, `SpokenTopicsCount`, ... | [`SpokenTopicEntry`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md) | the player's own game |

The text fields are fixed-size game strings: build them with `new NativeString64(text, false)` or
`new NativeString256(text, false)`, and read them back with `ToString()`.

### The entries

| Entry | Field | Meaning |
|---|---|---|
| `QuestEntry` | `QuestId` | Your id for the quest. One quest per id. |
| | `Name` | The quest's name in the journal. |
| | `StageText` | The journal text for the current stage. |
| | `CurrentStage` | The stage the quest is at. |
| | `Phase` | [`QuestPhase`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestPhase.md): `Active`, `Completed` or `Failed`. |
| | `Audience` | [`AudienceKind`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AudienceKind.md): `Player` for a quest of one player's own, `World` for one everyone shares. The game shows a `World` quest with "(World)" after its name. |
| `QuestCompassTarget` | `QuestId`, `Stage` | The quest, and the stage at which the marker applies. |
| | `RefId` | The reference the compass points at. |
| | `GateFlag`, `GateAtLeast` | Optional: show the marker only while the named world flag is at least this value. Leave `GateFlag` empty for no condition. |
| `DialogueTopic` | `TopicId` | Your id for the topic. |
| | `QuestId` | The quest the topic belongs to. |
| | `Name` | What the player sees in the topic list. |
| | `SpeakerBaseId` | Only NPCs of this base form offer it. 0 means anyone. |
| | `StageAtLeast`, `StageBelow` | Only offered while the quest's stage is at least, or below, this. 0 means no limit. |
| `DialogueResponse` | `TopicId`, `Text` | One line the NPC says for that topic. A topic can have several. |
| `SpokenTopicEntry` | `TopicId`, `SpeakerRefId` | A topic the player has spoken, and the reference of the NPC they spoke to. |

### What reaches the game

- **A quest** appears in the player's journal the first time its `QuestId` shows up. After that, a change of
  `CurrentStage` adds `StageText` as a new journal entry, and a change of `Phase` completes or fails it. Quests
  that are already there when the player joins appear quietly; later changes show the game's usual notifications.
- **A compass target** applies once per quest and stage.
- **A topic** is added to the game once, with the responses that share its `TopicId` at that moment. A topic with
  no responses yet waits until it has one. Changing its responses later does not change it in the game.
- **Taking an entry out of a list** does not take the quest or topic out of a game that already shows it. Complete
  or fail a quest instead.
- **Spoken topics** only record topics a mod added through `Dialogue`. Spoken lines of the game's own dialogue are
  not recorded.

:::note
Not in 1.0 yet: world flags. They have no shape, so a mod can neither read nor write them, and the
[`WorldFlagEntry`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)
values they hold are out of reach. A compass target's `GateFlag` can still name one that the Quests mod sets.
:::

## On the client

A client reads all three lists, for example to show quest progress in its own UI:

```csharp
if (players.LocalPlayer is { } me)
    logger.LogInformation("You have {Count} quest(s).", me.QuestsCount);
```

It never changes them itself. The server writes `Journal` and `Dialogue`, and the game writes `SpokenTopics`.

## Related diagnostics

| Id | What it means | How to fix it |
|---|---|---|
| `READYM019` | A client mod calls a method that changes one of these lists, such as `AddQuests` or `AddSpokenTopics`. | Change the list on the server, or ask the server to with an [RPC](../Concepts/rpc.md). |

## Reference

- [`Journal`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Journal.md)
- [`Dialogue`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md)
- [`SpokenTopics`](../../../api-reference/OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SpokenTopics.md)
- [`QuestEntry`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)
- [`QuestPhase`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestPhase.md)
- [`AudienceKind`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AudienceKind.md)
- [`QuestCompassTarget`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)
- [`DialogueTopic`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)
- [`DialogueResponse`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)
- [`SpokenTopicEntry`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)
- [`WorldFlagEntry`](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)
- [`Player`](../../../api-reference/ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Player.md)
