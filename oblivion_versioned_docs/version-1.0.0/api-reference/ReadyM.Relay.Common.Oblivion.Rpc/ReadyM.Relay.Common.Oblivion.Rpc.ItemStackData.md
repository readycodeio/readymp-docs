---
title: 'Struct ItemStackData'
description: 'A stack of one kind of item, matched by form, durability and charge together.'
---
# Struct ItemStackData

Namespace: [ReadyM.Relay.Common.Oblivion.Rpc](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

A stack of one kind of item, matched by form, durability and charge together.

```csharp
public struct ItemStackData : INetSerializable
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

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData_BaseId"></a> BaseId

The base form of the items.

```csharp
public NetworkFormId BaseId
```

#### Field Value

 [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData_Charge"></a> Charge

Enchantment charge of the items, or -1 when they have the default value or no charge.

```csharp
public float Charge
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData_Count"></a> Count

How many items the stack holds.

```csharp
public int Count
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData_Durability"></a> Durability

Durability of the items, or -1 when they have the default value or no durability.

```csharp
public float Durability
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)


