---
sidebar_position: 6
---

# Mod configuration files

A mod can ship JSON config files and read them into your own classes with one call. New in `0.4.0`.

It works the same on both sides, because `RegisterConfig` is on both mod base classes. The difference is which folder the file is read from, which matters more than it sounds: see [Client and server config](#client-and-server-config).

## Defining a config class

A plain class with defaults. No attributes, no serializer setup:

```csharp title="MyConfig.cs (in the shared project, or per side)"
public class MyConfig
{
    public int MaxPlayers { get; set; } = 4;
    public bool AllowCheats { get; set; } = false;
    public string WelcomeMessage { get; set; } = "Have fun";
}
```

## Registering it

Call `RegisterConfig<T>` from your mod's `Initialize` (client) or `Init` (server):

```csharp
protected override void Initialize(IDependencyContainer services)
{
    RegisterConfig<MyConfig>();
}
```

That reads `config.json` from your mod's folder and registers the result as a singleton, so anything resolved from DI can take it as a constructor parameter:

```csharp
public class GreetingSystem(MyConfig config, IWukongChatApi chat)
{
    public void Greet() => chat.ShowLocalMessage(config.WelcomeMessage);
}
```

The matching file sits in your mod folder:

```json title="config.json"
{
  "maxPlayers": 6,
  "welcomeMessage": "No cheating"
}
```

Keys are matched case-insensitively, comments and trailing commas are allowed, and any key you leave out keeps the default from your class. The example above leaves `allowCheats` at `false`.

## More than one file

Pass a file name to split config up:

```csharp
RegisterConfig<MyConfig>();                 // config.json
RegisterConfig<ArenaConfig>("arenas.json"); // arenas.json
```

Each call registers its own type, so both are resolvable independently.

## What happens when the file is wrong

| Situation | Result |
| --- | --- |
| File is missing | Your class's defaults are used, and the mod logs a warning |
| File does not parse | `ModConfigException`, which stops the mod loading |
| File has a key your class does not declare | `ModConfigException`, naming the key |

That last one is deliberate. A typo in a config key is otherwise invisible: you would edit `maxPlayer`, see no effect, and have nothing to go on.

## Client and server config

The API is opt-in and per side. Nothing is read for a mod that never calls `RegisterConfig`, and no default file is ever written for you.

Because the client half and the server half of a mod live in different folders, they read different files:

* `RegisterConfig` in a **client** mod reads from the mod's `client/` folder, which is downloaded by every player.
* `RegisterConfig` in a **server** mod reads from the mod's `server/` folder, which never leaves the server.

So server-only settings belong in the server half, and stay private. See [Mod management](../Server/mod-management) for the folder layout.

:::warning

Do not put anything sensitive in a client-side config file. Everything in `client/` is sent to every player who joins, so treat it as public.

:::

The PvP mod is the worked example: its round and arena settings are a server-side `config.json`, so the server admin can tune the game mode settings before hosting the mod.
