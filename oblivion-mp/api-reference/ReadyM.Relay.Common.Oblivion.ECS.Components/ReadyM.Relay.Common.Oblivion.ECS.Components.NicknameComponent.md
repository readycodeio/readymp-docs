# Struct NicknameComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player's nickname.

```csharp
public struct NicknameComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_NicknameComponent_Nickname"></a> Nickname

```csharp
public NativeString256 Nickname { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/b6eacba3e1df560975dcddbb4d4e3c5b49398de9/src/YooniCSharp/Native/Container/NativeString256.cs)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_NicknameComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_NicknameComponent__"></a> Assign\(in NicknameComponent\)

```csharp
public void Assign(in NicknameComponent value)
```

#### Parameters

`value` [NicknameComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.NicknameComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_NicknameComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_NicknameComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


