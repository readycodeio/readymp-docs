---
sidebar_position: 3
---

# Known issues

We are aware of the following issues in the current release, and we're working on fixing them. Anything not listed here, report on the [OblivionMP Discord](https://discord.gg/obmp).

## Gameplay

* Dead NPCs' positions may reset to default after server restart.
* Weather is decided by a random player, so it can change abruptly, for example when they move between a city and the open world.
* Physics and ragdolls of items and of NPC and player bodies make their positions go out of sync.
* After using the `Rebirth` command a player may become invisible to others.
* Custom spells are not kept after a rebirth.
* A bound weapon or bound armor conjured before a rebirth stays on the character permanently.
* An NPC riding a horse may sit in the saddle in a T-pose. A player riding one is not affected.

## Saving

The server keeps your character, but not all of it yet. [Joining a server and saving](joining-and-saving.md) explains what is kept.

* Your position is not saved. Every time you join, you start at the starting spot of the world save OblivionMP ships with, not where you left.
* Custom spells are not saved.
* A custom class made in the class menu is not saved. The standard classes are.
* A change to your name, race, sex, class or birthsign is only saved when it is made in the race, class or birthsign menu.
* Every player's first join on a server starts as the same preset character from the world save, with its name, race, items and starting spot, unless the server's mods change that.

## SDK

* Position of dropped items is not synchronized. Dragging them around will not be seen by other players, but they will disappear for everyone when picked up.
* Small changes to replicated decimal values are dropped. A write that changes a `float` or `double` by 0.1 or less, or moves a vector by 0.1 or less, is not stored or sent, unless it changes the value (or an axis of the vector) from 0 or to 0. The same threshold applies to values marked `[Quantize]` or `[HalfPrecision]`. More robust controls over this are coming.

## Missing features

These are planned for future patches:

* **No broadcast send.** A server message goes to one player at a time; to reach everyone, loop over the players. See [RPC](Modding/Concepts/rpc.md).
* **No way to react to entities arriving on the client.** Create handlers on the client do not run for entities the server sends. See [Entities and queries](Modding/Concepts/entities-and-queries.md).
