# Class OblivionMpServerRpcContracts

Namespace: [ReadyM.Relay.Common.Oblivion](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

```csharp
public static class OblivionMpServerRpcContracts
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[OblivionMpServerRpcContracts](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.OblivionMpServerRpcContracts.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_OblivionMpServerRpcContracts_RequestTimeChange_ReadyM_Api_Idents_AreaId_System_Single_System_Single_System_Single_"></a> RequestTimeChange\(AreaId, float, float, float\)

```csharp
[ClientToServer]
public static void RequestTimeChange(AreaId areaId, float gameHour, float gameDaysPassed, float timeScale)
```

#### Parameters

`areaId` [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs)

`gameHour` [float](https://learn.microsoft.com/dotnet/api/system.single)

`gameDaysPassed` [float](https://learn.microsoft.com/dotnet/api/system.single)

`timeScale` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_OblivionMpServerRpcContracts_RequestWeatherChange_ReadyM_Api_Idents_AreaId_ReadyM_Relay_Common_Oblivion_FormId_System_Single_"></a> RequestWeatherChange\(AreaId, FormId, float\)

```csharp
[ClientToServer]
public static void RequestWeatherChange(AreaId areaId, FormId weatherFormId, float transitionRatio)
```

#### Parameters

`areaId` [AreaId](https://github.com/readycodeio/readym\-core\-sdk/blob/3d50c891f9ae9373345cf44a0434fa50171dcc66/src/ReadyM.Api/Idents/AreaId.cs)

`weatherFormId` [FormId](../ReadyM.Relay.Common.Oblivion/ReadyM.Relay.Common.Oblivion.FormId.md)

`transitionRatio` [float](https://learn.microsoft.com/dotnet/api/system.single)


