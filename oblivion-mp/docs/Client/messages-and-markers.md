---
sidebar_position: 9
---

# Messages and markers

Three client APIs put text in front of the player: the chat log, the game's own message widgets, and floating markers over other players. All three are local to the client they run on. None of them send anything over the network, so if you want every player to see something, send an [RPC](custom-rpc) and have each client call these itself.

All are reached from the static `SDK` class. New in `0.2.0`.

## Chat

[`SDK.Chat`](../../api-reference/OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionChatApi) writes a line into the in-game chat, visible only to the local player:

```csharp
using OblivionMpCSharpMod.Values;

SDK.Chat.ShowLocalMessage("Wallet balance: 250 gold", Color.White);
```

Use it for anything the player may want to scroll back to. It is the right place for command output and for the result of an action they took.

## Game messages

[`SDK.GameMessage`](../../api-reference/OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IOblivionGameMessageApi) drives the game's own on-screen widgets, so what you show looks like the rest of Oblivion's UI rather than a mod overlay.

```csharp
// a transient line, centered, for three seconds
SDK.GameMessage.ShowMessage("Area captured");

// top-left instead, for ten seconds
SDK.GameMessage.ShowMessage("Round starting", MessagePosition.TopLeft, 10f);
```

`ShowMessage` takes a `MessagePosition` of `Center` (the default) or `TopLeft`, and a duration in seconds that defaults to 3.

The other two widgets stay up until you take them down, which makes them suited to state rather than events:

```csharp
SDK.GameMessage.ShowInfoMessage("Waiting for players");
// ...later
SDK.GameMessage.HideInfoMessage();

SDK.GameMessage.ShowGameMessage("Round 2", "Arena of Chorrol", "First to five wins");
// ...later
SDK.GameMessage.HideGameMessage();
```

`ShowGameMessage` takes up to three lines; the second and third are optional.

:::tip[Which one to use]

Chat for things worth keeping, `ShowMessage` for a brief notification, `ShowInfoMessage` and `ShowGameMessage` for something that stays on screen while a state lasts. Remember to hide the last two, since nothing does it for you.

:::

## Markers

[`SDK.Markers`](../../api-reference/OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.IMarkerApi) puts a floating label over another player's character. Nameplates, team colors, and objective callouts are all this API.

```csharp
var handle = SDK.Markers.CreateMarker(player, player.Nickname, MarkerColor.White);
```

`CreateMarker` takes a [`ReadyMainCharacter`](Entities/players), the text, and a [`MarkerColor`](../../api-reference/OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor), which is RGBA with each channel from 0 to 1:

```csharp
var red = new MarkerColor(1f, 0f, 0f);
var ghost = new MarkerColor(1f, 1f, 1f, 0.35f);
```

Keep the returned [`MarkerHandle`](../../api-reference/OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle). Everything else on the API takes it:

```csharp
SDK.Markers.SetMarkerText(handle, "Team Red", red);
SDK.Markers.SetMarkerVisible(handle, false);
SDK.Markers.SetMarkerOpacity(handle, 0.5f);
SDK.Markers.DestroyMarker(handle);
```

`CreateMarker` returns `MarkerHandle.None` when the target has no spawned pawn yet, which happens if you call it before the player's character exists in the world. Every other method is a no-op for `None` and for an already-destroyed handle, so you can call them without guarding first, but a `None` result means no marker was made and retrying later is on you.

:::important

Markers are attached to a pawn, and a pawn is destroyed when its player leaves the area. Destroy your handles when you are done with them, and recreate markers after a player's character respawns rather than holding a handle across an area change.

:::

A practical shape is to create markers when a player's character appears and destroy them when it goes away, keeping the handles in a dictionary keyed by `PlayerId`.
