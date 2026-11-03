---
sidebar_position: 2
---

# Project layout

An OblivionMP mod has two halves. The client half runs inside each player's game; the server half runs on the
server. They share a third project that holds everything both halves have to agree on. This page says what goes
where, which SDK package each project uses, and what the mod folder you ship looks like.

## The three projects

| Project | Package | Put here |
| --- | --- | --- |
| `MyMod.Common` | `ReadyM.SDK.Oblivion.Common` | Your [shapes](../Concepts/shapes.md) (archetypes and mixins), your [RPC contracts](../Concepts/rpc.md), and constants both halves use. |
| `MyMod.Client` | `ReadyM.SDK.Oblivion.Client` | The client entry point, client services, key bindings, on-screen messages, markers, web UI, and the client end of your messages. |
| `MyMod.Server` | `ReadyM.SDK.Oblivion.Server` | The server entry point, server services, and the server end of your messages. Anything players must not be able to change belongs here. |

Each project references exactly one package, and both halves reference the shared project:

```xml title="MyMod.Common/MyMod.Common.csproj"
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>net10.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="ReadyM.SDK.Oblivion.Common" Version="1.0.0" />
    </ItemGroup>

</Project>
```

```xml title="MyMod.Client/MyMod.Client.csproj"
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>net10.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="ReadyM.SDK.Oblivion.Client" Version="1.0.0" />
    </ItemGroup>

    <ItemGroup>
        <ProjectReference Include="..\MyMod.Common\MyMod.Common.csproj" />
    </ItemGroup>

</Project>
```

The server project is the same as the client one, with `ReadyM.SDK.Oblivion.Server`.

The shared project only references the shared package on purpose. Code in it ships in both halves, so it may only
use what both the game and the server provide. If something you want to put there does not compile against the
shared package, it belongs in one of the halves.

## What the packages give you

You only ever reference the three Oblivion packages. Each brings the general ReadyM SDK package for its half with it,
plus the source generator that turns your declarations into working code:

| Package | Brings | You get |
| --- | --- | --- |
| `ReadyM.SDK.Oblivion.Common` | `ReadyM.SDK.Common` | Shapes and their attributes, the built-in scopes, RPC contracts, services, the mod entry point and config, identity values, every Oblivion shape (`MainCharacter`, `Npc`, `DroppedItem`, ...) and the item catalogs. |
| `ReadyM.SDK.Oblivion.Client` | the shared package and `ReadyM.SDK.Client` | Client entities and queries, `IPlayers`, `IItems`, `IInput`, `IUserInterface`, `IMarkers`, the web UI. |
| `ReadyM.SDK.Oblivion.Server` | the shared package and `ReadyM.SDK.Server` | Server entities and queries, server events, sessions, inventories, spawning and AI helpers. |

The game and the server already have all of these assemblies, so none of them are copied into your mod folder. Your
folder holds only your own DLLs.

## The mod folder

What you ship is one folder. `MakeModFolder.ps1` builds it from your projects:

```text
mods/
└── MyMod/
    ├── manifest.json
    ├── client/
    │   ├── MyMod.Client.dll
    │   └── MyMod.Common.dll
    └── server/
        ├── MyMod.Server.dll
        └── MyMod.Common.dll
```

The server reads `manifest.json`, loads `server/` itself and hands `client/` to every player who joins. The shared
DLL goes in both. Anything in `client/` reaches every player, so secrets and server-only settings go in `server/`.

Which files go where is listed in `ModFiles.ps1`. Add to it when your mod ships more, such as a [config
file](mod-entry-and-config.md#config-files), a web page or a plugin file for the game:

```powershell title="ModFiles.ps1"
# Copied from "Content" into client/ and server/.
$clientContentFiles = @(
    "ui.html"
)

$serverContentFiles = @(
    "config.json"
)
```

## The manifest

`Content/manifest.json` describes the mod. The template's looks like this:

```json title="Content/manifest.json"
{
  "uniqueId": "MyMod",
  "version": "1.0.0",
  "name": "My mod",
  "author": "Me",
  "description": "What it does, in one sentence.",
  "link": "https://example.com/my-mod",
  "dependencies": [
    {
      "uniqueId": "OblivionMP.SDK",
      "minimumVersion": "1.0.0"
    }
  ]
}
```

`uniqueId` has to be unique on the server, and dependency ids are matched exactly, case included. Every mod depends
on `OblivionMP.SDK`. A mod that builds on another mod, such as [chat](../Optional-mods/chat.md), lists it here too;
see [Using another mod](../Optional-mods/using-another-mod.md). [Mod management](../../Server/mod-management.md)
covers every manifest field and how the server orders mods.

## Mods with one half

Not every mod needs both halves:

* **A client-only mod** changes what one player sees or does, and syncs nothing new. Delete the server project and
  its lines in `ModFiles.ps1`. The folder then has no `server/`.
* **A server-only mod** changes rules the players never need code for, such as an economy that only adjusts existing
  values. Delete the client project. The folder has no `client/`, and players never download anything.

Keep the shared project as long as both halves exist. If your shapes or messages change, both halves have to be
rebuilt and shipped together: a client and server that disagree about them cannot talk.

## Next steps

* [Mod entry and config](mod-entry-and-config.md)
* [Services](services.md)
