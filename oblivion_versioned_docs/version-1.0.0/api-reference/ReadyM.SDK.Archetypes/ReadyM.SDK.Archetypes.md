---
title: 'ReadyM.SDK.Archetypes'
description: 'The types in the ReadyM.SDK.Archetypes namespace.'
---
# ReadyM.SDK.Archetypes

### Namespaces

 [ReadyM.SDK.Archetypes.Access](../ReadyM.SDK.Archetypes.Access/ReadyM.SDK.Archetypes.Access.md)

 [ReadyM.SDK.Archetypes.Core](../ReadyM.SDK.Archetypes.Core/ReadyM.SDK.Archetypes.Core.md)

### Classes

 [ArchetypeExtensions](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.ArchetypeExtensions.md)

What a shape can do, for code that holds one as a type parameter.

### Interfaces

 [IArchetype](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetype.md)

Marks a shape that is an archetype rather than a mixin.

 [IArchetypeMixin](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeMixin.md)

Marks a shape that can be used as a mixin for archetypes.

 [IArchetypeQueryable](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IArchetypeQueryable.md)

Common interface for archetypes and mixins.

 [IEntityShape](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IEntityShape.md)

Anything that names one entity: an archetype, a mixin, or the chunk view of either.

 [IIndexed<TKey\>](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IIndexed-1.md)

Marks a shape whose component is indexed by a value of this type, so it can be looked up by one.

 [IScope](../ReadyM.SDK.Archetypes/ReadyM.SDK.Archetypes.IScope.md)

Marks an archetype whose entities can hold others: entities created in it are removed with it,
and a query can be narrowed to it. Declare it on the shape itself, next to [Archetype].


