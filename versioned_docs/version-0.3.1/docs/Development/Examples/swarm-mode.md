---
sidebar_position: 1
---

# Swarm Mode

The purpose of this mod is to provide an example of a simplest way to implement a new game mode in WukongMP.
It registers a console command `swarm_mode` which makes enemies spawn around the player in waves every few seconds.
The players are supposed to fight until they can't anymore, after which the mod will print the number of enemies summoned.

## Mod entry point

In order to create a WukongMP mod, you must create a new C# library project referencing `WukongMp.Sdk.dll` and define a class derived from [ModBase](../../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModBase).

At minimum, the mod must define its name:

```csharp title="Mod.cs"
public class Mod : ModBase
{
    public override string Name => "Swarm";
```

The `Initialize` method is the place to configure your mod. In this mod, we do a few things:

1. Register our RPC handler class in the dependency injection container to enable sending and receiving RPC.
1. Resolve `SpawnEnemySwarmSystem` from the DI container - every system defined in your mod will be injected there.
1. Register a console command `swarm_mode` which turns on our custom game mode, notifying other players.
1. Subscribe to the `OnPlayerDead` event to turn it off when the last player dies and send events when someone dies.

```csharp title="Mod.cs" showLineNumbers  
    protected override void Initialize(IDependencyContainer services)
    {
        services.RegisterSingleton<Rpc>();

        var rpc = services.Resolve<Rpc>();
        var spawnSystem = services.Resolve<SpawnEnemySwarmSystem>();

        WukongApi.Console.AddCommand("swarm_mode", ConsoleCommand.Create(() =>
        {
            spawnSystem.Enable();
            rpc.SendSwarmStarted();
        }));

        WukongApi.Events.OnPlayerDead += (victim, attacker) =>
        {
            var alivePlayers = WukongApi.Sync.AllMainCharacters.Count(x => !x.IsDead);
            if (alivePlayers > 0)
            {
                rpc.SendRemainingPlayers(alivePlayers);
            }
            else
            {
                rpc.SendSwarmEnded(spawnSystem.SpawnedEnemies);
                spawnSystem.Disable();
            }
        };
    }
}
```

## Custom RPC

Our mod uses a few custom Remote Procedure Calls to notify other players about the state of the fight.

All of these calls display UI elements - informational banners or chat messages visible to the receiving player.

We use the `AreaOfInterestAll` [Relay mode](../../../api-reference/ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode) to receive the message on all clients in the same level, the sender included. This ensures everyone sees the same messages.

Refer to the [RPC documentation](../custom-rpc) to learn what else you can do in RPC classes.

```csharp title="Custom RPC class"
public partial class Rpc : ClientRpcHandler
{
    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnSwarmStarted(PlayerId __sender)
    {
        if (!WukongApi.Sync.TryGetPlayerInfoById(__sender, out var playerName, out _))
        {
            Logging.LogError("Failed to get player info for sender {Sender}", __sender);
        }

        WukongApi.Local.ShowInfoMessage("Get ready!", 3);
        WukongApi.Local.AddChatMessage($"Swarm mode enabled by {playerName}!", FLinearColor.NavajoWhite);
        WukongApi.Local.AddChatMessage("Enemies will spawn around you every 10 seconds, with increasing numbers. Survive as long as you can!", FLinearColor.NavajoWhite);
    }

    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnSwarmEnded(int enemiesSpawned)
    {
        WukongApi.Local.AddChatMessage($"Swarm mode ended, survived {enemiesSpawned} enemies", FLinearColor.OrangeRed);
    }
    
    [RpcEvent(RelayMode.AreaOfInterestAll)]
    private void OnRemainingPlayers(int remaining)
    {
        WukongApi.Local.AddChatMessage($"Remaining players: {remaining}", FLinearColor.Yellow);
    }
}
```

## Core gameplay loop

The main logic of the mod is encapsulated in `SpawnEnemySwarmSystem`.

We begin by defining a few constants to configure the behavior of our system:

```csharp showLineNumbers title="SpawnEnemySwarmSystem.cs"
public sealed class SpawnEnemySwarmSystem : ModSystemBase
{
    private bool _enabled;
    private float _timeSinceLastSpawn;
    private int _swarmSize = 3;
    private int _enemies;
    private const int SwarmIncrement = 1;
    private const int SwarmMax = 7;
    private const float SpawnRadius = 1000.0f;
    private const float SpawnInterval = 10.0f;
    private const float InitialDelay = 3.0f;
```

Then - the methods for enabling and disabling the system. We use the [Local API](../../../api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongLocalApi) for showing message banners and adding messages to the chat window.

```csharp showLineNumbers=13 title="SpawnEnemySwarmSystem.cs"
    public void Enable()
    {
        _enabled = true;

        WukongApi.Local.ShowInfoMessage("Get ready!", 3);
        WukongApi.Local.AddChatMessage("Swarm mode enabled! Enemies will spawn around you every 10 seconds, with increasing numbers. Survive as long as you can!", FLinearColor.NavajoWhite);
    }

    public void Disable()
    {
        if (!_enabled)
            return;

        _enabled = false;
        WukongApi.Local.AddChatMessage($"Swarm mode ended, survived {_enemies} enemies", FLinearColor.OrangeRed);

        // reset state for next time
        _enemies = 0;
        _swarmSize = 3;
        _timeSinceLastSpawn = SpawnInterval - InitialDelay;
    }
```

All systems (classes derived from [ModSystemBase](../../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase)) expose an [OnUpdate](../../../api-reference/WukongMp.Sdk/WukongMp.Sdk.ModSystemBase#-onupdateupdatetick) method which runs on every frame.
We can use that to count the number of seconds since the last time we spawned enemies. When `_timeSinceLastSpawn` exceedes the threshold, we use the [Synchronization API](../../../api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongSynchronizationApi) to spawn an enemy (Wolf Sentinel) a few times in a circle around the player. All available enemy types are defined in [TamerKinds](../../../api-reference/WukongMp.Api.Configuration/WukongMp.Api.Configuration.TamerKinds).

```csharp showLineNumbers=35 title="SpawnEnemySwarmSystem.cs"
    protected override void OnUpdate(UpdateTick tick)
    {
        if (!_enabled || !WukongApi.Sync.LocalMainCharacter.HasValue)
            return;

        _timeSinceLastSpawn += tick.deltaTime;
        if (_timeSinceLastSpawn > SpawnInterval)
        {
            _timeSinceLastSpawn = 0;
            WukongApi.Local.ShowInfoMessage($"Spawning {_swarmSize} enemies!", 1);

// highlight-start
            // spawn a few enemies around the player
            for (var i = 0; i < _swarmSize; i++)
            {
                var position = GetNthPointOnCircle(WukongApi.Sync.LocalMainCharacter.Value.Location, i, _swarmSize);
                WukongApi.Sync.SpawnEnemy(TamerConstants.WolfSentinel, position);
            }
// highlight-end

            // increase swarm size, up to a certain point
            _swarmSize = Math.Min(_swarmSize + SwarmIncrement, SwarmMax);

            // count total enemies spawned for end-of-mode summary
            _enemies += _swarmSize;
        }
    }

    private static Vector3 GetNthPointOnCircle(Vector3 center, int i, int n) { ... }
}
```
