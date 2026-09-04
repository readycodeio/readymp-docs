# Interface ISynchronizationApi<T>

Namespace: [ReadyM.Sdk.Common.Entities](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.md)  
Assembly: ReadyM.Sdk.Common.dll  

Networked entity synchronization API. Provides access to the synchronized state of the game world.

```csharp
public interface ISynchronizationApi<T> : ISynchronizationApi where T : struct
```

#### Type Parameters

`T` 

#### Implements

[ISynchronizationApi](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.ISynchronizationApi.md)

#### Extension Methods

[SynchronizationApiExtensions.RequireLocalPlayer<T\>\(ISynchronizationApi<T\>\)](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.SynchronizationApiExtensions.md#ReadyM\_Sdk\_Common\_Entities\_SynchronizationApiExtensions\_RequireLocalPlayer\_\_1\_ReadyM\_Sdk\_Common\_Entities\_ISynchronizationApi\_\_\_0\_\_), 
[SynchronizationApiExtensions.TryGetLocalPlayer<T\>\(ISynchronizationApi<T\>, out T\)](../ReadyM.Sdk.Common.Entities/ReadyM.Sdk.Common.Entities.SynchronizationApiExtensions.md#ReadyM\_Sdk\_Common\_Entities\_SynchronizationApiExtensions\_TryGetLocalPlayer\_\_1\_ReadyM\_Sdk\_Common\_Entities\_ISynchronizationApi\_\_\_0\_\_\_\_0\_\_)

## Properties

### <a id="ReadyM_Sdk_Common_Entities_ISynchronizationApi_1_AllPlayers"></a> AllPlayers

```csharp
IEnumerable<T> AllPlayers { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<T\>

### <a id="ReadyM_Sdk_Common_Entities_ISynchronizationApi_1_LocalPlayer"></a> LocalPlayer

```csharp
T? LocalPlayer { get; }
```

#### Property Value

 T?

## Methods

### <a id="ReadyM_Sdk_Common_Entities_ISynchronizationApi_1_RequireLocalPlayer"></a> RequireLocalPlayer\(\)

```csharp
T RequireLocalPlayer()
```

#### Returns

 T


