---
sidebar_position: 2
---

# Archetypes and components

An **archetype** is the fixed set of components an entity is created with. Registering an archetype is how you tell the ECS what shape an entity has; creating entities from it is covered in [Entities](entities).

OblivionMP creates entities at several levels, from the whole session down to a single dropped item. The tables below list what each one already carries, so you know what is available to query and where your own data belongs.

Four of these archetype ids are exposed to server mods through `OblivionArchetypes`, resolved from the container:

```csharp
var archetypes = Services.Resolve<OblivionArchetypes>();
// archetypes.GlobalPlayerArchetype
// archetypes.MainCharacterArchetype
// archetypes.DroppedItemArchetype
// archetypes.FurnitureArchetype
```

The world, area and cell entities are created by the relay itself. You reach them through [server events](server-events), which hand you the entity as it is created, or by querying for the components they carry.

## World entity {#world-entity}

One entity for the whole server, created at startup and alive until shutdown. It holds state that is true for everyone, regardless of where they are.

| Component | Description |
| --- | --- |
| `WorldStateComponent` | Named world flags, for quest and world progression shared by every player. |
| `DifficultyComponent` | The difficulty tier the server dictates for every client in the session. |

Your mod's `Init` runs before this entity exists, so use [`OnWorldEntityCreated`](server-events#onworldentitycreated) if you want to seed world state at startup.

## Area entity

One entity per world space that has at least one player in it. Created when the first player enters and deleted when the last one leaves.

| Component | Description |
| --- | --- |
| `TimeComponent` | The global time of day. |
| `WeatherComponent` | The current weather. |

## Cell entity

One entity per cell that at least one player has loaded. A cell is the chunk of the world a player is actually standing in, one level finer than an area. Created when the first player activates it and deleted when the last one deactivates it.

| Component | Description |
| --- | --- |
| `CellDiscoveryComponent` | Whether the cell has been discovered, so map discovery is shared. |

## Global player entity

One entity per connected player. It exists for the whole session, independent of which area or cell the player is in, and is the right place to hang **persistent, player-scoped** data. Players are identified by their `PlayerId` on this entity.

| Component | Description |
| --- | --- |
| `PlayerScopeComponent` | The owning player's `PlayerId`. |
| `NicknameComponent` | The player's display name. |
| `JournalComponent` | Quest entries and compass targets, so the journal is shared. |
| `DialogueComponent` | The dialogue topics and responses currently offered to the player. |
| `SpokenTopicsComponent` | Which topics the player has already exhausted. |

This is the archetype that mod-registered "global" player components are added to.

## Main character

The player's pawn in the world: an **area-scoped** entity that exists while the player is present in an area. It holds the character's live state (position, appearance, vitals, equipment, and so on). It is linked to the global player entity by the same `PlayerId`.

When crossing between areas, this entity is destroyed and recreated, so persistent data should not be stored here.

| Component | Description |
| --- | --- |
| `MainCharacterComponent` | Marks the entity as a player's main character; carries the owning `PlayerId`. |
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

An item dropped in the world, by a player or by the game.

| Component | Description |
| --- | --- |
| `TransformComponent` | World position and rotation. |
| `ParentCellComponent` | The cell the item is in. |
| `BaseIdComponent` | The item's base game form (base id). |
| `StackCountComponent` | How many items are in the stack. |

## Furniture

A usable world object: a bed, a chair, an alchemy table. New in `0.2.0`.

| Component | Description |
| --- | --- |
| `TransformComponent` | World position and rotation. |
| `RefIdComponent` | The object's reference id, which identifies this specific instance in the world. |
| `BaseIdComponent` | The underlying game form (base id). |

All of the above are the game's own networked components, defined in `ReadyM.Relay.Common.Oblivion`.

## Registering your own archetype

Besides extending the built-in archetypes, a mod can register an entirely new one. Register your components in `RegisterComponents` first, then build the archetype inside `RegisterArchetypes` and keep the returned `ArchetypeId` so you can create entities with it later.

```csharp title="Registering a new archetype and attaching a component to an existing one"
using ExampleMod.Common;
using OblivionMp.Sdk.Serverside;
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
        var archetypes = Services.Resolve<OblivionArchetypes>();

        RegisterArchetypes(registry =>
        {
            // A brand new archetype: two of the game's components plus one of our own.
            TreasureChestArchetype = registry.RegisterArchetype(b => b
                .Add<TransformComponent>()
                .Add<ParentCellComponent>()
                .Add<LootComponent>());

            // Attaching a component to a built-in archetype instead.
            registry.ModifyArchetype(archetypes.GlobalPlayerArchetype, b => b.Add<WalletComponent>());
        });
    }
}
```

`RegisterArchetypes` takes a callback that the SDK runs once while it builds the ECS world, which is where archetype changes belong. Both calls inside it take a builder, where `Add<T>()` declares one component on the archetype. The game's own components are resolved by type, so you can freely mix them with your own.

:::note[Changed in 0.2.0]

Archetype registration used to live in a separate class implementing `IArchetypeRegistration`, registered in DI. That interface is internal now, and `RegisterArchetypes` exists on both the client and the server mod base class, so the two halves look the same.

:::

If you want other mods to use your archetypes and components, make sure to make them `public` types and give your dependant a way to get the `ArchetypeId` assigned to your custom archetype.

With the `ArchetypeId` in hand, create entities from it through `EcsApi`. See [Entities](entities) for the scopes available and what each one means.

:::important

An archetype your mod registers exists only on the server unless the client mod registers a matching one. Keep the component set and its order identical on both sides.

:::

## Client-side: the wrapper structs

On the client you rarely touch these components directly. `SDK.Sync.LocalPlayer` and the other entity accessors return wrapper structs that give an object-oriented surface over the same entities. The main one is [`ReadyMainCharacter`](../Client/Entities/players):

- `Get<T>()` reads a component on the main-character entity,
- `GetGlobal<T>()` reads a component on the linked global player entity,
- typed sub-APIs (Attributes, Vitals, Equipment, Appearance, and so on) wrap the raw components in a friendlier surface.

Dropped items are wrapped the same way in `ReadyDroppedItem`. See [Players](../Client/Entities/players) and [Player data](../Client/Entities/player-data) for the client-side entity surface.
