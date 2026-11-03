---
title: 'Struct AiIntentEntry'
description: 'One package the server wants an npc to run. The target and the location are entities when the server has them, otherwise ref IDs. When both are set the entity is used. Entities only exist within a session, so they are not saved.'
---
# Struct AiIntentEntry

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

One package the server wants an npc to run. The target and the location are entities when the server has
them, otherwise ref IDs. When both are set the entity is used. Entities only exist within a session, so they
are not saved.

```csharp
public struct AiIntentEntry : INetSerializable
```

#### Implements

INetSerializable

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_Flags"></a> Flags

Extra options, such as **AlwaysRun**.

```csharp
public AiIntentFlags Flags
```

#### Field Value

 [AiIntentFlags](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiIntentFlags.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_LocationPosition"></a> LocationPosition

A place to go to when there is no **LocationRefId**.

```csharp
public Vector3 LocationPosition
```

#### Field Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_LocationRefId"></a> LocationRefId

The ref id of the place to go to, or 0.

```csharp
public uint LocationRefId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_PackageType"></a> PackageType

What to do.

```csharp
public AiPackageType PackageType
```

#### Field Value

 [AiPackageType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.AiPackageType.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_Radius"></a> Radius

How close counts as there, or how far to wander.

```csharp
public float Radius
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_Seq"></a> Seq

The order's sequence number. <code>AiIntents.Enqueue</code> fills it in.

```csharp
public ushort Seq
```

#### Field Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_TargetPosition"></a> TargetPosition

A target position carried with the order. No package uses it yet.

```csharp
public Vector3 TargetPosition
```

#### Field Value

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry_TargetRefId"></a> TargetRefId

The ref id of who or what the package acts on, or 0.

```csharp
public uint TargetRefId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)


