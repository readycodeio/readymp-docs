# Struct SkipMovieData

Namespace: [ReadyM.Wukong.Common.Rpc](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.Rpc.md)  
Assembly: ReadyM.Wukong.Common.dll  

Data structure for the RPC which is used to vote on skipping a cutscene in the game.

```csharp
[DeriveINetSerializable(SerializableMode.Default)]
public struct SkipMovieData : INetSerializable
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

## Constructors

### <a id="ReadyM_Wukong_Common_Rpc_SkipMovieData__ctor_System_Int32_System_Int32_System_Int32_"></a> SkipMovieData\(int, int, int\)

Data structure for the RPC which is used to vote on skipping a cutscene in the game.

```csharp
public SkipMovieData(int sequenceId, int waitingPlayers, int allPlayers)
```

#### Parameters

`sequenceId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`waitingPlayers` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`allPlayers` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Fields

### <a id="ReadyM_Wukong_Common_Rpc_SkipMovieData_AllPlayers"></a> AllPlayers

```csharp
public int AllPlayers
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_Rpc_SkipMovieData_SequenceId"></a> SequenceId

```csharp
public int SequenceId
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_Rpc_SkipMovieData_WaitingPlayers"></a> WaitingPlayers

```csharp
public int WaitingPlayers
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_Rpc_SkipMovieData_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_Rpc_SkipMovieData_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)


