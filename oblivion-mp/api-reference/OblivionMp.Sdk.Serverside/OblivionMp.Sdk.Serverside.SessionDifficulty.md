# Class SessionDifficulty

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

The difficulty every client in the session runs at.
Leaving a tier Unset keeps clients on the game's own default tier (Adept).

```csharp
public sealed class SessionDifficulty
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SessionDifficulty](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.SessionDifficulty.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_SessionDifficulty__ctor_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_"></a> SessionDifficulty\(EcsApi\)

The difficulty every client in the session runs at.
Leaving a tier Unset keeps clients on the game's own default tier (Adept).

```csharp
public SessionDifficulty(EcsApi ecs)
```

#### Parameters

`ecs` [EcsApi](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Relay.Server.Sdk/Ecs/EcsApi.cs)

## Methods

### <a id="OblivionMp_Sdk_Serverside_SessionDifficulty_Set_ReadyM_Relay_Common_Oblivion_ECS_Values_DifficultyTier_ReadyM_Relay_Common_Oblivion_ECS_Values_DifficultyTier_"></a> Set\(DifficultyTier, DifficultyTier\)

```csharp
public void Set(DifficultyTier damageDealt, DifficultyTier damageTaken)
```

#### Parameters

`damageDealt` [DifficultyTier](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/DifficultyTier.cs)

`damageTaken` [DifficultyTier](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/DifficultyTier.cs)


