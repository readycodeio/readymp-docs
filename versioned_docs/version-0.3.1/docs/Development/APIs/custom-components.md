# Custom components

The WukongMP SDK allows for defining custom data components attached to entities in the game. A **networked component** replicates between the server and every connected client, so both sides see the same values without you writing any messaging code for it.

A component is one half of a pair. The [server mod](../../Server-development/getting-started#registering-components-and-archetypes) registers it and attaches it to an archetype, and the client mod does the same, against the same definition from a shared project. This page covers the client half.

## Declaring the component

Put the component in the **shared project** that both your client mod and your server mod reference. It is a `partial struct` decorated with `[DeriveINetworkedComponent]`, and the generator turns each private field into a public property and writes the serialization code:

```csharp title="ExampleMod.Common/BountyComponent.cs"
using System.Runtime.InteropServices;
using ReadyM.Api.Multiplayer.Generators;

[DeriveINetworkedComponent]
[StructLayout(LayoutKind.Auto)]
public partial struct BountyComponent
{
    private int _kills;
    private float _multiplier;
}
```

Any type the component's fields use has to live in the shared project too, for the same reason: the two sides must never disagree about its layout.

## Registering it on the client

Two things have to happen in your mod's `Initialize`: register the component type, and register an archetype change that attaches it to an entity.

```csharp title="Mod.cs"
protected override void Initialize(IDependencyContainer services)
{
    services.Resolve<IComponentApi>().RegisterComponent<BountyComponent>();
    services.RegisterSingleton<IArchetypeRegistration, BountyRegistration>();
}
```

[`IComponentApi.RegisterComponent<T>`](../../../api-reference/WukongMp.Api/WukongMp.Api.IComponentApi) declares the type to the networking layer. The archetype change goes in a class implementing [`IArchetypeRegistration`](../../../api-reference/ReadyM.Api.ECS.Registry/ReadyM.Api.ECS.Registry.IArchetypeRegistration), which the SDK calls while it builds the ECS world:

```csharp title="BountyRegistration.cs"
using ReadyM.Api.ECS.Registry;
using ReadyM.Api.ECS.Worlds;
using WukongMp.Sdk.Api;

public class BountyRegistration : IArchetypeRegistration
{
    public void Register(IArchetypeRegistry registry)
    {
        registry.ModifyArchetype(WukongApi.Archetypes.GlobalPlayerArchetype, b => b.Add<BountyComponent>());
    }
}
```

`WukongApi.Archetypes` names the built-in archetypes, the same set the server SDK exposes as static members on `WukongArchetypes`. See [Archetypes and components](../../Server-development/archetypes) for what each one carries and which one your data belongs on.

:::note

`WukongApi.Archetypes` is the only part of `WukongApi` that is safe to touch from inside `Register`. It has no dependencies of its own, whereas the other APIs would pull the ECS world back into the container while the world is still being built.

:::

Registrations are additive, so registering your own does not displace the SDK's. `ModifyArchetype` attaches to an existing archetype; `RegisterArchetype` on the same interface creates a new one, if your mod spawns its own kind of entity.

## Keeping the two sides in step

Component IDs are positional. They are assigned in registration order and travel as a single byte on the wire, and nothing renegotiates them at connection time. If the client and the server register different components, or the same ones in a different order, the mismatch is not reported: the receiving side reads the wrong component out of the stream.

In practice this is easy to get right, as long as you:

* keep every component definition in the shared project, so the layouts cannot drift,
* register components in one place on each side, in the same order,
* attach them to the same archetypes on both sides,
* ship the client mod and the server mod together, as versions of the same package.

The [mod template](https://github.com/readycodeio/wukongmp-mod-template) is laid out around exactly this: `ExampleMod.Common` holds the component, `ExampleMod` registers the client half, `ExampleMod.Serverside` registers the server half.

## Server-only state

If the client has no business seeing a value, it does not need a component at all on this side. The server SDK has [local components](../../Server-development/getting-started#local-components) for state that never leaves the server, and they cost nothing on the wire. Use [RPC](../custom-rpc) for one-off events rather than state.
