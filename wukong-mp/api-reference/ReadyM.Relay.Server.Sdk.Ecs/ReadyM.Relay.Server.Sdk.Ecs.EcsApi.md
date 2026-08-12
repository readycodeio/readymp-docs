# Class EcsApi

Namespace: [ReadyM.Relay.Server.Sdk.Ecs](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Mod-side ECS API. Wraps the function pointers exposed by the AOT server.
All component types - whether defined in the server binary or in this mod - are
identified by <code>int</code> component IDs assigned at registration time.

```csharp
public class EcsApi
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateEntity_ReadyM_Api_Idents_ArchetypeId_"></a> CreateEntity\(ArchetypeId\)

```csharp
public Entity CreateEntity(ArchetypeId archetypeId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/ReadyM.Api/Idents/ArchetypeId.cs)

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__1_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEach___0__"></a> Query<T\>\(EmbedForEach<T\>\)

```csharp
public void Query<T>(EcsApi.EmbedForEach<T> callback) where T : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEach<T\>

#### Type Parameters

`T` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__2___1_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachStateManaged___0___1__"></a> Query<T, TState\>\(TState, EmbedForEachStateManaged<T, TState\>\)

```csharp
public void Query<T, TState>(TState state, EcsApi.EmbedForEachStateManaged<T, TState> callback) where T : struct where TState : class
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachStateManaged<T, TState\>

#### Type Parameters

`T` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__2___1__ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachState___0___1__"></a> Query<T, TState\>\(ref TState, EmbedForEachState<T, TState\>\)

```csharp
public void Query<T, TState>(ref TState state, EcsApi.EmbedForEachState<T, TState> callback) where T : struct where TState : unmanaged
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachState<T, TState\>

#### Type Parameters

`T` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__2_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEach___0___1__"></a> Query<T1, T2\>\(EmbedForEach<T1, T2\>\)

```csharp
public void Query<T1, T2>(EcsApi.EmbedForEach<T1, T2> callback) where T1 : struct where T2 : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEach<T1, T2\>

#### Type Parameters

`T1` 

`T2` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__3___2_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachStateManaged___0___1___2__"></a> Query<T1, T2, TState\>\(TState, EmbedForEachStateManaged<T1, T2, TState\>\)

```csharp
public void Query<T1, T2, TState>(TState state, EcsApi.EmbedForEachStateManaged<T1, T2, TState> callback) where T1 : struct where T2 : struct where TState : class
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachStateManaged<T1, T2, TState\>

#### Type Parameters

`T1` 

`T2` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__3___2__ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachState___0___1___2__"></a> Query<T1, T2, TState\>\(ref TState, EmbedForEachState<T1, T2, TState\>\)

```csharp
public void Query<T1, T2, TState>(ref TState state, EcsApi.EmbedForEachState<T1, T2, TState> callback) where T1 : struct where T2 : struct where TState : unmanaged
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachState<T1, T2, TState\>

#### Type Parameters

`T1` 

`T2` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__3_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEach___0___1___2__"></a> Query<T1, T2, T3\>\(EmbedForEach<T1, T2, T3\>\)

```csharp
public void Query<T1, T2, T3>(EcsApi.EmbedForEach<T1, T2, T3> callback) where T1 : struct where T2 : struct where T3 : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEach<T1, T2, T3\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__4___3_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachStateManaged___0___1___2___3__"></a> Query<T1, T2, T3, TState\>\(TState, EmbedForEachStateManaged<T1, T2, T3, TState\>\)

```csharp
public void Query<T1, T2, T3, TState>(TState state, EcsApi.EmbedForEachStateManaged<T1, T2, T3, TState> callback) where T1 : struct where T2 : struct where T3 : struct where TState : class
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachStateManaged<T1, T2, T3, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__4___3__ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachState___0___1___2___3__"></a> Query<T1, T2, T3, TState\>\(ref TState, EmbedForEachState<T1, T2, T3, TState\>\)

```csharp
public void Query<T1, T2, T3, TState>(ref TState state, EcsApi.EmbedForEachState<T1, T2, T3, TState> callback) where T1 : struct where T2 : struct where T3 : struct where TState : unmanaged
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachState<T1, T2, T3, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__4_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEach___0___1___2___3__"></a> Query<T1, T2, T3, T4\>\(EmbedForEach<T1, T2, T3, T4\>\)

```csharp
public void Query<T1, T2, T3, T4>(EcsApi.EmbedForEach<T1, T2, T3, T4> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEach<T1, T2, T3, T4\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__5___4_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachStateManaged___0___1___2___3___4__"></a> Query<T1, T2, T3, T4, TState\>\(TState, EmbedForEachStateManaged<T1, T2, T3, T4, TState\>\)

```csharp
public void Query<T1, T2, T3, T4, TState>(TState state, EcsApi.EmbedForEachStateManaged<T1, T2, T3, T4, TState> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where TState : class
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachStateManaged<T1, T2, T3, T4, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__5___4__ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachState___0___1___2___3___4__"></a> Query<T1, T2, T3, T4, TState\>\(ref TState, EmbedForEachState<T1, T2, T3, T4, TState\>\)

```csharp
public void Query<T1, T2, T3, T4, TState>(ref TState state, EcsApi.EmbedForEachState<T1, T2, T3, T4, TState> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where TState : unmanaged
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachState<T1, T2, T3, T4, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__5_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEach___0___1___2___3___4__"></a> Query<T1, T2, T3, T4, T5\>\(EmbedForEach<T1, T2, T3, T4, T5\>\)

```csharp
public void Query<T1, T2, T3, T4, T5>(EcsApi.EmbedForEach<T1, T2, T3, T4, T5> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where T5 : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEach<T1, T2, T3, T4, T5\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__6___5_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachStateManaged___0___1___2___3___4___5__"></a> Query<T1, T2, T3, T4, T5, TState\>\(TState, EmbedForEachStateManaged<T1, T2, T3, T4, T5, TState\>\)

```csharp
public void Query<T1, T2, T3, T4, T5, TState>(TState state, EcsApi.EmbedForEachStateManaged<T1, T2, T3, T4, T5, TState> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where T5 : struct where TState : class
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachStateManaged<T1, T2, T3, T4, T5, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__6___5__ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachState___0___1___2___3___4___5__"></a> Query<T1, T2, T3, T4, T5, TState\>\(ref TState, EmbedForEachState<T1, T2, T3, T4, T5, TState\>\)

```csharp
public void Query<T1, T2, T3, T4, T5, TState>(ref TState state, EcsApi.EmbedForEachState<T1, T2, T3, T4, T5, TState> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where T5 : struct where TState : unmanaged
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachState<T1, T2, T3, T4, T5, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__6_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEach___0___1___2___3___4___5__"></a> Query<T1, T2, T3, T4, T5, T6\>\(EmbedForEach<T1, T2, T3, T4, T5, T6\>\)

```csharp
public void Query<T1, T2, T3, T4, T5, T6>(EcsApi.EmbedForEach<T1, T2, T3, T4, T5, T6> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where T5 : struct where T6 : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEach<T1, T2, T3, T4, T5, T6\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`T6` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__7___6_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachStateManaged___0___1___2___3___4___5___6__"></a> Query<T1, T2, T3, T4, T5, T6, TState\>\(TState, EmbedForEachStateManaged<T1, T2, T3, T4, T5, T6, TState\>\)

```csharp
public void Query<T1, T2, T3, T4, T5, T6, TState>(TState state, EcsApi.EmbedForEachStateManaged<T1, T2, T3, T4, T5, T6, TState> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where T5 : struct where T6 : struct where TState : class
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachStateManaged<T1, T2, T3, T4, T5, T6, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`T6` 

`TState` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_Query__7___6__ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachState___0___1___2___3___4___5___6__"></a> Query<T1, T2, T3, T4, T5, T6, TState\>\(ref TState, EmbedForEachState<T1, T2, T3, T4, T5, T6, TState\>\)

```csharp
public void Query<T1, T2, T3, T4, T5, T6, TState>(ref TState state, EcsApi.EmbedForEachState<T1, T2, T3, T4, T5, T6, TState> callback) where T1 : struct where T2 : struct where T3 : struct where T4 : struct where T5 : struct where T6 : struct where TState : unmanaged
```

#### Parameters

`state` TState

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachState<T1, T2, T3, T4, T5, T6, TState\>

#### Type Parameters

`T1` 

`T2` 

`T3` 

`T4` 

`T5` 

`T6` 

`TState` 


