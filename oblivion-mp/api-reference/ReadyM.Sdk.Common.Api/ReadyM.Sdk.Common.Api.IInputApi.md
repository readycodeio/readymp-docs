# Interface IInputApi

Namespace: [ReadyM.Sdk.Common.Api](../ReadyM.Sdk.Common.Api/ReadyM.Sdk.Common.Api.md)  
Assembly: ReadyM.Sdk.Common.dll  

Provides methods related to input, such as registering key binds.

```csharp
public interface IInputApi
```

## Methods

### <a id="ReadyM_Sdk_Common_Api_IInputApi_CanApplyInput"></a> CanApplyInput\(\)

Determines whether keyboard input can currently be applied (i.e., not blocked by active text fields or menus).

```csharp
bool CanApplyInput()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if keyboard input is not blocked by active text fields and menus; otherwise, <code>false</code>.

### <a id="ReadyM_Sdk_Common_Api_IInputApi_RegisterKeyBind_ReadyM_Sdk_Common_Input_Key_System_Action_"></a> RegisterKeyBind\(Key, Action\)

Registers a key bind with the specified key and action.

```csharp
void RegisterKeyBind(Key key, Action action)
```

#### Parameters

`key` [Key](../ReadyM.Sdk.Common.Input/ReadyM.Sdk.Common.Input.Key.md)

The key to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

The action to execute when the key is pressed.

### <a id="ReadyM_Sdk_Common_Api_IInputApi_RegisterKeyBind_ReadyM_Sdk_Common_Input_ModifierKeys_ReadyM_Sdk_Common_Input_Key_System_Action_"></a> RegisterKeyBind\(ModifierKeys, Key, Action\)

Registers a key bind with the specified modifier keys, key, and action.

```csharp
void RegisterKeyBind(ModifierKeys modifiers, Key key, Action action)
```

#### Parameters

`modifiers` [ModifierKeys](../ReadyM.Sdk.Common.Input/ReadyM.Sdk.Common.Input.ModifierKeys.md)

The modifier keys (e.g., Ctrl, Alt, Shift).

`key` [Key](../ReadyM.Sdk.Common.Input/ReadyM.Sdk.Common.Input.Key.md)

The key to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

The action to execute when the key combination is pressed.


