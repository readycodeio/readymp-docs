---
sidebar_position: 1
---

# 什么是 WukongMP？

WukongMP 是一个面向 **Black Myth: Wukong**
的社区多人游戏平台。它将游戏的单人体验转变为一个充满活力、由社区驱动的世界，让玩家运行自己的服务器、加入合作联机、在 PvP
竞技场中战斗，并构建完全自定义的游戏模式。

WukongMP 由 [ReadyM](https://www.ready.mp) 团队构建并维护。它 **不是** Black Myth: Wukong
的官方服务，也与 Game Science 无关。

---

## 你可以做什么

### 作为玩家

- **协作联机**：与朋友一起探索世界并击败首领们
- **PvP**：加入社区运营的 PvP 服务器，具备自定义规则集
- **一键加入**：自动模组与资源同步意味着你无需手动安装模组包；只需点击即可开始游戏
- **单一账户，所有游戏**：你的 ReadyM 账户可在 WukongMP 和其他 ReadyM 支持的游戏中使用

### 作为服务器所有者

- **运行你自己的服务器**：下载服务器二进制文件或 Docker 镜像，并在任意机器或云服务提供商上托管（包括
  [Nodecraft](https://nodecraft.com/games/wukongmp-server-hosting)）
- **自定义游戏模式**：使用 C# SDK 构建角色扮演服务器、生存模式、Boss Rush 联赛，或具备完全自定义逻辑的 PvP 锦标赛
- **模组管理**：通过管理员面板安装、启用和禁用模组，无需重启服务器
- **实时分析**：监控你的社区如何进行游戏、跟踪玩家数量，并实时观察服务器健康状况

---

## 工作原理

### 玩家

1. **在 [portal.ready.mp](https://portal.ready.mp/signup) 创建 ReadyM 账户
2. **下载启动器**：连接服务器时它会自动处理模组同步
3. **挑选服务器并开始游玩**：浏览服务器列表，点击加入，启动器会处理其余部分

### 作为服务器所有者

1. **下载服务器二进制文件**（Windows 或 Linux）或拉取 Docker 镜像，请参阅
   [快速入门指南](quick-start)，几分钟即可上线
2. **配置**：编辑 `config.json` 以设置端口，然后将 mods 放入 `mods/` 文件夹
3. **启动并管理**：启动服务器并使用内置网页管理面板来管理玩家、模组和设置

---

## ReadyM 平台

WukongMP 架构在 **ReadyM SDK 与平台** 之上，提供实现社区级多人游戏所需的共享基础架构：

| 特性              | 描述                                                 |
| --------------- | -------------------------------------------------- |
| **安全的单点登录**     | 玩家通过 ReadyM 账户进行身份验证，无需为每个服务器配置账户系统              |
| **自动模组同步**      | 启动器在连接前会安装服务器所需的确切模组                               |
| **C# 脚本引擎**     | 在 C# 中编写服务器端游戏逻辑，能够访问游戏事件、实体数据、命令以及自定义 RPC         |
| **服务器二进制**      | 为云端和专用硬件优化的独立可部署包                                  |
| **Admin panel** | 内置网页用户界面，用于实时服务器管理，访问地址为 `http://your-server:9050` |

ReadyM 的设计目标是为社区运行的游戏服务器做 FiveM 对 *Grand Theft Auto V*
所做的事，一个民主、开放的平台，任何人都可以创建并分享自定义的多人游戏体验。

---

## 当前状态

WukongMP 处于 **活跃开发**状态。该 SDK 于 2026 年 5 月公开测试版上线。

| 区域                        | 状态      |
| ------------------------- | ------- |
| 合作与 PvP 服务器               | ✅ 可用    |
| 服务器二进制文件（Windows 与 Linux） | ✅ 可用    |
| Docker 镜像                 | ✅ 可用    |
| SDK（C# 脚本）                | ✅ 公开测试版 |
| 自定义 RPC                   | ✅ 可用    |
| 保存文件 API                  | 🚧 部分完成  |
| 自定义数据同步                   | 🔜 进行中   |
| 服务器端模组                    | 🔜 进行中   |

有关完整的 SDK 功能分解，请参阅 [Getting Started](Development/getting-started)。

---

## 合作伙伴

ReadyM 与行业伙伴合作，提供尽可能最佳的服务器托管和工具体验：

- **[Nodecraft](https://nodecraft.com/games/wukongmp-server-hosting)** ，
  WukongMP 服务器的官方托管提供商

---

## 开始使用

- 👾 **玩家？** [Create a ReadyM account](https://portal.ready.mp/signup) 并下载启动器
- 🖥️ **服务器所有者？** 按照 [Quick Start guide](quick-start) 让您的服务器在几分钟内上线
- ⚡ **开发者？** 请参阅 [快速入门](Development/getting-started)，以使用 SDK 构建您的第一个模组
- 💬 **问题？** 加入 [WukongMP Discord](https://dsc.gg/readym)
