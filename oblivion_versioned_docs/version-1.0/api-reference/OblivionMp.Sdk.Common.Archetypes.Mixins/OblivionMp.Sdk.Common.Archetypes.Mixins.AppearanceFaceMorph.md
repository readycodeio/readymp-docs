---
title: 'Struct AppearanceFaceMorph'
description: 'The FaceMorph collection of a Appearance.'
---
# Struct AppearanceFaceMorph

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

The FaceMorph collection of a Appearance.

```csharp
public readonly ref struct AppearanceFaceMorph
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Count"></a> Count

```csharp
public int Count { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Add_Yooni_Native_Container_NativeString256__System_Single__"></a> Add\(in NativeString256, in float\)

```csharp
public bool Add(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Clear"></a> Clear\(\)

```csharp
public void Clear()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Contains_Yooni_Native_Container_NativeString256__System_Single__"></a> Contains\(in NativeString256, in float\)

```csharp
public bool Contains(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_ContainsKey_Yooni_Native_Container_NativeString256__"></a> ContainsKey\(in NativeString256\)

```csharp
public bool ContainsKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Get"></a> Get\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly Get()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Get_Yooni_Native_Container_NativeString256__"></a> Get\(in NativeString256\)

```csharp
public float Get(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Remove_Yooni_Native_Container_NativeString256__"></a> Remove\(in NativeString256\)

```csharp
public bool Remove(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Set_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> Set\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void Set(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_Set_Yooni_Native_Container_NativeString256__System_Single__"></a> Set\(in NativeString256, in float\)

```csharp
public void Set(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_AppearanceFaceMorph_TryGetValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetValue\(in NativeString256, out float\)

```csharp
public bool TryGetValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


