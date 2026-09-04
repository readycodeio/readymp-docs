# Struct DynamicFormsComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player's dynamic forms, including spells and alchemy effects.

```csharp
public struct DynamicFormsComponent : ISaveTaggedComponent<DynamicFormsComponent>, INativeInit, IComponent, INetSerializable, IDisposable
```

#### Implements

[ISaveTaggedComponent<DynamicFormsComponent\>](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ISaveTaggedComponent-1.md), 
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AlchemyCount"></a> AlchemyCount

```csharp
public int AlchemyCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AlchemyEffectsCount"></a> AlchemyEffectsCount

```csharp
public int AlchemyEffectsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SpellEffectsCount"></a> SpellEffectsCount

```csharp
public int SpellEffectsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SpellsCount"></a> SpellsCount

```csharp
public int SpellsCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AddAlchemy_ReadyM_Relay_Common_Oblivion_ECS_Values_AlchemyEntry__"></a> AddAlchemy\(in AlchemyEntry\)

```csharp
public void AddAlchemy(in AlchemyEntry value)
```

#### Parameters

`value` [AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AddAlchemyEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> AddAlchemyEffects\(in MagicEffectEntry\)

```csharp
public void AddAlchemyEffects(in MagicEffectEntry value)
```

#### Parameters

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AddSpellEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> AddSpellEffects\(in MagicEffectEntry\)

```csharp
public void AddSpellEffects(in MagicEffectEntry value)
```

#### Parameters

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AddSpells_ReadyM_Relay_Common_Oblivion_ECS_Values_DynamicSpellEntry__"></a> AddSpells\(in DynamicSpellEntry\)

```csharp
public void AddSpells(in DynamicSpellEntry value)
```

#### Parameters

`value` [DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AlchemyEffectsNotifyChanged_System_Int32_"></a> AlchemyEffectsNotifyChanged\(int\)

```csharp
public void AlchemyEffectsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_AlchemyNotifyChanged_System_Int32_"></a> AlchemyNotifyChanged\(int\)

```csharp
public void AlchemyNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent__"></a> Assign\(in DynamicFormsComponent\)

```csharp
public void Assign(in DynamicFormsComponent value)
```

#### Parameters

`value` [DynamicFormsComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.DynamicFormsComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ClearAlchemy"></a> ClearAlchemy\(\)

```csharp
public void ClearAlchemy()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ClearAlchemyEffects"></a> ClearAlchemyEffects\(\)

```csharp
public void ClearAlchemyEffects()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ClearSpellEffects"></a> ClearSpellEffects\(\)

```csharp
public void ClearSpellEffects()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ClearSpells"></a> ClearSpells\(\)

```csharp
public void ClearSpells()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ContainsAlchemy_ReadyM_Relay_Common_Oblivion_ECS_Values_AlchemyEntry__"></a> ContainsAlchemy\(in AlchemyEntry\)

```csharp
public bool ContainsAlchemy(in AlchemyEntry value)
```

#### Parameters

`value` [AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ContainsAlchemyEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> ContainsAlchemyEffects\(in MagicEffectEntry\)

```csharp
public bool ContainsAlchemyEffects(in MagicEffectEntry value)
```

#### Parameters

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ContainsSpellEffects_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> ContainsSpellEffects\(in MagicEffectEntry\)

```csharp
public bool ContainsSpellEffects(in MagicEffectEntry value)
```

#### Parameters

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_ContainsSpells_ReadyM_Relay_Common_Oblivion_ECS_Values_DynamicSpellEntry__"></a> ContainsSpells\(in DynamicSpellEntry\)

```csharp
public bool ContainsSpells(in DynamicSpellEntry value)
```

#### Parameters

`value` [DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetAlchemy"></a> GetAlchemy\(\)

```csharp
public NativeList<AlchemyEntry>.ReadOnly GetAlchemy()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetAlchemy_System_Int32_"></a> GetAlchemy\(int\)

```csharp
public AlchemyEntry GetAlchemy(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetAlchemyEffects"></a> GetAlchemyEffects\(\)

```csharp
public NativeList<MagicEffectEntry>.ReadOnly GetAlchemyEffects()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetAlchemyEffects_System_Int32_"></a> GetAlchemyEffects\(int\)

```csharp
public MagicEffectEntry GetAlchemyEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetChangeComponent"></a> GetChangeComponent\(\)

```csharp
public Type GetChangeComponent()
```

#### Returns

 [Type](https://learn.microsoft.com/dotnet/api/system.type)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetSpellEffects"></a> GetSpellEffects\(\)

```csharp
public NativeList<MagicEffectEntry>.ReadOnly GetSpellEffects()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetSpellEffects_System_Int32_"></a> GetSpellEffects\(int\)

```csharp
public MagicEffectEntry GetSpellEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetSpells"></a> GetSpells\(\)

```csharp
public NativeList<DynamicSpellEntry>.ReadOnly GetSpells()
```

#### Returns

 [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)\>.[ReadOnly](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_GetSpells_System_Int32_"></a> GetSpells\(int\)

```csharp
public DynamicSpellEntry GetSpells(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
public void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_InsertAlchemy_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_AlchemyEntry__"></a> InsertAlchemy\(int, in AlchemyEntry\)

```csharp
public void InsertAlchemy(int index, in AlchemyEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_InsertAlchemyEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> InsertAlchemyEffects\(int, in MagicEffectEntry\)

```csharp
public void InsertAlchemyEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_InsertSpellEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> InsertSpellEffects\(int, in MagicEffectEntry\)

```csharp
public void InsertSpellEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_InsertSpells_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DynamicSpellEntry__"></a> InsertSpells\(int, in DynamicSpellEntry\)

```csharp
public void InsertSpells(int index, in DynamicSpellEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_RemoveAtAlchemy_System_Int32_"></a> RemoveAtAlchemy\(int\)

```csharp
public AlchemyEntry RemoveAtAlchemy(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_RemoveAtAlchemyEffects_System_Int32_"></a> RemoveAtAlchemyEffects\(int\)

```csharp
public MagicEffectEntry RemoveAtAlchemyEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_RemoveAtSpellEffects_System_Int32_"></a> RemoveAtSpellEffects\(int\)

```csharp
public MagicEffectEntry RemoveAtSpellEffects(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_RemoveAtSpells_System_Int32_"></a> RemoveAtSpells\(int\)

```csharp
public DynamicSpellEntry RemoveAtSpells(int index)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetAlchemy_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_AlchemyEntry___"></a> SetAlchemy\(in NativeList<AlchemyEntry\>\)

```csharp
public void SetAlchemy(in NativeList<AlchemyEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetAlchemy_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_AlchemyEntry__"></a> SetAlchemy\(int, in AlchemyEntry\)

```csharp
public void SetAlchemy(int index, in AlchemyEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [AlchemyEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AlchemyEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetAlchemyEffects_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry___"></a> SetAlchemyEffects\(in NativeList<MagicEffectEntry\>\)

```csharp
public void SetAlchemyEffects(in NativeList<MagicEffectEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetAlchemyEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> SetAlchemyEffects\(int, in MagicEffectEntry\)

```csharp
public void SetAlchemyEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetSpellEffects_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry___"></a> SetSpellEffects\(in NativeList<MagicEffectEntry\>\)

```csharp
public void SetSpellEffects(in NativeList<MagicEffectEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetSpellEffects_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_MagicEffectEntry__"></a> SetSpellEffects\(int, in MagicEffectEntry\)

```csharp
public void SetSpellEffects(int index, in MagicEffectEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [MagicEffectEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.MagicEffectEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetSpells_Yooni_Native_Container_NativeList_ReadyM_Relay_Common_Oblivion_ECS_Values_DynamicSpellEntry___"></a> SetSpells\(in NativeList<DynamicSpellEntry\>\)

```csharp
public void SetSpells(in NativeList<DynamicSpellEntry> value)
```

#### Parameters

`value` [NativeList](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/YooniCSharp/Native/Container/NativeList.cs)<[DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SetSpells_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_DynamicSpellEntry__"></a> SetSpells\(int, in DynamicSpellEntry\)

```csharp
public void SetSpells(int index, in DynamicSpellEntry value)
```

#### Parameters

`index` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`value` [DynamicSpellEntry](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.DynamicSpellEntry.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SpellEffectsNotifyChanged_System_Int32_"></a> SpellEffectsNotifyChanged\(int\)

```csharp
public void SpellEffectsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_DynamicFormsComponent_SpellsNotifyChanged_System_Int32_"></a> SpellsNotifyChanged\(int\)

```csharp
public void SpellsNotifyChanged(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)


