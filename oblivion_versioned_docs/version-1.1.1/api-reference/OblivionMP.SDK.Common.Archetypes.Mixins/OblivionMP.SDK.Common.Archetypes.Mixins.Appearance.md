---
title: 'Struct Appearance'
description: 'How a player''s character looks: sex, race, face and hair.'
---
# Struct Appearance

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

How a player's character looks: sex, race, face and hair.

```csharp
[ArchetypeMixin(Replication.OwnershipBased)]
public readonly struct Appearance : IArchetypeMixin, IArchetypeQueryable, IEntityShape
```

#### Implements

IArchetypeMixin, 
IArchetypeQueryable, 
IEntityShape

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_BeardPath"></a> BeardPath

The asset path of the beard.

```csharp
public NativeString256 BeardPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_BoneScalingCount"></a> BoneScalingCount

```csharp
public int BoneScalingCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_CustomisationBeardIndex"></a> CustomisationBeardIndex

Which beard option is picked in the character creator.

```csharp
public int CustomisationBeardIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_CustomisationEyeMaterialIndex"></a> CustomisationEyeMaterialIndex

Which eye option is picked in the character creator.

```csharp
public int CustomisationEyeMaterialIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_CustomisationEyebrowsIndex"></a> CustomisationEyebrowsIndex

Which eyebrows option is picked in the character creator.

```csharp
public int CustomisationEyebrowsIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_CustomisationHairIndex"></a> CustomisationHairIndex

Which hair option is picked in the character creator.

```csharp
public int CustomisationHairIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_CustomisationMustacheIndex"></a> CustomisationMustacheIndex

Which mustache option is picked in the character creator.

```csharp
public int CustomisationMustacheIndex { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_EyeMaterialPath"></a> EyeMaterialPath

The asset path of the eye material.

```csharp
public NativeString256 EyeMaterialPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_EyebrowsPath"></a> EyebrowsPath

The asset path of the eyebrows.

```csharp
public NativeString256 EyebrowsPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_FaceBaseMeshPath"></a> FaceBaseMeshPath

The asset path of the base face mesh.

```csharp
public NativeString256 FaceBaseMeshPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_FaceMatOverrideCount"></a> FaceMatOverrideCount

```csharp
public int FaceMatOverrideCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_FaceMorphCount"></a> FaceMorphCount

```csharp
public int FaceMorphCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_FaceMorphsSourcePath"></a> FaceMorphsSourcePath

The asset path of the face morphs source.

```csharp
public NativeString256 FaceMorphsSourcePath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_HairPath"></a> HairPath

The asset path of the hair.

```csharp
public NativeString256 HairPath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_MustachePath"></a> MustachePath

The asset path of the mustache.

