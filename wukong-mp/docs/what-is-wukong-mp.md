---
sidebar_position: 1
---

# What is WukongMP?

WukongMP is a community multiplayer platform for **Black Myth: Wukong**. It transforms the game's single-player experience into a living, community-driven world — letting players run their own servers, join co-op sessions, fight in PvP arenas, and build entirely custom game modes.

WukongMP is built and maintained by the [ReadyM](https://www.ready.mp) team. It is **not** an official Black Myth: Wukong service and is not affiliated with Game Science.

---

## What you can do

### As a player

- **Co-op** — explore the world and fight bosses alongside friends
- **PvP** — join community-run PvP servers with custom rulesets
- **One-click join** — automatic mod and resource sync means you never manually install modpacks; just click and play
- **Single account, all games** — your ReadyM account works across WukongMP and other ReadyM-supported titles

### As a server owner

- **Run your own server** — download the server binary or Docker image and host on any machine or cloud provider (including [Nodecraft](https://nodecraft.com/games/wukongmp-server-hosting))
- **Custom game modes** — use the C# SDK to build roleplaying servers, survival modes, boss rush leagues, or PvP tournaments with fully custom logic
- **Mod management** — install, enable, and disable mods from the admin panel without restarting the server
- **Real-time analytics** — monitor how your community plays, track player counts, and watch server health in real time

---

## How it works

### For players

1. **Create a ReadyM account** at [portal.ready.mp](https://portal.ready.mp/signup)
2. **Download the launcher** — it handles mod sync automatically when you join a server
3. **Pick a server and play** — browse the server list, click join, and the launcher takes care of the rest

### For server owners

1. **Download the server binary** (Windows or Linux) or pull the Docker image — see the [Quick Start guide](quick-start) to be live in minutes
2. **Configure** — edit `config.json` to set your port, then drop mods into the `mods/` folder
3. **Launch and manage** — start the server and use the built-in web admin panel to manage players, mods, and settings

---

## The ReadyM platform

WukongMP runs on top of the **ReadyM SDK and platform**, which provides the shared infrastructure that makes community multiplayer possible:

| Feature | Description |
|---|---|
| **Secure SSO** | Players authenticate via their ReadyM account — no per-server account systems needed |
| **Automatic mod sync** | The launcher installs the exact mods a server requires before connecting |
| **C# scripting engine** | Write server-side game logic in C# with access to game events, entity data, commands, and custom RPC |
| **Server binary** | A self-contained deployable package optimised for cloud and dedicated hardware |
| **Admin panel** | Built-in web UI for live server management, accessible at `http://your-server:9050` |

ReadyM is designed to do for community-run game servers what FiveM did for *Grand Theft Auto V* — a democratic, open platform where anyone can create and share custom multiplayer experiences.

---

## Current status

WukongMP is in **active development**. The SDK reached public open beta in May 2026.

| Area | Status |
|---|---|
| Co-op and PvP servers | ✅ Available |
| Server binary (Windows & Linux) | ✅ Available |
| Docker image | ✅ Available |
| SDK (C# scripting) | ✅ Public open beta |
| Custom RPC | ✅ Available |
| Save file API | 🚧 Partial |
| Custom data sync | 🔜 In progress |
| Server-side mods | 🔜 In progress |

For the full SDK feature breakdown, see [Getting Started](Development/getting-started).

---

## Partners

ReadyM works with industry partners to provide the best possible server hosting and tooling experience:

- **[Nodecraft](https://nodecraft.com/games/wukongmp-server-hosting)** — official managed hosting provider for WukongMP servers

---

## Get started

- 👾 **Player?** [Create a ReadyM account](https://portal.ready.mp/signup) and download the launcher
- 🖥️ **Server owner?** Follow the [Quick Start guide](quick-start) to get your server live in minutes
- ⚡ **Developer?** See [Getting Started](Development/getting-started) to build your first mod with the SDK
- 💬 **Questions?** Join the [WukongMP Discord](https://dsc.gg/readym)
