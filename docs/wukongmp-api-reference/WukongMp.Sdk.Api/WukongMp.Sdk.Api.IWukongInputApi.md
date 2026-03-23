# Interface IWukongInputApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongInputApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongInputApi_CanApplyInput"></a> CanApplyInput\(\)

```csharp
bool CanApplyInput()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if keyboard input is not blocked by active text fields and menus.

### <a id="WukongMp_Sdk_Api_IWukongInputApi_RegisterGamePadBind_CSharpModBase_Input_GamePadButton_System_Action_"></a> RegisterGamePadBind\(GamePadButton, Action\)

```csharp
HotKeyItem RegisterGamePadBind(GamePadButton button, Action action)
```

#### Parameters

`button` [GamePadButton](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/GamePadButton.cs)

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [HotKeyItem](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/HotKeyItem.cs)

### <a id="WukongMp_Sdk_Api_IWukongInputApi_RegisterKeyBind_CSharpModBase_Input_Key_System_Action_"></a> RegisterKeyBind\(Key, Action\)

```csharp
HotKeyItem RegisterKeyBind(Key key, Action action)
```

#### Parameters

`key` [Key](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/Key.cs)

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [HotKeyItem](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/HotKeyItem.cs)

### <a id="WukongMp_Sdk_Api_IWukongInputApi_RegisterKeyBind_CSharpModBase_Input_ModifierKeys_CSharpModBase_Input_Key_System_Action_"></a> RegisterKeyBind\(ModifierKeys, Key, Action\)

```csharp
HotKeyItem RegisterKeyBind(ModifierKeys modifiers, Key key, Action action)
```

#### Parameters

`modifiers` [ModifierKeys](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/ModifierKeys.cs)

`key` [Key](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/Key.cs)

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

#### Returns

 [HotKeyItem](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/Input/HotKeyItem.cs)


