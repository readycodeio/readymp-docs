# Class Logging

Namespace: [WukongMp.Api](../WukongMp.Api/WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

Provides static logging methods that can be used throughout the codebase without needing to inject a logger instance.

```csharp
public static class Logging
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Logging](../WukongMp.Api/WukongMp.Api.Logging.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="WukongMp_Api_Logging_LogCritical_System_String_System_Object___"></a> LogCritical\(string?, params object?\[\]\)

Logs a critical error message.
This method is active in all build configurations and is suitable for logging critical errors or exceptions that occur during the mod's operation, indicating a severe failure that may result in shutdown or data loss.

```csharp
public static void LogCritical(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in").

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template.

### <a id="WukongMp_Api_Logging_LogCritical_System_Exception_System_String_System_Object___"></a> LogCritical\(Exception?, string?, params object?\[\]\)

Logs a critical error message along with an exception.
This method is active in all build configurations and is suitable for logging critical errors or exceptions that occur during the mod's operation, providing additional context from the exception and indicating a severe failure that may result in shutdown or data loss.

```csharp
public static void LogCritical(Exception? ex, string? message = null, params object?[] args)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)?

The exception to log. This can be null if no exception is being logged, but the method will still log the message and arguments.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in"). This parameter is optional and can be null, in which case only the exception will be logged, but the log entry will still be marked as critical.

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template. This parameter is optional and can be empty if no additional context is needed.

### <a id="WukongMp_Api_Logging_LogDebug_System_String_System_Object___"></a> LogDebug\(string?, params object?\[\]\)

Logs a debug message.
This method is only active in DEBUG builds and will be stripped out in release builds to avoid performance overhead.

```csharp
public static void LogDebug(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in").

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template.

### <a id="WukongMp_Api_Logging_LogError_System_String_System_Object___"></a> LogError\(string?, params object?\[\]\)

Logs an error message.
This method is active in all build configurations and is suitable for logging errors or exceptions that occur during the mod's operation.

```csharp
public static void LogError(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in").

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template.

### <a id="WukongMp_Api_Logging_LogError_System_Exception_System_String_System_Object___"></a> LogError\(Exception?, string?, params object?\[\]\)

Logs an error message along with an exception.
This method is active in all build configurations and is suitable for logging errors or exceptions that occur during the mod's operation, providing additional context from the exception.

```csharp
public static void LogError(Exception? ex, string? message = null, params object?[] args)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)?

The exception to log. This can be null if no exception is being logged, but the method will still log the message and arguments.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in"). This parameter is optional and can be null, in which case only the exception will be logged.

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template. This parameter is optional and can be empty if no additional context is needed.

### <a id="WukongMp_Api_Logging_LogException_System_Exception_System_String_System_Object___"></a> LogException\(Exception, string?, params object?\[\]\)

Logs an exception with an optional message and arguments.
This method is a convenience wrapper around <code>LogError</code> that allows you to log an exception along with a custom message and structured arguments.
If the message is null, it will default to "An exception occurred".
This method is active in all build configurations and is suitable for logging exceptions that occur during the mod's operation, providing additional context from the exception and any relevant information through the message and arguments.

```csharp
public static void LogException(Exception ex, string? message = null, params object?[] args)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

The exception to log.

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

An optional message template to log alongside the exception. Use structured logging syntax (e.g., "User {UserId} logged in"). If <code>null</code>, a default message will be used.

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template. This parameter is optional and can be empty if no additional context is needed.

### <a id="WukongMp_Api_Logging_LogInformation_System_String_System_Object___"></a> LogInformation\(string?, params object?\[\]\)

Logs an informational message.
This method is active in all build configurations and is suitable for logging general information about the mod's operation.

```csharp
public static void LogInformation(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in").

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template.

### <a id="WukongMp_Api_Logging_LogTrace_System_String_System_Object___"></a> LogTrace\(string?, params object?\[\]\)

Logs a trace message.
This method is only active in DEBUG builds and will be stripped out in release builds to avoid performance overhead.

```csharp
public static void LogTrace(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in").

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template.

### <a id="WukongMp_Api_Logging_LogWarning_System_String_System_Object___"></a> LogWarning\(string?, params object?\[\]\)

Logs a warning message.
This method is active in all build configurations and is suitable for logging potential issues or important events that are not necessarily errors.

```csharp
public static void LogWarning(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

The message template to log. Use structured logging syntax (e.g., "User {UserId} logged in").

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

The arguments to be formatted into the message template.


