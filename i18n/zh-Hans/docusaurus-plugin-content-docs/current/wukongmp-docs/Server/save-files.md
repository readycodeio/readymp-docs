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
├── player_c703feff87364096a8b1eb19eabc9a8b.sav
└── player_a246246929654f37aa0483e35be1b2cc.sav
```

主世界存档文件（所有玩家共享的世界状态）将放置在 `world.sav` 文件中。

属于各个玩家的保存文件存放在符合以下命名模式的文件中：`player_GUID.sav`，其中
[GUID](https://pl.wikipedia.org/wiki/Globally_Unique_Identifier) 由 ReadyM
平台提供，并且对每个玩家都是唯一的。
