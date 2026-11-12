---
title: 'Class EventHandlerAttribute'
description: 'Declares a method as a network event handler. The project it is compiled into says which side runs it - game or server.'
---
# Class EventHandlerAttribute

Namespace: [ReadyM.SDK.Attributes](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.md)  
Assembly: ReadyM.SDK.dll  

Declares a method as a network event handler.
The project it is compiled into says which side runs it - game or server.

```csharp
[AttributeUsage(AttributeTargets.Method)]
public sealed class EventHandlerAttribute : Attribute
```

#### Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) ← 
[Attribute](https://learn.microsoft.com/dotnet/api/system.attribute) ← 
[EventHandlerAttribute](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.EventHandlerAttribute.md)

#### Inherited Members

[Attribute.GetCustomAttributes\(MemberInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\-system\-type\)), 
[Attribute.GetCustomAttributes\(MemberInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(MemberInfo\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\)), 
[Attribute.GetCustomAttributes\(MemberInfo, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-memberinfo\-system\-boolean\)), 
[Attribute.IsDefined\(MemberInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-memberinfo\-system\-type\)), 
[Attribute.IsDefined\(MemberInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-memberinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(MemberInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-memberinfo\-system\-type\)), 
[Attribute.GetCustomAttribute\(MemberInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-memberinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(ParameterInfo\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\)), 
[Attribute.GetCustomAttributes\(ParameterInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\-system\-type\)), 
[Attribute.GetCustomAttributes\(ParameterInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(ParameterInfo, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-parameterinfo\-system\-boolean\)), 
[Attribute.IsDefined\(ParameterInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-parameterinfo\-system\-type\)), 
[Attribute.IsDefined\(ParameterInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-parameterinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(ParameterInfo, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-parameterinfo\-system\-type\)), 
[Attribute.GetCustomAttribute\(ParameterInfo, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-parameterinfo\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Module, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\-system\-type\)), 
[Attribute.GetCustomAttributes\(Module\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\)), 
[Attribute.GetCustomAttributes\(Module, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Module, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-module\-system\-type\-system\-boolean\)), 
[Attribute.IsDefined\(Module, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-module\-system\-type\)), 
[Attribute.IsDefined\(Module, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-module\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(Module, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-module\-system\-type\)), 
[Attribute.GetCustomAttribute\(Module, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-module\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Assembly, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\-system\-type\)), 
[Attribute.GetCustomAttributes\(Assembly, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttributes\(Assembly\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\)), 
[Attribute.GetCustomAttributes\(Assembly, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattributes\#system\-attribute\-getcustomattributes\(system\-reflection\-assembly\-system\-boolean\)), 
[Attribute.IsDefined\(Assembly, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-assembly\-system\-type\)), 
[Attribute.IsDefined\(Assembly, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefined\#system\-attribute\-isdefined\(system\-reflection\-assembly\-system\-type\-system\-boolean\)), 
[Attribute.GetCustomAttribute\(Assembly, Type\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-assembly\-system\-type\)), 
[Attribute.GetCustomAttribute\(Assembly, Type, bool\)](https://learn.microsoft.com/dotnet/api/system.attribute.getcustomattribute\#system\-attribute\-getcustomattribute\(system\-reflection\-assembly\-system\-type\-system\-boolean\)), 
[Attribute.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.attribute.equals), 
[Attribute.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.attribute.gethashcode), 
[Attribute.Match\(object?\)](https://learn.microsoft.com/dotnet/api/system.attribute.match), 
[Attribute.IsDefaultAttribute\(\)](https://learn.microsoft.com/dotnet/api/system.attribute.isdefaultattribute), 
[Attribute.TypeId](https://learn.microsoft.com/dotnet/api/system.attribute.typeid), 
[object.GetType\(\)](https://learn.microsoft.com/dotnet/api/system.object.gettype), 
[object.ToString\(\)](https://learn.microsoft.com/dotnet/api/system.object.tostring), 
[object.Equals\(object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\)), 
[object.Equals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.equals\#system\-object\-equals\(system\-object\-system\-object\)), 
[object.ReferenceEquals\(object?, object?\)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals), 
[object.GetHashCode\(\)](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

## Examples

Validate, Apply, Observe, and Rejected need an <code>in</code> parameter for the event, and optionally an <code>EventContext</code> parameter.
<pre><code class="lang-csharp">[EventHandler(Stage.Validate)] // Apply, Observe
public void CheckPlayerCanJoin(in PlayerJoinedEvent e, EventContext ctx)</code></pre>
Filter needs a <code>ref</code>, as it can change the event before it's applied.
<pre><code class="lang-csharp">[EventHandler(Stage.Filter)]
public void ChangePlayerJoinParams(ref PlayerJoinedEvent e, EventContext ctx)</code></pre>

## Constructors

### <a id="ReadyM_SDK_Attributes_EventHandlerAttribute__ctor_ReadyM_SDK_Attributes_Stage_"></a> EventHandlerAttribute\(Stage\)

Declares a method as a network event handler.
The project it is compiled into says which side runs it - game or server.

```csharp
public EventHandlerAttribute(Stage stage)
```

#### Parameters

`stage` [Stage](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Stage.md)

Which stage of event propagation this method handles.

#### Examples

Validate, Apply, Observe, and Rejected need an <code>in</code> parameter for the event, and optionally an <code>EventContext</code> parameter.
<pre><code class="lang-csharp">[EventHandler(Stage.Validate)] // Apply, Observe
public void CheckPlayerCanJoin(in PlayerJoinedEvent e, EventContext ctx)</code></pre>
Filter needs a <code>ref</code>, as it can change the event before it's applied.
<pre><code class="lang-csharp">[EventHandler(Stage.Filter)]
public void ChangePlayerJoinParams(ref PlayerJoinedEvent e, EventContext ctx)</code></pre>

## Properties

### <a id="ReadyM_SDK_Attributes_EventHandlerAttribute_After"></a> After

The manifest id of a mod this handler runs after, for the rare case where dependency order is not enough.

```csharp
public string? After { get; set; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)?

### <a id="ReadyM_SDK_Attributes_EventHandlerAttribute_SkipOnRaisingClient"></a> SkipOnRaisingClient

On **Apply** only: skip this handler on the client that raised the event, because that
client already did what it applies.

```csharp
public bool SkipOnRaisingClient { get; set; }
```

#### Property Value

 [bool](https://learn.microsoft.com/dotnet/api/system.boolean)

### <a id="ReadyM_SDK_Attributes_EventHandlerAttribute_Stage"></a> Stage

Which stage of event propagation this method handles.

```csharp
public Stage Stage { get; }
```

#### Property Value

 [Stage](../ReadyM.SDK.Attributes/ReadyM.SDK.Attributes.Stage.md)


