# Struct DialogueTopic

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct DialogueTopic : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_Name"></a> Name

```csharp
public NativeString64 Name
```

#### Field Value

 [NativeString64](https://github.com/readycodeio/readym\-gameserver/blob/b6eacba3e1df560975dcddbb4d4e3c5b49398de9/src/YooniCSharp/Native/Container/NativeString64.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_QuestId"></a> QuestId

```csharp
public uint QuestId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_TopicId"></a> TopicId

```csharp
public uint TopicId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


