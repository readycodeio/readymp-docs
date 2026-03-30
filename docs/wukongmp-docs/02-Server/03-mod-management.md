# Mod management

Mod support is a core feature of WukongMP, allowing you to extend the functionality of your server with custom content.

## Client-side mods

WukongMP supports automatic mod sync for clients connecting to the server.
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

:::danger[Security notice]

The early access version of the WukongMP SDK and server does not include any sandboxing or security mechanisms for mods.

Only use mods from trusted sources, as they can execute arbitrary code on the client.

Never run a server with untrusted mods, especially if the server is publicly accessible.

:::

## Server-side mods

:::warning[Work in progress]

This feature is under development and will be available in a future version of the SDK.

:::
