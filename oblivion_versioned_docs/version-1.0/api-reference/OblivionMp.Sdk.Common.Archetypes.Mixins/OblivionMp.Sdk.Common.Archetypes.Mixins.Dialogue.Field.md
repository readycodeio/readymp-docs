---
title: 'Class Dialogue.Field'
description: 'Tokens naming each of Dialogue''s values, for mappings and overrides.'
---
# Class Dialogue.Field

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

Tokens naming each of Dialogue's values, for mappings and overrides.

```csharp
public static class Dialogue.Field
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Dialogue.Field](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.Field.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_Field_All"></a> All

Every value at once, for a correspondence that cannot be split.

```csharp
public static Shape<Dialogue> All { get; }
```

#### Property Value

 Shape<[Dialogue](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md)\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_Field_Responses"></a> Responses

Names Dialogue's Responses collection.

```csharp
public static Collection<Dialogue, DialogueResponses> Responses { get; }
```

#### Property Value

 Collection<[Dialogue](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md), [DialogueResponses](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.DialogueResponses.md)\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_Dialogue_Field_Topics"></a> Topics

Names Dialogue's Topics collection.

```csharp
public static Collection<Dialogue, DialogueTopics> Topics { get; }
```

#### Property Value

 Collection<[Dialogue](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.Dialogue.md), [DialogueTopics](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.DialogueTopics.md)\>


