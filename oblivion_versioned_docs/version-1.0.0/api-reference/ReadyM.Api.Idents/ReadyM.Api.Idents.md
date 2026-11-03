---
title: 'ReadyM.Api.Idents'
description: 'The types in the ReadyM.Api.Idents namespace.'
---
# ReadyM.Api.Idents

### Structs

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

Identifies an area: a part of the game world behind a loading screen, such as a whole map or a single interior.

 [CellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.CellId.md)

Identifies a cell within an area.
**CellId** has to be unique within its parent area (identified by **AreaId**).
The main difference between a cell and an area is that a player can be only in one area at once, but can have many cells active within that area.
<remarks>Cells are only used in OblivionMP for now. WukongMP does not use cells.</remarks>

 [FullCellId](../ReadyM.Api.Idents/ReadyM.Api.Idents.FullCellId.md)

Fully identifies a cell across the whole game world by pairing it with its parent area.
A **CellId** only has to be unique within its parent **AreaId**, so a cell can only be
uniquely identified by the (**AreaId**, **CellId**) pair represented by this struct.

 [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

A unique identifier for a player in the current session.
This is not a persistent identifier and can change over time, especially if players disconnect and reconnect.
It should be used for identifying players during the current session, but not for long-term storage or cross-session identification.


