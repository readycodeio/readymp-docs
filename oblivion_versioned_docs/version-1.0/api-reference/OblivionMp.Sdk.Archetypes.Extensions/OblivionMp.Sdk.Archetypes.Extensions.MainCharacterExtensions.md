---
title: 'Class MainCharacterExtensions'
description: 'Actions on the local player''s character, which log a warning and do nothing on anyone else''s.'
---
# Class MainCharacterExtensions

Namespace: [OblivionMp.Sdk.Archetypes.Extensions](../OblivionMp.Sdk.Archetypes.Extensions/OblivionMp.Sdk.Archetypes.Extensions.md)  
Assembly: OblivionMp.Sdk.dll  

Actions on the local player's character, which log a warning and do nothing on anyone else's.

```csharp
public static class MainCharacterExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[MainCharacterExtensions](../OblivionMp.Sdk.Archetypes.Extensions/OblivionMp.Sdk.Archetypes.Extensions.MainCharacterExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="OblivionMp_Sdk_Archetypes_Extensions_MainCharacterExtensions_OpenBirthSignMenu_OblivionMp_Sdk_Common_Archetypes_MainCharacter_"></a> OpenBirthSignMenu\(MainCharacter\)

Opens the birthsign menu, the same menu as the ShowBirthSignMenu console command. Local player only.
Does nothing while the spellmaking skill picker is open.

```csharp
public static void OpenBirthSignMenu(this MainCharacter main)
```

#### Parameters

`main` MainCharacter

### <a id="OblivionMp_Sdk_Archetypes_Extensions_MainCharacterExtensions_OpenCharacterCreator_OblivionMp_Sdk_Common_Archetypes_MainCharacter_"></a> OpenCharacterCreator\(MainCharacter\)

Opens the character creator, the same menu as the ShowRaceMenu console command. Local player only.
Skills and level progress are kept. Only racial bonuses change. Active spell and potion effects end.

```csharp
public static void OpenCharacterCreator(this MainCharacter main)
```

#### Parameters

`main` MainCharacter

### <a id="OblivionMp_Sdk_Archetypes_Extensions_MainCharacterExtensions_OpenClassMenu_OblivionMp_Sdk_Common_Archetypes_MainCharacter_"></a> OpenClassMenu\(MainCharacter\)

Opens the class menu, the same menu as the ShowClassMenu console command. Local player only.
Skills and level progress are kept. Only the major skill bonus moves to the new class.

```csharp
public static void OpenClassMenu(this MainCharacter main)
```

#### Parameters

`main` MainCharacter

### <a id="OblivionMp_Sdk_Archetypes_Extensions_MainCharacterExtensions_ResurrectLocalPlayer_OblivionMp_Sdk_Common_Archetypes_MainCharacter_"></a> ResurrectLocalPlayer\(MainCharacter\)

Resurrects the local player character.

```csharp
public static void ResurrectLocalPlayer(this MainCharacter main)
```

#### Parameters

`main` MainCharacter


