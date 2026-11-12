---
title: 'OblivionMP.SDK.Values'
description: 'The types in the OblivionMP.SDK.Values namespace.'
---
# OblivionMP.SDK.Values

### Structs

 [MarkerColor](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerColor.md)

RGBA marker color, each channel 0..1.

 [MarkerHandle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerHandle.md)

Handle to a marker. Zero means "no marker" (see **None**).

 [MarkerStyle](../OblivionMP.SDK.Values/OblivionMP.SDK.Values.MarkerStyle.md)

How a marker looks and where it sits. Start from **Default** and change what you need:
<code>MarkerStyle.Default with { Socket = "head", Background = new(0, 0, 0, 0.6f), MaxWidth = 300 }</code>.


