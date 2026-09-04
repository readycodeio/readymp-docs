# Class ServerRpc

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

```csharp
[ServerRpcFor(typeof(OblivionRpcContracts))]
public class ServerRpc : ServerRpcHandlersBase, IHostedService, IDisposable
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerRpcHandlersBase](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs) ← 
[ServerRpc](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.ServerRpc.md)

#### Implements

[IHostedService](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/DI/IHostedService.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[ServerRpcHandlersBase.InitRpc\(\)](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs), 
[ServerRpcHandlersBase.DeInitRpc\(\)](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs), 
[ServerRpcHandlersBase.OnScopeStart\(\)](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs), 
[ServerRpcHandlersBase.Dispose\(\)](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs), 
[ServerRpcHandlersBase.Rpc](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs), 
[ServerRpcHandlersBase.Serializer](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Rpc/ServerRpcHandlersBase.cs), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_ServerRpc__ctor_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_OblivionMp_Sdk_Serverside_OblivionArchetypes_Microsoft_Extensions_Logging_ILogger_"></a> ServerRpc\(EcsApi, OblivionArchetypes, ILogger\)

```csharp
public ServerRpc(EcsApi ecs, OblivionArchetypes archetypes, ILogger logger)
```

#### Parameters

`ecs` [EcsApi](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Ecs/EcsApi.cs)

`archetypes` [OblivionArchetypes](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.OblivionArchetypes.md)

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Methods

### <a id="OblivionMp_Sdk_Serverside_ServerRpc_DeInitRpc"></a> DeInitRpc\(\)

```csharp
protected override void DeInitRpc()
```

### <a id="OblivionMp_Sdk_Serverside_ServerRpc_InitRpc"></a> InitRpc\(\)

```csharp
protected override void InitRpc()
```


