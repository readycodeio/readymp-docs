---
title: 'Class OblivionCellIds'
description: 'The cell ids OblivionMP uses within an area: every interior is one cell, an exterior cell is its grid coordinates.'
---
# Class OblivionCellIds

Namespace: [ReadyM.Relay.Common.Oblivion](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

The cell ids OblivionMP uses within an area: every interior is one cell, an exterior cell is its grid coordinates.

```csharp
public static class OblivionCellIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OblivionCellIds](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.OblivionCellIds.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_OblivionCellIds_InteriorCellIdName"></a> InteriorCellIdName

The name of the cell id every interior uses for its one cell.

```csharp
public const string InteriorCellIdName = "interior"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_OblivionCellIds_Interior"></a> Interior

The cell id of an interior's one cell.

```csharp
public static CellId Interior { get; }
```

#### Property Value

 CellId

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_OblivionCellIds_Exterior_System_Int32_System_Int32_"></a> Exterior\(int, int\)

The cell id of the exterior grid square at <code class="paramref">x</code>, <code class="paramref">y</code>.

```csharp
public static CellId Exterior(int x, int y)
```

#### Parameters

`x` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`y` [int](https://learn.microsoft.com/dotnet/api/system.int32)

#### Returns

 CellId


