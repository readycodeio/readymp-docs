---
title: 'ReadyM.Api.Multiplayer.Generators'
description: 'The types in the ReadyM.Api.Multiplayer.Generators namespace.'
---
# ReadyM.Api.Multiplayer.Generators

### Classes

 [DeriveINetSerializableAttribute](../ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.DeriveINetSerializableAttribute.md)

Decorate a struct with this attribute to make it available for use as an RPC parameter.

 [HalfPrecisionAttribute](../ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.HalfPrecisionAttribute.md)

The annotated float or vector will be serialized on the wire as 16-bit floats, saving 2 bytes per float.

 [InternedAttribute](../ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.InternedAttribute.md)

Sends a NativeString256, or a NativeList of them, as a small id once the server has seen the string.

 [QuantizeAngleAttribute](../ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.QuantizeAngleAttribute.md)

Indicates a float field holding an angle in degrees as <code>bits</code> bits (8 or 16), splitting the full circle into
2^bits steps.

 [QuantizeAttribute](../ReadyM.Api.Multiplayer.Generators/ReadyM.Api.Multiplayer.Generators.QuantizeAttribute.md)

The float or vector field is sent over the wire as a fixed-point number in <code>bits</code> bits (8, 16 or 24) between <code>min</code> and
<code>max</code>, instead of a 4-byte float per number.


