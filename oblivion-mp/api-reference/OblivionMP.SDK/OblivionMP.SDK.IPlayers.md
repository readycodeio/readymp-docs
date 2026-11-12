---
title: 'Interface IPlayers'
description: 'The local player, and the other players in their area.'
---
# Interface IPlayers

Namespace: [OblivionMP.SDK](../OblivionMP.SDK/OblivionMP.SDK.md)  
Assembly: OblivionMP.SDK.dll  

The local player, and the other players in their area.

```csharp
public interface IPlayers
```

## Properties

### <a id="OblivionMP_SDK_IPlayers_AreaPlayers"></a> AreaPlayers

Every character in the local player's area, theirs included; empty while they are in none.

```csharp
ScopedQuery<MainCharacter> AreaPlayers { get; }
```

#### Property Value

 ScopedQuery<MainCharacter\>

### <a id="OblivionMP_SDK_IPlayers_LocalMainCharacter"></a> LocalMainCharacter

This player's character, or null before it exists.

```csharp
MainCharacter? LocalMainCharacter { get; }
```

#### Property Value

 MainCharacter?

### <a id="OblivionMP_SDK_IPlayers_LocalPlayer"></a> LocalPlayer

This player's **Player**, or null before they have one.

```csharp
Player? LocalPlayer { get; }
```

#### Property Value

 Player?


