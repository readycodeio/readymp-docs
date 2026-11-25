---
title: 'Class Transform.Field'
description: 'Tokens naming each of Transform''s values, for mappings and overrides.'
---
# Class Transform.Field

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

Tokens naming each of Transform's values, for mappings and overrides.

```csharp
public static class Transform.Field
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Transform.Field](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Transform.Field.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Transform_Field_All"></a> All

Every value at once, for a correspondence that cannot be split.

```csharp
public static Shape<Transform> All { get; }
```

#### Property Value

 Shape<[Transform](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Transform.md)\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Transform_Field_Position"></a> Position

Names Transform.Position.

```csharp
public static Value<Transform, Vector3> Position { get; }
```

#### Property Value

 Value<[Transform](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Transform.md), [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Transform_Field_Rotation"></a> Rotation

Names Transform.Rotation.

```csharp
public static Value<Transform, float> Rotation { get; }
```

#### Property Value

 Value<[Transform](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Transform.md), [float](https://learn.microsoft.com/dotnet/api/system.single)\>


