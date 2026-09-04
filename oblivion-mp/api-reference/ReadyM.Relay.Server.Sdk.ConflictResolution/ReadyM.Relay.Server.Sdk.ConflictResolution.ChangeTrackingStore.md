# Class ChangeTrackingStore

Namespace: [ReadyM.Relay.Server.Sdk.ConflictResolution](../ReadyM.Relay.Server.Sdk.ConflictResolution/ReadyM.Relay.Server.Sdk.ConflictResolution.md)  
Assembly: ReadyM.Relay.Server.Sdk.dll  

```csharp
public class ChangeTrackingStore
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ChangeTrackingStore](../ReadyM.Relay.Server.Sdk.ConflictResolution/ReadyM.Relay.Server.Sdk.ConflictResolution.ChangeTrackingStore.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Server_Sdk_ConflictResolution_ChangeTrackingStore__ctor_ReadyM_Relay_Server_Sdk_Ecs_EcsApi_"></a> ChangeTrackingStore\(EcsApi\)

```csharp
public ChangeTrackingStore(EcsApi ecs)
```

#### Parameters

`ecs` [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md)

## Methods

### <a id="ReadyM_Relay_Server_Sdk_ConflictResolution_ChangeTrackingStore_GetChangeComponent__1_System_Int32_"></a> GetChangeComponent<T\>\(int\)

```csharp
public ref T GetChangeComponent<T>(int id) where T : struct, IComponent
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 T

#### Type Parameters

`T` 


