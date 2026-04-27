---
sidebar_position: 1
---

# 快速入门

在 WukongMP SDK 上开始开发你自己的模组的最简单方式，是使用官方的 [WukongMP
模组模板](https://github.com/readycodeio/wukongmp-mod-template)。

克隆仓库并按照
[README](https://github.com/readycodeio/wukongmp-mod-template/blob/main/README.md)
文件中提供的说明进行操作。

## 功能状态

目前你可以开发对游戏事件、实体数据（玩家、敌人）有访问权限的模组，并且可以定义自定义命令和游戏逻辑系统。

对任意 RPC 调用和自定义数据同步的支持正在实现中。

请访问 [示例](/wukong-mp/category/mod-examples) 页面以获取灵感。

| 特性        | 状态                                                             |
| --------- | -------------------------------------------------------------- |
| 修改游戏代码    | :white_check_mark: [已完成](../Development/patching)              |
| 游戏事件      | :white_check_mark: [已完成](../Development/APIs/game-events)      |
| 控制台命令 API | :white_check_mark: [已完成](../Development/APIs/console-commands) |
| 自定义 RPC   | :white_check_mark: [已完成](../Development/custom-rpc)            |
| 保存文件 API  | :construction: [部分](../Development/APIs/save-file-management)  |
| 自定义数据同步   | :soon: [进行中](../Development/APIs/custom-components)            |
