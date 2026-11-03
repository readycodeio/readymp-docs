---
title: 'Class SyncExtensions'
description: 'Extensions for moving one value between the ECS and the game at a sync point, usually a patch or system.'
---
# Class SyncExtensions

Namespace: [ReadyM.SDK.Client.Mapping](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.md)  
Assembly: ReadyM.SDK.Client.dll  

Extensions for moving one value between the ECS and the game at a sync point, usually a patch or system.

```csharp
public static class SyncExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SyncExtensions](../ReadyM.SDK.Client.Mapping/ReadyM.SDK.Client.Mapping.SyncExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_CanPull__2___0_ReadyM_SDK_Archetypes_Access_Collection___0___1__"></a> CanPull<TShape, TAccess\>\(TShape, Collection<TShape, TAccess\>\)

Whether this collection should be loaded from the game into the ECS.

```csharp
public static bool CanPull<TShape, TAccess>(this TShape shape, Collection<TShape, TAccess> collection) where TShape : struct, IArchetypeQueryable where TAccess : allows ref struct
```

#### Parameters

`shape` TShape

`collection` Collection<TShape, TAccess\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TAccess` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_CanPull__3___0_ReadyM_SDK_Archetypes_Access_Value___1___2__"></a> CanPull<TShape, TOwner, TValue\>\(TShape, Value<TOwner, TValue\>\)

Whether this value should be loaded from the game into the ECS.

```csharp
public static bool CanPull<TShape, TOwner, TValue>(this TShape shape, Value<TOwner, TValue> value) where TShape : struct, IArchetypeQueryable where TOwner : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`value` Value<TOwner, TValue\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TOwner` 

`TValue` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_CanPull__1___0_ReadyM_SDK_Archetypes_Access_Shape___0__"></a> CanPull<TShape\>\(TShape, Shape<TShape\>\)

Whether this shape should be loaded from the game into the ECS.

```csharp
public static bool CanPull<TShape>(this TShape shape, Shape<TShape> whole) where TShape : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`whole` Shape<TShape\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_CanPush__3___0_ReadyM_SDK_Archetypes_Access_Value___1___2__"></a> CanPush<TShape, TOwner, TValue\>\(TShape, Value<TOwner, TValue\>\)

Whether this value should be applied from the ECS to the game.

```csharp
public static bool CanPush<TShape, TOwner, TValue>(this TShape shape, Value<TOwner, TValue> value) where TShape : struct, IArchetypeQueryable where TOwner : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`value` Value<TOwner, TValue\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TOwner` 

`TValue` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_CanPush__2___0_ReadyM_SDK_Archetypes_Access_Collection___0___1__"></a> CanPush<TShape, TAccess\>\(TShape, Collection<TShape, TAccess\>\)

Whether this collection should be applied from the ECS to the game.

```csharp
public static bool CanPush<TShape, TAccess>(this TShape shape, Collection<TShape, TAccess> collection) where TShape : struct, IArchetypeQueryable where TAccess : allows ref struct
```

#### Parameters

`shape` TShape

`collection` Collection<TShape, TAccess\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TAccess` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_CanPush__1___0_ReadyM_SDK_Archetypes_Access_Shape___0__"></a> CanPush<TShape\>\(TShape, Shape<TShape\>\)

Whether this shape should be applied from the ECS to the game.

```csharp
public static bool CanPush<TShape>(this TShape shape, Shape<TShape> whole) where TShape : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`whole` Shape<TShape\>

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_Pull__3___0_ReadyM_SDK_Archetypes_Access_Collection___0___1____2_"></a> Pull<TShape, TAccess, TContext\>\(TShape, Collection<TShape, TAccess\>, TContext\)

Reads the collection back out of the game, through the members the component exposes.

```csharp
public static bool Pull<TShape, TAccess, TContext>(this TShape shape, Collection<TShape, TAccess> collection, TContext context) where TShape : struct, IArchetypeQueryable where TAccess : allows ref struct
```

#### Parameters

`shape` TShape

`collection` Collection<TShape, TAccess\>

`context` TContext

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TAccess` 

`TContext` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_Pull__4___0_ReadyM_SDK_Archetypes_Access_Value___1___2____3_"></a> Pull<TShape, TOwner, TValue, TContext\>\(TShape, Value<TOwner, TValue\>, TContext\)

Reads the value back out of the game into the ECS.

```csharp
public static bool Pull<TShape, TOwner, TValue, TContext>(this TShape shape, Value<TOwner, TValue> value, TContext context) where TShape : struct, IArchetypeQueryable where TOwner : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`value` Value<TOwner, TValue\>

`context` TContext

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TOwner` 

`TValue` 

`TContext` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_Pull__2___0_ReadyM_SDK_Archetypes_Access_Shape___0____1_"></a> Pull<TShape, TContext\>\(TShape, Shape<TShape\>, TContext\)

Reads the entire shape back out of the game, into the ECS.

```csharp
public static bool Pull<TShape, TContext>(this TShape shape, Shape<TShape> whole, TContext context) where TShape : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`whole` Shape<TShape\>

`context` TContext

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TContext` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_Push__3___0_ReadyM_SDK_Archetypes_Access_Collection___0___1____2_"></a> Push<TShape, TAccess, TContext\>\(TShape, Collection<TShape, TAccess\>, TContext\)

Shows the game what the collection holds. The handler is handed it to read, and the
members that would change it answer no while it is being shown.

```csharp
public static bool Push<TShape, TAccess, TContext>(this TShape shape, Collection<TShape, TAccess> collection, TContext context) where TShape : struct, IArchetypeQueryable where TAccess : allows ref struct
```

#### Parameters

`shape` TShape

`collection` Collection<TShape, TAccess\>

`context` TContext

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TAccess` 

`TContext` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_Push__4___0_ReadyM_SDK_Archetypes_Access_Value___1___2____3_"></a> Push<TShape, TOwner, TValue, TContext\>\(TShape, Value<TOwner, TValue\>, TContext\)

Applies value the ECS holds to the game.

```csharp
public static bool Push<TShape, TOwner, TValue, TContext>(this TShape shape, Value<TOwner, TValue> value, TContext context) where TShape : struct, IArchetypeQueryable where TOwner : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`value` Value<TOwner, TValue\>

`context` TContext

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

<code>false</code> when the application is not allowed, or nothing maps the field in this context.

#### Type Parameters

`TShape` 

`TOwner` 

`TValue` 

`TContext` 

### <a id="ReadyM_SDK_Client_Mapping_SyncExtensions_Push__2___0_ReadyM_SDK_Archetypes_Access_Shape___0____1_"></a> Push<TShape, TContext\>\(TShape, Shape<TShape\>, TContext\)

Applies the entire shape the ECS holds to the game.

```csharp
public static bool Push<TShape, TContext>(this TShape shape, Shape<TShape> whole, TContext context) where TShape : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`whole` Shape<TShape\>

`context` TContext

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TContext` 


