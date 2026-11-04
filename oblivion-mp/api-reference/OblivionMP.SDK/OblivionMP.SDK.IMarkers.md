---
title: 'Interface IMarkers'
description: 'Markers over characters: a line of text above a player''s character or an NPC, seen only by this player.'
---
# Interface IMarkers

Namespace: [OblivionMP.SDK](../OblivionMP.SDK/OblivionMP.SDK.md)  
Assembly: OblivionMP.SDK.dll  

Markers over characters: a line of text above a player's character or an NPC, seen only by this player.

```csharp
public interface IMarkers
```

## Methods

### <a id="OblivionMP_SDK_IMarkers_CreateMarker_OblivionMP_SDK_Common_Archetypes_MainCharacter_System_String_OblivionMP_SDK_Values_MarkerColor_"></a> CreateMarker\(MainCharacter, string, MarkerColor\)

Creates a marker over <code class="paramref">target</code> showing <code class="paramref">text</code> in <code class="paramref">color</code>,
with **Default**.

```csharp
MarkerHandle CreateMarker(MainCharacter target, string text, MarkerColor color)
```

#### Parameters

`target` MainCharacter

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerColor.md)

#### Returns

 [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

The marker, or **None** if the target has no spawned pawn yet.

### <a id="OblivionMP_SDK_IMarkers_CreateMarker_OblivionMP_SDK_Common_Archetypes_MainCharacter_System_String_OblivionMP_SDK_Values_MarkerColor_OblivionMP_SDK_Values_MarkerStyle_"></a> CreateMarker\(MainCharacter, string, MarkerColor, MarkerStyle\)

Creates a marker over <code class="paramref">target</code> showing <code class="paramref">text</code> in <code class="paramref">color</code>,
with <code class="paramref">style</code>.

```csharp
MarkerHandle CreateMarker(MainCharacter target, string text, MarkerColor color, MarkerStyle style)
```

#### Parameters

`target` MainCharacter

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerColor.md)

`style` [MarkerStyle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerStyle.md)

#### Returns

 [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

The marker, or **None** if the target has no spawned pawn yet.

### <a id="OblivionMP_SDK_IMarkers_CreateMarker_OblivionMP_SDK_Common_Archetypes_Npc_System_String_OblivionMP_SDK_Values_MarkerColor_"></a> CreateMarker\(Npc, string, MarkerColor\)

Creates a marker over the NPC <code class="paramref">target</code> showing <code class="paramref">text</code> in
<code class="paramref">color</code>, with **Default**.

```csharp
MarkerHandle CreateMarker(Npc target, string text, MarkerColor color)
```

#### Parameters

`target` Npc

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerColor.md)

#### Returns

 [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

The marker, or **None** if the NPC has no spawned pawn yet.

### <a id="OblivionMP_SDK_IMarkers_CreateMarker_OblivionMP_SDK_Common_Archetypes_Npc_System_String_OblivionMP_SDK_Values_MarkerColor_OblivionMP_SDK_Values_MarkerStyle_"></a> CreateMarker\(Npc, string, MarkerColor, MarkerStyle\)

Creates a marker over the NPC <code class="paramref">target</code> showing <code class="paramref">text</code> in
<code class="paramref">color</code>, with <code class="paramref">style</code>.

```csharp
MarkerHandle CreateMarker(Npc target, string text, MarkerColor color, MarkerStyle style)
```

#### Parameters

`target` Npc

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerColor.md)

`style` [MarkerStyle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerStyle.md)

#### Returns

 [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

The marker, or **None** if the NPC has no spawned pawn yet.

### <a id="OblivionMP_SDK_IMarkers_DestroyMarker_OblivionMP_SDK_Values_MarkerHandle_"></a> DestroyMarker\(MarkerHandle\)

Removes a marker. Does nothing for **None** or a marker already removed.

```csharp
void DestroyMarker(MarkerHandle handle)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

### <a id="OblivionMP_SDK_IMarkers_SetMarkerOpacity_OblivionMP_SDK_Values_MarkerHandle_System_Single_"></a> SetMarkerOpacity\(MarkerHandle, float\)

Sets a marker's opacity, from 0 (fully transparent) to 1 (fully opaque). Does nothing for **None**.

```csharp
void SetMarkerOpacity(MarkerHandle handle, float opacity)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

`opacity` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_IMarkers_SetMarkerStyle_OblivionMP_SDK_Values_MarkerHandle_OblivionMP_SDK_Values_MarkerStyle_"></a> SetMarkerStyle\(MarkerHandle, MarkerStyle\)

Changes how a marker looks and where it sits, including the socket it follows. Does nothing for
**None**.

```csharp
void SetMarkerStyle(MarkerHandle handle, MarkerStyle style)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

`style` [MarkerStyle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerStyle.md)

### <a id="OblivionMP_SDK_IMarkers_SetMarkerText_OblivionMP_SDK_Values_MarkerHandle_System_String_OblivionMP_SDK_Values_MarkerColor_"></a> SetMarkerText\(MarkerHandle, string, MarkerColor\)

Changes the text and color of a marker. Does nothing for **None**.

```csharp
void SetMarkerText(MarkerHandle handle, string text, MarkerColor color)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerColor.md)

### <a id="OblivionMP_SDK_IMarkers_SetMarkerVisible_OblivionMP_SDK_Values_MarkerHandle_System_Boolean_"></a> SetMarkerVisible\(MarkerHandle, bool\)

Shows or hides a marker without removing it. Does nothing for **None**.

```csharp
void SetMarkerVisible(MarkerHandle handle, bool visible)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


