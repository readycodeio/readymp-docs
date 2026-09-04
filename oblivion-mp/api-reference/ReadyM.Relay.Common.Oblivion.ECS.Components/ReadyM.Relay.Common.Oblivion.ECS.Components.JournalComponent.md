# Struct JournalComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct JournalComponent : IServerAuthoritative, INativeInit, IComponent, INetSerializable, IDisposable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_CompassTargetsCount"></a> CompassTargetsCount

```csharp
public int CompassTargetsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_QuestsCount"></a> QuestsCount

```csharp
public int QuestsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_AddCompassTargets_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> AddCompassTargets\(in QuestCompassTarget\)

```csharp
public void AddCompassTargets(in QuestCompassTarget value)
```

#### Parameters

`value` [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_AddQuests_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> AddQuests\(in QuestEntry\)

```csharp
public void AddQuests(in QuestEntry value)
```

#### Parameters

`value` [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent__"></a> Assign\(in JournalComponent\)

```csharp
public void Assign(in JournalComponent value)
```

#### Parameters

`value` [JournalComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.JournalComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_ClearCompassTargets"></a> ClearCompassTargets\(\)

```csharp
public void ClearCompassTargets()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_ClearQuests"></a> ClearQuests\(\)

```csharp
public void ClearQuests()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_CompassTargetsNotifyChanged_System_Int32_"></a> CompassTargetsNotifyChanged\(int\)

```csharp
public void CompassTargetsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_ContainsCompassTargets_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> ContainsCompassTargets\(in QuestCompassTarget\)

```csharp
public bool ContainsCompassTargets(in QuestCompassTarget value)
```

#### Parameters

`value` [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_ContainsQuests_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> ContainsQuests\(in QuestEntry\)

```csharp
public bool ContainsQuests(in QuestEntry value)
```

#### Parameters

`value` [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_GetCompassTargets"></a> GetCompassTargets\(\)

```csharp
public NativeList<QuestCompassTarget>.ReadOnly GetCompassTargets()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_GetCompassTargets_System_Int32_"></a> GetCompassTargets\(int\)

```csharp
public QuestCompassTarget GetCompassTargets(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_GetQuests"></a> GetQuests\(\)

```csharp
public NativeList<QuestEntry>.ReadOnly GetQuests()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_GetQuests_System_Int32_"></a> GetQuests\(int\)

```csharp
public QuestEntry GetQuests(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_InsertCompassTargets_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> InsertCompassTargets\(int, in QuestCompassTarget\)

```csharp
public void InsertCompassTargets(int index, in QuestCompassTarget value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_InsertQuests_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> InsertQuests\(int, in QuestEntry\)

```csharp
public void InsertQuests(int index, in QuestEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_QuestsNotifyChanged_System_Int32_"></a> QuestsNotifyChanged\(int\)

```csharp
public void QuestsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_RemoveAtCompassTargets_System_Int32_"></a> RemoveAtCompassTargets\(int\)

```csharp
public QuestCompassTarget RemoveAtCompassTargets(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_RemoveAtQuests_System_Int32_"></a> RemoveAtQuests\(int\)

```csharp
public QuestEntry RemoveAtQuests(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_SetCompassTargets_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget___"></a> SetCompassTargets\(in NativeList<QuestCompassTarget\>\)

```csharp
public void SetCompassTargets(in NativeList<QuestCompassTarget> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_SetCompassTargets_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget__"></a> SetCompassTargets\(int, in QuestCompassTarget\)

```csharp
public void SetCompassTargets(int index, in QuestCompassTarget value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [QuestCompassTarget](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestCompassTarget.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_SetQuests_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry___"></a> SetQuests\(in NativeList<QuestEntry\>\)

```csharp
public void SetQuests(in NativeList<QuestEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_JournalComponent_SetQuests_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_QuestEntry__"></a> SetQuests\(int, in QuestEntry\)

```csharp
public void SetQuests(int index, in QuestEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [QuestEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.QuestEntry.md)


