---
title: 'Struct ContainerTemplateMixin'
description: 'A container''s record from the game files, which its contents are rolled from.'
---
# Struct ContainerTemplateMixin

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A container's record from the game files, which its contents are rolled from.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
public readonly struct ContainerTemplateMixin : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_BarterGold"></a> BarterGold

The gold the merchant has for bartering.

```csharp
public int BarterGold { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_IsOwnedByMerchant"></a> IsOwnedByMerchant

Whether the container holds a merchant's stock.

```csharp
public bool IsOwnedByMerchant { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_IsRollPending"></a> IsRollPending

Whether the container waits to be refilled from this record.

```csharp
public bool IsRollPending { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_ItemsCount"></a> ItemsCount

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_MerchantRefId"></a> MerchantRefId

The ref id of the merchant who sells from this container, or 0.

```csharp
public uint MerchantRefId { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_Respawns"></a> Respawns

Whether the game refills the container when its cell respawns.

```csharp
public bool Respawns { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> AddItems\(in BaseContainerItem\)

```csharp
[Changes("ContainerTemplateMixin.Field.Items")]
public void AddItems(in BaseContainerItem value)
```

#### Parameters

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_ClearItems"></a> ClearItems\(\)

```csharp
[Changes("ContainerTemplateMixin.Field.Items")]
public void ClearItems()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> ContainsItems\(in BaseContainerItem\)

```csharp
public bool ContainsItems(in BaseContainerItem value)
```

#### Parameters

`value` BaseContainerItem

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_GetItems"></a> GetItems\(\)

```csharp
public NativeList<BaseContainerItem>.ReadOnly GetItems()
```

#### Returns

 NativeList<BaseContainerItem\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_GetItems_System_Int32_"></a> GetItems\(int\)

```csharp
public BaseContainerItem GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> InsertItems\(int, in BaseContainerItem\)

```csharp
[Changes("ContainerTemplateMixin.Field.Items")]
public void InsertItems(int index, in BaseContainerItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ContainerTemplateMixin Keep()
```

#### Returns

 [ContainerTemplateMixin](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.ContainerTemplateMixin.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

```csharp
[Changes("ContainerTemplateMixin.Field.Items")]
public BaseContainerItem RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 BaseContainerItem

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem___"></a> SetItems\(in NativeList<BaseContainerItem\>\)

```csharp
[Changes("ContainerTemplateMixin.Field.Items")]
public void SetItems(in NativeList<BaseContainerItem> value)
```

#### Parameters

`value` NativeList<BaseContainerItem\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_ContainerTemplateMixin_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__"></a> SetItems\(int, in BaseContainerItem\)

```csharp
[Changes("ContainerTemplateMixin.Field.Items")]
public void SetItems(int index, in BaseContainerItem value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` BaseContainerItem


