# Class Mod

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public class Mod : ModBase, ICSharpMod
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ModBase](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs) ← 
[Mod](../OblivionMp.Sdk/OblivionMp.Sdk.Mod.md)

#### Implements

[ICSharpMod](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Modloader/Mods/ICsharpMod.cs)

#### Inherited Members

[ModBase.Init\(IDependencyContainer\)](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.RegisterServices\(IDependencyContainer\)](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.Start\(\)](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.DeInit\(\)](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.GetReloadContext\(\)](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.Reload\(object?\)](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.Logger](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.Name](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
[ModBase.IsDebug](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Sdk.Common/ModBase.cs), 
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

`services` [IDependencyContainer](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/ReadyM.Api/DI/IDependencyContainer.cs)

### <a id="OblivionMp_Sdk_Mod_Start"></a> Start\(\)

Called after all mods have called RegisterServices.

```csharp
public override void Start()
```


