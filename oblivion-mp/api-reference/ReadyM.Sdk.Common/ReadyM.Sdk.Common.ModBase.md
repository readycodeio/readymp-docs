# Class ModBase

Namespace: [ReadyM.Sdk.Common](../ReadyM.Sdk.Common/ReadyM.Sdk.Common.md)  
Assembly: ReadyM.Sdk.Common.dll  

Base class for OblivionMp SDK mods.
Each mod should have exactly one class extending from this, which will be instantiated by the mod loader.

```csharp
public abstract class ModBase : ICSharpMod
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModBase](../ReadyM.Sdk.Common/ReadyM.Sdk.Common.ModBase.md)

#### Implements

[ICSharpMod](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Modloader/Mods/ICsharpMod.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Sdk_Common_ModBase__ctor"></a> ModBase\(\)

```csharp
protected ModBase()
```

## Properties

### <a id="ReadyM_Sdk_Common_ModBase_IsDebug"></a> IsDebug

Indicates whether the mod is running in a debug build.
Can be used to enable debug-only features or logging.

```csharp
public bool IsDebug { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Sdk_Common_ModBase_Logger"></a> Logger

```csharp
protected ILogger Logger { get; set; }
```

#### Property Value

 [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

### <a id="ReadyM_Sdk_Common_ModBase_ModDirectory"></a> ModDirectory

This mod's own folder under the mods directory, which holds its assemblies, manifest and any
config files.

```csharp
protected string ModDirectory { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Sdk_Common_ModBase_Name"></a> Name

The mod name

```csharp
public abstract string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="ReadyM_Sdk_Common_ModBase_DeInit"></a> DeInit\(\)

Called by the mod loader on game closing.

```csharp
public virtual void DeInit()
```

### <a id="ReadyM_Sdk_Common_ModBase_GetReloadContext"></a> GetReloadContext\(\)

```csharp
public virtual object? GetReloadContext()
```

#### Returns

 [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="ReadyM_Sdk_Common_ModBase_Init_ReadyM_Api_DI_IDependencyContainer_"></a> Init\(IDependencyContainer\)

```csharp
public virtual void Init(IDependencyContainer services)
```

#### Parameters

`services` [IDependencyContainer](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/DI/IDependencyContainer.cs)

### <a id="ReadyM_Sdk_Common_ModBase_RegisterArchetypes_System_Action_ReadyM_Api_ECS_Worlds_IArchetypeRegistry__"></a> RegisterArchetypes\(Action<IArchetypeRegistry\>\)

Register new archetypes or modify existing ones.

```csharp
protected void RegisterArchetypes(Action<IArchetypeRegistry> configure)
```

#### Parameters

`configure` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[IArchetypeRegistry](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/ECS/Worlds/IArchetypeRegistry.cs)\>

Runs once while the ECS schema is built.

### <a id="ReadyM_Sdk_Common_ModBase_RegisterConfig__1_System_String_"></a> RegisterConfig<TConfig\>\(string\)

Reads <code class="paramref">fileName</code> from this mod's folder and registers the result as a singleton,
so other classes can take it as a constructor parameter. Opt in by calling this; nothing is read
or written for a mod that does not.

```csharp
protected void RegisterConfig<TConfig>(string fileName = "config.json") where TConfig : class, new()
```

#### Parameters

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Type Parameters

`TConfig` 

#### Remarks

A missing file yields defaults. A file that exists but does not parse, or that carries a key the
config type does not declare, throws **ModConfigException**.

### <a id="ReadyM_Sdk_Common_ModBase_RegisterServices_ReadyM_Api_DI_IDependencyContainer_"></a> RegisterServices\(IDependencyContainer\)

```csharp
protected abstract void RegisterServices(IDependencyContainer services)
```

#### Parameters

`services` [IDependencyContainer](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/DI/IDependencyContainer.cs)

### <a id="ReadyM_Sdk_Common_ModBase_Reload_System_Object_"></a> Reload\(object?\)

```csharp
public virtual void Reload(object? context)
```

#### Parameters

`context` [object](https://learn.microsoft.com/dotnet/api/system.object)?

### <a id="ReadyM_Sdk_Common_ModBase_SetModDirectory_System_String_"></a> SetModDirectory\(string\)

Called by the mod loader, before **IDependencyContainer)**.

```csharp
public void SetModDirectory(string directory)
```

#### Parameters

`directory` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Sdk_Common_ModBase_Start"></a> Start\(\)

Called after all mods have called RegisterServices.

```csharp
public virtual void Start()
```


