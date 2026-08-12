# Interface IComponentApi

Namespace: [WukongMp.Api](../WukongMp.Api/WukongMp.Api.md)  
Assembly: WukongMp.Api.dll  

Provides methods for registering custom networked components.

```csharp
public interface IComponentApi
```

## Methods

### <a id="WukongMp_Api_IComponentApi_RegisterComponent__1"></a> RegisterComponent<T\>\(\)

Register a custom **INetworkedComponent** to be syncronized over the network.

```csharp
void RegisterComponent<T>() where T : struct, INetworkedComponent
```

#### Type Parameters

`T` 

Type of the component to register.


