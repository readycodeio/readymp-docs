# Class Mod

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

```csharp
public class Mod : ServerModBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerModBase](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/ServerModBase.cs) ← 
[Mod](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Mod.md)

#### Inherited Members

[ServerModBase.InitializeAot\(IComponentRegistry\)](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/ServerModBase.cs), 
[ServerModBase.Initialize\(IServerDependencyContainer\)](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/ServerModBase.cs), 
[ServerModBase.RegisterComponents\(IComponentRegistry\)](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/ServerModBase.cs), 
[ServerModBase.Init\(\)](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/ServerModBase.cs), 
[ServerModBase.Services](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/ServerModBase.cs), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Mod__ctor"></a> Mod\(\)

```csharp
public Mod()
```

## Methods

### <a id="OblivionMp_Sdk_Serverside_Mod_Init"></a> Init\(\)

```csharp
protected override void Init()
```

### <a id="OblivionMp_Sdk_Serverside_Mod_RegisterComponents_ReadyM_Relay_Server_Sdk_Ecs_Components_IComponentRegistry_"></a> RegisterComponents\(IComponentRegistry\)

Any components defined in the mod must be registered here.

```csharp
protected override void RegisterComponents(IComponentRegistry registry)
```

#### Parameters

`registry` [IComponentRegistry](https://github.com/readycodeio/readym\-gameserver/blob/37d1ae4983c51b8e07919f4a5a8d0e86833a3225/src/ReadyM.Relay.Server.Sdk/Ecs/Components/IComponentRegistry.cs)


