---
title: 'Class ServerRefIds'
description: 'Hands out ref ids for entities the server creates (dropped items, spawned npcs). The next one is kept on the World (ServerRefIdMark), which is saved in Global, so cells that are not loaded keep their ids.'
---
# Class ServerRefIds

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

Hands out ref ids for entities the server creates (dropped items, spawned npcs). The next one is kept on the World
(**ServerRefIdMark**), which is saved in Global, so cells that are not loaded keep their ids.

```csharp
public sealed class ServerRefIds
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ServerRefIds](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.ServerRefIds.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="OblivionMp_Sdk_Serverside_ServerRefIds__ctor_ReadyM_SDK_Server_Entities_IEntities_"></a> ServerRefIds\(IEntities\)

Hands out ref ids for entities the server creates (dropped items, spawned npcs). The next one is kept on the World
(**ServerRefIdMark**), which is saved in Global, so cells that are not loaded keep their ids.

```csharp
public ServerRefIds(IEntities entities)
```

#### Parameters

`entities` IEntities

## Methods

### <a id="OblivionMp_Sdk_Serverside_ServerRefIds_Next"></a> Next\(\)

Returns a ref id no other object in the session uses yet.

```csharp
public uint Next()
```

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMp_Sdk_Serverside_ServerRefIds_Resume_System_UInt32_System_UInt32_"></a> Resume\(uint, uint\)

The first id to hand out in a run. Public for the tests.

```csharp
public static uint Resume(uint savedNext, uint liveFirstFree)
```

#### Parameters

`savedNext` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

`liveFirstFree` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


