---
title: 'OblivionMP.SDK.Serverside'
description: 'The types in the OblivionMP.SDK.Serverside namespace.'
---
# OblivionMP.SDK.Serverside

### Namespaces

 [OblivionMP.SDK.Serverside.Ai](../OblivionMP.SDK.Serverside.Ai/OblivionMP.SDK.Serverside.Ai.md)

 [OblivionMP.SDK.Serverside.Archetypes](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.md)

 [OblivionMP.SDK.Serverside.Items](../OblivionMP.SDK.Serverside.Items/OblivionMP.SDK.Serverside.Items.md)

 [OblivionMP.SDK.Serverside.Spawners](../OblivionMP.SDK.Serverside.Spawners/OblivionMP.SDK.Serverside.Spawners.md)

 [OblivionMP.SDK.Serverside.World](../OblivionMP.SDK.Serverside.World/OblivionMP.SDK.Serverside.World.md)

### Classes

 [ServerRefIds](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.ServerRefIds.md)

Hands out ref ids for entities the server creates (dropped items, spawned npcs). The next one is kept on the World
(**ServerRefIdMark**), which is saved in Global, so cells that are not loaded keep their ids.

 [SessionClock](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionClock.md)

The game time of an area, read from its clock.

 [SessionDifficulty](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionDifficulty.md)

The difficulty every client in the session runs at.
Leaving a tier Unset keeps clients on the game's own default tier (Adept).

 [SessionRespawn](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionRespawn.md)

When the server refills a cell with the items, plants, container loot and spawns it was seeded with. A cell refills
once **IntervalGameHours** of game time have passed since it was last filled.

 [SessionScaling](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.SessionScaling.md)

The level every client in the session resolves leveled lists at (creature spawns, container loot).
The level blends between the lowest and the highest player level in the session: 0 follows the lowest,
1 the highest, 0.5 sits halfway. Until one of the setters is called each client keeps its own level.

### Structs

 [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)


