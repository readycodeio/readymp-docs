---
sidebar_position: 5
---

# Server events

Systems tick every frame, and RPC handlers run when a client asks for something. Server events are the third way a mod gets control: the relay tells you when something happened.

New in `0.2.0`.

## Subscribing

Derive from [`ServerEventHandlersBase`](../../api-reference/ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventHandlersBase) and implement `Subscribe` and `Unsubscribe`. The base class hooks both into the mod lifecycle, so you never unsubscribe by hand:

```csharp title="EventHandlers.cs"
public class EventHandlers(ServerEventsApi events, EcsApi ecs, ILogger logger)
    : ServerEventHandlersBase(events)
{
    protected override void Subscribe(ServerEventsApi e)
    {
        e.OnPlayerActivatedCell += OnPlayerActivatedCell;
        e.OnCellDeleted += OnCellDeleted;
    }

    protected override void Unsubscribe(ServerEventsApi e)
    {
        e.OnPlayerActivatedCell -= OnPlayerActivatedCell;
        e.OnCellDeleted -= OnCellDeleted;
    }

    private void OnPlayerActivatedCell(PlayerId player, FullCellId cell)
        => logger.LogInformation("{Player} loaded {Cell}", player, cell);

    private void OnCellDeleted(FullCellId cell, Entity entity)
    {
        // nobody has this cell loaded any more, tear down whatever we hung off it
    }
}
```

Register it as a singleton in your mod's `Init`, the same as a system:

```csharp
Services.RegisterSingleton<EventHandlers>();
```

## The events

| Event | Arguments | Fires when |
| --- | --- | --- |
| `OnWorldEntityCreated` | entity | the world entity exists, once at startup |
| `OnPlayerConnected` | player, entity | a player finishes connecting |
| `OnPlayerDisconnected` | player, entity, reason | a player drops or leaves |
| `OnAreaCreated` | area, entity | the first player enters an area |
| `OnAreaDeleted` | area, entity | the last player leaves an area |
| `OnPlayerJoinedArea` | player, area | a player enters an area that already exists |
| `OnPlayerLeftArea` | player, area | a player leaves an area others are still in |
| `OnCellCreated` | cell, entity | the first player activates a cell |
| `OnCellDeleted` | cell, entity | the last player deactivates a cell |
| `OnPlayerActivatedCell` | player, cell | a player loads a cell that is already active |
| `OnPlayerDeactivatedCell` | player, cell | a player unloads a cell others still have loaded |

Where an event hands you an `Entity`, that is the entity for the thing the event is about, so you can write to its components without going looking for it first.

The cell events are the Oblivion-specific half of this list. They follow the same create/delete plus join/leave shape as the area events, one level further in: an area is the world space, a cell is the chunk a player currently has loaded. See [Entities](entities#cells-and-areas).

## `OnWorldEntityCreated`

Your mod's `Init` runs before the world entity exists, so this is the earliest point at which you can write world components:

```csharp
protected override void Subscribe(ServerEventsApi e)
    => e.OnWorldEntityCreated += OnWorld;

private void OnWorld(Entity world)
{
    ref var state = ref ecs.GetComponentRef<WorldStateComponent>(world.Id);
    // seed whatever your mod needs before the first player connects
}
```

If you find yourself wanting to seed state at startup and not finding anywhere to put it, this is the hook you want. See [Archetypes and components](archetypes#world-entity) for what the world entity carries.

## Threading

Event handlers run on the server's update thread, the same one your systems tick on. That means you can query and modify entities directly, with no marshalling, and it also means a slow handler delays the tick. Keep them short.
