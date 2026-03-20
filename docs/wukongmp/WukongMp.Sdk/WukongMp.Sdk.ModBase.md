#  Class ModBase

Namespace: [WukongMp.Sdk](WukongMp.Sdk.md)  
Assembly: WukongMp.Sdk.dll  

```csharp
public abstract class ModBase : ICSharpModExV2, ICSharpModEx, ICSharpMod
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModBase](WukongMp.Sdk.ModBase.md)

#### Implements

[ICSharpModExV2](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBaseV2/ICSharpModExV2.cs), 
[ICSharpModEx](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/ICSharpModEx.cs), 
[ICSharpMod](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/ICSharpMod.cs)

#### Inherited Members

[object.Equals\(object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ReferenceEquals\(object, object\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Properties

### <a id="WukongMp_Sdk_ModBase_IsDebug"></a> IsDebug

```csharp
public bool IsDebug { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Sdk_ModBase_Logger"></a> Logger

```csharp
protected ILogger Logger { get; }
```

#### Property Value

 [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

### <a id="WukongMp_Sdk_ModBase_Name"></a> Name

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="WukongMp_Sdk_ModBase_Version"></a> Version

```csharp
public abstract string Version { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="WukongMp_Sdk_ModBase_DeInit"></a> DeInit\(\)

```csharp
public virtual void DeInit()
```

### <a id="WukongMp_Sdk_ModBase_GetReloadContext"></a> GetReloadContext\(\)

```csharp
public virtual object? GetReloadContext()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="WukongMp_Sdk_ModBase_Init"></a> Init\(\)

```csharp
public void Init()
```

### <a id="WukongMp_Sdk_ModBase_Initialize_WukongMp_Api_IDependencyContainer_"></a> Initialize\(IDependencyContainer\)

```csharp
protected virtual void Initialize(IDependencyContainer services)
```

#### Parameters

`services` IDependencyContainer

### <a id="WukongMp_Sdk_ModBase_LateInit"></a> LateInit\(\)

```csharp
public virtual void LateInit()
```

### <a id="WukongMp_Sdk_ModBase_Reload_System_Object_"></a> Reload\(object?\)

```csharp
public virtual void Reload(object? context)
```

#### Parameters

`context` [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="WukongMp_Sdk_ModBase_SetLoggerFactory_Microsoft_Extensions_Logging_ILoggerFactory_"></a> SetLoggerFactory\(ILoggerFactory\)

```csharp
public void SetLoggerFactory(ILoggerFactory loggerFactory)
```

#### Parameters

`loggerFactory` [ILoggerFactory](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.iloggerfactory)

