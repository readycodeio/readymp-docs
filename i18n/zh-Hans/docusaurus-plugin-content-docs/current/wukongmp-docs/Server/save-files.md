---
sidebar_position: 4
---

# 游戏存档文件

WukongMP SDK 允许使用 [Save
API](/docs/wukongmp-docs/Development/APIs/save-file-management) 将玩家的存档数据同步到服务器。

存档文件存放在服务器上的 `saves/` 目录中。

```text title="Example save folder layout"
saves
├── world.sav
└── players/
    ├── player_c703feff87364096a8b1eb19eabc9a8b.sav
    └── player_a246246929654f37aa0483e35be1b2cc.sav
```

主世界存档文件（所有玩家共享的世界状态）将放置在 `world.sav` 文件中。

属于各个玩家的保存文件存放在符合以下命名模式的文件中：`player_GUID.sav`，其中
[GUID](https://en.wikipedia.org/wiki/Globally_Unique_Identifier) 由 ReadyM
平台提供，并且对每个玩家都是唯一的。

## 使用联机合作模组

在我们扩展 [Save API](/docs/wukongmp-docs/Development/APIs/save-file-management)
以允许上传任意数量的带有任意元数据的存档文件之前，存档文件的行为如下：

1. 首个加载新位置（区域）的玩家被视为该区域的「主机」，并在游戏保存时负责上传 `world.sav`。
2. 包括主机在内的所有玩家也会上传他们自己的 `player_GUID.sav` 存档文件，其中包含各自角色的信息。

### 开始新游戏

要重置服务器的存档数据，只需删除 `saves` 文件夹。下次有人连接服务器时，他们将开始新游戏，前提是已启用联机合作模组。

### 从共享存档开始

如果你希望所有玩家都从特定的存档文件开始游戏，请将其放在 `saves/world.sav`，并删除 `saves/players`
文件夹，以强制所有玩家从该存档文件开始。

如果你不删除 `saves/players` 文件夹，位置和世界状态将取自 `world.sav`，玩家进度（装备、等级、技能等）将取自每个玩家的个人存档文件。
