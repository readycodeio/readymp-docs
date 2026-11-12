---
title: 'Class ScriptPolicy.Field'
description: 'Tokens naming each of ScriptPolicy''s values, for mappings and overrides.'
---
# Class ScriptPolicy.Field

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

Tokens naming each of ScriptPolicy's values, for mappings and overrides.

```csharp
public static class ScriptPolicy.Field
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ScriptPolicy.Field](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.ScriptPolicy.Field.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicy_Field_All"></a> All

Every value at once, for a correspondence that cannot be split.

```csharp
public static Shape<ScriptPolicy> All { get; }
```

#### Property Value

 Shape<[ScriptPolicy](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.ScriptPolicy.md)\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicy_Field_Run"></a> Run

Names ScriptPolicy.Run.

```csharp
public static Value<ScriptPolicy, ScriptRunPolicy> Run { get; }
```

#### Property Value

 Value<[ScriptPolicy](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.ScriptPolicy.md), ScriptRunPolicy\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicy_Field_Target"></a> Target

Names ScriptPolicy.Target.

```csharp
public static Value<ScriptPolicy, ScriptTargetPolicy> Target { get; }
```

#### Property Value

 Value<[ScriptPolicy](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.ScriptPolicy.md), ScriptTargetPolicy\>


