# Interface INetworkedComponent

Namespace: [ReadyM.Api.Multiplayer.ECS.Components](../ReadyM.Api.Multiplayer.ECS.Components/ReadyM.Api.Multiplayer.ECS.Components.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public interface INetworkedComponent : IComponent, INetSerializable
```

#### Implements

[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/ff21c8f9ce6f84554b2635333249e4420ec22aa1/src/ECS/IComponent.cs), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

## Properties

### <a id="ReadyM_Api_Multiplayer_ECS_Components_INetworkedComponent_IsDirty"></a> IsDirty

```csharp
bool IsDirty { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="ReadyM_Api_Multiplayer_ECS_Components_INetworkedComponent_ClearDirty"></a> ClearDirty\(\)

```csharp
void ClearDirty()
```

### <a id="ReadyM_Api_Multiplayer_ECS_Components_INetworkedComponent_ReadDelta_LiteNetLib_Utils_NetDataReader_"></a> ReadDelta\(NetDataReader\)

```csharp
void ReadDelta(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_INetworkedComponent_SkipDelta_LiteNetLib_Utils_NetDataReader_"></a> SkipDelta\(NetDataReader\)

```csharp
void SkipDelta(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Api_Multiplayer_ECS_Components_INetworkedComponent_WriteDelta_LiteNetLib_Utils_NetDataWriter_"></a> WriteDelta\(NetDataWriter\)

```csharp
void WriteDelta(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


