---
sidebar_position: 3
---

# 模组管理

模组支持是 WukongMP 的核心功能，允许你通过自定义内容扩展服务器的功能。

## 客户端模组

WukongMP 支持对连接到服务器的客户端进行自动模组同步。客户端连接时，服务器会检查客户端是否安装了所需的模组。如果没有，[ReadyM
Launcher](https://portal.ready.mp/pl/dashboard/launcher) 将下载并安装缺失的模组，才能加入游戏。

要将模组添加到服务器，只需将模组文件夹放在 `mods/` 目录中。

模组文件夹的预期结构如下。如果你使用我们的[官方模组模板](https://github.com/readycodeio/wukongmp-mod-template)，里面有一个`MakeModFolder.ps1`脚本，它将相应地打包模组。


```text title="示例 mod 文件夹布局"
mods/
└──MyModFolder/         # mod 的根目录，可以任意命名
    ├── MyMod.dll       # mod 的主程序集
    ├── manifest.json   # mod 清单文件
    └── other_files...  # mod 所需的其他文件（可选）
```

连接到服务器时，客户端将自动从 `mods/` 目录下载并安装任何缺失的模组，确保无缝的多人游戏体验。

:::danger[安全公告]

WukongMP SDK 和服务器的抢先体验版本不包含任何针对模组的沙箱或安全机制。

仅使用来自可信来源的模组，因为它们可能在客户端执行任意代码。

请勿在服务器上运行不可信的模组，尤其是在服务器对公众可访问时。

:::

### .pak 文件

WukongMP 的模组可以包含用于游戏资源的 `.pak` 文件，这些文件将被游戏自动加载。

要在你的模组中包含一个 `.pak` 文件，只需将它放在模组文件夹中的任意位置即可。只要模组中存在有效的 `manifest.json`
文件，服务器就会将其识别为模组并分发给客户端，游戏在加载模组时会加载 `.pak` 文件。

特别是，这使你能够创建仅包含自定义资源且不包含任何代码的模组，这对于简单的内容模组非常有用。

一个包含 `.pak` 文件的示例模组结构如下：

```text title="Example mod folder layout with .pak file"
mods/
└──MyModFolder/           # mod 的根目录，可以任意命名
    ├── manifest.json     # mod 清单文件
    ├── custom_assets.pak # 自定义资源包
    └── other_files...    # mod 所需的其他文件（可选）
```

## 服务器端模组 {#server-side-mods}

除了客户端内容之外，WukongMP 模组也可以在服务器上运行逻辑。服务器端模组放在与 `mods/` 并列的**独立** `server_mods/` 目录中，加载方式也不同。

与客户端模组不同，服务器端模组不是带清单文件的文件夹。把模组的程序集（以及它的依赖项）直接放进 `server_mods/` 即可。服务器启动时会递归扫描该目录下的 `.dll` 文件，加载其中包含模组类的程序集。

```text title="server_mods/ 目录结构示例"
server_mods/
├── WukongMp.Sdk.Serverside.dll     # 服务器端 SDK，随服务器一同分发
├── ReadyM.Wukong.Common.dll        # 共享的组件与 RPC 定义
├── WukongMp.Coop.Serverside.dll    # 联机合作模组，服务器端
├── WukongMp.Coop.Common.dll        # 联机合作模组，共享契约
└── MyServerMod.dll                 # 你的服务器端模组
```

除上面列出的模组之外，服务器本身不带任何游戏逻辑。你可以自己写一个服务器端模组，或者安装社区制作的模组。

:::important

服务器端模组和它对话的客户端模组是同一件东西的两半。它们的网络化组件形状和 RPC 契约必须一致，所以请把它们作为同一个包的同一版本一起发布：客户端一半放进 `mods/`，服务器端一半放进 `server_mods/`。

:::

服务器端模组可以注册网络化 ECS 组件、在服务器 tick 上运行游戏系统，以及处理客户端发来的服务器 RPC。构建方法请参见[服务器端开发](../Server-development/getting-started)文档。

:::danger[安全提示]

WukongMP SDK 与服务器的早期访问版本不包含任何针对模组的沙箱或安全机制。

只使用来自可信来源的模组，因为它们可以在服务器和已连接的客户端上执行任意代码。

绝不要在服务器上运行不可信的模组，尤其是当服务器可以公开访问时。

:::
