---
sidebar_position: 2
---

# Archetypes and components

An **archetype** is the fixed set of components an entity is created with. WukongMP exposes five built-in archetypes that your server mod can query and extend:

- the **world** entity (one per server, for state that belongs to nothing else),
- the **area** entity (one per active area),
- the **global player entity** (one per connected player),
- the **tamer** (an enemy in the world),
- the **main character** (the player's pawn in the world).

They are named by [WukongArchetypes](../../api-reference/WukongMp.Sdk.Serverside/WukongMp.Sdk.Serverside.WukongArchetypes), a small class that maps each one to its [ArchetypeId](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId):

```csharp
// WukongArchetypes.WorldArchetype
// WukongArchetypes.AreaArchetype
// WukongArchetypes.GlobalPlayerArchetype
// WukongArchetypes.TamerArchetype
// WukongArchetypes.MainCharacterArchetype
```

The members are static, so there is nothing to resolve or construct. The client SDK exposes the same set through [`WukongApi.Archetypes`](../../api-reference/WukongMp.Sdk.Api.Implementation/WukongMp.Sdk.Api.Implementation.WukongArchetypes), which is how a client mod names the same archetype when it registers its half of a networked component.

:::danger[Do not hardcode archetype IDs]

The numeric IDs behind these properties are an implementation detail of the current release and will change. Do not hardcode these, but rather go through `WukongArchetypes`.

:::

Attach your own components to any of these in your mod's `Init`, the same way the examples in [Getting started](getting-started#registering-components-and-archetypes) do. The tables below list the components each archetype already carries, so you know what is available to query.

Creating entities of an archetype, and reading and writing their components, is covered in [Entities](entities).

## World entity

One entity for the whole server, created once at startup. It is the place for state that belongs to the session rather than to an area, a player or an actor: match settings, a global mode toggle, a scoreboard.

| Component | Description |
| --- | --- |
| `MetadataComponent` | Bookkeeping the SDK uses to identify the entity. |

Nothing game-specific lives here by default, which is the point: it starts empty so mods can claim it. The PvP mod keeps its match settings and round state on this entity.

The world entity does not exist yet when your mod's `Init` runs, so if you need to write to it at startup, subscribe to `OnWorldEntityCreated`. See [Server events](server-events).

## Area entity

One entity per active area, carrying the state that belongs to the area rather than to any player in it. 

:::info[What are areas?]

In Black Myth: Wukong, an area is a loaded map. Each main story act has one, each hidden boss location or arena has one, etc. If you need to go through a loading screen, you are changing an area.

:::

A system that needs to know whether a cutscene has already played in this area reads it here. Room and match rules used to live on this entity as a `RoomComponent`; they moved into the PvP mod in `0.4.0`, since that is the only thing that used them.

| Component | Description |
| --- | --- |
| [`AreaScopeComponent`](../../api-reference/ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.AreaScopeComponent) | The `AreaId` this entity scopes to. |
| [`MovieComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MovieComponent) | Which cutscenes have started and finished in this area. |

`AreaScopeComponent` is the component every area-scoped entity is matched on. Pairing it with a component of your own is how you narrow a query to a single area, as the SDK's own movie handlers do.

## Global player entity

One entity per connected player. It exists for the whole session, independent of which area the player is in, and is the right place to hang **persistent, player-scoped** data. Players are identified by their [`PlayerId`](../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId) on this entity.

| Component | Description |
| --- | --- |
| [`PlayerScopeComponent`](../../api-reference/ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.PlayerScopeComponent) | The owning player's `PlayerId`. |
| [`PlayerComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PlayerComponent) | Persisted nickname and the player's team ID. |

This is the archetype that mod-registered "global" player components are added to.

## Tamer

A tamer is an enemy entity: everything from a wandering mob to a boss. Area-scoped, so it exists while the area is active and is destroyed with it when the last player leaves.

| Component | Description |
| --- | --- |
| [`TamerComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TamerComponent) | The tamer's GUID and unit path, whether it is a boss or elite, whether its logic is paused, and which players are keeping it spawned. |
| [`TransformComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TransformComponent) | World position and rotation. |
| [`HpComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.HpComponent) | Current HP, base max HP, the max HP multiplier in percent, and death state. |
| [`NicknameComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.NicknameComponent) | Displayed name. Used in PvP to display "Bot" overhead. |
| [`TeamComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TeamComponent) | Team ID of the underlying game actor. |
| [`AnimationComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.AnimationComponent) | Movement animation state: velocity, acceleration and move speed level. |
| [`MonsterAnimationComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MonsterAnimationComponent) | Move AI type and animation play rate. |

## Main character

The player's pawn in the world: an **area-scoped** entity that exists while the player is present in an area. It holds the character's live state and is linked to the global player entity by the same `PlayerId`.

When crossing between areas, this entity is destroyed and recreated, so persistent data should not be stored here.

| Component | Description |
| --- | --- |
| [`MainCharacterComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MainCharacterComponent) | The owning `PlayerId` plus the character's live state: movement, animation flags, transformation, spectator state, rebirth point, attributes and equipment. |
| [`TransformComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TransformComponent) | World position and rotation. |
| [`HpComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.HpComponent) | Current HP, base max HP, the max HP multiplier in percent, and death state. |
| [`NicknameComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.NicknameComponent) | The player's displayed name, copied from `PlayerComponent` on area change. |
| [`TeamComponent`](../../api-reference/ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TeamComponent) | Team ID of the underlying game actor. |

`MainCharacterComponent` is the component to pair with when you want per-player data, because it is the one that carries the `PlayerId` in the world. Almost every query in a server mod starts here.

All of the above are the game's own networked components, defined in `ReadyM.Wukong.Common`.

:::note[PvP components moved]

`PvPComponent`, `PvpStateComponent` and `RoomComponent` used to ship in `ReadyM.Wukong.Common` and appear on these archetypes. As of `0.4.0` they belong to the PvP mod, along with the `PvpStateArchetype` that named the archetype they lived on. If you referenced any of them, they are now in the [PvP mod](https://github.com/readycodeio/WukongMP-PvP-mod), which is also the worked example of a mod putting its own state on the world entity.

:::

## Registering your own archetype

Besides extending the built-in archetypes, a mod can register an entirely new one with `RegisterArchetype`. Register your components in `RegisterComponents` first, then build the archetype in `Init` and keep the returned `ArchetypeId` so you can create entities with it later.

```csharp title="Registering a new archetype and attaching a component to an existing one"
public class Mod : ServerModBase
{
    public static ArchetypeId ShrineArchetype { get; private set; }

    protected override void RegisterComponents(IComponentRegistry registry)
    {
        // A component must be registered before any archetype can use it.
        // Use RegisterLocalComponent for server-only state, RegisterComponent for networked.
        registry.RegisterLocalComponent<ShrineComponent>();
        registry.RegisterComponent<BountyComponent>();
    }

    protected override void Init()
    {
        var registry = Services.Resolve<IArchetypeRegistry>();

        // A brand new archetype: one of the game's components plus one of our own.
        ShrineArchetype = registry.RegisterArchetype(b => b
            .Add<TransformComponent>()
            .Add<ShrineComponent>());

        // Attaching a component to a built-in archetype instead.
        registry.ModifyArchetype(WukongArchetypes.GlobalPlayerArchetype, b => b.Add<BountyComponent>());
    }
}
```

Both calls take a builder, where `Add<T>()` declares one component on the archetype. The game's own components are resolved by type, so you can freely mix them with your own.

Keep the returned `ArchetypeId` on your mod class. You need it to create entities, which is covered in [Entities](entities).

:::important

An archetype your mod registers must be registered on the client too, in the same order and with the same component set, or the two sides disagree about what an entity of that archetype contains.

On the client, do it in one `RegisterArchetypes` call so the order is obvious and easy to keep in step. See [Custom components](../Development/APIs/custom-components).

:::
