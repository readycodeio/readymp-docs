---
title: 'Class Inventories'
description: 'Moves item stacks between the item lists of entities, worn copies last.'
---
# Class Inventories

Namespace: [OblivionMp.Sdk.Serverside.Items](../OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Moves item stacks between the item lists of entities, worn copies last.

```csharp
public sealed class Inventories
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Inventories](../OblivionMp.Sdk.Serverside.Items/OblivionMp.Sdk.Serverside.Items.Inventories.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_Items_Inventories__ctor"></a> Inventories\(\)

```csharp
public Inventories()
```

## Methods

### <a id="OblivionMp_Sdk_Serverside_Items_Inventories_Add__1___0_ReadyM_Relay_Common_Oblivion_ECS_Values_InventoryEntry_"></a> Add<T\>\(T, InventoryEntry\)

Adds the item, merged into a matching unworn entry when there is one.

```csharp
public void Add<T>(T inventory, InventoryEntry item) where T : struct, IInventory
```

#### Parameters

`inventory` T

`item` InventoryEntry

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Items_Inventories_CountCarried__1___0_ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData__"></a> CountCarried<T\>\(T, in ItemStackData\)

How many items of the stack the inventory holds, not counting worn ones.

```csharp
public int CountCarried<T>(T inventory, in ItemStackData stack) where T : struct, IInventory
```

#### Parameters

`inventory` T

`stack` ItemStackData

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Serverside_Items_Inventories_TryMove__2___0___1_ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData__"></a> TryMove<TFrom, TTo\>\(TFrom, TTo, in ItemStackData\)

Moves the stack from one inventory to another, or returns false and moves nothing when the first holds too few.

```csharp
public bool TryMove<TFrom, TTo>(TFrom from, TTo to, in ItemStackData stack) where TFrom : struct, IInventory where TTo : struct, IInventory
```

#### Parameters

`from` TFrom

`to` TTo

`stack` ItemStackData

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TFrom` 

`TTo` 

### <a id="OblivionMp_Sdk_Serverside_Items_Inventories_TryTake__1___0_ReadyM_Relay_Common_Oblivion_Rpc_ItemStackData__"></a> TryTake<T\>\(T, in ItemStackData\)

Removes the stack, worn copies last, or returns false and removes nothing when the inventory holds too few.

```csharp
public bool TryTake<T>(T inventory, in ItemStackData stack) where T : struct, IInventory
```

#### Parameters

`inventory` T

`stack` ItemStackData

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


