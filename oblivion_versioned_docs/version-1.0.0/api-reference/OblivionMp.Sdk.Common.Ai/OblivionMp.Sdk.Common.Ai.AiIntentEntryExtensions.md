---
title: 'Class AiIntentEntryExtensions'
description: 'Aims an AI order at an entity instead of a ref id.'
---
# Class AiIntentEntryExtensions

Namespace: [OblivionMp.Sdk.Common.Ai](../OblivionMp.Sdk.Common.Ai/OblivionMp.Sdk.Common.Ai.md)  
Assembly: OblivionMp.Sdk.Common.dll  

Aims an AI order at an entity instead of a ref id.

```csharp
public static class AiIntentEntryExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[AiIntentEntryExtensions](../OblivionMp.Sdk.Common.Ai/OblivionMp.Sdk.Common.Ai.AiIntentEntryExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="OblivionMp_Sdk_Common_Ai_AiIntentEntryExtensions_LocateAt_ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry__ReadyM_SDK_Entities_EntityHandle_"></a> LocateAt\(ref AiIntentEntry, EntityHandle\)

Sets the order's location to <code class="paramref">location</code>.

```csharp
public static void LocateAt(this ref AiIntentEntry intent, EntityHandle location)
```

#### Parameters

`intent` AiIntentEntry

`location` EntityHandle

### <a id="OblivionMp_Sdk_Common_Ai_AiIntentEntryExtensions_Target_ReadyM_Relay_Common_Oblivion_ECS_Values_AiIntentEntry__ReadyM_SDK_Entities_EntityHandle_"></a> Target\(ref AiIntentEntry, EntityHandle\)

Sets the order's target to <code class="paramref">target</code>.

```csharp
public static void Target(this ref AiIntentEntry intent, EntityHandle target)
```

#### Parameters

`intent` AiIntentEntry

`target` EntityHandle


