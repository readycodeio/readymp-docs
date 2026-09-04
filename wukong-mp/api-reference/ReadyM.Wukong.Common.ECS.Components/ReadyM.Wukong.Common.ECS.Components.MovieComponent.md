# Struct MovieComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the state of the movie sequences that have been started in a given area.

```csharp
public struct MovieComponent : INativeInit, IComponent, INetSerializable, IDisposable
```

#### Implements

[INativeInit](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/ECS/Components/INativeInit.cs), 
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

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_StartedSequencesCount"></a> StartedSequencesCount

```csharp
public int StartedSequencesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_AddStartedSequences_System_Int32__"></a> AddStartedSequences\(in int\)

```csharp
public void AddStartedSequences(in int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_Assign_ReadyM_Wukong_Common_ECS_Components_MovieComponent__"></a> Assign\(in MovieComponent\)

```csharp
public void Assign(in MovieComponent value)
```

#### Parameters

`value` [MovieComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.MovieComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_ClearStartedSequences"></a> ClearStartedSequences\(\)

```csharp
public void ClearStartedSequences()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_ContainsStartedSequences_System_Int32__"></a> ContainsStartedSequences\(in int\)

```csharp
public bool ContainsStartedSequences(in int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetStartedSequences"></a> GetStartedSequences\(\)

```csharp
public NativeList<int>.ReadOnly GetStartedSequences()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetStartedSequences_System_Int32_"></a> GetStartedSequences\(int\)

```csharp
public int GetStartedSequences(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_InsertStartedSequences_System_Int32_System_Int32__"></a> InsertStartedSequences\(int, in int\)

```csharp
public void InsertStartedSequences(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_RemoveAtStartedSequences_System_Int32_"></a> RemoveAtStartedSequences\(int\)

```csharp
public int RemoveAtStartedSequences(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_SetStartedSequences_Yooni_Native_Container_NativeList_System_Int32___"></a> SetStartedSequences\(in NativeList<int\>\)

```csharp
public void SetStartedSequences(in NativeList<int> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_SetStartedSequences_System_Int32_System_Int32__"></a> SetStartedSequences\(int, in int\)

```csharp
public void SetStartedSequences(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_StartedSequencesNotifyChanged_System_Int32_"></a> StartedSequencesNotifyChanged\(int\)

```csharp
public void StartedSequencesNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


