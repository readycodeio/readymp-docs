# Struct SpokenTopicsComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct SpokenTopicsComponent : INativeInit, IComponent, INetSerializable, IDisposable
```

#### Implements

[INativeInit](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/ECS/Components/INativeInit.cs), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
INetSerializable, 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_TopicsCount"></a> TopicsCount

```csharp
public int TopicsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_AddTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> AddTopics\(in SpokenTopicEntry\)

```csharp
public void AddTopics(in SpokenTopicEntry value)
```

#### Parameters

`value` [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent__"></a> Assign\(in SpokenTopicsComponent\)

```csharp
public void Assign(in SpokenTopicsComponent value)
```

#### Parameters

`value` [SpokenTopicsComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.SpokenTopicsComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_ClearTopics"></a> ClearTopics\(\)

```csharp
public void ClearTopics()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_ContainsTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> ContainsTopics\(in SpokenTopicEntry\)

```csharp
public bool ContainsTopics(in SpokenTopicEntry value)
```

#### Parameters

`value` [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_GetTopics"></a> GetTopics\(\)

```csharp
public NativeList<SpokenTopicEntry>.ReadOnly GetTopics()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_GetTopics_System_Int32_"></a> GetTopics\(int\)

```csharp
public SpokenTopicEntry GetTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_InsertTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> InsertTopics\(int, in SpokenTopicEntry\)

```csharp
public void InsertTopics(int index, in SpokenTopicEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_RemoveAtTopics_System_Int32_"></a> RemoveAtTopics\(int\)

```csharp
public SpokenTopicEntry RemoveAtTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_SetTopics_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry___"></a> SetTopics\(in NativeList<SpokenTopicEntry\>\)

```csharp
public void SetTopics(in NativeList<SpokenTopicEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_SetTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_SpokenTopicEntry__"></a> SetTopics\(int, in SpokenTopicEntry\)

```csharp
public void SetTopics(int index, in SpokenTopicEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [SpokenTopicEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.SpokenTopicEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_SpokenTopicsComponent_TopicsNotifyChanged_System_Int32_"></a> TopicsNotifyChanged\(int\)

```csharp
public void TopicsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


