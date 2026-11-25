---
title: 'Interface ICellSeeder'
description: 'Fills a new cell. Declare it on a [Service]; the server calls it once, when the cell is created rather than loaded from the save.'
---
# Interface ICellSeeder

Namespace: [ReadyM.SDK.Server.Seeding](../ReadyM.SDK.Server.Seeding/ReadyM.SDK.Server.Seeding.md)  
Assembly: ReadyM.SDK.Server.dll  

Fills a new cell. Declare it on a <code>[Service]</code>; the server calls it once, when the cell is created rather
than loaded from the save.

```csharp
public interface ICellSeeder
```

## Remarks

Game thread, inside the cell's creation, before its created event. The server has not registered the cell yet, so
create into it through its scope, <code>IEntities.Create&lt;T&gt;(Scope.Of(cell))</code>. A mod has at most one cell seeder.
No player is in the cell yet: what is created is the server's until the first player enters.

## Methods

### <a id="ReadyM_SDK_Server_Seeding_ICellSeeder_Seed_ReadyM_SDK_Archetypes_Core_Cell_"></a> Seed\(Cell\)

```csharp
void Seed(Cell cell)
```

#### Parameters

`cell` Cell


