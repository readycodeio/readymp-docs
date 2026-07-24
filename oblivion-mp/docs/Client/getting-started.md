---
sidebar_position: 1
---

# Getting started

Client-side mods run inside the game alongside the OblivionMP client. They can read and change entity data, react to input, define custom data that is synchronized between players, and exchange custom network messages.

A mod is a .NET class library that references the `OblivionMp.Sdk` package (shipped with the server under `mods/OblivionMp.Sdk.zip`) and defines a single class extending `ModBase`. The mod loader instantiates this class when the game starts.

:::tip[Start from the template]

The quickest way to start is the official [OblivionMP mod template](https://github.com/readycodeio/oblivionmp-mod-template). It ships a ready-to-build solution with client, server, and shared projects wired up against the SDK, plus a script that packages both mods. Clone it and follow the [README](https://github.com/readycodeio/oblivionmp-mod-template/blob/main/README.md).

:::

```csharp title="Minimal mod class"
using OblivionMp.Sdk;
using ReadyM.Api.DI;

public class MyMod : ModBase
{
    public override string Name => "MyMod";

    protected override void RegisterServices(IDependencyContainer services)
    {
        // register your services, components, RPC handlers, and archetype changes here
    }

    public override void Start()
    {
        // called once the game is ready; wire up key bindings and gameplay here
    }
}
```

All SDK functionality is reached through the static [SDK](../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.SDK) class — for example `SDK.Input`, `SDK.Sync`, and `SDK.Services`.

:::info

Everything registered in `RegisterServices` is resolved from the same [dependency injection](../../api-reference/ReadyM.Api.DI/ReadyM.Api.DI.IDependencyContainer) container the SDK uses. Any [system](systems) or [hosted service](hosted-services) defined in your mod assembly is discovered and registered automatically.

:::

## Feature status

| Feature | Status |
|---|---|
| Key bindings | :white_check_mark: [done](key-bindings) |
| Player & entity data | :construction: [mostly done](Entities/players) |
| Custom data sync | :white_check_mark: [done](custom-components) |
| Gameplay systems | :white_check_mark: [done](systems) |
| Custom RPC | :white_check_mark: [done](custom-rpc) |
| Hosted services | :white_check_mark: [done](hosted-services) |
| [Server-side mods](../Server-development/getting-started) | :construction: primitive API |
| Save file API | :construction: sync implemented, no public API yet |
| Mod manifests | :soon: not enforced in 0.1.0 |
