---
title: 'OblivionMp.Sdk.Values'
description: 'The types in the OblivionMp.Sdk.Values namespace.'
---
# OblivionMp.Sdk.Values

### Structs

 [MarkerColor](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor.md)

RGBA marker color, each channel 0..1.

 [MarkerHandle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerHandle.md)

Handle to a marker. Zero means "no marker" (see **None**).

 [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

How a marker looks and where it sits. Start from **Default** and change what you need:
<code>MarkerStyle.Default with { Socket = "head", Background = new(0, 0, 0, 0.6f), MaxWidth = 300 }</code>.


