---
sidebar_position: 2
---

# Mod manifests

Every mod has a `manifest.json` at the root of its folder. It is what makes the folder a mod rather than a folder with DLLs in it, and it carries the identity and dependencies the loader needs.

The manifest sits above both halves of the mod and is shared by them:

```text
MyMod/
├── manifest.json
├── client/
└── server/
```

One manifest describes the whole mod, whether it has a client half, a server half, or both. Server-side mods have manifests as of `0.4.0`; before that they were loose assemblies with no identity at all.

An example `manifest.json` looks like this:

```json title="manifest.json"
{
  "uniqueId": "WukongMp.Coop",
  "version": "0.4.0",
  "name": "WukongMp Co-op",
  "author": "ReadyM Team",
  "link": "https://docs.ready.mp",
  "description": "The co-op mod for WukongMp, allowing players to team up and play together through the main story mode.",
  "dependencies": [
    {
      "uniqueId": "WukongMp.Sdk",
      "minimumVersion": "0.4.0"
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
| `link` | string | **yes** | A URL for the mod, shown alongside the name. |
| `description` | string | **yes** | A short description of the mod. |
| `dependencies` | array of objects | **yes** | A list of other mods that are required for your mod to work. Each dependency must specify the `uniqueId` of the required mod, and a `minimumVersion`. |

Almost every mod depends on the SDK, whose `uniqueId` is `WukongMp.Sdk`. Set `minimumVersion` to the SDK version you built against.

## Dependencies and load order

The server resolves dependencies before loading anything, and uses them to work out load order: a mod is loaded after everything it depends on. A dependency that cannot be resolved, or a version older than your `minimumVersion`, is an error.

:::info[Dependencies between mods]

You can create client-only, server-only, or full mods, and dependencies between them work in every direction. It's okay for a client-only mod to depend on a server-only mod and the other way around.

:::
