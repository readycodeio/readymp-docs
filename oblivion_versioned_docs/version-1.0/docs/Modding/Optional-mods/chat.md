---
sidebar_position: 2
---

# Chat

Chat is a separate mod, not part of the SDK. It adds a text chat window to the game (K opens it, Enter sends,
Escape puts it away) and a set of slash commands that run on the server. Other mods can use it to show lines to
players and to add slash commands of their own. It is only there when the server runs it, so a mod that uses it has
to [depend on it](using-another-mod.md).

| | |
| --- | --- |
| Manifest id | `OblivionMP.Chat` |
| Client package | `ReadyM.Oblivion.Chat.Client` |
| Server package | `ReadyM.Oblivion.Chat.Server` |
| Source | [github.com/readycodeio/oblivionmp-chat](https://github.com/readycodeio/oblivionmp-chat) |

## Example

On the client, show a line only this player sees. This is how Arena tells a player how to respawn:

```csharp title="MyMod.Client/RespawnHint.cs"
using OblivionMp.ChatMod;
using OblivionMp.Sdk;
using OblivionMpCSharpMod.Values;
using ReadyM.SDK.Attributes;

namespace MyMod.Client;

[Service]
public sealed partial class RespawnHint(IChat chat, IPlayers players)
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

On the server, add a slash command. Every player can type it, and it shows up in `/help`:

```csharp title="MyMod.Server/ReadyCommand.cs"
using OblivionMp.ChatMod.Common;
using OblivionMp.ChatMod.Serverside;
using ReadyM.SDK.Attributes;

namespace MyMod.Server;

[Service]
public sealed partial class ReadyCommand(IChat chat)
{
    private void Start()
    {
        chat.AddCommand("ready", "/ready - mark yourself ready", (c, sender, _) =>
        {
            c.SendTo(sender, "You are ready.", ChatLineKind.CommandReply);
            c.Broadcast($"{c.GetNickname(sender)} is ready.");
        });
    }
}
```

## Setting it up

1. Add `OblivionMP.Chat` to the `dependencies` in `Content/manifest.json`:

   ```json title="Content/manifest.json"
   "dependencies": [
     { "uniqueId": "OblivionMP.SDK", "minimumVersion": "1.0.0" },
     { "uniqueId": "OblivionMP.Chat", "minimumVersion": "1.0.0" }
   ]
   ```

2. Reference the package that matches each project that uses chat:

   ```powershell
   dotnet add MyMod.Client package ReadyM.Oblivion.Chat.Client
   dotnet add MyMod.Server package ReadyM.Oblivion.Chat.Server
   ```

3. Ask for `IChat` in a constructor.

The server needs the chat mod in its `mods/` folder too. Build it from the repository with `.\MakeModFolder.ps1
Release` and copy `Output/mods/OblivionMP.Chat/` across. Players receive its client half when they join, like
yours. [Using another mod](using-another-mod.md) explains each step.

## On the client

The client `IChat` lives in the `OblivionMp.ChatMod` namespace. It is the chat window on this player's screen.

| Member | What it does |
| --- | --- |
| `bool IsOpen` | Whether the entry line is up and has the keyboard. |
| `event Action<ChatLine>? LineReceived` | Raised for every line the server delivers, after it is shown. Lines from `ShowLocal` do not raise it. |
| `void Send(string text)` | Sends text as if the player had typed it. A leading `/` runs a chat command. |
| `void ShowLocal(string text, ChatLineKind kind = ChatLineKind.System)` | Shows a line only this player sees, styled like the server's lines of that kind. Nothing goes to the server. |
| `void ShowLocal(string text, Color color)` | Shows a line only this player sees, in the given color. Nothing goes to the server. |
| `void Open()` | Shows the entry line and gives it the keyboard, as pressing K does. |
| `void Close()` | Puts the entry line away and hands the keyboard back to the game. Recent lines stay up until they fade. |

`Color` is [`OblivionMpCSharpMod.Values.Color`](../../../api-reference/OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md):
red, green, blue and an optional alpha, each from 0 to 1. Arena uses yellow (`new Color(1, 1, 0)`) for its rules and
red (`new Color(1, 0, 0)`) for eliminations.

`Send` goes through the server like anything the player types, so the server's limits apply: text is trimmed, empty
text is dropped, and anything longer than 240 characters is refused.

## On the server

The server `IChat` lives in the `OblivionMp.ChatMod.Serverside` namespace. It sends lines to players and holds the
slash commands.

| Member | What it does |
| --- | --- |
| `IReadOnlyList<ChatPlayer> ConnectedPlayers` | The players connected right now, with the nicknames chat shows for them. |
| `string GetNickname(PlayerId player)` | The nickname chat shows for a player, or an empty string for one who is not connected. |
| `void Broadcast(string text, ChatLineKind kind = ChatLineKind.System)` | Shows a line to every connected player. |
| `void SendTo(PlayerId player, string text, ChatLineKind kind = ChatLineKind.System)` | Shows a line to one player. |
| `void AddCommand(string name, string usage, ChatCommandHandler run)` | Adds a slash command. Throws `ArgumentException` if a command with that name is already there. |

`ChatPlayer` is a record with two properties, `PlayerId Id` and `string Nickname`.

### Commands

A command is a name, a usage line and a handler:

```csharp
public delegate void ChatCommandHandler(IChat chat, PlayerId sender, string arguments);
```

* `name` is what the player types after the slash, without the slash. Names are not case sensitive, so `/Ready`
  runs `ready` too.
* `usage` is the line `/help` shows for the command, as written. Chat's own commands use the form
  `"/name <arguments> - what it does"`.
* The handler gets the server `IChat` to answer with, the player who typed the command, and everything after the
  command name, trimmed. `arguments` is empty when the player typed only the name.

If the handler throws, chat logs the exception and tells the sender that the command failed. A player who types a
command nobody added is told so and pointed at `/help`.

Command names have to be unique across every mod on the server, chat's own included. Chat adds these:

| Command | What it does |
| --- | --- |
| `/me <action>` | Describes what your character is doing, to everyone. |
| `/do <description>` | Describes the scene or your character, to everyone. |
| `/b <text>` | Out of character chat. |
| `/dm <id> <text>` | A private message to one player. |
| `/who` | Who is connected, with the ids `/dm` needs. |
| `/help` | Every command and its usage. |

Add your commands in a service's `Start`, so they are there before the first player can type anything.

## Shared types

These live in the `OblivionMp.ChatMod.Common` namespace and come with both packages.

`ChatLineKind` says what a line is. The chat window styles each kind its own way:

| Value | Used for |
| --- | --- |
| `Player` | A message a player typed. |
| `System` | A line from the server or a mod. The default for `ShowLocal`, `Broadcast` and `SendTo`. |
| `CommandReply` | An answer to a command, such as the `/who` list. |
| `Rejection` | A refusal: an unknown command, a message that is too long, a command that failed. |
| `Action` | `/me` lines. |
| `Ambient` | `/do` lines. |
| `Ooc` | `/b` out of character lines. |
| `Private` | `/dm` private messages. |

`ChatLine` is what `LineReceived` hands you on the client:

| Field | Meaning |
| --- | --- |
| `ChatLineKind Kind` | What kind of line it is. |
| `PlayerId Sender` | Who wrote it. `PlayerId.Server` for lines from the server or a mod. |
| `string Nickname` | The sender's nickname. Empty for lines from the server. |
| `string Text` | The text. |

`ChatLimits.MaxMessageLength` is the longest message the server accepts from a player: 240 characters.

## Reference

Chat's types are not in this site's API reference. Their source is the reference:

* [Client `IChat`](https://github.com/readycodeio/oblivionmp-chat/blob/main/OblivionMp.ChatMod/IChat.cs)
* [Server `IChat` and `ChatCommandHandler`](https://github.com/readycodeio/oblivionmp-chat/blob/main/OblivionMp.ChatMod.Serverside/IChat.cs)
* [`ChatLine`](https://github.com/readycodeio/oblivionmp-chat/blob/main/OblivionMp.ChatMod.Common/ChatLine.cs) and
  [`ChatLineKind`](https://github.com/readycodeio/oblivionmp-chat/blob/main/OblivionMp.ChatMod.Common/ChatLineKind.cs)

Types from the SDK used on this page:

* [Color](../../../api-reference/OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md)
* [PlayerId](../../../api-reference/ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)
* [IPlayers](../../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.IPlayers.md)
