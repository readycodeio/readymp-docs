---
sidebar_position: 5
---

# RPC: sending messages

An RPC is a message one half of your mod sends and the other half runs code for: a player presses a key and asks the
server for something, the server announces a winner, a client pings the players around it. Use RPC for things that
happen once. For a value that should stay the same for every player, such as a gold balance, use
[replication](replication.md) instead.

You list every message in the Common project, and each half gets a method to send the ones it sends and a place to
handle the ones it receives.

```csharp title="MyMod.Common/RpcContracts.cs"
using ReadyM.Api.Multiplayer;
using ReadyM.Api.Multiplayer.Protocol.Enums;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

[RpcContracts]
public static partial class RpcContracts
{
    // The client asks the server to add gold; the server replies with the amount it added.
    [ClientToServer] public static partial void AddWalletBalance();
    [ServerToClient] public static partial void AddWalletBalance(int amount);

    // Sent by one client to the other players nearby. The server only relays it.
    [ClientToClients(RelayMode.AreaOfInterestOthers)] public static partial void Ping(string message);
}
```

```csharp title="MyMod.Server/RpcHandlers.cs"
using MyMod.Common;
using ReadyM.Relay.Server.Sdk.Rpc;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[RpcHandlersFor(typeof(RpcContracts))]
public sealed partial class RpcHandlers(IEntities entities)
{
    private const int Reward = 100;

    partial void OnAddWalletBalance(RpcContext context)
    {
        if (!entities.TryLookup(context.Sender, out Player player))
            return;

        player.Balance += Reward;
        SendAddWalletBalance(context.Sender, Reward);
    }
}
```

```csharp title="MyMod.Client/RpcHandlers.cs"
using Microsoft.Extensions.Logging;
using MyMod.Common;
using ReadyM.Api.Idents;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[RpcHandlersFor(typeof(RpcContracts))]
public sealed partial class RpcHandlers(ILogger logger)
{
    partial void OnAddWalletBalance(int amount)
        => logger.LogInformation("The server added {Amount} gold to your wallet.", amount);

    partial void OnPing(PlayerId sender, string message)
        => logger.LogInformation("Ping from player {Sender}: {Message}", sender, message);
}
```

```csharp title="MyMod.Client/WalletKeys.cs"
using OblivionMp.Sdk;
using ReadyM.Sdk.Common.Input;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[Service]
public sealed partial class WalletKeys(IInput input, RpcHandlers rpc)
{
    private void Start()
    {
        input.RegisterKeyBind(ModifierKeys.Alt, Key.N, () => rpc.SendAddWalletBalance());
        input.RegisterKeyBind(ModifierKeys.Alt, Key.P, () => rpc.SendPing("Hello!"));
    }
}
```

This is the [mod template](../Getting-started/your-first-mod.md)'s RPC, cut down. `Balance` comes from its `Wallet`
mixin.

## How it works

### Contracts

A contract is a `public static partial void` method with no body, inside a `public static partial class` marked
`[RpcContracts]` in the Common project. Its name is the message's name and its parameters are what the message
carries. Each one is marked with the direction it travels:

| Attribute | Sent by | Received by | Send method generated | Handler you write |
| --- | --- | --- | --- | --- |
| `[ClientToServer]` | a client | the server | on the client: `SendX(...)` | on the server: `partial void OnX(RpcContext context, ...)` |
| `[ServerToClient]` | the server | one client | on the server: `SendX(PlayerId recipient, ...)` | on the client: `partial void OnX(...)` |
| `[ClientToClients(RelayMode.X)]` | a client | other clients | on the client: `SendX(...)` | on the client: `partial void OnX(PlayerId sender, ...)` |

Using the same name in both server directions makes a request and its response, as `AddWalletBalance` does above. The
two may carry different parameters. When they carry the same ones, one method can have both attributes.

Messages always arrive, and arrive in the order they were sent.

### Who hears a client-to-clients message

`[ClientToClients]` takes a `RelayMode` that decides which clients receive the message. The server passes it on and
runs none of your code for it.

| `RelayMode` | Who receives it |
| --- | --- |
| `AreaOfInterestOthers` | The players around the sender, not the sender. |
| `AreaOfInterestAll` | The players around the sender, and the sender. |
| `GlobalOthers` | Every player in the game except the sender. |
| `GlobalAll` | Every player in the game, including the sender. |

These four are the only modes a mod may use. A client sends nothing until it has joined the server.

### Handlers

On each half, write a `sealed partial class` marked `[RpcHandlersFor(typeof(RpcContracts))]`, naming your contracts
class. Implement a `partial void OnX` for each message that half receives, with the parameters from the table above.
Leave out any you do not care about. The `SendX` methods for the messages that half sends appear on the same class.

The SDK creates the class for you, so you never register it. Ask for what it needs in its constructor, like a
[service](../Getting-started/services.md). To send from somewhere else, ask for the handler class in that class's
constructor, as `WalletKeys` does with `RpcHandlers`.

