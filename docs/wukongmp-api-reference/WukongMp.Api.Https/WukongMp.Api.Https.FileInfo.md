# Struct FileInfo

Namespace: [WukongMp.Api.Https](../WukongMp.Api.Https/WukongMp.Api.Https.md)  
Assembly: WukongMp.Api.dll  

```csharp
public readonly struct FileInfo
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="WukongMp_Api_Https_FileInfo__ctor_System_String_System_Byte___"></a> FileInfo\(string, byte\[\]\)

```csharp
public FileInfo(string name, byte[] content)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`content` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

## Properties

### <a id="WukongMp_Api_Https_FileInfo_Content"></a> Content

The binary content of the file.

```csharp
public byte[] Content { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="WukongMp_Api_Https_FileInfo_Name"></a> Name

The name of the file.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


