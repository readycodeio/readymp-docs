---
sidebar_position: 4
---

# Archetypes and components

An **archetype** is the fixed set of components an entity is created with. OblivionMP exposes three built-in archetypes that your server mod can query and extend:

- the **global player entity** (one per connected player),
- the **main character** (the player's pawn in the world),
- the **dropped item**.

You reach them through `OblivionArchetypes`, resolved from the container:

```csharp
var archetypes = Services.Resolve<OblivionArchetypes>();
// archetypes.GlobalPlayerArchetype
// archetypes.MainCharacterArchetype
// archetypes.DroppedItemArchetype
```

Attach your own [networked components](../Client/custom-components) to any of these in your mod's `Init`, the same way the wallet example does in [Getting started](getting-started#registering-components-and-archetypes). The tables below list the components each archetype already carries, so you know what is available to query.

:::warning[The access API is temporary]

Right now you read and write these components through the low-level [`EcsApi`](../../api-reference/ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi) (raw `Query` calls and `ref` component access). This is deliberately bare-bones for `0.1.0`. A higher-level, less raw server API is planned, so expect the way you access entity data to change in a later release.

:::

## Global player entity

One entity per connected player. It exists for the whole session, independent of which area or cell the player is in, and is the right place to hang **persistent, player-scoped** data (the wallet in the example lives here). Players are identified by their `PlayerId` on this entity.

| Component | Description |
| --- | --- |
| `PlayerScopeComponent` | The owning player's `PlayerId`. |

This is the archetype that mod-registered "global" player components are added to.

## Main character

The player's pawn in the world: an **area-scoped** entity that exists while the player is present in an area. It holds the character's live state (position, appearance, vitals, equipment, and so on). It is linked to the global player entity by the same `PlayerId`.

When crossing between areas, this entity is destroyed and recreated, so persistent data should not be stored here.

| Component | Description |
| --- | --- |
| `MainCharacterComponent` | Marks the entity as a player's main character; carries the owning `PlayerId`. |
| `NicknameComponent` | The player's display name. |
| `TransformComponent` | World position and rotation. |
| `AnimationMovementComponent` | Movement animation state (locomotion). |
| `AnimationStateComponent` | Active animation state. |
| `AppearanceComponent` | Character appearance and customization. |
| `EquipmentComponent` | Equipped and worn items. |
| `VitalsComponent` | Health, magicka, and fatigue. |
| `PlayerActivityComponent` | The character's current activity. |
| `EffectsAttributesComponent` | Active magic effects and the attribute values they apply. |
| `SkillAttributesComponent` | Skill values. |
| `SocialAttributesComponent` | Social and faction attributes. |
| `ParentCellComponent` | The cell the character is currently in. |
| `BaseIdComponent` | The underlying game form (base id). |
| `QuiverComponent` | Equipped ammunition. |
| `DynamicFormsComponent` | Dynamically created forms (custom spells, potions, and so on). |

## Dropped item

An item dropped in the world, by a player or by the game. Area-scoped, like the main character.

| Component | Description |
| --- | --- |
| `TransformComponent` | World position and rotation. |
| `ParentCellComponent` | The cell the item is in. |
| `BaseIdComponent` | The item's base game form (base id). |
| `StackCountComponent` | How many items are in the stack. |

All of the above are the game's own networked components, defined in `ReadyM.Relay.Common.Oblivion`.

## Registering your own archetype

Besides extending the built-in archetypes, a mod can register an entirely new one with `RegisterArchetype`. Register your components in `RegisterComponents` first, then build the archetype in `Init` and keep the returned `ArchetypeId` so you can create entities with it later.

```csharp title="Registering a new archetype and attaching a component to an existing one"
using ExampleMod.Common;
using OblivionMp.Sdk.Serverside;
using ReadyM.Api.ECS.Worlds;
using ReadyM.Api.Idents;
using ReadyM.Relay.Common.Oblivion.ECS.Components;
using ReadyM.Relay.Server.Sdk;
using ReadyM.Relay.Server.Sdk.Ecs.Components;

public class Mod : ServerModBase
{
    public static ArchetypeId TreasureChestArchetype { get; private set; }

    protected override void RegisterComponents(IComponentRegistry registry)
    {
        // A component must be registered before any archetype can use it.
        registry.RegisterComponent<LootComponent>();
        registry.RegisterComponent<WalletComponent>();
    }

    protected override void Init()
    {
        var registry = Services.Resolve<IArchetypeRegistry>();

        // A brand new archetype: two of the game's components plus one of our own.
        TreasureChestArchetype = registry.RegisterArchetype(b => b
            .Add<TransformComponent>()
            .Add<ParentCellComponent>()
            .Add<LootComponent>());

        // Attaching a component to a built-in archetype instead.
        var archetypes = Services.Resolve<OblivionArchetypes>();
        registry.ModifyArchetype(archetypes.GlobalPlayerArchetype, b => b.Add<WalletComponent>());
    }
}
```

Both calls take a builder, where `Add<T>()` declares one component on the archetype. The game's own components are resolved by type, so you can freely mix them with your own.

With the `ArchetypeId` in hand, create entities from it through `EcsApi`:

```csharp
var entity = ecsApi.CreateEntity(Mod.TreasureChestArchetype);
```

:::important

An archetype your mod registers exists only on the server unless the client mod registers a matching one. Keep the component set and its order identical on both sides.

:::

## Client-side: the wrapper structs

On the client you rarely touch these components directly. `SDK.Sync.LocalPlayer` and the other entity accessors return wrapper structs that give an object-oriented surface over the same entities. The main one is [`ReadyMainCharacter`](../Client/Entities/players):

- `Get<T>()` reads a component on the main-character entity,
- `GetGlobal<T>()` reads a component on the linked global player entity,
- typed sub-APIs (Attributes, Vitals, Equipment, Appearance, and so on) wrap the raw components in a friendlier surface.

Dropped items are wrapped the same way in `ReadyDroppedItem`. See [Players](../Client/Entities/players) and [Player data](../Client/Entities/player-data) for the client-side entity surface.
