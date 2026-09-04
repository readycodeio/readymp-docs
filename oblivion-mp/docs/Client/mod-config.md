---
sidebar_position: 8
---

# Mod config files

A mod can ship JSON config files and read them into your own classes with one call. New in `0.2.0`.

`RegisterConfig` sits on the mod base class on both sides, so the usage is identical. What differs is which folder the file is read from, and that matters more than it sounds: see [Client and server config](#client-and-server-config).

## Defining a config class

An ordinary class with defaults. No attributes, no config serializer:

```csharp title="MyConfig.cs (in the shared project, or per side)"
public class MyConfig
{
    public int MaxPlayers { get; set; } = 4;
    public bool AllowFastTravel { get; set; } = true;
    public string WelcomeMessage { get; set; } = "Have fun";
}
```

## Registering it

Call `RegisterConfig<T>` from your mod's `RegisterServices` on the client, or `Init` on the server:

```csharp
protected override void RegisterServices(IDependencyContainer services)
{
    RegisterConfig<MyConfig>();
}
```

That reads `config.json` from the mod's folder and registers the result as a singleton, so anything resolved from the container can take it as a constructor parameter:

```csharp
public class GreetingSystem(MyConfig config, IOblivionChatApi chat)
{
    public void Greet() => chat.ShowLocalMessage(config.WelcomeMessage, Color.White);
}
```

The matching file goes in the mod folder:

```json title="config.json"
{
  "maxPlayers": 6,
  "welcomeMessage": "No cheating"
}
```

Key matching is case-insensitive, comments and trailing commas are allowed, and any key you leave out keeps the default from the class. The example above leaves `allowFastTravel` as `true`.

## Multiple files

Pass a file name to split configs up:

```csharp
RegisterConfig<MyConfig>();                 // config.json
RegisterConfig<ArenaConfig>("arenas.json"); // arenas.json
```

Each call registers its own type, so the two resolve independently.

## What happens when the file is wrong

| Case | Result |
| --- | --- |
| File is missing | The defaults from the class are used, and a warning is logged |
| File does not parse | `ModConfigException` is thrown and the mod fails to load |
| File has a key the class does not declare | `ModConfigException` is thrown, naming the key |

That last one is deliberate. A typo in a config key is otherwise invisible: you write `maxPlayer`, nothing happens, and you have nothing to go on.

## Client and server config {#client-and-server-config}

The API is opt-in and independent per side. A mod that never calls `RegisterConfig` reads nothing, and no default file is created for it.

Because a mod's client and server halves live in different folders, they read different files:

* `RegisterConfig` in a client mod reads from the mod's `client/` folder, which is handed to every player.
* `RegisterConfig` in a server mod reads from the mod's `server/` folder, which never leaves the server.

So server-only settings belong in the server half, where they stay private. See [Mod management](../Server/mod-management) for the folder structure.

:::warning

Do not put anything sensitive in a client config file. Everything in `client/` is sent to every player who joins, so treat it as public.

:::