A handler whose name or parameters do not match a contract fails to build with a C# error about a partial method
that has no defining declaration. Check the spelling and the parameter list against the table.

### Sending to everyone from the server

`SendX` on the server goes to one player. To tell everyone, send it to each of them:

```csharp
// rpc is the server's RpcHandlers, asked for in the constructor.
foreach (var player in entities.Query<Player>())
    rpc.SendAnnounceWinner(player.PlayerId, winner);
```

### What a message can carry

| Type | Notes |
| --- | --- |
| `bool`, `byte`, `sbyte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double`, `char`, `string` | |
| `PlayerId`, `AreaId`, `CellId`, `FullCellId` | See [Identity](identity.md). |
| `FormId`, `NetworkFormId` | Oblivion's form ids. See [Identity](identity.md). |
| `Vector2`, `Vector3`, `Vector4` | From `System.Numerics`. |
| An array of `bool`, `byte`, `short`, `ushort`, `int`, `uint`, `long`, `ulong`, `float`, `double` or `string` | Not `sbyte[]` or `char[]`. |
| An enum | Backed by `byte`, `short`, `ushort`, `int` or `long`, which is what an enum is unless it says otherwise. |
| Your own struct | Marked `[DeriveINetSerializable]`, see below. |

:::warning
A parameter of any other type builds, but sending it fails while the game runs. Stick to the table.
:::

To send several values as one, declare a struct in the Common project:

```csharp title="MyMod.Common/BountyNotice.cs"
using LiteNetLib.Utils;
using ReadyM.Api.Idents;
using ReadyM.Api.Multiplayer.Generators;

namespace MyMod.Common;

[DeriveINetSerializable]
public partial struct BountyNotice : INetSerializable
{
    public PlayerId Target;
    public int Gold;
    public string Reason;
}
```

```csharp
[ServerToClient] public static partial void BountyPosted(BountyNotice notice);
```

The struct has to be `partial` and say `: INetSerializable`; the SDK writes the rest. Its fields can be any of the
simple types and enums above, `string`, `Vector2`, `Vector3`, `Vector4`, the id types, and other structs made this
way. By default every field is sent, public or private. Pass a `SerializableMode` to choose otherwise, for example
`[DeriveINetSerializable(SerializableMode.MapProperties | SerializableMode.MapPublic)]` to send public properties
instead.

## On the client and on the server

| | Client | Server |
| --- | --- | --- |
| Handler parameters | The message's parameters. Client-to-clients handlers get the sender's `PlayerId` first. | An `RpcContext` first, whose `Sender` is the player who sent it. |
| Sending | `SendX(...)` goes to the server, or to the clients the `RelayMode` picks. | `SendX(recipient, ...)` goes to one player. |
| Messages it never sees | `[ClientToServer]` | `[ServerToClient]` and `[ClientToClients]` |

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `SRPC001` | A contract has no direction. | Mark it `[ClientToServer]`, `[ServerToClient]` or `[ClientToClients(...)]`. |
| `SRPC002` | Two contracts with one name go the same direction. | Rename one, or merge them into one contract. |
| `SRPC003` | The project that declares the contracts class has no message list built for it. | Make sure that project uses the SDK packages and builds, and that this project references it. |
| `SRPC004` | A handler class does not say which contracts it implements. | Add `[RpcHandlersFor(typeof(RpcContracts))]`. |
| `SRPC005` | The type in `[RpcHandlersFor]` cannot be found, or is not marked `[RpcContracts]`. | Name your contracts class, and make sure it has `[RpcContracts]`. |
| `SRPC006` | One name is used both for `[ClientToClients]` and for a server direction. | Give the client-to-clients message a name of its own. |
| `SRPC007` | `[ClientToClients]` uses a relay mode mods cannot use. | Use one of the four modes in the table above. |

## Reference

* [RpcContractsAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.RpcContractsAttribute.md)
* [ClientToServerAttribute](../../../api-reference/ReadyM.Api.Multiplayer/ReadyM.Api.Multiplayer.ClientToServerAttribute.md)
* [ServerToClientAttribute](../../../api-reference/ReadyM.Api.Multiplayer/ReadyM.Api.Multiplayer.ServerToClientAttribute.md)
* [ClientToClientsAttribute](../../../api-reference/ReadyM.Api.Multiplayer/ReadyM.Api.Multiplayer.ClientToClientsAttribute.md)
* [RelayMode](../../../api-reference/ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.Enums.RelayMode.md)
* [RpcHandlersForAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.RpcHandlersForAttribute.md)
* [RpcContext](../../../api-reference/ReadyM.Relay.Server.Sdk.Rpc/ReadyM.Relay.Server.Sdk.Rpc.RpcContext.md)
* [DeriveINetSerializableAttribute](../../../api-reference/ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.DeriveINetSerializableAttribute.md)
* [SerializableMode](../../../api-reference/ReadyM.Api.Serialization/ReadyM.Api.Serialization.SerializableMode.md)
* [PlayerId](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)
