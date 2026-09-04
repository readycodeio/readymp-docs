# Interface IComponentApi

Namespace: [ReadyM.Sdk.Common.Api](../ReadyM.Sdk.Common.Api/ReadyM.Sdk.Common.Api.md)  
Assembly: ReadyM.Sdk.Common.dll  

Provides methods for registering custom networked components.

```csharp
public interface IComponentApi
```

## Methods

### <a id="ReadyM_Sdk_Common_Api_IComponentApi_RegisterComponent__1"></a> RegisterComponent<T\>\(\)

Register a custom **INetworkedComponent** to be syncronized over the network.

```csharp
void RegisterComponent<T>() where T : struct, INetworkedComponent
```

#### Type Parameters

`T` 

Type of the component to register.


