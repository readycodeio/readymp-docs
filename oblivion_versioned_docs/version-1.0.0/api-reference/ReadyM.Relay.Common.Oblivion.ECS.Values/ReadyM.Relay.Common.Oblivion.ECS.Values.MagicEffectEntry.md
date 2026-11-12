---
title: 'Struct MagicEffectEntry'
description: 'One magic effect of a dynamic form. A single dynamic form (like a player-brewed potion type or a player-crafted spell) can contain multiple magic effects.'
---
# Struct MagicEffectEntry

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

One magic effect of a dynamic form.
A single dynamic form (like a player-brewed potion type or a player-crafted spell) can contain multiple magic effects.

```csharp
public struct MagicEffectEntry : INetSerializable
```

#### Implements

INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry_ActorValueOrOther"></a> ActorValueOrOther

The attribute or skill the effect works on, for effects that name one.

```csharp
public uint ActorValueOrOther
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry_Area"></a> Area

Its area, 0 for none.

```csharp
public uint Area
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry_Duration"></a> Duration

How long it lasts, in seconds.

```csharp
public uint Duration
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry_EffectCode"></a> EffectCode

Which magic effect it is.

```csharp
public uint EffectCode
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry_Magnitude"></a> Magnitude

How strong it is.

```csharp
public uint Magnitude
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry_Range"></a> Range

Whom it reaches: the caster, a touched target or a target at range.

```csharp
public MagicEffectRange Range
```

#### Field Value

 [MagicEffectRange](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectRange.md)


