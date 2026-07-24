# Struct AppearanceComponent

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

Holds the player character's appearance settings.

```csharp
public struct AppearanceComponent : ISaveTaggedComponent<AppearanceComponent>, IComponent, INetSerializable, IDisposable
```

#### Implements

[ISaveTaggedComponent<AppearanceComponent\>](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.ISaveTaggedComponent-1.md), 
[IComponent](https://github.com/readycodeio/Friflo.Engine.ECS/blob/1a45e3364ed58ecef9294b4024b79ec07ece0732/src/ECS/IComponent.cs), 
[INetSerializable](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/INetSerializable.cs), 
[IDisposable](https://learn.microsoft.com/dotnet/api/system.idisposable)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent__ctor_Yooni_Native_LowLevel_AllocatorKind_"></a> AppearanceComponent\(AllocatorKind\)

Holds the player character's appearance settings.

```csharp
public AppearanceComponent(AllocatorKind allocatorKind)
```

#### Parameters

`allocatorKind` [AllocatorKind](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/LowLevel/AllocatorKind.cs)

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_BeardPath"></a> BeardPath

```csharp
public NativeString256 BeardPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_BoneScalingCount"></a> BoneScalingCount

```csharp
public int BoneScalingCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_CustomisationBeardIndex"></a> CustomisationBeardIndex

```csharp
public int CustomisationBeardIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_CustomisationEyeMaterialIndex"></a> CustomisationEyeMaterialIndex

```csharp
public int CustomisationEyeMaterialIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_CustomisationEyebrowsIndex"></a> CustomisationEyebrowsIndex

```csharp
public int CustomisationEyebrowsIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_CustomisationHairIndex"></a> CustomisationHairIndex

```csharp
public int CustomisationHairIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_CustomisationMustacheIndex"></a> CustomisationMustacheIndex

```csharp
public int CustomisationMustacheIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_EyeMaterialPath"></a> EyeMaterialPath

```csharp
public NativeString256 EyeMaterialPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_EyebrowsPath"></a> EyebrowsPath

```csharp
public NativeString256 EyebrowsPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_FaceBaseMeshPath"></a> FaceBaseMeshPath

```csharp
public NativeString256 FaceBaseMeshPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_FaceMatOverrideCount"></a> FaceMatOverrideCount

```csharp
public int FaceMatOverrideCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_FaceMorphCount"></a> FaceMorphCount

```csharp
public int FaceMorphCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_FaceMorphsSourcePath"></a> FaceMorphsSourcePath

```csharp
public NativeString256 FaceMorphsSourcePath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_HairColorCount"></a> HairColorCount

```csharp
public int HairColorCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_HairPath"></a> HairPath

```csharp
public NativeString256 HairPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_MustachePath"></a> MustachePath

```csharp
public NativeString256 MustachePath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RacePath"></a> RacePath

```csharp
public NativeString256 RacePath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SenescenceLevel"></a> SenescenceLevel

```csharp
public int SenescenceLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_Sex"></a> Sex

```csharp
public CharacterSex Sex { get; set; }
```

#### Property Value

 [CharacterSex](../ReadyM.Relay.Common.Oblivion.ECS.Values/ReadyM.Relay.Common.Oblivion.ECS.Values.CharacterSex.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SkinColorCount"></a> SkinColorCount

```csharp
public int SkinColorCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SkinParamCount"></a> SkinParamCount

```csharp
public int SkinParamCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SkinParameterDefinitionsPath"></a> SkinParameterDefinitionsPath

```csharp
public NativeString256 SkinParameterDefinitionsPath { get; set; }
```

#### Property Value

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

## Methods

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_AddBoneScaling_Yooni_Native_Container_NativeString256__System_Single__"></a> AddBoneScaling\(in NativeString256, in float\)

```csharp
public bool AddBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_AddFaceMatOverride_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> AddFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
public bool AddFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_AddFaceMorph_Yooni_Native_Container_NativeString256__System_Single__"></a> AddFaceMorph\(in NativeString256, in float\)

```csharp
public bool AddFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_AddHairColor_System_Byte__System_Numerics_Vector4__"></a> AddHairColor\(in byte, in Vector4\)

```csharp
public bool AddHairColor(in byte key, in Vector4 value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_AddSkinColor_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> AddSkinColor\(in NativeString256, in Vector4\)

```csharp
public bool AddSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_AddSkinParam_Yooni_Native_Container_NativeString256__System_Single__"></a> AddSkinParam\(in NativeString256, in float\)

```csharp
public bool AddSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_Assign_ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent__"></a> Assign\(in AppearanceComponent\)

```csharp
public void Assign(in AppearanceComponent value)
```

#### Parameters

`value` [AppearanceComponent](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.AppearanceComponent.md)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_BoneScaling_SetFromApi_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256__"></a> BoneScaling\_SetFromApi\(NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void BoneScaling_SetFromApi(NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ClearBoneScaling"></a> ClearBoneScaling\(\)

```csharp
public void ClearBoneScaling()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ClearFaceMatOverride"></a> ClearFaceMatOverride\(\)

```csharp
public void ClearFaceMatOverride()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ClearFaceMorph"></a> ClearFaceMorph\(\)

```csharp
public void ClearFaceMorph()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ClearHairColor"></a> ClearHairColor\(\)

```csharp
public void ClearHairColor()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ClearSkinColor"></a> ClearSkinColor\(\)

```csharp
public void ClearSkinColor()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ClearSkinParam"></a> ClearSkinParam\(\)

```csharp
public void ClearSkinParam()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsBoneScaling_Yooni_Native_Container_NativeString256__System_Single__"></a> ContainsBoneScaling\(in NativeString256, in float\)

```csharp
public bool ContainsBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsBoneScalingKey_Yooni_Native_Container_NativeString256__"></a> ContainsBoneScalingKey\(in NativeString256\)

```csharp
public bool ContainsBoneScalingKey(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsFaceMatOverride_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> ContainsFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
public bool ContainsFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsFaceMatOverrideKey_Yooni_Native_Container_NativeString256__"></a> ContainsFaceMatOverrideKey\(in NativeString256\)

```csharp
public bool ContainsFaceMatOverrideKey(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsFaceMorph_Yooni_Native_Container_NativeString256__System_Single__"></a> ContainsFaceMorph\(in NativeString256, in float\)

```csharp
public bool ContainsFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsFaceMorphKey_Yooni_Native_Container_NativeString256__"></a> ContainsFaceMorphKey\(in NativeString256\)

```csharp
public bool ContainsFaceMorphKey(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsHairColor_System_Byte__System_Numerics_Vector4__"></a> ContainsHairColor\(in byte, in Vector4\)

```csharp
public bool ContainsHairColor(in byte key, in Vector4 value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsHairColorKey_System_Byte__"></a> ContainsHairColorKey\(in byte\)

```csharp
public bool ContainsHairColorKey(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsSkinColor_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> ContainsSkinColor\(in NativeString256, in Vector4\)

```csharp
public bool ContainsSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsSkinColorKey_Yooni_Native_Container_NativeString256__"></a> ContainsSkinColorKey\(in NativeString256\)

```csharp
public bool ContainsSkinColorKey(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsSkinParam_Yooni_Native_Container_NativeString256__System_Single__"></a> ContainsSkinParam\(in NativeString256, in float\)

```csharp
public bool ContainsSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_ContainsSkinParamKey_Yooni_Native_Container_NativeString256__"></a> ContainsSkinParamKey\(in NativeString256\)

```csharp
public bool ContainsSkinParamKey(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_Deserialize_LiteNetLib_Utils_NetDataReader_"></a> Deserialize\(NetDataReader\)

```csharp
public void Deserialize(NetDataReader reader)
```

#### Parameters

`reader` [NetDataReader](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataReader.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_Dispose"></a> Dispose\(\)

```csharp
public void Dispose()
```

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_FaceMatOverride_SetFromApi_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_Yooni_Native_Container_NativeString256_Yooni_Native_Container_NativeStringHash256__"></a> FaceMatOverride\_SetFromApi\(NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>\)

```csharp
public void FaceMatOverride_SetFromApi(NativeDictionary<NativeString256, NativeString256, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_FaceMorph_SetFromApi_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256__"></a> FaceMorph\_SetFromApi\(NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void FaceMorph_SetFromApi(NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetBoneScaling"></a> GetBoneScaling\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetBoneScaling()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetBoneScaling_Yooni_Native_Container_NativeString256__"></a> GetBoneScaling\(in NativeString256\)

```csharp
public float GetBoneScaling(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetFaceMatOverride"></a> GetFaceMatOverride\(\)

```csharp
public NativeDictionary<NativeString256, NativeString256, NativeStringHash256>.ReadOnly GetFaceMatOverride()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetFaceMatOverride_Yooni_Native_Container_NativeString256__"></a> GetFaceMatOverride\(in NativeString256\)

```csharp
public NativeString256 GetFaceMatOverride(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetFaceMorph"></a> GetFaceMorph\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetFaceMorph()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetFaceMorph_Yooni_Native_Container_NativeString256__"></a> GetFaceMorph\(in NativeString256\)

```csharp
public float GetFaceMorph(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetHairColor"></a> GetHairColor\(\)

```csharp
public NativeDictionary<byte, Vector4, ByteHash>.ReadOnly GetHairColor()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), [ByteHash](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/ByteHash.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetHairColor_System_Byte__"></a> GetHairColor\(in byte\)

```csharp
public Vector4 GetHairColor(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetSkinColor"></a> GetSkinColor\(\)

```csharp
public NativeDictionary<NativeString256, Vector4, NativeStringHash256>.ReadOnly GetSkinColor()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetSkinColor_Yooni_Native_Container_NativeString256__"></a> GetSkinColor\(in NativeString256\)

```csharp
public Vector4 GetSkinColor(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetSkinParam"></a> GetSkinParam\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetSkinParam()
```

#### Returns

 [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>.[ReadOnly](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_GetSkinParam_Yooni_Native_Container_NativeString256__"></a> GetSkinParam\(in NativeString256\)

```csharp
public float GetSkinParam(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_HairColor_SetFromApi_Yooni_Native_Container_NativeDictionary_System_Byte_System_Numerics_Vector4_Yooni_Native_Container_ByteHash__"></a> HairColor\_SetFromApi\(NativeDictionary<byte, Vector4, ByteHash\>\)

```csharp
public void HairColor_SetFromApi(NativeDictionary<byte, Vector4, ByteHash> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), [ByteHash](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/ByteHash.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RemoveBoneScaling_Yooni_Native_Container_NativeString256__"></a> RemoveBoneScaling\(in NativeString256\)

```csharp
public bool RemoveBoneScaling(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RemoveFaceMatOverride_Yooni_Native_Container_NativeString256__"></a> RemoveFaceMatOverride\(in NativeString256\)

```csharp
public bool RemoveFaceMatOverride(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RemoveFaceMorph_Yooni_Native_Container_NativeString256__"></a> RemoveFaceMorph\(in NativeString256\)

```csharp
public bool RemoveFaceMorph(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RemoveHairColor_System_Byte__"></a> RemoveHairColor\(in byte\)

```csharp
public bool RemoveHairColor(in byte key)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RemoveSkinColor_Yooni_Native_Container_NativeString256__"></a> RemoveSkinColor\(in NativeString256\)

```csharp
public bool RemoveSkinColor(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_RemoveSkinParam_Yooni_Native_Container_NativeString256__"></a> RemoveSkinParam\(in NativeString256\)

```csharp
public bool RemoveSkinParam(in NativeString256 key)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_Serialize_LiteNetLib_Utils_NetDataWriter_"></a> Serialize\(NetDataWriter\)

```csharp
public void Serialize(NetDataWriter writer)
```

#### Parameters

`writer` [NetDataWriter](https://github.com/RevenantX/LiteNetLib/blob/dae6127eaf635e07d9ccfa8b3ecebb2f79094630/LiteNetLib/Utils/NetDataWriter.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetBoneScaling_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> SetBoneScaling\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void SetBoneScaling(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetBoneScaling_Yooni_Native_Container_NativeString256__System_Single__"></a> SetBoneScaling\(in NativeString256, in float\)

```csharp
public void SetBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetFaceMatOverride_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_Yooni_Native_Container_NativeString256_Yooni_Native_Container_NativeStringHash256___"></a> SetFaceMatOverride\(in NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>\)

```csharp
public void SetFaceMatOverride(in NativeDictionary<NativeString256, NativeString256, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetFaceMatOverride_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> SetFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
public void SetFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetFaceMorph_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> SetFaceMorph\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void SetFaceMorph(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetFaceMorph_Yooni_Native_Container_NativeString256__System_Single__"></a> SetFaceMorph\(in NativeString256, in float\)

```csharp
public void SetFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetHairColor_Yooni_Native_Container_NativeDictionary_System_Byte_System_Numerics_Vector4_Yooni_Native_Container_ByteHash___"></a> SetHairColor\(in NativeDictionary<byte, Vector4, ByteHash\>\)

```csharp
public void SetHairColor(in NativeDictionary<byte, Vector4, ByteHash> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[byte](https://learn.microsoft.com/dotnet/api/system.byte), [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), [ByteHash](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/ByteHash.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetHairColor_System_Byte__System_Numerics_Vector4__"></a> SetHairColor\(in byte, in Vector4\)

```csharp
public void SetHairColor(in byte key, in Vector4 value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetSkinColor_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Numerics_Vector4_Yooni_Native_Container_NativeStringHash256___"></a> SetSkinColor\(in NativeDictionary<NativeString256, Vector4, NativeStringHash256\>\)

```csharp
public void SetSkinColor(in NativeDictionary<NativeString256, Vector4, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetSkinColor_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> SetSkinColor\(in NativeString256, in Vector4\)

```csharp
public void SetSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetSkinParam_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256___"></a> SetSkinParam\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void SetSkinParam(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SetSkinParam_Yooni_Native_Container_NativeString256__System_Single__"></a> SetSkinParam\(in NativeString256, in float\)

```csharp
public void SetSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SkinColor_SetFromApi_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Numerics_Vector4_Yooni_Native_Container_NativeStringHash256__"></a> SkinColor\_SetFromApi\(NativeDictionary<NativeString256, Vector4, NativeStringHash256\>\)

```csharp
public void SkinColor_SetFromApi(NativeDictionary<NativeString256, Vector4, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_SkinParam_SetFromApi_Yooni_Native_Container_NativeDictionary_Yooni_Native_Container_NativeString256_System_Single_Yooni_Native_Container_NativeStringHash256__"></a> SkinParam\_SetFromApi\(NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
public void SkinParam_SetFromApi(NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` [NativeDictionary](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeDictionary.cs)<[NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs), [float](https://learn.microsoft.com/dotnet/api/system.single), [NativeStringHash256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeStringHash256.cs)\>

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_TryGetBoneScalingValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetBoneScalingValue\(in NativeString256, out float\)

```csharp
public bool TryGetBoneScalingValue(in NativeString256 key, out float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_TryGetFaceMatOverrideValue_Yooni_Native_Container_NativeString256__Yooni_Native_Container_NativeString256__"></a> TryGetFaceMatOverrideValue\(in NativeString256, out NativeString256\)

```csharp
public bool TryGetFaceMatOverrideValue(in NativeString256 key, out NativeString256 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_TryGetFaceMorphValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetFaceMorphValue\(in NativeString256, out float\)

```csharp
public bool TryGetFaceMorphValue(in NativeString256 key, out float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_TryGetHairColorValue_System_Byte__System_Numerics_Vector4__"></a> TryGetHairColorValue\(in byte, out Vector4\)

```csharp
public bool TryGetHairColorValue(in byte key, out Vector4 value)
```

#### Parameters

`key` [byte](https://learn.microsoft.com/dotnet/api/system.byte)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_TryGetSkinColorValue_Yooni_Native_Container_NativeString256__System_Numerics_Vector4__"></a> TryGetSkinColorValue\(in NativeString256, out Vector4\)

```csharp
public bool TryGetSkinColorValue(in NativeString256 key, out Vector4 value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_AppearanceComponent_TryGetSkinParamValue_Yooni_Native_Container_NativeString256__System_Single__"></a> TryGetSkinParamValue\(in NativeString256, out float\)

```csharp
public bool TryGetSkinParamValue(in NativeString256 key, out float value)
```

#### Parameters

`key` [NativeString256](https://github.com/readycodeio/readym\-gameserver/blob/aaec9134f84b641c99520265ff1437f2c790d1d9/src/YooniCSharp/Native/Container/NativeString256.cs)

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


