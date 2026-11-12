---
title: 'Class ServiceOrderException'
description: 'What services asked for cannot be done, because the order would have to come back on itself.'
---
# Class ServiceOrderException

Namespace: [ReadyM.SDK.Services](../ReadyM.SDK.Services/ReadyM.SDK.Services.md)  
Assembly: ReadyM.SDK.dll  

What services asked for cannot be done, because the order would have to come back on itself.

```csharp
public sealed class ServiceOrderException : InvalidOperationException, ISerializable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Exception](https://learn.microsoft.com/dotnet/api/system.exception) ← 
[SystemException](https://learn.microsoft.com/dotnet/api/system.systemexception) ← 
[InvalidOperationException](https://learn.microsoft.com/dotnet/api/system.invalidoperationexception) ← 
[ServiceOrderException](../ReadyM.SDK.Services/ReadyM.SDK.Services.ServiceOrderException.md)

#### Implements

[ISerializable](https://learn.microsoft.com/dotnet/api/system.runtime.serialization.iserializable)

#### Inherited Members

[Exception.GetBaseException\(\)](https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception), 
[Exception.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.exception.tostring), 
[Exception.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.exception.gettype), 
[Exception.TargetSite](https://learn.microsoft.com/dotnet/api/system.exception.targetsite), 
[Exception.Message](https://learn.microsoft.com/dotnet/api/system.exception.message), 
[Exception.Data](https://learn.microsoft.com/dotnet/api/system.exception.data), 
[Exception.InnerException](https://learn.microsoft.com/dotnet/api/system.exception.innerexception), 
[Exception.HelpLink](https://learn.microsoft.com/dotnet/api/system.exception.helplink), 
[Exception.Source](https://learn.microsoft.com/dotnet/api/system.exception.source), 
[Exception.HResult](https://learn.microsoft.com/dotnet/api/system.exception.hresult), 
[Exception.StackTrace](https://learn.microsoft.com/dotnet/api/system.exception.stacktrace), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_SDK_Services_ServiceOrderException__ctor_System_String_"></a> ServiceOrderException\(string\)

What services asked for cannot be done, because the order would have to come back on itself.

```csharp
public ServiceOrderException(string cycle)
```

#### Parameters

`cycle` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="ReadyM_SDK_Services_ServiceOrderException_Cycle"></a> Cycle

The loop, as the services in it.

```csharp
public string Cycle { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


