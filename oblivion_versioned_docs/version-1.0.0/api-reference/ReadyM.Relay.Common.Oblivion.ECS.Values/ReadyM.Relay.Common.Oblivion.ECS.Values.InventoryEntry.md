---
title: 'Struct InventoryEntry'
description: 'Represents an entry in a player''s inventory, including the item form, quantity, and worn status.'
---
# Struct InventoryEntry

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Represents an entry in a player's inventory, including the item form, quantity, and worn status.

```csharp
public struct InventoryEntry : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry__ctor_ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_System_Int32_System_Byte_"></a> InventoryEntry\(NetworkFormId, int, byte\)

Builds an entry for an item that overrides neither durability nor charge.

```csharp
public InventoryEntry(NetworkFormId formId, int count, byte worn)
```

#### Parameters

`formId` [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`worn` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Charge"></a> Charge

Enchantment charge of this item instance, or -1 when it has a default value or doesn't have this property.

```csharp
public float Charge
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Count"></a> Count

How many.

```csharp
public int Count
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_FormId"></a> FormId

What the item is.

```csharp
public NetworkFormId FormId
```

#### Field Value

 [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Health"></a> Health

Durability of this item instance, or -1 when it has a default value or doesn't have this property.

```csharp
public float Health
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_NoInstanceOverride"></a> NoInstanceOverride

The **Health** or **Charge** value that means the item's default, or none.

```csharp
public const float NoInstanceOverride = -1
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_Worn"></a> Worn

Not 0 while the item is equipped.

```csharp
public byte Worn
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)


