---
title: 'Enum Key'
description: 'A keyboard key or mouse button, by its Windows virtual-key code.'
---
# Enum Key

Namespace: [ReadyM.Sdk.Common.Input](../ReadyM.Sdk.Common.Input/ReadyM.Sdk.Common.Input.md)  
Assembly: ReadyM.Sdk.Common.dll  

A keyboard key or mouse button, by its Windows virtual-key code.

```csharp
public enum Key : byte
```

## Fields

`RESERVED_START_OF_ENUM = 0` 

No key.



`LEFT_MOUSE_BUTTON = 1` 

`RIGHT_MOUSE_BUTTON = 2` 

`CANCEL = 3` 

The Control-Break key.



`MIDDLE_MOUSE_BUTTON = 4` 

`XBUTTON_ONE = 5` 

The first extra mouse button, usually back.



`XBUTTON_TWO = 6` 

The second extra mouse button, usually forward.



`BACKSPACE = 8` 

`TAB = 9` 

`CLEAR = 12` 

The Clear key, numpad 5 with Num Lock off.



`RETURN = 13` 

The Enter key.



`PAUSE = 19` 

`CAPS_LOCK = 20` 

`IME_KANA = 21` 

The input method editor's Kana mode key.



`IME_HANGUEL = 21` 

The input method editor's Hangul mode key, by its older name.



`IME_HANGUL = 21` 

The input method editor's Hangul mode key.



`IME_ON = 22` 

Turns the input method editor on.



`IME_JUNJA = 23` 

The input method editor's Junja mode key.



`IME_FINAL = 24` 

The input method editor's final mode key.



`IME_HANJA = 25` 

The input method editor's Hanja mode key.



`IME_KANJI = 25` 

The input method editor's Kanji mode key.



`IME_OFF = 26` 

Turns the input method editor off.



`ESCAPE = 27` 

`IME_CONVERT = 28` 

The input method editor's convert key.



`IME_NONCONVERT = 29` 

The input method editor's nonconvert key.



`IME_ACCEPT = 30` 

The input method editor's accept key.



`IME_MODECHANGE = 31` 

The input method editor's mode change key.



`SPACE = 32` 

`PAGE_UP = 33` 

`PAGE_DOWN = 34` 

`END = 35` 

`HOME = 36` 

`LEFT_ARROW = 37` 

`UP_ARROW = 38` 

`RIGHT_ARROW = 39` 

`DOWN_ARROW = 40` 

`SELECT = 41` 

The Select key, missing from most keyboards.



`PRINT = 42` 

The Print key, missing from most keyboards; the usual one is **PRINT_SCREEN**.



`EXECUTE = 43` 

The Execute key, missing from most keyboards.



`PRINT_SCREEN = 44` 

`INS = 45` 

`DEL = 46` 

`HELP = 47` 

The Help key, missing from most keyboards.



`ZERO = 48` 

`ONE = 49` 

`TWO = 50` 

`THREE = 51` 

`FOUR = 52` 

`FIVE = 53` 

`SIX = 54` 

`SEVEN = 55` 

`EIGHT = 56` 

`NINE = 57` 

`A = 65` 

`B = 66` 

`C = 67` 

`D = 68` 

`E = 69` 

`F = 70` 

`G = 71` 

`H = 72` 

`I = 73` 

`J = 74` 

`K = 75` 

`L = 76` 

`M = 77` 

`N = 78` 

`O = 79` 

`P = 80` 

`Q = 81` 

`R = 82` 

`S = 83` 

`T = 84` 

`U = 85` 

`V = 86` 

`W = 87` 

`X = 88` 

`Y = 89` 

`Z = 90` 

`LEFT_WIN = 91` 

`RIGHT_WIN = 92` 

`APPS = 93` 

The Menu key, which opens the context menu.



`SLEEP = 95` 

`NUM_ZERO = 96` 

`NUM_ONE = 97` 

`NUM_TWO = 98` 

