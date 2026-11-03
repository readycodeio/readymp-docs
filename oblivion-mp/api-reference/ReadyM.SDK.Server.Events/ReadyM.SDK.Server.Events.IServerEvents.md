---
title: 'Interface IServerEvents'
description: 'The server''s events: players connecting and moving, and areas and cells coming and going.'
---
# Interface IServerEvents

Namespace: [ReadyM.SDK.Server.Events](../ReadyM.SDK.Server.Events/ReadyM.SDK.Server.Events.md)  
Assembly: ReadyM.SDK.Server.dll  

The server's events: players connecting and moving, and areas and cells coming and going.

```csharp
public interface IServerEvents
```

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnAreaCreated"></a> OnAreaCreated

Fires when an area comes into use, as the first player enters it.

```csharp
event Action<Area>? OnAreaCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<Area\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnAreaDeleted"></a> OnAreaDeleted

Fires when the last player has left an area, unless the server keeps it while empty.

```csharp
event Action<Area>? OnAreaDeleted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<Area\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnCellCreated"></a> OnCellCreated

Fires when a cell comes into use, as the first player loads it.

```csharp
event Action<Cell>? OnCellCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<Cell\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnCellDeleted"></a> OnCellDeleted

Fires when the last player has unloaded a cell, unless the server keeps it while empty.

```csharp
event Action<Cell>? OnCellDeleted
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<Cell\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnPlayerActivatedCell"></a> OnPlayerActivatedCell

Fires when any player loads a cell, the first one included.

```csharp
event Action<PlayerId, FullCellId>? OnPlayerActivatedCell
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId, FullCellId\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnPlayerConnected"></a> OnPlayerConnected

Fires when a player has connected and their player entity exists, with their ReadyM id.

```csharp
event Action<Player, Guid>? OnPlayerConnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<Player, [Guid](https://learn.microsoft.com/dotnet/api/system.guid)\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnPlayerDeactivatedCell"></a> OnPlayerDeactivatedCell

Fires when any player unloads a cell.

```csharp
event Action<PlayerId, FullCellId>? OnPlayerDeactivatedCell
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId, FullCellId\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnPlayerDisconnected"></a> OnPlayerDisconnected

Fires when a player has left or dropped, after they left their area.

```csharp
event Action<Player, DisconnectReason?>? OnPlayerDisconnected
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<Player, DisconnectReason?\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnPlayerJoinedArea"></a> OnPlayerJoinedArea

Fires when any player enters an area, the first one included.

```csharp
event Action<PlayerId, AreaId>? OnPlayerJoinedArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId, AreaId\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnPlayerLeftArea"></a> OnPlayerLeftArea

Fires when any player leaves an area.

```csharp
event Action<PlayerId, AreaId>? OnPlayerLeftArea
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-2)<PlayerId, AreaId\>?

### <a id="ReadyM_SDK_Server_Events_IServerEvents_OnWorldCreated"></a> OnWorldCreated

Raised once, when the world entity exists. A mod's Init runs before that, so this is the earliest point at which
world values can be written.

```csharp
event Action<World>? OnWorldCreated
```

#### Event Type

 [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<World\>?


