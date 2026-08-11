# Class EquipmentState.Converter

Namespace: [ReadyM.Wukong.Common.ECS.Values](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.md)  
Assembly: ReadyM.Wukong.Common.dll  

```csharp
public class EquipmentState.Converter : JsonConverter<EquipmentState>
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[JsonConverter](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter) ← 
[JsonConverter<EquipmentState\>](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1) ← 
[EquipmentState.Converter](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.Converter.md)

#### Inherited Members

[JsonConverter<EquipmentState\>.CanConvert\(Type\)](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.canconvert), 
[JsonConverter<EquipmentState\>.Read\(ref Utf8JsonReader, Type, JsonSerializerOptions\)](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.read), 
[JsonConverter<EquipmentState\>.Write\(Utf8JsonWriter, EquipmentState, JsonSerializerOptions\)](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.write), 
[JsonConverter<EquipmentState\>.ReadAsPropertyName\(ref Utf8JsonReader, Type, JsonSerializerOptions\)](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.readaspropertyname), 
[JsonConverter<EquipmentState\>.WriteAsPropertyName\(Utf8JsonWriter, EquipmentState, JsonSerializerOptions\)](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.writeaspropertyname), 
[JsonConverter<EquipmentState\>.HandleNull](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.handlenull), 
[JsonConverter<EquipmentState\>.Type](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter-1.type), 
[JsonConverter.CanConvert\(Type\)](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter.canconvert), 
[JsonConverter.Type](https://learn.microsoft.com/dotnet/api/system.text.json.serialization.jsonconverter.type), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Converter__ctor"></a> Converter\(\)

```csharp
public Converter()
```

## Methods

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Converter_Read_System_Text_Json_Utf8JsonReader__System_Type_System_Text_Json_JsonSerializerOptions_"></a> Read\(ref Utf8JsonReader, Type, JsonSerializerOptions\)

```csharp
public override EquipmentState Read(ref Utf8JsonReader reader, Type typeToConvert, JsonSerializerOptions options)
```

#### Parameters

`reader` [Utf8JsonReader](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonreader)

`typeToConvert` [Type](https://learn.microsoft.com/dotnet/api/system.type)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)

#### Returns

 [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

### <a id="ReadyM_Wukong_Common_ECS_Values_EquipmentState_Converter_Write_System_Text_Json_Utf8JsonWriter_ReadyM_Wukong_Common_ECS_Values_EquipmentState_System_Text_Json_JsonSerializerOptions_"></a> Write\(Utf8JsonWriter, EquipmentState, JsonSerializerOptions\)

```csharp
public override void Write(Utf8JsonWriter writer, EquipmentState value, JsonSerializerOptions options)
```

#### Parameters

`writer` [Utf8JsonWriter](https://learn.microsoft.com/dotnet/api/system.text.json.utf8jsonwriter)

`value` [EquipmentState](../ReadyM.Wukong.Common.ECS.Values/ReadyM.Wukong.Common.ECS.Values.EquipmentState.md)

`options` [JsonSerializerOptions](https://learn.microsoft.com/dotnet/api/system.text.json.jsonserializeroptions)


