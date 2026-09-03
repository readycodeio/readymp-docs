# PreludeLib.Attributes

### Classes

 [HarmonyTargetMethodHint](../PreludeLib.Attributes/PreludeLib.Attributes.HarmonyTargetMethodHint.md)

When declaring a <a href="https://harmony.pardeike.net/articles/patching-auxiliary.html#targetmethod">TargetMethod</a> method in your patch class, you must decorate it with this attribute.

### Structs

 [In<T\>](../PreludeLib.Attributes/PreludeLib.Attributes.In-1.md)

Use in **HarmonyTargetMethodHint** parameter list to indicate that the parameter is an <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/in">in</a> parameter.
This is required for Harmony to correctly identify the method when matching signatures, as <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/in">in</a> parameters are treated differently than regular parameters.

 [Out<T\>](../PreludeLib.Attributes/PreludeLib.Attributes.Out-1.md)

Use in **HarmonyTargetMethodHint** parameter list to indicate that the parameter is an <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/out">out</a> parameter.
This is required for Harmony to correctly identify the method when matching signatures, as <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/out">out</a> parameters are treated differently than regular parameters.

 [Ref<T\>](../PreludeLib.Attributes/PreludeLib.Attributes.Ref-1.md)

Use in **HarmonyTargetMethodHint** parameter list to indicate that the parameter is an <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/ref">ref</a> parameter.
This is required for Harmony to correctly identify the method when matching signatures, as <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/ref">ref</a> parameters are treated differently than regular parameters.


