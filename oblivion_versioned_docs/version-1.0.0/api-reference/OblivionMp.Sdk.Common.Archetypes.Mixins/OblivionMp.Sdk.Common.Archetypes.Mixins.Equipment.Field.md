---
title: 'Class Equipment.Field'
description: 'Tokens naming each of Equipment''s values, for mappings and overrides.'
---
# Class Equipment.Field

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

Tokens naming each of Equipment's values, for mappings and overrides.

```csharp
public static class Equipment.Field
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Equipment.Field](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.Field.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_Field_All"></a> All

Every value at once, for a correspondence that cannot be split.

```csharp
public static Shape<Equipment> All { get; }
```

#### Property Value

 Shape<[Equipment](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.md)\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_Field_CurrentPoison"></a> CurrentPoison

Names Equipment.CurrentPoison.

```csharp
public static Value<Equipment, NetworkFormId> CurrentPoison { get; }
```

#### Property Value

 Value<[Equipment](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.md), NetworkFormId\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_Field_IsServerSeeded"></a> IsServerSeeded

Names Equipment.IsServerSeeded.

```csharp
public static Value<Equipment, bool> IsServerSeeded { get; }
```

#### Property Value

 Value<[Equipment](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.md), [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Equipment_Field_Items"></a> Items

Names Equipment's Items collection.

```csharp
public static Collection<Equipment, EquipmentItems> Items { get; }
```

#### Property Value

 Collection<[Equipment](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Equipment.md), [EquipmentItems](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.EquipmentItems.md)\>


