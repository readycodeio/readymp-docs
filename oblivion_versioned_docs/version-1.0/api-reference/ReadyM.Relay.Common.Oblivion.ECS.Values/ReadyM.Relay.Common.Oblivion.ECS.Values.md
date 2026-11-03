---
title: 'ReadyM.Relay.Common.Oblivion.ECS.Values'
description: 'The types in the ReadyM.Relay.Common.Oblivion.ECS.Values namespace.'
---
# ReadyM.Relay.Common.Oblivion.ECS.Values

### Structs

 [AiIntentEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentEntry.md)

One package the server wants an npc to run. The target and the location are entities when the server has
them, otherwise ref IDs. When both are set the entity is used. Entities only exist within a session, so they
are not saved.

 [BaseContainerItem](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.BaseContainerItem.md)

One entry of a container's base record in the game files, like a form or a leveled list.

 [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

One line an NPC says for a mod-added dialogue topic.

 [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

A dialogue topic a mod offers a player.

 [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)

Represents an entry in a player's inventory, including the item form, quantity, and worn status.

 [ItemValue](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ItemValue.md)

The base value of an item in the game files, and whether the engine computes it instead, like for an enchanted
item or a potion.

 [LeveledListItem](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.LeveledListItem.md)

One entry of a leveled list from the game files, like a form or a nested leveled list.

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

One magic effect of a dynamic form.
A single dynamic form (like a player-brewed potion type or a player-crafted spell) can contain multiple magic effects.

 [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

Names a form in a way every client can resolve.

 [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

A compass marker for a quest stage.

 [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)

A quest in a player's journal.

 [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

A mod-added topic a player has spoken.

 [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)

A named world flag and its value.

### Enums

 [AiIntentFlags](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentFlags.md)

Options for an AI order.

 [AiIntentOutcome](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentOutcome.md)

How an AI order ended.

 [AiPackageType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiPackageType.md)

The kind of an AI package in the game.

 [AiProcedure](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiProcedure.md)

A step of an AI package that an NPC is on.

 [AudienceKind](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AudienceKind.md)

Who a quest belongs to.

 [CharacterAttribute](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterAttribute.md)

Character attributes.

 [CharacterEffect](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterEffect.md)

Character effects that can be applied to a character.

 [CharacterSex](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterSex.md)

A character's sex.

 [CharacterSocialAttribute](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterSocialAttribute.md)

Character social attributes.

 [CharacterStateFlags](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterStateFlags.md)

What a character is doing right now, as flags.

 [ConsumeKind](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ConsumeKind.md)

How a player consumed an item.

 [DifficultyTier](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DifficultyTier.md)

A difficulty level of the game.

 [EnchantmentType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.EnchantmentType.md)

The kind of item an enchantment is made for (the engine's ENIT type field).

 [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

The kind of a record in the game files.

 [MagicEffectRange](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectRange.md)

Whom a magic effect reaches.

 [ParentCellKind](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ParentCellKind.md)

Whether a cell is an interior or an exterior.

 [QuestPhase](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestPhase.md)

Where a quest stands.

 [ScalingPolicy](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.ScalingPolicy.md)

How the session picks the level leveled lists roll at.

 [SpellType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpellType.md)

The kind of a spell.


