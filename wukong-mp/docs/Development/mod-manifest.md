---
sidebar_position: 2
---

# Mod manifests

The official WukongMP SDK mod template contains a file named `manifest.json`. This file is required by the mod loader to recognize the folder containing your mod DLL as a WukongMP mod, and contains information required for resolving mod dependencies.

An example `manifest.json` file looks like this:

```json title="manifest.json"
{
  "uniqueId": "WukongMP.Coop",
  "version": "0.1.0",
  "name": "WukongMP Co-op mode",
  "author": "ReadyM Team",
  "description": "The official WukongMP Co-op mode.",
  "dependencies": [
    {
      "uniqueId": "WukongMP.SDK",
      "minimumVersion": "0.1.0"
    }
  ]
}
```

Refer to the table below for the description of each field in the manifest file.

| Field | Type | Optional | Description |
| ----- | ---- | -------- | ----------- |
| `uniqueId` | string | no | Unique identifier of your mod. Can contain only alphanumeric characters, `.` or `_` |
| `version` | string | no | Mod version, in `MAJOR.MINOR.PATCH` format. |
| `name` | string | no | Mod name, as it will be displayed in the server admin portal and in the Launcher. |
| `author` | string | no | Mod author, as it will be displayed in the server admin portal and in the Launcher. |
| `description` | string | **yes** | A short description of the mod. |
| `dependencies` | array of objects | **yes** | A list of other mods that are required for your mod to work. Each dependency must specify the `uniqueId` of the required mod, and a `minimumVersion`. |
