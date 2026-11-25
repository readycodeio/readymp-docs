---
title: 'ReadyM.SDK.Client.Mapping'
description: 'The types in the ReadyM.SDK.Client.Mapping namespace.'
---
# ReadyM.SDK.Client.Mapping

### Classes

 [SyncExtensions](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.SyncExtensions.md)

Extensions for moving one value between the ECS and the game at a sync point, usually a patch or system.

### Interfaces

 [IShapeMappingRegistry](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingRegistry.md)

Where a mod declares how its shapes map to and from game objects.

 [IShapeMappingScope<TShape, TContext\>](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappingScope-2.md)

The mappings between one shape and one kind of game object.

 [IShapeMappings](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.IShapeMappings.md)

A client mod's game-state mappings, declared once when the mod loads.

### Delegates

 [Collected<TAccess, TContext\>](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Collected-2.md)

Moves one collection between the ECS and the game, in whichever direction it was declared for.

 [Pull<TValue, TContext\>](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.Pull-2.md)

Reads a value out of the game and into the shape.


