# Struct AreaScopeComponent

Namespace: [ReadyM.Api.Multiplayer.ECS.Components](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public struct AreaScopeComponent : IIndexedComponent<AreaId>, IComponent, INetSerializable
```

#### Implements

[IIndexedComponent<AreaId\>](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Index/IIndexedComponent.cs), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent_AreaId"></a> AreaId

```csharp
public AreaId AreaId { get; set; }
```

#### Property Value

 [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Api/Idents/AreaId.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent_MasterClient"></a> MasterClient

```csharp
public PlayerId MasterClient { get; set; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Api/Idents/PlayerId.cs)

## Methods

### <a id="ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent_Assign_ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent__"></a> Assign\(in AreaScopeComponent\)

```csharp
public void Assign(in AreaScopeComponent value)
```

#### Parameters

`value` [AreaScopeComponent](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.AreaScopeComponent.md)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent_GetIndexedValue"></a> GetIndexedValue\(\)

Returns the value of the indexed component field.

```csharp
public AreaId GetIndexedValue()
```

#### Returns

 [AreaId](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Api/Idents/AreaId.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_AreaScopeComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


