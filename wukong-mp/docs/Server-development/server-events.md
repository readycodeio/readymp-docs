---
sidebar_position: 5
---

# Server events

Systems tick every frame, and RPC handlers run when a client asks for something. Server events are the third way a mod gets control: the relay tells you when something happened.

New in `0.4.0`.

## Subscribing

Derive from [`ServerEventHandlersBase`](../../api-reference/ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.ServerEventHandlersBase) and implement `Subscribe` and `Unsubscribe`. The base class hooks both into the mod lifecycle, so you never unsubscribe by hand:

```csharp title="EventHandlers.cs"
public class EventHandlers(ServerEventsApi events, EcsApi ecs, ILogger logger)
    : ServerEventHandlersBase(events)
{
    protected override void Subscribe(ServerEventsApi e)
    {
        e.OnPlayerJoinedArea += OnPlayerJoinedArea;
        e.OnAreaDeleted += OnAreaDeleted;
    }

    protected override void Unsubscribe(ServerEventsApi e)
    {
        e.OnPlayerJoinedArea -= OnPlayerJoinedArea;
        e.OnAreaDeleted -= OnAreaDeleted;
    }

    private void OnPlayerJoinedArea(PlayerId player, AreaId area)
        => logger.LogInformation("{Player} entered {Area}", player, area);

    private void OnAreaDeleted(AreaId area, Entity entity)
    {
        // last player left, tear down whatever we hung off this area
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

Where an event hands you an `Entity`, that is the entity for the thing the event is about, so you can write to its components without going looking for it first.

## `OnWorldEntityCreated`

Your mod's `Init` runs before the world entity exists, so this is the earliest point at which you can write world components:

```csharp
protected override void Subscribe(ServerEventsApi e)
    => e.OnWorldEntityCreated += OnWorld;

private void OnWorld(Entity world)
{
    ref var settings = ref ecs.GetComponentRef<MatchSettingsComponent>(world.Id);
    settings.Rounds = 3;
}
```

If you find yourself wanting to seed state at startup and not finding anywhere to put it, this is the hook you want. See [Archetypes and components](archetypes#world-entity) for what the world entity is.

## Threading

Event handlers run on the server's update thread, the same one your systems tick on. That means you can query and modify entities directly, with no marshalling, and it also means a slow handler delays the tick. Keep them short.
