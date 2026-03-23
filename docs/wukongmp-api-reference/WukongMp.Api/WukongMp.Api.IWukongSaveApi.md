# Interface IWukongSaveApi

Namespace: [WukongMp.Api](../WukongMp.Api/WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

```csharp
public interface IWukongSaveApi
```

## Methods

### <a id="WukongMp_Api_IWukongSaveApi_DownloadPlayerSaveAsync_System_Threading_CancellationToken_"></a> DownloadPlayerSaveAsync\(CancellationToken\)

```csharp
Task<BlobInfo?> DownloadPlayerSaveAsync(CancellationToken ct = default)
```

#### Parameters

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[BlobInfo](../WukongMp.Api.Https/WukongMp.Api.Https.BlobInfo.md)?\>

### <a id="WukongMp_Api_IWukongSaveApi_DownloadWorldSaveAsync_System_Threading_CancellationToken_"></a> DownloadWorldSaveAsync\(CancellationToken\)

```csharp
Task<BlobInfo?> DownloadWorldSaveAsync(CancellationToken ct = default)
```

#### Parameters

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[BlobInfo](../WukongMp.Api.Https/WukongMp.Api.Https.BlobInfo.md)?\>

### <a id="WukongMp_Api_IWukongSaveApi_UploadPlayerSaveAsync_System_Byte___System_Threading_CancellationToken_"></a> UploadPlayerSaveAsync\(byte\[\], CancellationToken\)

```csharp
Task<bool> UploadPlayerSaveAsync(byte[] content, CancellationToken ct = default)
```

#### Parameters

`content` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

### <a id="WukongMp_Api_IWukongSaveApi_UploadWorldSaveAsync_System_Byte___System_Threading_CancellationToken_"></a> UploadWorldSaveAsync\(byte\[\], CancellationToken\)

```csharp
Task<bool> UploadWorldSaveAsync(byte[] content, CancellationToken ct = default)
```

#### Parameters

`content` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>


