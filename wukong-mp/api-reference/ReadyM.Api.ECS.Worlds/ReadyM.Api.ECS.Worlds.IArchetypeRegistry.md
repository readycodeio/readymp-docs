# Interface IArchetypeRegistry

Namespace: [ReadyM.Api.ECS.Worlds](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.md)  
Assembly: ReadyM.Api.dll  

Allows registering and modifying entity archetypes in the ECS.

```csharp
public interface IArchetypeRegistry
```

## Methods

### <a id="ReadyM_Api_ECS_Worlds_IArchetypeRegistry_ModifyArchetype_ReadyM_Api_Idents_ArchetypeId_System_Action_ReadyM_Api_ECS_Worlds_EntityBuilderBase__"></a> ModifyArchetype\(ArchetypeId, Action<EntityBuilderBase\>\)

Extends an existing entity archetype with additional components.

```csharp
void ModifyArchetype(ArchetypeId archetypeId, Action<EntityBuilderBase> build)
```

#### Parameters

`archetypeId` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

The identifier of the archetype to modify.

`build` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)\>

A action for adding components.

### <a id="ReadyM_Api_ECS_Worlds_IArchetypeRegistry_RegisterArchetype_System_Action_ReadyM_Api_ECS_Worlds_EntityBuilderBase__"></a> RegisterArchetype\(Action<EntityBuilderBase\>\)

Registers a new entity archetype with the configured components.

```csharp
ArchetypeId RegisterArchetype(Action<EntityBuilderBase> build)
```

#### Parameters

`build` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)\>

An action for adding components.

#### Returns

 [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

The identifier of the defined archetype.


