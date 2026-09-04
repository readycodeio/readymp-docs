# Struct PvpStateComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the state of the PvP mode, including settings and in-game state.

```csharp
public struct PvpStateComponent : IComponent, INetSerializable, IDisposable
```

#### Implements

[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_AntiStallEnabled"></a> AntiStallEnabled

```csharp
public bool AntiStallEnabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_CheatsAllowed"></a> CheatsAllowed

```csharp
public bool CheatsAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_ConsumablesAllowed"></a> ConsumablesAllowed

```csharp
public bool ConsumablesAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_CurrentRound"></a> CurrentRound

```csharp
public int CurrentRound { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_EnemiesNgPlusLevel"></a> EnemiesNgPlusLevel

```csharp
public int EnemiesNgPlusLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_GourdAllowed"></a> GourdAllowed

```csharp
public bool GourdAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_ImmobilizeAllowed"></a> ImmobilizeAllowed

```csharp
public bool ImmobilizeAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_InPvP"></a> InPvP

```csharp
public bool InPvP { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_InTournament"></a> InTournament

```csharp
public bool InTournament { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_LevelId"></a> LevelId

```csharp
public int LevelId { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_PhantomRushAllowed"></a> PhantomRushAllowed

```csharp
public bool PhantomRushAllowed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_RoundWinnersCount"></a> RoundWinnersCount

```csharp
public int RoundWinnersCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_TournamentRounds"></a> TournamentRounds

```csharp
public int TournamentRounds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_AddRoundWinners_System_Int32__"></a> AddRoundWinners\(in int\)

```csharp
public void AddRoundWinners(in int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_Assign_ReadyM_Wukong_Common_ECS_Components_PvpStateComponent__"></a> Assign\(in PvpStateComponent\)

```csharp
public void Assign(in PvpStateComponent value)
```

#### Parameters

`value` [PvpStateComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PvpStateComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_ClearRoundWinners"></a> ClearRoundWinners\(\)

```csharp
public void ClearRoundWinners()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_ContainsRoundWinners_System_Int32__"></a> ContainsRoundWinners\(in int\)

```csharp
public bool ContainsRoundWinners(in int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_GetRoundWinners"></a> GetRoundWinners\(\)

```csharp
public NativeList<int>.ReadOnly GetRoundWinners()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-gameserver/blob/5cb8df5d89396468f833bf967ea2e9731c78dcf4/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/5cb8df5d89396468f833bf967ea2e9731c78dcf4/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_GetRoundWinners_System_Int32_"></a> GetRoundWinners\(int\)

```csharp
public int GetRoundWinners(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_InsertRoundWinners_System_Int32_System_Int32__"></a> InsertRoundWinners\(int, in int\)

```csharp
public void InsertRoundWinners(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_RemoveAtRoundWinners_System_Int32_"></a> RemoveAtRoundWinners\(int\)

```csharp
public int RemoveAtRoundWinners(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_SetLastRoundWinnerTeam_System_Int32_"></a> SetLastRoundWinnerTeam\(int\)

```csharp
public void SetLastRoundWinnerTeam(int teamId)
```

#### Parameters

`teamId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_SetRoundWinners_Yooni_Native_Container_NativeList_System_Int32___"></a> SetRoundWinners\(in NativeList<int\>\)

```csharp
public void SetRoundWinners(in NativeList<int> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-gameserver/blob/5cb8df5d89396468f833bf967ea2e9731c78dcf4/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_SetRoundWinners_System_Int32_System_Int32__"></a> SetRoundWinners\(int, in int\)

```csharp
public void SetRoundWinners(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)


