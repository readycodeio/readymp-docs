# Key bindings

The [Input API](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi.md) provides a way to register custom keyboard and controller bindings.

## Examples

Define handlers that execute every time a key is pressed.

```csharp showLineNumbers
WukongApi.Input.RegisterKeyBind(Key.F1, () =>
{
    // toggle command window visibility
});
```

## Specify modifier keys

```csharp showLineNumbers
WukongApi.Input.RegisterKeyBind(ModifierKeys.Alt, Key.X, () =>
{
    // do something
});
```

## Register controller bindings

Use the [RegisterGamePadBind](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi#-registergamepadbindgamepadbutton-action) method to bind to one of the following buttons:

```csharp
public enum GamePadButton
{
    None,
    DPadUp,
    DPadDown,
    DPadLeft,
    DPadRight,
    Start,
    Back,
    LeftThumb,
    RightThumb,
    LeftShoulder,
    RightShoulder,
    A,
    B,
    X,
    Y,
    LeftTrigger,
    RightTrigger,
    DPadRightUp,
    DPadLeftDown,
    DPadRightDown,
    DPadLeftUp,
}
```

## Using `CanApplyInput`

Key bindings run every time a key is pressed, regardless of context. If you want to ensure that pressing 'K' when typing in chat will not trigger any command logic, gate it behind the call to [CanApplyInput](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi#-canapplyinput).

```csharp showLineNumbers
WukongApi.Input.RegisterKeyBind(Key.K, () =>
{
    if (WukongApi.Input.CanApplyInput())
    {
        // toggle chat window visibility
    }
});
```
