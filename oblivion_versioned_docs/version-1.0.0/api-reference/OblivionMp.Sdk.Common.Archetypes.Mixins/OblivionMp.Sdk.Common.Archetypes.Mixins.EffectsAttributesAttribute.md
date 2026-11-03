---
title: 'Struct EffectsAttributesAttribute'
description: 'The Attribute collection of a EffectsAttributes.'
---
# Struct EffectsAttributesAttribute

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The Attribute collection of a EffectsAttributes.

```csharp
public readonly ref struct EffectsAttributesAttribute
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Add_System_Byte__System_Single__"></a> Add\(in byte, in float\)

```csharp
public bool Add(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Contains_System_Byte__System_Single__"></a> Contains\(in byte, in float\)

```csharp
public bool Contains(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_ContainsKey_System_Byte__"></a> ContainsKey\(in byte\)

```csharp
public bool ContainsKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Get"></a> Get\(\)

```csharp
public NativeDictionary<byte, float, ByteHash>.ReadOnly Get()
```

#### Returns

 NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Get_System_Byte__"></a> Get\(in byte\)

```csharp
public float Get(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Remove_System_Byte__"></a> Remove\(in byte\)

```csharp
public bool Remove(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Set_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash___"></a> Set\(in NativeDictionary<byte, float, ByteHash\>\)

```csharp
public void Set(in NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_Set_System_Byte__System_Single__"></a> Set\(in byte, in float\)

```csharp
public void Set(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_EffectsAttributesAttribute_TryGetValue_System_Byte__System_Single__"></a> TryGetValue\(in byte, out float\)

```csharp
public bool TryGetValue(in byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


