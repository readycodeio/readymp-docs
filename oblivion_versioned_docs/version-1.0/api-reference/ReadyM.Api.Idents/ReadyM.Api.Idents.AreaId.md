---
title: 'Struct AreaId'
description: 'Identifies an area: a part of the game world behind a loading screen, such as a whole map or a single interior.'
---
# Struct AreaId

Namespace: [ReadyM.Api.Idents](../ReadyM.Api.Idents/ReadyM.Api.Idents.md)  
Assembly: ReadyM.Api.dll  

Identifies an area: a part of the game world behind a loading screen, such as a whole map or a single interior.

```csharp
public struct AreaId : INetSerializable, IEquatable<AreaId>
```

#### Implements

INetSerializable, 
[IEquatable<AreaId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Idents_AreaId__ctor_Yooni_Native_Container_NativeString256_"></a> AreaId\(NativeString256\)

An area id from its native string.

```csharp
public AreaId(NativeString256 id)
```

#### Parameters

`id` NativeString256

### <a id="ReadyM_Api_Idents_AreaId__ctor_System_String_"></a> AreaId\(string\)

An area id from its string form.

```csharp
public AreaId(string id)
```

#### Parameters

`id` [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Api_Idents_AreaId__ctor_System_Int32_"></a> AreaId\(int\)

An area id from a number, stored as its decimal text.

```csharp
public AreaId(int id)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Properties

### <a id="ReadyM_Api_Idents_AreaId_Invalid"></a> Invalid

No area.

```csharp
public static AreaId Invalid { get; }
```

#### Property Value

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

## Methods

### <a id="ReadyM_Api_Idents_AreaId_Equals_ReadyM_Api_Idents_AreaId_"></a> Equals\(AreaId\)

Whether both ids name the same area.

```csharp
public bool Equals(AreaId other)
```

#### Parameters

`other` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_AreaId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_AreaId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Api_Idents_AreaId_ToManaged"></a> ToManaged\(\)

```csharp
public string ToManaged()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

### <a id="ReadyM_Api_Idents_AreaId_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="ReadyM_Api_Idents_AreaId_op_Equality_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_AreaId_"></a> operator ==\(AreaId, AreaId\)

Whether both ids name the same area.

```csharp
public static bool operator ==(AreaId left, AreaId right)
```

#### Parameters

`left` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

`right` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Api_Idents_AreaId_op_Inequality_ReadyM_Api_Idents_AreaId_ReadyM_Api_Idents_AreaId_"></a> operator \!=\(AreaId, AreaId\)

Whether the ids name different areas.

```csharp
public static bool operator !=(AreaId left, AreaId right)
```

#### Parameters

`left` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

`right` [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


