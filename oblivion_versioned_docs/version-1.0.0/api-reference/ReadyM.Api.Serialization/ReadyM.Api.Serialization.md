---
title: 'ReadyM.Api.Serialization'
description: 'The types in the ReadyM.Api.Serialization namespace.'
---
# ReadyM.Api.Serialization

### Classes

 [VarUIntExtensions](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUIntExtensions.md)

Writes and reads a <code>uint</code> in the compact **VarUInt** encoding.

 [VarUShortExtensions](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShortExtensions.md)

Writes and reads a <code>ushort</code> in the compact **VarUShort** encoding.

### Structs

 [VarUInt](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUInt.md)

Variable-length unsigned integer.
Most significant bit of each byte is used as a continuation flag.
The remaining 7 bits are used to store the value.

 [VarUShort](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.VarUShort.md)

Variable-length unsigned short.
Most significant bit of each byte is used as a continuation flag.
The remaining 7 bits are used to store the value.

### Enums

 [SerializableMode](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.SerializableMode.md)

Defines how a struct should be serialized when using <code>[DeriveINetSerializable]</code>.


