---
sidebar_position: 3
---

# Mod entry and config

Each half of a mod has one entry point: the class the SDK creates when the mod loads, and the place for one-time
setup. A mod can also read its settings from a JSON file, so a server owner can change them without rebuilding.

## The entry point

```csharp title="MyMod.Client/Mod.cs"
using Microsoft.Extensions.Logging;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[ModEntry]
public sealed partial class Mod(ILogger logger)
{
    // Runs once when the mod loads.
    private void Init()
    {
        logger.LogInformation("My mod loaded from {Folder}", ModDirectory);
    }
}
```

The server half has its own, in the server project, written the same way.

### How it works

* Mark one class per half with `[ModEntry]`. It has to be `sealed` and `partial`; the SDK writes the other part.
* Ask for what you need in the constructor. The SDK fills in the parameters when it creates the class. Anything the
  SDK offers can be asked for this way, as can your own [services](services.md), your [config](#config-files), your
  [RPC handler classes](../Concepts/rpc.md) and APIs from [other mods](../Optional-mods/using-another-mod.md) you depend on.
* `Init` is optional. If you declare it, it has to be `private void Init()` with no parameters, and it runs once,
  right after the class is created.
* `ModDirectory` is the folder your half was loaded from: the mod's `server/` folder on the server, its client folder
  in the game. It is set by the time `Init` runs.

Most mods need very little here. Services and RPC handler classes are found and created on their own, so you do not
list them anywhere. The template's entry points only log that the mod loaded. Use `Init` for one-time setup that
does not belong to any service.

### When it runs

Mods load in dependency order: a mod's dependencies finish loading before it starts. Within one mod, the config is
read first, then the entry point is created and its `Init` runs. Services start once every mod has loaded, so a
service can rely on everything every mod set up in `Init`.

## Config files

A config is a class with defaults, marked `[ModConfig]`:

```csharp title="MyMod.Server/RewardsConfig.cs"
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

[ModConfig]
public sealed class RewardsConfig
{
    public int Reward { get; set; } = 100;
    public float PayoutSeconds { get; set; } = 10f;
    public string Currency { get; set; } = "gold";
}
```

The SDK reads `config.json` from the mod's folder into it when the mod loads, and anything can ask for it in its
constructor:

```csharp title="MyMod.Server/PassiveIncome.cs"
[Service]
public sealed partial class PassiveIncome(IEntities entities, RewardsConfig config)
{
    // ...uses config.PayoutSeconds and config.Reward
}
```

The file goes in the half that reads it, so a server config sits in the mod's `server/` folder:

```json title="server/config.json"
{
  // Keys are not case-sensitive, and comments and trailing commas are allowed.
  "reward": 250,
  "payoutSeconds": 30,
}
```

Any key you leave out keeps the default from the class; here `currency` stays `"gold"`.

To ship a default file with your mod, put it in `Content/` and add it to `$serverContentFiles` (or
`$clientContentFiles`) in `ModFiles.ps1`; see [Project layout](project-layout.md#the-mod-folder).

### More than one file

Pass a file name to read a different file. Each class is read and registered on its own:

```csharp
[ModConfig]                // config.json
public sealed class RewardsConfig { /* ... */ }

[ModConfig("arenas.json")] // arenas.json
public sealed class ArenaConfig { /* ... */ }
```

### When the file is wrong

| Case | What happens |
| --- | --- |
| The file is missing | The defaults from the class are used, and a warning is logged. |
| The file is not valid JSON | `ModConfigException` is thrown and the mod does not load. |
| The file has a key the class does not declare | `ModConfigException` is thrown, naming the key. |

The last one is on purpose: a misspelled key would otherwise do nothing, silently.

### Client and server config

Each half reads its own folder:

* A config in the client project is read from the mod's client folder, which is handed to every player. Players can
  read it, and change their own copy.
* A config in the server project is read from the mod's `server/` folder, which never leaves the server.

So anything that decides rules, prices or rewards belongs in a server config. Put a config class in the shared
project only if both halves really need the same settings, and remember each half then reads its own copy of the file.

## Related diagnostics

| Id | What it means | How to fix it |
| --- | --- | --- |
| `READYM027` | The `[ModEntry]` class is not `partial`. | Add `partial`. |
| `READYM030` | A second `[ModEntry]` class in the same project. | Keep one per half and move the rest into services. |
| `READYM031` | The `[ModConfig]` class cannot be created. | Give it a public constructor with no parameters, and make it neither abstract nor generic. |
| `READYM032` | `[ModConfig]` names no file. | Leave the name out for `config.json`, or give a file name. |
| `READYM044` | The `[ModEntry]` class is not `sealed`. | Add `sealed`. |
| `READYM045` | `Init` cannot be called by the loader. | Make it `private void Init()` with no parameters; ask for everything else in the constructor. |

## Reference

* [ModEntryAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ModEntryAttribute.md)
* [ModConfigAttribute](../../../api-reference/ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.ModConfigAttribute.md)
* [ModConfigException](../../../api-reference/ReadyM.Api.Loader/ReadyM.Api.Loader.ModConfigException.md)
