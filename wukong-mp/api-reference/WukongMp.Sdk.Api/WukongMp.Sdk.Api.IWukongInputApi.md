# Interface IWukongInputApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides methods related to input, such as registering key binds.

```csharp
public interface IWukongInputApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongInputApi_CanApplyInput"></a> CanApplyInput\(\)

Determines whether keyboard input can currently be applied (i.e., not blocked by active text fields or menus).

```csharp
bool CanApplyInput()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if keyboard input is not blocked by active text fields and menus; otherwise, <code>false</code>.

### <a id="WukongMp_Sdk_Api_IWukongInputApi_RegisterGamePadBind_CSharpModBase_Input_GamePadButton_System_Action_"></a> RegisterGamePadBind\(GamePadButton, Action\)

Registers a gamepad button bind with the specified button and action.

```csharp
void RegisterGamePadBind(GamePadButton button, Action action)
```

#### Parameters

`button` [GamePadButton](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/GamePadButton.cs)

The gamepad button to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

The action to execute when the button is pressed.

### <a id="WukongMp_Sdk_Api_IWukongInputApi_RegisterKeyBind_CSharpModBase_Input_Key_System_Action_"></a> RegisterKeyBind\(Key, Action\)

Registers a key bind with the specified key and action.

```csharp
void RegisterKeyBind(Key key, Action action)
```

#### Parameters

`key` [Key](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/Key.cs)

The key to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

The action to execute when the key is pressed.

### <a id="WukongMp_Sdk_Api_IWukongInputApi_RegisterKeyBind_CSharpModBase_Input_ModifierKeys_CSharpModBase_Input_Key_System_Action_"></a> RegisterKeyBind\(ModifierKeys, Key, Action\)

Registers a key bind with the specified modifier keys, key, and action.

```csharp
void RegisterKeyBind(ModifierKeys modifiers, Key key, Action action)
```

#### Parameters

`modifiers` [ModifierKeys](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/ModifierKeys.cs)

The modifier keys (e.g., Ctrl, Alt, Shift).

`key` [Key](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/Key.cs)

The key to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

The action to execute when the key combination is pressed.


