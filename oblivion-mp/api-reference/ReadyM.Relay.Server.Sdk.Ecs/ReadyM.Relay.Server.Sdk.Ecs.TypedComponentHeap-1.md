# Class TypedComponentHeap<T>

Namespace: [ReadyM.Relay.Server.Sdk.Ecs](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

CoreCLR-side owner of a typed component array. Exposes all mutations through delegates so
write barriers always fire correctly - even for non-blittable T. The AOT relay holds the
resulting AOTHeapPointers and dispatches through them; it never writes directly into the array.

```csharp
public sealed class TypedComponentHeap<T> : IDisposable where T : struct
```

#### Type Parameters

`T` 

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TypedComponentHeap<T\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.TypedComponentHeap-1.md)

#### Implements

[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1__ctor_System_Int32_"></a> TypedComponentHeap\(int\)

```csharp
public TypedComponentHeap(int initialCapacity)
```

#### Parameters

`initialCapacity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_IsBlittable"></a> IsBlittable

```csharp
public bool IsBlittable { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_Stride"></a> Stride

```csharp
public int Stride { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_Finalize"></a> \~TypedComponentHeap\(\)

```csharp
protected ~TypedComponentHeap()
```

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_GetComponent_System_Int32_"></a> GetComponent\(int\)

```csharp
public T GetComponent(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 T

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_GetPointers"></a> GetPointers\(\)

Returns the pointer bundle to hand to the AOT relay for this heap.
The returned pointers are stable for the lifetime of this instance.

```csharp
public AOTHeapPointers GetPointers()
```

#### Returns

 [AOTHeapPointers](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/Archetype/AOTHeapPointers.cs)

### <a id="ReadyM_Relay_Server_Sdk_Ecs_TypedComponentHeap_1_SetComponent_System_Int32__0_"></a> SetComponent\(int, T\)

```csharp
public void SetComponent(int index, T value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` T


