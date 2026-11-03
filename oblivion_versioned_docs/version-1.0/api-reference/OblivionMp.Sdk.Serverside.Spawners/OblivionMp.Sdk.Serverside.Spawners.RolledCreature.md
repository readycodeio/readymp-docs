---
title: 'Struct RolledCreature'
description: 'A creature or NPC that a leveled list rolled, and how many.'
---
# Struct RolledCreature

Namespace: [OblivionMp.Sdk.Serverside.Spawners](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

A creature or NPC that a leveled list rolled, and how many.

```csharp
public readonly struct RolledCreature : IEquatable<RolledCreature>
```

#### Implements

[IEquatable<RolledCreature\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature__ctor_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_"></a> RolledCreature\(FormId, int\)

A creature or NPC that a leveled list rolled, and how many.

```csharp
public RolledCreature(FormId Form, int Count)
```

#### Parameters

`Form` FormId

The creature or NPC form.

`Count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

How many of it.

## Properties

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_Count"></a> Count

How many of it.

```csharp
public int Count { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_Form"></a> Form

The creature or NPC form.

```csharp
public FormId Form { get; init; }
```

#### Property Value

 FormId

## Methods

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_Deconstruct_ReadyM_Relay_Common_Oblivion_FormId__System_Int32__"></a> Deconstruct\(out FormId, out int\)

```csharp
public void Deconstruct(out FormId Form, out int Count)
```

#### Parameters

`Form` FormId

`Count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_Equals_OblivionMp_Sdk_Serverside_Spawners_RolledCreature_"></a> Equals\(RolledCreature\)

```csharp
public bool Equals(RolledCreature other)
```

#### Parameters

`other` [RolledCreature](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_op_Equality_OblivionMp_Sdk_Serverside_Spawners_RolledCreature_OblivionMp_Sdk_Serverside_Spawners_RolledCreature_"></a> operator ==\(RolledCreature, RolledCreature\)

```csharp
public static bool operator ==(RolledCreature left, RolledCreature right)
```

#### Parameters

`left` [RolledCreature](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md)

`right` [RolledCreature](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledCreature_op_Inequality_OblivionMp_Sdk_Serverside_Spawners_RolledCreature_OblivionMp_Sdk_Serverside_Spawners_RolledCreature_"></a> operator \!=\(RolledCreature, RolledCreature\)

```csharp
public static bool operator !=(RolledCreature left, RolledCreature right)
```

#### Parameters

`left` [RolledCreature](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md)

`right` [RolledCreature](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledCreature.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


