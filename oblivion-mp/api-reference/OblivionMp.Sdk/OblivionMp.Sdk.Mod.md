# Class Mod

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public class Mod : CommonModBase, ICSharpMod
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[CommonModBase](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs) ← 
[Mod](../OblivionMp.Sdk/OblivionMp.Sdk.Mod.md)

#### Implements

[ICSharpMod](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Modloader/Mods/ICsharpMod.cs)

#### Inherited Members

[CommonModBase.Init\(IDependencyContainer\)](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.RegisterServices\(IDependencyContainer\)](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.Start\(\)](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.DeInit\(\)](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.GetReloadContext\(\)](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.Reload\(object?\)](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.Logger](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.Name](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[CommonModBase.IsDebug](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/CommonModBase.cs), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Mod__ctor"></a> Mod\(\)

```csharp
public Mod()
```

## Properties

### <a id="OblivionMp_Sdk_Mod_Name"></a> Name

The mod name

```csharp
public override string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="OblivionMp_Sdk_Mod_RegisterServices_ReadyM_Api_DI_IDependencyContainer_"></a> RegisterServices\(IDependencyContainer\)

```csharp
protected override void RegisterServices(IDependencyContainer services)
```

#### Parameters

`services` [IDependencyContainer](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Api/DI/IDependencyContainer.cs)

### <a id="OblivionMp_Sdk_Mod_Start"></a> Start\(\)

Called after all mods have called RegisterServices.

```csharp
public override void Start()
```


