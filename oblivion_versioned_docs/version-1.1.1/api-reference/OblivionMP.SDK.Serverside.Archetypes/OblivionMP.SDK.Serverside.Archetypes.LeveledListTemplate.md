---
title: 'Struct LeveledListTemplate'
description: 'A leveled list from the game files, kept on the server only.'
---
# Struct LeveledListTemplate

Namespace: [OblivionMP.SDK.Serverside.Archetypes](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

A leveled list from the game files, kept on the server only.

```csharp
[Archetype(Networked = false)]
[Include(typeof(LeveledListTemplateMixin), "")]
public readonly struct LeveledListTemplate : IArchetype, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetype, 
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

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_CalcAllLevels"></a> CalcAllLevels

```csharp
public bool CalcAllLevels { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_CalcEachCount"></a> CalcEachCount

```csharp
public bool CalcEachCount { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_ChanceNone"></a> ChanceNone

```csharp
public byte ChanceNone { get; set; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_CreatureTemplate"></a> CreatureTemplate

```csharp
public FormId CreatureTemplate { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_EntriesCount"></a> EntriesCount

```csharp
public int EntriesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_Id"></a> Id

```csharp
public FormId Id { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_AddEntries_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> AddEntries\(in LeveledListItem\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void AddEntries(in LeveledListItem value)
```

#### Parameters

`value` LeveledListItem

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_ClearEntries"></a> ClearEntries\(\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void ClearEntries()
```

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_ContainsEntries_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> ContainsEntries\(in LeveledListItem\)

```csharp
public bool ContainsEntries(in LeveledListItem value)
```

#### Parameters

`value` LeveledListItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_GetEntries"></a> GetEntries\(\)

```csharp
public NativeList<LeveledListItem>.ReadOnly GetEntries()
```

#### Returns

 NativeList<LeveledListItem\>.ReadOnly

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_GetEntries_System_Int32_"></a> GetEntries\(int\)

```csharp
public LeveledListItem GetEntries(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 LeveledListItem

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_InsertEntries_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> InsertEntries\(int, in LeveledListItem\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void InsertEntries(int index, in LeveledListItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` LeveledListItem

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LeveledListTemplate Keep()
```

#### Returns

 [LeveledListTemplate](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.LeveledListTemplate.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_RemoveAtEntries_System_Int32_"></a> RemoveAtEntries\(int\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public LeveledListItem RemoveAtEntries(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 LeveledListItem

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_SetEntries_ReadyM_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem___"></a> SetEntries\(in NativeList<LeveledListItem\>\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void SetEntries(in NativeList<LeveledListItem> value)
```

#### Parameters

`value` NativeList<LeveledListItem\>

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_SetEntries_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__"></a> SetEntries\(int, in LeveledListItem\)

```csharp
[Changes("LeveledListTemplateMixin.Field.Entries")]
public void SetEntries(int index, in LeveledListItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` LeveledListItem

### <a id="OblivionMP_SDK_Serverside_Archetypes_LeveledListTemplate_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


