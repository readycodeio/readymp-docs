---
title: 'Enum KeySource'
description: 'Where a key bind''s presses come from.'
---
# Enum KeySource

Namespace: [ReadyM.Sdk.Common.Input](../ReadyM.Sdk.Common.Input/ReadyM.Sdk.Common.Input.md)  
Assembly: ReadyM.Sdk.Common.dll  

Where a key bind's presses come from.

```csharp
public enum KeySource
```

## Fields

`Polled = 0` 

The keyboard's hardware state, polled.

Fires whenever the key is down, whatever else is happening, and cannot say it took the press. Nothing
downstream is told, so the press also reaches the game and anything else watching for it.

`UnhandledByUi = 1` 

The engine's key down, and only when nothing in the UI handled it.

Fires after every widget in the focus path has declined the press, including whatever routes input to
the player. The press is then reported as handled, so it stops there: it does not reach the game, and
the character it would have produced is not typed anywhere.
<p>
This is what a bind that opens something wants. A key that opens a text field must not also be typed
into the field it opened, and must not fire at all while that field already has the keyboard.
</p>

## Remarks

The two are different pipelines rather than settings on one, and they answer different questions. Pick by
whether the bind should fire when the game's own UI is using the key.


