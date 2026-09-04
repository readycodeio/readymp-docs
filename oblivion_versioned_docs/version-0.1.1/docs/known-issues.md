---
sidebar_position: 2
---

# Known issues

We are aware of the following issues in this initial release of the SDK:

* Server-side mods are loaded in alphabetical order, so you must ensure your mod is either in a folder, like `server_mods/MyMod/MyMod.dll`, or rename `server_mods/OblivionMp.Sdk.Serverside.dll` to something like `aaa_OblivionMp.Sdk.Serverside.dll`.
* Setting a rapidly changing value on the server side, e.g. the player's position, will often be ignored by the player who overrides the value every frame. As such, it is not possible to teleport a player by simply setting his `TransformComponent.Position` to another value.
* Position of dropped items is not synchronized. Dragging them around will not be seen by other players, but they will disappear for everyone when picked up.
* Level items pickup and position are not synced at all.
* The game sometimes crashes when using doors.
