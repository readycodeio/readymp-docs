---
title: 'Interface IInput'
description: 'Key binds, and whether the keyboard is free for the game right now.'
---
# Interface IInput

Namespace: [OblivionMP.SDK](../OblivionMP.SDK/OblivionMP.SDK.md)  
Assembly: OblivionMP.SDK.dll  

Key binds, and whether the keyboard is free for the game right now.

```csharp
public interface IInput
```

## Remarks

A bound action runs on the ECS thread, like a service's Update, so it can read and change entities directly.

## Methods

### <a id="OblivionMP_SDK_IInput_CanApplyInput"></a> CanApplyInput\(\)

Whether keyboard input reaches the game, rather than a text field or menu that has the keyboard.

```csharp
bool CanApplyInput()
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_IInput_RegisterKeyBind_OblivionMpCSharpMod_Input_Key_System_Action_OblivionMpCSharpMod_Input_KeySource_"></a> RegisterKeyBind\(Key, Action, KeySource\)

Runs <code class="paramref">action</code> whenever <code class="paramref">key</code> is pressed.

```csharp
IDisposable RegisterKeyBind(Key key, Action action, KeySource source = KeySource.Polled)
```

#### Parameters

`key` Key

The key to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

What to run when the key is pressed.

`source` KeySource

Where the press comes from. Polled unless said otherwise.

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

The bind. Dispose it to remove this bind, leaving any other bind on the same key in place.

### <a id="OblivionMP_SDK_IInput_RegisterKeyBind_OblivionMpCSharpMod_Input_ModifierKeys_OblivionMpCSharpMod_Input_Key_System_Action_OblivionMpCSharpMod_Input_KeySource_"></a> RegisterKeyBind\(ModifierKeys, Key, Action, KeySource\)

Runs <code class="paramref">action</code> whenever <code class="paramref">key</code> is pressed with <code class="paramref">modifiers</code> held.

```csharp
IDisposable RegisterKeyBind(ModifierKeys modifiers, Key key, Action action, KeySource source = KeySource.Polled)
```

#### Parameters

`modifiers` ModifierKeys

The modifier keys to hold, such as Ctrl, Alt or Shift.

`key` Key

The key to bind.

`action` [Action](https://learn.microsoft.com/dotnet/api/system.action)

What to run when the combination is pressed.

`source` KeySource

Where the press comes from. Polled unless said otherwise.

#### Returns

 [IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

The bind. Dispose it to remove this bind, leaving any other bind on the same combination in place.


