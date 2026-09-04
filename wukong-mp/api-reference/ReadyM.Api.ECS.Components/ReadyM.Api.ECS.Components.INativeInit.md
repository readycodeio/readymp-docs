# Interface INativeInit

Namespace: [ReadyM.Api.ECS.Components](../ReadyM.Api.ECS.Components/ReadyM.Api.ECS.Components.md)  
Assembly: ReadyM.Api.dll  

Interface for components that require native initialization, such as allocating unmanaged resources or setting up internal state.

```csharp
public interface INativeInit
```

## Methods

### <a id="ReadyM_Api_ECS_Components_INativeInit_Init_Yooni_Native_LowLevel_AllocatorKind_"></a> Init\(AllocatorKind\)

```csharp
void Init(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-core\-sdk/blob/ad3650b22ddbb3da37eb303c534b48d50c9f224d/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)


