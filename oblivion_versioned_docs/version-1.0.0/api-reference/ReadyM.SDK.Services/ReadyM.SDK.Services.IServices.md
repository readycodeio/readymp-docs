---
title: 'Interface IServices'
description: 'Switches services on and off while the game runs.'
---
# Interface IServices

Namespace: [ReadyM.SDK.Services](../ReadyM.SDK.Services/ReadyM.SDK.Services.md)  
Assembly: ReadyM.SDK.dll  

Switches services on and off while the game runs.

```csharp
public interface IServices
```

## Methods

### <a id="ReadyM_SDK_Services_IServices_Disable__1"></a> Disable<TService\>\(\)

Stops its update running and calls its OnDisabled. Warns and does nothing if already disabled.

```csharp
void Disable<TService>() where TService : class, IService
```

#### Type Parameters

`TService` 

### <a id="ReadyM_SDK_Services_IServices_Enable__1"></a> Enable<TService\>\(\)

Lets its update run again and calls its OnEnabled. Warns and does nothing if already enabled.

```csharp
void Enable<TService>() where TService : class, IService
```

#### Type Parameters

`TService` 

### <a id="ReadyM_SDK_Services_IServices_IsEnabled__1"></a> IsEnabled<TService\>\(\)

```csharp
bool IsEnabled<TService>() where TService : class, IService
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`TService` 


