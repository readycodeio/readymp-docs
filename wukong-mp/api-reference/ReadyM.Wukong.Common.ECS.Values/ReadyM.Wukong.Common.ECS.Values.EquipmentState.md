# Struct EquipmentState

Namespace: [ReadyM.Wukong.Common.ECS.Values](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.md)  
Assembly: ReadyM.Wukong.Common.dll  

Player character's equipment.

```csharp
public struct EquipmentState : INetSerializable, IEquatable<EquipmentState>
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IEquatable<EquipmentState\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState__ctor_System_Collections_Generic_IEnumerable_System_ValueTuple_ReadyM_Wukong_Common_ECS_Values_EquipPosition_System_Int32___"></a> EquipmentState\(IEnumerable<\(EquipPosition, int\)\>\)

```csharp
public EquipmentState(IEnumerable<(EquipPosition, int)> equipments)
```

#### Parameters

`equipments` [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<\([EquipPosition](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipPosition.md), [int](https://learn.microsoft.com/dotnet/api/system.int32)\)\>

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_DeltaEquals_ReadyM_Wukong_Common_ECS_Values_EquipmentState_System_Single_"></a> DeltaEquals\(EquipmentState, float\)

```csharp
public bool DeltaEquals(EquipmentState other, float delta)
```

#### Parameters

`other` [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

`delta` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Equals_ReadyM_Wukong_Common_ECS_Values_EquipmentState_"></a> Equals\(EquipmentState\)

```csharp
public bool Equals(EquipmentState other)
```

#### Parameters

`other` [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_GetItem_ReadyM_Wukong_Common_ECS_Values_EquipPosition_"></a> GetItem\(EquipPosition\)

```csharp
public int GetItem(EquipPosition pos)
```

#### Parameters

`pos` [EquipPosition](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipPosition.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_GetItems"></a> GetItems\(\)

```csharp
public List<(EquipPosition, int)> GetItems()
```

#### Returns

 [List](https://learn.microsoft.com/dotnet/api/system.collections.generic.list-1)<\([EquipPosition](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipPosition.md), [int](https://learn.microsoft.com/dotnet/api/system.int32)\)\>

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_TextDeserialize_System_Text_Json_Utf8JsonReader__System_Text_Json_JsonSerializerOptions_"></a> TextDeserialize\(ref Utf8JsonReader, JsonSerializerOptions\)

```csharp
public static EquipmentState TextDeserialize(ref Utf8JsonReader reader, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_TextSerialize_System_Text_Json_Utf8JsonWriter_ReadyM_Wukong_Common_ECS_Values_EquipmentState_System_Text_Json_JsonSerializerOptions_"></a> TextSerialize\(Utf8JsonWriter, EquipmentState, JsonSerializerOptions\)

```csharp
public static void TextSerialize(Utf8JsonWriter writer, EquipmentState obj, JsonSerializerOptions options)
```

#### Parameters

`writer` [Utf8JsonWriter](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonwriter)

`obj` [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_WithSetItem_ReadyM_Wukong_Common_ECS_Values_EquipPosition_System_Int32_"></a> WithSetItem\(EquipPosition, int\)

```csharp
public EquipmentState WithSetItem(EquipPosition position, int eqId)
```

#### Parameters

`position` [EquipPosition](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipPosition.md)

`eqId` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)


