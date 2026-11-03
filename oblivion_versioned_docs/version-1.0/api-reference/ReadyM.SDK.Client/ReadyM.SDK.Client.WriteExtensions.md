---
title: 'Class WriteExtensions'
description: 'Changes a client makes to replicated values it does not set directly.'
---
# Class WriteExtensions

Namespace: [ReadyM.SDK.Client](../ReadyM.SDK.Client/ReadyM.SDK.Client.md)  
Assembly: ReadyM.SDK.Client.dll  

Changes a client makes to replicated values it does not set directly.

```csharp
public static class WriteExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WriteExtensions](../ReadyM.SDK.Client/ReadyM.SDK.Client.WriteExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Client_WriteExtensions_Override__3___0_ReadyM_SDK_Archetypes_Access_Value___1___2____2_"></a> Override<TShape, TOwner, TValue\>\(TShape, Value<TOwner, TValue\>, TValue\)

Sets a replicated value from this client; false, and nothing changes, when this client may not set it.

```csharp
public static bool Override<TShape, TOwner, TValue>(this TShape shape, Value<TOwner, TValue> value, TValue set) where TShape : struct, IArchetypeQueryable where TOwner : struct, IArchetypeQueryable
```

#### Parameters

`shape` TShape

`value` Value<TOwner, TValue\>

`set` TValue

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TShape` 

`TOwner` 

`TValue` 


