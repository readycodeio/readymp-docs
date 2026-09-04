---
sidebar_position: 2
---

# 模组清单

每个模组的文件夹根目录下都有一个 `manifest.json`。正是它让这个文件夹成为一个模组，而不是一个装着 DLL 的普通文件夹，它还携带着加载器所需的身份信息和依赖信息。

清单位于模组两侧之上，由两侧共用：

```text
MyMod/
├── manifest.json
├── client/
└── server/
```

一份清单描述整个模组，无论它只有客户端一半、只有服务器一半，还是两侧都有。服务器端模组从 `0.4.0` 起才有清单，在那之前它们只是一堆散落的程序集，完全没有身份信息。

一个示例 `manifest.json` 文件如下所示：

```json title="manifest.json"
{
  "uniqueId": "WukongMp.Coop",
  "version": "0.4.0",
  "name": "WukongMp Co-op",
  "author": "ReadyM Team",
  "link": "https://docs.ready.mp",
  "description": "The co-op mod for WukongMp, allowing players to team up and play together through the main story mode.",
  "dependencies": [
    {
      "uniqueId": "WukongMp.Sdk",
      "minimumVersion": "0.4.0"
    }
  ]
}
```

请参阅下表，了解清单文件中各字段的描述。

| 表单字段 | 类型 | 可选 | 描述 |
| ----- | ---- | -------- | ----------- |
| `uniqueId` | string | 否 | 模组的唯一标识符。只能包含字母数字字符、`.` 或 `_` |
| `version` | string | 否 | 模组版本，采用 `MAJOR.MINOR.PATCH` 格式。 |
| `name` | string | 否 | 模组名称，将在服务器管理门户和启动器中显示。 |
| `author` | string | 否 | 模组作者，将在服务器管理门户和启动器中显示。 |
| `link` | string | **是** | 模组的一个 URL，显示在名称旁边。 |
| `description` | string | **是** | 该模组的简短描述。 |
| `dependencies` | 对象数组 | **是** | 为使你的模组正常工作所需的其他模组列表。每个依赖项必须指定所需模组的 `uniqueId`，以及一个 `minimumVersion`。 |

几乎每个模组都依赖 SDK，它的 `uniqueId` 是 `WukongMp.Sdk`。请把 `minimumVersion` 设为你构建时所依据的 SDK 版本。

## 依赖与加载顺序

服务器会在加载任何东西之前解析依赖，并用它们推算加载顺序：一个模组总是在它所依赖的一切之后加载。无法解析的依赖，或者版本低于你的 `minimumVersion`，都是错误。

:::info[模组之间的依赖]

你可以做纯客户端模组、纯服务器端模组，也可以做两侧都有的完整模组，而它们之间的依赖在各个方向上都行得通。纯客户端模组依赖纯服务器端模组是可以的，反过来也一样。

:::
