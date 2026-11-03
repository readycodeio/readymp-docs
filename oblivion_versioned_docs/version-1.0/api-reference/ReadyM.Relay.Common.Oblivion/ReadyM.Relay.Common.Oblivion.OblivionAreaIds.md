---
title: 'Class OblivionAreaIds'
description: 'Builds the area ids OblivionMP uses for interiors and exterior world spaces.'
---
# Class OblivionAreaIds

Namespace: [ReadyM.Relay.Common.Oblivion](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Builds the area ids OblivionMP uses for interiors and exterior world spaces.

```csharp
public static class OblivionAreaIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OblivionAreaIds](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.OblivionAreaIds.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_OblivionAreaIds_AreaMapPrefix"></a> AreaMapPrefix

The prefix of every area id.

```csharp
public const string AreaMapPrefix = "L_"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Relay_Common_Oblivion_OblivionAreaIds_InteriorAreaMapName"></a> InteriorAreaMapName

The map name every interior area id starts with.

```csharp
public const string InteriorAreaMapName = "L_PersistentDungeon"
```

#### Field Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_OblivionAreaIds_BuildExterior_System_String_"></a> BuildExterior\(string\)

The area id of the exterior world space with the editor id <code class="paramref">worldSpaceEditorId</code>.

```csharp
public static AreaId BuildExterior(string worldSpaceEditorId)
```

#### Parameters

`worldSpaceEditorId` [string](https://learn.microsoft.com/dotnet/api/system.string)

#### Returns

 AreaId

### <a id="ReadyM_Relay_Common_Oblivion_OblivionAreaIds_BuildInterior_System_UInt32_"></a> BuildInterior\(uint\)

The area id of the interior whose cell has the ref id <code class="paramref">cellRefId</code>.

```csharp
public static AreaId BuildInterior(uint cellRefId)
```

#### Parameters

`cellRefId` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 AreaId


