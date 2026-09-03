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

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateAreaEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_AreaId_"></a> CreateAreaEntity\(ArchetypeId, AreaId\)

Creates a networked entity in the Area scope.
When the area entity is destroyed, this entity is destroyed too.
The entity is owned by the server.

```csharp
public Entity CreateAreaEntity(ArchetypeId archetypeId, AreaId areaId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`areaId` [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/AreaId.cs)

The Area in whose scope the entity is created.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateAreaEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_PlayerId_"></a> CreateAreaEntity\(ArchetypeId, AreaId, PlayerId\)

Creates a networked entity in the Area scope, with an owner override.
When the area entity is destroyed, this entity is destroyed too.

```csharp
public Entity CreateAreaEntity(ArchetypeId archetypeId, AreaId areaId, PlayerId owner)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`areaId` [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/AreaId.cs)

The Area in whose scope the entity is created.

`owner` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The owner of the entity.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateCellEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_FullCellId_"></a> CreateCellEntity\(ArchetypeId, FullCellId\)

Creates a networked entity in the Cell scope.
When the cell entity is destroyed, this entity is destroyed too.

```csharp
public Entity CreateCellEntity(ArchetypeId archetypeId, FullCellId cellId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`cellId` [FullCellId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/FullCellId.cs)

The Cell in whose scope the entity is created.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateCellEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_FullCellId_ReadyM_Api_Idents_PlayerId_"></a> CreateCellEntity\(ArchetypeId, FullCellId, PlayerId\)

Creates a networked entity in the Cell scope, with an owner override.
When the cell entity is destroyed, this entity is destroyed too.

```csharp
public Entity CreateCellEntity(ArchetypeId archetypeId, FullCellId cellId, PlayerId owner)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`cellId` [FullCellId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/FullCellId.cs)

The Cell in whose scope the entity is created.

`owner` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The owner of the entity.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateCellEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_CellId_"></a> CreateCellEntity\(ArchetypeId, AreaId, CellId\)

Creates a networked entity in the Cell scope.
When the cell entity is destroyed, this entity is destroyed too.
The entity is owned by the server.

```csharp
public Entity CreateCellEntity(ArchetypeId archetypeId, AreaId areaId, CellId cellId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`areaId` [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/AreaId.cs)

The Cell's area.

`cellId` [CellId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/CellId.cs)

The Cell in whose scope the entity is created.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateCellEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_CellId_ReadyM_Api_Idents_PlayerId_"></a> CreateCellEntity\(ArchetypeId, AreaId, CellId, PlayerId\)

Creates a networked entity in the Cell scope, with an owner override.
When the cell entity is destroyed, this entity is destroyed too.

```csharp
public Entity CreateCellEntity(ArchetypeId archetypeId, AreaId areaId, CellId cellId, PlayerId ownerOverride)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`areaId` [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/AreaId.cs)

The Cell's area.

`cellId` [CellId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/CellId.cs)

The Cell in whose scope the entity is created.

`ownerOverride` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The owner of the entity.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateEntity_ReadyM_Api_Idents_ArchetypeId_"></a> CreateEntity\(ArchetypeId\)

Create a server-owned networked entity in no particular scope.

```csharp
public Entity CreateEntity(ArchetypeId archetypeId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_PlayerId_"></a> CreateEntity\(ArchetypeId, PlayerId\)

Create a networked entity in no particular scope, with an owner override.
The owner override is used to determine which client can modify it.

```csharp
public Entity CreateEntity(ArchetypeId archetypeId, PlayerId owner)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`owner` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The owner of the entity.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateGlobalEntity_ReadyM_Api_Idents_ArchetypeId_"></a> CreateGlobalEntity\(ArchetypeId\)

Creates a networked entity in the Global scope. The entity is owned by the server.

```csharp
public Entity CreateGlobalEntity(ArchetypeId archetypeId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateGlobalEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_PlayerId_"></a> CreateGlobalEntity\(ArchetypeId, PlayerId\)

Creates a networked entity in the Global scope, with an owner override.

```csharp
public Entity CreateGlobalEntity(ArchetypeId archetypeId, PlayerId owner)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`owner` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The owner of the entity.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateLocalEntity_ReadyM_Api_Idents_ArchetypeId_"></a> CreateLocalEntity\(ArchetypeId\)

Creates a server-only entity: never replicated, invisible to clients.

