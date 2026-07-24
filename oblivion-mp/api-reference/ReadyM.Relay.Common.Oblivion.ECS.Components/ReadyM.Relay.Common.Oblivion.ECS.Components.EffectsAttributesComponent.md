# Struct EffectsAttributesComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds player character's effect attributes' values.

```csharp
public struct EffectsAttributesComponent : ISaveTaggedComponent<EffectsAttributesComponent>, IComponent, INetSerializable, IDisposable
```

#### Implements

[ISaveTaggedComponent<EffectsAttributesComponent\>](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ISaveTaggedComponent-1.md), 
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

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent__ctor_Yooni_Native_LowLevel_AllocatorKind_"></a> EffectsAttributesComponent\(AllocatorKind\)

Holds player character's effect attributes' values.

```csharp
public EffectsAttributesComponent(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_AttributeCount"></a> AttributeCount

```csharp
public int AttributeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_AddAttribute_System_Byte__System_Single__"></a> AddAttribute\(in byte, in float\)

```csharp
public bool AddAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent__"></a> Assign\(in EffectsAttributesComponent\)

```csharp
public void Assign(in EffectsAttributesComponent value)
```

#### Parameters

`value` [EffectsAttributesComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.EffectsAttributesComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_Attribute_SetFromApi_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash__"></a> Attribute\_SetFromApi\(NativeDictionary<byte, float, ByteHash\>\)

```csharp
public void Attribute_SetFromApi(NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), [ByteHash](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/ByteHash.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_ClearAttribute"></a> ClearAttribute\(\)

```csharp
public void ClearAttribute()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_ContainsAttribute_System_Byte__System_Single__"></a> ContainsAttribute\(in byte, in float\)

```csharp
public bool ContainsAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_ContainsAttributeKey_System_Byte__"></a> ContainsAttributeKey\(in byte\)

```csharp
public bool ContainsAttributeKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_GetAttribute"></a> GetAttribute\(\)

```csharp
public NativeDictionary<byte, float, ByteHash>.ReadOnly GetAttribute()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), [ByteHash](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/ByteHash.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_GetAttribute_System_Byte__"></a> GetAttribute\(in byte\)

```csharp
public float GetAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_RemoveAttribute_System_Byte__"></a> RemoveAttribute\(in byte\)

```csharp
public bool RemoveAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_SetAttribute_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash___"></a> SetAttribute\(in NativeDictionary<byte, float, ByteHash\>\)

```csharp
public void SetAttribute(in NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), [ByteHash](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/ByteHash.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_SetAttribute_System_Byte__System_Single__"></a> SetAttribute\(in byte, in float\)

```csharp
public void SetAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_EffectsAttributesComponent_TryGetAttributeValue_System_Byte__System_Single__"></a> TryGetAttributeValue\(in byte, out float\)

```csharp
public bool TryGetAttributeValue(in byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


