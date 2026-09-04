# Struct DialogueComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct DialogueComponent : IServerAuthoritative, INativeInit, IComponent, INetSerializable, IDisposable
```

#### Implements

[IServerAuthoritative](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Mapping/Tags/IServerAuthoritative.cs), 
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_ResponsesCount"></a> ResponsesCount

```csharp
public int ResponsesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_TopicsCount"></a> TopicsCount

```csharp
public int TopicsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_AddResponses_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> AddResponses\(in DialogueResponse\)

```csharp
public void AddResponses(in DialogueResponse value)
```

#### Parameters

`value` [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_AddTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> AddTopics\(in DialogueTopic\)

```csharp
public void AddTopics(in DialogueTopic value)
```

#### Parameters

`value` [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent__"></a> Assign\(in DialogueComponent\)

```csharp
public void Assign(in DialogueComponent value)
```

#### Parameters

`value` [DialogueComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.DialogueComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_ClearResponses"></a> ClearResponses\(\)

```csharp
public void ClearResponses()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_ClearTopics"></a> ClearTopics\(\)

```csharp
public void ClearTopics()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_ContainsResponses_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> ContainsResponses\(in DialogueResponse\)

```csharp
public bool ContainsResponses(in DialogueResponse value)
```

#### Parameters

`value` [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_ContainsTopics_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> ContainsTopics\(in DialogueTopic\)

```csharp
public bool ContainsTopics(in DialogueTopic value)
```

#### Parameters

`value` [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_GetResponses"></a> GetResponses\(\)

```csharp
public NativeList<DialogueResponse>.ReadOnly GetResponses()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_GetResponses_System_Int32_"></a> GetResponses\(int\)

```csharp
public DialogueResponse GetResponses(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_GetTopics"></a> GetTopics\(\)

```csharp
public NativeList<DialogueTopic>.ReadOnly GetTopics()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_GetTopics_System_Int32_"></a> GetTopics\(int\)

```csharp
public DialogueTopic GetTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_InsertResponses_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> InsertResponses\(int, in DialogueResponse\)

```csharp
public void InsertResponses(int index, in DialogueResponse value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_InsertTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> InsertTopics\(int, in DialogueTopic\)

```csharp
public void InsertTopics(int index, in DialogueTopic value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_RemoveAtResponses_System_Int32_"></a> RemoveAtResponses\(int\)

```csharp
public DialogueResponse RemoveAtResponses(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_RemoveAtTopics_System_Int32_"></a> RemoveAtTopics\(int\)

```csharp
public DialogueTopic RemoveAtTopics(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_ResponsesNotifyChanged_System_Int32_"></a> ResponsesNotifyChanged\(int\)

```csharp
public void ResponsesNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_SetResponses_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse___"></a> SetResponses\(in NativeList<DialogueResponse\>\)

```csharp
public void SetResponses(in NativeList<DialogueResponse> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_SetResponses_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueResponse__"></a> SetResponses\(int, in DialogueResponse\)

```csharp
public void SetResponses(int index, in DialogueResponse value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [DialogueResponse](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueResponse.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_SetTopics_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic___"></a> SetTopics\(in NativeList<DialogueTopic\>\)

```csharp
public void SetTopics(in NativeList<DialogueTopic> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_SetTopics_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DialogueTopic__"></a> SetTopics\(int, in DialogueTopic\)

```csharp
public void SetTopics(int index, in DialogueTopic value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [DialogueTopic](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DialogueTopic.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DialogueComponent_TopicsNotifyChanged_System_Int32_"></a> TopicsNotifyChanged\(int\)

```csharp
public void TopicsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


