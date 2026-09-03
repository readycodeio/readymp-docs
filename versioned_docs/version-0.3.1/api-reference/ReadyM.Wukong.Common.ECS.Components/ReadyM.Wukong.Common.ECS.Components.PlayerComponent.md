# Struct PlayerComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

```csharp
public struct PlayerComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Wukong_Common_ECS_Components_PlayerComponent_Nickname"></a> Nickname

Globally persisted player nickname.
**NicknameComponent** attached to an area-scoped player character entity is recreated from this value on area change.

```csharp
public NativeString256 Nickname { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/5cb8df5d89396468f833bf967ea2e9731c78dcf4/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_PlayerComponent_TeamId"></a> TeamId

This is the players' Team ID, used in PvP, possibly in the future in creative mode
This is separate separated out from the TeamID on the main character which describes directly the team of the
underlying game actor.

```csharp
public int TeamId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_PlayerComponent_Assign_ReadyM_Wukong_Common_ECS_Components_PlayerComponent__"></a> Assign\(in PlayerComponent\)

```csharp
public void Assign(in PlayerComponent value)
```

#### Parameters

`value` [PlayerComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PlayerComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_PlayerComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_PlayerComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


