---
title: 'Class SeededFormTypes'
description: 'Kinds of game file refs the server seeds as entities.'
---
# Class SeededFormTypes

Namespace: [ReadyM.Relay.Common.Oblivion](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Kinds of game file refs the server seeds as entities.

```csharp
public static class SeededFormTypes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[SeededFormTypes](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.SeededFormTypes.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_SeededFormTypes_All"></a> All

Every form type the server seeds.

```csharp
public static readonly FormType[] All
```

#### Field Value

 [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)\[\]

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_SeededFormTypes_IsSeeded_ReadyM_Relay_Common_Oblivion_ECS_Values_FormType_"></a> IsSeeded\(FormType\)

Whether the server seeds refs of <code class="paramref">formType</code>.

```csharp
public static bool IsSeeded(FormType formType)
```

#### Parameters

`formType` [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


