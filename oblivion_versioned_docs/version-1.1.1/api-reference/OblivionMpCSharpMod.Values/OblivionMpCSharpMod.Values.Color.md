---
title: 'Struct Color'
description: 'A linear RGBA color with components in the 0..1 range.'
---
# Struct Color

Namespace: [OblivionMpCSharpMod.Values](../OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.md)  
Assembly: OblivionMpCSharpMod.dll  

A linear RGBA color with components in the 0..1 range.

```csharp
public readonly struct Color : IEquatable<Color>
```

#### Implements

[IEquatable<Color\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMpCSharpMod_Values_Color__ctor_System_Single_System_Single_System_Single_System_Single_"></a> Color\(float, float, float, float\)

A linear RGBA color with components in the 0..1 range.

```csharp
public Color(float R, float G, float B, float A = 1)
```

#### Parameters

`R` [float](https://learn.microsoft.com/dotnet/api/system.single)

Red component (0..1).

`G` [float](https://learn.microsoft.com/dotnet/api/system.single)

Green component (0..1).

`B` [float](https://learn.microsoft.com/dotnet/api/system.single)

Blue component (0..1).

`A` [float](https://learn.microsoft.com/dotnet/api/system.single)

Alpha component (0..1). Defaults to fully opaque.

## Properties

### <a id="OblivionMpCSharpMod_Values_Color_A"></a> A

Alpha component (0..1). Defaults to fully opaque.

```csharp
public float A { get; init; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMpCSharpMod_Values_Color_B"></a> B

Blue component (0..1).

```csharp
public float B { get; init; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMpCSharpMod_Values_Color_G"></a> G

Green component (0..1).

```csharp
public float G { get; init; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMpCSharpMod_Values_Color_R"></a> R

Red component (0..1).

```csharp
public float R { get; init; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="OblivionMpCSharpMod_Values_Color_Deconstruct_System_Single__System_Single__System_Single__System_Single__"></a> Deconstruct\(out float, out float, out float, out float\)

```csharp
public void Deconstruct(out float R, out float G, out float B, out float A)
```

#### Parameters

`R` [float](https://learn.microsoft.com/dotnet/api/system.single)

`G` [float](https://learn.microsoft.com/dotnet/api/system.single)

`B` [float](https://learn.microsoft.com/dotnet/api/system.single)

`A` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMpCSharpMod_Values_Color_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMpCSharpMod_Values_Color_Equals_OblivionMpCSharpMod_Values_Color_"></a> Equals\(Color\)

```csharp
public bool Equals(Color other)
```

#### Parameters

`other` [Color](../OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMpCSharpMod_Values_Color_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMpCSharpMod_Values_Color_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMpCSharpMod_Values_Color_op_Equality_OblivionMpCSharpMod_Values_Color_OblivionMpCSharpMod_Values_Color_"></a> operator ==\(Color, Color\)

```csharp
public static bool operator ==(Color left, Color right)
```

#### Parameters

`left` [Color](../OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md)

`right` [Color](../OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMpCSharpMod_Values_Color_op_Inequality_OblivionMpCSharpMod_Values_Color_OblivionMpCSharpMod_Values_Color_"></a> operator \!=\(Color, Color\)

```csharp
public static bool operator !=(Color left, Color right)
```

#### Parameters

`left` [Color](../OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md)

`right` [Color](../OblivionMpCSharpMod.Values/OblivionMpCSharpMod.Values.Color.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


