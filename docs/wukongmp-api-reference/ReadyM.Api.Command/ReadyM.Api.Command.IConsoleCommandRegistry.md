# Interface IConsoleCommandRegistry

Namespace: [ReadyM.Api.Command](../ReadyM.Api.Command/ReadyM.Api.Command.md)  
Assembly: ReadyM.Api.dll  

```csharp
public interface IConsoleCommandRegistry
```

## Methods

### <a id="ReadyM_Api_Command_IConsoleCommandRegistry_AddCommand_System_String_ReadyM_Api_Command_ConsoleCommand_System_Collections_Generic_IEnumerable_System_String__"></a> AddCommand\(string, ConsoleCommand, IEnumerable<string\>?\)

```csharp
void AddCommand(string commandName, ConsoleCommand command, IEnumerable<string>? availableFirstParams = null)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`command` [ConsoleCommand](../ReadyM.Api.Command/ReadyM.Api.Command.ConsoleCommand.md)

`availableFirstParams` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[string](https://learn.microsoft.com/dotnet/api/system.string)\>?

### <a id="ReadyM_Api_Command_IConsoleCommandRegistry_HasCommand_System_String_"></a> HasCommand\(string\)

```csharp
bool HasCommand(string commandName)
```

#### Parameters

`commandName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


