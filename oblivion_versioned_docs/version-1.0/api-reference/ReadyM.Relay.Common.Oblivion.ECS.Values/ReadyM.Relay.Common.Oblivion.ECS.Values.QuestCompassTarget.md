---
title: 'Struct QuestCompassTarget'
description: 'A compass marker for a quest stage.'
---
# Struct QuestCompassTarget

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

A compass marker for a quest stage.

```csharp
public struct QuestCompassTarget : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget_GateAtLeast"></a> GateAtLeast

The marker shows only while **GateFlag** is at least this value.

```csharp
public float GateAtLeast
```

#### Field Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget_GateFlag"></a> GateFlag

The world flag that gates the marker, or empty for no condition.

```csharp
public NativeString64 GateFlag
```

#### Field Value

 NativeString64

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget_QuestId"></a> QuestId

The quest the marker belongs to.

```csharp
public uint QuestId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget_RefId"></a> RefId

The reference the compass points at.

```csharp
public uint RefId
```

#### Field Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_QuestCompassTarget_Stage"></a> Stage

The quest stage at which the marker applies.

```csharp
public byte Stage
```

#### Field Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)


