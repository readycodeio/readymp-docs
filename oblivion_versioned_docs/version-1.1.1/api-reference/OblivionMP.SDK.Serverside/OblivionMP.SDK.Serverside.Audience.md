---
title: 'Struct Audience'
---
# Struct Audience

Namespace: [OblivionMP.SDK.Serverside](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.md)  
Assembly: OblivionMP.SDK.Serverside.dll  

```csharp
public readonly struct Audience : IEquatable<Audience>
```

#### Implements

[IEquatable<Audience\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Serverside_Audience_Kind"></a> Kind

```csharp
public AudienceKind Kind { get; }
```

#### Property Value

 AudienceKind

### <a id="OblivionMP_SDK_Serverside_Audience_World"></a> World

```csharp
public static Audience World { get; }
```

#### Property Value

 [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

## Methods

### <a id="OblivionMP_SDK_Serverside_Audience_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Audience_Equals_OblivionMP_SDK_Serverside_Audience_"></a> Equals\(Audience\)

```csharp
public bool Equals(Audience other)
```

#### Parameters

`other` [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Audience_ForPlayer_ReadyM_Api_Idents_PlayerId_"></a> ForPlayer\(PlayerId\)

```csharp
public static Audience ForPlayer(PlayerId player)
```

#### Parameters

`player` PlayerId

#### Returns

 [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

### <a id="OblivionMP_SDK_Serverside_Audience_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Serverside_Audience_Includes_ReadyM_Api_Idents_PlayerId_"></a> Includes\(PlayerId\)

```csharp
public bool Includes(PlayerId player)
```

#### Parameters

`player` PlayerId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Audience_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMP_SDK_Serverside_Audience_op_Equality_OblivionMP_SDK_Serverside_Audience_OblivionMP_SDK_Serverside_Audience_"></a> operator ==\(Audience, Audience\)

```csharp
public static bool operator ==(Audience left, Audience right)
```

#### Parameters

`left` [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

`right` [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Serverside_Audience_op_Inequality_OblivionMP_SDK_Serverside_Audience_OblivionMP_SDK_Serverside_Audience_"></a> operator \!=\(Audience, Audience\)

```csharp
public static bool operator !=(Audience left, Audience right)
```

#### Parameters

`left` [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

`right` [Audience](../OblivionMP.SDK.Serverside/OblivionMP.SDK.Serverside.Audience.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


