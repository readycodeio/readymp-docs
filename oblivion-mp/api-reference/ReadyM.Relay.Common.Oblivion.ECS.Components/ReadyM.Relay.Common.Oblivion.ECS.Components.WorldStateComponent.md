# Struct WorldStateComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public struct WorldStateComponent : INativeInit, IComponent, INetSerializable, IDisposable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_FlagsCount"></a> FlagsCount

```csharp
public int FlagsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_AddFlags_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> AddFlags\(in WorldFlagEntry\)

```csharp
public void AddFlags(in WorldFlagEntry value)
```

#### Parameters

`value` [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent__"></a> Assign\(in WorldStateComponent\)

```csharp
public void Assign(in WorldStateComponent value)
```

#### Parameters

`value` [WorldStateComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.WorldStateComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_ClearFlags"></a> ClearFlags\(\)

```csharp
public void ClearFlags()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_ContainsFlags_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> ContainsFlags\(in WorldFlagEntry\)

```csharp
public bool ContainsFlags(in WorldFlagEntry value)
```

#### Parameters

`value` [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_FlagsNotifyChanged_System_Int32_"></a> FlagsNotifyChanged\(int\)

```csharp
public void FlagsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_GetFlags"></a> GetFlags\(\)

```csharp
public NativeList<WorldFlagEntry>.ReadOnly GetFlags()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_GetFlags_System_Int32_"></a> GetFlags\(int\)

```csharp
public WorldFlagEntry GetFlags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_InsertFlags_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> InsertFlags\(int, in WorldFlagEntry\)

```csharp
public void InsertFlags(int index, in WorldFlagEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_RemoveAtFlags_System_Int32_"></a> RemoveAtFlags\(int\)

```csharp
public WorldFlagEntry RemoveAtFlags(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_SetFlags_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry___"></a> SetFlags\(in NativeList<WorldFlagEntry\>\)

```csharp
public void SetFlags(in NativeList<WorldFlagEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_WorldStateComponent_SetFlags_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_WorldFlagEntry__"></a> SetFlags\(int, in WorldFlagEntry\)

```csharp
public void SetFlags(int index, in WorldFlagEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [WorldFlagEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.WorldFlagEntry.md)


