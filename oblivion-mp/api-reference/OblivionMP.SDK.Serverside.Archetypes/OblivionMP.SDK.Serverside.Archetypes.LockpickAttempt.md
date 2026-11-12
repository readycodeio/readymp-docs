---
title: 'Struct LockpickAttempt'
---
# Struct LockpickAttempt

Namespace: [OblivionMP.SDK.Serverside.Archetypes](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

```csharp
[Archetype(Networked = false)]
[Include(typeof(LockpickClaim), "")]
public readonly struct LockpickAttempt : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_Picker"></a> Picker

```csharp
public PlayerId Picker { get; set; }
```

#### Property Value

 PlayerId

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_RefId"></a> RefId

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LockpickAttempt Keep()
```

#### Returns

 [LockpickAttempt](../OblivionMP.SDK.Serverside.Archetypes/OblivionMP.SDK.Serverside.Archetypes.LockpickAttempt.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Serverside_Archetypes_LockpickAttempt_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


