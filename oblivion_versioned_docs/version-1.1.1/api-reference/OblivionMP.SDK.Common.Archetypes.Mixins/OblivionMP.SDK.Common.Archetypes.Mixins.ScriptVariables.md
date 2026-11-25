---
title: 'Struct ScriptVariables'
description: 'The variables of a world object''s script and how many random rolls the script made.'
---
# Struct ScriptVariables

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

The variables of a world object's script and how many random rolls the script made.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
public readonly struct ScriptVariables : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_RollIndex"></a> RollIndex

How many random rolls the script made, so every client continues the same sequence.

```csharp
public uint RollIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_VariablesCount"></a> VariablesCount

```csharp
public int VariablesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_AddVariables_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> AddVariables\(in ScriptVariable\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void AddVariables(in ScriptVariable value)
```

#### Parameters

`value` ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_ClearVariables"></a> ClearVariables\(\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void ClearVariables()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_ContainsVariables_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> ContainsVariables\(in ScriptVariable\)

```csharp
public bool ContainsVariables(in ScriptVariable value)
```

#### Parameters

`value` ScriptVariable

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_GetVariables"></a> GetVariables\(\)

```csharp
public NativeList<ScriptVariable>.ReadOnly GetVariables()
```

#### Returns

 NativeList<ScriptVariable\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_GetVariables_System_Int32_"></a> GetVariables\(int\)

```csharp
public ScriptVariable GetVariables(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_InsertVariables_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> InsertVariables\(int, in ScriptVariable\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void InsertVariables(int index, in ScriptVariable value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ScriptVariables Keep()
```

#### Returns

 [ScriptVariables](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.ScriptVariables.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_RemoveAtVariables_System_Int32_"></a> RemoveAtVariables\(int\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public ScriptVariable RemoveAtVariables(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_SetVariables_ReadyM_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable___"></a> SetVariables\(in NativeList<ScriptVariable\>\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void SetVariables(in NativeList<ScriptVariable> value)
```

#### Parameters

`value` NativeList<ScriptVariable\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_SetVariables_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> SetVariables\(int, in ScriptVariable\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void SetVariables(int index, in ScriptVariable value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptVariables_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


