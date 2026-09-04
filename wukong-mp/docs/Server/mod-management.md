---
sidebar_position: 3
---

# Mod management

Mod support is a core feature of WukongMP, allowing you to extend the functionality of your server with custom content.

All mods, whether they run on the client, the server, or both, live in the `mods/` directory. One folder per mod.

## Mod folder layout

A mod folder holds a manifest and up to two sides:

```text title="Example mod folder layout"
mods/
└── MyMod/               # Root directory of the mod, can be named arbitrarily
    ├── manifest.json    # Mod manifest, shared by both sides
    ├── client/          # Assemblies and assets the game loads
    └── server/          # Assemblies the relay server loads
```

The server reads `manifest.json`, works out the load order, then:

* serves the `client/` folder to players who connect, and
* loads the `server/` folder itself.

Either side can be absent. A mod with only `client/` is a client mod, a mod with only `server/` never reaches players at all, and a mod with both is one thing shipped in one folder.

If you use our [official mod template](https://github.com/readycodeio/wukongmp-mod-template), the `MakeModFolder.ps1` script produces this layout for you.

:::important

Anything a player has no business seeing belongs in `server/`. The server never sends that folder to a client, so a config file with server-only settings is safe there. Everything in `client/` goes out to every player who joins.

:::

## Configuring a mod

A mod can ship JSON config files in either of its halves, and you edit them in place on the server. A file in `server/` is read by the server and never sent anywhere; a file in `client/` is downloaded by every player along with the rest of that folder.

The SDK mod itself works this way. Chat is off by default as of `0.4.0`, and you turn it on for your server by editing the SDK mod's client config:

```json title="mods/WukongMp.Sdk/client/config.json"
{
  // Change this to true if you want to enable the in-game chat
  "ChatEnabled": true
}
```

Restart the server after editing a config file. For writing a mod that reads its own config, see [Mod configuration files](../Development/mod-config).

## Client-side mods

WukongMP supports automatic mod sync for clients connecting to the server.
When a client connects, the server checks if the client has the required mods installed.
If not, the [ReadyM Launcher](https://portal.ready.mp/pl/dashboard/launcher) will download and install the missing mods before they can join the game.

To add a mod to your server, place the mod folder in `mods/`. Clients pick up anything missing on connect.

### .pak files

WukongMP mods can include `.pak` files for game assets, which will be automatically loaded by the game.

Put the `.pak` in the mod's `client/` folder and the game loads it when the mod loads. This means you can ship a mod that is nothing but assets, with no code at all.

```text title="Example mod folder layout with .pak file"
mods/
└── MyAssets/
    ├── manifest.json
    └── client/
        └── custom_assets.pak
```

## Server-side mods

A server-side mod is a normal mod with a `server/` folder. It registers networked ECS components, runs gameplay systems on the server tick, and handles server RPCs sent by clients. See the [server-side development](../Server-development/getting-started) docs to learn how to build one.

Server-side mods used to be loose assemblies in a separate `server_mods/` directory. That directory is gone as of `0.4.0`. A server-side mod now has its own folder, its own manifest, and therefore an id, a version and dependencies like any other mod.

```text title="A mod with both halves"
mods/
└── WukongMp.Coop/
    ├── manifest.json
    ├── client/
    │   ├── WukongMp.Coop.dll
    │   └── WukongMp.Coop.Common.dll
    └── server/
        ├── WukongMp.Coop.Serverside.dll
        └── WukongMp.Coop.Common.dll
```

:::important

A server-side mod and the client-side mod it talks to are two halves of one thing. Their networked component shapes and RPC contracts have to match, so keep them in one folder and version them together.

:::

### Depending on a server-only mod

A mod can declare a dependency on a mod that has no client half. Shared server logic can live in its own mod and be depended on properly.

The server takes care of the client's side of this: before sending a manifest to a player, it removes any dependency on a mod that has no `client/` folder. The client never learns that the server-only mod exists, and its loader does not fail looking for something it cannot download.

## Security

:::danger[Security notice]

The early access version of the WukongMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the server and on connected clients.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::
