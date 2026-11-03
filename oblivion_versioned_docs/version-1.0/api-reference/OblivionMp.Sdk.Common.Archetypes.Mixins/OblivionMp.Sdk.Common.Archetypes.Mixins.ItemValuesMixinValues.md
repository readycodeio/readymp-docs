---
title: 'Struct ItemValuesMixinValues'
description: 'The Values collection of a ItemValuesMixin.'
---
# Struct ItemValuesMixinValues

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The Values collection of a ItemValuesMixin.

```csharp
public readonly ref struct ItemValuesMixinValues
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Add_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> Add\(in uint, in ItemValue\)

```csharp
public bool Add(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Contains_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> Contains\(in uint, in ItemValue\)

```csharp
public bool Contains(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_ContainsKey_System_UInt32__"></a> ContainsKey\(in uint\)

```csharp
public bool ContainsKey(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Get"></a> Get\(\)

```csharp
public NativeDictionary<uint, ItemValue, UIntHash>.ReadOnly Get()
```

#### Returns

 NativeDictionary<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), ItemValue, UIntHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Get_System_UInt32__"></a> Get\(in uint\)

```csharp
public ItemValue Get(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 ItemValue

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Remove_System_UInt32__"></a> Remove\(in uint\)

```csharp
public bool Remove(in uint key)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Set_Yooni_Native_Container_NativeDictionary_System_UInt32_ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue_Yooni_Native_Container_UIntHash___"></a> Set\(in NativeDictionary<uint, ItemValue, UIntHash\>\)

```csharp
public void Set(in NativeDictionary<uint, ItemValue, UIntHash> value)
```

#### Parameters

`value` NativeDictionary<[uint](https://learn.microsoft.com/dotnet/api/system.uint32), ItemValue, UIntHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_Set_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> Set\(in uint, in ItemValue\)

```csharp
public void Set(in uint key, in ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ItemValuesMixinValues_TryGetValue_System_UInt32__ReadyM_Relay_Common_Oblivion_ECS_Values_ItemValue__"></a> TryGetValue\(in uint, out ItemValue\)

```csharp
public bool TryGetValue(in uint key, out ItemValue value)
```

#### Parameters

`key` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`value` ItemValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


