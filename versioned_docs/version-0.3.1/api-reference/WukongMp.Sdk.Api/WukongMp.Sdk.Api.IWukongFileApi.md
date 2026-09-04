# Interface IWukongFileApi

Namespace: [WukongMp.Sdk.Api](../WukongMp.Sdk.Api/WukongMp.Sdk.Api.md)  
Assembly: WukongMp.Sdk.dll  

Provides methods related to manipulating files for Wukong mods, such as save files.

```csharp
public interface IWukongFileApi
```

## Methods

### <a id="WukongMp_Sdk_Api_IWukongFileApi_GetModDirectory__1"></a> GetModDirectory<T\>\(\)

Get the absolute path to the mod's directory.
Useful for finding files packaged with the mod.

```csharp
string GetModDirectory<T>() where T : ModBase
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

The absolute path to the mod's directory.

#### Type Parameters

`T` 

Pass the type of your mod's entry point. Used to find the mod's assembly and thus its directory.


