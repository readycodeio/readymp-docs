---
sidebar_position: 1
---

# Getting started

The easiest way to get started with developing your own mods on top of the WukongMP SDK is to use the official [WukongMP mod template](https://github.com/readycodeio/wukongmp-mod-template).

Clone the repository and follow instructions provided in the [README](https://github.com/readycodeio/wukongmp-mod-template/blob/main/README.md) file.

## Feature status

Right now you can develop mods that have access to game events, entity data (players, enemies), and can define custom commands and game logic systems.

Support for server-side logic and custom data sync is on the way.

Visit the [examples](/wukong-mp/category/mod-examples) page for some inspiration, or browse the source code of the [co-op](https://github.com/readycodeio/WukongMP-co-op-mod) and [PvP](https://github.com/readycodeio/WukongMP-PvP-mod) mods.

| Feature  |  Status |
|---|---|
| Patching game code | :white_check_mark: [done](../Development/patching) |
| Game event API | :white_check_mark: [done](../Development/APIs/game-events) |
| Console command API | :white_check_mark: [done](../Development/APIs/console-commands) |
| Custom RPC | :white_check_mark: [done](../Development/custom-rpc) |
| Save file API | :construction: [partial](../Development/APIs/save-file-management) |
| Custom data sync | :soon: [in progress](../Development/APIs/custom-components) |
| Server-side mods | :soon: in progress |
