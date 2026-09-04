# Interface IOblivionGameMessageApi

Namespace: [OblivionMp.Sdk.Api](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.md)  
Assembly: OblivionMp.Sdk.dll  

Provides methods related to in-game info messages.

```csharp
public interface IOblivionGameMessageApi
```

## Methods

### <a id="OblivionMp_Sdk_Api_IOblivionGameMessageApi_HideGameMessage"></a> HideGameMessage\(\)

Hides the currently displayed game message.

```csharp
void HideGameMessage()
```

### <a id="OblivionMp_Sdk_Api_IOblivionGameMessageApi_HideInfoMessage"></a> HideInfoMessage\(\)

Hides the currently displayed informational message.

```csharp
void HideInfoMessage()
```

### <a id="OblivionMp_Sdk_Api_IOblivionGameMessageApi_ShowGameMessage_System_String_System_String_System_String_"></a> ShowGameMessage\(string, string, string\)

Displays a multi-line game message on the screen.

```csharp
void ShowGameMessage(string mainText, string secondText = "", string thirdText = "")
```

#### Parameters

`mainText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The primary line of the message.

`secondText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The second line of the message. Optional.

`thirdText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The third line of the message. Optional.

### <a id="OblivionMp_Sdk_Api_IOblivionGameMessageApi_ShowInfoMessage_System_String_"></a> ShowInfoMessage\(string\)

Displays an informational message on the screen.

```csharp
void ShowInfoMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The informational message to display.

### <a id="OblivionMp_Sdk_Api_IOblivionGameMessageApi_ShowMessage_System_String_OblivionMpCSharpMod_MessagePosition_System_Single_"></a> ShowMessage\(string, MessagePosition, float\)

Displays a message on the screen using the game UI widget.

```csharp
void ShowMessage(string message, MessagePosition position = MessagePosition.Center, float duration = 3)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to display.

`position` [MessagePosition](https://github.com/readycodeio/oblivion\-mod/blob/8c9d037e80e4e780bc5bf21efb97ab8c5320495b/OblivionMpCSharpMod/NativeHudControl.cs)

Where on the screen the message should appear. Defaults to **Center**.

`duration` [float](https://learn.microsoft.com/dotnet/api/system.single)

How long, in seconds, the message stays on screen. Defaults to 3 seconds.


