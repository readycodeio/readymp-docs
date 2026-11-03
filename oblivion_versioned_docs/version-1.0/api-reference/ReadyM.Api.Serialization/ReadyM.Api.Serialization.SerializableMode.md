---
title: 'Enum SerializableMode'
description: 'Defines how a struct should be serialized when using [DeriveINetSerializable].'
---
# Enum SerializableMode

Namespace: [ReadyM.Api.Serialization](../ReadyM.Api.Serialization/ReadyM.Api.Serialization.md)  
Assembly: ReadyM.Api.dll  

Defines how a struct should be serialized when using <code>[DeriveINetSerializable]</code>.

```csharp
[Flags]
public enum SerializableMode : byte
```

## Fields

`MapFields = 1` 

`MapProperties = 2` 

`MapFieldsAndProperties = 3` 

`MapPrivate = 4` 

`MapPublic = 8` 

`MapInternal = 16` 

`Default = 13` 


