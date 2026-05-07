---
sidebar_position: 5
---

# Hosted services

In addition to systems, the WukongMP SDK also provides a way to implement **hosted services**. These are classes that expose lifecycle methods for when the game starts and stops, but don't have a tick method.

## Declaring hosted services

Any class implementing [IHostedService](../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IHostedService) and added to the Dependency Injection container in your mod's `Initialize` method will automatically call its `OnScopeStart` method when the game starts, and disposed of when the game shuts down.

Such services are useful for managing event subscriptions, or running initialization code that doesn't fit in the `Initialize` method of your mod class, or that needs to be cleaned up when the game shuts down.

Below is an example of a hosted service from the PvP mod. It encapsulates some simple logic for synchronizing PvP state when joining a new area. Since many of the mod's features depend on subcribing to game events, this pattern of using hosted services to manage event subscriptions is used throughout the mod's codebase.

```csharp title="Hosted service example"
public sealed class PvpSynchronizer : IHostedService
{
    public void OnScopeStart() 
        => WukongApi.Events.OnJoinedArea += OnJoinedAreaHandler;

    public void Dispose() 
        => WukongApi.Events.OnJoinedArea -= OnJoinedAreaHandler;

    private static void OnJoinedAreaHandler(AreaId areaId)
    {
        var isMasterClient = WukongApi.Sync.IsMasterClient;
        Logging.LogDebug("Joined area {AreaId}, is master client: {IsMasterClient}", areaId, isMasterClient);
        
        if (isMasterClient)
            WukongApi.PvP.InitializeAreaPvpState();
    }
}
```
