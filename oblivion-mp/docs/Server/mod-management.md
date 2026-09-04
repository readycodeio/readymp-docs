---
sidebar_position: 3
---

# Mod management

Mod support is a core feature of OblivionMP, allowing you to extend the functionality of your server with custom content.

Every mod, whether it runs on the client, on the server, or on both, lives in the `mods/` directory. One folder per mod.

## Mod folder structure

A mod folder holds a manifest and up to two halves:

```text title="Example mod folder structure"
mods/
└── MyMod/               # Root directory of the mod, can be named arbitrarily
    ├── manifest.json    # Mod manifest, shared by both halves
    ├── client/          # Assemblies and assets the game loads
    └── server/          # Assemblies the relay server loads
```

The server reads `manifest.json`, works out the load order, and then:

* hands the `client/` folder out to connecting players, and
* loads the `server/` folder itself.

Either half can be missing. A mod with only `client/` is a client mod, a mod with only `server/` never reaches players at all, and a mod with both is one unit in one folder.

If you build with the official [OblivionMP mod template](https://github.com/readycodeio/oblivionmp-mod-template), its `MakeModFolder.ps1` script produces this structure for you.

:::important

Anything a player should not see belongs in `server/`. The server never sends that folder to clients, so server-only config files are safe there. Everything in `client/` is handed to every player who joins.

:::

:::note[Changed in 0.2.0]

Mods used to be ZIP archives in `mods/`, with server-side assemblies dropped loose into a separate `server_mods/` directory. Both are gone. A mod is now one folder with a manifest, and the `server_mods/` directory is no longer read.

:::

## The manifest

Every mod needs a `manifest.json` at the root of its folder. It is what makes the folder a mod rather than a folder with DLLs in it, and it carries the identity and dependencies the loader needs.

```json title="manifest.json"
{
  "uniqueId": "ExampleMod",
  "version": "1.0.0",
  "name": "Example Mod",
  "author": "ReadyM Team",
  "link": "https://docs.ready.mp",
  "description": "An example mod for OblivionMP.",
  "dependencies": [
    {
      "uniqueId": "OblivionMP.SDK",
      "minimumVersion": "0.2.0"
    }
  ]
}
```

| Field | Type | Optional | Description |
| ----- | ---- | -------- | ----------- |
| `uniqueId` | string | no | Unique identifier of your mod. Can contain only alphanumeric characters, `.` or `_` |
| `version` | string | no | Mod version, in `MAJOR.MINOR.PATCH` format. |
| `name` | string | no | Mod name, as it will be displayed in the server admin portal and in the Launcher. |
| `author` | string | no | Mod author, as it will be displayed in the server admin portal and in the Launcher. |
| `link` | string | **yes** | A URL for the mod, shown alongside the name. |
| `description` | string | **yes** | A short description of the mod. |
| `dependencies` | array of objects | **yes** | Other mods yours needs to work. Each dependency names the `uniqueId` of the required mod and a `minimumVersion`. |

Almost every mod depends on the SDK, whose `uniqueId` is `OblivionMP.SDK`. Set `minimumVersion` to the SDK version you built against.

The server resolves dependencies before loading anything, and uses them to work out load order: a mod is loaded after everything it depends on. A dependency that cannot be resolved, or a version older than your `minimumVersion`, is an error.

## Client-side mods

OblivionMP supports automatic mod sync for clients connecting to the server.
When a client connects, the server checks if the client has the required mods installed.
If not, the [ReadyM Launcher](https://portal.ready.mp/pl/dashboard/launcher) will download and install the missing mods before they can join the game.

To add a mod to your server, drop its folder into `mods/`. Clients fill in whatever they are missing when they connect.

## Server-side mods {#server-side-mods}

A server-side mod is a normal mod with a `server/` folder. It can register networked ECS components, run gameplay systems on the server tick, react to server events, and handle server RPCs sent by clients. See the [server-side development](../Server-development/getting-started) docs to learn how to build one.

```text title="A mod with both halves"
mods/
└── ExampleMod/
    ├── manifest.json
    ├── client/
    │   ├── ExampleMod.Client.dll
    │   └── ExampleMod.Common.dll
    └── server/
        ├── ExampleMod.Server.dll
        └── ExampleMod.Common.dll
```

:::important

A server-side mod and the client mod it talks to are two halves of one thing. Their networked component shapes and RPC contracts have to agree, so keep them in one folder and version them together.

:::

### Depending on a server-only mod

A mod can declare a dependency on a mod that has no client half. Shared server logic can live in its own mod and be depended on normally.

The client side is handled for you: before the manifest is sent to a player, the server strips out any dependency that points at a mod with no `client/` folder. The client never learns the server-only mod exists, and its loader does not fail looking for something it cannot download.

## Configuring mods

Mods can ship JSON config files on either side, and you can edit them in place on the server. Files in `server/` are read by the server and never sent out; files in `client/` are handed to every player along with the rest of that folder.

Edit a config file and restart the server. For how to write a mod that reads its own config, see [Mod config files](../Client/mod-config).

## Security

:::danger[Security notice]

The early access version of the OblivionMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the server and connected clients.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::
