# Save files

WukongMP SDK allows for synchronizing player save data with the server using the [Save API](/docs/wukongmp-docs/Development/APIs/save-file-management).

The save files are stored in the `saves/` directory on the server.

```text title="Example save folder layout"
saves
├── world.sav
├── player_c703feff87364096a8b1eb19eabc9a8b.sav
└── player_a246246929654f37aa0483e35be1b2cc.sav
```

The main world save file, shared world state for all players, will be places in the `world.sav` file.

Save files belonging to individual players are stored in files with the following naming pattern: `player_GUID.sav`, where the [GUID](https://pl.wikipedia.org/wiki/Globally_Unique_Identifier) is provided by the ReadyM platform and unique for each player.
