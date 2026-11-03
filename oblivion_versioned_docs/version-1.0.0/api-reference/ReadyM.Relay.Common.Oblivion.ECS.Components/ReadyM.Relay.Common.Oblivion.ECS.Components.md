---
title: 'ReadyM.Relay.Common.Oblivion.ECS.Components'
description: 'The types in the ReadyM.Relay.Common.Oblivion.ECS.Components namespace.'
---
# ReadyM.Relay.Common.Oblivion.ECS.Components

### Structs

 [EnchantedItemFormComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.EnchantedItemFormComponent.md)

Everything needed to materialize one dynamic enchanted item form (created at runtime, like a weapon, armor or
clothing the player enchanted). The engine makes such a form as a copy of an item from the game files with a new
enchantment attached, but nothing on the copy remembers which item that was, so this carries every field the
engine's copy takes over, plus the enchantment.


