# ReadyM.Api.Idents

### Structs

 [AreaId](../ReadyM.Api.Idents/ReadyM.Api.Idents.AreaId.md)

Identifies an area within the game world.
Areas can be main Chapter maps, sub-areas such as the Zodiac Village, or hidden boss arenas.
If going somewhere requires a loading screen, it's probably a different area.

 [PlayerId](../ReadyM.Api.Idents/ReadyM.Api.Idents.PlayerId.md)

A unique identifier for a player in the current session.
This is not a persistent identifier and can change over time, especially if players disconnect and reconnect.
It should be used for identifying players during the current session, but not for long-term storage or cross-session identification.


