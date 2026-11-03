---
title: 'Struct ItemValuesMixin'
description: 'The base value of every item in the game files, by form id.'
---
# Struct ItemValuesMixin

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The base value of every item in the game files, by form id.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
public readonly struct ItemValuesMixin : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_ValuesCount"></a> ValuesCount

```csharp
public int ValuesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_AddValues_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> AddValues\(in uint, in ItemValue\)

```csharp
[Changes("ItemValuesMixin.Field.Values")]
public bool AddValues(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_ClearValues"></a> ClearValues\(\)

```csharp
[Changes("ItemValuesMixin.Field.Values")]
public void ClearValues()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_ContainsValues_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> ContainsValues\(in uint, in ItemValue\)

```csharp
public bool ContainsValues(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_ContainsValuesKey_System_UInt32__"></a> ContainsValuesKey\(in uint\)

```csharp
public bool ContainsValuesKey(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_GetValues"></a> GetValues\(\)

```csharp
public NativeDictionary<uint, ItemValue, UIntHash>.ReadOnly GetValues()
```

#### Returns

 NativeDictionary<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), ItemValue, UIntHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_GetValues_System_UInt32__"></a> GetValues\(in uint\)

```csharp
public ItemValue GetValues(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 ItemValue

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ItemValuesMixin Keep()
```

#### Returns

 [ItemValuesMixin](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ItemValuesMixin.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_RemoveValues_System_UInt32__"></a> RemoveValues\(in uint\)

```csharp
[Changes("ItemValuesMixin.Field.Values")]
public bool RemoveValues(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_SetValues_Yooni_Native_Container_NativeDictionary_System_UInt32_ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue_Yooni_Native_Container_UIntHash___"></a> SetValues\(in NativeDictionary<uint, ItemValue, UIntHash\>\)

```csharp
[Changes("ItemValuesMixin.Field.Values")]
public void SetValues(in NativeDictionary<uint, ItemValue, UIntHash> value)
```

#### Parameters

`value` NativeDictionary<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), ItemValue, UIntHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_SetValues_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> SetValues\(in uint, in ItemValue\)

```csharp
[Changes("ItemValuesMixin.Field.Values")]
public void SetValues(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixin_TryGetValuesValue_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> TryGetValuesValue\(in uint, out ItemValue\)

```csharp
public bool TryGetValuesValue(in uint key, out ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


