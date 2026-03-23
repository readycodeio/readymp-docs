# Class GameWidgetBase

Namespace: [WukongMp.Api.UI](../WukongMp.Api.UI/WukongMp.Api.UI.md)  
Assembly: WukongMp.Api.dll  

```csharp
public abstract class GameWidgetBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GameWidgetBase](../WukongMp.Api.UI/WukongMp.Api.UI.GameWidgetBase.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="WukongMp_Api_UI_GameWidgetBase__ctor_System_String_"></a> GameWidgetBase\(string\)

```csharp
protected GameWidgetBase(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

## Fields

### <a id="WukongMp_Api_UI_GameWidgetBase_GameWidget"></a> GameWidget

```csharp
protected UUserWidget? GameWidget
```

#### Field Value

 UUserWidget?

## Methods

### <a id="WukongMp_Api_UI_GameWidgetBase_Deinitialize"></a> Deinitialize\(\)

```csharp
public void Deinitialize()
```

### <a id="WukongMp_Api_UI_GameWidgetBase_Initialize"></a> Initialize\(\)

```csharp
public void Initialize()
```

### <a id="WukongMp_Api_UI_GameWidgetBase_PostInitialize"></a> PostInitialize\(\)

```csharp
protected abstract void PostInitialize()
```

### <a id="WukongMp_Api_UI_GameWidgetBase_SetVisibility_System_Boolean_"></a> SetVisibility\(bool\)

```csharp
public virtual void SetVisibility(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


