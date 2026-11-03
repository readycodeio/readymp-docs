---
title: 'Struct LocalVisibility'
description: 'How visible a character is in this player''s game.'
---
# Struct LocalVisibility

Namespace: [OblivionMp.Sdk.Archetypes.Mixins](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.dll  

How visible a character is in this player's game.

```csharp
[ArchetypeMixin(Replication.None)]
[Extends(typeof(MainCharacter), "")]
public readonly struct LocalVisibility : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalVisibility_Hidden"></a> Hidden

How hard the character is to see here: 0 in plain sight, 1 invisible.

```csharp
public float Hidden { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Archetypes_Mixins_LocalVisibility_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LocalVisibility Keep()
```

#### Returns

 [LocalVisibility](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.LocalVisibility.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


