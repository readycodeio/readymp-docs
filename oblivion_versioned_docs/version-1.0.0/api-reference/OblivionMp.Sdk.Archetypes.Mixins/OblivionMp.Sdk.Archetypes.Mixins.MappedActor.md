---
title: 'Struct MappedActor'
description: 'The game actor that shows a character in this player''s game.'
---
# Struct MappedActor

Namespace: [OblivionMp.Sdk.Archetypes.Mixins](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.dll  

The game actor that shows a character in this player's game.

```csharp
[ArchetypeMixin(Replication.None)]
[Extends(typeof(MainCharacter), "")]
[Extends(typeof(Npc), "")]
public readonly struct MappedActor : IArchetypeMixin, IArchetypeQueryable, IEntityShape, IIndexed<nint>
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape, 
IIndexed<nint\>

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Archetypes_Mixins_MappedActor_Pawn"></a> Pawn

The game actor that shows this character, or <code>IntPtr.Zero</code> while there is none.

```csharp
public nint Pawn { get; }
```

#### Property Value

 [nint](https://learn.microsoft.com/dotnet/api/system.intptr)

## Methods

### <a id="OblivionMp_Sdk_Archetypes_Mixins_MappedActor_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public MappedActor Keep()
```

#### Returns

 [MappedActor](../OblivionMp.Sdk.Archetypes.Mixins/OblivionMp.Sdk.Archetypes.Mixins.MappedActor.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.


