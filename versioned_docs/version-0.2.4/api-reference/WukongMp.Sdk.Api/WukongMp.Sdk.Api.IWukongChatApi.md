# Interface IWukongChatApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

API for interacting with the in-game chat.

```csharp
public interface IWukongChatApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongChatApi_SendPlayerMessage_System_String_"></a> SendPlayerMessage\(string\)

Sends a message to the in-game chat, as if the player wrote it.

```csharp
void SendPlayerMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to send.

### <a id="WukongMp_Sdk_Api_IWukongChatApi_SendServerMessage_System_String_"></a> SendServerMessage\(string\)

Sends a message to the in-game chat without a player name attached to it.

```csharp
void SendServerMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to send.

### <a id="WukongMp_Sdk_Api_IWukongChatApi_ShowLocalMessage_System_String_UnrealEngine_Runtime_FLinearColor_"></a> ShowLocalMessage\(string, FLinearColor\)

Adds a message to the in-game chat, visible only to the local player.

```csharp
void ShowLocalMessage(string message, FLinearColor color)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to add to the chat.

`color` FLinearColor

The color of the message in the chat.


