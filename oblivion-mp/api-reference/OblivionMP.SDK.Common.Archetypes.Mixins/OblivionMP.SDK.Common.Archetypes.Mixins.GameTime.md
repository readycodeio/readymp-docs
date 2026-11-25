---
title: 'Struct GameTime'
description: 'The global world time.'
---
# Struct GameTime

Namespace: [OblivionMP.SDK.Common.Archetypes.Mixins](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.md)  
Assembly: OblivionMP.SDK.Common.dll  

The global world time.

```csharp
[ArchetypeMixin(Replication.ServerAuthoritative)]
[Extends(typeof(World), "")]
public readonly struct GameTime : IArchetypeMixin, IArchetypeQueryable, IEntityShape
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

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_Date"></a> Date

Today's date on the Tamrielic calendar.

```csharp
public TamrielicDate Date { get; }
```

#### Property Value

 [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_GameDay"></a> GameDay

The days passed since the game started.

```csharp
public uint GameDay { get; set; }
```

#### Property Value

 [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_TimeOfDay"></a> TimeOfDay

The current time of day.

```csharp
public TimeSpan TimeOfDay { get; }
```

#### Property Value

 [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_TimeOfDayMinutes"></a> TimeOfDayMinutes

The total minutes passed since start of day, 0 to 1440.

```csharp
public float TimeOfDayMinutes { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_Timescale"></a> Timescale

How fast game time runs compared to real time.

```csharp
public float Timescale { get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

#### Remarks

Defaults to 30, with 1 in-game minute lasting 2 seconds of real time.

## Methods

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_Advance_System_TimeSpan_"></a> Advance\(TimeSpan\)

Moves the clock forward, carrying whole days into **GameDay**.

```csharp
public void Advance(TimeSpan duration)
```

#### Parameters

`duration` [TimeSpan](https://learn.microsoft.com/dotnet/api/system.timespan)

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

<code class="paramref">duration</code> is negative.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_As__1"></a> As<T\>\(\)

```csharp
public T As<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 T

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_Is__1"></a> Is<T\>\(\)

```csharp
public bool Is<T>() where T : struct, IArchetypeQueryable
```

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_Keep"></a> Keep\(\)

This entity, which it already is: a loop over this shape hands over the shape itself.

```csharp
public GameTime Keep()
```

#### Returns

 [GameTime](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.GameTime.md)

#### Remarks

Here so taking something out of a loop reads the same whichever way the loop walks. Whether a
shape is walked by chunk follows from what it includes, which the call site cannot see and which
changes when an include does.

### <a id="OblivionMP_SDK_Common_Archetypes_Mixins_GameTime_TryAs__1___0__"></a> TryAs<T\>\(out T\)

```csharp
public bool TryAs<T>(out T archetype) where T : struct, IArchetypeQueryable
```

#### Parameters

`archetype` T

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

#### Type Parameters

`T` 


