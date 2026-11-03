---
title: 'Struct MarkerColor'
description: 'RGBA marker color, each channel 0..1.'
---
# Struct MarkerColor

Namespace: [OblivionMp.Sdk.Values](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.md)  
Assembly: OblivionMp.Sdk.dll  

RGBA marker color, each channel 0..1.

```csharp
public readonly struct MarkerColor
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Values_MarkerColor__ctor_System_Single_System_Single_System_Single_System_Single_"></a> MarkerColor\(float, float, float, float\)

RGBA marker color, each channel 0..1.

```csharp
public MarkerColor(float r, float g, float b, float a = 1)
```

#### Parameters

`r` [float](https://learn.microsoft.com/dotnet/api/system.single)

`g` [float](https://learn.microsoft.com/dotnet/api/system.single)

`b` [float](https://learn.microsoft.com/dotnet/api/system.single)

`a` [float](https://learn.microsoft.com/dotnet/api/system.single)

## Properties

### <a id="OblivionMp_Sdk_Values_MarkerColor_A"></a> A

The opacity, from 0 to 1.

```csharp
public float A { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Values_MarkerColor_B"></a> B

The blue channel, from 0 to 1.

```csharp
public float B { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Values_MarkerColor_G"></a> G

The green channel, from 0 to 1.

```csharp
public float G { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Values_MarkerColor_R"></a> R

The red channel, from 0 to 1.

```csharp
public float R { get; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMp_Sdk_Values_MarkerColor_White"></a> White

Opaque white.

```csharp
public static MarkerColor White { get; }
```

#### Property Value

 [MarkerColor](../OblivionMp.Sdk.Values/OblivionMp.Sdk.Values.MarkerColor.md)


