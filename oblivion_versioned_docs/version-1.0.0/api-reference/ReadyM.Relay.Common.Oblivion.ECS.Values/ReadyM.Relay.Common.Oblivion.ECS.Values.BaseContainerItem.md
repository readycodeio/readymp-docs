---
title: 'Struct BaseContainerItem'
description: 'One entry of a container''s base record in the game files, like a form or a leveled list.'
---
# Struct BaseContainerItem

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

One entry of a container's base record in the game files, like a form or a leveled list.

```csharp
public struct BaseContainerItem : INetSerializable
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

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem__ctor_ReadyM_Relay_Common_Oblivion_FormId_System_Int32_ReadyM_Relay_Common_Oblivion_ECS_Values_FormType_"></a> BaseContainerItem\(FormId, int, FormType\)

Builds an entry from a form, a count and the form's kind.

```csharp
public BaseContainerItem(FormId form, int count, FormType kind)
```

#### Parameters

`form` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

`count` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`kind` [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem_Count"></a> Count

How many.

```csharp
public int Count
```

#### Field Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem_Form"></a> Form

The item or leveled list.

```csharp
public FormId Form
```

#### Field Value

 [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_BaseContainerItem_Kind"></a> Kind

What kind of form **Form** is.

```csharp
public FormType Kind
```

#### Field Value

 [FormType](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.FormType.md)


