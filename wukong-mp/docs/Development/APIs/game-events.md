# Game events

The WukongMP SDK provides means to react to the most common events in the game: levels loading, players and monsters coming and going, and deaths.

All of them hang off [`WukongApi.Events`](../../../api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongEventApi) as ordinary C# events.

## Subscribing

Subscribe in a class implementing [`IHostedService`](../../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IHostedService), so the SDK hands you a place to attach and detach. Subscribe in `OnScopeStart` and unsubscribe in `Dispose`:

```csharp title="MyEventCallbacks.cs"
public sealed class MyEventCallbacks(ILogger logger) : IHostedService
{
    public void OnScopeStart()
    {
        WukongApi.Events.OnJoinedArea += OnJoinedArea;
        WukongApi.Events.OnMonsterDead += OnMonsterDead;
    }

    public void Dispose()
    {
        WukongApi.Events.OnJoinedArea -= OnJoinedArea;
        WukongApi.Events.OnMonsterDead -= OnMonsterDead;
    }

    private void OnJoinedArea(AreaId area)
        => logger.LogInformation("Entered area {Area}", area);

    private void OnMonsterDead(ReadyTamer monster, ReadyCharacter? killer)
        => logger.LogInformation("{Monster} killed by {Killer}", monster.Nickname, killer?.Nickname);
}
```

Then register it in your mod's `Initialize`:

```csharp
services.RegisterSingleton<MyEventCallbacks>();
```

See [Hosted services](../hosted-services) for the lifecycle in full. The [co-op mod](https://github.com/readycodeio/WukongMP-co-op-mod)'s `CoopEventCallbacks` is a working example.

## Levels and areas

An **area** is a loaded map. If the game shows a loading screen, you are changing area.

| Event | Argument | Fires when |
| --- | --- | --- |
| `OnLevelLoaded` | | a gameplay level has loaded, before the loading screen closes |
| `OnLoadingScreenClose` | | the loading screen closes after a level loads |
| `OnBeginPlayGameplayLevel` | | the player enters a gameplay level |
| `OnEndPlayGameplayLevel` | | the player leaves a gameplay level, to the menu or another level |
| `OnExitLevel` | | the player exits a level |
| `OnJoinedArea` | `AreaId` | the local player enters an area |
| `OnLeftArea` | `AreaId` | the local player leaves an area |

:::tip[Setting up widgets]

`OnLevelLoaded` fires before the loading screen closes, which makes it the right place to build custom UI: your widget is ready the moment the player can see anything. Use `OnLoadingScreenClose` for things that should happen once the player is actually looking at the world.

:::

## Players

| Event | Arguments | Fires when |
| --- | --- | --- |
| `OnConnected` | `PlayerId` | any player connects to the server |
| `OnDisconnected` | `PlayerId`, [`DisconnectedReason`](#why-a-player-disconnected) | any player disconnects, deliberately or not |
| `OnMainCharacterEntityInitialized` | [`ReadyMainCharacter`](../../../api-reference/WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyMainCharacter) | a player's ECS entity is ready |
| `OnPlayerPawnSpawned` | `ReadyMainCharacter` | a player's in-game character is spawned |
| `OnPlayerChangedTeam` | `ReadyMainCharacter` | a player changes team, by rebirthing or joining in progress |
| `OnPlayerDead` | `ReadyMainCharacter`, [`ReadyCharacter?`](../../../api-reference/WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyCharacter) | any player dies. The second argument is the killer, if there was one |
| `OnLocalPlayerBeforeRebirth` | | the local player is about to rebirth, while still dead |
| `OnLocalPlayerChangedSpectator` | `bool` | the local player enters or leaves spectator mode |
| `OnOtherPlayerInsideArea` | `PlayerId`, `AreaId` | another player enters the local player's area |
| `OnOtherPlayerOutsideArea` | `PlayerId`, `AreaId` | another player leaves the local player's area |

:::important[Two events per player, in this order]

`OnMainCharacterEntityInitialized` fires **before** `OnPlayerPawnSpawned`. The entity exists first, the pawn appears second.

If you are writing to the player's ECS components, use the first one so your data is in place before anything renders. If you are touching the pawn, the actor in the world, use the second, because the pawn does not exist yet during the first.

Both fire for every player, not just the local one: once when you enter an area, and again whenever someone else joins and their character spawns for you.

:::

### Why a player disconnected {#why-a-player-disconnected}

`OnDisconnected` carries a [`DisconnectedReason`](../../../api-reference/ReadyM.Api.Multiplayer.Protocol/ReadyM.Api.Multiplayer.Protocol.DisconnectedReason), so you can tell a rage quit from a dropped connection:

| Value | Meaning |
| --- | --- |
| `Unknown` | The reason could not be determined |
| `Timeout` | The connection to the server timed out |
| `ClientDisconnected` | The player left voluntarily |
| `IncompatibleVersion` | The player's SDK mod version does not match the server's |
| `ExpiredTicket` | The connection ticket the server issued had expired |
| `AlreadyConnected` | That player is already connected in another session |
| `ServerFull` | The server is not accepting new connections |
| `Kicked` | An admin kicked the player |
| `Banned` | An admin banned the player from this server |
| `ServerBanned` | ReadyM banned the whole server, so it refuses everyone |

Most mods only care about the difference between a player who meant to leave and one who fell off. `ClientDisconnected` is the deliberate one; `Timeout` is the one worth holding state for in case they come back.

The last two are worth telling apart. `Banned` is about one player on your server. `ServerBanned` is about the server itself, so every player sees it and there is nothing a mod can do about it.

## Monsters

| Event | Arguments | Fires when |
| --- | --- | --- |
| `OnMonsterSpawned` | [`ReadyTamer`](../../../api-reference/WukongMp.Sdk.Entities/WukongMp.Sdk.Entities.ReadyTamer) | a monster appears in the world |
| `OnMonsterDead` | `ReadyTamer`, `ReadyCharacter?` | a monster dies. The second argument is the killer, if there was one |
| `OnMonsterDestroyed` | `ReadyTamer` | a monster is removed from the world |

`OnMonsterDead` and `OnMonsterDestroyed` are not the same thing. A monster dies once, but it is destroyed whenever it leaves the world, which includes being despawned because the player walked away. A monster that despawns without dying raises only `OnMonsterDestroyed`.

## Other

| Event | Argument | Fires when |
| --- | --- | --- |
| `OnLanguageChanged` | `CultureInfo` | the game's language changes, from the settings or from the system locale |

Use `OnLanguageChanged` to re-render anything you have already drawn with translated text.

## Threading

Handlers are invoked on the game thread, so you can touch Unreal objects and the ECS world directly with no marshalling. The flip side is that a slow handler stalls a frame, so keep them short and move real work into a [system](../systems).
