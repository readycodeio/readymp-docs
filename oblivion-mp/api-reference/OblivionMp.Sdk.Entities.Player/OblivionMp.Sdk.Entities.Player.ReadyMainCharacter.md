# Struct ReadyMainCharacter

Namespace: [OblivionMp.Sdk.Entities.Player](../OblivionMp.Sdk.Entities.Extensions/OblivionMp.Sdk.Entities.Player.md)  
Assembly: OblivionMp.Sdk.dll  

```csharp
public readonly struct ReadyMainCharacter : IReadyEntity<ReadyMainCharacter>
```

#### Implements

[IReadyEntity<ReadyMainCharacter\>](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/Entities/IReadyEntity.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ReadyObjectExtensions.SetLocationRotation<ReadyMainCharacter\>\(ReadyMainCharacter, Vector3, Vector3\)](OblivionMp.Sdk.Entities.Extensions.ReadyObjectExtensions.md\#OblivionMp\_Sdk\_Entities\_Extensions\_ReadyObjectExtensions\_SetLocationRotation\_\_1\_\_\_0\_System\_Numerics\_Vector3\_System\_Numerics\_Vector3\_)

## Properties

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Animation"></a> Animation

```csharp
public ReadyMainCharacter.AnimationApi Animation { get; }
```

#### Property Value

 [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md).[AnimationApi](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.AnimationApi.md)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_ArrowCount"></a> ArrowCount

```csharp
public int ArrowCount { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_CustomSpells"></a> CustomSpells

```csharp
public IEnumerable<CustomSpell> CustomSpells { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CustomSpell](../OblivionMp.Sdk/OblivionMp.Sdk.CustomSpell.md)\>

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Fatigue"></a> Fatigue

```csharp
public float Fatigue { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_HasQuiverEquipped"></a> HasQuiverEquipped

```csharp
public bool HasQuiverEquipped { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_HasTorchEquipped"></a> HasTorchEquipped

```csharp
public bool HasTorchEquipped { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Hp"></a> Hp

```csharp
public float Hp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_InCombat"></a> InCombat

```csharp
public bool InCombat { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_InDialogue"></a> InDialogue

```csharp
public bool InDialogue { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_IsDead"></a> IsDead

```csharp
public bool IsDead { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_KnownCustomPotionTypes"></a> KnownCustomPotionTypes

```csharp
public IEnumerable<CustomPotion> KnownCustomPotionTypes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CustomPotion](../OblivionMp.Sdk/OblivionMp.Sdk.CustomPotion.md)\>

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Location"></a> Location

```csharp
public Vector3 Location { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Magicka"></a> Magicka

```csharp
public float Magicka { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Nickname"></a> Nickname

```csharp
public string Nickname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_PlayerId"></a> PlayerId

```csharp
public PlayerId PlayerId { get; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Rotation"></a> Rotation

```csharp
public Vector3 Rotation { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Sex"></a> Sex

```csharp
public CharacterSex Sex { get; set; }
```

#### Property Value

 [CharacterSex](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterSex.cs)

## Methods

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_AddCustomPotion_OblivionMp_Sdk_CustomPotion_"></a> AddCustomPotion\(CustomPotion\)

```csharp
[Obsolete("TODO: Materializes a potion type, but does not add it to the character.")]
public FormId? AddCustomPotion(CustomPotion formula)
```

#### Parameters

`formula` [CustomPotion](../OblivionMp.Sdk/OblivionMp.Sdk.CustomPotion.md)

#### Returns

 [FormId](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/FormId.cs)?

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_AddCustomSpell_OblivionMp_Sdk_CustomSpell_"></a> AddCustomSpell\(CustomSpell\)

```csharp
[Obsolete("TODO: Materializes a spell, but does not add it to the character.")]
public FormId? AddCustomSpell(CustomSpell spell)
```

#### Parameters

`spell` [CustomSpell](../OblivionMp.Sdk/OblivionMp.Sdk.CustomSpell.md)

#### Returns

 [FormId](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/FormId.cs)?

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_AddItemToInventory_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_"></a> AddItemToInventory\(FormId, int\)

```csharp
public void AddItemToInventory(FormId itemId, int quantity)
```

#### Parameters

`itemId` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

`quantity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_ClearInventory"></a> ClearInventory\(\)

```csharp
public void ClearInventory()
```

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Get__1"></a> Get<T\>\(\)

```csharp
public ref T Get<T>() where T : struct, IComponent
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterAttribute_"></a> GetAttribute\(CharacterAttribute\)

```csharp
public float GetAttribute(CharacterAttribute attribute)
```

#### Parameters

`attribute` [CharacterAttribute](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterAttribute.cs)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetEffectValue_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterEffect_"></a> GetEffectValue\(CharacterEffect\)

```csharp
public float GetEffectValue(CharacterEffect effect)
```

#### Parameters

`effect` [CharacterEffect](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterEffect.cs)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetSocialAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterSocialAttribute_"></a> GetSocialAttribute\(CharacterSocialAttribute\)

```csharp
public float GetSocialAttribute(CharacterSocialAttribute attribute)
```

#### Parameters

`attribute` [CharacterSocialAttribute](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterSocialAttribute.cs)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_RemoveItemFromInventory_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_"></a> RemoveItemFromInventory\(FormId, int\)

```csharp
public void RemoveItemFromInventory(FormId itemId, int quantity = 2147483647)
```

#### Parameters

`itemId` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

`quantity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_SetAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterAttribute_System_Single_"></a> SetAttribute\(CharacterAttribute, float\)

```csharp
public void SetAttribute(CharacterAttribute attribute, float value)
```

#### Parameters

`attribute` [CharacterAttribute](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterAttribute.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_SetEffectValue_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterEffect_System_Single_"></a> SetEffectValue\(CharacterEffect, float\)

```csharp
public void SetEffectValue(CharacterEffect effect, float value)
```

#### Parameters

`effect` [CharacterEffect](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterEffect.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_SetSocialAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterSocialAttribute_System_Single_"></a> SetSocialAttribute\(CharacterSocialAttribute, float\)

```csharp
public void SetSocialAttribute(CharacterSocialAttribute attribute, float value)
```

#### Parameters

`attribute` [CharacterSocialAttribute](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterSocialAttribute.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

## Operators

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Explicit_ReadyM_Sdk_Common_Entities_ReadyObject__OblivionMp_Sdk_Entities_Player_ReadyMainCharacter"></a> explicit operator ReadyMainCharacter\(ReadyObject\)

```csharp
public static explicit operator ReadyMainCharacter(ReadyObject obj)
```

#### Parameters

`obj` [ReadyObject](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/Entities/ReadyObject.cs)

#### Returns

 [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Explicit_ReadyM_Sdk_Common_Entities_ReadyCharacter__OblivionMp_Sdk_Entities_Player_ReadyMainCharacter"></a> explicit operator ReadyMainCharacter\(ReadyCharacter\)

```csharp
public static explicit operator ReadyMainCharacter(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/Entities/ReadyCharacter.cs)

#### Returns

 [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Implicit_OblivionMp_Sdk_Entities_Player_ReadyMainCharacter__ReadyM_Sdk_Common_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyMainCharacter\)

```csharp
public static implicit operator ReadyObject(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

#### Returns

 [ReadyObject](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/Entities/ReadyObject.cs)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Implicit_OblivionMp_Sdk_Entities_Player_ReadyMainCharacter__ReadyM_Sdk_Common_Entities_ReadyCharacter"></a> implicit operator ReadyCharacter\(ReadyMainCharacter\)

```csharp
public static implicit operator ReadyCharacter(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

#### Returns

 [ReadyCharacter](https://github.com/readycodeio/readym\-gameserver/blob/b4fbaead42db99a223e606c7d888cf0ce632f4cf/src/ReadyM.Sdk.Common/Entities/ReadyCharacter.cs)


