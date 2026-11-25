---
title: 'Interface IAreaSeeder'
description: 'Fills a new area. Declare it on a [Service]; the server calls it once, when the area is created rather than loaded from the save.'
---
# Interface IAreaSeeder

Namespace: [ReadyM.SDK.Server.Seeding](../ReadyM.SDK.Server.Seeding/ReadyM.SDK.Server.Seeding.md)  
Assembly: ReadyM.SDK.Server.dll  

Fills a new area. Declare it on a <code>[Service]</code>; the server calls it once, when the area is created rather
than loaded from the save.

```csharp
public interface IAreaSeeder
```

## Remarks

Game thread, inside the area's creation, before its created event. The server has not registered the area yet, so
create into it through its scope, <code>IEntities.Create&lt;T&gt;(Scope.Of(area))</code>. A mod has at most one area seeder.

## Methods

### <a id="ReadyM_SDK_Server_Seeding_IAreaSeeder_Seed_ReadyM_SDK_Archetypes_Core_Area_"></a> Seed\(Area\)

```csharp
void Seed(Area area)
```

#### Parameters

`area` Area


