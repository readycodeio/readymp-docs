# Interface IMarkerApi

Namespace: [OblivionMp.Sdk.Api](../OblivionMp.Sdk.Api/OblivionMp.Sdk.Api.md)  
Assembly: OblivionMp.Sdk.dll  

Creates and manages local markers over player characters.

```csharp
public interface IMarkerApi
```

## Methods

### <a id="OblivionMp_Sdk_Api_IMarkerApi_CreateMarker_OblivionMp_Sdk_Entities_Player_ReadyMainCharacter_System_String_OblivionMp_Sdk_Values_MarkerColor_"></a> CreateMarker\(ReadyMainCharacter, string, MarkerColor\)

Creates a marker over <code class="paramref">target</code> showing <code class="paramref">text</code> in <code class="paramref">color</code>.
Returns **None** if the target has no spawned pawn yet.

```csharp
MarkerHandle CreateMarker(ReadyMainCharacter target, string text, MarkerColor color)
```

#### Parameters

`target` [ReadyMainCharacter](../OblivionMp.Sdk.Entities.Player/OblivionMp.Sdk.Entities.Player.ReadyMainCharacter.md)

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor.md)

#### Returns

 [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

### <a id="OblivionMp_Sdk_Api_IMarkerApi_DestroyMarker_OblivionMp_Sdk_Values_MarkerHandle_"></a> DestroyMarker\(MarkerHandle\)

Destroys a marker. No-op for **None** or an already-destroyed handle.

```csharp
void DestroyMarker(MarkerHandle handle)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

### <a id="OblivionMp_Sdk_Api_IMarkerApi_SetMarkerOpacity_OblivionMp_Sdk_Values_MarkerHandle_System_Single_"></a> SetMarkerOpacity\(MarkerHandle, float\)

Sets a marker's opacity, from 0 (fully transparent) to 1 (fully opaque). No-op for **None**.

```csharp
void SetMarkerOpacity(MarkerHandle handle, float opacity)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

`opacity` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Api_IMarkerApi_SetMarkerText_OblivionMp_Sdk_Values_MarkerHandle_System_String_OblivionMp_Sdk_Values_MarkerColor_"></a> SetMarkerText\(MarkerHandle, string, MarkerColor\)

Updates the text and color of an existing marker. No-op for **None**.

```csharp
void SetMarkerText(MarkerHandle handle, string text, MarkerColor color)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

`text` [string](https://learn.microsoft.com/dotnet/api/system.string)

`color` [MarkerColor](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor.md)

### <a id="OblivionMp_Sdk_Api_IMarkerApi_SetMarkerVisible_OblivionMp_Sdk_Values_MarkerHandle_System_Boolean_"></a> SetMarkerVisible\(MarkerHandle, bool\)

Shows or hides a marker without destroying it. No-op for **None**.

```csharp
void SetMarkerVisible(MarkerHandle handle, bool visible)
```

#### Parameters

`handle` [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


