# Interface IWukongConsoleApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

API for the in-game console (F1).

```csharp
public interface IWukongConsoleApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_AddCommand_System_String_ReadyM_Api_Command_ConsoleCommand_System_Collections_Generic_IEnumerable_System_String__"></a> AddCommand\(string, ConsoleCommand, IEnumerable<string\>?\)

Registers a console command that all players in the session can run.

```csharp
void AddCommand(string commandName, ConsoleCommand command, IEnumerable<string>? availableFirstParams = null)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Text the player types to invoke the command (e.g. "spawn").

`command` [ConsoleCommand](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Command/ConsoleCommand.cs)

Handler that runs when the command is executed.

`availableFirstParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

Optional fixed list of autocomplete suggestions for the command's first parameter.
The list is captured once at registration, so use this overload when the
suggestions never change, e.g. a known set of spawnables: "spawn wolf_sentinel".

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_AddCommand_System_String_ReadyM_Api_Command_ConsoleCommand_System_Func_System_Collections_Generic_IEnumerable_System_String___"></a> AddCommand\(string, ConsoleCommand, Func<IEnumerable<string\>\>\)

Registers a console command that all players in the session can run.

```csharp
void AddCommand(string commandName, ConsoleCommand command, Func<IEnumerable<string>> availableFirstParams)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

Text the player types to invoke the command (e.g. "kick").

`command` [ConsoleCommand](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Command/ConsoleCommand.cs)

Handler that runs when the command is executed.

`availableFirstParams` [Func](https://learn.microsoft.com/dotnet/api/system.func-1)<[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>\>

A factory that produces autocomplete suggestions for the command's first
parameter. It is invoked each time the console requests suggestions, so use this
overload when the values depend on live state, e.g. currently connected players
or spawned entities.

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


