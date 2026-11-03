---
sidebar_position: 1
---

# Your first mod

This page takes you from nothing to a working mod on your own server. You start from the official mod template,
which already does something small but real: every player gets a gold balance, a server service pays everyone a
little on a timer, and key bindings let a player ask for more gold, check their balance, and ping the players
around them.

By the end you will have built the mod, installed it on a server, seen it run in game, and changed it.

## Before you start

You need:

* The [.NET 10 SDK](https://dotnet.microsoft.com/en-us/download/dotnet/10.0) or later.
* A C# editor. JetBrains Rider and Visual Studio 2026 (or later) both work; Visual Studio Code with the C# Dev Kit
  works too.
* An OblivionMP server you can drop mods into. Setting one up on your own machine takes a few minutes, see
  [Installation](../../Server/installation.mdx).
* The game and the ReadyM launcher, to join that server.

You do not need to install the SDK separately. It comes from NuGet the first time you build.

## 1. Get the template

Clone the [OblivionMP mod template](https://github.com/readycodeio/oblivionmp-mod-template), or use GitHub's
**Use this template** button to start your own repository from it:

```powershell
git clone https://github.com/readycodeio/oblivionmp-mod-template.git MyMod
cd MyMod
```

If you downloaded a ZIP instead, Windows marks the scripts in it as downloaded from the internet and PowerShell
refuses to run them. Clear the mark once:

```powershell
Get-ChildItem -Recurse | Unblock-File
```

## 2. Rename it

Every mod on a server needs its own name. The template is called `ExampleMod`; rename it before you change
anything else:

```powershell
.\RenameMod.ps1 MyName.TreasureHunt
```

This renames the solution, the three projects and their folders, the namespaces, the mod id in
`Content/manifest.json` and the packaging script. Run it with `-DryRun` first to see what it would change. Use a
name that is unlikely to collide with anyone else's, such as your name or group in front of the mod's.

The rest of this page keeps calling it `MyMod`.

## 3. Build it

Open `MyMod.sln` in your editor and build, or from a terminal:

```powershell
dotnet build
```

The first build downloads the OblivionMP SDK packages. A clean build has no errors and no warnings.

## 4. Look around

The solution has three projects, because a mod has two halves that run in different places:

| Project | Runs on | What the template keeps there |
| --- | --- | --- |
| `MyMod.Common` | both | `Wallet.cs`, the balance every player gets, and `RpcContracts.cs`, every message the mod sends |
| `MyMod.Client` | each player's game | `Mod.cs`, the entry point; `WalletKeys.cs`, the key bindings; `RpcHandlers.cs`, what the client does with the server's replies |
| `MyMod.Server` | the server | `Mod.cs`; `PassiveIncome.cs`, the timer that pays everyone; `RpcHandlers.cs`, what the server does when a player asks |

The balance is declared once, in the shared project:

```csharp title="MyMod.Common/Wallet.cs"
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;

namespace MyMod.Common;

[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(Player))]
public readonly partial struct Wallet
{
    public partial int Balance { get; set; }
}
```

Those four attributes say: this is a set of fields (a mixin), every player gets it, its values are sent to the
players, and only the server may change them. From then on both halves read `player.Balance`, and the server writes
it:

```csharp title="MyMod.Server/PassiveIncome.cs"
using MyMod.Common;
using ReadyM.SDK.Archetypes.Core;
using ReadyM.SDK.Attributes;
using ReadyM.SDK.Server.Entities;

namespace MyMod.Server;

[Service]
public sealed partial class PassiveIncome(IEntities entities)
{
    private const float IntervalSeconds = 10f;
    private const int Income = 10;

    private float _elapsed;

    private void Update()
    {
        _elapsed += Time.DeltaTime;
        if (_elapsed < IntervalSeconds)
            return;

        _elapsed -= IntervalSeconds;

        foreach (var player in entities.Query<Player>())
            player.SetBalance(player.Balance + Income);
    }
}
```

A `[Service]` is a class the SDK creates for you and keeps running. Its `Update` runs every server tick, and it asks
for what it needs, here the server's entities, in its constructor. [Services](services.md) covers them in full;
[Shapes](../Concepts/shapes.md) and [Replication](../Concepts/replication.md) explain the wallet.

[Project layout](project-layout.md) goes through the three projects and the packages they use.

## 5. Package it

A server takes a mod as one folder. The template builds it for you:

```powershell
.\MakeModFolder.ps1 Release
```

`Output/mods/MyMod/` now holds:

```text
MyMod/
├── manifest.json     # the mod's id, name, version and dependencies
├── client/           # handed to every player who joins
│   ├── MyMod.Client.dll
│   └── MyMod.Common.dll
└── server/           # stays on the server
    ├── MyMod.Server.dll
    └── MyMod.Common.dll
```

Before you share the mod, fill in `name`, `author`, `description` and `link` in `Content/manifest.json`. Run
`.\MakeModFolder.ps1 Debug` instead to include debug symbols, which give you file names and line numbers in error
messages.

## 6. Run it

1. Copy `Output/mods/MyMod/` into your server's `mods/` folder.
2. Restart the server. Its console lists the mods it loaded; look for yours.
3. Join the server from the launcher. The launcher downloads the client half of your mod for you.
4. In game, press **Alt+N** to ask the server for 100 gold, **Alt+B** to see your balance, and **Alt+P** to ping the
   players near you. The results are written to the client log, and the server logs every gold request.

The SDK and the template write through `ILogger`, so anything you log shows up in the same place:

```csharp
logger.LogInformation("The server added {Amount} gold to your wallet.", amount);
```

## 7. Change something

Open `MyMod.Server/RpcHandlers.cs` and change the reward:

```csharp title="MyMod.Server/RpcHandlers.cs"
private const int Reward = 250;
```

Then change how often `PassiveIncome` pays out, rebuild the folder with `.\MakeModFolder.ps1 Release`, copy it over
the old one and restart the server. Players pick up the new client half the next time they join.

That loop (edit, package, copy, restart, join) is the whole development cycle.

## When something goes wrong

| What you see | What to check |
| --- | --- |
| The build fails with a `READYM` or `SRPC` error | The SDK checks your declarations while it builds. The error names the class and says what to change; each docs page lists the ones it covers. |
| The server does not list your mod | `manifest.json` is in the mod folder's root, its `uniqueId` is unique on the server, and it depends on `OblivionMP.SDK`. See [Mod management](../../Server/mod-management.md). |
| The mod loads, but nothing happens in game | Check the client log for errors from your mod, and that you rebuilt and copied both halves: they have to match. |
| `MakeModFolder.ps1` refuses to run | Clear the downloaded-file mark with `Unblock-File`, as in step 1. |

## Next steps

* [Project layout](project-layout.md): what goes in each project, and what the packages give you.
* [Mod entry and config](mod-entry-and-config.md): the entry point, and settings from a JSON file.
* [Services](services.md): code that runs on its own, every tick or on demand.
* [Shapes](../Concepts/shapes.md): declaring your own data on entities.
* [RPC](../Concepts/rpc.md): messages between players and the server.
