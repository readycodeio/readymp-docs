---
title: 'Struct HealthChangedEvent'
---
# Struct HealthChangedEvent

Namespace: [OblivionMP.SDK.Common.Events](../OblivionMP.SDK.Common.Events/OblivionMP.SDK.Common.Events.md)  
Assembly: OblivionMP.SDK.Common.dll  

```csharp
[NetworkedEvent(EventScope.Server, Policy.Anyone)]
public struct HealthChangedEvent
```

#### Inherited Members

[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Properties

### <a id="OblivionMP_SDK_Common_Events_HealthChangedEvent_Amount"></a> Amount

```csharp
public float Amount { readonly get; set; }
```

#### Property Value

 [float](https://learn.microsoft.com/dotnet/api/system.single)

### <a id="OblivionMP_SDK_Common_Events_HealthChangedEvent_Attacker"></a> Attacker

```csharp
public Character? Attacker { readonly get; set; }
```

#### Property Value

 [Character](../OblivionMP.SDK.Common.Archetypes/OblivionMP.SDK.Common.Archetypes.Character.md)?

### <a id="OblivionMP_SDK_Common_Events_HealthChangedEvent_Code"></a> Code

This event's code on the wire, once the host has placed its mod's block.

```csharp
public RelayMessageCode Code { get; }
```

#### Property Value

 RelayMessageCode

### <a id="OblivionMP_SDK_Common_Events_HealthChangedEvent_Victim"></a> Victim

```csharp
public Vitals Victim { readonly get; set; }
```

#### Property Value

 [Vitals](../OblivionMP.SDK.Common.Archetypes.Mixins/OblivionMP.SDK.Common.Archetypes.Mixins.Vitals.md)


