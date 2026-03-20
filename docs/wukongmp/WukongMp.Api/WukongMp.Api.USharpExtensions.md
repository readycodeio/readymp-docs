#  Class USharpExtensions

Namespace: [WukongMp.Api](WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

```csharp
public static class USharpExtensions
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[USharpExtensions](WukongMp.Api.USharpExtensions.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="WukongMp_Api_USharpExtensions_Equals_System_Single_System_Single_System_Single_"></a> Equals\(float, float, float\)

```csharp
public static bool Equals(this float a, float b, float tolerance)
```

#### Parameters

`a` [float](https://learn.microsoft.com/dotnet/api/system.single)

`b` [float](https://learn.microsoft.com/dotnet/api/system.single)

`tolerance` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_USharpExtensions_IsNullOrDestroyed_UnrealEngine_Runtime_UObject_"></a> IsNullOrDestroyed\(UObject?\)

```csharp
public static bool IsNullOrDestroyed(this UObject? obj)
```

#### Parameters

`obj` UObject?

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="WukongMp_Api_USharpExtensions_ToFRotator_System_Numerics_Vector3_"></a> ToFRotator\(Vector3\)

```csharp
public static FRotator ToFRotator(this Vector3 vector)
```

#### Parameters

`vector` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Returns

 FRotator

### <a id="WukongMp_Api_USharpExtensions_ToFVector_System_Numerics_Vector3_"></a> ToFVector\(Vector3\)

```csharp
public static FVector ToFVector(this Vector3 vector)
```

#### Parameters

`vector` [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

#### Returns

 FVector

### <a id="WukongMp_Api_USharpExtensions_ToVector3_UnrealEngine_Runtime_FVector_"></a> ToVector3\(FVector\)

```csharp
public static Vector3 ToVector3(this FVector vector)
```

#### Parameters

`vector` FVector

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

### <a id="WukongMp_Api_USharpExtensions_ToVector3_UnrealEngine_Runtime_FRotator_"></a> ToVector3\(FRotator\)

```csharp
public static Vector3 ToVector3(this FRotator vector)
```

#### Parameters

`vector` FRotator

#### Returns

 [Vector3](https://learn.microsoft.com/dotnet/api/system.numerics.vector3)

