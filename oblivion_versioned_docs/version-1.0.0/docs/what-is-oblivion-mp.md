---
sidebar_position: 1
---

# What is OblivionMP?

OblivionMP is a community multiplayer platform for **The Elder Scrolls IV: Oblivion Remastered**. It transforms the game's single-player experience into a shared, community-driven world, letting players run their own servers and build entirely custom multiplayer game modes on top of the C# SDK.

OblivionMP is built and maintained by the [ReadyM](https://www.ready.mp) team. It is **not** an official Elder Scrolls IV: Oblivion Remastered service and is not affiliated with Bethesda Softworks.

---

## What you can do

### As a player

- **Play together.** Explore Cyrodiil and fight alongside friends on community-run servers
- **Whatever the server builds.** Since OblivionMP ships without any built-in game mode, what you can do depends entirely on the mods a server owner has installed
- **One-click join.** Automatic mod and resource sync means you never manually install modpacks; just click and play
- **Single account, all games.** Your ReadyM account works across OblivionMP and other ReadyM-supported titles

### As a server owner

- **Run your own server.** Download the server binary or Docker image and host on any machine or cloud provider
- **A blank canvas.** The base server replicates players and world state, but ships with no gameplay logic of its own; use the C# SDK to build your own co-op quests, PvP arenas, roleplaying servers, or anything else
- **Web-based admin panel.** Manage players and server settings without touching the command line

---

## How it works

### For players

1. **Create a ReadyM account** at [portal.ready.mp](https://portal.ready.mp/signup)
2. **Download the launcher.** It handles mod sync automatically when you join a server
3. **Pick a server and play.** Browse the server list, click join, and the launcher takes care of the rest

### For server owners

1. **Download the server binary** (Windows or Linux) or pull the Docker image, see the [Installation guide](Server/installation)
2. **Configure.** Edit `config.json` to set your port
3. **Build your game mode.** The server ships with no mods installed; write your own with the [C# SDK](Modding/Getting-started/your-first-mod.md), or install a mod built by the community
4. **Launch and manage.** Start the server and use the built-in web admin panel to manage players, mods, and settings

---

## The ReadyM platform

OblivionMP runs on top of the **ReadyM SDK and platform**, which provides the shared infrastructure that makes community multiplayer possible:

| Feature | Description |
|---|---|
| **Secure SSO** | Players authenticate via their ReadyM account, with no per-server account systems needed |
| **Automatic mod sync** | The launcher installs the exact mods a server requires before connecting |
| **C# scripting engine** | Write client-side and server-side game logic in C#, with access to entity data, custom data sync, and custom RPC |
| **Server binary** | A self-contained deployable package optimised for cloud and dedicated hardware |
| **Admin panel** | Built-in web UI for live server management, accessible at `http://your-server:9050` |

ReadyM is designed to do for community-run game servers what FiveM did for *Grand Theft Auto V*: a democratic, open platform where anyone can create and share custom multiplayer experiences.

---

## Current status

OblivionMP is in **active development**. The server is out as **1.0.1**, and the SDK as **1.0.0**.

| Area | Status |
|---|---|
| Server binary (Windows & Linux) | ✅ Available |
| Docker image | 🔜 Coming soon |
| SDK (C# scripting) | ✅ Available |
| Client-side mods | ✅ Available |
| Server-side mods | ✅ Available |
| Custom RPC | ✅ Available |
| Custom data sync | ✅ Available |
| Server events | ✅ Available |
| Entity creation | ✅ Available |
| Mod config files | ✅ Available |
| Bundled game modes | ✅ PvP Arena mod |
| Save file API | 🚧 Sync implemented, no public API yet |

To start writing mods, see [Your first mod](Modding/Getting-started/your-first-mod.md). If you maintain a mod written for OblivionMP 0.2, its documentation is in the 0.2.0 version of these docs, in the version menu at the top of the page.

---

## Get started

- 👾 **Player?** [Create a ReadyM account](https://portal.ready.mp/signup) and download the launcher
- 🖥️ **Server owner?** Follow the [Installation guide](Server/installation) to get your server set up
- ⚡ **Developer?** See [Your first mod](Modding/Getting-started/your-first-mod.md) to build a mod and run it on your own server
- 💬 **Questions?** Join the [OblivionMP Discord](https://discord.gg/obmp)
