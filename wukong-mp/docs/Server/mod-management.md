---
sidebar_position: 3
---

# Mod management

Mod support is a core feature of WukongMP, allowing you to extend the functionality of your server with custom content.

## Client-side mods

WukongMP supports automatic mod sync for clients connecting to the server.
When a client connects, the server checks if the client has the required mods installed.
If not, the [ReadyM Launcher](https://portal.ready.mp/pl/dashboard/launcher) will download and install the missing mods before they can join the game.

To add a mod to your server, simply place the mod folder in the `mods/` directory.

The expected structure of a mod folder is as follows. If you use our [official mod template](https://github.com/readycodeio/wukongmp-mod-template), there's a `MakeModFolder.ps1` script in there, which will package the mod appropriately.

```text title="Example mod folder layout"
mods/
└──MyModFolder/         # Root directory of the mod, can be named arbitrarily
    ├── MyMod.dll       # Main assembly of the mod
    ├── manifest.json   # Mod manifest file
    └── other_files...  # Other files required by the mod (optional)
```

Upon connecting to the server, clients will automatically download and install any missing mods from the `mods/` directory, ensuring a seamless multiplayer experience.

:::danger[Security notice]

The early access version of the WukongMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the client.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::

### .pak files

WukongMP mods can include `.pak` files for game assets, which will be automatically loaded by the game.

To include a `.pak` file in your mod, simply place it anywhere in the mod folder. As long as there is a valid `manifest.json` file in the mod, the server will recognize it as a mod and distribute it to clients, and the game will load the `.pak` file when the mod is loaded.

In particular, this allows you to create mods that only include custom assets without any code, which can be useful for simple content mods.

An example mod structure with a `.pak` file would look like this:

```text title="Example mod folder layout with .pak file"
mods/
└──MyModFolder/           # Root directory of the mod, can be named arbitrarily
    ├── manifest.json     # Mod manifest file
    ├── custom_assets.pak # Custom asset pack
    └── other_files...    # Other files required by the mod (optional)
```

## Server-side mods

WukongMP mods can also run logic on the server itself, in addition to any client-side content. Server-side mods live in a **separate** `server_mods/` directory, next to `mods/`, and are loaded differently.

Unlike client mods, server-side mods are not folders with a manifest. Drop the mod's assembly (and any dependencies) directly into `server_mods/`. The server scans the directory recursively for `.dll` files on startup and loads any assembly that contains a mod class.

```text title="Example server_mods/ layout"
server_mods/
├── WukongMp.Sdk.Serverside.dll     # Server-side SDK, ships with the server
├── ReadyM.Wukong.Common.dll        # Shared component and RPC definitions
├── WukongMp.Coop.Serverside.dll    # Co-op mod, server side
├── WukongMp.Coop.Common.dll        # Co-op mod, shared contracts
└── MyServerMod.dll                 # your server-side mod
```

The server ships with no gameplay logic of its own beyond the mods listed above. Write your own server-side mod, or install one built by the community.

:::important

A server-side mod and the client-side mod it talks to are two halves of one thing. Their networked component shapes and RPC contracts have to match, so ship them together as versions of the same package: the client half in `mods/`, the server half in `server_mods/`.

:::

A server-side mod can register networked ECS components, run gameplay systems on the server tick, and handle server RPCs sent by clients. See the [server-side development](../Server-development/getting-started) docs to learn how to build one.

:::danger[Security notice]

The early access version of the WukongMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the server and connected clients.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::
