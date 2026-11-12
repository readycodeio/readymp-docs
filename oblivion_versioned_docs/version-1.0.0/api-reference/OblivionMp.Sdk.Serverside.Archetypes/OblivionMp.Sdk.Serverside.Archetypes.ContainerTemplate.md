---
title: 'Struct ContainerTemplate'
description: 'A container''s record from the game files, kept on the server only.'
---
# Struct ContainerTemplate

Namespace: [OblivionMp.Sdk.Serverside.Archetypes](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

A container's record from the game files, kept on the server only.

```csharp
public readonly struct ContainerTemplate : IArchetype, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_BarterGold"></a> BarterGold

```csharp
public int BarterGold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_IsOwnedByMerchant"></a> IsOwnedByMerchant

```csharp
public bool IsOwnedByMerchant { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_IsRollPending"></a> IsRollPending

```csharp
public bool IsRollPending { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_ItemsCount"></a> ItemsCount

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_MerchantRefId"></a> MerchantRefId

```csharp
public uint MerchantRefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_RefId"></a> RefId

```csharp
public uint RefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_Respawns"></a> Respawns

```csharp
public bool Respawns { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> AddItems\(in BaseContainerItem\)

```csharp
public void AddItems(in BaseContainerItem value)
```

#### Parameters

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_ClearItems"></a> ClearItems\(\)

```csharp
public void ClearItems()
```

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> ContainsItems\(in BaseContainerItem\)

```csharp
public bool ContainsItems(in BaseContainerItem value)
```

#### Parameters

`value` BaseContainerItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_GetItems"></a> GetItems\(\)

```csharp
public NativeList<BaseContainerItem>.ReadOnly GetItems()
```

#### Returns

 NativeList<BaseContainerItem\>.ReadOnly

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_GetItems_System_Int32_"></a> GetItems\(int\)

```csharp
public BaseContainerItem GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BaseContainerItem

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> InsertItems\(int, in BaseContainerItem\)

```csharp
public void InsertItems(int index, in BaseContainerItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ContainerTemplate Keep()
```

#### Returns

 [ContainerTemplate](../OblivionMp.Sdk.Serverside.Archetypes/OblivionMp.Sdk.Serverside.Archetypes.ContainerTemplate.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

```csharp
public BaseContainerItem RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BaseContainerItem

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem___"></a> SetItems\(in NativeList<BaseContainerItem\>\)

```csharp
public void SetItems(in NativeList<BaseContainerItem> value)
```

#### Parameters

`value` NativeList<BaseContainerItem\>

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> SetItems\(int, in BaseContainerItem\)

```csharp
public void SetItems(int index, in BaseContainerItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Serverside_Archetypes_ContainerTemplate_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


