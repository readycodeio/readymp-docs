# Struct MovieComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the state of the movie sequences that are currently playing or have finished playing in a given area.

```csharp
public struct MovieComponent : IComponent, INetSerializable, IDisposable
```

#### Implements

[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_FinishedSequencesCount"></a> FinishedSequencesCount

```csharp
public int FinishedSequencesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_StartedSequencesCount"></a> StartedSequencesCount

```csharp
public int StartedSequencesCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_AddFinishedSequences_System_Int32__"></a> AddFinishedSequences\(in int\)

```csharp
public void AddFinishedSequences(in int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

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

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_ClearFinishedSequences"></a> ClearFinishedSequences\(\)

```csharp
public void ClearFinishedSequences()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_ClearStartedSequences"></a> ClearStartedSequences\(\)

```csharp
public void ClearStartedSequences()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_ContainsFinishedSequences_System_Int32__"></a> ContainsFinishedSequences\(in int\)

```csharp
public bool ContainsFinishedSequences(in int value)
```

#### Parameters

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

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

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetFinishedSequences"></a> GetFinishedSequences\(\)

```csharp
public NativeList<int>.ReadOnly GetFinishedSequences()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetFinishedSequences_System_Int32_"></a> GetFinishedSequences\(int\)

```csharp
public int GetFinishedSequences(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetStartedSequences"></a> GetStartedSequences\(\)

```csharp
public NativeList<int>.ReadOnly GetStartedSequences()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_GetStartedSequences_System_Int32_"></a> GetStartedSequences\(int\)

```csharp
public int GetStartedSequences(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_InsertFinishedSequences_System_Int32_System_Int32__"></a> InsertFinishedSequences\(int, in int\)

```csharp
public void InsertFinishedSequences(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_InsertStartedSequences_System_Int32_System_Int32__"></a> InsertStartedSequences\(int, in int\)

```csharp
public void InsertStartedSequences(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_RemoveAtFinishedSequences_System_Int32_"></a> RemoveAtFinishedSequences\(int\)

```csharp
public int RemoveAtFinishedSequences(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

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

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_SetFinishedSequences_Yooni_Native_Container_NativeList_System_Int32___"></a> SetFinishedSequences\(in NativeList<int\>\)

```csharp
public void SetFinishedSequences(in NativeList<int> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_SetFinishedSequences_System_Int32_System_Int32__"></a> SetFinishedSequences\(int, in int\)

```csharp
public void SetFinishedSequences(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_SetStartedSequences_Yooni_Native_Container_NativeList_System_Int32___"></a> SetStartedSequences\(in NativeList<int\>\)

```csharp
public void SetStartedSequences(in NativeList<int> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/YooniCSharp/Native/Container/NativeList.cs)<[int](https://learn.microsoft.com/dotnet/api/system.int32)\>

### <a id="ReadyM_Wukong_Common_ECS_Components_MovieComponent_SetStartedSequences_System_Int32_System_Int32__"></a> SetStartedSequences\(int, in int\)

```csharp
public void SetStartedSequences(int index, in int value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [int](https://learn.microsoft.com/dotnet/api/system.int32)


