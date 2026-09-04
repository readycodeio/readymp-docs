# ReadyM.Relay.Common.Oblivion.ECS.Components

### Structs

 [AnimationMovementComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AnimationMovementComponent.md)

Holds the player character's movement and animation data.

 [AnimationStateComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AnimationStateComponent.md)

Holds the player character's animation state.

 [AppearanceComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AppearanceComponent.md)

Holds the player character's appearance settings.

 [BaseIdComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.BaseIdComponent.md)

Holds an Oblivion actor's Base ID.

 [CellDiscoveryComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.CellDiscoveryComponent.md)

 [DialogueComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.DialogueComponent.md)

 [DifficultyComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.DifficultyComponent.md)

Holds the difficulty the server dictates for every client in the session.

 [DynamicFormsComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.DynamicFormsComponent.md)

Holds the player's dynamic forms, including spells and alchemy effects.

 [EffectsAttributesComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.EffectsAttributesComponent.md)

Holds player character's effect attributes' values.

 [EquipmentComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.EquipmentComponent.md)

Holds the player's equipment.

 [JournalComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.JournalComponent.md)

 [MainCharacterComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.MainCharacterComponent.md)

Holds the player's ID.

 [NicknameComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.NicknameComponent.md)

Holds the player's nickname.

 [ParentCellComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ParentCellComponent.md)

Holds the player character's parent cell information.

 [PlayerActivityComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.PlayerActivityComponent.md)

Holds the player character's activity flags.

 [QuiverComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.QuiverComponent.md)

Holds the player character's quiver information.

 [RefIdComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.RefIdComponent.md)

 [SkillAttributesComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.SkillAttributesComponent.md)

Holds the player character's skill attributes.

 [SocialAttributesComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.SocialAttributesComponent.md)

Holds the player character's social attributes.

 [SpokenTopicsComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.SpokenTopicsComponent.md)

 [StackCountComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.StackCountComponent.md)

Holds the number of items in a dropped item stack.

 [TimeComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.TimeComponent.md)

Holds the global time state of the game world.

 [TransformComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.TransformComponent.md)

Holds an entity's position and rotation in the world.

 [VitalsComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.VitalsComponent.md)

Holds the player character's vital attributes.

 [WeatherComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.WeatherComponent.md)

Holds the global weather state of the game world.

 [WorldStateComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.WorldStateComponent.md)

### Interfaces

 [ISaveTaggedComponent<TSelf\>](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ISaveTaggedComponent-1.md)

A networked component that can be persisted in a player save. The save key defaults to
the component's type name. The key is part of the save file format. Renaming a component changes its key and makes
older saves of that component unreadable.


