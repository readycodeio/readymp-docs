---
title: 'Class IEntitiesExtensions'
description: 'Shortcuts on IEntities for common client queries.'
---
# Class IEntitiesExtensions

Namespace: [OblivionMP.SDK](../OblivionMP.SDK/OblivionMP.SDK.md)  
Assembly: OblivionMP.SDK.dll  

Shortcuts on **IEntities** for common client queries.

```csharp
public static class IEntitiesExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[IEntitiesExtensions](../OblivionMP.SDK/OblivionMP.SDK.IEntitiesExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="OblivionMP_SDK_IEntitiesExtensions_get_AllDroppedItems_ReadyM_SDK_Client_Entities_IEntities_"></a> get\_AllDroppedItems\(IEntities\)

A query over every item dropped in the world.

```csharp
public static EntityQuery<DroppedItem> get_AllDroppedItems(IEntities entities)
```

#### Parameters

`entities` IEntities

#### Returns

 EntityQuery<DroppedItem\>

### <a id="OblivionMP_SDK_IEntitiesExtensions_get_AllMainCharacters_ReadyM_SDK_Client_Entities_IEntities_"></a> get\_AllMainCharacters\(IEntities\)

A query over every player character.

```csharp
public static EntityQuery<MainCharacter> get_AllMainCharacters(IEntities entities)
```

#### Parameters

`entities` IEntities

#### Returns

 EntityQuery<MainCharacter\>

### <a id="OblivionMP_SDK_IEntitiesExtensions_get_AllPlayers_ReadyM_SDK_Client_Entities_IEntities_"></a> get\_AllPlayers\(IEntities\)

A query over every player.

```csharp
public static EntityQuery<Player> get_AllPlayers(IEntities entities)
```

#### Parameters

`entities` IEntities

#### Returns

 EntityQuery<Player\>


