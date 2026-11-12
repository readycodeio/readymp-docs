---
title: 'ReadyM.Api.Multiplayer.ECS.Tags'
description: 'The types in the ReadyM.Api.Multiplayer.ECS.Tags namespace.'
---
# ReadyM.Api.Multiplayer.ECS.Tags

### Structs

 [AllowOwnershipTransferOnScopeEnterTag](../ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeEnterTag.md)

Hands the entity to the player whose game runs its area or cell: the first player into an empty one takes it, and
it follows when that player changes or the entity moves to another cell.

 [AllowOwnershipTransferOnScopeLeaveTag](../ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeLeaveTag.md)

When the entity's owner leaves its area or cell, hands it to another player there, or to the server if nobody is
left. Without this tag, or **KeepOwnerOnScopeLeaveTag**, the entity is deleted instead.

 [KeepOwnerOnScopeLeaveTag](../ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.KeepOwnerOnScopeLeaveTag.md)

The entity's owner keeps it after leaving its area or cell, and no player arriving takes it while the owner is
connected. It takes precedence over the two ownership transfer tags.


