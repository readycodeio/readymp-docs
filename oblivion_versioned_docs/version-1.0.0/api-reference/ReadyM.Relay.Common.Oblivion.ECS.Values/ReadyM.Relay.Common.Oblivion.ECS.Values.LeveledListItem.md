---
title: 'Struct LeveledListItem'
description: 'One entry of a leveled list from the game files, like a form or a nested leveled list.'
---
# Struct LeveledListItem

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

One entry of a leveled list from the game files, like a form or a nested leveled list.

```csharp
public struct LeveledListItem : INetSerializable
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

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem__ctor_System_UInt16_System_UInt16_ReadyM_Relay_Common_Oblivion_FormId_ReadyM_Relay_Common_Oblivion_ECS_Values_FormType_"></a> LeveledListItem\(ushort, ushort, FormId, FormType\)

Builds an entry from a level, a count, a form and the form's kind.

```csharp
public LeveledListItem(ushort level, ushort count, FormId form, FormType kind)
```

#### Parameters

`level` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`count` [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

`form` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

`kind` [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem_Count"></a> Count

How many the entry gives.

```csharp
public ushort Count
```

#### Field Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem_Form"></a> Form

The creature, item or nested leveled list.

```csharp
public FormId Form
```

#### Field Value

 [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem_Kind"></a> Kind

What kind of form **Form** is.

```csharp
public FormType Kind
```

#### Field Value

 [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_LeveledListItem_Level"></a> Level

The lowest level at which the entry can be picked.

```csharp
public ushort Level
```

#### Field Value

 [ushort](https://learn.microsoft.com/dotnet/api/system.uint16)


