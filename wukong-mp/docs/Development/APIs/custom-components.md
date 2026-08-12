# Custom components

The WukongMP SDK allows for defining custom data components attached to entities in the game. These can be anything from primitive values to complex structures.

---

:::warning[Work in progress]

The server half of this shipped in 0.3.0: a server-side mod can declare a networked component and attach it to an archetype, as described in [server-side development](../../Server-development/getting-started#registering-components-and-archetypes).

What is still missing is the client half. There is no way yet for a client mod to register the matching archetype change, so the client never syncs the component and a server-registered networked component stays server-only for now. That last piece lands in **0.3.1**, and nothing written against the server API needs to change when it does.

Until then, use [local components](../../Server-development/getting-started#local-components) for server-owned state and [RPC](../custom-rpc) to get what the client needs across.

:::