```csharp
public Entity CreateLocalEntity(ArchetypeId archetypeId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreateLocalEntity_ReadyM_Api_Idents_ArchetypeId_System_Int32_"></a> CreateLocalEntity\(ArchetypeId, int\)

Creates a server-only entity: never replicated, invisible to clients.

```csharp
public Entity CreateLocalEntity(ArchetypeId archetypeId, int parentId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`parentId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The entity that owns the new one. Deleting it with
            **Int32)** deletes the new one too.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreatePlayerEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_PlayerId_"></a> CreatePlayerEntity\(ArchetypeId, PlayerId\)

Creates a networked entity in the Player scope.
When the associated player entity is destroyed, this entity is destroyed too.
The entity is owned by the server (the player can only read it, not modify it).

```csharp
public Entity CreatePlayerEntity(ArchetypeId archetypeId, PlayerId playerId)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`playerId` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The player in whose scope the entity is created.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_CreatePlayerEntity_ReadyM_Api_Idents_ArchetypeId_ReadyM_Api_Idents_PlayerId_ReadyM_Api_Idents_PlayerId_"></a> CreatePlayerEntity\(ArchetypeId, PlayerId, PlayerId\)

Creates a networked entity in the Player scope, with an owner override.
Usually, the player in whose scope the entity is created should be the owner.

```csharp
public Entity CreatePlayerEntity(ArchetypeId archetypeId, PlayerId playerId, PlayerId owner)
```

#### Parameters

`archetypeId` [ArchetypeId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/ArchetypeId.cs)

The entity Archetype.

`playerId` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The player in whose scope the entity is created.

`owner` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/d18fdc661c93a259eeb85e08d6767d73dcca0550/src/ReadyM.Api/Idents/PlayerId.cs)

The owner of the entity.

#### Returns

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The created entity.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_DeleteEntity_ReadyM_Relay_Server_Sdk_Ecs_Entity__"></a> DeleteEntity\(in Entity\)

Deletes a networked entity.

```csharp
public bool DeleteEntity(in Entity entity)
```

#### Parameters

`entity` [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

The entity to delete.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the entity was deleted (true) or already gone (false).

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_DeleteEntity_System_Int32_"></a> DeleteEntity\(int\)

Deletes a networked entity.

```csharp
public bool DeleteEntity(int entityId)
```

#### Parameters

`entityId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID of the entity to delete.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the entity was deleted (true) or already gone (false).

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_DeleteEntityTree_System_Int32_"></a> DeleteEntityTree\(int\)

Deletes an entity together with everything below it. Deleting a parent on its own leaves its
children behind without one, so this is the call to use for anything that owns other entities.

```csharp
public int DeleteEntityTree(int entityId)
```

#### Parameters

`entityId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID of the entity to delete along with its children.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

How many entities were deleted.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_GetChildren_System_Int32_"></a> GetChildren\(int\)

The children of an entity. This one allocates, so call it outside a query callback, where a
no-GC region is held over raw component pointers.

```csharp
public int[] GetChildren(int parentId)
```

#### Parameters

`parentId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)\[\]

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_GetComponentRef__1_System_Int32_"></a> GetComponentRef<T\>\(int\)

```csharp
public ref T GetComponentRef<T>(int entityId) where T : struct
```

#### Parameters

`entityId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 T

#### Type Parameters

`T` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_GetParent_System_Int32_"></a> GetParent\(int\)

0 when the entity has no parent.

```csharp
public int GetParent(int childId)
```

#### Parameters

`childId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID of the child entity.

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The ID of the parent entity, or 0 if there is no parent.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_HasComponent__1_System_Int32_"></a> HasComponent<T\>\(int\)

```csharp
public bool HasComponent<T>(int entityId) where T : struct
```

#### Parameters

`entityId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

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

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_QueryWithEntity__1_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachEntity___0__"></a> QueryWithEntity<T\>\(EmbedForEachEntity<T\>\)

Iterates a component along with the entity id it belongs to.

```csharp
public void QueryWithEntity<T>(EcsApi.EmbedForEachEntity<T> callback) where T : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachEntity<T\>

#### Type Parameters

`T` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_QueryWithEntity__2_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_EmbedForEachEntity___0___1__"></a> QueryWithEntity<T1, T2\>\(EmbedForEachEntity<T1, T2\>\)

Iterates a component along with the entity id it belongs to.

```csharp
public void QueryWithEntity<T1, T2>(EcsApi.EmbedForEachEntity<T1, T2> callback) where T1 : struct where T2 : struct
```

#### Parameters

`callback` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md).EmbedForEachEntity<T1, T2\>

#### Type Parameters

`T1` 

`T2` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_SetComponent__1_System_Int32___0__"></a> SetComponent<T\>\(int, in T\)

Writes a component by entity id.

```csharp
public void SetComponent<T>(int entityId, in T component) where T : struct
```

#### Parameters

`entityId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`component` T

#### Type Parameters

`T` 

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_SetParent_System_Int32_System_Int32_"></a> SetParent\(int, int\)

Makes the child belong to the parent, replacing whatever parent it had.

```csharp
public int SetParent(int childId, int parentId)
```

#### Parameters

`childId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`parentId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

The index the child took among the parent's children, or -1 if it already was one.

### <a id="ReadyM_Relay_Server_Sdk_Ecs_EcsApi_TryGetComponent__1_System_Int32___0__"></a> TryGetComponent<T\>\(int, out T\)

False when the entity is gone or does not carry the component.

```csharp
public bool TryGetComponent<T>(int entityId, out T component) where T : struct
```

#### Parameters

`entityId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`component` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


