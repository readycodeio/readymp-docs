---
title: 'Struct WorldState'
description: 'The named world flags every player''s game reads, such as the ones that gate a quest''s compass target.'
---
# Struct WorldState

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

The named world flags every player's game reads, such as the ones that gate a quest's compass target.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
[Extends(typeof(World), "")]
public readonly struct WorldState : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_FlagsCount"></a> FlagsCount

```csharp
public int FlagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_AddFlags_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> AddFlags\(in WorldFlagEntry\)

```csharp
[Changes("WorldState.Field.Flags")]
public void AddFlags(in WorldFlagEntry value)
```

#### Parameters

`value` WorldFlagEntry

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_ClearFlags"></a> ClearFlags\(\)

```csharp
[Changes("WorldState.Field.Flags")]
public void ClearFlags()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_ContainsFlags_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> ContainsFlags\(in WorldFlagEntry\)

```csharp
public bool ContainsFlags(in WorldFlagEntry value)
```

#### Parameters

`value` WorldFlagEntry

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_GetFlags"></a> GetFlags\(\)

```csharp
public NativeList<WorldFlagEntry>.ReadOnly GetFlags()
```

#### Returns

 NativeList<WorldFlagEntry\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_GetFlags_System_Int32_"></a> GetFlags\(int\)

```csharp
public WorldFlagEntry GetFlags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 WorldFlagEntry

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_InsertFlags_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> InsertFlags\(int, in WorldFlagEntry\)

```csharp
[Changes("WorldState.Field.Flags")]
public void InsertFlags(int index, in WorldFlagEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` WorldFlagEntry

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public WorldState Keep()
```

#### Returns

 [WorldState](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.WorldState.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_RemoveAtFlags_System_Int32_"></a> RemoveAtFlags\(int\)

```csharp
[Changes("WorldState.Field.Flags")]
public WorldFlagEntry RemoveAtFlags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 WorldFlagEntry

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_SetFlags_ReadyM_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry___"></a> SetFlags\(in NativeList<WorldFlagEntry\>\)

```csharp
[Changes("WorldState.Field.Flags")]
public void SetFlags(in NativeList<WorldFlagEntry> value)
```

#### Parameters

`value` NativeList<WorldFlagEntry\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_SetFlags_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> SetFlags\(int, in WorldFlagEntry\)

```csharp
[Changes("WorldState.Field.Flags")]
public void SetFlags(int index, in WorldFlagEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` WorldFlagEntry

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_WorldState_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


