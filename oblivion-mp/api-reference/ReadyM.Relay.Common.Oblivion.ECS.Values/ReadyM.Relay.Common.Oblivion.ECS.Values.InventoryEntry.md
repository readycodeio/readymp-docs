# Struct InventoryEntry

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Represents an entry in a player's inventory, including the item form ID, quantity, and worn status.

```csharp
public struct InventoryEntry : INetSerializable
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Count"></a> Count

```csharp
public int Count
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_FormId"></a> FormId

```csharp
public FormId FormId
```

#### Field Value

 [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Worn"></a> Worn

```csharp
public byte Worn
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


