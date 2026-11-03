---
title: 'Class InternedStringCodec'
description: 'Writes and reads a string marked [Interned]. Called by generated code.'
---
# Class InternedStringCodec

Namespace: [ReadyM.Api.Multiplayer.Interning](../ReadyM.Api.Multiplayer.Interning/ReadyM.Api.Multiplayer.Interning.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Writes and reads a string marked [Interned]. Called by generated code.

```csharp
public static class InternedStringCodec
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[InternedStringCodec](../ReadyM.Api.Multiplayer.Interning/ReadyM.Api.Multiplayer.Interning.InternedStringCodec.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Api_Multiplayer_Interning_InternedStringCodec_Read_LiteNetLib_Utils_NetDataReader_Yooni_Native_Container_NativeString256__"></a> Read\(NetDataReader, ref NativeString256\)

```csharp
public static void Read(NetDataReader reader, ref NativeString256 value)
```

#### Parameters

`reader` NetDataReader

`value` NativeString256

### <a id="ReadyM_Api_Multiplayer_Interning_InternedStringCodec_Write_LiteNetLib_Utils_NetDataWriter_Yooni_Native_Container_NativeString256__"></a> Write\(NetDataWriter, in NativeString256\)

```csharp
public static void Write(NetDataWriter writer, in NativeString256 value)
```

#### Parameters

`writer` NetDataWriter

`value` NativeString256


