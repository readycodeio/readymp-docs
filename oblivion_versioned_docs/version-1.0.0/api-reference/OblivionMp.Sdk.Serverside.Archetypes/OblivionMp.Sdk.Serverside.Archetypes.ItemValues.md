---
title: 'Struct ItemValues'
description: 'The base value of every item by form id, kept on the server only.'
---
# Struct ItemValues

Namespace: [OblivionMp.Sdk.Serverside.Archetypes](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

The base value of every item by form id, kept on the server only.

```csharp
public readonly struct ItemValues : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_ValuesCount"></a> ValuesCount

```csharp
public int ValuesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_AddValues_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> AddValues\(in uint, in ItemValue\)

```csharp
public bool AddValues(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_ClearValues"></a> ClearValues\(\)

```csharp
public void ClearValues()
```

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_ContainsValues_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> ContainsValues\(in uint, in ItemValue\)

```csharp
public bool ContainsValues(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_ContainsValuesKey_System_UInt32__"></a> ContainsValuesKey\(in uint\)

```csharp
public bool ContainsValuesKey(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_GetValues"></a> GetValues\(\)

```csharp
public NativeDictionary<uint, ItemValue, UIntHash>.ReadOnly GetValues()
```

#### Returns

 NativeDictionary<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), ItemValue, UIntHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_GetValues_System_UInt32__"></a> GetValues\(in uint\)

```csharp
public ItemValue GetValues(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 ItemValue

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ItemValues Keep()
```

#### Returns

 [ItemValues](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.ItemValues.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_RemoveValues_System_UInt32__"></a> RemoveValues\(in uint\)

```csharp
public bool RemoveValues(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_SetValues_Yooni_Native_Container_NativeDictionary_System_UInt32_ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue_Yooni_Native_Container_UIntHash___"></a> SetValues\(in NativeDictionary<uint, ItemValue, UIntHash\>\)

```csharp
public void SetValues(in NativeDictionary<uint, ItemValue, UIntHash> value)
```

#### Parameters

`value` NativeDictionary<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), ItemValue, UIntHash\>

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_SetValues_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> SetValues\(in uint, in ItemValue\)

```csharp
public void SetValues(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ItemValues_TryGetValuesValue_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> TryGetValuesValue\(in uint, out ItemValue\)

```csharp
public bool TryGetValuesValue(in uint key, out ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


