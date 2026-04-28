# Class ModBase

Namespace: [WukongMp.Sdk](../WukongMp.Sdk/WukongMp.Sdk.md)  
Assembly: WukongMp.Sdk.dll  

Base class for WukongMP SDK mods.
Each mod should have exactly one class extending from this, which will be instantiated by the mod loader.

```csharp
public abstract class ModBase : ICSharpModExV2, ICSharpModEx, ICSharpMod
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModBase](../WukongMp.Sdk/WukongMp.Sdk.ModBase.md)

#### Implements

[ICSharpModExV2](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBaseV2/ICSharpModExV2.cs), 
[ICSharpModEx](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/ICSharpModEx.cs), 
[ICSharpMod](https://github.com/readycodeio/embed\-csharp\-loader/blob/72a84f50456aa082e7ead2a681d861586cbde74c/CSharpModBase/ICSharpMod.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="WukongMp_Sdk_ModBase__ctor"></a> ModBase\(\)

```csharp
protected ModBase()
```

## Properties

### <a id="WukongMp_Sdk_ModBase_IsDebug"></a> IsDebug

Indicates whether the mod is running in a debug build.
Can be used to enable debug-only features or logging.

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

Mod name, used for logging and patching.

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="WukongMp_Sdk_ModBase_DeInit"></a> DeInit\(\)

Called by the mod loader on game closing.

```csharp
public virtual void DeInit()
```

### <a id="WukongMp_Sdk_ModBase_GetReloadContext"></a> GetReloadContext\(\)

Called by the mod loader.
Used in hot reload.

```csharp
public virtual object? GetReloadContext()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="WukongMp_Sdk_ModBase_Init"></a> Init\(\)

Called by the mod loader on game start.

```csharp
public void Init()
```

### <a id="WukongMp_Sdk_ModBase_Initialize_ReadyM_Api_DI_IDependencyContainer_"></a> Initialize\(IDependencyContainer\)

```csharp
protected abstract void Initialize(IDependencyContainer services)
```

#### Parameters

`services` [IDependencyContainer](https://github.com/readycodeio/readym\-gameserver/blob/025fbf075362214ad0f4c9a456c7d58004b374a4/src/ReadyM.Api/DI/IDependencyContainer.cs)

### <a id="WukongMp_Sdk_ModBase_LateInit"></a> LateInit\(\)

Called by the mod loader after all <code>Init</code> calls.

```csharp
public virtual void LateInit()
```

### <a id="WukongMp_Sdk_ModBase_Reload_System_Object_"></a> Reload\(object?\)

Called by the mod loader.
Used in hot reload.

```csharp
public virtual void Reload(object? context)
```

#### Parameters

`context` [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="WukongMp_Sdk_ModBase_SetLoggerFactory_Microsoft_Extensions_Logging_ILoggerFactory_"></a> SetLoggerFactory\(ILoggerFactory\)

Called by the mod loader.

```csharp
public void SetLoggerFactory(ILoggerFactory loggerFactory)
```

#### Parameters

`loggerFactory` [ILoggerFactory](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.iloggerfactory)


