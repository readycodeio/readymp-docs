---
title: 'Struct SummonedBy'
description: 'Who summoned a creature, who it fights for, and when it runs out.'
---
# Struct SummonedBy

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

Who summoned a creature, who it fights for, and when it runs out.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct SummonedBy : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_Expires"></a> Expires

Whether it runs out on its own.

```csharp
public bool Expires { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_ExpiresAtMs"></a> ExpiresAtMs

When it runs out, on the server's millisecond clock (<code>Environment.TickCount64</code>).

```csharp
public long ExpiresAtMs { get; set; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_MasterPlayer"></a> MasterPlayer

The player it fights for.

```csharp
public PlayerId MasterPlayer { get; set; }
```

#### Property Value

 PlayerId

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_MasterRefId"></a> MasterRefId

The ref id of the actor it fights for.

```csharp
public uint MasterRefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_RequestId"></a> RequestId

The summon's id in the requester's game.

```csharp
public uint RequestId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_Requester"></a> Requester

The player whose spell summoned it.

```csharp
public PlayerId Requester { get; set; }
```

#### Property Value

 PlayerId

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public SummonedBy Keep()
```

#### Returns

 [SummonedBy](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.SummonedBy.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_SummonedBy_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


