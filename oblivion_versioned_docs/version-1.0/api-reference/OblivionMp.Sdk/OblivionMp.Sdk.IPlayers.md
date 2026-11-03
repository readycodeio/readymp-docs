---
title: 'Interface IPlayers'
description: 'The local player, and the other players in their area.'
---
# Interface IPlayers

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

The local player, and the other players in their area.

```csharp
public interface IPlayers
```

## Properties

### <a id="OblivionMp_Sdk_IPlayers_AreaPlayers"></a> AreaPlayers

Every character in the local player's area, theirs included; empty while they are in none.

```csharp
ScopedQuery<MainCharacter> AreaPlayers { get; }
```

#### Property Value

 ScopedQuery<MainCharacter\>

### <a id="OblivionMp_Sdk_IPlayers_LocalMainCharacter"></a> LocalMainCharacter

This player's character, or null before it exists.

```csharp
MainCharacter? LocalMainCharacter { get; }
```

#### Property Value

 MainCharacter?

### <a id="OblivionMp_Sdk_IPlayers_LocalPlayer"></a> LocalPlayer

This player's **Player**, or null before they have one.

```csharp
Player? LocalPlayer { get; }
```

#### Property Value

 Player?


