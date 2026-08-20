---
title: The WukongMP SDK is now open source
description: WukongMP SDK 已在 GitHub 上开源，并以 NuGet 包的形式发布，模组模板和已发布的模组均已改用这些包。
slug: wukongmp-sdk-open-source
authors: readym
tags: [wukongmp]
hide_table_of_contents: true
---

WukongMP SDK 现已在 GitHub 上开源，分为三个仓库：

* [WukongMP SDK](https://github.com/readycodeio/wukongmp-sdk)：模组所基于的 SDK。
* [ReadyM Core SDK](https://github.com/readycodeio/readym-core-sdk)：其底层运行时，与《黑神话：悟空》无关。
* [Wukong 模组加载器](https://github.com/readycodeio/wukong-modloader)：负责把模组加载进游戏。

每个仓库的 README 都说明了它的作用以及如何构建。

<!-- truncate -->

## 编写模组不需要 SDK 源码

SDK 以 NuGet 包的形式发布，模组中的每个项目对应一个包：

| 包 | 对应的项目 |
|---|---|
| [ReadyM.SDK.Wukong.Common](https://www.nuget.org/packages/ReadyM.SDK.Wukong.Common) | 共享代码 |
| [ReadyM.SDK.Wukong.Client](https://www.nuget.org/packages/ReadyM.SDK.Wukong.Client) | 由游戏加载的模组 |
| [ReadyM.SDK.Wukong.Server](https://www.nuget.org/packages/ReadyM.SDK.Wukong.Server) | 由中继服务器加载的模组 |

引用它们并执行还原（restore）即可。无需手动拷贝任何文件，也不再需要先构建 SDK。

[模组模板](https://github.com/readycodeio/wukongmp-mod-template)、[合作模组](https://github.com/readycodeio/WukongMP-co-op-mod)和[PvP 模组](https://github.com/readycodeio/WukongMP-PvP-mod)都已改用这些包。

## 应该克隆哪个仓库

**想编写一个新模组？** 克隆[模组模板](https://github.com/readycodeio/wukongmp-mod-template)然后构建即可。它通过 NuGet 引用 SDK，这就是全部的准备工作。

**想修复合作模组或 PvP 模组中的问题？** 直接向[合作模组](https://github.com/readycodeio/WukongMP-co-op-mod)或[PvP 模组](https://github.com/readycodeio/WukongMP-PvP-mod)仓库提交 PR。两者都基于已发布的包构建，无需签出 SDK。

**想改进 SDK 本身？** 使用 `--recursive` 克隆 [wukongmp-sdk](https://github.com/readycodeio/wukongmp-sdk)。核心 SDK 会作为子模块一并拉取，一次克隆即可获得整个技术栈。

以上仓库都欢迎提交问题和拉取请求（PR）。如果你打算做一些更大的改动，想先讨论一下，请在 [ReadyM Forum](https://forum.ready.mp) 发起讨论串，或加入 [ReadyM Discord](https://discord.com/invite/wukongmp)。
