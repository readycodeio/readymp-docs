---
title: 'Struct ItemHolder'
---
# Struct ItemHolder

Namespace: [ReadyM.Relay.Common.Oblivion.Rpc](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct ItemHolder : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemHolder_Kind"></a> Kind

```csharp
public ItemHolderKind Kind
```

#### Field Value

 ItemHolderKind

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemHolder_Player"></a> Player

```csharp
public PlayerId Player
```

#### Field Value

 PlayerId

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemHolder_RefId"></a> RefId

```csharp
public uint RefId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemHolder_Of_ReadyM_Relay_Common_Oblivion_Rpc_ItemHolderKind_System_UInt32_"></a> Of\(ItemHolderKind, uint\)

```csharp
public static ItemHolder Of(ItemHolderKind kind, uint refId)
```

#### Parameters

`kind` ItemHolderKind

`refId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [ItemHolder](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.ItemHolder.md)

### <a id="ReadyM_Relay_Common_Oblivion_Rpc_ItemHolder_OfPlayer_ReadyM_Api_Idents_PlayerId_"></a> OfPlayer\(PlayerId\)

```csharp
public static ItemHolder OfPlayer(PlayerId player)
```

#### Parameters

`player` PlayerId

#### Returns

 [ItemHolder](../ReadyM.Relay.Common.Oblivion.Rpc/ReadyM.Relay.Common.Oblivion.Rpc.ItemHolder.md)


