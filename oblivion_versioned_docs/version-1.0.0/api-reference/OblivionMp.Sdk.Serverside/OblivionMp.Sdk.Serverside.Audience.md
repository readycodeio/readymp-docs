---
title: 'Struct Audience'
---
# Struct Audience

Namespace: [OblivionMp.Sdk.Serverside](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.md)  
Assembly: OblivionMp.Sdk.Serverside.dll  

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

### <a id="OblivionMp_Sdk_Serverside_Audience_Kind"></a> Kind

```csharp
public AudienceKind Kind { get; }
```

#### Property Value

 AudienceKind

### <a id="OblivionMp_Sdk_Serverside_Audience_World"></a> World

```csharp
public static Audience World { get; }
```

#### Property Value

 [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

## Methods

### <a id="OblivionMp_Sdk_Serverside_Audience_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Audience_Equals_OblivionMp_Sdk_Serverside_Audience_"></a> Equals\(Audience\)

```csharp
public bool Equals(Audience other)
```

#### Parameters

`other` [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Audience_ForPlayer_ReadyM_Api_Idents_PlayerId_"></a> ForPlayer\(PlayerId\)

```csharp
public static Audience ForPlayer(PlayerId player)
```

#### Parameters

`player` PlayerId

#### Returns

 [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

### <a id="OblivionMp_Sdk_Serverside_Audience_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMp_Sdk_Serverside_Audience_Includes_ReadyM_Api_Idents_PlayerId_"></a> Includes\(PlayerId\)

```csharp
public bool Includes(PlayerId player)
```

#### Parameters

`player` PlayerId

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Audience_ToString"></a> ToString\(\)

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMp_Sdk_Serverside_Audience_op_Equality_OblivionMp_Sdk_Serverside_Audience_OblivionMp_Sdk_Serverside_Audience_"></a> operator ==\(Audience, Audience\)

```csharp
public static bool operator ==(Audience left, Audience right)
```

#### Parameters

`left` [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

`right` [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMp_Sdk_Serverside_Audience_op_Inequality_OblivionMp_Sdk_Serverside_Audience_OblivionMp_Sdk_Serverside_Audience_"></a> operator \!=\(Audience, Audience\)

```csharp
public static bool operator !=(Audience left, Audience right)
```

#### Parameters

`left` [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

`right` [Audience](../OblivionMp.Sdk.Serverside/OblivionMp.Sdk.Serverside.Audience.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


