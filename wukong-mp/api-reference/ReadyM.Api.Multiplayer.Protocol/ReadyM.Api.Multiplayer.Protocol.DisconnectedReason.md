# Enum DisconnectedReason

Namespace: [ReadyM.Api.Multiplayer.Protocol](../ReadyM.Api.Multiplayer.Protocol.Enums/ReadyM.Api.Multiplayer.Protocol.md)  
Assembly: ReadyM.Api.Multiplayer.dll  

Denotes a reason for being disconnected from the server.

```csharp
public enum DisconnectedReason : byte
```

## Fields

`Unknown = 0` 

Reason for disconnection was unknown.



`Timeout = 1` 

Connection to the server timed out.



`ClientDisconnected = 2` 

Client disconnected voluntarily.



`IncompatibleVersion = 3` 

The client-side SDK mod version is incompatible with the server.



`ExpiredTicket = 4` 

Connection ticket issued by the server has expired.



`AlreadyConnected = 5` 

Player is already connected to the server in another session.



`ServerFull = 6` 

Server is full and does not allow new connections.



`Kicked = 7` 

Player was kicked from the server by an admin.



`Banned = 8` 

Player was banned from the server by an admin.




