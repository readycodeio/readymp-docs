# Interface IArchetypeRegistry

Namespace: [ReadyM.Api.ECS.Worlds](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.md)  
Assembly: ReadyM.Api.dll  

```csharp
public interface IArchetypeRegistry
```

## Methods

### <a id="ReadyM_Api_ECS_Worlds_IArchetypeRegistry_ModifyArchetype_ReadyM_Api_Idents_ArchetypeId_System_Action_ReadyM_Api_ECS_Worlds_EntityBuilderBase__"></a> ModifyArchetype\(ArchetypeId, Action<EntityBuilderBase\>\)

```csharp
void ModifyArchetype(ArchetypeId archetypeId, Action<EntityBuilderBase> constructor)
```

#### Parameters

`archetypeId` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

`constructor` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)\>

### <a id="ReadyM_Api_ECS_Worlds_IArchetypeRegistry_RegisterArchetype_System_Action_ReadyM_Api_ECS_Worlds_EntityBuilderBase__"></a> RegisterArchetype\(Action<EntityBuilderBase\>\)

```csharp
ArchetypeId RegisterArchetype(Action<EntityBuilderBase> constructor)
```

#### Parameters

`constructor` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[EntityBuilderBase](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.EntityBuilderBase.md)\>

#### Returns

 [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)


