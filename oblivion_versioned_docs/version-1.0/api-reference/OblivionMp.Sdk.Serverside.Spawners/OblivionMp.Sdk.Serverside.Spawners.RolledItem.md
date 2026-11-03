---
title: 'Struct RolledItem'
description: 'An item that a leveled list rolled, and how many.'
---
# Struct RolledItem

Namespace: [OblivionMp.Sdk.Serverside.Spawners](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

An item that a leveled list rolled, and how many.

```csharp
public readonly struct RolledItem : IEquatable<RolledItem>
```

#### Implements

[IEquatable<RolledItem\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem__ctor_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_"></a> RolledItem\(FormId, int\)

An item that a leveled list rolled, and how many.

```csharp
public RolledItem(FormId Form, int Count)
```

#### Parameters

`Form` FormId

The item form.

`Count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

How many of it.

## Properties

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_Count"></a> Count

How many of it.

```csharp
public int Count { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_Form"></a> Form

The item form.

```csharp
public FormId Form { get; init; }
```

#### Property Value

 FormId

## Methods

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_Deconstruct_ReadyM_Relay_Common_Oblivion_FormId__System_Int32__"></a> Deconstruct\(out FormId, out int\)

```csharp
public void Deconstruct(out FormId Form, out int Count)
```

#### Parameters

`Form` FormId

`Count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_Equals_OblivionMp_Sdk_Serverside_Spawners_RolledItem_"></a> Equals\(RolledItem\)

```csharp
public bool Equals(RolledItem other)
```

#### Parameters

`other` [RolledItem](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_op_Equality_OblivionMp_Sdk_Serverside_Spawners_RolledItem_OblivionMp_Sdk_Serverside_Spawners_RolledItem_"></a> operator ==\(RolledItem, RolledItem\)

```csharp
public static bool operator ==(RolledItem left, RolledItem right)
```

#### Parameters

`left` [RolledItem](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)

`right` [RolledItem](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Spawners_RolledItem_op_Inequality_OblivionMp_Sdk_Serverside_Spawners_RolledItem_OblivionMp_Sdk_Serverside_Spawners_RolledItem_"></a> operator \!=\(RolledItem, RolledItem\)

```csharp
public static bool operator !=(RolledItem left, RolledItem right)
```

#### Parameters

`left` [RolledItem](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)

`right` [RolledItem](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.RolledItem.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


