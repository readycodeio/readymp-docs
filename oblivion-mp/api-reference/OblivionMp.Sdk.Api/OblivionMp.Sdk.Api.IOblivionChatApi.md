# Interface IOblivionChatApi

Namespace: [OblivionMp.Sdk.Api](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.md)  
Assembly: OblivionMp.Sdk.dll  

API for interacting with the in-game chat.

```csharp
public interface IOblivionChatApi
```

## Methods

### <a id="OblivionMp_Sdk_Api_IOblivionChatApi_ShowLocalMessage_System_String_OblivionMpCSharpMod_Values_Color_"></a> ShowLocalMessage\(string, Color\)

Adds a message to the in-game chat, visible only to the local player.

```csharp
void ShowLocalMessage(string message, Color color)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to add to the chat.

`color` [Color](https://github.com/readycodeio/oblivion\-mod/blob/8c9d037e80e4e780bc5bf21efb97ab8c5320495b/OblivionMpCSharpMod/Values/Color.cs)

The color of the message in the chat.


