---
sidebar_position: 3
---

# 为游戏打补丁

WukongMP SDK 构建在对 [Harmony](https://github.com/pardeike/Harmony) 库的自定义分支之上。虽然它支持
Harmony 的大部分 API，但在补丁的发现和启用方式上存在一些差异。

通常，在为你的 WukongMP 模组定义补丁时，请参考 [Harmony
官方文档](https://harmony.pardeike.net/articles/intro.html)。

以下是确保补丁正确工作所需满足的一些要求。

## 类别为必填项

你模组代码中声明的每个 Harmony 补丁都必须使用
[HarmonyPatchCategory](https://harmony.pardeike.net/api/HarmonyLib.HarmonyPatchCategory.html)
属性进行标记，并使用
[PatchCategory](/docs/wukongmp-api-reference/WukongMp.Api.Configuration/WukongMp.Api.Configuration.PatchCategory)
中定义的常量之一，如下所示：

```csharp title="补丁示例"
[HarmonyPatch(typeof(BPS_PlayerTeleportSystem), "OnPlayerTeleportTo")]
[HarmonyPatchCategory(PatchCategory.Global)]
public static class PatchOnPlayerTeleportTo { ... }
```

在 SDK 的当前版本中，只有属于 `PatchCategory.Global` 或 `PatchCategory.Connected`
类别的补丁在游戏启动时才会被启用。

## 使用 [TargetMethod](https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod)

有时你必须在补丁类中使用
[TargetMethod](https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod)
方法，才能对 `private` 或 `internal` 类的成员进行补丁。

在 WukongMP SDK 的 Harmony 分叉中，必须存在
[HarmonyTargetMethodHint](/docs/wukongmp-api-reference/PreludeLib.Attributes/PreludeLib.Attributes.HarmonyTargetMethodHint)
属性。第一个参数是完整限定类名，第二个参数是被补丁的成员名称。

```csharp title="示例：针对内部类打补丁"
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

另一个
[TargetMethod](https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod)
的用例是通用类（泛型类）。在这种情况下，您还必须使用
[HarmonyTargetMethodHint](/docs/wukongmp-api-reference/PreludeLib.Attributes/PreludeLib.Attributes.HarmonyTargetMethodHint)
进行装饰，提供专门化的类类型和成员名称。

```csharp title="示例：针对泛型类打补丁"
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
