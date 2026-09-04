# Struct FormId

Namespace: [ReadyM.Relay.Common.Oblivion](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Represents a unique identifier in the Oblivion game.
Used for identifying various game objects, such as items, NPCs, and locations.

```csharp
public struct FormId : INetSerializable, IEquatable<FormId>
```

#### Implements

INetSerializable, 
[IEquatable<FormId\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_FormId__ctor_System_UInt32_"></a> FormId\(uint\)

```csharp
public FormId(uint value)
```

#### Parameters

`value` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_FormId_Value"></a> Value

```csharp
public readonly uint Value { get; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_FormId_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` NetDataReader

### <a id="ReadyM_Relay_Common_Oblivion_FormId_Equals_ReadyM_Relay_Common_Oblivion_FormId_"></a> Equals\(FormId\)

```csharp
public bool Equals(FormId other)
```

#### Parameters

`other` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_FormId_Equals_System_Object_"></a> Equals\(object?\)

```csharp
public override bool Equals(object? obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_FormId_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_FormId_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` NetDataWriter

## Operators

### <a id="ReadyM_Relay_Common_Oblivion_FormId_op_Equality_ReadyM_Relay_Common_Oblivion_FormId_ReadyM_Relay_Common_Oblivion_FormId_"></a> operator ==\(FormId, FormId\)

```csharp
public static bool operator ==(FormId left, FormId right)
```

#### Parameters

`left` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

`right` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_FormId_op_Implicit_ReadyM_Relay_Common_Oblivion_FormId__System_UInt32"></a> implicit operator uint\(FormId\)

```csharp
public static implicit operator uint(FormId f)
```

#### Parameters

`f` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

#### Returns

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="ReadyM_Relay_Common_Oblivion_FormId_op_Inequality_ReadyM_Relay_Common_Oblivion_FormId_ReadyM_Relay_Common_Oblivion_FormId_"></a> operator \!=\(FormId, FormId\)

```csharp
public static bool operator !=(FormId left, FormId right)
```

#### Parameters

`left` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

`right` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


