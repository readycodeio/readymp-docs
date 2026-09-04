# Struct EquipmentComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player's equipment.

```csharp
public struct EquipmentComponent : ISaveTaggedComponent<EquipmentComponent>, INativeInit, IComponent, INetSerializable, IDisposable
```

#### Implements

[ISaveTaggedComponent<EquipmentComponent\>](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ISaveTaggedComponent-1.md), 
[INativeInit](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/ECS/Components/INativeInit.cs), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
INetSerializable, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_CurrentPoison"></a> CurrentPoison

```csharp
public FormId CurrentPoison { get; set; }
```

#### Property Value

 [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_ItemsCount"></a> ItemsCount

```csharp
public int ItemsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_AddItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> AddItems\(in InventoryEntry\)

```csharp
public void AddItems(in InventoryEntry value)
```

#### Parameters

`value` [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent__"></a> Assign\(in EquipmentComponent\)

```csharp
public void Assign(in EquipmentComponent value)
```

#### Parameters

`value` [EquipmentComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.EquipmentComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_ClearItems"></a> ClearItems\(\)

```csharp
public void ClearItems()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_ContainsItems_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> ContainsItems\(in InventoryEntry\)

```csharp
public bool ContainsItems(in InventoryEntry value)
```

#### Parameters

`value` [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_CurrentPoisonNotifyChanged_System_Int32_"></a> CurrentPoisonNotifyChanged\(int\)

```csharp
public void CurrentPoisonNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_GetItems"></a> GetItems\(\)

```csharp
public NativeList<InventoryEntry>.ReadOnly GetItems()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_GetItems_System_Int32_"></a> GetItems\(int\)

```csharp
public InventoryEntry GetItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_InsertItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> InsertItems\(int, in InventoryEntry\)

```csharp
public void InsertItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_ItemsNotifyChanged_System_Int32_"></a> ItemsNotifyChanged\(int\)

```csharp
public void ItemsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_RemoveAtItems_System_Int32_"></a> RemoveAtItems\(int\)

```csharp
public InventoryEntry RemoveAtItems(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_SetItems_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry___"></a> SetItems\(in NativeList<InventoryEntry\>\)

```csharp
public void SetItems(in NativeList<InventoryEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EquipmentComponent_SetItems_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__"></a> SetItems\(int, in InventoryEntry\)

```csharp
public void SetItems(int index, in InventoryEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [InventoryEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.InventoryEntry.md)


