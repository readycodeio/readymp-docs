---
title: 'Struct CharacterIdentity'
description: 'Who a player''s character is, as picked in character creation: name, race, sex, class and birthsign.'
---
# Struct CharacterIdentity

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

Who a player's character is, as picked in character creation: name, race, sex, class and birthsign.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct CharacterIdentity : IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_CharacterIdentity_Birthsign"></a> Birthsign

The form ID of the character's birthsign.

```csharp
public FormId Birthsign { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_CharacterIdentity_Class"></a> Class

The form ID of the character's class.

```csharp
public FormId Class { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_CharacterIdentity_IsFemale"></a> IsFemale

Whether the character is female.

```csharp
public bool IsFemale { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_CharacterIdentity_Name"></a> Name

The character's name, as typed in character creation. The player's nickname is **NicknameMixin**.

```csharp
public NativeString256 Name { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_CharacterIdentity_Race"></a> Race

The form ID of the character's race.

```csharp
public FormId Race { get; set; }
```

#### Property Value

 FormId

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_CharacterIdentity_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public CharacterIdentity Keep()
```

#### Returns

 [CharacterIdentity](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.CharacterIdentity.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


