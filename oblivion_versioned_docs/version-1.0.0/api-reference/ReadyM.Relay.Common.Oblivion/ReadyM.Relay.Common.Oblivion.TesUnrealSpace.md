---
title: 'Class TesUnrealSpace'
description: 'Converts positions and rotations from the game files to the world space the SDK uses.'
---
# Class TesUnrealSpace

Namespace: [ReadyM.Relay.Common.Oblivion](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Converts positions and rotations from the game files to the world space the SDK uses.

```csharp
public static class TesUnrealSpace
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[TesUnrealSpace](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.TesUnrealSpace.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_TesUnrealSpace_CentimetersPerTesUnit"></a> CentimetersPerTesUnit

Centimeters in one game file unit.

```csharp
public const float CentimetersPerTesUnit = 1.4285715
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_TesUnrealSpace_TesUnitsPerExteriorCell"></a> TesUnitsPerExteriorCell

Game file units along one side of an exterior cell.

```csharp
public const float TesUnitsPerExteriorCell = 4096
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_TesUnrealSpace_UnrealYawOffsetDegrees"></a> UnrealYawOffsetDegrees

Degrees added to a game file rotation to turn it into a <code>Rotation</code>.

```csharp
public const float UnrealYawOffsetDegrees = -90
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_TesUnrealSpace_ToExteriorCellCoordinate_System_Single_"></a> ToExteriorCellCoordinate\(float\)

The exterior grid square a game file X or Y coordinate falls in.

```csharp
public static int ToExteriorCellCoordinate(float tesCoordinate)
```

#### Parameters

`tesCoordinate` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_TesUnrealSpace_ToUnrealLocation_System_Numerics_Vector3_"></a> ToUnrealLocation\(Vector3\)

A position from the game files, as a <code>Position</code>.

```csharp
public static Vector3 ToUnrealLocation(Vector3 tesPosition)
```

#### Parameters

`tesPosition` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_TesUnrealSpace_ToUnrealYawDegrees_System_Single_"></a> ToUnrealYawDegrees\(float\)

A Z rotation from the game files, in radians, as a <code>Rotation</code>.

```csharp
public static float ToUnrealYawDegrees(float tesRotationZRadians)
```

#### Parameters

`tesRotationZRadians` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)


