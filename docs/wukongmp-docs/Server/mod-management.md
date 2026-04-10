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

## Server-side mods

:::warning[Work in progress]

This feature is under development and will be available in a future version of the SDK.

:::
