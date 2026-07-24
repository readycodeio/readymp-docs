# Struct MagicEffect

Namespace: [OblivionMp.Sdk](../OblivionMp.Sdk/OblivionMp.Sdk.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public readonly struct MagicEffect
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_MagicEffect_Area"></a> Area

```csharp
public required uint Area { get; init; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_MagicEffect_Duration"></a> Duration

```csharp
public required uint Duration { get; init; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_MagicEffect_EffectCode"></a> EffectCode

```csharp
public required FormId EffectCode { get; init; }
```

#### Property Value

 [FormId](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

### <a id="OblivionMp_Sdk_MagicEffect_Magnitude"></a> Magnitude

```csharp
public required uint Magnitude { get; init; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_MagicEffect_Range"></a> Range

```csharp
public required MagicEffectRange Range { get; init; }
```

#### Property Value

 [MagicEffectRange](https://github.com/readycodeio/readym\-gameserver/blob/230fe858a098de9ac732d546ca5b1296f221735a/src/ReadyM.Relay.Common.Oblivion/ECS/Values/MagicEffectRange.cs)


