# Struct TamerComponent

Namespace: [ReadyM.Wukong.Common.ECS.Components](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.md)  
Assembly: ReadyM.Wukong.Common.dll  

Holds the state of a tamer (monster) entity.

```csharp
public struct TamerComponent : INativeInit, IComponent, INetSerializable, IDisposable
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

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_ForceKeepSpawned"></a> ForceKeepSpawned

```csharp
public bool ForceKeepSpawned { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_Guid"></a> Guid

```csharp
public NativeString256 Guid { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_HasFsmPaused"></a> HasFsmPaused

```csharp
public bool HasFsmPaused { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_HoldingPlayersCount"></a> HoldingPlayersCount

```csharp
public int HoldingPlayersCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_IsBossOrElite"></a> IsBossOrElite

```csharp
public bool IsBossOrElite { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_UnitPath"></a> UnitPath

```csharp
public NativeString256 UnitPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeString256.cs)

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_AddHoldingPlayers_ReadyM_Api_Idents_PlayerId__"></a> AddHoldingPlayers\(in PlayerId\)

```csharp
public void AddHoldingPlayers(in PlayerId value)
```

#### Parameters

`value` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_Assign_ReadyM_Wukong_Common_ECS_Components_TamerComponent__"></a> Assign\(in TamerComponent\)

```csharp
public void Assign(in TamerComponent value)
```

#### Parameters

`value` [TamerComponent](../ReadyM.Wukong.Common.ECS.Components/ReadyM.Wukong.Common.ECS.Components.TamerComponent.md)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_ClearHoldingPlayers"></a> ClearHoldingPlayers\(\)

```csharp
public void ClearHoldingPlayers()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_ContainsHoldingPlayers_ReadyM_Api_Idents_PlayerId__"></a> ContainsHoldingPlayers\(in PlayerId\)

```csharp
public bool ContainsHoldingPlayers(in PlayerId value)
```

#### Parameters

`value` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_GetHoldingPlayers"></a> GetHoldingPlayers\(\)

```csharp
public NativeList<PlayerId>.ReadOnly GetHoldingPlayers()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeList.cs)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_GetHoldingPlayers_System_Int32_"></a> GetHoldingPlayers\(int\)

```csharp
public PlayerId GetHoldingPlayers(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_GuidNotifyChanged_System_Int32_"></a> GuidNotifyChanged\(int\)

```csharp
public void GuidNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_HasFsmPausedNotifyChanged_System_Int32_"></a> HasFsmPausedNotifyChanged\(int\)

```csharp
public void HasFsmPausedNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_HoldingPlayersNotifyChanged_System_Int32_"></a> HoldingPlayersNotifyChanged\(int\)

```csharp
public void HoldingPlayersNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_InsertHoldingPlayers_System_Int32_ReadyM_Api_Idents_PlayerId__"></a> InsertHoldingPlayers\(int, in PlayerId\)

```csharp
public void InsertHoldingPlayers(int index, in PlayerId value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_IsBossOrEliteNotifyChanged_System_Int32_"></a> IsBossOrEliteNotifyChanged\(int\)

```csharp
public void IsBossOrEliteNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_RemoveAtHoldingPlayers_System_Int32_"></a> RemoveAtHoldingPlayers\(int\)

```csharp
public PlayerId RemoveAtHoldingPlayers(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_SetHoldingPlayers_Yooni_Native_Container_NativeList_ReadyM_Api_Idents_PlayerId___"></a> SetHoldingPlayers\(in NativeList<PlayerId\>\)

```csharp
public void SetHoldingPlayers(in NativeList<PlayerId> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/Container/NativeList.cs)<[PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)\>

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_SetHoldingPlayers_System_Int32_ReadyM_Api_Idents_PlayerId__"></a> SetHoldingPlayers\(int, in PlayerId\)

```csharp
public void SetHoldingPlayers(int index, in PlayerId value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="ReadyM_Wukong_Common_ECS_Components_TamerComponent_UnitPathNotifyChanged_System_Int32_"></a> UnitPathNotifyChanged\(int\)

```csharp
public void UnitPathNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


