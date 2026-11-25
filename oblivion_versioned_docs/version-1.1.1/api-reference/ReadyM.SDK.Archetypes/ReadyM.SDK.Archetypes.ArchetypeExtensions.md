---
title: 'Class ArchetypeExtensions'
description: 'What a shape can do, for code that holds one as a type parameter.'
---
# Class ArchetypeExtensions

Namespace: [ReadyM.SDK.Archetypes](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.md)  
Assembly: ReadyM.SDK.dll  

What a shape can do, for code that holds one as a type parameter.

```csharp
public static class ArchetypeExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[ArchetypeExtensions](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_SDK_Archetypes_ArchetypeExtensions_IsValid__1___0_"></a> IsValid<T\>\(T\)

Whether the entity behind the shape is still in the world.

```csharp
public static bool IsValid<T>(this T shape) where T : struct, IArchetypeQueryable
```

#### Parameters

`shape` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


