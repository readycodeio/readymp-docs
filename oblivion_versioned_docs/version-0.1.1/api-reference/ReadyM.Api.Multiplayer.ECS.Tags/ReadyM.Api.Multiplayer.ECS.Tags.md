# ReadyM.Api.Multiplayer.ECS.Tags

### Structs

 [AllowOwnershipTransferOnScopeEnterTag](../ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.AllowOwnershipTransferOnScopeEnterTag.md)

Entities with this component get their ownership transferred to the first player that joins their scope,
if there are no other players in that scope when that player joins it.

 [DisallowOwnershipTransferOnScopeLeaveTag](../ReadyM.Api.Multiplayer.ECS.Tags/ReadyM.Api.Multiplayer.ECS.Tags.DisallowOwnershipTransferOnScopeLeaveTag.md)

Entities with this tag are destroyed when their owner leaves their scope.
Other entities get their ownership transferred to another player in that scope or to server
if there are no players left and that scope is not deleted when all players leave.


