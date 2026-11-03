---
title: 'Struct NetworkFormId'
description: 'Names a form in a way every client can resolve.'
---
# Struct NetworkFormId

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Values](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Names a form in a way every client can resolve.

```csharp
public struct NetworkFormId : INetSerializable, IEquatable<NetworkFormId>
```

#### Implements

INetSerializable, 
[IEquatable<NetworkFormId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

A form that comes from the game files has the same form ID everywhere, so it travels as that ID. A dynamic
form is created at runtime and gets a different ID on every client, so it travels as the network ID of its
form entity, which each client maps back to its own form ID.

## Fields

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_FormId"></a> FormId

The form ID of a form from the game files, or 0 for a dynamic form.

```csharp
public FormId FormId
```

#### Field Value

 [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_Equals_ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_"></a> Equals\(NetworkFormId\)

Whether both name the same form.

```csharp
public bool Equals(NetworkFormId other)
```

#### Parameters

`other` [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_Equals_System_Object_"></a> Equals\(object?\)

Whether <code class="paramref">obj</code> is a **NetworkFormId** naming the same form.

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_GetHashCode"></a> GetHashCode\(\)

A hash code for the form.

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_ToString"></a> ToString\(\)

The form as text, for logs.

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_op_Equality_ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_"></a> operator ==\(NetworkFormId, NetworkFormId\)

Whether both name the same form.

```csharp
public static bool operator ==(NetworkFormId left, NetworkFormId right)
```

#### Parameters

`left` [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

`right` [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_op_Implicit_ReadyM_Relay_Common_Oblivion_FormId__ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId"></a> implicit operator NetworkFormId\(FormId\)

A form from the game files is named by its form ID everywhere, so it is one of these already.

```csharp
public static implicit operator NetworkFormId(FormId formId)
```

#### Parameters

`formId` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

#### Returns

 [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_op_Inequality_ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_ReadyM_Relay_Common_Oblivion_ECS_Values_NetworkFormId_"></a> operator \!=\(NetworkFormId, NetworkFormId\)

Whether they name different forms.

```csharp
public static bool operator !=(NetworkFormId left, NetworkFormId right)
```

#### Parameters

`left` [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

`right` [NetworkFormId](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.NetworkFormId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


