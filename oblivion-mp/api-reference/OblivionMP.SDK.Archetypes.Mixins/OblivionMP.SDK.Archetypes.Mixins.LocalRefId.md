---
title: 'Struct LocalRefId'
---
# Struct LocalRefId

Namespace: [OblivionMP.SDK.Archetypes.Mixins](../OblivionMP.SDK.Archetypes.Mixins/OblivionMP.SDK.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.dll  

```csharp
[ArchetypeMixin(Replication.None)]
[Extends(typeof(Character), "Local")]
[Extends(typeof(DroppedItem), "Local")]
[Extends(typeof(Furniture), "Local")]
[Extends(typeof(Container), "Local")]
[Extends(typeof(Flora), "Local")]
public readonly struct LocalRefId : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalRefId_RefId"></a> RefId

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalRefId_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalRefId_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalRefId_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LocalRefId Keep()
```

#### Returns

 [LocalRefId](../OblivionMP.SDK.Archetypes.Mixins/OblivionMP.SDK.Archetypes.Mixins.LocalRefId.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Archetypes_Mixins_LocalRefId_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


