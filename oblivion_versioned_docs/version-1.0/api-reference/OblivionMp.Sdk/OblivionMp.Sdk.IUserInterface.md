---
title: 'Interface IUserInterface'
description: 'On-screen messages, and the state of the game''s own menus.'
---
# Interface IUserInterface

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

On-screen messages, and the state of the game's own menus.

```csharp
public interface IUserInterface
```

## Methods

### <a id="OblivionMp_Sdk_IUserInterface_HideGameMessage"></a> HideGameMessage\(\)

Hides the game message.

```csharp
void HideGameMessage()
```

### <a id="OblivionMp_Sdk_IUserInterface_HideInfoMessage"></a> HideInfoMessage\(\)

Hides the informational message.

```csharp
void HideInfoMessage()
```

### <a id="OblivionMp_Sdk_IUserInterface_IsCharacterCreatorOpen"></a> IsCharacterCreatorOpen\(\)

Whether the character creator, class or birthsign menu is open. Follows about one frame after it opens.

```csharp
bool IsCharacterCreatorOpen()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_IUserInterface_ShowGameMessage_System_String_System_String_System_String_"></a> ShowGameMessage\(string, string, string\)

Shows a game message of up to three lines. **HideGameMessage** takes it down.

```csharp
void ShowGameMessage(string mainText, string secondText = "", string thirdText = "")
```

#### Parameters

`mainText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The first line.

`secondText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The second line, if any.

`thirdText` [string](https://learn.microsoft.com/dotnet/api/system.string)

The third line, if any.

### <a id="OblivionMp_Sdk_IUserInterface_ShowInfoMessage_System_String_"></a> ShowInfoMessage\(string\)

Shows an informational message. **HideInfoMessage** takes it down.

```csharp
void ShowInfoMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OblivionMp_Sdk_IUserInterface_ShowMessage_System_String_OblivionMpCSharpMod_MessagePosition_System_Single_"></a> ShowMessage\(string, MessagePosition, float\)

Shows a message on screen in the game's message widget.

```csharp
void ShowMessage(string message, MessagePosition position = MessagePosition.Center, float duration = 3)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to show.

`position` MessagePosition

Where on screen it appears.

`duration` [float](https://learn.microsoft.com/dotnet/api/system.single)

How long it stays, in seconds.