```csharp
public NativeString256 MustachePath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_RacePath"></a> RacePath

The asset path of the character's race.

```csharp
public NativeString256 RacePath { get; set; }
```

#### Property Value

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SenescenceLevel"></a> SenescenceLevel

The age level of the character's face.

```csharp
public int SenescenceLevel { get; set; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_Sex"></a> Sex

The character's sex.

```csharp
public CharacterSex Sex { get; set; }
```

#### Property Value

 CharacterSex

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SkinColorCount"></a> SkinColorCount

```csharp
public int SkinColorCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SkinParamCount"></a> SkinParamCount

```csharp
public int SkinParamCount { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SkinParameterDefinitionsPath"></a> SkinParameterDefinitionsPath

The asset path of the skin parameter definitions.

```csharp
public NativeString256 SkinParameterDefinitionsPath { get; set; }
```

#### Property Value

 NativeString256

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_AddBoneScaling_ReadyM_Native_Container_NativeString256__System_Single__"></a> AddBoneScaling\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public bool AddBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_AddFaceMatOverride_ReadyM_Native_Container_NativeString256__ReadyM_Native_Container_NativeString256__"></a> AddFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public bool AddFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_AddFaceMorph_ReadyM_Native_Container_NativeString256__System_Single__"></a> AddFaceMorph\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public bool AddFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_AddSkinColor_ReadyM_Native_Container_NativeString256__System_Numerics_Vector4__"></a> AddSkinColor\(in NativeString256, in Vector4\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public bool AddSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_AddSkinParam_ReadyM_Native_Container_NativeString256__System_Single__"></a> AddSkinParam\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public bool AddSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ClearBoneScaling"></a> ClearBoneScaling\(\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public void ClearBoneScaling()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ClearFaceMatOverride"></a> ClearFaceMatOverride\(\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public void ClearFaceMatOverride()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ClearFaceMorph"></a> ClearFaceMorph\(\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public void ClearFaceMorph()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ClearSkinColor"></a> ClearSkinColor\(\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public void ClearSkinColor()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ClearSkinParam"></a> ClearSkinParam\(\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public void ClearSkinParam()
```

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsBoneScaling_ReadyM_Native_Container_NativeString256__System_Single__"></a> ContainsBoneScaling\(in NativeString256, in float\)

```csharp
public bool ContainsBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsBoneScalingKey_ReadyM_Native_Container_NativeString256__"></a> ContainsBoneScalingKey\(in NativeString256\)

```csharp
public bool ContainsBoneScalingKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsFaceMatOverride_ReadyM_Native_Container_NativeString256__ReadyM_Native_Container_NativeString256__"></a> ContainsFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
public bool ContainsFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsFaceMatOverrideKey_ReadyM_Native_Container_NativeString256__"></a> ContainsFaceMatOverrideKey\(in NativeString256\)

```csharp
public bool ContainsFaceMatOverrideKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsFaceMorph_ReadyM_Native_Container_NativeString256__System_Single__"></a> ContainsFaceMorph\(in NativeString256, in float\)

```csharp
public bool ContainsFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsFaceMorphKey_ReadyM_Native_Container_NativeString256__"></a> ContainsFaceMorphKey\(in NativeString256\)

```csharp
public bool ContainsFaceMorphKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsSkinColor_ReadyM_Native_Container_NativeString256__System_Numerics_Vector4__"></a> ContainsSkinColor\(in NativeString256, in Vector4\)

```csharp
public bool ContainsSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsSkinColorKey_ReadyM_Native_Container_NativeString256__"></a> ContainsSkinColorKey\(in NativeString256\)

```csharp
public bool ContainsSkinColorKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsSkinParam_ReadyM_Native_Container_NativeString256__System_Single__"></a> ContainsSkinParam\(in NativeString256, in float\)

```csharp
public bool ContainsSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_ContainsSkinParamKey_ReadyM_Native_Container_NativeString256__"></a> ContainsSkinParamKey\(in NativeString256\)

```csharp
public bool ContainsSkinParamKey(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetBoneScaling"></a> GetBoneScaling\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetBoneScaling()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetBoneScaling_ReadyM_Native_Container_NativeString256__"></a> GetBoneScaling\(in NativeString256\)

```csharp
public float GetBoneScaling(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetFaceMatOverride"></a> GetFaceMatOverride\(\)

```csharp
public NativeDictionary<NativeString256, NativeString256, NativeStringHash256>.ReadOnly GetFaceMatOverride()
```

#### Returns

 NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetFaceMatOverride_ReadyM_Native_Container_NativeString256__"></a> GetFaceMatOverride\(in NativeString256\)

```csharp
public NativeString256 GetFaceMatOverride(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetFaceMorph"></a> GetFaceMorph\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetFaceMorph()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetFaceMorph_ReadyM_Native_Container_NativeString256__"></a> GetFaceMorph\(in NativeString256\)

```csharp
public float GetFaceMorph(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetSkinColor"></a> GetSkinColor\(\)

```csharp
public NativeDictionary<NativeString256, Vector4, NativeStringHash256>.ReadOnly GetSkinColor()
```

#### Returns

 NativeDictionary<NativeString256, [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), NativeStringHash256\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetSkinColor_ReadyM_Native_Container_NativeString256__"></a> GetSkinColor\(in NativeString256\)

```csharp
public Vector4 GetSkinColor(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetSkinParam"></a> GetSkinParam\(\)

```csharp
public NativeDictionary<NativeString256, float, NativeStringHash256>.ReadOnly GetSkinParam()
```

#### Returns

 NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>.ReadOnly

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_GetSkinParam_ReadyM_Native_Container_NativeString256__"></a> GetSkinParam\(in NativeString256\)

```csharp
public float GetSkinParam(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public Appearance Keep()
```

#### Returns

 [Appearance](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Appearance.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_RemoveBoneScaling_ReadyM_Native_Container_NativeString256__"></a> RemoveBoneScaling\(in NativeString256\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public bool RemoveBoneScaling(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_RemoveFaceMatOverride_ReadyM_Native_Container_NativeString256__"></a> RemoveFaceMatOverride\(in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public bool RemoveFaceMatOverride(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_RemoveFaceMorph_ReadyM_Native_Container_NativeString256__"></a> RemoveFaceMorph\(in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public bool RemoveFaceMorph(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_RemoveSkinColor_ReadyM_Native_Container_NativeString256__"></a> RemoveSkinColor\(in NativeString256\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public bool RemoveSkinColor(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_RemoveSkinParam_ReadyM_Native_Container_NativeString256__"></a> RemoveSkinParam\(in NativeString256\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public bool RemoveSkinParam(in NativeString256 key)
```

#### Parameters

`key` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetBoneScaling_ReadyM_Native_Container_NativeDictionary_ReadyM_Native_Container_NativeString256_System_Single_ReadyM_Native_Container_NativeStringHash256___"></a> SetBoneScaling\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public void SetBoneScaling(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetBoneScaling_ReadyM_Native_Container_NativeString256__System_Single__"></a> SetBoneScaling\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.BoneScaling")]
public void SetBoneScaling(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetFaceMatOverride_ReadyM_Native_Container_NativeDictionary_ReadyM_Native_Container_NativeString256_ReadyM_Native_Container_NativeString256_ReadyM_Native_Container_NativeStringHash256___"></a> SetFaceMatOverride\(in NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public void SetFaceMatOverride(in NativeDictionary<NativeString256, NativeString256, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, NativeString256, NativeStringHash256\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetFaceMatOverride_ReadyM_Native_Container_NativeString256__ReadyM_Native_Container_NativeString256__"></a> SetFaceMatOverride\(in NativeString256, in NativeString256\)

```csharp
[Changes("Appearance.Field.FaceMatOverride")]
public void SetFaceMatOverride(in NativeString256 key, in NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetFaceMorph_ReadyM_Native_Container_NativeDictionary_ReadyM_Native_Container_NativeString256_System_Single_ReadyM_Native_Container_NativeStringHash256___"></a> SetFaceMorph\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public void SetFaceMorph(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetFaceMorph_ReadyM_Native_Container_NativeString256__System_Single__"></a> SetFaceMorph\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.FaceMorph")]
public void SetFaceMorph(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetSkinColor_ReadyM_Native_Container_NativeDictionary_ReadyM_Native_Container_NativeString256_System_Numerics_Vector4_ReadyM_Native_Container_NativeStringHash256___"></a> SetSkinColor\(in NativeDictionary<NativeString256, Vector4, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public void SetSkinColor(in NativeDictionary<NativeString256, Vector4, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4), NativeStringHash256\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetSkinColor_ReadyM_Native_Container_NativeString256__System_Numerics_Vector4__"></a> SetSkinColor\(in NativeString256, in Vector4\)

```csharp
[Changes("Appearance.Field.SkinColor")]
public void SetSkinColor(in NativeString256 key, in Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetSkinParam_ReadyM_Native_Container_NativeDictionary_ReadyM_Native_Container_NativeString256_System_Single_ReadyM_Native_Container_NativeStringHash256___"></a> SetSkinParam\(in NativeDictionary<NativeString256, float, NativeStringHash256\>\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public void SetSkinParam(in NativeDictionary<NativeString256, float, NativeStringHash256> value)
```

#### Parameters

`value` NativeDictionary<NativeString256, [float](https://learn.microsoft.com/dotnet/api/system.single), NativeStringHash256\>

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_SetSkinParam_ReadyM_Native_Container_NativeString256__System_Single__"></a> SetSkinParam\(in NativeString256, in float\)

```csharp
[Changes("Appearance.Field.SkinParam")]
public void SetSkinParam(in NativeString256 key, in float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_TryGetBoneScalingValue_ReadyM_Native_Container_NativeString256__System_Single__"></a> TryGetBoneScalingValue\(in NativeString256, out float\)

```csharp
public bool TryGetBoneScalingValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_TryGetFaceMatOverrideValue_ReadyM_Native_Container_NativeString256__ReadyM_Native_Container_NativeString256__"></a> TryGetFaceMatOverrideValue\(in NativeString256, out NativeString256\)

```csharp
public bool TryGetFaceMatOverrideValue(in NativeString256 key, out NativeString256 value)
```

#### Parameters

`key` NativeString256

`value` NativeString256

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_TryGetFaceMorphValue_ReadyM_Native_Container_NativeString256__System_Single__"></a> TryGetFaceMorphValue\(in NativeString256, out float\)

```csharp
public bool TryGetFaceMorphValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_TryGetSkinColorValue_ReadyM_Native_Container_NativeString256__System_Numerics_Vector4__"></a> TryGetSkinColorValue\(in NativeString256, out Vector4\)

```csharp
public bool TryGetSkinColorValue(in NativeString256 key, out Vector4 value)
```

#### Parameters

`key` NativeString256

`value` [Vector4](https://learn.microsoft.com/dotnet/api/system.numerics.vector4)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_Appearance_TryGetSkinParamValue_ReadyM_Native_Container_NativeString256__System_Single__"></a> TryGetSkinParamValue\(in NativeString256, out float\)

```csharp
public bool TryGetSkinParamValue(in NativeString256 key, out float value)
```

#### Parameters

`key` NativeString256

`value` [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


