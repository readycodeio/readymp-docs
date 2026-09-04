# Struct PlayerScopeComponent

Namespace: [ReadyM.Api.Multiplayer.ECS.Components](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Holds the ID of the global player entity.

```csharp
public struct PlayerScopeComponent : IIndexedComponent<PlayerId>, IComponent, INetSerializable
```

#### Implements

[IIndexedComponent<PlayerId\>](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Index/IIndexedComponent.cs), 
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

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_PlayerId"></a> PlayerId

```csharp
public PlayerId PlayerId { get; set; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

## Methods

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_Assign_ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent__"></a> Assign\(in PlayerScopeComponent\)

```csharp
public void Assign(in PlayerScopeComponent value)
```

#### Parameters

`value` [PlayerScopeComponent](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.PlayerScopeComponent.md)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_GetIndexedValue"></a> GetIndexedValue\(\)

Returns the value of the indexed component field.

```csharp
public PlayerId GetIndexedValue()
```

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_PlayerIdNotifyChanged_System_Int32_"></a> PlayerIdNotifyChanged\(int\)

```csharp
public void PlayerIdNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_PlayerScopeComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


