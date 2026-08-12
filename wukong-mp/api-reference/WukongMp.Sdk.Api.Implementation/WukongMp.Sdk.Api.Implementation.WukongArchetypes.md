# Class WukongArchetypes

Namespace: [WukongMp.Sdk.Api.Implementation](../WukongMp.Api.WukongUtils/WukongMp.Sdk.Api.Implementation.md)  
Assembly: WukongMp.Sdk.dll  

Provides references for core entity archetypes in WukongMP.

```csharp
public class WukongArchetypes
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[WukongArchetypes](../WukongMp.Sdk.Api.Implementation/WukongMp.Sdk.Api.Implementation.WukongArchetypes.md)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.MemberwiseClone\(\)](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="WukongMp_Sdk_Api_Implementation_WukongArchetypes__ctor"></a> WukongArchetypes\(\)

```csharp
public WukongArchetypes()
```

## Properties

### <a id="WukongMp_Sdk_Api_Implementation_WukongArchetypes_AreaArchetype"></a> AreaArchetype

```csharp
public ArchetypeId AreaArchetype { get; }
```

#### Property Value

 [ArchetypeId](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/ReadyM.Api/Idents/ArchetypeId.cs)

### <a id="WukongMp_Sdk_Api_Implementation_WukongArchetypes_GlobalPlayerArchetype"></a> GlobalPlayerArchetype

Global player entity archetype.
Components:<br />
* **PlayerScopeComponent**<br />
* **PlayerComponent**

```csharp
public ArchetypeId GlobalPlayerArchetype { get; }
```

#### Property Value

 [ArchetypeId](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/ReadyM.Api/Idents/ArchetypeId.cs)

### <a id="WukongMp_Sdk_Api_Implementation_WukongArchetypes_MainCharacterArchetype"></a> MainCharacterArchetype

Area-scoped main character entity archetype.
Components:<br />
* **MainCharacterComponent**<br />
* **TransformComponent**<br />
* **HpComponent**<br />
* **NicknameComponent**<br />
* **TeamComponent**<br />
* **PvPComponent**<br />

```csharp
public ArchetypeId MainCharacterArchetype { get; }
```

#### Property Value

 [ArchetypeId](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/ReadyM.Api/Idents/ArchetypeId.cs)

### <a id="WukongMp_Sdk_Api_Implementation_WukongArchetypes_PvpStateArchetype"></a> PvpStateArchetype

Global PvP state entity archetype. Used by the PvP mod.
Components:<br />
* **PvpStateComponent**

```csharp
[Obsolete("Will be moved to the PvP mod in future refactoring.")]
public ArchetypeId PvpStateArchetype { get; }
```

#### Property Value

 [ArchetypeId](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/ReadyM.Api/Idents/ArchetypeId.cs)

### <a id="WukongMp_Sdk_Api_Implementation_WukongArchetypes_TamerArchetype"></a> TamerArchetype

Area-scoped tamer entity archetype.
Components:<br />
* **TamerComponent**<br />
* **TransformComponent**<br />
* **HpComponent**<br />
* **NicknameComponent**<br />
* **TeamComponent**<br />
* **AnimationComponent**<br />
* **MonsterAnimationComponent**

```csharp
public ArchetypeId TamerArchetype { get; }
```

#### Property Value

 [ArchetypeId](https://github.com/readycodeio/readym\-gameserver/blob/4a84cd6e2f2a01df3ad669f6632cd6c40d70e910/src/ReadyM.Api/Idents/ArchetypeId.cs)


