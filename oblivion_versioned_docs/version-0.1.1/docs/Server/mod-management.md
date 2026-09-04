---
sidebar_position: 3
---

# Mod management

Mod support is a core feature of OblivionMP, allowing you to extend the functionality of your server with custom content.

## Client-side mods

OblivionMP supports automatic mod sync for clients connecting to the server.
When a client connects, the server checks if the client has the required mods installed.
If not, the [ReadyM Launcher](https://portal.ready.mp/pl/dashboard/launcher) will download and install the missing mods before they can join the game.

To add a mod to your server, simply place the mod archive in the `mods/` directory.

Mod archives are expected to be in ZIP format, with a `.zip` extension.

The expected structure of a mod is as follows:

```text title="Example mod archive layout"
mod_name.zip
└── ModName             # Root directory of the mod, can be named arbitrarily
    ├── ModName.dll     # Main assembly of the mod, must have the same name as the root directory
    └── other_files...  # Other files required by the mod (optional)
```

Upon connecting to the server, clients will automatically download and install any missing mods from the `mods/` directory, ensuring a seamless multiplayer experience.

If you build with the official [OblivionMP mod template](https://github.com/readycodeio/oblivionmp-mod-template), its `MakeModFolder.ps1` script packages your mod into this layout for you, producing a folder for the client mod (`mods/`) and one for the server mod (`server_mods/`).

:::danger[Security notice]

The early access version of the OblivionMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the client.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::

## Server-side mods

OblivionMP mods can also run logic on the server itself, in addition to any client-side content. Server-side mods live in a **separate** `server_mods/` directory, next to `mods/`, and are loaded differently.

Unlike client mods, server-side mods are **not** ZIP archives. Drop the mod's assembly (and any dependencies) directly into `server_mods/` — the server scans the directory recursively for `.dll` files on startup and loads any assembly that contains a mod class.

```text title="Example server_mods/ layout"
server_mods/
├── OblivionMp.Sdk.Serverside.dll   # server-side SDK, ships with the server
└── MyServerMod.dll                 # your server-side mod
```

By default, `server_mods/` only contains `OblivionMp.Sdk.Serverside.dll` — the server-side SDK itself. The server ships with no gameplay logic of its own; write your own server-side mod, or install one built by the community.

A server-side mod can register networked ECS components, run gameplay systems on the server tick, and handle server RPCs sent by clients. See the [server-side development](../Server-development/getting-started) docs to learn how to build one.

:::danger[Security notice]

The early access version of the OblivionMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the server and connected clients.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::
