# Struct DifficultyComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the difficulty the server dictates for every client in the session.

```csharp
public struct DifficultyComponent : IWorldAuthoritative, IComponent, INetSerializable
```

#### Implements

[IWorldAuthoritative](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Mapping/Tags/IWorldAuthoritative.cs), 
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_DamageDealt"></a> DamageDealt

```csharp
public DifficultyTier DamageDealt { get; set; }
```

#### Property Value

 [DifficultyTier](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DifficultyTier.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_DamageTaken"></a> DamageTaken

```csharp
public DifficultyTier DamageTaken { get; set; }
```

#### Property Value

 [DifficultyTier](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DifficultyTier.md)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent__"></a> Assign\(in DifficultyComponent\)

```csharp
public void Assign(in DifficultyComponent value)
```

#### Parameters

`value` [DifficultyComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.DifficultyComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_DamageDealtNotifyChanged_System_Int32_"></a> DamageDealtNotifyChanged\(int\)

```csharp
public void DamageDealtNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_DamageTakenNotifyChanged_System_Int32_"></a> DamageTakenNotifyChanged\(int\)

```csharp
public void DamageTakenNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DifficultyComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


