---
title: 'Struct ScriptPolicyDefault'
description: 'How the session runs each kind of the game''s scripts for every ref that has no rule of its own.'
---
# Struct ScriptPolicyDefault

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

How the session runs each kind of the game's scripts for every ref that has no rule of its own.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(World), "")]
public readonly struct ScriptPolicyDefault : IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_Actors"></a> Actors

How the scripts of actors run.

```csharp
public ActorScriptPolicy Actors { get; set; }
```

#### Property Value

 ActorScriptPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_DialogueResults"></a> DialogueResults

How the result scripts of dialogue responses run.

```csharp
public DialogueResultPolicy DialogueResults { get; set; }
```

#### Property Value

 DialogueResultPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_Objects"></a> Objects

How the scripts of objects run.

```csharp
public ObjectScriptPolicy Objects { get; set; }
```

#### Property Value

 ObjectScriptPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_Quests"></a> Quests

How quest scripts run.

```csharp
public QuestScriptPolicy Quests { get; set; }
```

#### Property Value

 QuestScriptPolicy

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_Targets"></a> Targets

How script commands that change a ref run. Unset reads as **Everywhere**.

```csharp
public ScriptTargetPolicy Targets { get; set; }
```

#### Property Value

 ScriptTargetPolicy

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public ScriptPolicyDefault Keep()
```

#### Returns

 [ScriptPolicyDefault](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.ScriptPolicyDefault.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_ScriptPolicyDefault_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


