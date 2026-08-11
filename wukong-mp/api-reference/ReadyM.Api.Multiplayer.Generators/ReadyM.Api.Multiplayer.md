# ReadyM.Api.Multiplayer

### Namespaces

 [ReadyM.Api.Multiplayer.Generators](../ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.md)

 [ReadyM.Api.Multiplayer.Protocol](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.md)

 [ReadyM.Api.Multiplayer.RPC](../ReadyM.Api.Multiplayer.RPC/ReadyM.Api.Multiplayer.RPC.md)

### Classes

 [ClientToServerAttribute](../ReadyM.Api.Multiplayer/ReadyM.Api.Multiplayer.ClientToServerAttribute.md)

Client-to-server (request) leg of a contract method: generates a Send on the client and an
On(RpcContext, ...) handler on the server. Different-shaped two-way RPCs are two overloads
(one per direction); identical-shape two-way is one method with both attributes. Every contract
method needs at least one direction attribute.

 [ServerToClientAttribute](../ReadyM.Api.Multiplayer/ReadyM.Api.Multiplayer.ServerToClientAttribute.md)

Server-to-client (response/push) leg of a contract method: generates a Send(PlayerId, ...) on
the server and an On(...) handler on the client. See **ClientToServerAttribute**.