`NUM_THREE = 99` 

`NUM_FOUR = 100` 

`NUM_FIVE = 101` 

`NUM_SIX = 102` 

`NUM_SEVEN = 103` 

`NUM_EIGHT = 104` 

`NUM_NINE = 105` 

`MULTIPLY = 106` 

The multiply key on the numpad.



`ADD = 107` 

The add key on the numpad.



`SEPARATOR = 108` 

The separator key on the numpad.



`SUBTRACT = 109` 

The subtract key on the numpad.



`DECIMAL = 110` 

The decimal point key on the numpad.



`DIVIDE = 111` 

The divide key on the numpad.



`F1 = 112` 

`F2 = 113` 

`F3 = 114` 

`F4 = 115` 

`F5 = 116` 

`F6 = 117` 

`F7 = 118` 

`F8 = 119` 

`F9 = 120` 

`F10 = 121` 

`F11 = 122` 

`F12 = 123` 

`F13 = 124` 

`F14 = 125` 

`F15 = 126` 

`F16 = 127` 

`F17 = 128` 

`F18 = 129` 

`F19 = 130` 

`F20 = 131` 

`F21 = 132` 

`F22 = 133` 

`F23 = 134` 

`F24 = 135` 

`NUM_LOCK = 144` 

`SCROLL_LOCK = 145` 

`BROWSER_BACK = 166` 

`BROWSER_FORWARD = 167` 

`BROWSER_REFRESH = 168` 

`BROWSER_STOP = 169` 

`BROWSER_SEARCH = 170` 

`BROWSER_FAVORITES = 171` 

`BROWSER_HOME = 172` 

`VOLUME_MUTE = 173` 

`VOLUME_DOWN = 174` 

`VOLUME_UP = 175` 

`MEDIA_NEXT_TRACK = 176` 

`MEDIA_PREV_TRACK = 177` 

`MEDIA_STOP = 178` 

`MEDIA_PLAY_PAUSE = 179` 

`LAUNCH_MAIL = 180` 

Starts the mail app.



`LAUNCH_MEDIA_SELECT = 181` 

Selects a media player.



`LAUNCH_APP1 = 182` 

Starts the first app the system assigns to a launch key.



`LAUNCH_APP2 = 183` 

Starts the second app the system assigns to a launch key.



`OEM_ONE = 186` 

The semicolon and colon key on a US keyboard.



`OEM_PLUS = 187` 

The plus key on any layout.



`OEM_COMMA = 188` 

The comma key on any layout.



`OEM_MINUS = 189` 

The minus key on any layout.



`OEM_PERIOD = 190` 

The period key on any layout.



`OEM_TWO = 191` 

The slash and question mark key on a US keyboard.



`OEM_THREE = 192` 

The backtick and tilde key on a US keyboard.



`OEM_FOUR = 219` 

The left square bracket key on a US keyboard.



`OEM_FIVE = 220` 

The backslash and vertical bar key on a US keyboard.



`OEM_SIX = 221` 

The right square bracket key on a US keyboard.



`OEM_SEVEN = 222` 

The quote key on a US keyboard.



`OEM_EIGHT = 223` 

A key that differs by keyboard layout.



`OEM_102 = 226` 

The extra key next to left Shift on a 102-key keyboard.



`IME_PROCESS = 229` 

The input method editor's process key.



`PACKET = 231` 

Not a physical key: carries a typed Unicode character.



`ATTN = 246` 

The Attn key of old terminal keyboards.



`CRSEL = 247` 

The CrSel key of old terminal keyboards.



`EXSEL = 248` 

The ExSel key of old terminal keyboards.



`EREOF = 249` 

The Erase EOF key of old terminal keyboards.



`PLAY = 250` 

`ZOOM = 251` 

`NONAME = 252` 

Reserved.



`PA1 = 253` 

The PA1 key of old terminal keyboards.



`OEM_CLEAR = 254` 

The Clear key of old terminal keyboards.




