# Interface IWukongWidgetApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongWidgetApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_AddChatMessage_System_String_UnrealEngine_Runtime_FLinearColor_"></a> AddChatMessage\(string, FLinearColor\)

```csharp
void AddChatMessage(string message, FLinearColor color)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` FLinearColor

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_AddMessageToConsole_System_String_"></a> AddMessageToConsole\(string\)

```csharp
void AddMessageToConsole(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_HideInfoMessage"></a> HideInfoMessage\(\)

```csharp
void HideInfoMessage()
```

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_HideTip"></a> HideTip\(\)

```csharp
void HideTip()
```

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_SetTimerText_System_Int32_System_Int32_"></a> SetTimerText\(int, int\)

```csharp
void SetTimerText(int initialMinutes, int initialSeconds)
```

#### Parameters

`initialMinutes` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`initialSeconds` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_SetTimerVisibility_System_Boolean_"></a> SetTimerVisibility\(bool\)

```csharp
void SetTimerVisibility(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ShowInGameWidgets_System_Boolean_"></a> ShowInGameWidgets\(bool\)

```csharp
void ShowInGameWidgets(bool isOnGameplayLevel)
```

#### Parameters

`isOnGameplayLevel` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ShowInfoMessage_System_String_"></a> ShowInfoMessage\(string\)

```csharp
void ShowInfoMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ShowTip_System_String_System_Boolean_"></a> ShowTip\(string, bool\)

```csharp
void ShowTip(string tip, bool autoHide)
```

#### Parameters

`tip` [string](https://learn.microsoft.com/dotnet/api/system.string)

`autoHide` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongWidgetApi_ToggleCommandVisibility"></a> ToggleCommandVisibility\(\)

```csharp
void ToggleCommandVisibility()
```


