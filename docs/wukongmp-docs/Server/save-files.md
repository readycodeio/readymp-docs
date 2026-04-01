---
sidebar_position: 4
---

# Save files

WukongMP SDK allows for synchronizing player save data with the server using the [Save API](/docs/wukongmp-docs/Development/APIs/save-file-management).

The save files are stored in the `saves/` directory on the server.

```text title="Example save folder layout"
saves
├── world.sav
└── players/
    ├── player_c703feff87364096a8b1eb19eabc9a8b.sav
    └── player_a246246929654f37aa0483e35be1b2cc.sav
```

The main world save file, shared world state for all players, will be placed in the `world.sav` file.

Save files belonging to individual players are stored in files with the following naming pattern: `player_GUID.sav`, where the [GUID](https://en.wikipedia.org/wiki/Globally_Unique_Identifier) is provided by the ReadyM platform and unique for each player.

## Using the co-op mod

Until we expand the [Save API](/docs/wukongmp-docs/Development/APIs/save-file-management) to allow uploading an arbitrary number of save files with arbitrary metadata, the save file behavior is as follows:

1. The first player that loads a new location (area) is considered the "host" of that area, and is responsible for uploading `world.sav` when the game would be saved.
2. All players, including the host, also upload their own `player_GUID.sav` save files, which contain their individual characters' information.

### Starting a new game

To reset the save data of the server, simply remove the `saves` folder. The next time someone connects to the server, they will start a new game, assuming the co-op mod is enabled.

### Starting from a shared save file

If you want all players to start playing from a specific save file, place it at `saves/world.sav` and remove the `saves/players` folder to force all players to start from that save file.

If you do not remove the `saves/players` folder, the location and world state will be taken from `world.sav`, and the player progression (equipment, level, skills, etc.) will be taken from each player's individual save file.
