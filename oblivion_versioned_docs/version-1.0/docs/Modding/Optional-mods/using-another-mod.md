---
sidebar_position: 1
---

# Using another mod

The features in this section are not part of the SDK. Each one comes from a separate mod, with its own repository
and its own NuGet packages, and it is only there when the server runs that mod. Your mod can build on one: ask for
its API in a constructor and call it, the same way you use the SDK. This page shows how, using the
[Arena](../examples.md) game mode, which posts its rules and eliminations to [chat](chat.md).

## Example

Three things make a mod build on another one. First, list it as a dependency in your manifest, next to the SDK:

```json title="Content/manifest.json"
{
  "uniqueId": "ArenaMod",
  "version": "1.0.0",
  "name": "OBMP Arena",
  "author": "ReadyM Team",
  "description": "Free-for-all arena game mode.",
  "dependencies": [
    {
      "uniqueId": "OblivionMP.SDK",
      "minimumVersion": "1.0.0"
    },
    {
      "uniqueId": "OblivionMP.Chat",
      "minimumVersion": "1.0.0"
    }
  ]
}
```

Second, reference the other mod's package in the project that uses it. Arena only talks to chat from the client, so
only its client project gets the chat client package:

```xml title="ArenaMod.Client/ArenaMod.Client.csproj"
<Project Sdk="Microsoft.NET.Sdk">

    <PropertyGroup>
        <TargetFramework>net10.0</TargetFramework>
        <ImplicitUsings>enable</ImplicitUsings>
        <Nullable>enable</Nullable>
    </PropertyGroup>

    <ItemGroup>
        <PackageReference Include="ReadyM.SDK.Oblivion.Client" Version="1.0.0" />
    </ItemGroup>

    <!-- The chat mod's client API. Chat is a dependency in manifest.json, so it is loaded first
         and provides IChat; its assemblies stay out of this mod's folder. -->
    <ItemGroup>
        <PackageReference Include="ReadyM.Oblivion.Chat.Client" Version="1.0.0-rc.3" />
    </ItemGroup>

    <ItemGroup>
        <ProjectReference Include="..\ArenaMod.Common\ArenaMod.Common.csproj" />
    </ItemGroup>

</Project>
```

Third, ask for the other mod's API in a constructor, like anything the SDK gives you:

```csharp title="ArenaMod.Client/DetectDeadPlayerSystem.cs"
using OblivionMp.ChatMod;
using OblivionMp.Sdk;
using OblivionMpCSharpMod.Values;
using ReadyM.SDK.Attributes;

namespace ArenaMod.Client;

[Service]
public sealed partial class DetectDeadPlayerSystem(IChat chat, IPlayers players)
{
    private float _previousHp = 100f;

    private void Update()
    {
        if (players.LocalMainCharacter is not { } me)
            return;

        if (me.Hp < 1 && _previousHp >= 1)
            chat.ShowLocal("Press Shift+Control+P to respawn!", new Color(1, 1, 0));

        _previousHp = me.Hp;
    }
}
```

Arena's RPC handlers do the same: `ArenaMod.Client/RpcHandlers.cs` asks for `IChat` next to `IEntities` and
`IUserInterface`, and shows a red line when a player is eliminated.

## How it works

**The manifest dependency.** The server reads every manifest before it loads anything, and loads a mod after
everything it depends on. A dependency the server does not have, or one older than your `minimumVersion`, is an
error, so a server owner learns straight away that your mod needs chat. Dependency ids are matched exactly, case
included. [Mod management](../../Server/mod-management.md) covers the manifest in full.

**Load order.** Because the other mod initializes first, its API is already there when your mod's entry point and
services are created. You can ask for `IChat` in the constructor of a [service](../Getting-started/services.md), an
RPC handler class or your `[ModEntry]`.

**One package per half.** A mod that offers an API to others publishes one package for each half, and you reference
the one that matches the project:

| Your project | References |
| --- | --- |
| `MyMod.Client` | the other mod's client package, for example `ReadyM.Oblivion.Chat.Client` |
| `MyMod.Server` | the other mod's server package, for example `ReadyM.Oblivion.Chat.Server` |
| `MyMod.Common` | nothing from the other mod |

Reference only the halves you use. Arena's server never talks to chat, so its server project has no chat package.
The shared project never references another mod's package: it ships in both halves, and each of those packages only
works in one.

**Its assemblies stay out of your mod folder.** The package is there so your code compiles. At runtime the other
mod loads its own assemblies from its own folder, and the `IChat` you ask for is the one it registered. Your mod
folder holds only your own DLLs, which is what the template's `ModFiles.ps1` lists, so there is nothing to change
there. Do not add the other mod's DLLs to it.

**The server has to run it.** Players get the other mod's client half the same way they get yours: the server hands
it out when they join. All the server owner does is put both mod folders in `mods/`. Say in your mod's description
or README which other mods it needs.

:::note

Not in 1.0 yet: optional dependencies. A mod that asks for another mod's API needs that mod on the server. There is
no way to declare "use chat if it is there, and work without it otherwise".

:::

## Mods you can build on

| Mod | Manifest id | Packages | What it gives you |
| --- | --- | --- | --- |
| [Chat](chat.md) | `OblivionMP.Chat` | `ReadyM.Oblivion.Chat.Client`, `ReadyM.Oblivion.Chat.Server` | Lines in the chat window, and slash commands of your own. |
| [Quests](https://github.com/readycodeio/oblivionmp-quest-sdk) | `OblivionMP.SDK.Quests` | `ReadyM.Oblivion.Quests.Server` | Quests written on the server: stages with journal text, objectives, compass targets and dialogue topics, saved with the world. |

Quests runs only on the server, so it has a server package and nothing else. Your server project asks for its
`QuestCatalog` in a constructor and defines quests when the service starts. Its
[README](https://github.com/readycodeio/oblivionmp-quest-sdk#readme) has an example quest.
