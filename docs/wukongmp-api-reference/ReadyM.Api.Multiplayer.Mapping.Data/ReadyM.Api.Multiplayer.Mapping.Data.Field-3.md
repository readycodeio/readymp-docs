#  Struct Field<TComponent, TValue, TContext>

Namespace: [ReadyM.Api.Multiplayer.Mapping.Data](ReadyM.Api.Multiplayer.Mapping.Data.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

```csharp
public readonly struct Field<TComponent, TValue, TContext> where TComponent : struct
```

#### Type Parameters

`TComponent` 

`TValue` 

`TContext` 

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Constructors

### <a id="ReadyM_Api_Multiplayer_Mapping_Data_Field_3__ctor_System_Int32_System_Func__0__1__ReadyM_Api_Multiplayer_Mapping_Data_FieldSetterDelegate__0__1__System_Func__0_System_Boolean__"></a> Field\(int, Func<TComponent, TValue\>, FieldSetterDelegate<TComponent, TValue\>, Func<TComponent, bool\>\)

```csharp
public Field(int id, Func<TComponent, TValue> get, FieldSetterDelegate<TComponent, TValue> set, Func<TComponent, bool> wasSetFromApi)
```

#### Parameters

`id` [int](https://learn.microsoft.com/dotnet/api/system.int32)

`get` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TComponent, TValue\>

`set` [FieldSetterDelegate](ReadyM.Api.Multiplayer.Mapping.Data.FieldSetterDelegate\-2.md)<TComponent, TValue\>

`wasSetFromApi` [Func](https://learn.microsoft.com/dotnet/api/system.func\-2)<TComponent, [bool](https://learn.microsoft.com/dotnet/api/system.boolean)\>

## Operators

### <a id="ReadyM_Api_Multiplayer_Mapping_Data_Field_3_op_Implicit_ReadyM_Api_Multiplayer_Mapping_Data_Field__0__1__2___System_Int32"></a> implicit operator int\(Field<TComponent, TValue, TContext\>\)

```csharp
public static implicit operator int(Field<TComponent, TValue, TContext> field)
```

#### Parameters

`field` [Field](ReadyM.Api.Multiplayer.Mapping.Data.Field\-3.md)<TComponent, TValue, TContext\>

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

