# Class OblivionRpcContracts

Namespace: [ReadyM.Relay.Common.Oblivion.Rpc](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public static class OblivionRpcContracts
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OblivionRpcContracts](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.OblivionRpcContracts.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_OblivionRpcContracts_DiscoveredCellActors_ReadyM_Api_Idents_FullCellId_ReadyM_Relay_Common_Oblivion_Rpc_DiscoveredCellActorsData_"></a> DiscoveredCellActors\(FullCellId, DiscoveredCellActorsData\)

```csharp
[ClientToServer]
public static void DiscoveredCellActors(FullCellId cellId, DiscoveredCellActorsData actors)
```

#### Parameters

`cellId` [FullCellId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/FullCellId.cs)

`actors` [DiscoveredCellActorsData](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.DiscoveredCellActorsData.md)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_OblivionRpcContracts_MarkCellDiscovered_ReadyM_Api_Idents_FullCellId_"></a> MarkCellDiscovered\(FullCellId\)

```csharp
[ClientToServer]
public static void MarkCellDiscovered(FullCellId cellId)
```

#### Parameters

`cellId` [FullCellId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/FullCellId.cs)


