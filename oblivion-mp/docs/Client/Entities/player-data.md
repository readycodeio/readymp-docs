---
sidebar_position: 2
---

# Player data

[ReadyMainCharacter](../../../api-reference/OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter) exposes the synchronized state of a player character as a set of small, focused properties and methods, grouped by topic below.

:::important

Writing to any of these properties only works on an entity you own. See [Ownership](players#ownership). Attempting to write to a player you don't own logs an error and does nothing.

:::

## Info

```csharp
PlayerId playerId = player.PlayerId;
string nickname = player.Nickname;
```

## Vitals

```csharp
bool isDead = player.IsDead;

float hp = player.Hp;
player.Hp = 100f;

float magicka = player.Magicka;
player.Magicka = 50f;

float fatigue = player.Fatigue;
player.Fatigue = 75f;
```

## Movement

```csharp
Vector3 location = player.Location;
player.Location = new Vector3(0, 0, 0);

Vector3 rotation = player.Rotation;
player.Rotation = new Vector3(0, 90, 0);
```

## Attributes and effects

Attributes, active effects, and social stats are read and written by key, using the [CharacterAttribute](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterAttribute), [CharacterEffect](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterEffect), and [CharacterSocialAttribute](../../../api-reference/ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterSocialAttribute) enums.

```csharp
float strength = player.GetAttribute(CharacterAttribute.Strength);
player.SetAttribute(CharacterAttribute.Strength, 60f);

float resistFire = player.GetEffectValue(CharacterEffect.ResistFire);
player.SetEffectValue(CharacterEffect.ResistFire, 25f);

float bounty = player.GetSocialAttribute(CharacterSocialAttribute.Bounty);
player.SetSocialAttribute(CharacterSocialAttribute.Bounty, 0f);
```

## Appearance

```csharp
CharacterSex sex = player.Sex;
player.Sex = CharacterSex.Female;
```

## Animation and status

These are read-only flags reflecting the character's current in-game state.

```csharp
bool weaponDrawn = player.Animation.WeaponDrawn;
bool isRunning = player.Animation.IsRunning;
bool isSneaking = player.Animation.IsSneaking;
bool isSwimming = player.Animation.IsSwimming;
bool isJumping = player.Animation.IsJumping;
bool isBlocking = player.Animation.IsBlocking;
bool isStaggered = player.Animation.IsStaggered;
bool isFalling = player.Animation.IsFalling;
bool isDodging = player.Animation.IsDodging;

bool inCombat = player.InCombat;
bool inDialogue = player.InDialogue;
```

## Equipment and inventory

Items are identified by their [FormId](../../../api-reference/ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId).

```csharp
player.AddItemToInventory(itemId, 1);
player.RemoveItemFromInventory(itemId); // removes all instances
player.RemoveItemFromInventory(itemId, 3); // removes up to 3
player.ClearInventory();
if (player.HasItemInInventory(itemId)) { ... }
if (player.HasItemInInventory(itemId, out int count) && count >= 5) { ... }
```

```csharp
bool hasTorch = player.HasTorchEquipped;
bool hasQuiver = player.HasQuiverEquipped;
int arrows = player.ArrowCount;
```
