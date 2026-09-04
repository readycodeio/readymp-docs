# Struct MainCharacterComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player's ID.

```csharp
public struct MainCharacterComponent : IIndexedComponent<PlayerId>, IComponent, INetSerializable
```

#### Implements

[IIndexedComponent<PlayerId\>](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Index/IIndexedComponent.cs), 
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_MainCharacterComponent_PlayerId"></a> PlayerId

```csharp
public PlayerId PlayerId { get; set; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Api/Idents/PlayerId.cs)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_MainCharacterComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_MainCharacterComponent__"></a> Assign\(in MainCharacterComponent\)

```csharp
public void Assign(in MainCharacterComponent value)
```

#### Parameters

`value` [MainCharacterComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.MainCharacterComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_MainCharacterComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_MainCharacterComponent_GetIndexedValue"></a> GetIndexedValue\(\)

Returns the value of the indexed component field.

```csharp
public PlayerId GetIndexedValue()
```

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/f6694da55b756c544ae0c677331170e78d9f909e/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_MainCharacterComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


