---
title: 'Class SpawnerCell'
description: 'Turns a ParentCell into a cell id.'
---
# Class SpawnerCell

Namespace: [OblivionMp.Sdk.Serverside.Spawners](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Turns a **ParentCell** into a cell id.

```csharp
public static class SpawnerCell
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SpawnerCell](../OblivionMp.Sdk.Serverside.Spawners/OblivionMp.Sdk.Serverside.Spawners.SpawnerCell.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Spawners_SpawnerCell_ToFullCellId_OblivionMp_Sdk_Common_Archetypes_Mixins_ParentCell__ReadyM_Api_Idents_AreaId_"></a> ToFullCellId\(in ParentCell, AreaId\)

The id of this cell in <code class="paramref">area</code>; throws for a cell of unknown kind.

```csharp
public static FullCellId ToFullCellId(this in ParentCell parentCell, AreaId area)
```

#### Parameters

`parentCell` ParentCell

`area` AreaId

#### Returns

 FullCellId


