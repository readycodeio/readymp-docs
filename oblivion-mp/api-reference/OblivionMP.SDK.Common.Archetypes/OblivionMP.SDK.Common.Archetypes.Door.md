---
title: 'Struct Door'
---
# Struct Door

Namespace: [OblivionMP.SDK.Common.Archetypes](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.md)  
Assembly: OblivionMP.SDK.Common.dll  

```csharp
[Archetype]
[Tag(typeof(AllowOwnershipTransferOnScopeEnterTag))]
[Tag(typeof(AllowOwnershipTransferOnScopeLeaveTag))]
[Include(typeof(RefIdMixin), "")]
[Include(typeof(BaseIdMixin), "")]
[Include(typeof(Transform), "")]
[Include(typeof(Presence), "")]
[Include(typeof(LockState), "")]
[Include(typeof(LockSeedOrigin), "")]
[Include(typeof(Doorway), "")]
[Include(typeof(DoorwaySeedOrigin), "")]
[Include(typeof(ScriptVariables), "")]
[Include(typeof(ScriptPolicy), "")]
public readonly struct Door : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Door_BaseId"></a> BaseId

The form this entity is made from, such as which kind of chest or which creature.

```csharp
public NetworkFormId BaseId { get; set; }
```

#### Property Value

 NetworkFormId

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsDestroyed"></a> IsDestroyed

Whether a script marked the object destroyed, which keeps it from activating.

```csharp
public bool IsDestroyed { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsDisabled"></a> IsDisabled

Whether a seeded ref is enabled in the world. Starts from the game files and only the server writes it.

```csharp
public bool IsDisabled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsLeveled"></a> IsLeveled

```csharp
public bool IsLeveled { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsLocked"></a> IsLocked

```csharp
public bool IsLocked { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsOpen"></a> IsOpen

```csharp
public bool IsOpen { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsOpenByDefault"></a> IsOpenByDefault

```csharp
public bool IsOpenByDefault { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Key"></a> Key

```csharp
public FormId Key { get; set; }
```

#### Property Value

 FormId

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Level"></a> Level

```csharp
public int Level { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_LinkedRefId"></a> LinkedRefId

```csharp
public uint LinkedRefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Position"></a> Position

The position in the game's world space, in centimeters.

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_RefId"></a> RefId

The ref id of this placed object or actor.

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_RollIndex"></a> RollIndex

How many random rolls the script made, so every client continues the same sequence.

```csharp
public uint RollIndex { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Rotation"></a> Rotation

The yaw, in degrees.

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Run"></a> Run

How the ref's own script blocks run, **SessionDefault** for the session's rule of its kind.

```csharp
public ScriptRunPolicy Run { get; set; }
```

#### Property Value

 ScriptRunPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Target"></a> Target

How script commands that change the ref run, **SessionDefault** for the session's rule.

```csharp
public ScriptTargetPolicy Target { get; set; }
```

#### Property Value

 ScriptTargetPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Door_VariablesCount"></a> VariablesCount

```csharp
public int VariablesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Door_AddVariables_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> AddVariables\(in ScriptVariable\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void AddVariables(in ScriptVariable value)
```

#### Parameters

`value` ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Door_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Door_ClearVariables"></a> ClearVariables\(\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void ClearVariables()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Door_ContainsVariables_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> ContainsVariables\(in ScriptVariable\)

```csharp
public bool ContainsVariables(in ScriptVariable value)
```

#### Parameters

`value` ScriptVariable

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Door_GetVariables"></a> GetVariables\(\)

```csharp
public NativeList<ScriptVariable>.ReadOnly GetVariables()
```

#### Returns

 NativeList<ScriptVariable\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Door_GetVariables_System_Int32_"></a> GetVariables\(int\)

```csharp
public ScriptVariable GetVariables(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Door_InsertVariables_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> InsertVariables\(int, in ScriptVariable\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void InsertVariables(int index, in ScriptVariable value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Door_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Door Keep()
```

#### Returns

 [Door](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Door.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Door_RemoveAtVariables_System_Int32_"></a> RemoveAtVariables\(int\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public ScriptVariable RemoveAtVariables(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Door_SetVariables_ReadyM_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable___"></a> SetVariables\(in NativeList<ScriptVariable\>\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void SetVariables(in NativeList<ScriptVariable> value)
```

#### Parameters

`value` NativeList<ScriptVariable\>

### <a id="OblivionMP_SDK_Common_Archetypes_Door_SetVariables_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_ScriptVariable__"></a> SetVariables\(int, in ScriptVariable\)

```csharp
[Changes("ScriptVariables.Field.Variables")]
public void SetVariables(int index, in ScriptVariable value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` ScriptVariable

### <a id="OblivionMP_SDK_Common_Archetypes_Door_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


