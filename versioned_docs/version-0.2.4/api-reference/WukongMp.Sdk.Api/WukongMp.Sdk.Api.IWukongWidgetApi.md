# Interface IWukongWidgetApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides methods related to in-game widgets, such as chat messages, info messages, tips, and timers.

```csharp
public interface IWukongWidgetApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_AddMessageToConsole_System_String_"></a> AddMessageToConsole\(string\)

Adds a message to the in-game console.

```csharp
void AddMessageToConsole(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to add to the console.

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_HideInfoMessage"></a> HideInfoMessage\(\)

Hides the currently displayed informational message.

```csharp
void HideInfoMessage()
```

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_HideTip"></a> HideTip\(\)

Hides the currently displayed tip.

```csharp
void HideTip()
```

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_SetCountdownText_System_Int32_System_Int32_"></a> SetCountdownText\(int, int\)

Sets the value of the countdown timer widget.

```csharp
void SetCountdownText(int initialMinutes, int initialSeconds)
```

#### Parameters

`initialMinutes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The initial minutes to display on the countdown timer.

`initialSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The initial seconds to display on the countdown timer.

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_SetCountdownVisibility_System_Boolean_"></a> SetCountdownVisibility\(bool\)

Sets the visibility of the countdown timer widget.

```csharp
void SetCountdownVisibility(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the countdown timer should be visible.

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ShowInGameWidgets_System_Boolean_"></a> ShowInGameWidgets\(bool\)

Shows or hides in-game widgets based on whether the player is on the gameplay level.

```csharp
void ShowInGameWidgets(bool isOnGameplayLevel)
```

#### Parameters

`isOnGameplayLevel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the player is on a gameplay level.

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ShowInfoMessage_System_String_"></a> ShowInfoMessage\(string\)

Displays an informational message on the screen.

```csharp
void ShowInfoMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The informational message to display.

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ShowTip_System_String_System_Boolean_"></a> ShowTip\(string, bool\)

Displays a tip on the screen using the game UI tip widget.

```csharp
void ShowTip(string tip, bool autoHide)
```

#### Parameters

`tip` [string](https://learn.microsoft.com/dotnet/api/system.string)

The tip to display.

`autoHide` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Indicates whether the tip should automatically hide after a duration.

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ToggleCommandVisibility"></a> ToggleCommandVisibility\(\)

Toggles the visibility of the command console.

```csharp
void ToggleCommandVisibility()
```


