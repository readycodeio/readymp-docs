# Struct PvpStateComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the state of the PvP mode, including settings and in-game state.

```csharp
public struct PvpStateComponent : IComponent, INetSerializable
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

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_RoundWinners"></a> RoundWinners

```csharp
public IEnumerable<int> RoundWinners { get; set; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_RoundWinnersEncoded"></a> RoundWinnersEncoded

```csharp
public string? RoundWinnersEncoded { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_TournamentRounds"></a> TournamentRounds

```csharp
public int TournamentRounds { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_Assign_ReadyM_Wukong_Common_ECS_Components_PvpStateComponent__"></a> Assign\(in PvpStateComponent\)

```csharp
public void Assign(in PvpStateComponent value)
```

#### Parameters

`value` [PvpStateComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.PvpStateComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_PvpStateComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

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


