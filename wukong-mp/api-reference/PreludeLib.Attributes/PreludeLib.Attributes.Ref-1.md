# Struct Ref<T>

Namespace: [PreludeLib.Attributes](../PreludeLib.Attributes/PreludeLib.Attributes.md)  
Assembly: PreludeLib.dll  

Use in **HarmonyTargetMethodHint** parameter list to indicate that the parameter is an <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/ref">ref</a> parameter.
This is required for Harmony to correctly identify the method when matching signatures, as <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/ref">ref</a> parameters are treated differently than regular parameters.

```csharp
public struct Ref<T>
```

#### Type Parameters

`T` 

The type of the <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/ref">ref</a> parameter.

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)


