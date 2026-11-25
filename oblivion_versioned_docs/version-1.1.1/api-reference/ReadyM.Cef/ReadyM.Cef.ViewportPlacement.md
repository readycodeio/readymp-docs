---
title: 'Struct ViewportPlacement'
description: 'Where a viewport sits and how big it is: a normalized anchor rect in the parent, plus an offset per edge.'
---
# Struct ViewportPlacement

Namespace: [ReadyM.Cef](../ReadyM.Cef/ReadyM.Cef.md)  
Assembly: ReadyM.Cef.dll  

Where a viewport sits and how big it is: a normalized anchor rect in the parent, plus an offset per edge.

```csharp
public struct ViewportPlacement : IEquatable<ViewportPlacement>
```

#### Implements

[IEquatable<ViewportPlacement\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Examples

On a 1920x1080 screen, every layout anyone actually wants:
<pre><code class="lang-csharp">full screen             anchors 0,0 -&gt; 1,1     edges     0,   0,    0,   0    1920x1080 at 0,0
full screen inset 40    anchors 0,0 -&gt; 1,1     edges    40,  40,  -40, -40    1840x1000 at 40,40
top-right 400x300       anchors 1,0 -&gt; 1,0     edges  -420,  20,  -20, 320     400x300  at 1500,20
centered 800x600         anchors .5,.5 -&gt; .5,.5 edges  -400,-300,  400, 300     800x600  at 560,240
right sidebar, 400 wide anchors 1,0 -&gt; 1,1     edges  -400,   0,    0,   0     400x1080 at 1520,0</code></pre>

## Remarks

Per axis: equal anchor min and max pins that axis to one line, and its two offsets are a position and a
size; different values stretch between two lines, and the offsets are insets.
<p>
OFFSETS ARE POSITIVE TOWARD +X AND +Y, so a positive **Right** moves the right edge further
right and insetting from the right is negative. It reads backwards the first time. The named cases below
hide it for the common layouts.
</p>

## Fields

### <a id="ReadyM_Cef_ViewportPlacement_AnchorMaxX"></a> AnchorMaxX

```csharp
public float AnchorMaxX
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_AnchorMaxY"></a> AnchorMaxY

```csharp
public float AnchorMaxY
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_AnchorMinX"></a> AnchorMinX

A normalized rect in the parent. Equal min and max on an axis pins it; different values
            stretch it. 0,0 to 1,1 fills, which is how full screen is said.

```csharp
public float AnchorMinX
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_AnchorMinY"></a> AnchorMinY

```csharp
public float AnchorMinY
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_Bottom"></a> Bottom

```csharp
public float Bottom
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_Left"></a> Left

Per edge, measured from the anchor that edge belongs to, positive toward +x and +y.

```csharp
public float Left
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_Right"></a> Right

```csharp
public float Right
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Cef_ViewportPlacement_Top"></a> Top

```csharp
public float Top
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### <a id="ReadyM_Cef_ViewportPlacement_FullScreen"></a> FullScreen

The whole frame. Both axes stretched, every edge on its anchor. What a viewport starts as.

```csharp
public static ViewportPlacement FullScreen { get; }
```

#### Property Value

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

## Methods

### <a id="ReadyM_Cef_ViewportPlacement_Centered_System_Single_System_Single_"></a> Centered\(float, float\)

A fixed size in the middle. **Single)** at Center on both axes.

```csharp
public static ViewportPlacement Centered(float width, float height)
```

#### Parameters

`width` [float](https://learn.microsoft.com/dotnet/api/system.single)

`height` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

### <a id="ReadyM_Cef_ViewportPlacement_Equals_ReadyM_Cef_ViewportPlacement_"></a> Equals\(ViewportPlacement\)

```csharp
public bool Equals(ViewportPlacement other)
```

#### Parameters

`other` [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportPlacement_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportPlacement_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Cef_ViewportPlacement_HorizontalBar_ReadyM_Cef_ViewportAlign_System_Single_"></a> HorizontalBar\(ViewportAlign, float\)

A full-width bar along the top or bottom. Stretched across, pinned down.

```csharp
public static ViewportPlacement HorizontalBar(ViewportAlign side, float height)
```

#### Parameters

`side` [ViewportAlign](../ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)

Start is the top edge, End the bottom. Center is a centered band.

`height` [float](https://learn.microsoft.com/dotnet/api/system.single)

How tall the bar is, in screen pixels.

#### Returns

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

### <a id="ReadyM_Cef_ViewportPlacement_Pinned_ReadyM_Cef_ViewportAlign_ReadyM_Cef_ViewportAlign_System_Single_System_Single_System_Single_"></a> Pinned\(ViewportAlign, ViewportAlign, float, float, float\)

A fixed size, pinned to a corner, an edge midpoint or the center, inset by a margin.

```csharp
public static ViewportPlacement Pinned(ViewportAlign horizontal, ViewportAlign vertical, float width, float height, float margin = 0)
```

#### Parameters

`horizontal` [ViewportAlign](../ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)

`vertical` [ViewportAlign](../ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)

`width` [float](https://learn.microsoft.com/dotnet/api/system.single)

`height` [float](https://learn.microsoft.com/dotnet/api/system.single)

`margin` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

#### Remarks

The alignment picks the anchor per axis: Start is 0, Center is 0.5, End is 1. The margin is always
INWARD, and at Center it does nothing, because there is no edge to be away from.

### <a id="ReadyM_Cef_ViewportPlacement_Stretch_System_Single_System_Single_System_Single_System_Single_"></a> Stretch\(float, float, float, float\)

The whole frame, inset. Positive is INWARD on every side, unlike the raw fields.

```csharp
public static ViewportPlacement Stretch(float left, float top, float right, float bottom)
```

#### Parameters

`left` [float](https://learn.microsoft.com/dotnet/api/system.single)

`top` [float](https://learn.microsoft.com/dotnet/api/system.single)

`right` [float](https://learn.microsoft.com/dotnet/api/system.single)

`bottom` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

### <a id="ReadyM_Cef_ViewportPlacement_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Cef_ViewportPlacement_VerticalBar_ReadyM_Cef_ViewportAlign_System_Single_"></a> VerticalBar\(ViewportAlign, float\)

A full-height bar down one side. Pinned across, stretched down.

```csharp
public static ViewportPlacement VerticalBar(ViewportAlign side, float width)
```

#### Parameters

`side` [ViewportAlign](../ReadyM.Cef/ReadyM.Cef.ViewportAlign.md)

Start is the left edge, End the right. Center is a centered column.

`width` [float](https://learn.microsoft.com/dotnet/api/system.single)

How wide the bar is, in screen pixels.

#### Returns

 [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

## Operators

### <a id="ReadyM_Cef_ViewportPlacement_op_Equality_ReadyM_Cef_ViewportPlacement_ReadyM_Cef_ViewportPlacement_"></a> operator ==\(ViewportPlacement, ViewportPlacement\)

```csharp
public static bool operator ==(ViewportPlacement left, ViewportPlacement right)
```

#### Parameters

`left` [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

`right` [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Cef_ViewportPlacement_op_Inequality_ReadyM_Cef_ViewportPlacement_ReadyM_Cef_ViewportPlacement_"></a> operator \!=\(ViewportPlacement, ViewportPlacement\)

```csharp
public static bool operator !=(ViewportPlacement left, ViewportPlacement right)
```

#### Parameters

`left` [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

`right` [ViewportPlacement](../ReadyM.Cef/ReadyM.Cef.ViewportPlacement.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


