# Struct QuestEntry

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct QuestEntry : INetSerializable
```

#### Implements

INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Audience"></a> Audience

```csharp
public AudienceKind Audience
```

#### Field Value

 [AudienceKind](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AudienceKind.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_CurrentStage"></a> CurrentStage

```csharp
public byte CurrentStage
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Name"></a> Name

```csharp
public NativeString64 Name
```

#### Field Value

 [NativeString64](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString64.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Phase"></a> Phase

```csharp
public QuestPhase Phase
```

#### Field Value

 [QuestPhase](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestPhase.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_QuestId"></a> QuestId

```csharp
public uint QuestId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_StageText"></a> StageText

```csharp
public NativeString256 StageText
```

#### Field Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeString256.cs)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter


