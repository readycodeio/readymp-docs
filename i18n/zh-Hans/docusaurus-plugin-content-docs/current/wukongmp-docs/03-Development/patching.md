---
sidebar_position: 1
---

# Patching the game

The WukongMP SDK is built on a custom fork of the [Harmony](https://github.com/pardeike/Harmony) library. While it supports most of the Hamony's API, there are some differences in how patches are discovered and enabled.

In general, refer to the [official Harmony documentation](https://harmony.pardeike.net/articles/intro.html) when defining patches in your WukongMP mods.

Below are a few requirements that must be satisfied for patches to work correctly.

## Categories are mandatory

Each Harmony patch declared in your mod's code must be decorated with the [HarmonyPatchCategory](https://harmony.pardeike.net/api/HarmonyLib.HarmonyPatchCategory.html) attribute, with one of the constants defined in [PatchCategory](/docs/wukongmp-api-reference/WukongMp.Api.Configuration/WukongMp.Api.Configuration.PatchCategory), like so:

```csharp title="Example patch"
[HarmonyPatch(typeof(BPS_PlayerTeleportSystem), "OnPlayerTeleportTo")]
[HarmonyPatchCategory(PatchCategory.Global)]
public static class PatchOnPlayerTeleportTo { ... }
```

As of the current version of the SDK, only patches with the `PatchCategory.Global` or `PatchCategory.Connected` category are enabled at game start.

## Using [TargetMethod](https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod)

Sometimes you have to use the [TargetMethod](https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod) method in your patch class to be able to patch a member of a `private` or `internal` class.

In the WukongMP SDK's Harmony fork this method requires the [HarmonyTargetMethodHint](/docs/wukongmp-api-reference/PreludeLib.Attributes/PreludeLib.Attributes.HarmonyTargetMethodHint) attribute to be present. The first argument is the fully qualified class name. The second argument is the patched member name.

```csharp title="Example: patching an internal class"
[HarmonyPatch]
[HarmonyPatchCategory(PatchCategory.Connected)]
internal static class PatchComplexSkillDoInteractAction
{
    [HarmonyTargetMethodHint("b1.BUIAComplexSkill", "DoInteractAction")]
    private static MethodBase TargetMethod()
    {
        return AccessTools.Method("b1.BUIAComplexSkill:DoInteractAction");
    }
    ...
}
```

Another use case for [TargetMethod](https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod) are generic classes. In such cases, you must also decorate with [HarmonyTargetMethodHint](/docs/wukongmp-api-reference/PreludeLib.Attributes/PreludeLib.Attributes.HarmonyTargetMethodHint), providing the specialized class type and member name.

```csharp title="Example: Patching a generic class"
[HarmonyPatch]
[HarmonyPatchCategory(PatchCategory.Global)]
public class PatchShrineRegisterFunc
{
    [HarmonyTargetMethodHint(typeof(FMenuHelper<EShrineMenuTag>), "RegisterFunc")]
    public static MethodBase TargetMethod()
    {
        var specializedType = typeof(FMenuHelper<EShrineMenuTag>);
        return specializedType.GetMethod("RegisterFunc")!;
    }
    ...
}
```
