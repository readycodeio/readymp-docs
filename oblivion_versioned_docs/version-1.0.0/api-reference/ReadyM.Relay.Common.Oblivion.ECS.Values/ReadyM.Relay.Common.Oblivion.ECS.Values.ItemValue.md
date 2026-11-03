---
title: 'Struct ItemValue'
description: 'The base value of an item in the game files, and whether the engine computes it instead, like for an enchanted item or a potion.'
---
# Struct ItemValue

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

The base value of an item in the game files, and whether the engine computes it instead, like for an enchanted
item or a potion.

```csharp
public struct ItemValue : INetSerializable
```

#### Implements

INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__ctor_System_Int32_System_Boolean_"></a> ItemValue\(int, bool\)

Builds a value from a gold amount and whether the game computes it instead.

```csharp
public ItemValue(int value, bool hasComputedValue)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`hasComputedValue` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue_HasComputedValue"></a> HasComputedValue

Not 0 when the game computes the value instead.

```csharp
public byte HasComputedValue
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue_Value"></a> Value

The base value, in gold.

```csharp
public int Value
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


