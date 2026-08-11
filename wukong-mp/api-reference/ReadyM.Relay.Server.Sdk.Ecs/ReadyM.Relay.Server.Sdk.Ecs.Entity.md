# Struct Entity

Namespace: [ReadyM.Relay.Server.Sdk.Ecs](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

Represents an entity in the ECS.

```csharp
public readonly struct Entity
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_Ecs_Entity_GetComponent__1"></a> GetComponent<T\>\(\)

Gets a reference to the component of type T associated with this entity.

```csharp
public ref T GetComponent<T>() where T : struct
```

#### Returns

 T

A mutable reference to the component.

#### Type Parameters

`T` 

Type of the component

#### Remarks

Attempting to access a component that does not exist on the entity's archetype will crash your mod.


