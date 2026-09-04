# Struct ReadyMainCharacter

Namespace: [OblivionMp.Sdk.Entities.Player](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.md)  
Assembly: OblivionMp.Sdk.dll  

Represents the player character entity in the game, providing access to its properties.

```csharp
public readonly struct ReadyMainCharacter : IReadyEntity<ReadyMainCharacter>
```

#### Implements

[IReadyEntity<ReadyMainCharacter\>](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Sdk.Common/Entities/IReadyEntity.cs)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

#### Extension Methods

[ReadyObjectExtensions.SetLocationRotation<ReadyMainCharacter\>\(ReadyMainCharacter, Vector3, Vector3\)](../OblivionMp.Sdk.Entities.Extensions/OblivionMp.Sdk.Entities.Extensions.ReadyObjectExtensions.md#OblivionMp\_Sdk\_Entities\_Extensions\_ReadyObjectExtensions\_SetLocationRotation\_\_1\_\_\_0\_System\_Numerics\_Vector3\_System\_Numerics\_Vector3\_)

## Properties

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Animation"></a> Animation

Set of flags useful for checking which actions is the player is currently performing.

```csharp
public ReadyMainCharacter.AnimationApi Animation { get; }
```

#### Property Value

 [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md).[AnimationApi](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.AnimationApi.md)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_ArrowCount"></a> ArrowCount

Gets number of arrows left in quiver.

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

Current Fatigue (Green bar) of the character.
Does not impact MaxFatigue value.

```csharp
public float Fatigue { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_HasQuiverEquipped"></a> HasQuiverEquipped

Checks whether character has any arrows equipped.

```csharp
public bool HasQuiverEquipped { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_HasTorchEquipped"></a> HasTorchEquipped

Checks whether character has a torch equipped.

```csharp
public bool HasTorchEquipped { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Hp"></a> Hp

Current Hp (HealthPoints) of the character. Unclear behavior as of now. Some actions reset it to MaxHp while some modify only this value.
Does not impact MaxHp value.

```csharp
public float Hp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_InCombat"></a> InCombat

Checks whether the character is in active combat.

```csharp
public bool InCombat { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_InDialogue"></a> InDialogue

Checks whether the character is in active dialogue menu.

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

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_IsValid"></a> IsValid

```csharp
public bool IsValid { get; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_KnownCustomPotionTypes"></a> KnownCustomPotionTypes

```csharp
public IEnumerable<CustomPotion> KnownCustomPotionTypes { get; }
```

#### Property Value

 [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[CustomPotion](../OblivionMp.Sdk/OblivionMp.Sdk.CustomPotion.md)\>

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Magicka"></a> Magicka

Current Magicka (Mana) of the character.
Does not impact MaxMagicka value.

```csharp
public float Magicka { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_MaxHp"></a> MaxHp

Current base Hp (HealthPoints) of the character. Unclear behavior as of now. Some actions reset it to MaxHp
while some modify only this value.
Does not impact MaxHp value.

```csharp
public float MaxHp { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Nickname"></a> Nickname

Gets the visible player nickname.

```csharp
public string Nickname { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_PlayerId"></a> PlayerId

Gets the Player ID.

```csharp
public PlayerId PlayerId { get; }
```

#### Property Value

 [PlayerId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/PlayerId.cs)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Position"></a> Position

```csharp
public Vector3 Position { get; set; }
```

#### Property Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Rotation"></a> Rotation

```csharp
public float Rotation { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Sex"></a> Sex

Character gender.

```csharp
public CharacterSex Sex { get; set; }
```

#### Property Value

 [CharacterSex](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterSex.cs)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Visibility"></a> Visibility

How visible the character currently is, from 0 (fully hidden) to 1 (fully visible).

```csharp
public float Visibility { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_AddItemToInventory_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_"></a> AddItemToInventory\(FormId, int\)

Add the specified item to the inventory.
Check **Items** for item list.

```csharp
public void AddItemToInventory(FormId itemId, int quantity)
```

#### Parameters

`itemId` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

The **FormId** of the item to add.

`quantity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Number of items to add.

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_ClearInventory"></a> ClearInventory\(\)

Clear character inventory.

```csharp
public void ClearInventory()
```

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_Get__1"></a> Get<T\>\(\)

Get a reference to a component of type T on the player character entity.

```csharp
public ref T Get<T>() where T : struct, IComponent
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterAttribute_"></a> GetAttribute\(CharacterAttribute\)

Gets the target attribute value from the character.

```csharp
public float GetAttribute(CharacterAttribute attribute)
```

#### Parameters

`attribute` [CharacterAttribute](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterAttribute.cs)

Type of attribute

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

Current level of specified attribute

#### Examples

player.GetAttribute(CharacterAttribute.Security);

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetEffectValue_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterEffect_"></a> GetEffectValue\(CharacterEffect\)

Gets the target effect value from character.

```csharp
public float GetEffectValue(CharacterEffect effect)
```

#### Parameters

`effect` [CharacterEffect](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterEffect.cs)

Type of effect

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

Strength of the effect

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetGlobal__1"></a> GetGlobal<T\>\(\)

Get a reference to a component of type T on the global player archetype entity associated with this player character entity.

```csharp
public ref T GetGlobal<T>() where T : struct, IComponent
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_GetSocialAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterSocialAttribute_"></a> GetSocialAttribute\(CharacterSocialAttribute\)

Gets the social interaction attribute level

```csharp
public float GetSocialAttribute(CharacterSocialAttribute attribute)
```

#### Parameters

`attribute` [CharacterSocialAttribute](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterSocialAttribute.cs)

Type of social attribute

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

Current level of the attribute

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_HasItemInInventory_ReadyM_Relay_Common_Oblivion_FormId_"></a> HasItemInInventory\(FormId\)

Checks whether the character has the specified item in the inventory.

```csharp
public bool HasItemInInventory(FormId itemId)
```

#### Parameters

`itemId` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

Target item FormId.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if at least one item of given FormId is found in inventory.

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_HasItemInInventory_ReadyM_Relay_Common_Oblivion_FormId_System_Int32__"></a> HasItemInInventory\(FormId, out int\)

Checks whether the character has the specified item in the inventory.

```csharp
public bool HasItemInInventory(FormId itemId, out int itemCount)
```

#### Parameters

`itemId` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

Target item FormId.

`itemCount` [int](https://learn.microsoft.com/dotnet/api/system.int32)

Possessed item count.

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

True if at least one item of given FormId is found in inventory.

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_RebirthLocalPlayer"></a> RebirthLocalPlayer\(\)

Rebirths (revives) the local player character.

```csharp
public void RebirthLocalPlayer()
```

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_RemoveItemFromInventory_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_"></a> RemoveItemFromInventory\(FormId, int\)

Remove an item from the player's inventory.
Check **Items** for item list.
If the quantity to remove is greater than the current quantity, the item will be completely removed from the inventory.

```csharp
public void RemoveItemFromInventory(FormId itemId, int quantity = 2147483647)
```

#### Parameters

`itemId` [FormId](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/FormId.cs)

FormId of the item to remove.

`quantity` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The quantity of the item to remove. Defaults to <code>int.MaxValue</code>, which will remove all instances of the item.

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_SetAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterAttribute_System_Single_"></a> SetAttribute\(CharacterAttribute, float\)

Sets the target attribute to specified value.

```csharp
public void SetAttribute(CharacterAttribute attribute, float value)
```

#### Parameters

`attribute` [CharacterAttribute](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterAttribute.cs)

Type of attribute

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

Desired level of the attribute

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_SetEffectValue_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterEffect_System_Single_"></a> SetEffectValue\(CharacterEffect, float\)

Sets the target effect on character.

```csharp
public void SetEffectValue(CharacterEffect effect, float value)
```

#### Parameters

`effect` [CharacterEffect](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterEffect.cs)

Type of effect

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

Strength of the effect

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_SetSocialAttribute_ReadyM_Relay_Common_Oblivion_ECS_Values_CharacterSocialAttribute_System_Single_"></a> SetSocialAttribute\(CharacterSocialAttribute, float\)

Sets the specified social interaction attribute to desired level

```csharp
public void SetSocialAttribute(CharacterSocialAttribute attribute, float value)
```

#### Parameters

`attribute` [CharacterSocialAttribute](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Relay.Common.Oblivion/ECS/Values/CharacterSocialAttribute.cs)

Type of social attribute

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

Desired level of the social attribute

## Operators

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Explicit_ReadyM_Sdk_Common_Entities_ReadyObject__OblivionMp_Sdk_Entities_Player_ReadyMainCharacter"></a> explicit operator ReadyMainCharacter\(ReadyObject\)

```csharp
public static explicit operator ReadyMainCharacter(ReadyObject obj)
```

#### Parameters

`obj` [ReadyObject](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Sdk.Common/Entities/ReadyObject.cs)

#### Returns

 [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Explicit_ReadyM_Sdk_Common_Entities_ReadyCharacter__OblivionMp_Sdk_Entities_Player_ReadyMainCharacter"></a> explicit operator ReadyMainCharacter\(ReadyCharacter\)

```csharp
public static explicit operator ReadyMainCharacter(ReadyCharacter character)
```

#### Parameters

`character` [ReadyCharacter](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Sdk.Common/Entities/ReadyCharacter.cs)

#### Returns

 [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Implicit_OblivionMp_Sdk_Entities_Player_ReadyMainCharacter__ReadyM_Sdk_Common_Entities_ReadyObject"></a> implicit operator ReadyObject\(ReadyMainCharacter\)

```csharp
public static implicit operator ReadyObject(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

#### Returns

 [ReadyObject](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Sdk.Common/Entities/ReadyObject.cs)

### <a id="OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_op_Implicit_OblivionMp_Sdk_Entities_Player_ReadyMainCharacter__ReadyM_Sdk_Common_Entities_ReadyCharacter"></a> implicit operator ReadyCharacter\(ReadyMainCharacter\)

```csharp
public static implicit operator ReadyCharacter(ReadyMainCharacter mainCharacter)
```

#### Parameters

`mainCharacter` [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

#### Returns

 [ReadyCharacter](https://github.com/readycodeio/readym\-gameserver/blob/6fb11f3692d46ddd626b1f9523831647d30a9ca4/src/ReadyM.Sdk.Common/Entities/ReadyCharacter.cs)


