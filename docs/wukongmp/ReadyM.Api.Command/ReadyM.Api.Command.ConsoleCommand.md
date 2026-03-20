#  Struct ConsoleCommand

Namespace: [ReadyM.Api.Command](ReadyM.Api.Command.md)  
Assembly: ReadyM.Api.dll  

```csharp
public readonly struct ConsoleCommand
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Command_ConsoleCommand__ctor_System_Delegate_System_Int32_System_Nullable_System_Int32__System_Collections_Generic_IReadOnlyList_ReadyM_Api_Command_ConsoleCommand_ParamInfo__System_Type_System_Boolean_"></a> ConsoleCommand\(Delegate, int, int?, IReadOnlyList<ParamInfo\>, Type?, bool\)

```csharp
public ConsoleCommand(Delegate handler, int minArgCount, int? maxArgCount, IReadOnlyList<ConsoleCommand.ParamInfo> args, Type? repeatingParam, bool isDebugOnly)
```

#### Parameters

`handler` [Delegate](https://learn.microsoft.com/dotnet/api/system.delegate)

`minArgCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`maxArgCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)?

`args` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ConsoleCommand](ReadyM.Api.Command.ConsoleCommand.md).[ParamInfo](ReadyM.Api.Command.ConsoleCommand.ParamInfo.md)\>

`repeatingParam` [Type](https://learn.microsoft.com/dotnet/api/system.type)?

`isDebugOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### <a id="ReadyM_Api_Command_ConsoleCommand_Handler"></a> Handler

```csharp
public readonly Delegate Handler
```

#### Field Value

 [Delegate](https://learn.microsoft.com/dotnet/api/system.delegate)

### <a id="ReadyM_Api_Command_ConsoleCommand_IsDebugOnly"></a> IsDebugOnly

```csharp
public readonly bool IsDebugOnly
```

#### Field Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Command_ConsoleCommand_MaxArgCount"></a> MaxArgCount

```csharp
public readonly int? MaxArgCount
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)?

### <a id="ReadyM_Api_Command_ConsoleCommand_MinArgCount"></a> MinArgCount

```csharp
public readonly int MinArgCount
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Command_ConsoleCommand_Parameters"></a> Parameters

```csharp
public readonly IReadOnlyList<ConsoleCommand.ParamInfo> Parameters
```

#### Field Value

 [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[ConsoleCommand](ReadyM.Api.Command.ConsoleCommand.md).[ParamInfo](ReadyM.Api.Command.ConsoleCommand.ParamInfo.md)\>

### <a id="ReadyM_Api_Command_ConsoleCommand_RepeatingParam"></a> RepeatingParam

```csharp
public readonly Type? RepeatingParam
```

#### Field Value

 [Type](https://learn.microsoft.com/dotnet/api/system.type)?

## Methods

### <a id="ReadyM_Api_Command_ConsoleCommand_Create_System_Delegate_System_Boolean_"></a> Create\(Delegate, bool\)

```csharp
public static ConsoleCommand Create(Delegate handler, bool isDebugOnly = false)
```

#### Parameters

`handler` [Delegate](https://learn.microsoft.com/dotnet/api/system.delegate)

`isDebugOnly` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Returns

 [ConsoleCommand](ReadyM.Api.Command.ConsoleCommand.md)

### <a id="ReadyM_Api_Command_ConsoleCommand_Invoke_System_Collections_Generic_IReadOnlyList_System_Object__"></a> Invoke\(IReadOnlyList<object?\>\)

```csharp
public void Invoke(IReadOnlyList<object?> args)
```

#### Parameters

`args` [IReadOnlyList](https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist\-1)<[object](https://learn.microsoft.com/dotnet/api/system.object)?\>

