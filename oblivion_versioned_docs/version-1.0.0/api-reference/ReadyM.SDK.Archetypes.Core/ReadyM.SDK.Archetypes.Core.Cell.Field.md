---
title: 'Class Cell.Field'
description: 'Tokens naming each of Cell''s values, for mappings and overrides.'
---
# Class Cell.Field

Namespace: [ReadyM.SDK.Archetypes.Core](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.md)  
Assembly: ReadyM.SDK.dll  

Tokens naming each of Cell's values, for mappings and overrides.

```csharp
public static class Cell.Field
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Cell.Field](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.Field.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="ReadyM_SDK_Archetypes_Core_Cell_Field_All"></a> All

Every value at once, for a correspondence that cannot be split.

```csharp
public static Shape<Cell> All { get; }
```

#### Property Value

 [Shape](../ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Shape-1.md)<[Cell](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md)\>

### <a id="ReadyM_SDK_Archetypes_Core_Cell_Field_FullCellId"></a> FullCellId

Names Cell.FullCellId.

```csharp
public static Value<Cell, FullCellId> FullCellId { get; }
```

#### Property Value

 [Value](../ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Value-2.md)<[Cell](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md), FullCellId\>

### <a id="ReadyM_SDK_Archetypes_Core_Cell_Field_MasterClient"></a> MasterClient

Names Cell.MasterClient.

```csharp
public static Value<Cell, PlayerId> MasterClient { get; }
```

#### Property Value

 [Value](../ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.Value-2.md)<[Cell](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.Cell.md), PlayerId\>


