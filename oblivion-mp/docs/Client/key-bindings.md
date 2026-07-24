---
sidebar_position: 2
---

# Key bindings

The Input API, reached through [`SDK.Input`](../../api-reference/OblivionMp.Sdk/OblivionMp.Sdk.SDK), provides a way to register custom keyboard bindings.

## Examples

Define handlers that execute every time a key is pressed.

```csharp showLineNumbers
SDK.Input.RegisterKeyBind(Key.F1, () =>
{
    // do something
});
```

## Specify modifier keys

```csharp showLineNumbers
SDK.Input.RegisterKeyBind(ModifierKeys.Shift, Key.O, () =>
{
    // do something
});
```

## Using `CanApplyInput`

Key bindings run every time a key is pressed, regardless of context. If you want to ensure that pressing a key while typing in chat will not trigger your logic, gate it behind a call to `CanApplyInput`.

```csharp showLineNumbers
SDK.Input.RegisterKeyBind(Key.K, () =>
{
    if (SDK.Input.CanApplyInput())
    {
        // do something only when the game is accepting gameplay input
    }
});
```
