---
title: 'Struct MarkerStyle'
description: 'How a marker looks and where it sits. Start from Default and change what you need: MarkerStyle.Default with { Socket = "head", Background = new(0, 0, 0, 0.6f), MaxWidth = 300 }.'
---
# Struct MarkerStyle

Namespace: [OblivionMp.Sdk.Values](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.md)  
Assembly: OblivionMp.Sdk.dll  

How a marker looks and where it sits. Start from **Default** and change what you need:
<code>MarkerStyle.Default with { Socket = "head", Background = new(0, 0, 0, 0.6f), MaxWidth = 300 }</code>.

```csharp
public readonly struct MarkerStyle : IEquatable<MarkerStyle>
```

#### Implements

[IEquatable<MarkerStyle\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

Values out of range are corrected rather than rejected: a font size below 1 becomes the default size, a negative or
non-finite **MaxWidth** becomes 0, a non-finite **OffsetZ** becomes the default offset, a
negative **OutlineSize** becomes 0, and the background's and outline's channels are clamped to 0..1.
<code>default(MarkerStyle)</code> is therefore usable, but has an **OffsetZ** of 0; prefer
**Default**.

## Constructors

### <a id="OblivionMp_Sdk_Values_MarkerStyle__ctor"></a> MarkerStyle\(\)

Creates the default style; see **Default**.

```csharp
public MarkerStyle()
```

## Properties

### <a id="OblivionMp_Sdk_Values_MarkerStyle_Background"></a> Background

Colour of the box behind the text, alpha included. Fully transparent by default.

```csharp
public MarkerColor Background { get; init; }
```

#### Property Value

 [MarkerColor](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor.md)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_Default"></a> Default

The look markers have when created without a style: today's name tag.

```csharp
public static MarkerStyle Default { get; }
```

#### Property Value

 [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_FontSize"></a> FontSize

Font size, in the unit of the Unreal Engine UMG designer.

```csharp
public int FontSize { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_MaxWidth"></a> MaxWidth

Width in widget pixels at which the text wraps onto a new line, or 0 to never wrap.

```csharp
public float MaxWidth { get; init; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_OffsetZ"></a> OffsetZ

Height in cm, straight up, above the top of the character: above **Socket** when the character's mesh
has it, otherwise above the top of its capsule. The marker grows upward from there.

```csharp
public float OffsetZ { get; init; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_OutlineColor"></a> OutlineColor

Colour of the outline around the text, alpha included. Opaque black by default.

```csharp
public MarkerColor OutlineColor { get; init; }
```

#### Property Value

 [MarkerColor](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor.md)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_OutlineSize"></a> OutlineSize

Thickness of the outline around the text, in UMG font outline units; 0 for no outline.

```csharp
public int OutlineSize { get; init; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_Socket"></a> Socket

Bone or socket on the character's mesh to follow, such as <code>head</code> for humanoids. Skeletons name their bones
differently, so a socket the mesh does not have falls back to the top of the capsule. <code>null</code> or blank
always uses the top of the capsule.

```csharp
public string? Socket { get; init; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

## Methods

### <a id="OblivionMp_Sdk_Values_MarkerStyle_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_Equals_OblivionMp_Sdk_Values_MarkerStyle_"></a> Equals\(MarkerStyle\)

```csharp
public bool Equals(MarkerStyle other)
```

#### Parameters

`other` [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMp_Sdk_Values_MarkerStyle_op_Equality_OblivionMp_Sdk_Values_MarkerStyle_OblivionMp_Sdk_Values_MarkerStyle_"></a> operator ==\(MarkerStyle, MarkerStyle\)

```csharp
public static bool operator ==(MarkerStyle left, MarkerStyle right)
```

#### Parameters

`left` [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

`right` [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Values_MarkerStyle_op_Inequality_OblivionMp_Sdk_Values_MarkerStyle_OblivionMp_Sdk_Values_MarkerStyle_"></a> operator \!=\(MarkerStyle, MarkerStyle\)

```csharp
public static bool operator !=(MarkerStyle left, MarkerStyle right)
```

#### Parameters

`left` [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

`right` [MarkerStyle](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerStyle.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


