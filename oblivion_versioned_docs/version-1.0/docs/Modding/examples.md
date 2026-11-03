---
sidebar_position: 6
---

# Example mods

These mods are written against the 1.0 SDK and build from NuGet packages. Read them next to the docs: each page
explains one idea, and these show the ideas working together in a real mod.

## Mod template

[github.com/readycodeio/oblivionmp-mod-template](https://github.com/readycodeio/oblivionmp-mod-template)

The starting point for every new mod, and the one [Your first mod](Getting-started/your-first-mod.md) walks through.
It is small on purpose: every player gets a gold balance that the server owns and every client can read, a server
service pays everyone a little on a timer, key bindings let a player ask the server for gold or for their balance,
and a third key pings the players nearby without the server doing anything but passing it on.

Read it to learn:

* [Your first mod](Getting-started/your-first-mod.md) and [Project layout](Getting-started/project-layout.md): the
  three projects, the manifest and the mod folder.
* [Mod entry and config](Getting-started/mod-entry-and-config.md) and [Services](Getting-started/services.md): an
  entry point on each half, a service that runs every server tick, a service that binds keys on start.
* [Shapes](Concepts/shapes.md) and [Replication](Concepts/replication.md): a mixin that extends every player, sent
  to clients and written only by the server.
* [RPC](Concepts/rpc.md): a request and its response under the same name, and a message one client sends to the
  others nearby.
* [Entities and queries](Concepts/entities-and-queries.md): looking up the sender's player, and writing to every
  player inside a query.
* [Input](Game/input.md): key bindings with a modifier key.

Open these first:

| File | Shows |
| --- | --- |
| `ExampleMod.Common/Wallet.cs` | The balance, as a replicated mixin on every player. |
| `ExampleMod.Common/RpcContracts.cs` | Every message the mod sends, in all three directions. |
| `ExampleMod.Server/RpcHandlers.cs` | Answering a client: look up its player, change the balance, reply. |
| `ExampleMod.Server/PassiveIncome.cs` | A service that runs every tick and writes inside a query. |
| `ExampleMod.Client/WalletKeys.cs` | Key bindings that send messages. |
| `ExampleMod.Client/RpcHandlers.cs` | Receiving the replies, and reading the replicated balance. |

## Arena

[github.com/readycodeio/oblivionmp-arena-template](https://github.com/readycodeio/oblivionmp-arena-template)

A complete free-for-all game mode. Players walk onto the arena floor to register, step into the inner ring to ready
up, and fight once most of them are ready; the last one standing wins. The server runs the match: it tracks every
contender each tick, heals them before the fight, eliminates anyone who drops below 30 percent health or leaves the
floor, and tells the clients what happened. The clients turn that into on-screen messages, and post the rules and
eliminations to chat, which makes Arena the example of a mod that builds on another one.

Read it to learn:

* [RPC](Concepts/rpc.md): a server that drives the clients with many small messages, and clients that ask the
  server for help.
* [Services](Getting-started/services.md): a per-tick match loop on the server, and a client service that checks the
  local player every frame.
* [Entities and queries](Concepts/entities-and-queries.md) and
  [Players and characters](Game/players-and-characters.md): querying every `MainCharacter` for position and health,
  and changing them from the server.
* [Server events](Game/server-events.md) and [Scopes](Concepts/scopes.md): reacting to players entering and leaving
  an area.
* [Messages and markers](Game/messages-and-markers.md): centered messages, corner messages and the info box.
* [Input](Game/input.md): a key combination that respawns the player.
* [Using another mod](Optional-mods/using-another-mod.md) and [Chat](Optional-mods/chat.md): the manifest
  dependency, the client package, and `IChat` in a constructor.

Open these first:

| File | Shows |
| --- | --- |
| `Content/manifest.json` and `ArenaMod.Client/ArenaMod.Client.csproj` | Depending on chat. |
| `ArenaMod.Common/ArenaRpcContracts.cs` | Every message between the server and the clients. |
| `ArenaMod.Server/ArenaPlugin/ArenaSystem.cs` | The match loop: queries, health, positions, sending to each contender. |
| `ArenaMod.Server/ArenaPlugin/ArenaAreaEventHandlers.cs` | Subscribing to server events in `Start` and leaving them in `Stop`. |
| `ArenaMod.Server/RpcHandlers.cs` | Handling client requests with the sender from `RpcContext`. |
| `ArenaMod.Client/RpcHandlers.cs` | Turning server messages into HUD messages and chat lines. |
| `ArenaMod.Client/Mod.cs` | Key bindings, including debug-only ones. |
| `ArenaMod.Client/DetectDeadPlayerSystem.cs` | A client service that uses `IChat`. |

## Chat

[github.com/readycodeio/oblivionmp-chat](https://github.com/readycodeio/oblivionmp-chat)

The text chat window, and an API other mods call. The client half is a web page drawn over the game: it opens on a
key, sends what the player types to the server, and shows what comes back. The server half checks every message,
runs slash commands and delivers lines to players. Each half offers an `IChat` to other mods, which it registers in
its entry point under the interface, so anyone who asks for `IChat` gets the instance that is actually running. Read
it when you want to build a web UI, or to offer an API of your own.

Read it to learn:

* [Chat](Optional-mods/chat.md): what the API offers, from the side of the mod that provides it.
* [Web UI](Game/web-ui.md): a viewport, a browser, a page shipped in the mod folder, and typed messages between the
  page and the game.
* [RPC](Concepts/rpc.md): a payload struct sent as one message, and the server checking what a client sent before
  passing it on.
* [Input](Game/input.md): a key that only fires when the UI did not want the press.
* [Entities and queries](Concepts/entities-and-queries.md): listing connected players and their nicknames on the
  server.
* [Services](Getting-started/services.md) and [Mod entry and config](Getting-started/mod-entry-and-config.md):
  internal services, and registering one under an interface in `Init` so other mods can ask for it.

Open these first:

| File | Shows |
| --- | --- |
| `OblivionMp.ChatMod.Common/ChatRpcContracts.cs` and `ChatLine.cs` | The two messages, and the line they carry. |
| `OblivionMp.ChatMod.Serverside/IChat.cs` and `Mod.cs` | The server API, and how it is offered to other mods. |
| `OblivionMp.ChatMod.Serverside/ChatRpcHandlers.cs` | Checking messages, running commands, delivering lines. |
| `OblivionMp.ChatMod.Serverside/ChatCommands.cs` | The built-in commands, written the way your mod would add one. |
| `OblivionMp.ChatMod/IChat.cs` and `Mod.cs` | The client API, and how it is offered. |
| `OblivionMp.ChatMod/ChatOverlay.cs` | Creating the web view, showing it, and taking the keyboard. |
| `OblivionMp.ChatMod/ChatPageMessages.cs` | Typed messages to and from the page. |

## Seed loader

[github.com/readycodeio/obmp-seed-loader](https://github.com/readycodeio/obmp-seed-loader)

The mod that fills a fresh world from the seed, a snapshot of the game's data, and the one that does the
[world seeding](Advanced/world-seeding.md) on a server. When a cell is created for the first time, it gets its
furniture, containers, plants and items. When a new world is created, it gets the item values that trade checks
against and the NPC templates that inventories are rolled from. It runs only on the server and offers no API, so it
is the smallest complete example of a server-only mod. Read it before you write a seeder of your own.

Read it to learn:

* [Project layout](Getting-started/project-layout.md): a server-only mod, with no client project and no `client/`
  folder.
* [Mod entry and config](Getting-started/mod-entry-and-config.md): reading data shipped in the mod's own folder
  through `ModDirectory`, and registering a singleton in `Init` for services to share.
* [Services](Getting-started/services.md): services that implement the SDK's `ICellSeeder` and `IWorldSeeder`, which
  the server calls for a new cell and a new world.
* [Entities and queries](Concepts/entities-and-queries.md) and [Scopes](Concepts/scopes.md): creating entities in a
  cell's scope.
* [World seeding](Advanced/world-seeding.md): the entities a seeded cell holds.

Open these first:

| File | Shows |
| --- | --- |
| `OblivionMp.SnapshotLoader.Serverside/Mod.cs` | Where the seed is read from, and the snapshot the seeders share. |
| `OblivionMp.SnapshotLoader.Serverside/SnapshotCellSeeder.cs` | Seeding a new cell: furniture, containers, plants and items. |
| `OblivionMp.SnapshotLoader.Serverside/SnapshotWorldSeeder.cs` | Seeding a new world: item values and NPC templates. |
| `OblivionMp.SnapshotLoader.Serverside/WorldSnapshot.cs` | Reading the seed from `seed.zip` in the mod's `server/content/` folder. |
