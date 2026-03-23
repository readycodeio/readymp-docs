# Class Logging

Namespace: [WukongMp.Api](../WukongMp.Api/WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

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

```csharp
public static void LogCritical(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogCritical_System_Exception_System_String_System_Object___"></a> LogCritical\(Exception?, string?, params object?\[\]\)

```csharp
public static void LogCritical(Exception? ex, string? message = null, params object?[] args)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)?

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogDebug_System_String_System_Object___"></a> LogDebug\(string?, params object?\[\]\)

```csharp
public static void LogDebug(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogError_System_String_System_Object___"></a> LogError\(string?, params object?\[\]\)

```csharp
public static void LogError(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogError_System_Exception_System_String_System_Object___"></a> LogError\(Exception?, string?, params object?\[\]\)

```csharp
public static void LogError(Exception? ex, string? message = null, params object?[] args)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)?

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogException_System_Exception_System_String_System_Object___"></a> LogException\(Exception, string?, params object?\[\]\)

```csharp
public static void LogException(Exception ex, string? message = null, params object?[] args)
```

#### Parameters

`ex` [Exception](https://learn.microsoft.com/dotnet/api/system.exception)

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogInformation_System_String_System_Object___"></a> LogInformation\(string?, params object?\[\]\)

```csharp
public static void LogInformation(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogNull_System_String_"></a> LogNull\(string\)

```csharp
public static void LogNull(string propertyName)
```

#### Parameters

`propertyName` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Api_Logging_LogTrace_System_String_System_Object___"></a> LogTrace\(string?, params object?\[\]\)

```csharp
public static void LogTrace(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]

### <a id="WukongMp_Api_Logging_LogWarning_System_String_System_Object___"></a> LogWarning\(string?, params object?\[\]\)

```csharp
public static void LogWarning(string? message, params object?[] args)
```

#### Parameters

`message` [string](https://learn.microsoft.com/dotnet/api/system.string)?

`args` [object](https://learn.microsoft.com/dotnet/api/system.object)?\[\]


