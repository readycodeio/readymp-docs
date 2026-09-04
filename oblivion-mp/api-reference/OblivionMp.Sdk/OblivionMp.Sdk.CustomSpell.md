# Struct CustomSpell

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

Properties of a custom spell.

```csharp
public readonly struct CustomSpell
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_CustomSpell_Effects"></a> Effects

```csharp
public required List<MagicEffect> Effects { get; init; }
```

#### Property Value

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<[MagicEffect](../OblivionMp.Sdk/OblivionMp.Sdk.MagicEffect.md)\>

### <a id="OblivionMp_Sdk_CustomSpell_MagickaCost"></a> MagickaCost

```csharp
public required uint MagickaCost { get; init; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_CustomSpell_SpellType"></a> SpellType

```csharp
public required SpellType SpellType { get; init; }
```

#### Property Value

 [SpellType](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/SpellType.cs)


