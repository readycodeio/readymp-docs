---
title: 'Struct SocialAttributes'
description: 'A character''s social values, such as bounty and fame, keyed by CharacterSocialAttribute cast to byte.'
---
# Struct SocialAttributes

Namespace: [OblivionMp.Sdk.Common.Archetypes.Mixins](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.md)  
Assembly: OblivionMp.Sdk.Common.dll  

A character's social values, such as bounty and fame, keyed by **CharacterSocialAttribute** cast to <code>byte</code>.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct SocialAttributes : IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_AttributeCount"></a> AttributeCount

```csharp
public int AttributeCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_AddAttribute_System_Byte__System_Single__"></a> AddAttribute\(in byte, in float\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public bool AddAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_ClearAttribute"></a> ClearAttribute\(\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public void ClearAttribute()
```

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_ContainsAttribute_System_Byte__System_Single__"></a> ContainsAttribute\(in byte, in float\)

```csharp
public bool ContainsAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_ContainsAttributeKey_System_Byte__"></a> ContainsAttributeKey\(in byte\)

```csharp
public bool ContainsAttributeKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_GetAttribute"></a> GetAttribute\(\)

```csharp
public NativeDictionary<byte, float, ByteHash>.ReadOnly GetAttribute()
```

#### Returns

 NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>.ReadOnly

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_GetAttribute_System_Byte__"></a> GetAttribute\(in byte\)

```csharp
public float GetAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public SocialAttributes Keep()
```

#### Returns

 [SocialAttributes](../OblivionMp.Sdk.Common.Archetypes.Mixins/OblivionMp.Sdk.Common.Archetypes.Mixins.SocialAttributes.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_RemoveAttribute_System_Byte__"></a> RemoveAttribute\(in byte\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public bool RemoveAttribute(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_SetAttribute_Yooni_Native_Container_NativeDictionary_System_Byte_System_Single_Yooni_Native_Container_ByteHash___"></a> SetAttribute\(in NativeDictionary<byte, float, ByteHash\>\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public void SetAttribute(in NativeDictionary<byte, float, ByteHash> value)
```

#### Parameters

`value` NativeDictionary<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [float](https://learn.microsoft.com/dotnet/api/system.single), ByteHash\>

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_SetAttribute_System_Byte__System_Single__"></a> SetAttribute\(in byte, in float\)

```csharp
[Changes("SocialAttributes.Field.Attribute")]
public void SetAttribute(in byte key, in float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Common_Archetypes_Mixins_SocialAttributes_TryGetAttributeValue_System_Byte__System_Single__"></a> TryGetAttributeValue\(in byte, out float\)

```csharp
public bool TryGetAttributeValue(in byte key, out float value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


