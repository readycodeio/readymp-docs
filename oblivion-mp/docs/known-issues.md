---
sidebar_position: 2
---

# Known issues

We are aware of the following issues in the current release, and we're working on fixing them.

## Gameplay

* Perk special abilities are synchronized when one Player attacks, but are not synchronized when other Player attacks
* Dead NPCs' positions may reset to default after server restart.
* Weather is decided by a random player, so it can change abruptly, for example when they move between a city and the open world.
* Physics and ragdolls of items and of NPC and player bodies make their positions go out of sync.
* After using the `Rebirth` command a player may become invisible to others.
* An equipped weapon is duplicated when it is dropped with a bare-handed power attack.
* Custom spells are not kept after a rebirth.
* A bound weapon or bound armor conjured before a rebirth stays on the character permanently.
* Quitting or using `Rebirth` while an item's buff is running makes the buff permanent.
* An NPC riding a horse may sit in the saddle in a T-pose. A player riding one is not affected.

## SDK

* Position of dropped items is not synchronized. Dragging them around will not be seen by other players, but they will disappear for everyone when picked up.
* Small changes to replicated decimal values are dropped. A write that changes a `float` or `double` by 0.1 or less, or moves a vector by 0.1 or less, is not stored or sent, unless it changes the value (or an axis of the vector) from 0 or to 0. The same threshold applies to values marked `[Quantize]` or `[HalfPrecision]`. More robust controls over this are coming.

## Missing features

These are planned for future patches:

* **No broadcast send.** A server message goes to one player at a time; to reach everyone, loop over the players. See [RPC](Modding/Concepts/rpc.md).
* **No way to react to entities arriving on the client.** Create handlers on the client do not run for entities the server sends. See [Entities and queries](Modding/Concepts/entities-and-queries.md).
