---
sidebar_position: 1
---

# 快速入门

在 WukongMP SDK 上开始开发你自己的模组的最简单方式，是使用官方的 [WukongMP
模组模板](https://github.com/readycodeio/wukongmp-mod-template)。

克隆仓库并按照
[README](https://github.com/readycodeio/wukongmp-mod-template/blob/main/README.md)
文件中提供的说明进行操作。模板通过 NuGet 引用 SDK，所以没有任何东西需要手动下载或复制，而它的 `MakeModFolder.ps1` 脚本会把完成的模组打包成[服务器期望的结构](mod-manifest)。

一个模组就是一个文件夹，里面最多装着两半：一个 `client/` 和一个 `server/`。**开发**下面的各页讲的是客户端这一半，[服务器端开发](../Server-development/getting-started)讲的是另一半。小型模组只需要客户端这一半。

## 功能状态

目前你可以开发对游戏事件、实体数据（玩家、敌人）有访问权限的模组，并且可以定义自定义命令和游戏逻辑系统。

模组也可以在服务器上运行逻辑，参见[服务器端开发](../Server-development/getting-started)。

请访问 [examples](/wukong-mp/category/mod-examples) 页面以获取灵感，或浏览
[co-op](https://github.com/readycodeio/WukongMP-co-op-mod) 与
[PvP](https://github.com/readycodeio/WukongMP-PvP-mod) 模组的源代码。

| 特性        | 状态                                                             |
| --------- | -------------------------------------------------------------- |
| 修改游戏代码    | :white_check_mark: [已完成](../Development/patching)              |
| 游戏事件      | :white_check_mark: [已完成](../Development/APIs/game-events)      |
| 控制台命令 API | :white_check_mark: [已完成](../Development/APIs/console-commands) |
| 自定义 RPC   | :white_check_mark: [已完成](../Development/custom-rpc)            |
| 保存文件 API  | :construction: [部分](../Development/APIs/save-file-management)  |
| 自定义数据同步   | :white_check_mark: [已完成](../Development/APIs/custom-components) |
| 模组配置文件    | :white_check_mark: [已完成](../Development/mod-config)            |
| 服务器端模组    | :white_check_mark: [已完成](../Server-development/getting-started) |
