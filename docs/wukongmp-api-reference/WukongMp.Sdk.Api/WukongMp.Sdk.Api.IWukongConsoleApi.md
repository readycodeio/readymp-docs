# Interface IWukongConsoleApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public interface IWukongConsoleApi : IConsoleCommandRegistry
```

#### Implements

[IConsoleCommandRegistry](https://github.com/readycodeio/readym\-gameserver/blob/00696f624f469568539043962995657719ef92c6/src/ReadyM.Api/Command/IConsoleCommandRegistry.cs)

## Methods

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_AddCommand_System_String_ReadyM_Api_Command_ConsoleCommand_System_Collections_Generic_IEnumerable_System_String__"></a> AddCommand\(string, ConsoleCommand, IEnumerable<string\>?\)

```csharp
void AddCommand(string commandName, ConsoleCommand command, IEnumerable<string>? availableFirstParams = null)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`command` [ConsoleCommand](https://github.com/readycodeio/readym\-gameserver/blob/00696f624f469568539043962995657719ef92c6/src/ReadyM.Api/Command/ConsoleCommand.cs)

`availableFirstParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_HasCommand_System_String_"></a> HasCommand\(string\)

```csharp
bool HasCommand(string commandName)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_Api_IWukongConsoleApi_WriteConsoleMessage_System_String_"></a> WriteConsoleMessage\(string\)

```csharp
void WriteConsoleMessage(string message)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)


