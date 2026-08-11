# Struct AttributesState

Namespace: [ReadyM.Wukong.Common.ECS.Values](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.md)  
Assembly: ReadyM.Wukong.Common.dll  

Entity attributes. Keys correspond to the EBGUAttrFloat enum in the game.

```csharp
public struct AttributesState : INetSerializable
```

#### Implements

[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState__ctor"></a> AttributesState\(\)

Entity attributes. Keys correspond to the EBGUAttrFloat enum in the game.

```csharp
public AttributesState()
```

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState__ctor_System_Collections_Generic_Dictionary_System_Byte_System_Single__"></a> AttributesState\(Dictionary<byte, float\>?\)

```csharp
public AttributesState(Dictionary<byte, float>? data)
```

#### Parameters

`data` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single)\>?

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_DeltaEquals_ReadyM_Wukong_Common_ECS_Values_AttributesState_System_Single_"></a> DeltaEquals\(AttributesState, float\)

```csharp
public bool DeltaEquals(AttributesState other, float delta)
```

#### Parameters

`other` [AttributesState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.AttributesState.md)

`delta` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_GetAttribute_System_Byte_"></a> GetAttribute\(byte\)

```csharp
public float GetAttribute(byte attr)
```

#### Parameters

`attr` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_GetEnumerator"></a> GetEnumerator\(\)

```csharp
public IEnumerator<KeyValuePair<byte, float>> GetEnumerator()
```

#### Returns

 [IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[KeyValuePair](https://learn.microsoft.com/dotnet/api/system.collections.generic.keyvaluepair-2)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single)\>\>

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_ToDictionary"></a> ToDictionary\(\)

```csharp
public Dictionary<byte, float> ToDictionary()
```

#### Returns

 [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single)\>

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_TryGetAttribute_System_Byte_System_Single__"></a> TryGetAttribute\(byte, out float\)

```csharp
public bool TryGetAttribute(byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Wukong_Common_ECS_Values_AttributesState_WithSetAttribute_System_Byte_System_Single_"></a> WithSetAttribute\(byte, float\)

```csharp
public AttributesState WithSetAttribute(byte key, float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [AttributesState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.AttributesState.md)


