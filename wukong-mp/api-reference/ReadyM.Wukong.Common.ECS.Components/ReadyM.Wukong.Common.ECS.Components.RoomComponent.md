# Struct RoomComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds room configuration.

```csharp
public struct RoomComponent : IComponent, INetSerializable
```

#### Implements

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

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_AntiStallEnabled"></a> AntiStallEnabled

```csharp
public bool AntiStallEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_ChatEnabled"></a> ChatEnabled

```csharp
public bool ChatEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_CheatsAllowed"></a> CheatsAllowed

```csharp
public bool CheatsAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_ConsumablesAllowed"></a> ConsumablesAllowed

```csharp
public bool ConsumablesAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_EnemiesNgPlusLevel"></a> EnemiesNgPlusLevel

```csharp
public int EnemiesNgPlusLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_GourdAllowed"></a> GourdAllowed

```csharp
public bool GourdAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_ImmobilizeAllowed"></a> ImmobilizeAllowed

```csharp
public bool ImmobilizeAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_LevelId"></a> LevelId

```csharp
public int LevelId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_PhantomRushAllowed"></a> PhantomRushAllowed

```csharp
public bool PhantomRushAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_TournamentRounds"></a> TournamentRounds

```csharp
public int TournamentRounds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_Assign_ReadyM_Wukong_Common_ECS_Components_RoomComponent__"></a> Assign\(in RoomComponent\)

```csharp
public void Assign(in RoomComponent value)
```

#### Parameters

`value` [RoomComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.RoomComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_RoomComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


