# Interface IWukongLocalApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongLocalApi
```

## Properties

### <a id="WukongMp_Sdk_Api_IWukongLocalApi_IsGameplayLevel"></a> IsGameplayLevel

Is the game currently in a gameplay level, as opposed to a menu or the like?

```csharp
bool IsGameplayLevel { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongLocalApi_AddChatMessage_System_String_UnrealEngine_Runtime_FLinearColor_"></a> AddChatMessage\(string, FLinearColor\)

Adds a message to the in-game chat, visible only to the local player.

```csharp
void AddChatMessage(string message, FLinearColor color)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to add to the chat.

`color` FLinearColor

The color of the message in the chat.

### <a id="WukongMp_Sdk_Api_IWukongLocalApi_HideInfoMessage"></a> HideInfoMessage\(\)

Hides the message currently being shown on the player's screen, if any.

```csharp
void HideInfoMessage()
```

### <a id="WukongMp_Sdk_Api_IWukongLocalApi_ShowInfoMessage_System_String_"></a> ShowInfoMessage\(string\)

Shows a message on the player's screen.

```csharp
void ShowInfoMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to show.

### <a id="WukongMp_Sdk_Api_IWukongLocalApi_ShowInfoMessage_System_String_System_Single_"></a> ShowInfoMessage\(string, float\)

Shows a message on the player's screen for a certain amount of time.

```csharp
void ShowInfoMessage(string message, float timeoutSeconds)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to show.

`timeoutSeconds` [float](https://learn.microsoft.com/dotnet/api/system.single)

The amount of time, in seconds, to show the message for.

### <a id="WukongMp_Sdk_Api_IWukongLocalApi_Wait_System_Threading_Tasks_Task_"></a> Wait\(Task\)

Waits for the given task to complete in a synchronous manner.

```csharp
void Wait(Task task)
```

#### Parameters

`task` [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task)

The task to wait for.


