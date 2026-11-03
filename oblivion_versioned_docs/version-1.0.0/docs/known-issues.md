---
sidebar_position: 2
---

# Known issues

We are aware of the following issues in the current release, and we're working on fixing them.

## Gameplay

* After spawning, the player character's body may not match their head.
* Dead NPCs' positions may reset to default after server restart.
* The player character's voice may not match their race or sex.
* Weather is decided by a random player, so it can change abruptly, for example when they move between a city and the open world.
* Physics and ragdolls of items and of NPC and player bodies make their positions go out of sync.
* Fire-shooting turrets in the Planes of Oblivion crash the game.
* After using the `Rebirth` command a player may become invisible to others.

## SDK

* Position of dropped items is not synchronized. Dragging them around will not be seen by other players, but they will disappear for everyone when picked up.
* Small changes to replicated decimal values are dropped. A write that changes a `float` or `double` by 0.1 or less, or moves a vector by 0.1 or less, is not stored or sent, unless it changes the value (or an axis of the vector) from 0 or to 0. The same threshold applies to values marked `[Quantize]` or `[HalfPrecision]`. More robust controls over this are coming.

## Missing features

These are planned for a patch soon after release:

* **No broadcast send.** A server message goes to one player at a time; to reach everyone, loop over the players. See [RPC](Modding/Concepts/rpc.md).
* **No way to react to entities arriving on the client.** Create handlers on the client do not run for entities the server sends. See [Entities and queries](Modding/Concepts/entities-and-queries.md).
