# Struct KeepEmptyOblivionScopeAliveTag

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Tags](../ReadyM.Relay.Common.Oblivion.ECS.Tags/ReadyM.Relay.Common.Oblivion.ECS.Tags.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Causes the area or cell that contains this entity to not be deleted, even when all players leave that scope.
Entities with this tag in cell scopes also cause those cells' parent areas to be kept alive.

```csharp
public readonly struct KeepEmptyOblivionScopeAliveTag : ITag
```

#### Implements

[ITag](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/ITag.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)


