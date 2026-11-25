---
title: 'Struct TamrielicDate'
description: 'A date on the Tamrielic calendar, counted the way the game counts it.'
---
# Struct TamrielicDate

Namespace: [OblivionMP.SDK.Common.Calendar](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.md)  
Assembly: OblivionMP.SDK.Common.dll  

A date on the Tamrielic calendar, counted the way the game counts it.

```csharp
public readonly struct TamrielicDate : IComparable<TamrielicDate>, IEquatable<TamrielicDate>
```

#### Implements

[IComparable<TamrielicDate\>](https://learn.microsoft.com/dotnet/api/system.icomparable-1), 
[IEquatable<TamrielicDate\>](https://learn.microsoft.com/dotnet/api/system.iequatable-1)

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Remarks

The game's year has 365 days and no leap years. Game day 1 is the canonical start, Morndas, 27th of Last Seed,
433, which is also the <code>default</code> date. The date carries no era: which era a server plays in is up to it.

## Constructors

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate__ctor_System_UInt32_"></a> TamrielicDate\(uint\)

The date of a game day.

```csharp
public TamrielicDate(uint gameDaysPassed)
```

#### Parameters

`gameDaysPassed` [uint](https://learn.microsoft.com/dotnet/api/system.uint32)

The game's day counter, as in <code>GameTime.GameDay</code>. The game starts on day 1.

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate__ctor_System_Int32_OblivionMP_SDK_Common_Calendar_Month_System_Int32_"></a> TamrielicDate\(int, Month, int\)

A date from its day, month, and year.

```csharp
public TamrielicDate(int day, Month month, int year)
```

#### Parameters

`day` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The day of the month, from 1.

`month` [Month](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Month.md)

The month.

`year` [int](https://learn.microsoft.com/dotnet/api/system.int32)

The year, from 1.

#### Exceptions

 [ArgumentOutOfRangeException](https://learn.microsoft.com/dotnet/api/system.argumentoutofrangeexception)

The month is not defined, the year is below 1, or the month has no such day.

## Properties

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Birthsign"></a> Birthsign

The birthsign of someone born on this date: the sign that rules its month.

```csharp
public Birthsign Birthsign { get; }
```

#### Property Value

 [Birthsign](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Birthsign.md)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Day"></a> Day

The day of the month, from 1.

```csharp
public int Day { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_GameDaysPassed"></a> GameDaysPassed

The game's day counter on this date, the inverse of **UInt32)**. Below 1 before the game's start.

```csharp
public long GameDaysPassed { get; }
```

#### Property Value

 [long](https://learn.microsoft.com/dotnet/api/system.int64)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_GameStart"></a> GameStart

The game's start, Morndas, 27th of Last Seed, 433: game day 1.

```csharp
public static TamrielicDate GameStart { get; }
```

#### Property Value

 [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Month"></a> Month

The month.

```csharp
public Month Month { get; }
```

#### Property Value

 [Month](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Month.md)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Weekday"></a> Weekday

The day of the week.

```csharp
public Weekday Weekday { get; }
```

#### Property Value

 [Weekday](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Weekday.md)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Year"></a> Year

The year.

```csharp
public int Year { get; }
```

#### Property Value

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

## Methods

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_CompareTo_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> CompareTo\(TamrielicDate\)

Orders dates by day.

```csharp
public int CompareTo(TamrielicDate other)
```

#### Parameters

`other` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_DaysIn_OblivionMP_SDK_Common_Calendar_Month_"></a> DaysIn\(Month\)

The number of days in a month, which is the same every year.

```csharp
public static int DaysIn(Month month)
```

#### Parameters

`month` [Month](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.Month.md)

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Equals_System_Object_"></a> Equals\(object\)

```csharp
public override bool Equals(object obj)
```

#### Parameters

`obj` [object](https://learn.microsoft.com/dotnet/api/system.object)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_Equals_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> Equals\(TamrielicDate\)

```csharp
public bool Equals(TamrielicDate other)
```

#### Parameters

`other` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_GetHashCode"></a> GetHashCode\(\)

```csharp
public override int GetHashCode()
```

#### Returns

 [int](https://learn.microsoft.com/dotnet/api/system.int32)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_ToString"></a> ToString\(\)

The date without an era, such as "Morndas, 27th of Last Seed, 433".

```csharp
public override string ToString()
```

#### Returns

 [string](https://learn.microsoft.com/dotnet/api/system.string)

## Operators

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_op_Equality_OblivionMP_SDK_Common_Calendar_TamrielicDate_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> operator ==\(TamrielicDate, TamrielicDate\)

```csharp
public static bool operator ==(TamrielicDate left, TamrielicDate right)
```

#### Parameters

`left` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

`right` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_op_GreaterThan_OblivionMP_SDK_Common_Calendar_TamrielicDate_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> operator \>\(TamrielicDate, TamrielicDate\)

```csharp
public static bool operator >(TamrielicDate left, TamrielicDate right)
```

#### Parameters

`left` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

`right` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_op_GreaterThanOrEqual_OblivionMP_SDK_Common_Calendar_TamrielicDate_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> operator \>=\(TamrielicDate, TamrielicDate\)

```csharp
public static bool operator >=(TamrielicDate left, TamrielicDate right)
```

#### Parameters

`left` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

`right` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_op_Inequality_OblivionMP_SDK_Common_Calendar_TamrielicDate_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> operator \!=\(TamrielicDate, TamrielicDate\)

```csharp
public static bool operator !=(TamrielicDate left, TamrielicDate right)
```

#### Parameters

`left` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

`right` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_op_LessThan_OblivionMP_SDK_Common_Calendar_TamrielicDate_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> operator <\(TamrielicDate, TamrielicDate\)

```csharp
public static bool operator <(TamrielicDate left, TamrielicDate right)
```

#### Parameters

`left` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

`right` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="OblivionMP_SDK_Common_Calendar_TamrielicDate_op_LessThanOrEqual_OblivionMP_SDK_Common_Calendar_TamrielicDate_OblivionMP_SDK_Common_Calendar_TamrielicDate_"></a> operator <=\(TamrielicDate, TamrielicDate\)

```csharp
public static bool operator <=(TamrielicDate left, TamrielicDate right)
```

#### Parameters

`left` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

`right` [TamrielicDate](../OblivionMP.SDK.Common.Calendar/OblivionMP.SDK.Common.Calendar.TamrielicDate.md)

#### Returns

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)


