---
title: 'OblivionMp.Sdk.Serverside'
description: 'The types in the OblivionMp.Sdk.Serverside namespace.'
---
# OblivionMp.Sdk.Serverside

### Namespaces

 [OblivionMp.Sdk.Serverside.Ai](../OblivionMp.Sdk.Serverside.Ai/OblivionMp.Sdk.Serverside.Ai.md)

 [OblivionMp.Sdk.Serverside.Archetypes](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.md)

 [OblivionMp.Sdk.Serverside.Items](../OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.md)

 [OblivionMp.Sdk.Serverside.Spawners](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.md)

 [OblivionMp.Sdk.Serverside.World](../OblivionMp.Sdk.Serverside.World/OblivionMp.Sdk.Serverside.World.md)

### Classes

 [ServerRefIds](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.ServerRefIds.md)

Hands out ref ids for entities the server creates (dropped items, spawned npcs). The next one is kept on the World
(**ServerRefIdMark**), which is saved in Global, so cells that are not loaded keep their ids.

 [SessionClock](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionClock.md)

The session's game time, read from an area's clock.

 [SessionDifficulty](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionDifficulty.md)

The difficulty every client in the session runs at.
Leaving a tier Unset keeps clients on the game's own default tier (Adept).

 [SessionRespawn](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionRespawn.md)

When the server refills a cell with the items, plants, container loot and spawns it was seeded with. A cell refills
once **IntervalGameHours** of game time have passed since it was last filled.

 [SessionScaling](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionScaling.md)

The level every client in the session resolves leveled lists at (creature spawns, container loot).
The level blends between the lowest and the highest player level in the session: 0 follows the lowest,
1 the highest, 0.5 sits halfway. Until one of the setters is called each client keeps its own level.

### Structs

 [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)


