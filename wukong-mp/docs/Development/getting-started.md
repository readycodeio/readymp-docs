---
sidebar_position: 1
---

# Getting started

The easiest way to get started with developing your own mods on top of the WukongMP SDK is to use the official [WukongMP mod template](https://github.com/readycodeio/wukongmp-mod-template).

Clone the repository and follow instructions provided in the [README](https://github.com/readycodeio/wukongmp-mod-template/blob/main/README.md) file. The template references the SDK through NuGet, so there is nothing to download or copy by hand, and its `MakeModFolder.ps1` script packages the finished mod into the [layout the server expects](mod-manifest).

A mod is one folder holding up to two halves, a `client/` and a `server/`. The pages under **Development** cover the client half; [server-side development](../Server-development/getting-started) covers the other one. Small mods only ever need the client half.

## Feature status

Right now you can develop mods that have access to game events, entity data (players, enemies), and can define custom commands and game logic systems.

Mods can also run logic on the server itself: see [server-side development](../Server-development/getting-started).

Visit the [examples](/wukong-mp/category/mod-examples) page for some inspiration, or browse the source code of the [co-op](https://github.com/readycodeio/WukongMP-co-op-mod) and [PvP](https://github.com/readycodeio/WukongMP-PvP-mod) mods.

| Feature  |  Status |
|---|---|
| Patching game code | :white_check_mark: [done](../Development/patching) |
| Game event API | :white_check_mark: [done](../Development/APIs/game-events) |
| Console command API | :white_check_mark: [done](../Development/APIs/console-commands) |
| Custom RPC | :white_check_mark: [done](../Development/custom-rpc) |
| Save file API | :construction: [partial](../Development/APIs/save-file-management) |
| Custom data sync | :white_check_mark: [done](../Development/APIs/custom-components) |
| Mod config files | :white_check_mark: [done](../Development/mod-config) |
| Server-side mods | :white_check_mark: [done](../Server-development/getting-started) |
