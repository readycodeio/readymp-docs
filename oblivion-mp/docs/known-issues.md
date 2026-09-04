---
sidebar_position: 2
---

# Known issues

We are aware of the following issues in the current release of the SDK:

* Setting a rapidly changing value from the server, for example the player's position, is usually ignored by the client that overwrites it every frame. Teleporting a player by assigning `TransformComponent.Position` on the server does not work on its own. There is an experimental workaround, see [Forcing a value change](Server-development/getting-started#reading-and-writing-entity-data).
* Position of dropped items is not synchronized. Dragging them around will not be seen by other players, but they will disappear for everyone when picked up.
* Level items pickup and position are not synced at all.