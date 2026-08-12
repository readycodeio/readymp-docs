# Class GameWidgetBase

Namespace: [WukongMp.Api.UI](../WukongMp.Api.UI/WukongMp.Api.UI.md)  
Assembly: WukongMp.Api.dll  

Base class for UI widgets defined in .pak files.

```csharp
public abstract class GameWidgetBase
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[GameWidgetBase](../WukongMp.Api.UI/WukongMp.Api.UI.GameWidgetBase.md)

#### Derived

[CountdownWidget](../WukongMp.Api.UI/WukongMp.Api.UI.CountdownWidget.md), 
[GameMessageWidget](../WukongMp.Api.UI/WukongMp.Api.UI.GameMessageWidget.md)

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

Base class for UI widgets defined in .pak files.

```csharp
protected GameWidgetBase(string path)
```

#### Parameters

`path` [string](https://learn.microsoft.com/dotnet/api/system.string)

The path to the widget, relative to the "Content/UI" folder in the .pak files. For example, for a widget located at "Content/UI/MyWidget.uasset", the path would be "MyWidget".

## Fields

### <a id="WukongMp_Api_UI_GameWidgetBase_GameWidget"></a> GameWidget

```csharp
protected UUserWidget? GameWidget
```

#### Field Value

 UUserWidget?

## Methods

### <a id="WukongMp_Api_UI_GameWidgetBase_Deinitialize"></a> Deinitialize\(\)

Removes the widget from the viewport and sets the reference to null.

```csharp
public void Deinitialize()
```

### <a id="WukongMp_Api_UI_GameWidgetBase_Initialize"></a> Initialize\(\)

Initializes the widget by trying to find it first, and if it doesn't exist, spawns a new one.

```csharp
public void Initialize()
```

### <a id="WukongMp_Api_UI_GameWidgetBase_PostInitialize"></a> PostInitialize\(\)

```csharp
protected abstract void PostInitialize()
```

### <a id="WukongMp_Api_UI_GameWidgetBase_SetVisibility_System_Boolean_"></a> SetVisibility\(bool\)

Set the visibility of the widget.
This requires the widget to be initialized first, otherwise it will do nothing.

```csharp
public virtual void SetVisibility(bool visible)
```

#### Parameters

`visible` [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

Whether the widget should be visible or not.


