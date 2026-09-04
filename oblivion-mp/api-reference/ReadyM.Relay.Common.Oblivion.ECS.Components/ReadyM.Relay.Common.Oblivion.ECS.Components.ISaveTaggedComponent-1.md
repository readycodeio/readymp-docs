# Interface ISaveTaggedComponent<TSelf>

Namespace: [ReadyM.Relay.Common.Oblivion.ECS.Components](../ReadyM.Relay.Common.Oblivion.ECS.Components/ReadyM.Relay.Common.Oblivion.ECS.Components.md)  
Assembly: ReadyM.Relay.Common.Oblivion.dll  

A networked component that can be persisted in a player save. The save key defaults to
the component's type name. The key is part of the save file format. Renaming a component changes its key and makes
older saves of that component unreadable.

```csharp
public interface ISaveTaggedComponent<TSelf> where TSelf : ISaveTaggedComponent<TSelf>
```

#### Type Parameters

`TSelf` 

## Properties

### <a id="ReadyM_Relay_Common_Oblivion_ECS_Components_ISaveTaggedComponent_1_SaveKey"></a> SaveKey

```csharp
public static string SaveKey { get; }
```

#### Property Value

 [string](https://learn.microsoft.com/dotnet/api/system.string)


