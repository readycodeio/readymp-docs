---
title: 'Struct LoadOrder'
description: 'The plugins the world was seeded from, in load order.'
---
# Struct LoadOrder

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

The plugins the world was seeded from, in load order.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(World), "")]
public readonly struct LoadOrder : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_PluginsCount"></a> PluginsCount

```csharp
public int PluginsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_AddPlugins_ReadyM_Native_Container_NativeString256__"></a> AddPlugins\(in NativeString256\)

```csharp
[Changes("LoadOrder.Field.Plugins")]
public void AddPlugins(in NativeString256 value)
```

#### Parameters

`value` NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_ClearPlugins"></a> ClearPlugins\(\)

```csharp
[Changes("LoadOrder.Field.Plugins")]
public void ClearPlugins()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_ContainsPlugins_ReadyM_Native_Container_NativeString256__"></a> ContainsPlugins\(in NativeString256\)

```csharp
public bool ContainsPlugins(in NativeString256 value)
```

#### Parameters

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_GetPlugins"></a> GetPlugins\(\)

```csharp
public NativeList<NativeString256>.ReadOnly GetPlugins()
```

#### Returns

 NativeList<NativeString256\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_GetPlugins_System_Int32_"></a> GetPlugins\(int\)

```csharp
public NativeString256 GetPlugins(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_InsertPlugins_System_Int32_ReadyM_Native_Container_NativeString256__"></a> InsertPlugins\(int, in NativeString256\)

```csharp
[Changes("LoadOrder.Field.Plugins")]
public void InsertPlugins(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public LoadOrder Keep()
```

#### Returns

 [LoadOrder](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.LoadOrder.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_RemoveAtPlugins_System_Int32_"></a> RemoveAtPlugins\(int\)

```csharp
[Changes("LoadOrder.Field.Plugins")]
public NativeString256 RemoveAtPlugins(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_SetPlugins_ReadyM_Native_Container_NativeList_ReadyM_Native_Container_NativeString256___"></a> SetPlugins\(in NativeList<NativeString256\>\)

```csharp
[Changes("LoadOrder.Field.Plugins")]
public void SetPlugins(in NativeList<NativeString256> value)
```

#### Parameters

`value` NativeList<NativeString256\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_SetPlugins_System_Int32_ReadyM_Native_Container_NativeString256__"></a> SetPlugins\(int, in NativeString256\)

```csharp
[Changes("LoadOrder.Field.Plugins")]
public void SetPlugins(int index, in NativeString256 value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_LoadOrder_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


