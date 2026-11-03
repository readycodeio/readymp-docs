---
title: 'Interface IServerEvents'
description: 'The server''s events: players connecting and moving, and areas and cells coming and going.'
---
# Interface IServerEvents

Namespace: [ReadyM.Relay.Server.Sdk.Events](../ReadyM.Relay.Server.Sdk.Events/ReadyM.Relay.Server.Sdk.Events.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

The server's events: players connecting and moving, and areas and cells coming and going.

```csharp
public interface IServerEvents
```

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnAreaCreated"></a> OnAreaCreated

Fires when an area comes into use, as the first player enters it.

```csharp
event Action<AreaId?, Entity>? OnAreaCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<AreaId?, [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnAreaDeleted"></a> OnAreaDeleted

Fires when the last player has left an area, unless the server keeps it while empty.

```csharp
event Action<AreaId?, Entity>? OnAreaDeleted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<AreaId?, [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnCellCreated"></a> OnCellCreated

Fires when a cell comes into use, as the first player loads it.

```csharp
event Action<AreaId?, CellId?, Entity>? OnCellCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<AreaId?, CellId?, [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnCellDeleted"></a> OnCellDeleted

Fires when the last player has unloaded a cell, unless the server keeps it while empty.

```csharp
event Action<AreaId?, CellId?, Entity>? OnCellDeleted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<AreaId?, CellId?, [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnPlayerActivatedCell"></a> OnPlayerActivatedCell

Fires when any player loads a cell, the first one included.

```csharp
event Action<PlayerId?, AreaId?, CellId?>? OnPlayerActivatedCell
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<PlayerId?, AreaId?, CellId?\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnPlayerConnected"></a> OnPlayerConnected

Fires when a player has connected and their player entity exists.

```csharp
event Action<PlayerId?, Entity>? OnPlayerConnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId?, [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnPlayerDeactivatedCell"></a> OnPlayerDeactivatedCell

Fires when any player unloads a cell.

```csharp
event Action<PlayerId?, AreaId?, CellId?>? OnPlayerDeactivatedCell
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<PlayerId?, AreaId?, CellId?\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnPlayerDisconnected"></a> OnPlayerDisconnected

Fires when a player has left or dropped, after they left their area.

```csharp
event Action<PlayerId?, Entity, DisconnectReason?>? OnPlayerDisconnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-3)<PlayerId?, [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md), DisconnectReason?\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnPlayerJoinedArea"></a> OnPlayerJoinedArea

Fires when any player enters an area, the first one included.

```csharp
event Action<PlayerId?, AreaId?>? OnPlayerJoinedArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId?, AreaId?\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnPlayerLeftArea"></a> OnPlayerLeftArea

Fires when any player leaves an area.

```csharp
event Action<PlayerId?, AreaId?>? OnPlayerLeftArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId?, AreaId?\>?

### <a id="ReadyM_Relay_Server_Sdk_Events_IServerEvents_OnWorldEntityCreated"></a> OnWorldEntityCreated

Raised once, when the world entity exists. A mod's Init runs before that, so this is the earliest point at which
world components can be written.

```csharp
event Action<Entity>? OnWorldEntityCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)\>?


