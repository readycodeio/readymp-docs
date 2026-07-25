# ReadyM.Relay.Server.Sdk.Ecs

### Namespaces

 [ReadyM.Relay.Server.Sdk.Ecs.Components](../ReadyM.Relay.Server.Sdk.Ecs.Components/ReadyM.Relay.Server.Sdk.Ecs.Components.md)

 [ReadyM.Relay.Server.Sdk.Ecs.Systems](../ReadyM.Relay.Server.Sdk.Ecs.Systems/ReadyM.Relay.Server.Sdk.Ecs.Systems.md)

### Classes

 [EcsApi](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.md)

Mod-side ECS API. Wraps the function pointers exposed by the AOT server.
All component types - whether defined in the server binary or in this mod - are
identified by <code>int</code> component IDs assigned at registration time.

 [ModComponentManager](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.ModComponentManager.md)

CoreCLR-side owner of plugin component type registrations and all per-archetype heaps.

Lifecycle: one instance per ECS world. Call RegisterComponent&lt;T&gt; for each plugin
component type during initialization, pass the returned PluginComponentRegistration to the
AOT side, then dispose when the world shuts down.

The AOT side calls AllocHeap each time a new archetype needs a heap - no coordination
needed from the plugin after registration. All allocated heaps are tracked here and
disposed in bulk on shutdown.

 [TypedComponentHeap<T\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.TypedComponentHeap-1.md)

CoreCLR-side owner of a typed component array. Exposes all mutations through delegates so
write barriers always fire correctly - even for non-blittable T. The AOT relay holds the
resulting AOTHeapPointers and dispatches through them; it never writes directly into the array.

### Structs

 [Entity](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.Entity.md)

### Delegates

 [EcsApi.EmbedForEach<T1, T2, T3, T4, T5\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEach-5.md)

 [EcsApi.EmbedForEach<T1, T2, T3, T4, T5, T6\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEach-6.md)

 [EcsApi.EmbedForEach<T1, T2\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEach-2.md)

 [EcsApi.EmbedForEach<T1\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEach-1.md)

 [EcsApi.EmbedForEach<T1, T2, T3\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEach-3.md)

 [EcsApi.EmbedForEach<T1, T2, T3, T4\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEach-4.md)

 [EcsApi.EmbedForEachState<T1, T2, T3, T4, T5, T6, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachState-7.md)

 [EcsApi.EmbedForEachState<T1, T2, T3, T4, T5, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachState-6.md)

 [EcsApi.EmbedForEachState<T1, T2, T3, T4, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachState-5.md)

 [EcsApi.EmbedForEachState<T1, T2, T3, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachState-4.md)

 [EcsApi.EmbedForEachState<T, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachState-2.md)

 [EcsApi.EmbedForEachState<T1, T2, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachState-3.md)

 [EcsApi.EmbedForEachStateManaged<T, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachStateManaged-2.md)

 [EcsApi.EmbedForEachStateManaged<T1, T2, T3, T4, T5, T6, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachStateManaged-7.md)

 [EcsApi.EmbedForEachStateManaged<T1, T2, T3, T4, T5, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachStateManaged-6.md)

 [EcsApi.EmbedForEachStateManaged<T1, T2, T3, T4, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachStateManaged-5.md)

 [EcsApi.EmbedForEachStateManaged<T1, T2, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachStateManaged-3.md)

 [EcsApi.EmbedForEachStateManaged<T1, T2, T3, TState\>](../ReadyM.Relay.Server.Sdk.Ecs/ReadyM.Relay.Server.Sdk.Ecs.EcsApi.EmbedForEachStateManaged-4.md)


