# Class BouncyCastleHttpsClient

Namespace: [WukongMp.Api.Https](../WukongMp.Api.Https/WukongMp.Api.Https.md)  
Assembly: WukongMp.Api.dll  

```csharp
public class BouncyCastleHttpsClient
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[BouncyCastleHttpsClient](../WukongMp.Api.Https/WukongMp.Api.Https.BouncyCastleHttpsClient.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="WukongMp_Api_Https_BouncyCastleHttpsClient__ctor_Microsoft_Extensions_Logging_ILogger_"></a> BouncyCastleHttpsClient\(ILogger\)

```csharp
public BouncyCastleHttpsClient(ILogger logger)
```

#### Parameters

`logger` [ILogger](https://learn.microsoft.com/dotnet/api/microsoft.extensions.logging.ilogger)

## Methods

### <a id="WukongMp_Api_Https_BouncyCastleHttpsClient_GetAsync__1_System_Uri_System_Collections_Generic_Dictionary_System_String_System_String__System_Threading_CancellationToken_"></a> GetAsync<T\>\(Uri, Dictionary<string, string\>?, CancellationToken\)

```csharp
public Task<T?> GetAsync<T>(Uri url, Dictionary<string, string>? headers = null, CancellationToken ct = default)
```

#### Parameters

`url` Uri

`headers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<T?\>

#### Type Parameters

`T` 

### <a id="WukongMp_Api_Https_BouncyCastleHttpsClient_GetBytesAsync_System_Uri_System_Collections_Generic_Dictionary_System_String_System_String__System_Threading_CancellationToken_"></a> GetBytesAsync\(Uri, Dictionary<string, string\>?, CancellationToken\)

```csharp
public Task<byte[]?> GetBytesAsync(Uri url, Dictionary<string, string>? headers = null, CancellationToken ct = default)
```

#### Parameters

`url` Uri

`headers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]?\>

### <a id="WukongMp_Api_Https_BouncyCastleHttpsClient_PutBytesAsync_System_Uri_System_Collections_Generic_Dictionary_System_String_System_String__System_Byte___System_Threading_CancellationToken_"></a> PutBytesAsync\(Uri, Dictionary<string, string\>, byte\[\], CancellationToken\)

Performs a PUT request to upload raw byte data, suitable for Azure Blob Storage with a SAS URL.

```csharp
public Task<HttpStatusCode> PutBytesAsync(Uri url, Dictionary<string, string> headers, byte[] fileBytes, CancellationToken ct = default)
```

#### Parameters

`url` Uri

The request URL, including SAS token if applicable.

`headers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>

Required headers, e.g., "x-ms-blob-type: BlockBlob".

`fileBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The raw file content to upload.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

A cancellation token.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpStatusCode](https://learn.microsoft.com/dotnet/api/system.net.httpstatuscode)\>

The HTTP status code of the response.

### <a id="WukongMp_Api_Https_BouncyCastleHttpsClient_PutMultipartAsync_System_Uri_System_Collections_Generic_Dictionary_System_String_System_Object__System_String_System_String_System_Byte___System_Collections_Generic_Dictionary_System_String_System_String__System_Threading_CancellationToken_"></a> PutMultipartAsync\(Uri, Dictionary<string, object\>?, string, string, byte\[\], Dictionary<string, string\>?, CancellationToken\)

```csharp
public Task<HttpStatusCode> PutMultipartAsync(Uri url, Dictionary<string, object>? fields, string fileFieldName, string fileName, byte[] fileBytes, Dictionary<string, string>? headers = null, CancellationToken ct = default)
```

#### Parameters

`url` Uri

`fields` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [object](https://learn.microsoft.com/dotnet/api/system.object)\>?

`fileFieldName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fileName` [string](https://learn.microsoft.com/dotnet/api/system.string)

`fileBytes` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`headers` [Dictionary](https://learn.microsoft.com/dotnet/api/system.collections.generic.dictionary-2)<[string](https://learn.microsoft.com/dotnet/api/system.string), [string](https://learn.microsoft.com/dotnet/api/system.string)\>?

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[HttpStatusCode](https://learn.microsoft.com/dotnet/api/system.net.httpstatuscode)\>


