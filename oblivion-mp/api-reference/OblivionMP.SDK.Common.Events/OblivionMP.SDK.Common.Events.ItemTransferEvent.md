---
title: 'Struct ItemTransferEvent'
---
# Struct ItemTransferEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

```csharp
[NetworkedEvent(EventScope.Server, Policy.Anyone)]
public struct ItemTransferEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_Cause"></a> Cause

```csharp
public ItemTransferCause Cause { readonly get; set; }
```

#### Property Value

 ItemTransferCause

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_From"></a> From

```csharp
public ItemHolder From { readonly get; set; }
```

#### Property Value

 ItemHolder

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_MerchantRefId"></a> MerchantRefId

```csharp
public uint MerchantRefId { readonly get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_Placement"></a> Placement

```csharp
public ItemPlacement Placement { readonly get; set; }
```

#### Property Value

 ItemPlacement

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_Price"></a> Price

```csharp
public int Price { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_Stack"></a> Stack

```csharp
public ItemStackData Stack { readonly get; set; }
```

#### Property Value

 ItemStackData

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_To"></a> To

```csharp
public ItemHolder To { readonly get; set; }
```

#### Property Value

 ItemHolder

### <a id="OblivionMP_SDK_Common_Events_ItemTransferEvent_UnitValue"></a> UnitValue

```csharp
public int UnitValue { readonly get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)


