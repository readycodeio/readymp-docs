# Struct FileInfo

Namespace: [ReadyM.Api.Saves](../ReadyM.Api.Saves/ReadyM.Api.Saves.md)  
Assembly: ReadyM.Api.dll  

Represents a file with a name and binary content, used for saving game data.

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

### <a id="ReadyM_Api_Saves_FileInfo__ctor_System_String_System_Byte___"></a> FileInfo\(string, byte\[\]\)

Represents a file with a name and binary content, used for saving game data.

```csharp
public FileInfo(string name, byte[] content)
```

#### Parameters

`name` [string](https://learn.microsoft.com/dotnet/api/system.string)

`content` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

## Properties

### <a id="ReadyM_Api_Saves_FileInfo_Content"></a> Content

The binary content of the file.

```csharp
public byte[] Content { get; }
```

#### Property Value

 [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

### <a id="ReadyM_Api_Saves_FileInfo_Name"></a> Name

The name of the file.

```csharp
public string Name { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


