# Interface IWukongSaveApi

Namespace: [WukongMp.Api](../WukongMp.Api/WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

API for managing world and player saves in Wukong Multiplayer.
Supports co-op style operations where each player has their own save file, and there's a shared world save file for all players.

```csharp
public interface IWukongSaveApi
```

## Methods

### <a id="WukongMp_Api_IWukongSaveApi_DownloadPlayerSaveAsync_System_Threading_CancellationToken_"></a> DownloadPlayerSaveAsync\(CancellationToken\)

Downloads the player's save file from the server.
This operation is expected to return the most recent save file for the player, if any.

```csharp
Task<FileInfo?> DownloadPlayerSaveAsync(CancellationToken ct = default)
```

#### Parameters

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

Cancellation token to cancel the download operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[FileInfo](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Saves/FileInfo.cs)?\>

The content of the player's save file if the download was successful, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> otherwise.

### <a id="WukongMp_Api_IWukongSaveApi_DownloadWorldSaveAsync_System_Threading_CancellationToken_"></a> DownloadWorldSaveAsync\(CancellationToken\)

Downloads the world save file from the server.

```csharp
Task<FileInfo?> DownloadWorldSaveAsync(CancellationToken ct = default)
```

#### Parameters

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

Cancellation token to cancel the download operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[FileInfo](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/ReadyM.Api/Saves/FileInfo.cs)?\>

The content of the world save file if the download was successful, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/keywords/null">null</a> otherwise.

### <a id="WukongMp_Api_IWukongSaveApi_UploadPlayerSaveAsync_System_Byte___System_Threading_CancellationToken_"></a> UploadPlayerSaveAsync\(byte\[\], CancellationToken\)

Uploads the player's save file to the server.
This operation always overwrites the existing save file on the server, if any.
At this point, the server is expected to keep only the most recent save file for each player.

```csharp
Task<bool> UploadPlayerSaveAsync(byte[] content, CancellationToken ct = default)
```

#### Parameters

`content` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The content of the save file to upload.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

Cancellation token to cancel the upload operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the save was uploaded successfully, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> otherwise.

### <a id="WukongMp_Api_IWukongSaveApi_UploadWorldSaveAsync_System_Byte___System_Threading_CancellationToken_"></a> UploadWorldSaveAsync\(byte\[\], CancellationToken\)

Uploads the world save file to the server.
This operation always overwrites the existing world save file on the server, if any.
At this point, the server is expected to keep only the most recent world save file for all players.

```csharp
Task<bool> UploadWorldSaveAsync(byte[] content, CancellationToken ct = default)
```

#### Parameters

`content` [byte](https://learn.microsoft.com/dotnet/api/system.byte)\[\]

The content of the world save file to upload.

`ct` [CancellationToken](https://learn.microsoft.com/dotnet/api/system.threading.cancellationtoken)

Cancellation token to cancel the upload operation.

#### Returns

 [Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)<[bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

<a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">true</a> if the save was uploaded successfully, <a href="https://learn.microsoft.com/dotnet/csharp/language-reference/builtin-types/bool">false</a> otherwise.


