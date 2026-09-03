# Struct CellScopeComponent

Namespace: [ReadyM.Api.Multiplayer.ECS.Components](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public struct CellScopeComponent : IIndexedComponent<FullCellId>, IComponent, INetSerializable
```

#### Implements

[IIndexedComponent<FullCellId\>](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Index/IIndexedComponent.cs), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_FullCellId"></a> FullCellId

```csharp
public FullCellId FullCellId { get; set; }
```

#### Property Value

 [FullCellId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/FullCellId.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_MasterClient"></a> MasterClient

```csharp
public PlayerId MasterClient { get; set; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

## Methods

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_Assign_ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent__"></a> Assign\(in CellScopeComponent\)

```csharp
public void Assign(in CellScopeComponent value)
```

#### Parameters

`value` [CellScopeComponent](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.CellScopeComponent.md)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_FullCellIdNotifyChanged_System_Int32_"></a> FullCellIdNotifyChanged\(int\)

```csharp
public void FullCellIdNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_GetIndexedValue"></a> GetIndexedValue\(\)

Returns the value of the indexed component field.

```csharp
public FullCellId GetIndexedValue()
```

#### Returns

 [FullCellId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/FullCellId.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_MasterClientNotifyChanged_System_Int32_"></a> MasterClientNotifyChanged\(int\)

```csharp
public void MasterClientNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_CellScopeComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


