---
title: 'Interface IWorldSeeder'
description: 'Fills a new World. Declare it on a [Service]; the server calls it once, when the World is created rather than loaded from the save.'
---
# Interface IWorldSeeder

Namespace: [ReadyM.SDK.Server.Seeding](../ReadyM.SDK.Server.Seeding/ReadyM.SDK.Server.Seeding.md)  
Assembly: ReadyM.SDK.Server.dll  

Fills a new World. Declare it on a <code>[Service]</code>; the server calls it once, when the World is created rather
than loaded from the save.

```csharp
public interface IWorldSeeder
```

## Remarks

Game thread, inside the World's creation, before its created event. Entities without a scope belong to the World,
so create them with <code>IEntities.Create&lt;T&gt;()</code>. A mod has at most one world seeder. It runs as the
server starts, before any player has connected.

## Methods

### <a id="ReadyM_SDK_Server_Seeding_IWorldSeeder_Seed_ReadyM_SDK_Archetypes_Core_World_"></a> Seed\(World\)

```csharp
void Seed(World world)
```

#### Parameters

`world` World


