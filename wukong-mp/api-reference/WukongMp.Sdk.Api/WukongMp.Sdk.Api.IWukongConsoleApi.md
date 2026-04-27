# Interface IWukongConsoleApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

API for the in-game console (F1).

```csharp
public interface IWukongConsoleApi : IConsoleCommandRegistry
```

#### Implements

[IConsoleCommandRegistry](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Command/IConsoleCommandRegistry.cs)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_AddCommand_System_String_ReadyM_Api_Command_ConsoleCommand_System_Collections_Generic_IEnumerable_System_String__"></a> AddCommand\(string, ConsoleCommand, IEnumerable<string\>?\)

Registers a command to the in-game console.
The command will be available to all players in the session.

```csharp
void AddCommand(string commandName, ConsoleCommand command, IEnumerable<string>? availableFirstParams = null)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

The name of the command that has to be typed in the console to execute the command.

`command` [ConsoleCommand](https://github.com/readycodeio/readym\-gameserver/blob/daf080979857c414af94451f43a34b7da899696a/src/ReadyM.Api/Command/ConsoleCommand.cs)

Command handler

`availableFirstParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

If specified, the console will show these as suggestions for the first parameter of the command. This is useful for commands that take a fixed set of parameters, such as "spawn wolf_sentinel".

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_HasCommand_System_String_"></a> HasCommand\(string\)

Checks if a command with the given name is already registered in the console.

```csharp
bool HasCommand(string commandName)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Name of the command to check.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>true</code> if a command with the given name is registered, <code>false</code> otherwise.

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_LogMessage_System_String_"></a> LogMessage\(string\)

Logs a message to the in-game console. This can be used to provide feedback to the player after executing a command, or to log important information that the player should see.

```csharp
void LogMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)

The message to log.


