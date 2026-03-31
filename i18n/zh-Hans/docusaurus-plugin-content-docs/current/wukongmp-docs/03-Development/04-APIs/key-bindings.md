# 按键绑定

[Input
API](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi.md)
提供了一种注册自定义键盘和控制器绑定的方式。

## 示例

定义在每次按下按键时执行的处理程序。

```csharp showLineNumbers
WukongApi.Input.RegisterKeyBind(Key.F1, () =>
{
    // toggle command window visibility
});
```

## 指定修饰键

```csharp showLineNumbers
WukongApi.Input.RegisterKeyBind(ModifierKeys.Alt, Key.X, () =>
{
    // do something
});
```

## 注册控制器绑定

使用
[RegisterGamePadBind](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi#-registergamepadbindgamepadbutton-action)
方法绑定到以下按钮之一：

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

## 使用 `CanApplyInput`

按键绑定在每次按下按键时都会执行，与上下文无关。如果你希望在聊天输入时按下 'K' 不会触发任何命令逻辑，请将其通过对
[CanApplyInput](/docs/wukongmp-api-reference/WukongMp.Sdk.Api/WukongMp.Sdk.Api.IWukongInputApi#-canapplyinput)
的调用进行过滤。

```csharp showLineNumbers
WukongApi.Input.RegisterKeyBind(Key.K, () =>
{
    if (WukongApi.Input.CanApplyInput())
    {
        // toggle chat window visibility
    }
});
```
