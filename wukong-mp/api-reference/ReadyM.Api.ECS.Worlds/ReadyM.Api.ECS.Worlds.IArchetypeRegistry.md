# Interface IArchetypeRegistry

Namespace: [ReadyM.Api.ECS.Worlds](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.md)  
Assembly: ReadyM.Api.dll  

Allows registering and modifying entity archetypes in the ECS.

```csharp
public interface IArchetypeRegistry
```

## Methods

### <a id="ReadyM_Api_ECS_Worlds_IArchetypeRegistry_ModifyArchetype_ReadyM_Api_Idents_ArchetypeId_System_Action_ReadyM_Api_ECS_Worlds_ArchetypeBuilder__"></a> ModifyArchetype\(ArchetypeId, Action<ArchetypeBuilder\>\)

Extends an existing entity archetype with additional components.

```csharp
void ModifyArchetype(ArchetypeId archetypeId, Action<ArchetypeBuilder> callback)
```

#### Parameters

`archetypeId` [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

The identifier of the archetype to modify.

`callback` [Action](https://learn.microsoft.com/dotnet/api/system.action-1)<[ArchetypeBuilder](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.ArchetypeBuilder.md)\>

This callback will be invoked immediately to modify the existing registered archetype
            builder. It is NOT invoked on each call

### <a id="ReadyM_Api_ECS_Worlds_IArchetypeRegistry_RegisterArchetype_ReadyM_Api_ECS_Worlds_ArchetypeBuilder_"></a> RegisterArchetype\(ArchetypeBuilder\)

Registers a new entity archetype with the configured components.

```csharp
ArchetypeId RegisterArchetype(ArchetypeBuilder builder)
```

#### Parameters

`builder` [ArchetypeBuilder](../ReadyM.Api.ECS.Worlds/ReadyM.Api.ECS.Worlds.ArchetypeBuilder.md)

The archetype builder with the configured components.

#### Returns

 [ArchetypeId](../ReadyM.Api.Idents/ReadyM.Api.Idents.ArchetypeId.md)

The identifier of the defined archetype.


